[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/57GlzdR9)
# Moduły JavaScript ES6

> **_W katalogu głównym projektu stwórz katalog `zadania`. W nim umieść każde zadanie w osobnym katalogu: `zadanie1`, `zadanie2`, itd. Stosuj nazwy plików oraz funkcji, które są podane w treści zadania._**

## Ćwiczenia z modułami ES6

### Ćwiczenie 1: Prostokąt – klasy i moduły

1. Stwórz plik `rectangle.js`:

-   Zaimplementuj klasę `Rectangle`, która przyjmuje wymiary prostokąta (`width`, `height`) jako argumenty konstruktora.
    -   Dodaj metodę `area()`, która zwraca pole prostokąta.
    -   Dodaj metodę `perimeter()`, która zwraca obwód prostokąta.

Eksportuj klasę jako domyślny eksport.

W pliku `app.js` zaimportuj klasę `Rectangle` i utwórz obiekt prostokąta o wymiarach `5x10`. Oblicz jego pole i obwód.

### Ćwiczenie 2: Zarządzanie listą użytkowników

1. Stwórz plik `userManager.js`:

-   Zaimplementuj funkcje:
    -   `addUser(users, user)` – dodaje użytkownika (obiekt `{ id, name }`) do listy,
    -   `removeUser(users, id)` – usuwa użytkownika o podanym `id`,
    -   `findUser(users, id)` – zwraca użytkownika o podanym `id`.

Eksportuj wszystkie funkcje za pomocą eksportu nazwanego.

2. W pliku `app.js`:

-   Utwórz listę użytkowników jako tablicę,
-   Dodaj kilku użytkowników,
-   Usuń jednego użytkownika,
-   Znajdź użytkownika po `id`.

### Ćwiczenie 3: Operacje matematyczne w różnych plikach

1. Stwórz folder `math` z plikami:

-   `add.js` – eksportuje funkcję `add(a, b)`,
-   `subtract.js` – eksportuje funkcję `subtract(a, b)`,
-   `multiply.js` – eksportuje funkcję `multiply(a, b)`,
-   `divide.js` – eksportuje funkcję `divide(a, b)`.

2. W pliku `index.js` w folderze `math` zaimportuj wszystkie funkcje i eksportuj je w jednym obiekcie jako eksport domyślny.
3. W pliku `app.js` zaimportuj `index.js` i wykonaj kilka operacji matematycznych.
