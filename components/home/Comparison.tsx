import { Check, X } from "lucide-react"

export function Comparison() {
    const comparisons = [
        { feature: "MSP-Specific Data", us: true, them: false },
        { feature: "Tech Stack Tracking", us: true, them: false },
        { feature: "Compliance Intent Signals", us: true, them: false },
        { feature: "Exclusive Client Data", us: true, them: false },
        { feature: "AI Personalization", us: true, them: true },
        { feature: "CRM Integrations", us: true, them: true },
        { feature: "Email Sequences", us: true, them: true },
    ]

    return (
        <section className="py-20 bg-muted/20">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Why MSPs Choose Us Over Generic Tools</h2>
                    <p className="text-muted-foreground">
                        See how Powered Pipeline Pro stacks up against ZoomInfo, Apollo, and other generic platforms.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center font-semibold">
                        <div></div>
                        <div className="text-primary">Powered Pipeline Pro</div>
                        <div className="text-muted-foreground">Generic Tools</div>
                    </div>

                    {comparisons.map((item) => (
                        <div key={item.feature} className="grid grid-cols-3 gap-4 py-4 border-b items-center">
                            <div className="font-medium">{item.feature}</div>
                            <div className="flex justify-center">
                                {item.us ? (
                                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Check className="h-5 w-5 text-primary" />
                                    </div>
                                ) : (
                                    <div className="h-8 w-8 rounded-full bg-destructive/20 flex items-center justify-center">
                                        <X className="h-5 w-5 text-destructive" />
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-center">
                                {item.them ? (
                                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                                        <Check className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                ) : (
                                    <div className="h-8 w-8 rounded-full bg-destructive/20 flex items-center justify-center">
                                        <X className="h-5 w-5 text-destructive" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
