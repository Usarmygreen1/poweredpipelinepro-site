export function Stats() {
    const stats = [
        { value: "10M+", label: "Verified Contacts" },
        { value: "50K+", label: "MSP Prospects" },
        { value: "95%", label: "Data Accuracy" },
        { value: "3x", label: "Pipeline Growth" },
    ]

    return (
        <section className="py-12 border-y bg-muted/30">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
