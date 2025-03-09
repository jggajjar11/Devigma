# Talent Showcase Platform - ShowCasa (Devigma)

A modern web application for creative professionals to showcase their portfolios and for recruiters to discover talent.

![image](https://github.com/user-attachments/assets/75cda922-7738-4917-91f7-38bf752265fb)

## Overview

Talent Showcase is a React-based platform that connects talented professionals with potential employers and collaborators. The platform allows users to:

- Create personal profiles highlighting their skills and personality
- Showcase portfolio projects with detailed descriptions and images
- Browse and discover talent by category or skill
- View detailed portfolio pieces and connect with creators

## Features

- **User Authentication**: Secure login and signup system with email validation
- **Profile Management**: Create and edit professional profiles with skills and personality traits
- **Portfolio Showcase**: Display projects with rich media support and detailed descriptions
- **Talent Discovery**: Browse profiles by category (Frontend, Backend, Full Stack)
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Social Integration**: Login options via Google and LinkedIn

## Tech Stack

- **Frontend**: React.js with hooks and functional components
- **Routing**: React Router for navigation
- **Styling**: Tailwind CSS for responsive design
- **Data Management**: JSON data structure (ready for backend integration)
- **Authentication**: Form validation and secure credential handling

## Project Structure

```
talent-showcase/
├── src/
│   ├── assets/         # Images, icons, and other static assets
│   ├── components/     # Reusable UI components
│   │   ├── Banner.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── ProfileDetails.jsx
│   │   ├── ProfilesTab.jsx
│   │   ├── WorkCard.jsx
│   │   └── WorkDetail.jsx
│   ├── data/           # Mock data for development
│   │   └── profiles.json
│   ├── pages/          # Main application pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── SearchResults.jsx
│   │   ├── Signup.jsx
│   │   └── Work.jsx
│   ├── utils/          # Helper functions and utilities
│   └── App.js          # Main application component
└── public/             # Public assets and index.html
```

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/talent-showcase.git
   cd talent-showcase
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:PORT](http://localhost:PORT) in your browser

## Login Creds
username: test@gmail.com
password: test

## Usage

### For Talent

1. Create an account or log in
2. Build your profile with your skills and personality traits
3. Add portfolio projects with descriptions and images
4. Share your profile with potential employers or collaborators

### For Recruiters

1. Browse talent by category (Frontend, Backend, Full Stack)
2. Search for specific skills
3. View detailed profiles and portfolio pieces
4. Connect with talent that matches your requirements

## Authentication

The platform includes a complete authentication flow:

- User registration with email validation
- Secure login system
- Password recovery option
- Social login integration (Google, LinkedIn)
- Protected routes for authenticated users

## Routes

- `/` - Home page with talent categories and featured profiles
- `/login` - User login page
- `/signup` - New user registration
- `/profile/:slug` - Individual talent profile page
- `/portfolio/:workSlug` - Detailed view of portfolio project
- `/search` - Search results page for talent discovery

## Deployment

This application can be deployed to any static site hosting service:

```bash
# Build the production-ready application
npm run build

# Deploy to your hosting provider
# Example for Netlify
netlify deploy --prod
```

## Future Enhancements

- Backend integration with Node.js/Express for persistent data
- Real-time messaging between talent and recruiters
- Advanced filtering and recommendation system
- Analytics dashboard for profile views and engagement
- Integration with job posting platforms

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

- All the creative professionals who inspired this platform
- The React community for excellent documentation and support
