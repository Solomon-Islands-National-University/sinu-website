# SINU website - official

This is the repository for the re-imagined [Solomon Islands National University](https://sinu.edu.sb) website. It is in active development (March 2024 - present).

## Codebase structure

Codebases maintained in this repository:

1. A [wagtail](https://docs.wagtail.org/en/stable/)-based headless CMS backend (utilIzing wagtail's V2 API).
2. A frontend built with [Nextjs](https://nextjs.org) and [tailwind](https://tailwindcss.com/).

## Local dev setup

**Prerequisite:**    
>-  make sure you have docker installed. Get [docker](https://www.docker.com/products/docker-desktop/). 

1. Clone this repository and navigate to the root.

2. Create a .env file and fill these variables.

```bash
DEBUG=True
CSRF_TRUSTED_ORIGINS=http://localhost
DB_NAME=db_site
DB_USER=db_admin
DB_PASSWORD=db_password
```

3. Run the following commands

```bash
docker compose build
```
```bash
docker compose up -d
```
Peek the frontend on [http://localhost](http://localhost), and the backend on [http://localhost/admin](http://localhost/admin), all behind the facade of an nginx proxy, which directs the traffic.

That is all the setup needed to get to started!

## Onto the code

In development (default compose.yml - which you ran above), you also get ports 3000 and 8000 to work in the frontend and backend, respectively. 

#### Frontend - Nextjs & Tailwind

Navigate to [http://localhost:3000](http://localhost:3000) to work on the frontend (nextjs). Hot-reloading is set up here.

#### Backend - wagtail V2 API
- Navigate to [http://localhost:8000/admin](http://localhost:8000) to login to the backend (wagtail).  
- Navigate to the pages endpoint [http://localhost:8000/api/v2/pages](http://localhost:8000). 
All custom endpoints will be made accessible like the pages endpoint.

_Hot-reloading is enabled when accessing the frontend and backend directly through these ports, bypassing the proxy. This is because bind mounts are set in the compose file to allow changes in each codebase to be reflected instanly in the containers. See your changes instantly as you work._

## Mimic the production environment

Kill the containers used in development, and run the commands below to see how the site will run in production.

```bash
docker compose -f compose.prod.yml build 
```

```bash
docker compose -f compose.prod.yml up -d
```

## Quick branching guideline

All work must be done on a separate branch from `main`, and then a pull request must be opened for the changes to be merged into `main`.

## CICD Pipeline

On merges to main (via a pull request), a github action is triggered which builds the images and pushes them to [ghcr.io](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages)  - Github's container registry. These images is what will be used in production. 

## Documentation

Refer to the `README.md` in each codebase for instructions on how to work within the codebase.

See the [wiki](https://github.com/Solomon-Islands-National-University/sinu-website/wiki) here for a thorough documentation; includes architecture, and a how-to guide for the site administrators.

## Extras For Collaborators
Check out the documentations for [Next.js](https://nextjs.org/docs) and [tailwind CSS](https://tailwindcss.com/docs/installation).

Check out the documentation for [Wagtail](https://docs.wagtail.org/en/stable/).




