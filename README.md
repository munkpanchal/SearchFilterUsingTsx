src/
│
├── assets/               # Static assets like images, fonts, styles, etc.
│   ├── images/
│   ├── icons/
│   └── styles/           # Global styles (e.g., CSS, SCSS)
│       └── global.scss
│
├── components/           # Reusable presentational components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   └── index.ts      # Barrel file for easier imports
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   └── index.ts
│   └── index.ts          # Export all components from here
│
├── hooks/                # Custom React hooks
│   ├── useFetch.ts
│   └── useLocalStorage.ts
│
├── context/              # Context API related files
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
│
├── pages/                # Page-level components (route-based)
│   ├── Home/
│   │   ├── Home.tsx
│   │   ├── Home.module.css
│   │   └── index.ts
│   ├── About/
│   │   ├── About.tsx
│   │   ├── About.module.css
│   │   └── index.ts
│   └── index.ts          # Export all pages from here
│
├── services/             # API services, data fetching logic
│   ├── api.ts            # Axios or fetch setup
│   ├── authService.ts
│   └── productService.ts
│
├── utils/                # Utility functions and helpers
│   ├── formatDate.ts
│   ├── constants.ts      # Global constants
│   └── validators.ts     # Validation functions
│
├── types/                # TypeScript type definitions
│   ├── user.ts           # User-related types
│   ├── product.ts        # Product-related types
│   └── index.ts          # Export all types from here
│
├── store/                # State management (Redux, Zustand, etc.)
│   ├── slices/
│   │   ├── authSlice.ts
│   │   └── productSlice.ts
│   ├── store.ts          # Redux store configuration
│   └── hooks.ts          # Custom hooks for state management (e.g., useAppSelector)
│
├── routes/               # Routing configuration
│   ├── index.tsx         # Main routing file
│   └── PrivateRoute.tsx  # Protected routes
│
├── App.tsx               # Main application component
├── index.tsx             # Entry point of the app
└── react-app-env.d.ts    # TypeScript declarations for environment