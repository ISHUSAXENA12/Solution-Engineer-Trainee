import { Shield, Lock, Database, Network, Server } from "lucide-react"

interface KubernetesAttackVectorsProps {
  slideIndex: number
}

export default function KubernetesAttackVectors({ slideIndex }: KubernetesAttackVectorsProps) {
  const slides = [
    // Slide 1: Title and Introduction
    <div key="k8s-1" className="text-center space-y-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Top 5 Kubernetes Security Attack Vectors</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Understanding the most critical security vulnerabilities in Kubernetes environments
      </p>
      <div className="pt-6 grid grid-cols-5 gap-4">
        {[Shield, Lock, Database, Network, Server].map((Icon, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        ))}
      </div>
    </div>,

    // Slide 2: Attack Vectors 1-3
    <div key="k8s-2" className="space-y-8 max-w-4xl">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">Top 5 Kubernetes Attack Vectors</h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0">
            <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">1. Misconfigured RBAC Policies</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Overly permissive Role-Based Access Control settings allow attackers to escalate privileges and gain
              unauthorized access to cluster resources.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center flex-shrink-0">
            <Lock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">2. Exposed Kubernetes Dashboard</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Publicly accessible dashboards without proper authentication can lead to complete cluster compromise,
              allowing attackers to deploy malicious workloads.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
            <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">3. Insecure etcd Configuration</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Unencrypted etcd instances or weak authentication can expose sensitive configuration data, secrets, and
              credentials stored in the Kubernetes database.
            </p>
          </div>
        </div>
      </div>
    </div>,

    // Slide 3: Attack Vectors 4-5 and Mitigation
    <div key="k8s-3" className="space-y-8 max-w-4xl">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">Top 5 Kubernetes Attack Vectors</h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
            <Network className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">4. Container Escape Vulnerabilities</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Exploiting container runtime vulnerabilities to escape isolation and gain access to the host system,
              potentially compromising the entire cluster.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
            <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">5. Supply Chain Attacks</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Compromised container images or dependencies can introduce backdoors, malware, or vulnerabilities into
              your Kubernetes environment.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Key Mitigation Strategies:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
            <li>Implement least privilege RBAC policies</li>
            <li>Use Network Policies to segment cluster traffic</li>
            <li>Enable audit logging and monitoring</li>
            <li>Scan container images for vulnerabilities</li>
            <li>Keep Kubernetes components updated</li>
          </ul>
        </div>
      </div>
    </div>,
  ]

  return slides[slideIndex] || slides[0]
}
