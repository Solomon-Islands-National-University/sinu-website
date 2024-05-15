# SINU Website - Official

This is the repository for the re-imagined [Solomon Islands National University](https://sinu.edu.sb) website. It is in active development (March 2024 - present).

## Codebase Structure

Codebases maintained in this repository:

1. A [wagtail](https://docs.wagtail.org/en/stable/)-based headless CMS backend (utilIzing wagtail's V2 API).
2. A frontend built with [Nextjs](https://nextjs.org) and [tailwind](https://tailwindcss.com/).

## Container Architecture

This project fully leverages docker containerization. 

There are four services (a.k.a. containers) specified in the root `docker-compose.yml` file.

1. `nginx` - serves as a proxy for the application.
2. `db` - the database container.
3. `frontend` - the nextjs frontend client.
4. `backend` - the wagtail backend.

## Dev Setup

prereq: make sure you have Docker installed.

1. Clone this repository and navigate to the root.

2. Create a .env file and fill these variables.

```bash
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
```

3. Run the following commands

```bash
docker compose build
```
```bash
docker compose up -d
```

Peek the website: [http://localhost](http://localhost).

## Documentation

Refer to the `README.md` in each codebase for instructions on how to work within the codebase.

## Extras For Collaborators
Check out the documentations for [Next.js](https://nextjs.org/docs) and [tailwind CSS](https://tailwindcss.com/docs/installation).

Check out the documentation for [Wagtail](https://docs.wagtail.org/en/stable/).




