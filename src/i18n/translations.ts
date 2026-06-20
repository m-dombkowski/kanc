export type Lang = 'pl' | 'en'

const t = {
  pl: {
    // ── Navbar ──────────────────────────────────────────────
    nav: {
      firmName: 'KANCELARIA',
      about: 'O kancelarii',
      practice: 'Zakres praktyki',
      contact: 'Kontakt',
      bottomBar: 'Kancelaria Radcy Prawnego · Jacek Dombkowski',
      subtitle: 'Radcy Prawnego Jacek Dombkowski',
    },

    // ── Home ────────────────────────────────────────────────
    home: {
      heroBadge: 'Kancelaria Radcy Prawnego Jacek Dombkowski',
      heroH1a: 'Prawo',
      heroH1b: 'w służbie',
      heroH1c: 'Twojego interesu.',
      heroDesc:
        'Zapewniamy kompleksową, rzetelną i merytoryczną obsługę prawną osobom fizycznym i przedsiębiorcom. Wieloletnie doświadczenie, najwyższy poziom staranności oraz dyskrecja na każdym etapie sprawy.',
      heroCtaPrimary: 'Skonsultuj sprawę',
      heroCtaSecondary: 'Zakres praktyki',
      heroScroll: 'Przewiń',
      introBadge: 'Jacek Dombkowski',
      introH2a: 'Radca prawny z wieloletnim doświadczeniem w obsłudze',
      introH2b: 'przedsiębiorców i osób fizycznych.',
      introDesc:
        'Kancelaria oferuje kompleksową obsługę prawną, łącząc dogłębną znajomość prawa z praktycznym podejściem do każdej sprawy. Rzetelność, dyskrecja i skuteczność to wartości, na których budujemy długotrwałe relacje z Klientami.',
      introLink: 'Poznaj kancelarię',
      practiceFullList: 'Pełna lista',
      ctaH2a: 'Masz pytanie prawne?',
      ctaH2b: 'Porozmawiajmy.',
      ctaBtn: 'Umów bezpłatną konsultację',
    },

    // ── About ────────────────────────────────────────────────
    about: {
      badge: 'O kancelarii',
      h1a: 'Doświadczenie',
      h1b: 'i zaangażowanie.',
      desc1:
        'Kancelaria świadczy usługi prawne na najwyższym poziomie, łącząc dogłębną znajomość prawa z praktycznym doświadczeniem zdobytym w toku wieloletniej pracy zawodowej. Reprezentujemy Klientów zarówno przed sądami powszechnymi, w postępowaniach administracyjnych i sądowo administracyjnych jak również przed Krajową Izbą Odwoławczą.',
      desc2:
        'Stawiamy na długofalowe relacje oparte na zaufaniu i przejrzystości. Każdy Klient otrzymuje jasną informację o stanie sprawy, realnych możliwościach i potencjalnych ryzykach.',
      valuesBadge: 'Wartości',
      values: [
        {
          title: 'Rzetelność',
          desc: 'Każdą sprawę traktujemy z pełnym zaangażowaniem — niezależnie od jej skali.',
        },
        {
          title: 'Dyskrecja',
          desc: 'Zachowanie tajemnicy zawodowej i poufności powierzonych informacji to absolutny priorytet.',
        },
        {
          title: 'Skuteczność',
          desc: 'Nasze działania są ukierunkowane na osiągnięcie najlepszego możliwego rezultatu dla Klienta.',
        },
        {
          title: 'Komunikacja',
          desc: 'Klient zawsze wie, na jakim etapie jest sprawa. Bez prawniczego żargonu, jasno i na czas.',
        },
      ],
      teamBadge: 'Zespół',
      teamName: 'Jacek Dombkowski',
      teamRole: 'Radca Prawny',
      bio1: 'Radca prawny z wieloletnim stażem zawodowym. Specjalizuje się w kompleksowej obsłudze prawnej przedsiębiorców, podmiotów prywatnych i publicznych, oraz klientów indywidualnych. W swojej praktyce koncentruje się przede wszystkim na prawie cywilnym, gospodarczym, administracyjnym, prawie pracy, prawie zamówień publicznych oraz prawie medycznym.',
      bio2: 'Posiada wieloletnie doświadczenie w kompleksowej obsłudze prawnej spółek, w tym notowanych na Giełdzie Papierów Wartościowych.',
      bio3: 'Świadczy pomoc prawną zarówno na etapie bieżącego doradztwa, jak i w postępowaniach sądowych, administracyjnych. Reprezentuje klientów przed sądami powszechnymi, organami administracji publicznej, Krajową Izbą Odwoławczą oraz innymi instytucjami właściwymi dla rozpatrzenia sprawy.',
      bio4: 'W swojej praktyce stawia na praktyczne podejście do problemów prawnych oraz poszukiwanie rozwiązań odpowiadających celom biznesowym klienta.',
      credentials: [
        'Absolwent Wydziału Prawa i Administracji Uniwersytetu Śląskiego',
        'Studia podyplomowe „Prawo zamówień publicznych" na Uniwersytecie Jagiellońskim oraz „Doradztwo podatkowe" na Uniwersytecie Ekonomicznym w Krakowie',
        'Wpisany na listę radców prawnych Okręgowej Izby Radców Prawnych w Krakowie',
      ],
      contactCta: 'Skontaktuj się',
    },

    // ── Practice ─────────────────────────────────────────────
    practice: {
      badge: 'Zakres praktyki',
      h1a: 'Dziedziny,',
      h1b: 'w których pomagamy.',
      hint: 'Kliknij obszar, aby zobaczyć szczegółowy zakres usług.',
      ctaNote: 'Nie widzisz swojej dziedziny? Skontaktuj się — chętnie ocenimy możliwości pomocy.',
      ctaBtn: 'Skontaktuj się',
      areas: [
        {
          title: 'Prawo cywilne',
          intro: 'Kompleksowa obsługa w zakresie sporów sądowych, odszkodowań i prawa zobowiązań.',
          details: [
            'Prawo rzeczowe w tym spory o stwierdzenie i naruszenie własności',
            'Prawo spadkowe i zachowek',
            'Ochrona dóbr osobistych',
            'Dochodzenie roszczeń odszkodowawczych',
            'Spory o zapłatę i egzekucja należności',
            'Przygotowanie i kompleksowa obsługa umów',
          ],
        },
        {
          title: 'Prawo gospodarcze',
          intro: 'Obsługa prawna przedsiębiorców — od zakładania spółek po spory korporacyjne.',
          details: [
            'Zakładanie i rejestracja spółek',
            'Kompleksowa bieżąca obsługa przedsiębiorców',
            'Sporządzanie i weryfikacja umów handlowych',
            'Spory korporacyjne i między wspólnikami',
            'Upadłość konsumencka i likwidacja',
          ],
        },
        {
          title: 'Prawo pracy',
          intro: 'Reprezentacja pracowników i pracodawców w sporach ze stosunku pracy.',
          details: [
            'Odwołania od wypowiedzenia i rozwiązania umów',
            'Roszczenia z tytułu dyskryminacji i mobbingu',
            'Wypadki przy pracy i odszkodowania',
            'Regulaminy pracy i wynagradzania',
            'Układy zbiorowe pracy',
          ],
        },
        {
          title: 'Prawo administracyjne',
          intro: 'Reprezentacja przed organami administracji publicznej i sądami administracyjnymi.',
          details: [
            'Odwołania i skargi od decyzji administracyjnych',
            'Postępowania przed WSA i NSA',
            'Prawo budowlane i zagospodarowanie przestrzenne',
            'Postępowania o wydanie pozwoleń i zezwoleń',
            'Odszkodowania za bezprawne działania organów',
          ],
        },
        {
          title: 'Zamówienia publiczne',
          intro: 'Wsparcie wykonawców i zamawiających na każdym etapie postępowania przetargowego.',
          details: [
            'Przygotowanie ofert i dokumentacji przetargowej',
            'Odwołania do Krajowej Izby Odwoławczej (KIO)',
            'Skargi na orzeczenia KIO do sądu',
            'Doradztwo dla wykonawców i zamawiających publicznych',
            'Umowy w sprawie zamówienia publicznego',
          ],
        },
        {
          title: 'Prawo medyczne',
          intro: 'Obsługa podmiotów z branży medycznej, farmaceutycznej i kosmetologicznej.',
          details: [
            'Prawo wyrobów medycznych oraz produktów biobójczych',
            'Prawo farmaceutyczne',
            'Doradztwo w zakresie prowadzenia gabinetów kosmetologicznych',
            'Prawo suplementów diety',
            'Spory z podmiotami leczniczymi',
          ],
        },
        {
          title: 'Prawo budowlane',
          intro: 'Obsługa prawna procesu inwestycyjnego — od analizy umów po spory z organami.',
          details: [
            'Bieżąca obsługa prawna inwestorów',
            'Analiza umów',
            'Analiza dokumentacji',
            'Polubowne środki rozwiązywania sporów inwestycyjnych',
            'Kontakt i zastępstwo przed organami budowlanymi',
          ],
        },
        {
          title: 'Prawo własności intelektualnej',
          intro: 'Ochrona praw autorskich i własności intelektualnej w działalności gospodarczej.',
          details: [
            'Przygotowanie i analiza umów, w tym umów licencyjnych',
            'Bieżące doradztwo i zastępstwo w sporach',
            'Przygotowanie regulaminów i dokumentacji wewnętrznej',
          ],
        },
      ],
    },

    // ── Contact ───────────────────────────────────────────────
    contact: {
      badge: 'Kontakt',
      h1a: 'Porozmawiajmy',
      h1b: 'o Twojej sprawie.',
      intro:
        'Pierwsza konsultacja pozwala ocenić sytuację prawną i zaproponować najlepsze rozwiązanie. Skontaktuj się telefonicznie, mailowo lub wypełnij formularz — odpowiemy w ciągu 24 godzin.',
      infoLabels: {
        phone: 'Telefon',
        email: 'E-mail',
        address: 'Adres',
        hours: 'Godziny przyjęć',
      },
      hoursValue: 'Pn–Pt: 9:00–17:00\nSoboty: po uzgodnieniu',
      formTitle: 'Formularz kontaktowy',
      labelName: 'Imię i nazwisko *',
      labelPhone: 'Telefon',
      labelEmail: 'Adres e-mail *',
      labelArea: 'Obszar prawa',
      areaPlaceholder: 'Wybierz dziedzinę…',
      areaOptions: [
        'Prawo cywilne',
        'Prawo gospodarcze',
        'Prawo pracy',
        'Prawo administracyjne',
        'Zamówienia publiczne',
        'Prawo medyczne',
        'Prawo budowlane',
        'Prawo własności intelektualnej',
        'Inne',
      ],
      labelMessage: 'Opis sprawy *',
      messagePlaceholder: 'Krótki opis sytuacji prawnej…',
      rodo: 'Wyrażam zgodę na przetwarzanie moich danych osobowych przez Kancelarię Radcy Prawnego Jacek Dombkowski w celu udzielenia odpowiedzi na przesłane zapytanie. Dane są objęte tajemnicą zawodową.',
      submitIdle: 'Wyślij zapytanie',
      submitSending: 'Wysyłanie…',
      submitSent: 'Wysłano',
      successMsg: 'Dziękujemy za wiadomość. Odpowiemy najszybciej, jak to możliwe.',
      errorMsg: 'Wystąpił błąd podczas wysyłania. Prosimy o kontakt mailowy: kontakt@dombkowskikancelaria.pl',
    },

    // ── Footer ────────────────────────────────────────────────
    footer: {
      tagline: 'Profesjonalna pomoc prawna dla osób fizycznych i przedsiębiorców.',
      sectionPractice: 'Praktyka',
      sectionFirm: 'Kancelaria',
      sectionDocs: 'Dokumenty',
      firmLinks: [
        { label: 'O kancelarii', to: '/o-kancelarii' },
        { label: 'Kontakt', to: '/kontakt' },
      ],
      docsLinks: [
        { label: 'Polityka prywatności', to: '/polityka-prywatnosci' },
        { label: 'Cookies', to: '/cookies' },
        { label: 'RODO', to: '/rodo' },
      ],
      newsletterLabel: 'Newsletter',
      newsletterPlaceholder: 'Twój adres e-mail',
      newsletterConsent: 'Zapisując się wyrażasz zgodę na otrzymywanie informacji od Kancelarii. Możesz wypisać się w każdej chwili.',
      newsletterSuccess: 'Dziękujemy! Sprawdź skrzynkę i potwierdź zapis klikając w link w wiadomości.',
      newsletterError: 'Zapis nie powiódł się. Spróbuj ponownie później.',
      newsletterAriaLabel: 'Zapisz się do newslettera',
      copyright: (year: number) =>
        `© ${year} Kancelaria Radcy Prawnego Jacek Dombkowski. Wszelkie prawa zastrzeżone.`,
      oirp: 'Wpis na listę radców prawnych OIRP w Krakowie',
    },

    // ── Cookie Banner ─────────────────────────────────────────
    cookie: {
      text: 'Strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania serwisu. Korzystając ze strony, wyrażasz zgodę na ich stosowanie zgodnie z',
      privacyLink: 'polityką prywatności',
      decline: 'Odrzuć',
      accept: 'Akceptuję',
    },

    // ── Newsletter Toast ──────────────────────────────────────
    toast: {
      closeLabel: 'Zamknij',
      heading: 'Bądź na bieżąco',
      body: 'Zapisz się do newslettera, aby otrzymywać praktyczne informacje prawne.',
      cta: 'Zapisz się',
    },

    // ── Practice pills (Home) ─────────────────────────────────
    practiceShort: [
      'Prawo cywilne',
      'Prawo gospodarcze',
      'Prawo pracy',
      'Prawo administracyjne',
      'Zamówienia publiczne',
      'Prawo medyczne',
      'Prawo budowlane',
      'Prawo własności intelektualnej',
    ],
  },

  // ════════════════════════════════════════════════════════════
  en: {
    nav: {
      firmName: 'LAW OFFICE',
      about: 'About',
      practice: 'Practice Areas',
      contact: 'Contact',
      bottomBar: 'Law Office of Attorney-at-Law Jacek Dombkowski',
      subtitle: 'Attorney-at-Law Jacek Dombkowski',
    },

    home: {
      heroBadge: 'Law Office of Attorney-at-Law Jacek Dombkowski',
      heroH1a: 'Law',
      heroH1b: 'in service of',
      heroH1c: 'your interests.',
      heroDesc:
        'We provide comprehensive, reliable and professional legal services to individuals and businesses. Years of experience, the highest standards of diligence and discretion at every stage of your case.',
      heroCtaPrimary: 'Consult your case',
      heroCtaSecondary: 'Practice areas',
      heroScroll: 'Scroll',
      introBadge: 'Jacek Dombkowski',
      introH2a: 'Attorney-at-Law with years of experience serving',
      introH2b: 'businesses and private clients.',
      introDesc:
        'The firm offers comprehensive legal services, combining in-depth knowledge of the law with a practical approach to every case. Integrity, discretion and effectiveness are the values on which we build lasting relationships with our clients.',
      introLink: 'Learn about us',
      practiceFullList: 'Full list',
      ctaH2a: 'Have a legal question?',
      ctaH2b: "Let's talk.",
      ctaBtn: 'Schedule a free consultation',
    },

    about: {
      badge: 'About',
      h1a: 'Experience',
      h1b: 'and commitment.',
      desc1:
        'The firm delivers legal services at the highest level, combining thorough knowledge of the law with practical experience gained over many years of professional work. We represent clients before common courts, in administrative and administrative-court proceedings, as well as before the National Appeals Chamber.',
      desc2:
        'We focus on long-term relationships built on trust and transparency. Every client receives clear, jargon-free information about the status of their case, realistic options and potential risks.',
      valuesBadge: 'Values',
      values: [
        {
          title: 'Integrity',
          desc: 'We approach every case with full commitment — regardless of its scale.',
        },
        {
          title: 'Discretion',
          desc: 'Maintaining professional secrecy and the confidentiality of all entrusted information is our absolute priority.',
        },
        {
          title: 'Effectiveness',
          desc: 'Our actions are focused on achieving the best possible outcome for the client.',
        },
        {
          title: 'Communication',
          desc: 'The client always knows where their case stands — no legal jargon, clear and timely updates.',
        },
      ],
      teamBadge: 'Team',
      teamName: 'Jacek Dombkowski',
      teamRole: 'Attorney-at-Law',
      bio1: 'Attorney-at-law with extensive professional experience. He specialises in comprehensive legal services for entrepreneurs, private and public entities, and individual clients. His practice focuses primarily on civil law, commercial law, administrative law, labour law, public procurement law and medical law.',
      bio2: 'He has years of experience in providing comprehensive legal services to companies, including those listed on the Warsaw Stock Exchange.',
      bio3: 'He provides legal assistance both at the advisory stage and in court and administrative proceedings. He represents clients before common courts, public administration authorities, the National Appeals Chamber and other institutions competent to hear a given matter.',
      bio4: 'In his practice he emphasises a practical approach to legal problems and seeks solutions that align with the client\'s business objectives.',
      credentials: [
        'Graduate of the Faculty of Law and Administration, University of Silesia',
        'Postgraduate studies in "Public Procurement Law" at Jagiellonian University and "Tax Advisory" at the Kraków University of Economics',
        'Registered on the list of legal counsels of the Regional Chamber of Legal Counsels in Kraków',
      ],
      contactCta: 'Get in touch',
    },

    practice: {
      badge: 'Practice Areas',
      h1a: 'Fields',
      h1b: 'where we help.',
      hint: 'Click an area to see the detailed scope of services.',
      ctaNote: "Don't see your area? Contact us — we'll be happy to assess how we can help.",
      ctaBtn: 'Contact us',
      areas: [
        {
          title: 'Civil Law',
          intro: 'Comprehensive support in litigation, damages claims and contract law.',
          details: [
            'Property law, including disputes over ownership rights',
            'Inheritance law and reserved shares',
            'Protection of personal rights',
            'Pursuing compensation claims',
            'Payment disputes and debt enforcement',
          ],
        },
        {
          title: 'Commercial Law',
          intro: 'Legal services for businesses — from company formation to corporate disputes.',
          details: [
            'Company formation and registration',
            'Ongoing comprehensive legal support for entrepreneurs',
            'Drafting and reviewing commercial contracts',
            'Corporate disputes and shareholder conflicts',
            'Consumer insolvency and liquidation',
          ],
        },
        {
          title: 'Labour Law',
          intro: 'Representation of employees and employers in employment disputes.',
          details: [
            'Appeals against notice and termination of contracts',
            'Discrimination and mobbing claims',
            'Workplace accidents and compensation',
            'Work regulations and remuneration policies',
            'Collective bargaining agreements',
          ],
        },
        {
          title: 'Administrative Law',
          intro: 'Representation before public authorities and administrative courts.',
          details: [
            'Appeals and complaints against administrative decisions',
            'Proceedings before regional and supreme administrative courts',
            'Construction law and spatial planning',
            'Permit and licence proceedings',
            'Compensation for unlawful acts of public authorities',
          ],
        },
        {
          title: 'Public Procurement',
          intro: 'Support for contractors and contracting authorities at every stage of tender proceedings.',
          details: [
            'Preparing bids and tender documentation',
            'Appeals to the National Appeals Chamber (KIO)',
            'Court challenges to KIO decisions',
            'Advisory services for contractors and public contracting authorities',
            'Public procurement contracts',
          ],
        },
        {
          title: 'Medical Law',
          intro: 'Legal services for entities in the medical, pharmaceutical and cosmetic sectors.',
          details: [
            'Medical devices and biocidal products law',
            'Pharmaceutical law',
            'Advisory for cosmetic clinics and beauty practices',
            'Dietary supplements law',
            'Disputes with healthcare providers',
          ],
        },
        {
          title: 'Construction Law',
          intro: 'Legal support throughout the investment process — from contract analysis to disputes with authorities.',
          details: [
            'Ongoing legal support for investors',
            'Contract analysis',
            'Documentation review',
            'Alternative dispute resolution in investment disputes',
            'Representation before building authorities',
          ],
        },
        {
          title: 'Intellectual Property Law',
          intro: 'Protection of copyright and intellectual property in business activities.',
          details: [
            'Drafting and analysing contracts, including licence agreements',
            'Ongoing advisory and representation in disputes',
            'Drafting regulations and internal documentation',
          ],
        },
      ],
    },

    contact: {
      badge: 'Contact',
      h1a: "Let's talk",
      h1b: 'about your case.',
      intro:
        'An initial consultation allows us to assess your legal situation and propose the best solution. Contact us by phone, email or fill in the form — we will respond within 24 hours.',
      infoLabels: {
        phone: 'Phone',
        email: 'E-mail',
        address: 'Address',
        hours: 'Office hours',
      },
      hoursValue: 'Mon–Fri: 9:00–17:00\nSaturdays: by arrangement',
      formTitle: 'Contact form',
      labelName: 'Full name *',
      labelPhone: 'Phone',
      labelEmail: 'E-mail address *',
      labelArea: 'Area of law',
      areaPlaceholder: 'Select an area…',
      areaOptions: [
        'Civil Law',
        'Commercial Law',
        'Labour Law',
        'Administrative Law',
        'Public Procurement',
        'Medical Law',
        'Construction Law',
        'Intellectual Property Law',
        'Other',
      ],
      labelMessage: 'Description of matter *',
      messagePlaceholder: 'Brief description of your legal situation…',
      rodo: 'I consent to the processing of my personal data by the Law Office of Jacek Dombkowski for the purpose of responding to my enquiry. The data is covered by professional secrecy.',
      submitIdle: 'Send enquiry',
      submitSending: 'Sending…',
      submitSent: 'Sent',
      successMsg: 'Thank you for your message. We will respond as soon as possible.',
      errorMsg: 'An error occurred while sending. Please contact us directly at: kontakt@dombkowskikancelaria.pl',
    },

    footer: {
      tagline: 'Professional legal assistance for individuals and businesses.',
      sectionPractice: 'Practice',
      sectionFirm: 'Firm',
      sectionDocs: 'Documents',
      firmLinks: [
        { label: 'About', to: '/o-kancelarii' },
        { label: 'Contact', to: '/kontakt' },
      ],
      docsLinks: [
        { label: 'Privacy Policy', to: '/polityka-prywatnosci' },
        { label: 'Cookies', to: '/cookies' },
        { label: 'GDPR', to: '/rodo' },
      ],
      newsletterLabel: 'Newsletter',
      newsletterPlaceholder: 'Your e-mail address',
      newsletterConsent: 'By subscribing you agree to receive information from the firm. You can unsubscribe at any time.',
      newsletterSuccess: 'Thank you! Check your inbox and confirm your subscription by clicking the link in the email.',
      newsletterError: 'Subscription failed. Please try again later.',
      newsletterAriaLabel: 'Subscribe to newsletter',
      copyright: (year: number) =>
        `© ${year} Law Office of Jacek Dombkowski. All rights reserved.`,
      oirp: 'Registered with the Regional Chamber of Legal Counsels in Kraków',
    },

    cookie: {
      text: 'This website uses cookies to ensure proper functioning of the service. By using the site, you consent to their use in accordance with the',
      privacyLink: 'privacy policy',
      decline: 'Decline',
      accept: 'Accept',
    },

    toast: {
      closeLabel: 'Close',
      heading: 'Stay informed',
      body: 'Subscribe to our newsletter to receive practical legal updates.',
      cta: 'Subscribe',
    },

    practiceShort: [
      'Civil Law',
      'Commercial Law',
      'Labour Law',
      'Administrative Law',
      'Public Procurement',
      'Medical Law',
      'Construction Law',
      'Intellectual Property Law',
    ],
  },
}

export default t
