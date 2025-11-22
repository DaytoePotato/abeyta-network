# Abeyta Network LLC Website

A production-ready Next.js application for Abeyta Network LLC's tech support business in Killeen/Temple, Central Texas.

## Features

- **Modern Design**: Dark theme with neon gradients (navy to orange), smooth animations with Framer Motion
- **3D Elements**: WebGL/Three.js interactive hero section
- **Responsive**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Meta tags, local business schema, keywords for Central Texas tech support
- **Client Dashboard**: Secure login with JWT, ticket tracking, invoice management
- **Dynamic Pricing**: Interactive quote calculator with real-time estimates
- **Contact Integration**: Forms with React Hook Form, calendar booking

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Data Fetching**: TanStack Query
- **Auth**: JWT + bcrypt

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file:

```env
JWT_SECRET=your-secret-key-here
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your-google-maps-key
```

## Deployment

Optimized for Cloudflare Pages:

```bash
npm run build
```

The `output: 'standalone'` configuration in `next.config.js` enables edge deployment.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── api/               # API routes
│   ├── case-studies/
│   ├── contact/
│   ├── dashboard/
│   ├── faq/
│   ├── portfolio/
│   ├── pricing/
│   ├── privacy/
│   ├── services/
│   └── terms/
├── components/
│   ├── dashboard/         # Dashboard components
│   ├── home/              # Homepage sections
│   ├── layout/            # Header, Footer
│   ├── pricing/           # Calculator
│   ├── providers/         # Context providers
│   ├── three/             # 3D components
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and constants
├── stores/                # Zustand stores
└── types/                 # TypeScript types
```

## Demo Credentials

Dashboard login:
- Email: `demo@abeytanetwork.com`
- Password: `demo123`

## Services Offered

### Home Users
- WiFi Optimization (Omada systems)
- Network Installation
- PC Building
- Smart Home Setup
- Troubleshooting

### Business
- Managed IT Services
- VoIP Phone Systems
- Raspberry Pi Monitoring

## License

Private - Abeyta Network LLC
