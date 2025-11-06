# The Address Investments - Landing Page

A luxurious, modern multi-step landing page for The Address Investments real estate company.

## Features

- 🌍 **Bilingual Support**: Full English and Arabic support with RTL layout
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop
- 🎨 **Luxurious UI**: Modern, minimalist design with animated geometric shapes
- ⚫ **Black Theme**: Sophisticated black, white, and gray color scheme
- 🔥 **Firebase Integration**: Real-time data storage with Firestore
- ✨ **Multi-step Form**: 
  - Step 1: Unit Type Selection (Villa or Apartment)
  - Step 2: Payment Plan Selection (Monthly installments in EGP)
  - Step 3: Contact Information (First Name, Last Name, Phone Number)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
```

## Deployment

### Netlify

This project is configured for Netlify deployment:

1. Connect your repository to Netlify
2. Netlify will automatically detect the build settings from `netlify.toml`
3. Deploy!

Or use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Firebase Configuration

The Firebase configuration is already set up in `src/firebase.js`. All form submissions are stored in the `leads` collection with:

- Unit type
- Payment plan
- First name
- Last name
- Phone number
- Language used
- Timestamp

## Customization

### Color Scheme

The app uses a black, white, and gray theme. To customize colors, edit the CSS variables in `src/App.css`:
- Main background: `#000000` (pure black)
- Form container: `#0a0a0a` (near black)
- Borders: `#2d2d2d` (dark gray)
- Hover states: `#4d4d4d` (medium gray)

### Geometric Shapes

The animated geometric shapes can be customized in the `.App::before` and `.App::after` pseudo-elements in `src/App.css`.

### Logo

The logo is located at `/public/logo.png`.

### Translations

Edit `src/i18n.js` to modify translations for English and Arabic.

## Tech Stack

- React 19
- Firebase Firestore
- i18next for internationalization
- CSS3 with animations and geometric shapes
- Create React App

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

Built with ❤️ for The Address Investments
