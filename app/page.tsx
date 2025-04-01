import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Clock, Shield, Bell, ChevronRight } from "lucide-react"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import CtaSection from "@/components/CtaSection"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ProblemSection from "@/components/ProblemSection"
import SolutionSection from "@/components/SolutionSection"
import BenefitsSection from "@/components/BenefitsSection"
import LogoCarouselSection from "@/components/LogoCarouselSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] relative">
      {/* Absolute position for the header to overlay the hero */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

