# HumanChain: AI Safety Incident Dashboard
![Screeshot](https://github.com/VIKASRAPARTHI/Human-Chain/blob/main/Screenshot.png)

HumanChain is a comprehensive dashboard designed to monitor and manage AI safety incidents. It provides a user-friendly interface for tracking incidents, analyzing trends, and ensuring compliance with safety protocols.

### Github & Deploy Link:
```bash
   https://github.com/VIKASRAPARTHI/Human-Chain
   https://human-chain-silk.vercel.app/
```


## Features

- **Incident Tracking**: Log and manage AI safety incidents in real-time.
- **Data Visualization**: Interactive charts and graphs to analyze incident trends over time.
- **User Management**: Role-based access control for secure management of users and incidents.
- **Automated Alerts**: Receive notifications for critical incidents and updates.
- **Reporting Tools**: Generate detailed reports for compliance and analysis.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)

### Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VIKASRAPARTHI/HumanChain.git
   cd HumanChain

   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Development

Start the development server:

```bash
npm run dev
```

### Building for Production

Build the application for production:

```bash
npm run build
```

This will create a `dist` directory with the compiled application.

## Deployment

### Deploying to Vercel

This application is configured for easy deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration
3. The build command is set to `npm run build`
4. The output directory is set to `dist`

You can also deploy manually using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
AuthConnectHub/
├── client/               # Frontend React application
│   ├── src/              # Source code
│   │   ├── components/   # React components
│   │   ├── contexts/     # React contexts
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   └── App.tsx       # Main application component
│   └── index.html        # HTML template
├── shared/               # Shared code and types
│   └── schema.ts         # Type definitions
├── dist/                 # Built application (generated)
├── package.json          # Project dependencies and scripts
├── vercel.json           # Vercel deployment configuration
└── README.md             # Project documentation
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
