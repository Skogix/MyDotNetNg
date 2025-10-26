# Security Policy

## Current Security Status

This project currently uses **outdated and unsupported** software versions with **known security vulnerabilities**.

### ⚠️ Critical Issues

#### .NET Core Framework
- **Current Version**: .NET Core 1.1
- **Status**: End of support (June 27, 2019)
- **Issue**: No longer receives security updates
- **Recommendation**: Upgrade to .NET 8.0 or latest LTS version

#### NuGet Package Vulnerabilities

The following packages have known security vulnerabilities:

##### Microsoft.AspNetCore.Mvc 1.1.2

**High Severity Vulnerabilities:**
- [GHSA-6xh7-4v2w-36q6](https://github.com/advisories/GHSA-6xh7-4v2w-36q6)
- [GHSA-qhqf-ghgh-x2m4](https://github.com/advisories/GHSA-qhqf-ghgh-x2m4)

**Moderate Severity Vulnerabilities:**
- [GHSA-ch6p-4jcm-h8vh](https://github.com/advisories/GHSA-ch6p-4jcm-h8vh)
- [GHSA-j8f4-2w4p-mhjc](https://github.com/advisories/GHSA-j8f4-2w4p-mhjc)

##### Microsoft.NETCore.App 1.1.2

**High Severity Vulnerabilities:**
- [GHSA-7mfr-774f-w5r9](https://github.com/advisories/GHSA-7mfr-774f-w5r9)
- [GHSA-8884-xcr4-r68p](https://github.com/advisories/GHSA-8884-xcr4-r68p)

#### Frontend Dependencies
- **Angular Version**: 4.2.4 (Released 2017)
- **Status**: Multiple known vulnerabilities in dependencies
- **Recommendation**: Upgrade to Angular 17 or latest LTS version

## Checking for Vulnerabilities

### .NET/NuGet Packages

To check for vulnerable packages in your .NET projects:

```bash
dotnet list package --vulnerable
```

To check for outdated packages:

```bash
dotnet list package --outdated
```

### npm Packages

To check for vulnerable npm packages:

```bash
npm audit
```

To automatically fix vulnerabilities where possible:

```bash
npm audit fix
```

## Mitigation Strategies

### Immediate Actions (if using in production)

1. **Isolate from public networks** - Do not expose this application to the internet
2. **Run behind a WAF** - Use a Web Application Firewall to filter malicious traffic
3. **Implement network segmentation** - Limit access to internal networks only
4. **Monitor logs** - Actively monitor for suspicious activity

### Upgrade Path

#### .NET Core Upgrade

1. **Upgrade to .NET 8.0:**
   ```xml
   <TargetFramework>net8.0</TargetFramework>
   ```

2. **Update package references:**
   ```xml
   <PackageReference Include="Microsoft.AspNetCore" Version="2.2.0" /> (removed, now part of framework)
   <PackageReference Include="Microsoft.AspNetCore.Mvc" Version="2.2.0" /> (removed, now part of framework)
   ```

3. **Update code for breaking changes** - Follow Microsoft's migration guides

#### Angular Upgrade

1. **Use Angular Update Guide:**
   Visit [update.angular.io](https://update.angular.io/) for step-by-step instructions

2. **Incremental upgrade path:**
   - Angular 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 12 → 13 → 14 → 15 → 16 → 17

3. **Update dependencies:**
   ```bash
   npm install @angular/animations@latest @angular/common@latest @angular/compiler@latest ...
   ```

## Reporting a Vulnerability

If you discover a security vulnerability in this project:

1. **Do NOT** open a public issue
2. Email the repository maintainer directly (if applicable)
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Security Best Practices

If you plan to use this project as a template:

### Authentication & Authorization
- Implement proper authentication (JWT, OAuth2, etc.)
- Use ASP.NET Core Identity or similar
- Implement role-based access control
- Validate all user input

### Data Protection
- Use HTTPS everywhere (enforce SSL/TLS)
- Encrypt sensitive data at rest
- Use secure connection strings
- Implement proper session management

### Security Headers
Add security headers in your Startup.cs:
```csharp
app.Use(async (context, next) =>
{
    context.Response.Headers.Add("X-Frame-Options", "DENY");
    context.Response.Headers.Add("X-Content-Type-Options", "nosniff");
    context.Response.Headers.Add("X-XSS-Protection", "1; mode=block");
    context.Response.Headers.Add("Referrer-Policy", "no-referrer");
    await next();
});
```

### Dependency Management
- Regularly update dependencies
- Use tools like Dependabot
- Run security scans in CI/CD pipeline
- Pin dependency versions in production

### Configuration
- Never commit secrets to source control
- Use environment variables or Azure Key Vault
- Implement proper logging and monitoring
- Use security scanning tools

## Resources

- [.NET Security Guidelines](https://learn.microsoft.com/dotnet/standard/security/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Angular Security Guide](https://angular.io/guide/security)
- [.NET Core Security Updates](https://github.com/dotnet/announcements/issues?q=is%3Aissue+label%3ASecurity)

## Disclaimer

This project is provided for **educational and demonstration purposes only**. 

**DO NOT USE IN PRODUCTION** without addressing all security vulnerabilities and upgrading to supported versions of all dependencies.
