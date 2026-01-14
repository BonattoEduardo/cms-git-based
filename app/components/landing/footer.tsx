import Markdown from "react-markdown";

interface FooterProps {
    content: string;
}

export function Footer({ content }: FooterProps) {
    return (
        <footer className="py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left prose prose-sm prose-a:font-medium prose-a:underline prose-a:underline-offset-4 prose-a:text-muted-foreground">
                    <Markdown>{content}</Markdown>
                </div>
            </div>
        </footer>
    );
}
