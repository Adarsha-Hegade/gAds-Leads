# Magnific Lead Collection Form

A high-performance React landing page designed to collect leads for Magnific's exclusive collection. This elegant, mobile-first application provides a seamless user experience with instant visual feedback and robust form validation.

## 🌟 Features

### Core Functionality
- Fast-loading React application optimized for performance
- Elegant lead collection form with real-time validation
- Mobile-first responsive design
- Automatic country code detection (default: +91 for India)
- Browser autofill API integration
- Progressive form validation
- Loading skeletons for immediate visual feedback
- Error handling with user-friendly messages
- Secure form data storage using Vercel Blob
- Email notification system for leads

### Form Fields
- Name (required) with autofill support
- Phone number (required) with country code auto-detection
- City (required) with validation
- Email (optional) with format validation

### URL Structure
- Input URL pattern: `form.magnific.in/{slug-1}/{slug-2}/{slug-3}/...`
- Redirect URL pattern: `magnific.in/{slug-1}/{slug-2}/{slug-3}/...`

## 🎨 Design

### UI/UX Features
- Modern, minimalist interface with ample white space
- Backdrop blur effects for visual depth
- Clear visual hierarchy
- Smooth transitions and micro-interactions
- Elegant typography using Playfair Display
- Luxury-focused color scheme
- Mobile-optimized layout
- Loading skeleton for enhanced perceived performance

### Color Scheme
- Primary: `#1a5f7a`
- Secondary: `#2c3e50`
- Accent: `#c8a97e`

### Typography
- Primary: Playfair Display (headings)
- Secondary: Inter (body text)

## 🛠 Technical Stack

### Core Technologies
- React 18
- TypeScript
- Vite
- Tailwind CSS

### Key Dependencies
- `react-hook-form`: Form handling and validation
- `libphonenumber-js`: Phone number validation and formatting
- `react-loading-skeleton`: Loading state UI
- `lucide-react`: Icon system
- `@vercel/blob`: Secure data storage
- `react-router-dom`: URL handling

## 🔄 User Flow

1. User arrives from Google Display Ad
2. Views elegant form with minimal fields
3. Completes form with real-time validation
4. Submits information
5. Receives success modal with two options:
   - Download PDF catalogue (Google Drive)
   - Visit main website (with preserved URL structure)

## 💾 Data Flow

1. Form submission triggers:
   - Data storage in Vercel Blob
   - Email notification to info@magnific.in
   - Success modal display

2. Data stored includes:
   - User input (name, phone, city, email)
   - Timestamp
   - URL slugs
   - Source information

## 🔒 Security Features

- Form validation on both client and server side
- Secure data storage using Vercel Blob
- Protected API endpoints
- Rate limiting
- Input sanitization
- Secure email handling

## 📱 Responsive Design

The application is fully responsive across:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## ⚡ Performance Optimizations

- Initial load time < 1 second
- Lazy loading of components
- Optimized asset delivery
- Efficient state management
- Minimal bundle size
- Skeleton loading states

## 📊 Analytics Integration

Tracks key metrics including:
- Form submissions
- Conversion rates
- User interactions
- Error rates
- Page load times

## 🚀 Deployment

The application is configured for deployment on Vercel with:
- Automatic HTTPS
- Edge network distribution
- Continuous deployment
- Environment variable management

## 🛠 Development

### Prerequisites
```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables
```env
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_token"
```

## 📝 API Endpoints

### Form Submission
```typescript
POST /api/send-email
Content-Type: application/json

{
  "to": "info@magnific.in",
  "from": "leads@magnific.in",
  "subject": "New Lead Submission",
  "data": {
    "name": string,
    "phone": string,
    "city": string,
    "email": string,
    "slugs": string[],
    "timestamp": string
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.