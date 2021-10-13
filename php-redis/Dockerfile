FROM php:7.4-apache-buster
RUN apt update && apt -y install zip unzip git-all
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY . .

RUN composer update