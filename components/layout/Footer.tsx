import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="border-t bg-muted/20">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
                            <Image src="/logo.png" alt="Powered Pipeline Pro Logo" width={24} height={24} className="h-6 w-6" />
                            <span>Powered Pipeline Pro</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Empowering MSPs to scale sales efficiently with AI-powered prospecting and automation.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/features" className="hover:text-foreground">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
                            <li><Link href="/integrations" className="hover:text-foreground">Integrations</Link></li>
                            <li><Link href="/roadmap" className="hover:text-foreground">Roadmap</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
                            <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold">Subscribe to our newsletter</h3>
                        <p className="text-sm text-muted-foreground">
                            Get the latest updates on MSP sales strategies.
                        </p>
                        <div className="flex space-x-2">
                            <Input placeholder="Enter your email" type="email" className="max-w-[200px]" />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Powered Pipeline Pro. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
