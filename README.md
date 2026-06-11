# AIM Photography Portfolio

A modern, responsive portfolio website for professional photography by Akpan Iyeneobong Moses. Built with React and Vite for optimal performance and developer experience.

## Overview

AIM is a fine art photography portfolio showcasing professional photography services including portrait sessions, brand storytelling, and event coverage. The website features a clean, minimal design with an emphasis on visual impact and user experience.

### Key Features

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices
- **Gallery Section**: Showcase of professional photography work
- **Service Offerings**: Detailed descriptions of photography services
- **Client Testimonials**: Social proof through client feedback
- **Mobile Navigation**: Toggle menu for seamless mobile browsing
- **Modern Tech Stack**: Built with React 19 and Vite for fast development and production builds
- **Code Quality**: ESLint configured for code consistency and best practices

## Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | ^19.2.6 | UI framework |
| **React DOM** | ^19.2.6 | React DOM rendering |
| **Vite** | ^8.0.12 | Build tool and dev server |
| **ESLint** | ^10.3.0 | Code quality and linting |

### Development Dependencies

- `@vitejs/plugin-react`: Vite plugin for React with Oxc support
- `eslint-plugin-react-hooks`: ESLint rules for React hooks
- `eslint-plugin-react-refresh`: ESLint rules for React refresh
- `@types/react` & `@types/react-dom`: TypeScript type definitions

## Project Structure

```
AIM/
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Component styling
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles
│   └── assets/
│       └── imgs/            # Photography images
├── public/                  # Static assets
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Project dependencies and scripts
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone https://github.com/FortuneNnah/AIM
   cd AIM
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Development

### Start Development Server

Run the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port). Changes to your code will automatically refresh in the browser.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This generates a `dist` folder with minified and optimized files ready for deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

This serves the built files from the `dist` folder, allowing you to verify the production build before deployment.

### Code Linting

Check code quality and consistency:

```bash
npm run lint
```

ESLint will report any code quality issues based on the configured rules.

## Project Configuration

### Vite Configuration

The project uses a minimal Vite configuration in `vite.config.js` with React plugin enabled for optimal development experience and build performance.

### ESLint Configuration

Code quality is maintained through ESLint with the following rule sets:
- ES2020 recommended rules
- React hooks rules
- React refresh rules

Configuration can be extended in `eslint.config.js` for additional rules as needed.

## Sections & Components

### Hero Section
The landing section features compelling copy and call-to-action buttons directing visitors to the gallery or booking page.

### Gallery
Displays a curated collection of professional photography work, currently configured with placeholder image paths.

### Services
Highlights three core service offerings:
- **Portrait Sessions**: Professional headshots and personal branding photography
- **Brand Storytelling**: Visual identity work for founders and creatives
- **Event Coverage**: Cinematic event documentation

### Testimonials
Features client testimonials showcasing satisfaction and quality of work.

### Navigation
Smooth navigation with mobile-responsive toggle menu for easy access to all sections.

## Customization Guide

### Adding Images to Gallery

1. Place your images in the `src/assets/imgs/` directory
2. Update the `galleryImages` array in `src/App.jsx` with your image paths

### Updating Services

Edit the `services` array in `src/App.jsx` to modify service offerings:
```javascript
const services = [
  {
    title: 'Your Service Title',
    description: 'Service description here'
  },
  // ... more services
]
```

### Modifying Testimonials

Update the `testimonials` array in `src/App.jsx`:
```javascript
const testimonials = [
  {
    quote: 'Client quote',
    name: 'Client Name',
    role: 'Client Role'
  },
  // ... more testimonials
]
```

## Styling

The project uses CSS modules and regular CSS files:
- `src/App.css`: Component-specific styles
- `src/index.css`: Global styles and base resets

Styling is designed for a clean, minimal aesthetic that emphasizes photography.

## Performance Optimization

- **Vite**: Fast build times and dev server startup
- **React 19**: Latest React features and performance improvements
- **Code Splitting**: Automatic optimization via Vite
- **Hot Module Replacement**: Instant feedback during development

## Deployment

The project can be deployed to various platforms:

1. **Build the project**: `npm run build`
2. **Deploy the `dist` folder** to your hosting provider (Vercel, Netlify, GitHub Pages, etc.)

### Example: Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Future Enhancements

Consider these improvements:
- Add TypeScript for better type safety
- Implement image lazy loading for performance
- Add contact form functionality
- Integrate analytics
- Add dark mode support
- Expand testimonials section with images

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Build Issues
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`

### ESLint Errors
Run `npm run lint` to identify issues, then fix them before committing code.

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [ESLint Documentation](https://eslint.org)
- [JavaScript ES2020 Features](https://www.ecma-international.org/publications-and-standards/standards/ecma262/)

## License

This project is a professional portfolio website. Please ensure appropriate licensing for any third-party images and dependencies used.

## Contact & Support

For inquiries about photography services or website customization, please reach out to the portfolio owner through the contact section on the website.

---

**Built with ❤️ using React and Vite**
