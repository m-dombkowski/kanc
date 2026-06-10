# Newsletter — instrukcja konfiguracji (MailerLite)

Strona ma w stopce formularz zapisu do newslettera. Adresy trafiają do usługi
**MailerLite**, z której wysyła się wiadomości do całej bazy. Poniżej kroki,
które trzeba wykonać jednorazowo, oraz krótka instrukcja codziennego użycia.

---

## 1. Założenie konta

1. Wejdź na **https://www.mailerlite.com** i kliknij **Sign up free**.
2. Zarejestruj się adresem **kontakt@dombkowskikancelaria.pl**.
3. MailerLite poprosi o uzupełnienie profilu (nazwa firmy, adres — wymagane
   prawem antyspamowym; adres pojawia się w stopce każdego newslettera).
4. Poczekaj na zatwierdzenie konta (zwykle do 24 h).

Darmowy plan: **1 000 subskrybentów i 12 000 e-maili miesięcznie** — w zupełności
wystarczy.

## 2. Weryfikacja domeny nadawczej (ważne!)

Aby wiadomości wychodziły z adresu @dombkowskikancelaria.pl i nie wpadały
w spam:

1. W MailerLite: **Account → Domains → Add domain** → wpisz
   `dombkowskikancelaria.pl`.
2. MailerLite pokaże kilka rekordów DNS (DKIM, SPF, ewent. DMARC).
3. Te rekordy trzeba dodać w panelu zarządzania domeną (tam, gdzie kupiona
   jest domena). W razie problemów — przekaż je administratorowi strony.
4. Po dodaniu rekordów kliknij **Verify** w MailerLite (propagacja DNS może
   potrwać do kilku godzin).

## 3. Włączenie double opt-in (potwierdzenie zapisu)

Formularz na stronie wysyła zapis w trybie „do potwierdzenia" — subskrybent
musi kliknąć link w mailu potwierdzającym. To standard zgodny z RODO.

1. W MailerLite: **Subscribers → Forms → Settings** (lub Account → Settings →
   Double opt-in) i upewnij się, że **Double opt-in jest włączony** dla zapisów
   przez API.
2. Treść maila potwierdzającego można edytować (np. przetłumaczyć na polski).

## 4. Wygenerowanie klucza API i przekazanie administratorowi

1. W MailerLite: **Integrations → MailerLite API → Generate new token**.
2. Nadaj nazwę np. `strona-www` i skopiuj wygenerowany klucz.
3. **Przekaż klucz administratorowi strony bezpiecznym kanałem** (nie mailem
   w zwykłej treści — najlepiej np. przez komunikator z szyfrowaniem lub
   menedżer haseł). Klucz daje dostęp do bazy subskrybentów.

Administrator umieści klucz w konfiguracji serwisu (Netlify → Environment
variables → `MAILERLITE_API_KEY`) — od tego momentu formularz na stronie
zacznie działać.

## 5. Codzienne użycie — wysyłka newslettera

1. Zaloguj się do MailerLite.
2. **Campaigns → Create campaign → Regular campaign**.
3. Wpisz temat wiadomości, wybierz odbiorców (domyślna lista — wszyscy
   potwierdzeni subskrybenci).
4. Ułóż treść w edytorze drag & drop (gotowe bloki: tekst, zdjęcia, przyciski).
5. **Send** od razu lub **Schedule** na wybrany termin.

Statystyki otwarć i kliknięć są w zakładce **Campaigns** po wysyłce.

## 6. Dobre praktyki / wymogi prawne

- W każdej wiadomości MailerLite automatycznie dodaje **link wypisu**
  (unsubscribe) — nie wolno go usuwać.
- Wysyłaj tylko do osób, które zapisały się przez formularz (nie dopisuj
  ręcznie adresów bez zgody).
- Subskrybentów można przeglądać i usuwać w zakładce **Subscribers**.

---

## Częste problemy

| Problem | Rozwiązanie |
|---|---|
| Formularz na stronie zwraca błąd | Sprawdź, czy klucz API został przekazany administratorowi i ustawiony w Netlify |
| Mail potwierdzający nie dochodzi | Sprawdź folder spam; upewnij się, że domena jest zweryfikowana (pkt 2) |
| Newslettery wpadają w spam | Dokończ weryfikację DKIM/SPF z pkt 2 |
| „Ten adres jest już zapisany" | Subskrybent już jest w bazie — nic nie trzeba robić |
