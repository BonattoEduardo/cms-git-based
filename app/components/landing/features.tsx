import * as Icons from "lucide-react";

interface Feature {
    title: string;
    description: string;
    icon: string;
}

interface FeaturesProps {
    items: Feature[];
}

export function Features({ items }: FeaturesProps) {
    return (
        <section
            id="features"
            className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
            <div className="mx-auto flex flex-col items-center space-y-4 text-center">
                <h2 className="font-sans text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
                    Recursos
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Tudo o que você precisa para criar seu site rápido.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
                {items?.map((feature, index) => {
                    const Icon = (Icons as any)[feature.icon] || Icons.Zap;
                    return (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg border bg-background p-2"
                        >
                            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                <Icon className="h-12 w-12" />
                                <div className="space-y-2">
                                    <h3 className="font-bold">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
