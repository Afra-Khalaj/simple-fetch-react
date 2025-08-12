# Text Classification App

A Next.js application for text classification built with modern web technologies.

## Features

- Text classification using AI/ML models
- Real-time prediction results
- Modern UI with Tailwind CSS and shadcn/ui
- Redux Toolkit for state management
- React Hook Form for form handling
- TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Redux Toolkit
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Axios
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd simple-fetch-react
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # React components
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utility functions
│   └── store/            # Redux store
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## API Integration

The app integrates with a text classification API endpoint:
- **Endpoint**: `https://request-classification.farazpardazan.com/classify`
- **Method**: POST
- **Body**: `{ text: string }`

## Development

This project uses:
- **Next.js App Router** for routing
- **TypeScript** for type safety
- **ESLint** for code linting
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components

## License

This project is licensed under the MIT License.
