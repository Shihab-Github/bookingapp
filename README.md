## Introduction

An attempt make an airbnb app clone using react native and expo
## Description

Tech stack used: 
  - The project has been scaffolded using Expo
  - Expo Router has been used to leverage file system based routing as this is a multi screen app
  - Typescript
  - Tanstack Query for data fetching, data caching and auto fetching
  - React Native Testing Library for unit test

## Dependency
I have also developed a backend for this project which can be found <a href="https://github.com/Shihab-Github/bookingapp-backend">here</a>. It is advised to get the backend
application up and running before running the mobile app. Because there are few functionalities such as, **create booking**, **edit booking** and **delete booking** which
will not work if the backend application is not running. More details can be here on the <a href="https://github.com/Shihab-Github/bookingapp-backend">repo</a>. 

## Installation

First, we need to install all the dependencies. 

```bash
$ npm install
```

## Running the app
I have used Expo Go to develop and test the app. You can find it on Play Store or AppStore. It's the easiest way to run the app on mobile devices. 

To run the app enter the below command.

```bash
$ npx expo
```
You should be able to see a QR code in the terminal. Simply scan this QR and you should be able to launch the app.

## Important steps to enable the app to send XHR to the backend server

While I was working on this app, I had to keep the backend application always running as the app needed to send/get data. So it is crucial to run the mobile app and
backend application in the same wifi network otherwise the api calls won't work. the following instructions need to be followed

1. Open API.ts file located inside data-layer directory. 
2. In the API.ts file, the first variable named **BASE_URL** is set to **http://192.168.0.12:5000**. On my machine the backend server was running on **http://192.168.0.12:5000**. Your's might be different. Please make sure to replace the ip part.
3. Please don't forget to add **http://**
4. And that's it!. If the backend server is running the app should be able to talk with it


## Documentation
As this is a airbnb clone app, I have taken a json file from <a href="https://public.opendatasoft.com/explore/dataset/air-bnb-listings/table/?disjunctive.neighbourhood&disjunctive.column_10&disjunctive.city">here</a>. The data in the **bookings** has been populated from json data. And the user related data are coming from backend server. For instance, in the **Reservations** tab, the listings are coming from the backend application. That's why we need the backend application up and running. 

## Project Structure
Let me share a brief overview on the project struture

- The routes are inside the app folder
- In asset folder, I have put a custom font file
- In components folder, I have put the molecules that supports the main route/screen components
- In the constants folder, I have put some constant data, color theme and airbnb json data
- Inside data-layer, there are 3 files
    - **API.ts**: This is where the api routes are kept.
    - **listing.ts**: This file is housing the functions that is required to read the data from the airbnb json file. 
    - **reservation.ts**: This file is containing all the necessary methods regarding reservations made by an user. The methods get the data from backend and send data to backend are written in this file
    - **Interface**: It contains the interfaces
    - **ui**: This directory has the atomic level UI's only which is shared in many places in the app
 
## Conclusion
This app can be improved in a greater way to increase user experience and add more features. However, for this test I have tried my best to add the primary level features and make it bug free. 

Hope you like it.  

## App screens

### Booking Screen
![WhatsApp Image 2024-04-12 at 5 36 35 PM](https://github.com/Shihab-Github/bookingapp/assets/22868908/a3434c7d-aa8a-4143-89bf-197f137509cd)

### Search Screen
![WhatsApp Image 2024-04-12 at 5 36 35 PM (1)](https://github.com/Shihab-Github/bookingapp/assets/22868908/8dc16764-ab8d-4aa2-aef7-bbc69abf2e9d)

### Filter Screen
![WhatsApp Image 2024-04-12 at 5 36 35 PM (2)](https://github.com/Shihab-Github/bookingapp/assets/22868908/b49d3624-838e-4850-b04d-4434d66d21bd)

### Booking Detail Screen
![WhatsApp Image 2024-04-12 at 5 36 35 PM (3)](https://github.com/Shihab-Github/bookingapp/assets/22868908/6a1ed354-fc4a-49ec-a3cb-ab5f89c6bd89)

### Create Booking Screen
![WhatsApp Image 2024-04-12 at 5 36 36 PM](https://github.com/Shihab-Github/bookingapp/assets/22868908/d07d2274-83f0-4157-86fc-0a5d1f231185)
![WhatsApp Image 2024-04-12 at 5 36 36 PM (1)](https://github.com/Shihab-Github/bookingapp/assets/22868908/0f79ae09-7360-49ce-b32c-030081f41a77)

### My Reservations Screen
![WhatsApp Image 2024-04-12 at 5 36 36 PM (2)](https://github.com/Shihab-Github/bookingapp/assets/22868908/1d33b6ba-bffe-4c98-abd0-d8c5e85777e3)

### Date picker bottom sheet
![WhatsApp Image 2024-04-12 at 5 36 37 PM](https://github.com/Shihab-Github/bookingapp/assets/22868908/e00eb1e8-cec1-41ae-a76e-5f5f3b452eb1)

### Cancel Reservation Screen
![WhatsApp Image 2024-04-12 at 5 36 37 PM (2)](https://github.com/Shihab-Github/bookingapp/assets/22868908/abf929dd-d4d3-4d96-97b7-290df131f04b)

### Profile Screen
![WhatsApp Image 2024-04-12 at 5 36 37 PM (3)](https://github.com/Shihab-Github/bookingapp/assets/22868908/01d5c2a2-c9d5-4852-a9dd-47e8f44281dd)












