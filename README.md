# eBanking Frontend (Angular)

This is the frontend part of the Digital Banking application. It is built with Angular and provides an interface to manage customers, bank accounts, and banking operations by consuming a Spring Boot REST API.

## Features

- Customer management (create, update, delete, search)
- Bank account management (current & savings accounts)
- Customer accounts overview
- Account operations (DEBIT / CREDIT)
- Navigation system (navbar)
- Integration with backend REST API
- Environment-based configuration

## Tech Stack

- Angular
- TypeScript
- Angular Router
- HttpClient
- RxJS
- Bootstrap (or UI framework used)
- Chart.js (if dashboard is included)

## Project Structure
```
src/
├── app/
│ ├── accounts/
│ ├── customer-accounts/
│ ├── customers/
│ ├── model/
│ ├── navbar/
│ ├── new-customer/
│ └── services/
└── environments/
```

## Services

The application uses Angular services to communicate with the backend API:

- CustomerService → manage customers
- AccountService → manage bank accounts
- OperationService → handle DEBIT / CREDIT operations

## Models

TypeScript models are used to represent backend entities such as:

- Customer
- BankAccount
- AccountOperation

## Configuration

API configuration is managed in:
```
src/app.config/
src/environments/
```
Example:
```ts
export const environment = {
  production: false,
  backendHost : "http://localhost:8085"
};
```

## Run project
```
npm install
ng serve
```
## Backend Requirement
This frontend requires the Spring Boot [backend](https://github.com/Elcadi-Hamza/digital-banking-backend) to be running:
```
http://localhost:8080
```
