This is the official repository for the re-imagined [Solomon Islands National University](https://sinu.edu.sb) website. It is in active development (jan 2024 - aug 2024).

## Project Architecture

There are two parts to this project:

1. A [wagtail](https://docs.wagtail.org/en/stable/)-based headless CMS backend (utilIzing wagtail's V2 API).
2. A frontend built with [Nextjs](https://nextjs.org) and [tailwind](https://tailwindcss.com/).

Documentation to work in both parts of this project will be made available soon.

## Does it run on my machine?

Yes, this project fully leverages [Docker](https://www.docker.com/) for its functionality. Currently, it utilizes three containers to run the website in its current state. Below, you'll find instructions on how to set it up on your local machine.

ps. this README.md will be updated as the docker architecture expands.


### steps

prereq: make sure you have Docker installed.

Clone this repo and run the following commands

```bash
docker compose build
```
```bash
docker compose up
```

Access the frontend on [http://localhost:3000](http://localhost:3000).

Access the backend on [http://localhost](http://localhost:3000).


## Extras For Collaborators
Check out the documentations for [Next.js](https://nextjs.org/docs) and [tailwind](https://tailwindcss.com/docs/installation) tailwind.

Check out the documentation for [Wagtail](https://docs.wagtail.org/en/stable/).




