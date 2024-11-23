import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
    return (
        <header className="w-full flex gap-6 justify-between items-center flex-wrap px-2 tablet:px-6 py-2">
            <Link href="/">
                <h1>
                    EduPo
                </h1>
            </Link>
            <SidebarTrigger />
        </header>
    )
}