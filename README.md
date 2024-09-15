# Nomo-Trek Mobile Automation

This project automates the login functionality of a mobile application using WebdriverIO, Appium, and Cucumber BDD. It supports both Android and iOS platforms, enabling comprehensive end-to-end testing.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Generating Allure Reports](#generating-allure-reports)

## Project Overview

The main objectives of this project are:

- Automate the login functionality for an Android/iOS mobile application.
- Test multiple login scenarios using the BDD approach (Cucumber).
- Generate detailed test reports using Allure.

**Note:** iOS automation is not included as it requires a macOS environment, which is currently not available.

## Prerequisites

- **Node.js** (version 14 or above)
- **Appium** (version 2.x.x)
- **Java JDK** (required for running Android emulators)
- **Android SDK** (for Android emulation)
- **iOS Setup** (Xcode and WebDriverAgent) for iOS testing (if applicable)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prakashbsamanta/nomo-trek.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd nomo-trek
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Project

1. **Run Tests on Android:**
   ```bash
   npm run test:android
   ```
   <!-- 2. **Run Tests on iOS:**
      ```bash
      npm run test:ios
      ``` -->

## Generating Allure Reports

**To open the report in a browser:**

```bash
    npx allure generate allure-results --clean && npx allure open
```
