# Use the official PHP 8.2 FPM Alpine image as the base
FROM php:8.2-fpm-alpine

# Set the working directory inside the container
WORKDIR /var/www/html

# Install system dependencies and the pdo_mysql extension for MySQL
RUN apk add --no-cache \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo_mysql

# Install Composer (PHP package manager)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the application code to the container
COPY . /var/www/html

# Set appropriate permissions for Laravel's storage and cache directories
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose port 9000 for PHP-FPM
EXPOSE 9000

# Start PHP-FPM as the main process
CMD ["php-fpm"]
