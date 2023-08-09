# Space Lens - Explore the Universe through NASA Rover Images

## Project

Space Lens is a captivating web application that allows you to embark on a visual journey through the universe using NASA's extraordinary images captured by rovers, the Hubble Space Telescope and the James Webb Space Telescope. This application is built on the robust foundation of React and Redux, with the added touch of MaterialUI styling, offering a seamless and intuitive interface for your cosmic exploration.

### Showcase

A deployed link to the site can be found [here](https://space-lens.netlify.app/)

![Preivew](/src/assets/images/responsive.png)

# UX

## User Story

The end user will be looking to view images taken by mars rovers and also images taken of specific planets.

## Strategy

### User Needs

- Easily access a list of rovers
  - Have all relevant informaiton regarding each rover
- Be able to view images taken by a specific rover on a given date
- Easily navigate between rovers
- Easily access a list of planets
  - View images of each planet
- Easily navigate between planets

### Business Vision

- To access Nasa's images Api easily by anyone
- View images taken by Mars rovers with ease

## Scope

- A simple list of rovers available to view along with a list of planets to view
- Easy to choose a rover and then navigate the dates images were taken
- View all images taken of a specific planet

## Structure

- The site consists of 5 pages
  - Home: Displaying the Astronomical picture of the day from NASA
  - Rovers: Displaying a list of the avaiable rovers
  - Rovers/:rover: Dynamic page displaying the informaiotn on the selected rover, intially images take on the rovers first day on Mars with the ability to select specific dates
  - Planets/:planet - Dynamic page displaying all available images for the selected planet
  - Attribution - Displays all attribution for resources used

## Features

### Existing Features

- Stunning Visuals: Immerse yourself in the awe-inspiring visuals of distant planets and celestial landscapes. The combination of React and MaterialUI ensures a visually appealing and user-friendly experience.

- Efficient Data Handling: The power of Redux comes into play as it orchestrates API requests, ensuring efficient and accurate presentation of each image. This integration not only enhances data retrieval speed but also guarantees a smooth and uninterrupted browsing experience.

- Dual Purpose Exploration: Space Lens offers a dual purpose - not only can you explore an extensive gallery of images captured by NASA's remarkable rovers, but you can also delve into the mystique of each planet. Whether it's the rusty terrain of Mars or the mesmerizing swirls of Jupiter, you can experience planetary wonders like never before.

## Technologies Used

- React: The core of the application is built using React, providing a solid foundation for building interactive and dynamic user interfaces.

- Redux: Redux is utilized to manage the application's state and seamlessly orchestrate API requests, ensuring efficient data handling and a smooth browsing experience.

- MaterialUI: The application is styled using MaterialUI components, enhancing the visual experience and contributing to a user-friendly interface.

- Three.js: Three.js is integrated to bring an extra dimension to the application's visual experience.

## Deployment

To explore the universe through Space Lens, follow these steps:

- Clone the Repository: Clone this repository to your local machine using git clone https://github.com/cod182/space-lens.git.

- Install Dependencies: Navigate to the project directory and install the required dependencies by running npm install.

- Run the Application: Start the application using npm start. This will launch the application in your default web browser.

### Credits

- Planet Icons from [DeviantArt](https://www.deviantart.com/citizenjustin/art/Planetary-Icons-for-Windows-105450592)

- Apis used are provided by NASA.

- Images from rovers are provided by NASA form the Public domain.

- Featured image is provided by api.nasa.gov

- Images of planets are provided by images-api.nasa.gov
