import { Search, TrendingUp, Zap, Shield, Users, BarChart3 } from "lucide-react"

export function Features() {
    const features = [
        {
            icon: Search,
            title: "MSP Prospect Discovery",
            description: "Find companies actively seeking managed IT services with our AI-powered prospecting engine."
        },
        {
            icon: TrendingUp,
            title: "Buying Signals for MSPs",
            description: "Track tech stack changes, compliance needs, and growth signals that indicate buying intent."
        },
        {
            icon: Zap,
            title: "AI-Powered Outreach",
            description: "Generate personalized sequences that speak directly to each prospect's pain points."
        },
        {
            icon: Shield,
            title: "Industry Firewall",
            description: "Your prospect data stays exclusively yours. We never share intelligence between MSP clients."
        },
        {
            icon: Users,
            title: "Decision Maker Access",
            description: "Direct contacts for IT Directors, CTOs, and business owners ready for MSP conversations."
        },
        {
            icon: BarChart3,
            title: "Pipeline Analytics",
            description: "Real-time dashboards showing your funnel health, conversion rates, and revenue forecasts."
        }
    ]

    return (
        <section className="py-20" id="features">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Built Exclusively for MSPs</h2>
                    <p className="text-muted-foreground">
                        Everything you need to find, engage, and close ideal MSP clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="p-6 rounded-2xl border bg-card premium-card"
                        >
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
