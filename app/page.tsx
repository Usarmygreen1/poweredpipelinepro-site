import { Hero } from "@/components/home/Hero"
import { Stats } from "@/components/home/Stats"
import { Features } from "@/components/home/Features"
import { Comparison } from "@/components/home/Comparison"
import { SocialProof } from "@/components/home/SocialProof"
import { Pricing } from "@/components/home/Pricing"
import { CTA } from "@/components/home/CTA"

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Features />
            <Comparison />
            <SocialProof />
            <Pricing />
            <CTA />
        </>
    )
}
