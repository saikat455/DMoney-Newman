# Dmoney API Testing Collection

Welcome to the **Dmoney API Collection** repository! This project contains a Postman collection designed to test the Dmoney API, a financial service API used for managing users (e.g., agents, customers, merchants), transactions (e.g., deposits, withdrawals), and balances. The collection was developed as part of an assignment to automate API testing using Postman and Newman.

## Overview

The Dmoney API Collection includes a series of HTTP requests to perform CRUD operations and transactions on the Dmoney platform. It covers administrative tasks, user management, and financial transactions, with automated tests to validate responses. The project addresses challenges like phone number mismatches and GitHub push protection for sensitive data.

- **Base URL**: `http://dmoney.roadtocareer.net` (or `http://dmoneyportal.roadtocareer.net` depending on the environment)
- **Technology**: Postman, Newman, Git
- **Status**: Active development

## Features

- **Admin Login**: Authenticate as an admin to obtain a token.
- **User Management**: Create agents, customers, and merchants with random phone numbers.
- **Transactions**: Perform deposits, withdrawals, and payments between accounts.
- **Balance Checks**: Retrieve balances for agents, customers, and merchants.
- **Error Handling**: Test invalid logins, unauthorized access, and insufficient balance scenarios.
- **Automated Testing**: Includes test scripts for response validation using Postman and Newman.

## Prerequisites

- **Postman**: Install [Postman](https://www.postman.com/downloads/) to import and run the collection.
- **Node.js and Newman**: Install [Node.js](https://nodejs.org/) and Newman globally to run tests via command line:
  ```bash
  npm install -g newman

## Documentation
https://documenter.getpostman.com/view/33516761/2sB2x6jrSe

## Report
![image](https://github.com/user-attachments/assets/f2e1e984-b9f9-4147-8884-e064475ae152)
![image](https://github.com/user-attachments/assets/9c865697-2ac0-47a4-a39e-5c013a6fe08a)

