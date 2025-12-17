import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function Hero() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container relative">
                <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-8">
                        <Shield className="h-4 w-4" />
                        MSP-Exclusive Sales Intelligence
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
                        Power Your MSP Pipeline with AI-Powered Intelligence
                    </h1>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        The only sales platform built exclusively for MSPs. Find ideal clients, track tech stacks, and accelerate your pipeline with AI that understands your market.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/signup">
                            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                                Start Free Trial
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/features">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                                See How It Works
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
