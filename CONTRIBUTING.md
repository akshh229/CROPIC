# Contributing to CROPIC

Thank you for your interest in contributing to CROPIC! This document provides guidelines for contributing to the project.

## Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB (local or hosted)
- PostgreSQL 15+ with PostGIS (for analytics)
- Git

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/akshh229/CROPIC.git
   cd CROPIC
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create backend environment file
   cp backend/.env.example backend/.env
   
   # Create frontend environment file  
   cp .env.example .env
   
   # Edit the files and add your configuration
   ```

4. **Run the development servers**
   ```bash
   npm run dev
   ```

## Project Structure

```
CROPIC/
├── backend/          # Express.js backend API
│   ├── src/
│   │   ├── routes/   # API route handlers
│   │   ├── models/   # MongoDB models
│   │   ├── ml/       # AI/ML integration
│   │   └── middleware/ # Express middleware
│   └── package.json
├── frontend/         # React frontend application
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/    # Page components
│   │   └── utils/    # Utility functions
│   └── package.json
└── package.json      # Root monorepo configuration
```

## Development Guidelines

### Code Style
- Use ESLint and Prettier for code formatting
- Follow the existing code style in the project
- Write meaningful commit messages

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:
```
feat(backend): add crop image upload endpoint

- Implement multer middleware for image handling
- Add validation for image file types
- Store metadata in MongoDB

Closes #123
```

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Pull Request Process

1. Create a new branch from `main`
2. Make your changes
3. Write or update tests as needed
4. Ensure all tests pass
5. Update documentation if needed
6. Submit a pull request with a clear description

### Testing
- Write unit tests for new functionality
- Ensure existing tests pass before submitting PR
- Aim for good test coverage

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## Code Review

All submissions require review before merging:
- Code must be functional and follow project standards
- Tests must pass
- Documentation must be updated
- No security vulnerabilities introduced

## Questions?

If you have questions, please:
1. Check existing documentation
2. Search existing issues
3. Open a new issue with the "question" label

## License

By contributing to CROPIC, you agree that your contributions will be licensed under the project's license.
