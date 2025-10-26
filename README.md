# MyDotNetNg

ASP.NET Core with Angular integration project demonstrating full-stack development with .NET backend and Angular frontend.

## Repository Structure

This solution contains two projects showcasing ASP.NET Core backend with Angular frontends:

### 1. MyDotNetNg
A basic ASP.NET Core 1.1 Web API application integrated with Angular 4.
- **Backend**: ASP.NET Core 1.1 Web API
- **Frontend**: Angular 4 (CLI version 1.4.9)
- **API Endpoint**: `/api/values` - Returns sample string array
- **Port**: http://localhost:5000

### 2. TourOfHeroes
Angular "Tour of Heroes" tutorial integrated with ASP.NET Core backend.
- **Backend**: ASP.NET Core 1.1 Web API
- **Frontend**: Angular 4 Tour of Heroes application
- **API Endpoint**: `/api/values` - Returns sample data

## Prerequisites

- [.NET Core SDK](https://dotnet.microsoft.com/download) (1.1 or higher)
- [Node.js](https://nodejs.org/) (v6.9.0 or higher)
- [Angular CLI](https://cli.angular.io/) (v1.4.9)

```bash
npm install -g @angular/cli@1.4.9
```

## Getting Started

### Building the Solution

1. **Restore .NET packages:**
   ```bash
   dotnet restore MyDotNetNg.sln
   ```

2. **Build the solution:**
   ```bash
   dotnet build MyDotNetNg.sln
   ```

### Running MyDotNetNg Project

1. **Navigate to the project directory:**
   ```bash
   cd MyDotNetNg
   ```

2. **Install npm packages:**
   ```bash
   npm install
   ```

3. **Build Angular application:**
   ```bash
   npm run build
   ```

4. **Run the .NET application:**
   ```bash
   dotnet run
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:5000`

### Running TourOfHeroes Project

1. **Navigate to the project directory:**
   ```bash
   cd TourOfHeroes
   ```

2. **Navigate to the Angular directory:**
   ```bash
   cd angular-tour-of-heroes
   ```

3. **Install npm packages:**
   ```bash
   npm install
   ```

4. **Build Angular application:**
   ```bash
   npm run build
   ```

5. **Return to project root and run:**
   ```bash
   cd ..
   dotnet run
   ```

## Development

### Angular Development Server

For both projects, you can run the Angular dev server separately:

```bash
cd MyDotNetNg  # or TourOfHeroes/angular-tour-of-heroes
npm start
```

This will start the Angular development server at `http://localhost:4200` with hot reload enabled.

### Running Tests

**Angular Unit Tests:**
```bash
npm test
```

**Angular E2E Tests:**
```bash
npm run e2e
```

**Linting:**
```bash
npm run lint
```

## Project Structure

```
MyDotNetNg/
├── MyDotNetNg/              # First Angular + ASP.NET Core project
│   ├── src/                 # Angular source files
│   │   ├── app/            # Angular components
│   │   └── ...
│   ├── Program.cs          # .NET application entry point
│   ├── Startup.cs          # ASP.NET Core configuration
│   ├── ValuesController.cs # Web API controller
│   └── package.json        # npm dependencies
├── TourOfHeroes/           # Tour of Heroes project
│   ├── angular-tour-of-heroes/  # Angular application
│   │   └── src/
│   ├── Program.cs
│   ├── Startup.cs
│   └── ValuesController.cs
└── MyDotNetNg.sln          # Visual Studio solution file
```

## Technology Stack

- **Backend**: ASP.NET Core 1.1, C#
- **Frontend**: Angular 4, TypeScript
- **Build Tools**: Angular CLI, .NET CLI
- **Testing**: Karma, Jasmine, Protractor

## Important Notes

### ⚠️ Security Warnings

**This project uses outdated versions with known security vulnerabilities:**

1. **.NET Core 1.1** - End of support (June 27, 2019)
2. **Microsoft.AspNetCore.Mvc 1.1.2** - Multiple high and moderate severity vulnerabilities
3. **Microsoft.NETCore.App 1.1.2** - High severity vulnerabilities
4. **Angular 4** - Multiple vulnerabilities in dependencies

### Recommendations for Production Use:

- **Upgrade to .NET 8.0** or latest LTS version
- **Upgrade to Angular 17** or latest LTS version
- Update all NuGet packages to their latest secure versions
- Update all npm packages to their latest secure versions
- Run `dotnet list package --vulnerable` to check for vulnerabilities
- Run `npm audit` to check for npm vulnerabilities

## Contributing

This appears to be a learning/demonstration project. If you plan to use this as a base for production:

1. Upgrade all dependencies to supported versions
2. Address all security vulnerabilities
3. Add proper error handling and logging
4. Implement authentication and authorization
5. Add comprehensive tests
6. Follow security best practices

## License

MIT

## Additional Resources

- [ASP.NET Core Documentation](https://docs.microsoft.com/aspnet/core/)
- [Angular Documentation](https://angular.io/docs)
- [.NET Core Support Policy](https://dotnet.microsoft.com/platform/support/policy/dotnet-core)
