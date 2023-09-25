# DecisionSupportSystem

Aplikacja internetowa dostarcza informacji i wspomaga wybór najlepszego rozwiązania w postaci proponowanego dla użytkownika samochodu z wykorzystaniem logiki rozmytej. Do zbudowania interfejsu użytkownika wykorzystany został Angular, czyli popularny framework JavaScript, który umożliwia tworzenie dynamicznych i responsywnych aplikacji internetowych. Do budowy części serwerowej wykorzystano Express.js, czyli minimalistyczny framework wykorzystujący platformę Node.js. Dostarcza on zestawu narzędzi i funkcji, które ułatwiają obsługę routingu, zarządzanie sesjami czy obsługę warstwy pośredniej oprogramowania. Express.js komunikuje się z bazą danych MongoDB, w celu przechowywania, pobierania i aktualizowania danych związanych z samochodami. 
 
Aby uruchomić serwer WWW i otworzyć aplikację w przeglądarce:
cd frontend, 
ng serve

Następnie:
cd backend,
npm start
Zostanie uruchomiony serwer WWW Node.js i będzie można przejść do http://localhost:4200

Użytkownik ma możliwość przeglądać listę samochodów z bazy danych oraz wypełnić folmularz pobierający preferowaną cenę, moc, przebieg, pojemność, rodzaj paliwa oraz skrzynię biegów samochodu. Dane te są wykorzystywane przez algorytm logiki rozmytej do wyboru najbardziej pasujących samochodów.
Po zalogowaniu jako administrator (login: admin, hasło: admin), pokazują się dodatkowe opcje jak podgląd wykresów funkcji przynależności czy dane z bazy danych.
