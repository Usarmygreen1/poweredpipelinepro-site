"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { createClient } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
    firstName: z.string().min(2, "First name required"),
    lastName: z.string().min(2, "Last name required"),
    email: z.string().email("Invalid email address"),
    companyName: z.string().min(2, "Company name required"),
    companySize: z.string().min(1, "Please select company size"),
    password: z.string().min(8, "Password must be at least 8 characters").regex(/[0-9]/, "Must contain a number").regex(/[^a-zA-Z0-9]/, "Must contain a special character"),
    confirmPassword: z.string(),
    terms: z.boolean().refine(val => val === true, "You must agree to terms"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

export function SignupForm() {
    const [isLoading, setIsLoading] = useState(false)
    const supabase = createClient()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            companyName: "",
            companySize: "",
            password: "",
            confirmPassword: "",
            terms: false,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        try {
            const { error } = await supabase.auth.signUp({
                email: values.email,
                password: values.password,
                options: {
                    data: {
                        first_name: values.firstName,
                        last_name: values.lastName,
                        company_name: values.companyName,
                        company_size: values.companySize,
                    },
                },
            })

            if (error) {
                toast.error("Signup failed", { description: error.message })
                return
            }

            toast.success("Account created!", { description: "Please check your email to verify your account." })
        } catch {
            toast.error("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full max-w-md space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight">Create your Powered Pipeline Pro account</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                    Start your 14-day free trial. No credit card required.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl><Input placeholder="Jane" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl><Input placeholder="Doe" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Work Email</FormLabel>
                                <FormControl><Input type="email" placeholder="jane@company.com" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company</FormLabel>
                                    <FormControl><Input placeholder="Acme Inc" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="companySize"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Size</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="1-10">1-10</SelectItem>
                                            <SelectItem value="11-50">11-50</SelectItem>
                                            <SelectItem value="51-200">51-200</SelectItem>
                                            <SelectItem value="201-500">201-500</SelectItem>
                                            <SelectItem value="500+">500+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl><Input type="password" {...field} /></FormControl>
                                <FormDescription>Min 8 chars, 1 number, 1 special.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl><Input type="password" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>
                                        I agree to the <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                                    </FormLabel>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Create Account
                    </Button>
                </form>
            </Form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or continue with</span></div>
            </div>

            <div className="grid grid-cols-1 gap-2">
                <Button variant="outline" type="button" disabled={isLoading}>
                    Google
                </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
                Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link>
            </p>
        </div>
    )
}
