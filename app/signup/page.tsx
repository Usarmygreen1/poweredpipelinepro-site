import { SignupForm } from "@/components/auth/SignupForm"
import { Check } from "lucide-react"
import Image from "next/image"

export const metadata = {
    title: "Start Free Trial | Powered Pipeline Pro",
    description: "Join the leading MSP sales platform.",
}

export default function SignupPage() {
    return (
        <div className="flex min-h-screen">
            {/* Left: Form */}
            <div className="flex-1 flex flex-col justify-center px-4 py-12 md:px-12 lg:flex-none lg:w-1/2 xl:w-[600px] bg-background">
                <div className="w-full max-w-md mx-auto">
                    <div className="flex items-center space-x-2 font-bold text-xl mb-12 text-primary">
                        <Image src="/logo.png" alt="Powered Pipeline Pro Logo" width={32} height={32} className="h-8 w-8" />
                        <span>Powered Pipeline Pro</span>
                    </div>
                    <SignupForm />
                    <p className="mt-8 text-center text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Powered Pipeline Pro.
                    </p>
                </div>
            </div>

            {/* Right: Benefits */}
            <div className="hidden lg:flex flex-1 bg-muted relative items-center justify-center p-12">
                <div className="max-w-lg">
                    <h2 className="text-3xl font-bold mb-6">Scale your MSP sales with confidence</h2>
                    <ul className="space-y-4 mb-12">
                        {[
                            "Access to 10M+ verified contacts",
                            "AI-driven lead scoring models",
                            "Automated multi-channel sequences",
                            "SOC 2 Type II Certified Security"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-lg">
                                <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                                    <Check className="h-5 w-5" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="bg-background/50 backdrop-blur p-8 rounded-2xl border">
                        &quot;Powered Pipeline Pro has been a game changer for our prospecting. We&apos;ve doubled our pipeline in 30 days.&quot;
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-bold">JD</div>
                            <div>
                                <p className="font-semibold">John Davis</p>
                                <p className="text-sm text-muted-foreground">CEO, SecureNet MSP</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative background */}
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </div>
        </div>
    )
}
