import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"></div>
            <div className="container relative">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Accelerate Your MSP Pipeline?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Join hundreds of MSPs who are closing more deals with less effort. Start your free trial today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/signup">
                            <Button size="lg" className="text-lg px-8 py-6">
                                Start Free Trial
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                                Talk to Sales
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
