'use client'

import { useAuth } from '@/components/auth/AuthProvider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

export default function DashboardPage() {
    const { user, isLoading, signOut } = useAuth()

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    return (
        <div className="container py-20">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome back!</CardTitle>
                        <CardDescription>You are logged in as {user?.email}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-6 text-muted-foreground">
                            This is a protected dashboard area. Access is restricted to authenticated users only.
                        </p>
                        <Button onClick={signOut} variant="destructive">
                            Sign Out
                        </Button>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Placeholder for future dashboard widgets */}
                    {['Lead Pipeline', 'Recent Activity', 'Market Signals'].map((item) => (
                        <Card key={item} className="opacity-50">
                            <CardHeader>
                                <CardTitle>{item}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">Functionality coming soon...</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
