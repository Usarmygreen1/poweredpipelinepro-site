import { LoginForm } from "@/components/auth/LoginForm"
import Image from "next/image"

export const metadata = {
    title: "Login | Powered Pipeline Pro",
    description: "Access your dashboard.",
}

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-muted/20 p-4">
            <div className="mb-8 flex items-center space-x-2 font-bold text-2xl text-primary">
                <Image src="/logo.png" alt="Powered Pipeline Pro Logo" width={32} height={32} className="h-8 w-8" />
                <span>Powered Pipeline Pro</span>
            </div>

            <div className="w-full max-w-md bg-background rounded-2xl border shadow-sm p-8">
                <LoginForm />
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Powered Pipeline Pro. All rights reserved.
            </p>
        </div>
    )
}
