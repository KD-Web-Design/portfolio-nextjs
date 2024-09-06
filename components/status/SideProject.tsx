import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

export type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url?: string;
}

export const SideProject = (props: SideProjectProps) => {
    const content = (
        <div className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors rounded p-1 cursor-pointer'>
            <span className='bg-accent text-accent-foreground p-3 rounded-sm'>
                <props.Logo />
            </span>
            <div className='w-full'>
                <p className="text-md font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </div>
    );
    return props.url ? (
        <Link href={props.url} target='blank'>
            {content}
        </Link>
    ) : (
        content
    );
}
