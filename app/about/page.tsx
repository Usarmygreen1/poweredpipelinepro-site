import Image from "next/image"

export const metadata = {
    title: "About Us | Powered Pipeline Pro",
    description: "Learn about the team behind the first AI sales platform for MSPs.",
}

export default function AboutPage() {
    return (
        <div className="py-20">
            <div className="container">
                {/* Story */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <div className="inline-flex items-center justify-center p-3 mb-6 bg-primary/10 rounded-full">
                        <Image src="/logo.png" alt="Powered Pipeline Pro Logo" width={32} height={32} className="h-8 w-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Built for MSPs, by MSP Pros</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We founded Powered Pipeline Pro because existing sales tools were too generic.
                        We saw MSPs struggling with &quot;spray and pray&quot; tactics that didn&apos;t work in the security-first world.
                        Our mission is to empower MSP sales teams with AI that truly understands their market.
                    </p>
                </div>

                {/* Team */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">Meet the Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {/* Darrian */}
                        <div className="flex flex-col items-center text-center">
                            <div className="h-32 w-32 rounded-full bg-muted mb-6 flex items-center justify-center text-2xl font-bold text-muted-foreground">DG</div>
                            <h3 className="text-2xl font-bold mb-1">Darrian Green</h3>
                            <p className="text-primary font-medium mb-4">Founder & CEO</p>
                            <p className="text-muted-foreground">
                                Visionary leader with deep expertise in MSP security architectures and sales automation.
                            </p>
                        </div>

                        {/* Mike Wright */}
                        <div className="flex flex-col items-center text-center">
                            <div className="h-32 w-32 rounded-full bg-muted mb-6 flex items-center justify-center text-2xl font-bold text-muted-foreground">MW</div>
                            <h3 className="text-2xl font-bold mb-1">Mike Wright</h3>
                            <p className="text-primary font-medium mb-4">Chief Designer</p>
                            <p className="text-muted-foreground">
                                Crafting intuitive, beautiful experiences that make complex data actionable for sales teams.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-muted/20 rounded-3xl p-12">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Transparency</h3>
                        <p className="text-muted-foreground">No hidden fees, no opaque data sources. We believe in open partnership.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Innovation</h3>
                        <p className="text-muted-foreground">We ship fast. The threats change daily, and your sales tools should too.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Client-First</h3>
                        <p className="text-muted-foreground">Your success is our metric. If you don&apos;t grow, we don&apos;t grow.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
