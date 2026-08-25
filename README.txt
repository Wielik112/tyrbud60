TYRBUD | REMONTY WARSZAWA
Strona internetowa (wielostronowa) - wersja spersonalizowana
=============================================================

STRUKTURA PLIKÓW
- index.html        → Strona główna
- o-nas.html        → O nas (rodzinna firma)
- uslugi.html       → Usługi
- realizacje.html   → Realizacje (galeria 45 zdjęć + lightbox)
- proces.html       → Proces współpracy
- opinie.html       → Opinie klientów (prawdziwe, z Google)
- kontakt.html      → Kontakt + formularz + mapa
- assets/style.css  → Wspólny arkusz stylów
- assets/img/       → Wszystkie zdjęcia:
    • favicon.png        - ikona w karcie przeglądarki
    • znak.png / znak-light.png - znak logo (domek-T)
    • realizacje/1..45.jpg - galeria realizacji (Twoje zdjęcia)
    • tla/*.jpg          - tła (background) poszczególnych zakładek
    • przed.jpg / po.jpg - suwak przed/po
- sitemap.xml, robots.txt - SEO
- README.txt        → ten plik

JAK URUCHOMIĆ
Otwórz index.html w przeglądarce albo wgraj cały folder na hosting.
WAŻNE: zachowaj folder "assets" obok plików .html.

CO JUŻ JEST TWOJE (spersonalizowane)
- Wszystkie zdjęcia w galerii i w tłach to Twoje realizacje (zero stocków).
- Tła każdej zakładki są zdjęciami z galerii (klient je tam znajdzie).
- Teksty opierają się na prawdziwych opiniach z Google (firma rodzinna,
  pan Kamil, terminowość, pomoc w zakupach, ceny konkurencyjne na Warszawę).
- Opinie: prawdziwe recenzje klientów.
- Logo (znak) widoczne w hero obok napisu TYRBUD.
- Usługi: bez "remontów domów" i "remontów kuchni" - zamiast nich
  kompleksowe wykończenia wnętrz, instalacje, adaptacje lokali.

CO PODMIENIĆ PRZED PUBLIKACJĄ
1) FORMULARZ (Formspree) - w kontakt.html i index.html znajdź:
       action="https://formspree.io/f/YOUR_FORM_ID"
   Załóż konto na https://formspree.io i wstaw swój identyfikator.
2) FAVICON - jeden plik assets/img/favicon.png (możesz podmienić).
3) DOMENA W SEO - w <head> każdej strony oraz w sitemap.xml/robots.txt
   podmień tyrbud.pl na docelową domenę. Zgłoś sitemap w Google Search Console.

JAK DODAĆ KOLEJNE ZDJĘCIE DO GALERII
1. Wrzuć plik do assets/img/realizacje/ (np. 46.jpg).
2. W realizacje.html, w sekcji <div class="masonry" id="gallery">, dodaj:
   <button class="ph-item reveal" data-full="assets/img/realizacje/46.jpg"><img loading="lazy" src="assets/img/realizacje/46.jpg" alt="Realizacja Tyrbud" /></button>

Kontakt firmy: 600 027 299 · Dobra 31, 00-344 Warszawa
© 2026 Tyrbud | Remonty Warszawa


==============================================================
AUTOMATYCZNE OPINIE / SYNCHRONIZACJA Z PROFILEM GOOGLE
==============================================================

Klient poprosił, aby treści z profilu Google (opinie, zdjęcia,
aktualizacje) pojawiały się na stronie automatycznie.
Poniżej UCZCIWE wyjaśnienie: co jest przygotowane i możliwe,
a czego (i dlaczego) NIE da się zrobić za darmo.

--------------------------------------------------------------
CO JEST PRZYGOTOWANE NA STRONIE (gotowe do włączenia)
--------------------------------------------------------------
Na stronie Opinie (opinie.html) oraz na stronie głównej
(index.html) jest przygotowane MIEJSCE NA WIDŻET OPINII:
  - opinie.html:  <div id="google-reviews-widget">
  - index.html:   <div id="google-reviews-widget-home">
Wystarczy wkleić w to miejsce kod widżetu (instrukcja niżej),
a opinie z Google będą się aktualizować automatycznie.
Obecne, ręcznie wpisane opinie zostają jako zapas (fallback).

--------------------------------------------------------------
JAK WŁĄCZYĆ AUTOMATYCZNE OPINIE (za darmo, ~10 minut)
--------------------------------------------------------------
Polecany darmowy widżet: TRUSTINDEX (trustindex.io)
1. Wejdź na https://www.trustindex.io i załóż darmowe konto.
2. Wybierz "Google" i wyszukaj profil: "Remonty Warszawa - Tyrbud".
3. Wygeneruj widżet, skopiuj podany kod (2 linijki HTML).
4. Otwórz opinie.html, znajdź:
       <div id="google-reviews-widget">
   i wklej kod widżetu w środku (zamiast komentarza).
5. (Opcjonalnie) to samo w index.html w:
       <div id="google-reviews-widget-home">
6. Aby ukryć ręczne opinie po wpięciu widżetu, dodaj atrybut
   "hidden" do <div class="rev-page-grid"> (opinie.html)
   oraz do <div class="rev-grid"> (index.html).

Alternatywa: Elfsight (elfsight.com) - podobnie, plan darmowy
z limitem wyświetleń.

--------------------------------------------------------------
WARIANT PŁATNY: OPINIE + ZDJĘCIA AUTOMATYCZNIE (Elfsight)
--------------------------------------------------------------
Jeśli zależy Ci, aby ZDJĘCIA z profilu Google też pojawiały się
automatycznie (obok opinii), polecany jest Elfsight:
1. Wejdź na https://elfsight.com i załóż konto.
2. Wybierz widżet "Google Reviews" (opinie) oraz - jeśli chcesz
   zdjęcia - widżet galerii Google.
3. Wskaż profil "Remonty Warszawa - Tyrbud", wygeneruj kod.
4. Kod OPINII wklej w opinie.html do <div id="google-reviews-widget">
   (i opcjonalnie w index.html do <div id="google-reviews-widget-home">).
5. Kod ZDJĘĆ wklej w realizacje.html do:
       <div id="google-photos-widget">
6. Aby ukryć ręczną galerię po wpięciu widżetu, dodaj atrybut
   "hidden" do <div class="masonry" id="gallery">.

KOSZT Elfsight:
 - ok. 5 EUR/mies (~22 zł) - same opinie automatycznie
 - ok. 10 EUR/mies (~44 zł) - opinie + zdjęcia z Google
Działa na każdym hostingu (Vercel, FTP) - bez kodu serwerowego.

UWAGA (wizerunek premium): na profil Google trafiają zdjęcia
w różnej jakości (czasem robione telefonem lub przez klientów).
Automatyczna galeria pokaże wszystkie. Dla marki premium często
lepiej dodawać zdjęcia RĘCZNIE, wybierając tylko najlepsze
ujęcia (instrukcja "JAK DODAĆ KOLEJNE ZDJĘCIE" wyżej).

KOSZT: 0 zł na planie darmowym (z drobnym logo dostawcy).
       Zdjęcie loga / częstsze odświeżanie = ok. 8 EUR/mies.
Widżet działa na KAŻDYM hostingu (Vercel, FTP) - nie wymaga
żadnego kodu serwerowego.

--------------------------------------------------------------
GODZINY OTWARCIA / ADRES / TELEFON
--------------------------------------------------------------
Te dane są wpisane na stałe w kontakt.html i w stopce.
Zmieniają się rzadko - najprościej aktualizować je ręcznie.
(Automatyczne pobieranie z Google jest możliwe przez Places
API, ale wymaga konta Google Cloud z podpiętą kartą - patrz
niżej "czego nie da się za darmo".)

--------------------------------------------------------------
CZEGO NIE DA SIĘ ZROBIĆ ZA DARMO / AUTOMATYCZNIE (uczciwie)
--------------------------------------------------------------
Google celowo ogranicza automatyczny dostęp do danych profilu.
Poniższych rzeczy NIE da się w pełni zautomatyzować na zwykłym
hostingu plików bez kosztów i bez backendu:

1. AUTOMATYCZNE ZDJĘCIA Z PROFILU GOOGLE
   - Wymaga zamkniętego Google Business Profile API z
     weryfikacją właściciela profilu (trudne, czasochłonne).
   - Rozwiązanie praktyczne: zdjęcia realizacji dodajesz ręcznie
     do folderu assets/img/realizacje/ (instrukcja wyżej).

2. AUTOMATYCZNE WPISY / AKTUALIZACJE / WYDARZENIA (Google Posts)
   - API do tego jest mocno ograniczone i zawodne.
   - Nie ma darmowego, stabilnego sposobu, by wpisy z Google
     pojawiały się same na stronie.

3. WSZYSTKIE OPINIE (pełna historia)
   - Darmowe Google Places API zwraca tylko 5 najnowszych opinii.
   - Pełną listę pokazują dopiero płatne widżety (Trustindex itp.).

4. PLACES API (godziny/dane na żywo)
   - Ma darmowy limit, ale Google WYMAGA podpięcia karty do
     konta Google Cloud (nawet jeśli nie przekroczysz darmowej
     puli). Dlatego nie wpięliśmy tego domyślnie.

PODSUMOWANIE: Realnie, bezpłatnie i automatycznie da się
zsynchronizować OPINIE (widżet Trustindex). Reszta (zdjęcia,
wpisy, wydarzenia) wymaga ręcznej aktualizacji albo płatnych
narzędzi - to ograniczenie Google, nie strony.
