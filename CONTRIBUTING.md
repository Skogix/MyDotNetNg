# Contributing to MyDotNetNg

Thank you for your interest in contributing to MyDotNetNg! This document provides guidelines and information for contributors.

## Code of Conduct

Please be respectful and constructive in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/MyDotNetNg.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes
6. Commit your changes: `git commit -m "Description of changes"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Create a Pull Request

## Development Setup

### Prerequisites
- .NET Core SDK 1.1+ (project currently uses 1.1, but .NET 8.0 recommended for new development)
- Node.js v6.9.0+
- Angular CLI 1.4.9

### Setting Up Development Environment

1. **Install dependencies:**
   ```bash
   dotnet restore
   cd MyDotNetNg && npm install
   cd ../TourOfHeroes/angular-tour-of-heroes && npm install
   ```

2. **Build the solution:**
   ```bash
   dotnet build MyDotNetNg.sln
   ```

3. **Run the application:**
   ```bash
   cd MyDotNetNg
   dotnet run
   ```

## Coding Standards

### C# / .NET
- Follow [C# Coding Conventions](https://learn.microsoft.com/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- Use meaningful variable and method names
- Add XML documentation comments for public APIs
- Keep methods focused and small
- Use async/await for asynchronous operations

### TypeScript / Angular
- Follow the [Angular Style Guide](https://angular.io/guide/styleguide)
- Use TypeScript strict mode
- Run linter before committing: `npm run lint`
- Format code consistently (use EditorConfig)

### Git Commit Messages
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests when applicable

Example:
```
Add user authentication feature

- Implement JWT token generation
- Add login/logout endpoints
- Update UI with authentication state

Fixes #123
```

## Testing

### .NET Tests
Currently, there are no .NET unit tests in this project. When adding tests:
- Use xUnit or MSTest
- Create a separate test project (e.g., `MyDotNetNg.Tests`)
- Aim for high code coverage
- Test both success and failure scenarios

### Angular Tests
Run Angular tests with:
```bash
npm test          # Unit tests
npm run e2e       # End-to-end tests
npm run lint      # Linting
```

## Pull Request Process

1. **Update documentation** - Update README.md or other docs if needed
2. **Test your changes** - Ensure all tests pass
3. **Update the CHANGELOG** - Document notable changes (if applicable)
4. **Request review** - Tag relevant reviewers
5. **Address feedback** - Make requested changes promptly
6. **Squash commits** - Clean up commit history if requested

### Pull Request Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review of code completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests pass locally
- [ ] No new warnings introduced
- [ ] Security vulnerabilities addressed

## What to Contribute

### High Priority
- **Upgrade to .NET 8.0** - Modernize the backend
- **Upgrade to Angular 17** - Modernize the frontend
- **Add unit tests** - Improve code coverage
- **Fix security vulnerabilities** - Address known issues
- **Improve error handling** - Add proper error handling

### Nice to Have
- Add API documentation (Swagger/OpenAPI)
- Implement authentication and authorization
- Add logging and monitoring
- Improve UI/UX
- Add more examples and tutorials
- Performance optimizations

## Reporting Bugs

When reporting bugs, please include:
- **Description** - Clear description of the issue
- **Steps to Reproduce** - Detailed steps to reproduce the bug
- **Expected Behavior** - What you expected to happen
- **Actual Behavior** - What actually happened
- **Environment** - OS, .NET version, Node version, browser
- **Screenshots** - If applicable
- **Additional Context** - Any other relevant information

Use the bug report template when creating an issue.

## Suggesting Enhancements

When suggesting enhancements, please include:
- **Use Case** - Why is this enhancement needed?
- **Proposed Solution** - Your suggestion for implementation
- **Alternatives Considered** - Other approaches you've thought about
- **Additional Context** - Examples, mockups, or references

## Security Issues

**Do not** report security vulnerabilities through public GitHub issues.

Instead, please refer to the SECURITY.md file for instructions on how to report security vulnerabilities privately.

## License

By contributing to MyDotNetNg, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to open an issue with the "question" label if you need help or clarification.

## Recognition

Contributors will be recognized in the project documentation and release notes.

Thank you for contributing to MyDotNetNg! 🎉
