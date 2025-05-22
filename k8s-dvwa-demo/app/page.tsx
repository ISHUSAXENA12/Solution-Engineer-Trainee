"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import KubernetesAttackVectors from "@/components/kubernetes-attack-vectors"
import CloudSecurityComparison from "@/components/cloud-security-comparison"
import FalcoVsKubeArmor from "@/components/falco-vs-kubearmor"
import KyvernoVsOpa from "@/components/kyverno-vs-opa"
import ApiSecurityApproaches from "@/components/api-security-approaches"

export default function Presentation() {
  const [activeTab, setActiveTab] = useState("kubernetes")
  const [slideIndex, setSlideIndex] = useState(0)

  const topics = [
    { id: "kubernetes", label: "K8s Attack Vectors", component: KubernetesAttackVectors },
    { id: "cloud", label: "AWS vs Azure Security", component: CloudSecurityComparison },
    { id: "falco", label: "Falco vs KubeArmor", component: FalcoVsKubeArmor },
    { id: "kyverno", label: "Kyverno vs OPA", component: KyvernoVsOpa },
    { id: "api", label: "API Security", component: ApiSecurityApproaches },
  ]

  const currentTopic = topics.find((topic) => topic.id === activeTab)
  const Component = currentTopic?.component || KubernetesAttackVectors

  const maxSlides = {
    kubernetes: 3,
    cloud: 3,
    falco: 3,
    kyverno: 3,
    api: 3,
  }

  const handleNext = () => {
    if (slideIndex < maxSlides[activeTab as keyof typeof maxSlides] - 1) {
      setSlideIndex(slideIndex + 1)
    } else {
      // Move to next topic
      const currentIndex = topics.findIndex((topic) => topic.id === activeTab)
      if (currentIndex < topics.length - 1) {
        setActiveTab(topics[currentIndex + 1].id)
        setSlideIndex(0)
      }
    }
  }

  const handlePrevious = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
    } else {
      // Move to previous topic
      const currentIndex = topics.findIndex((topic) => topic.id === activeTab)
      if (currentIndex > 0) {
        setActiveTab(topics[currentIndex - 1].id)
        setSlideIndex(maxSlides[topics[currentIndex - 1].id as keyof typeof maxSlides] - 1)
      }
    }
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setSlideIndex(0)
  }

  const handleHome = () => {
    setActiveTab("kubernetes")
    setSlideIndex(0)
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex flex-col">
      <header className="bg-white dark:bg-slate-800 shadow-sm py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kubernetes Security Presentation</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleHome}>
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            <span className="text-sm text-muted-foreground">
              Slide {slideIndex + 1} of {maxSlides[activeTab as keyof typeof maxSlides]}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
          <TabsList className="grid grid-cols-5 w-full">
            {topics.map((topic) => (
              <TabsTrigger key={topic.id} value={topic.id}>
                {topic.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Card className="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden aspect-[16/9] max-h-[70vh]">
          <div className="h-full w-full p-8 flex items-center justify-center">
            <Component slideIndex={slideIndex} />
          </div>
        </Card>

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handlePrevious} disabled={slideIndex === 0 && activeTab === topics[0].id}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={
              slideIndex === maxSlides[activeTab as keyof typeof maxSlides] - 1 &&
              activeTab === topics[topics.length - 1].id
            }
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </main>

      <footer className="bg-white dark:bg-slate-800 py-4 px-6 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          Kubernetes Security Presentation | {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}
