import { Star } from "lucide-react"

export function SocialProof() {
    const testimonials = [
        {
            quote: "Powered Pipeline Pro transformed our outbound process. We're booking 5x more meetings with half the effort.",
            author: "Sarah Jenkins",
            title: "VP of Sales, TechSecure MSP",
        },
        {
            quote: "The data accuracy is incredible. No more bounced emails or wrong numbers. It pays for itself in a week.",
            author: "Michael Chen",
            title: "Founder, CloudFirst IT",
        },
        {
            quote: "Finally, a tool built for MSPs. The intent data helps us target companies specifically looking for security services.",
            author: "David Rodriguez",
            title: "CRO, Managed Defenses",
        }
    ]

    return (
        <section className="py-20">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Trusted by High-Growth MSPs</h2>
                    <p className="text-muted-foreground">Join hundreds of MSPs scaling their sales efficienty.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-muted/30 border">
                            <div className="flex gap-1 mb-4 text-yellow-500">
                                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                            </div>
                            <p className="text-lg italic mb-6">&quot;{t.quote}&quot;</p>
                            <div>
                                <p className="font-semibold">{t.author}</p>
                                <p className="text-sm text-muted-foreground">{t.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
