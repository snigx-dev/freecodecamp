# Build an RPG Creature Search App

In this project, you'll build an app that searches for RPG creatures by **name** or **ID** and displays their stats to the user. To retrieve creature data and images, you'll use freeCodeCamp's **RPG Creature API**.

> **Note:** The first 13 steps must be completed inside the `index.html` file.

---

## Objective
Build an app that is functionally similar to [RPG Creature Search App](https://rpg-creature-search-app.freecodecamp.rocks).

---

## User Stories

1. You should have an input element with an **id** of `search-input` (**required**).
2. You should have a button element with an **id** of `search-button`.
3. You should have elements with the following **ids** to display creature info:
    - `creature-name`
    - `creature-id`
    - `weight`
    - `height`
    - `types`
    - `hp`
    - `attack`
    - `defense`
    - `special-attack`
    - `special-defense`
    - `speed`

4. When `#search-input` contains **Red** and `#search-button` is clicked, show an alert:  
   **"Creature not found"**
5. When `#search-input` contains **Pyrolynx** and `#search-button` is clicked:
    - Fill the UI with the following values:
        - `#creature-name`: `PYROLYNX`
        - `#creature-id`: `#1` or `1`
        - `#weight`: `42`
        - `#height`: `32`
        - `#hp`: `65`
        - `#attack`: `80`
        - `#defense`: `50`
        - `#special-attack`: `90`
        - `#special-defense`: `55`
        - `#speed`: `100`
    - Add a single element within `#types` containing the text **FIRE**.
    - The `#types` element should be cleared between searches.

6. When `#search-input` contains **2** and `#search-button` is clicked:
    - Fill the UI with the following values:
        - `#creature-name`: `AQUOROC`
        - `#creature-id`: `#2` or `2`
        - `#weight`: `220`
        - `#height`: `53`
        - `#hp`: `85`
        - `#attack`: `90`
        - `#defense`: `120`
        - `#special-attack`: `60`
        - `#special-defense`: `70`
        - `#speed`: `40`
    - Add two elements within `#types` containing **WATER** and **ROCK**.
    - The `#types` element should be cleared between searches.

7. When `#search-input` contains an invalid creature name or ID, show an alert:  
   **"Creature not found"**

8. When `#search-input` contains a valid creature ID, the UI should be filled with the correct data automatically.

---

## Notes
- Fulfill all user stories and pass all tests to complete this project.
- Style the app to your preference.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-an-rpg-creature-search-app-project/build-an-rpg-creature-search-app

## How to Run
1. Clone this repository.
2. Open `index.html` in your browser.
3. Enter the **cash amount** and click **Purchase** to calculate change.