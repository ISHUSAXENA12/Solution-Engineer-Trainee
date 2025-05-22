import { Shield, Eye } from "lucide-react"

interface FalcoVsKubeArmorProps {
  slideIndex: number
}

export default function FalcoVsKubeArmor({ slideIndex }: FalcoVsKubeArmorProps) {
  const slides = [
    // Slide 1: Title and Introduction
    <div key="falco-1" className="text-center space-y-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">Falco vs KubeArmor</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Comparing two leading Kubernetes runtime security solutions
      </p>
      <div className="pt-6 flex justify-center gap-16">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <Eye className="h-16 w-16 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="mt-2 text-xl font-semibold">Falco</h3>
          <p className="text-sm text-gray-500">CNCF Runtime Security</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <Shield className="h-16 w-16 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="mt-2 text-xl font-semibold">KubeArmor</h3>
          <p className="text-sm text-gray-500">Container-aware Security</p>
        </div>
      </div>
    </div>,

    // Slide 2: Core Capabilities Comparison
    <div key="falco-2" className="space-y-4 max-w-5xl w-full">
      <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">Core Capabilities Comparison</h2>

      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-3 text-left">Feature</th>
              <th className="px-4 py-3 text-left">Falco</th>
              <th className="px-4 py-3 text-left">KubeArmor</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-3 font-medium">Primary Focus</td>
              <td className="px-4 py-3">Runtime threat detection</td>
              <td className="px-4 py-3">Runtime policy enforcement</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 font-medium">Detection Method</td>
              <td className="px-4 py-3">System call monitoring</td>
              <td className="px-4 py-3">LSM-based enforcement (AppArmor, SELinux)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Enforcement Capability</td>
              <td className="px-4 py-3">Detection only (alerts)</td>
              <td className="px-4 py-3">Detection and prevention</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 font-medium">Kubernetes Integration</td>
              <td className="px-4 py-3">Kubernetes-aware</td>
              <td className="px-4 py-3">Deeply integrated with K8s</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Performance Impact</td>
              <td className="px-4 py-3">Low to moderate</td>
              <td className="px-4 py-3">Low (kernel-level)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,

    // Slide 3: Key Differences and Use Cases
    <div key="falco-3" className="space-y-8 max-w-4xl">
      <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">Key Differences & Use Cases</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-500" />
            Falco
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Architecture:</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Uses eBPF or kernel module to monitor system calls, with rules engine for detection.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Strengths:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Mature, CNCF graduated project</li>
                <li>Rich ecosystem and integrations</li>
                <li>Extensive rule library</li>
                <li>Excellent for threat detection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Ideal Use Cases:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Threat detection and monitoring</li>
                <li>Compliance auditing</li>
                <li>Forensic analysis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-500" />
            KubeArmor
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Architecture:</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Uses Linux Security Modules (LSM) like AppArmor/SELinux for enforcement at kernel level.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Strengths:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Active prevention of threats</li>
                <li>Fine-grained policy enforcement</li>
                <li>Container-aware security</li>
                <li>Low performance overhead</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Ideal Use Cases:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Zero-trust environments</li>
                <li>Policy enforcement</li>
                <li>Workload isolation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mt-4">
        <h3 className="text-lg font-semibold mb-2">Complementary Use:</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Falco and KubeArmor can be used together: Falco for comprehensive threat detection and KubeArmor for active
          policy enforcement, creating a robust defense-in-depth strategy.
        </p>
      </div>
    </div>,
  ]

  return slides[slideIndex] || slides[0]
}
