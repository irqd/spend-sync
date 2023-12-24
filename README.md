# Spend Sync - An expense tracking app built with Laravel and Vue.js

## 1. About the Project

Spend Sync is an expense tracking app built with Laravel and Vue.js. It allows users to track their expenses and income, and provides a dashboard to visualize their spending habits. Inspired by a project by [Brad Traversy] (https://www.youtube.com/watch?v=hNPwdOZ3qFU). I decided to rebuild it with Laravel as the backend and Vue.js for the frontend.

### Key Features

- **Expense Tracking:** Users can track their expenses and income by adding transactions to the app.

- **Dashboard:** Users can view their spending habits on a dashboard.

- **Categories:** Users can categorize their transactions (income and expenses).
  
## 2. Technologies Used

- **Laravel:** Laravel is a popular PHP framework that provides an elegant syntax and tools for building web applications.

- **Vue.js:** Vue.js is a popular JavaScript framework for building user interfaces.

- **Pinia:** Pinia is a state management library for Vue.js.

- **Bootstrap:** A simple but powerful frontend toolkit providing already built components on the fly.

- **MySQL:** MySQL is a popular relational database management system used for storing data.

## 3. How to Set Up the Project

To set up the PostHub project, follow these steps:

1. **Clone the Repository:** Start by cloning the project repository from GitHub using the following command:

   ```shell
   https://github.com/irqd/livewire-datatable.git

2. **Install Dependencies:** Next, navigate to the project directories and install the project dependencies using the following command:

   ```shell
      cd backend
   ```

   ```shell
      composer install
   ```

   ```shell
      cd frontend
   ```
      
   ```shell
      npm install
   ```

3. **Set Up the Environment Variables:** Next, copy the `.env.example` file to `.env` and set up the environment variables for the backend.

   ```shell
      cp .env.example .env
   ```
   
   ```shell
      php artisan key:generate
   ```

4. **Run the Migrations:** Next, run the database migrations to create the required tables in the database.

   ```shell
      php artisan migrate --seed
   ```

5. **Run the Development Server:** Finally, start the development server to run the project.

   ```shell
      cd backend
      php artisan serve
   ```

   ```shell
      cd frontend
      npm run dev
   ```
   
6. **Visit the App:** Visit the app in your browser by navigating to `http://localhost:3000`.

## Sample Screenshots:

![project](https://github.com/irqd/spend-sync/assets/61367853/8a93d476-91a5-414c-805b-69f237c69bd5)
