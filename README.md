# Fulhaus Backend Tech Assessment by Martin Halas

## Acronym CRUD API

## Scripts
### npm run start
Starts app on localhost:3000

### npm run seed
Seeds DB with seed data. Deletes existing data.

## API

`GET /acronym?page=1&limit=10&search=:search`

Fuzzy search acronyms and definitions, return all fuzzy-matched with search or all entries if search field is empty.

`POST /acronym`

Adds acronym to db. Requires acronym & definition string.

`PATCH /acronym/:acronymID`

Updates acronym at acronymID. Requires acronym & definition string.

`DELETE /acronym/:acronymID`

Deletes acronym at acronymID. Requires acronym & definition string.