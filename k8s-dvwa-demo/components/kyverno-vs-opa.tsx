import { FileText, Shield } from "lucide-react"

interface KyvernoVsOpaProps {
  slideIndex: number
}

export default function KyvernoVsOpa({ slideIndex }: KyvernoVsOpaProps) {
  const slides = [
    // Slide 1: Title and Introduction
    <div key="policy-1" className="text-center space-y-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Kyverno vs OPA</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Comparing Kubernetes policy engines: Kyverno and Open Policy Agent (OPA)
      </p>
      <div className="pt-6 flex justify-center gap-16">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
            <FileText className="h-16 w-16 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="mt-2 text-xl font-semibold">Kyverno</h3>
          <p className="text-sm text-gray-500">Kubernetes-native Policy Management</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <Shield className="h-16 w-16 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="mt-2 text-xl font-semibold">OPA</h3>
          <p className="text-sm text-gray-500">Open Policy Agent</p>
        </div>
      </div>
    </div>,

    // Slide 2: Core Capabilities Comparison
    <div key="policy-2" className="space-y-4 max-w-5xl w-full">
      <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Core Capabilities Comparison</h2>

      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-3 text-left">Feature</th>
              <th className="px-4 py-3 text-left">Kyverno</th>
              <th className="px-4 py-3 text-left">OPA/Gatekeeper</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-3 font-medium">Policy Language</td>
              <td className="px-4 py-3">YAML (Kubernetes-native)</td>
              <td className="px-4 py-3">Rego (custom DSL)</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 font-medium">Learning Curve</td>
              <td className="px-4 py-3">Low (familiar to K8s users)</td>
              <td className="px-4 py-3">Moderate to High (new language)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Policy Scope</td>
              <td className="px-4 py-3">Kubernetes-focused</td>
              <td className="px-4 py-3">General-purpose (beyond K8s)</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 font-medium">Resource Mutation</td>
              <td className="px-4 py-3">Native support</td>
              <td className="px-4 py-3">Limited (via webhooks)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Image Verification</td>
              <td className="px-4 py-3">Built-in</td>
              <td className="px-4 py-3">Custom implementation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,

    // Slide 3: Key Differences and Use Cases
    <div key="policy-3" className="space-y-8 max-w-4xl">
      <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Key Differences & Use Cases</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5 text-indigo-500" />
            Kyverno
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Key Advantages:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Kubernetes-native YAML policies</li>
                <li>No new language to learn</li>
                <li>Built-in mutation capabilities</li>
                <li>Image verification and generation features</li>
                <li>Simpler deployment model</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Limitations:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Limited to Kubernetes use cases</li>
                <li>Less expressive for complex policies</li>
                <li>Newer project (less mature)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Ideal For:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Kubernetes-focused teams</li>
                <li>Teams seeking simplicity</li>
                <li>Use cases requiring resource mutation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            OPA/Gatekeeper
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Key Advantages:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>General-purpose policy engine</li>
                <li>Highly expressive Rego language</li>
                <li>Can be used beyond Kubernetes</li>
                <li>Mature ecosystem and tooling</li>
                <li>Strong community and adoption</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Limitations:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Steeper learning curve (Rego)</li>
                <li>More complex deployment</li>
                <li>Limited mutation capabilities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Ideal For:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Multi-platform environments</li>
                <li>Complex policy requirements</li>
                <li>Organizations with policy expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mt-4">
        <h3 className="text-lg font-semibold mb-2">Decision Factors:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
          <li>Choose Kyverno for Kubernetes-specific, simpler policy needs</li>
          <li>Choose OPA for complex, cross-platform policy requirements</li>
          <li>Consider team expertise and learning curve in your decision</li>
        </ul>
      </div>
    </div>,
  ]

  return slides[slideIndex] || slides[0]
}
