# Interactive Landing Page with React

## Overview

This project is an interactive landing page built with React, incorporating modern web development practices such as React Hooks, Context API, and React Router. The landing page features a responsive design with Home, About, and Contact Us sections, along with theme toggling functionality and form handling with validations.

## Features

- Responsive navigation bar
- Dynamic routing between Home, About, and Contact Us pages
- Theme toggle (Light/Dark mode) using Context API
- Interactive form with real-time validation
- Use of various React Hooks (useState, useEffect, useContext)
- Styled components and Material UI for styling

## Pages

### Home
- Welcoming message that updates based on user input
- Engaging hero section with background image, heading, subheading, and call-to-action button

### About
- Company history, mission, team members, and values
- Nested routes for additional sections (History, Team, Values)
- Side-by-side image and text layout
- Team member profiles with pictures and descriptions

### Contact Us
- User-friendly contact form with fields for name, email, and message
- Real-time form validation
- Display of company contact information (address, phone, email)

## Technical Implementation

### State Management
- useState for managing form inputs and theme toggle
- Dynamic welcome message in Home component

### Side Effects
- useEffect for document title updates and component lifecycle management
- Real-time animations and data updates
- Form validation feedback

### Context
- ThemeContext for managing and toggling between light and dark themes
- Theme toggle button in the NavBar

### Routing
- React Router for navigation between sections

## Installation and Setup

1. Clone the repository:
    git clone https://github.com/AshenSachinthana/interactive-landing-page.git

2. Navigate to the project directory:
    cd interactive-landing-page

3. Install dependencies:
    npm install

4. Start the development server:
    npm start

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used

- React
- React Router
- Context API
- Styled Components
- Material UI
