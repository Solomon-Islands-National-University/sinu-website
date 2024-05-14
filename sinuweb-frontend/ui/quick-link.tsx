import Link from "next/link";

interface LinkProps {
    text: string;
    link: string;
}

function QuickLink({link, text}: LinkProps) {
    return (
        <Link 
            href={link}
            className="text-sm font-extralight text-slate-200 hover:underline"
        >
            {text}
        </Link>
    );
}

export default QuickLink;