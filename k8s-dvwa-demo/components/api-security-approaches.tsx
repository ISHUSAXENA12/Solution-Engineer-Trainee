import { Lock, Shield, AlertTriangle, Key, RefreshCw } from "lucide-react"

interface ApiSecurityApproachesProps {
  slideIndex: number
}

export default function ApiSecurityApproaches({ slideIndex }: ApiSecurityApproachesProps) {
  const slides = [
    // Slide 1: Title and Introduction
    <div key="api-1" className="text-center space-y-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Mitigating API Security Threats</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">Comprehensive approaches to protect your API ecosystem</p>
      <div className="pt-6 grid grid-cols-5 gap-4">
        {[Lock, Shield, AlertTriangle, Key, RefreshCw].map((Icon, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        ))}
      </div>
    </div>,

    // Slide 2: Common API Threats and Mitigations
    <div key="api-2" className="space-y-8 max-w-4xl">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">Common API Threats & Mitigations</h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">1. Authentication Vulnerabilities</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Weak or broken authentication mechanisms that allow unauthorized access to APIs.
            </p>
            <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded">
              <h4 className="text-sm font-medium">Mitigations:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>Implement OAuth 2.0 or OpenID Connect</li>
                <li>Use strong, short-lived JWT tokens</li>
                <li>Enforce MFA for sensitive operations</li>
                <li>Implement proper token validation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center flex-shrink-0">
            <Lock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">2. Broken Authorization</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Insufficient access controls allowing users to access unauthorized resources or perform unauthorized
              actions.
            </p>
            <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded">
              <h4 className="text-sm font-medium">Mitigations:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>Implement fine-grained authorization</li>
                <li>Use attribute-based access control (ABAC)</li>
                <li>Validate user permissions on every request</li>
                <li>Implement resource-level authorization checks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
            <RefreshCw className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">3. Excessive Data Exposure</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              APIs returning more data than necessary, potentially exposing sensitive information.
            </p>
            <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded">
              <h4 className="text-sm font-medium">Mitigations:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>Implement response filtering</li>
                <li>Use GraphQL to specify required fields</li>
                <li>Create specific response DTOs</li>
                <li>Apply data minimization principles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 3: Comprehensive API Security Approach
    <div key="api-3" className="space-y-8 max-w-4xl">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">Comprehensive API Security Approach</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            Defense-in-Depth Strategy
          </h3>
          <div className="space-y-2">
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium">1. API Gateway Security</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>Rate limiting and throttling</li>
                <li>Request validation</li>
                <li>API key management</li>
                <li>TLS enforcement</li>
              </ul>
            </div>

            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium">2. Authentication & Authorization</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>OAuth 2.0/OIDC implementation</li>
                <li>Role-based access control</li>
                <li>Token validation</li>
                <li>Scope-based permissions</li>
              </ul>
            </div>

            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium">3. Input Validation</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>Schema validation</li>
                <li>Parameter sanitization</li>
                <li>Content type validation</li>
                <li>API schema enforcement (OpenAPI)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Key className="h-5 w-5 text-blue-500" />
            Operational Security
          </h3>
          <div className="space-y-2">
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium">4. Monitoring & Detection</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>API traffic analysis</li>
                <li>Anomaly detection</li>
                <li>Security logging</li>
                <li>Real-time alerting</li>
              </ul>
            </div>

            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium">5. Secure Development</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>API security testing</li>
                <li>Dependency scanning</li>
                <li>Security code reviews</li>
                <li>API versioning strategy</li>
              </ul>
            </div>

            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium">6. Response Security</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>Data minimization</li>
                <li>Error handling (no leakage)</li>
                <li>Security headers</li>
                <li>Response filtering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mt-4 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">Best Practices:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
          <li>Adopt a "zero trust" approach to API security</li>
          <li>Implement continuous security testing in CI/CD pipelines</li>
          <li>Use API security standards (OWASP API Security Top 10)</li>
          <li>Consider specialized API security tools and gateways</li>
          <li>Maintain an API inventory and security documentation</li>
        </ul>
      </div>
    </div>,
  ]

  return slides[slideIndex] || slides[0]
}
