# Invoice App (TypeScript)

A React Native application with TypeScript that displays invoices with polling, infinite scroll, and filtering capabilities.

## Features

- Type-safe implementation with TypeScript
- Fetch and display invoices from API  
- Auto-refresh every 5 seconds (polling)
- Infinite scroll loading
- Multi-select filters for status and cryptocurrency
- Clean and responsive UI
- Redux state management
- Custom hooks for data fetching

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FranMan731/invoice-app.git
   cd invoice-app

   npm install
   or
   yarn install

## Run the app

   ```bash
   npm start
   or
   yarn start
   ```

## App uses these enviroment variables

   ```bash
   API_URL=https://your-api-endpoint.com
   API_USERNAME=your_username
   API_PASSWORD=your_password
   USE_MOCK=true/false
   MOCK_DELAY_MS=300
   ```

## Project structure

   ```bash
   /src
      /components      # Reusable components
      /hooks          # Custom hooks
      /store          # Redux configuration
      /services       # API services
      /types          # TypeScript types
      /utils          # Utility functions
      /screens        # Main app screens
   ```