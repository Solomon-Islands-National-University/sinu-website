# Sinu Website 

This is the official repository for the re-imagined [Solomon Islands National University](https://sinu.edu.sb) website. It is in active development (March 2024 - present).

## Project Architecture

There are two parts to this project:

1. A [wagtail](https://docs.wagtail.org/en/stable/)-based headless CMS backend (utilIzing wagtail's V2 API).
2. A frontend built with [Nextjs](https://nextjs.org) and [tailwind](https://tailwindcss.com/).

Documentation to work in both parts of this project will be made available soon.

## Runs on my machine?

Yes, this project fully leverages [Docker](https://www.docker.com/). Currently, it utilizes four containers to run the website in its current state. Below, you'll find instructions on how to set it up on your local machine.

ps. this README.md will be updated as the docker architecture expands.


### steps

prereq: make sure you have Docker installed.

1. Clone this repository and navigate to the root.

2. Create a .env file and fill these variables.

`DB_NAME=your_db_name`

`DB_USER=your_db_user`

`DB_PASSWORD=your_db_password`


3. Run the following commands

```bash
docker compose build
```
```bash
docker compose up
```

Peek the website: [http://localhost](http://localhost).

## Extras For Collaborators
Check out the documentations for [Next.js](https://nextjs.org/docs) and [tailwind CSS](https://tailwindcss.com/docs/installation).

Check out the documentation for [Wagtail](https://docs.wagtail.org/en/stable/).




