// Subscribes an e-mail address to the MailerLite audience.
// Requires the MAILERLITE_API_KEY environment variable (set in Netlify UI).

const MAILERLITE_API = 'https://connect.mailerlite.com/api/subscribers'

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  const apiKey = process.env.MAILERLITE_API_KEY
  if (!apiKey) {
    console.error('MAILERLITE_API_KEY is not set')
    return { statusCode: 500, body: JSON.stringify({ error: 'Newsletter nie jest jeszcze skonfigurowany.' }) }
  }

  let email
  try {
    email = JSON.parse(event.body || '{}').email
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Nieprawidłowe żądanie.' }) }
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Podaj prawidłowy adres e-mail.' }) }
  }

  try {
    const res = await fetch(MAILERLITE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        // 'unconfirmed' triggers MailerLite's double opt-in confirmation e-mail
        // when double opt-in is enabled in the MailerLite account settings.
        status: 'unconfirmed',
      }),
    })

    if (res.ok) {
      return { statusCode: 200, body: JSON.stringify({ ok: true }) }
    }

    const data = await res.json().catch(() => ({}))
    console.error('MailerLite error', res.status, data)

    if (res.status === 422) {
      return { statusCode: 422, body: JSON.stringify({ error: 'Ten adres jest już zapisany lub nieprawidłowy.' }) }
    }
    return { statusCode: 502, body: JSON.stringify({ error: 'Zapis nie powiódł się. Spróbuj ponownie później.' }) }
  } catch (err) {
    console.error('MailerLite request failed', err)
    return { statusCode: 502, body: JSON.stringify({ error: 'Zapis nie powiódł się. Spróbuj ponownie później.' }) }
  }
}
