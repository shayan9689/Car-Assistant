# 🚗 Car Assistant

An intelligent AI-powered chatbot designed to help you make informed decisions about your car. Get expert advice on vehicle selection, maintenance, performance optimization, and more.

## ✨ Features

- **AI-Powered Chat Interface** - Interactive conversational assistant for car-related queries
- **Real-time Responses** - Get instant answers to your automotive questions
- **Next.js Built** - Modern, fast, and scalable web application
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **RESTful API** - Backend API for chat functionality

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 14+
- **Language**: TypeScript & JavaScript
- **Styling**: CSS Modules & PostCSS
- **Linting**: ESLint
- **Runtime**: Node.js

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 16.x or higher
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shayan9689/Car-Assistant.git
cd car-chatbot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
car-chatbot/
├── app/
│   ├── api/              # Backend API routes
│   │   ├── chat/         # Chat endpoint
│   │   └── health/       # Health check endpoint
│   ├── components/       # React components
│   │   └── Chat.tsx      # Main chat component
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # App layout
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json          # Dependencies & scripts
├── tsconfig.json         # TypeScript config
├── next.config.ts        # Next.js config
└── README.md             # This file
```

## 🔌 API Endpoints

### Chat Endpoint
- **URL**: `/api/chat`
- **Method**: POST
- **Description**: Send a message and receive AI-powered response

### Health Check
- **URL**: `/api/health`
- **Method**: GET
- **Description**: Verify server status

## 💡 Usage

1. Navigate to the home page
2. Type your car-related question in the chat input
3. Receive instant AI-generated responses
4. Continue the conversation for more detailed assistance

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Code Quality

This project uses ESLint for code quality. Ensure your code follows the project standards before committing.

## 📦 Dependencies

See `package.json` for the complete list of dependencies and versions.

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click deploy

For other hosting options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Happy coding! 🎉**
