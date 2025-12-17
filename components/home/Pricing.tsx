import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function Pricing() {
    return (
        <section className="py-20 bg-muted/20" id="pricing">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
                    <p className="text-muted-foreground">
                        No hidden fees. No long-term contracts. Just results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter */}
                    <div className="p-8 rounded-2xl border bg-card flex flex-col">
                        <h3 className="font-semibold text-xl mb-2">Starter</h3>
                        <div className="text-3xl font-bold mb-4">$79<span className="text-base font-normal text-muted-foreground">/user/mo</span></div>
                        <p className="text-muted-foreground text-sm mb-6">Perfect for small MSPs just starting outreach.</p>
                        <ul className="space-y-3 mb-8 flex-1">
                            {['500 verified contacts', 'Basic AI templates', 'Email sequences', 'Standard support'].map((feature) => (
                                <li key={feature} className="flex items-center text-sm">
                                    <Check className="h-4 w-4 text-primary mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Link href="/signup">
                            <Button variant="outline" className="w-full">Start Free Trial</Button>
                        </Link>
                    </div>

                    {/* Professional */}
                    <div className="p-8 rounded-2xl border border-primary bg-primary/5 flex flex-col relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            Most Popular
                        </div>
                        <h3 className="font-semibold text-xl mb-2">Professional</h3>
                        <div className="text-3xl font-bold mb-4">$149<span className="text-base font-normal text-muted-foreground">/user/mo</span></div>
                        <p className="text-muted-foreground text-sm mb-6">For growing teams needing advanced data.</p>
                        <ul className="space-y-3 mb-8 flex-1">
                            {['2,500 verified contacts', 'Advanced AI prospecting', 'Multi-channel outreach', 'CRM integrations', 'Priority support'].map((feature) => (
                                <li key={feature} className="flex items-center text-sm">
                                    <Check className="h-4 w-4 text-primary mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Link href="/signup">
                            <Button className="w-full">Start Free Trial</Button>
                        </Link>
                    </div>

                    {/* Enterprise */}
                    <div className="p-8 rounded-2xl border bg-card flex flex-col">
                        <h3 className="font-semibold text-xl mb-2">Enterprise</h3>
                        <div className="text-3xl font-bold mb-4">Custom</div>
                        <p className="text-muted-foreground text-sm mb-6">For large organizations requiring scale.</p>
                        <ul className="space-y-3 mb-8 flex-1">
                            {['Unlimited contacts', 'Custom AI models', 'Dedicated Success Manager', 'API Access', 'White-label options'].map((feature) => (
                                <li key={feature} className="flex items-center text-sm">
                                    <Check className="h-4 w-4 text-primary mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact">
                            <Button variant="outline" className="w-full">Talk to Sales</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
