# Titanium Travel
Titanium Travel is a travel planning tool that allows users to create trips and add activities/places they want to visit in each trip.

- [Titanium Travel Deployed Website](https://nancyho629.github.io/titaniumtravel/#/)
- [Titanium Travel Client Repo](https://github.com/nancyho629/titaniumtravel)
- [Titanium Travel API Repo](https://github.com/nancyho629/titaniumtravel-api)
- [Titanium Travel API Deployed](https://titaniumtravel-api.herokuapp.com/)

## Technologies Used
  - React
  - Mongoose
  - MongoDB
  - Express
  - Node
  - JavaScript
  - Bootstrap
  - HTML
  - CSS

  ## Future Features
  - Google Maps JavaScript API
  - Third Party Travel Image API
  - AirBnb styled clone
  - AWS/Image calls for photos

  ## Setup and Installation
  1.  Fork and clone this repository.
  2.  To contribute, be sure to checkout to a new branch for your work.
  3.  Install depdendencies by running `npm install`.
  *Depedencies can be found in the package.json file.
  4.  To launch the API, run `npm run server`.

## Process, Planning, Problem-Solving
I started with the idea of a travel planning web app for an upcoming trip. However, I wanted it to be modeled after AirBnb. Users would have many trips and in each trip you can keep track of the activities and places you want to visit on that trip. For example, if you're traveling to Bangkok, Thailand you might want to visit The Grand Palace, Terminal 21, and Erawan Temple. These activities would be in cards on the right and mapped out on Google Maps on the left. To scale it back however to meet MVP I made sure I could first create trips and added the additional resource of activities to the trips.

## Entity Relationship Diagram
![Titanium Travel ERD](./images/ERD.png)

## Routes
|  Verb |  Route |
|-------|--------|
| POST   | `/sign-up`  |
| POST   | `/sign-in`  |
| DELETE  | `/sign-out`  |
| PATCH   | `/change-password`  |
| GET   | `/trips`  |
| POST   | `/trips`  |
| GET   | `/trips/:id`  |
| PATCH  | `/trips/:id`  |
| DELETE  | `/trips/:id` |
| POST  |  `/trips/:id/activities` |
| PATCH  | `/trips/:id/activities/:aid` |
| GET  | `/trips/:id/activities/:aid`  |
| GET   | `/trips/:id/activities/:aid`  |
| DELETE   | `/trips/:id/activities/:aid`  |
