import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 font-bold text-xl tracking-tight">
                    <Image src="/logo.png" alt="Powered Pipeline Pro Logo" width={32} height={32} className="h-8 w-8" />
                    <span>Powered Pipeline Pro</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted-foreground">
                    <Link href="/features" className="hover:text-foreground transition-colors">Features</Link>
                    <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
                    <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                </nav>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/login">
                        <Button variant="ghost">Log in</Button>
                    </Link>
                    <Link href="/signup">
                        <Button>Start Free Trial</Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col space-y-6 mt-6">
                                <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
                                    <Image src="/logo.png" alt="Powered Pipeline Pro Logo" width={32} height={32} className="h-8 w-8" />
                                    <span>Powered Pipeline Pro</span>
                                </Link>
                                <div className="flex flex-col space-y-4">
                                    <Link href="/features" className="text-muted-foreground hover:text-foreground">Features</Link>
                                    <Link href="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link>
                                    <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
                                    <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
                                </div>
                                <div className="flex flex-col space-y-4 pt-4 border-t">
                                    <Link href="/login">
                                        <Button variant="ghost" className="w-full justify-start">Log in</Button>
                                    </Link>
                                    <Link href="/signup">
                                        <Button className="w-full">Start Free Trial</Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
