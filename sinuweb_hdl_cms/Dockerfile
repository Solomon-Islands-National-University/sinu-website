# Use an official Python runtime based on Debian 10 "buster" as a parent image.
FROM python:3.11-slim

# Add user that will be used in the container.
RUN useradd wagtail

# Set environment variables.
# 1. Force Python stdout and stderr streams to be unbuffered.
ENV PYTHONUNBUFFERED=1 

# Install system packages required by Wagtail and Django.
RUN apt-get update --yes --quiet && apt-get install --yes --quiet --no-install-recommends \
    build-essential \
    libpq-dev \
    libjpeg62-turbo-dev \
    zlib1g-dev \
    libwebp-dev \
 && rm -rf /var/lib/apt/lists/*

# Install the project requirements.
COPY requirements.txt /
RUN pip install -r /requirements.txt

# Use /app folder as a directory where the source code is stored.
WORKDIR /app

# Set this directory to be owned by the "wagtail" user. This Wagtail project
# uses SQLite, the folder needs to be owned by the user that
# will be writing to the database file.
RUN chown wagtail:wagtail /app

# Copy the source code of the project into the container.
COPY --chown=wagtail:wagtail . .

# Set permissions for /staticfiles directory
RUN mkdir -p /staticfiles && chown -R wagtail:wagtail /staticfiles
RUN mkdir -p /mediafiles && chown -R wagtail:wagtail /mediafiles

# Use user "wagtail" to run the build commands below and the server itself.
USER wagtail

EXPOSE 8000

# Collect static files.
RUN python manage.py collectstatic --noinput --clear

# Runtime command that executes when "docker run" is called, it does the
# following:
#   1. Migrate the database.
#   2. Start the application server.
# WARNING:
#   Migrating database at the same time as starting the server IS NOT THE BEST
#   PRACTICE. The database should be migrated manually or using the release
#   phase facilities of your hosting platform. This is used only so the
#   Wagtail instance can be started with a simple "docker run" command.
# Run migrations and then start Gunicorn
# CMD set -xe \
#     && python manage.py migrate --noinput \
#     && gunicorn --bind 0.0.0.0:8000 sinuweb_hdl_cms.wsgi:application
