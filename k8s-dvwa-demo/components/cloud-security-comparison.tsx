import { Shield } from "lucide-react"

interface CloudSecurityComparisonProps {
  slideIndex: number
}

export default function CloudSecurityComparison({ slideIndex }: CloudSecurityComparisonProps) {
  const slides = [
    // Slide 1: Title and Introduction
    <div key="cloud-1" className="text-center space-y-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400">AWS vs Azure Security Services</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Comparing and contrasting the security offerings of the two leading cloud providers
      </p>
      <div className="pt-6 flex justify-center gap-16">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
            <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.5L4.5 16H7.5L10.5 12.5L7.5 9H4.5L7.5 12.5Z" fill="#FF9900" />
              <path d="M13.5 16H16.5L19.5 12.5L16.5 9H13.5L16.5 12.5L13.5 16Z" fill="#FF9900" />
              <path d="M10.5 16H13.5V9H10.5V16Z" fill="#FF9900" />
            </svg>
          </div>
          <h3 className="mt-2 text-xl font-semibold">AWS</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 8.5V15.5L12 20L20 15.5V8.5L12 4Z" fill="#0078D4" />
            </svg>
          </div>
          <h3 className="mt-2 text-xl font-semibold">Azure</h3>
        </div>
      </div>
    </div>,

    // Slide 2: Core Security Services Comparison
    <div key="cloud-2" className="space-y-4 max-w-5xl w-full">
      <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">
        Core Security Services Comparison
      </h2>

      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-3 text-left">Security Domain</th>
              <th className="px-4 py-3 text-left">AWS</th>
              <th className="px-4 py-3 text-left">Azure</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-3 font-medium">Identity & Access Management</td>
              <td className="px-4 py-3">AWS IAM</td>
              <td className="px-4 py-3">Azure Active Directory</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 font-medium">Network Security</td>
              <td className="px-4 py-3">Security Groups, Network ACLs, AWS Shield</td>
              <td className="px-4 py-3">Network Security Groups, Azure Firewall, DDoS Protection</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Data Protection</td>
              <td className="px-4 py-3">AWS KMS, CloudHSM</td>
              <td className="px-4 py-3">Azure Key Vault, Storage Service Encryption</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 font-medium">Threat Detection</td>
              <td className="px-4 py-3">Amazon GuardDuty, Detective</td>
              <td className="px-4 py-3">Azure Security Center, Sentinel</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Compliance</td>
              <td className="px-4 py-3">AWS Config, AWS Audit Manager</td>
              <td className="px-4 py-3">Azure Policy, Compliance Manager</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,

    // Slide 3: Key Differences and Recommendations
    <div key="cloud-3" className="space-y-8 max-w-4xl">
      <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">
        Key Differences & Recommendations
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5 text-orange-500" />
            AWS Strengths
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <div className="mt-1 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <span>Mature IAM with fine-grained permissions</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <span>Advanced threat detection with GuardDuty</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <span>Comprehensive DDoS protection</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            Azure Strengths
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <div className="mt-1 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <span>Seamless integration with existing AD environments</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <span>Unified security management with Security Center</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <span>Advanced SIEM capabilities with Sentinel</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mt-6">
        <h3 className="text-lg font-semibold mb-2">Recommendations:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
          <li>Choose AWS for more granular control and mature security services</li>
          <li>Choose Azure for Microsoft-centric environments and integrated security management</li>
          <li>Consider multi-cloud strategy with centralized security monitoring</li>
          <li>Implement consistent security controls across both platforms</li>
        </ul>
      </div>
    </div>,
  ]

  return slides[slideIndex] || slides[0]
}
