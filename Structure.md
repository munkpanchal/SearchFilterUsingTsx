project-root/
├── .github/                   # GitHub workflows and templates
├── .husky/                    # Git hooks
├── .vscode/                   # Editor configurations
├── public/                    # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── assets/
│       ├── fonts/
│       ├── images/
│       └── locales/          # i18n files
├── src/
│   ├── app/                  # Main app configuration
│   │   ├── layout/
│   │   ├── providers/        # Context providers
│   │   └── router/           # Routing configuration
│   │
│   ├── common/               # Shared components and utilities
│   │   ├── components/       # Reusable UI components
│   │   │   └── Button/
│   │   │       ├── Button.tsx
│   │   │       ├── Button.stories.tsx
│   │   │       ├── Button.test.tsx
│   │   │       └── index.ts
│   │   ├── hooks/            # Custom hooks
│   │   ├── utils/            # Helper functions
│   │   └── types/            # Global type definitions
│   │
│   ├── features/             # Feature-based modules
│   │   └── auth/
│   │       ├── components/   # Feature-specific components
│   │       ├── api/          # Feature API calls
│   │       ├── hooks/        # Feature-specific hooks
│   │       ├── store/        # Feature-specific state
│   │       ├── types/        # Feature-specific types
│   │       └── index.ts      # Feature public API
│   │
│   ├── pages/                # Page components (Next.js style)
│   ├── services/             # API service layer
│   │   ├── api-client.ts     # Axios/API instance
│   │   └── auth-service.ts
│   │
│   ├── stores/               # Global state management
│   ├── themes/               # Theme configuration
│   ├── assets/               # Static assets (processed by bundler)
│   │   ├── styles/           # Global styles
│   │   └── svgs/             # SVG assets
│   │
│   ├── lib/                  # Third-party integrations/utilities
│   ├── test-utils/           # Testing utilities
│   ├── main.tsx              # App entry point
│   └── App.tsx               # Root component
│
├── .env                      # Environment variables
├── .eslintrc                 # ESLint config
├── .prettierrc               # Prettier config
├── tsconfig.json             # TypeScript config
├── package.json
└── README.md