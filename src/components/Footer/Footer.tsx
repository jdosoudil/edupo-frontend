import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-auto w-full flex flex-wrap justify-end items-center gap-6 px-2 tablet:px-6 py-4 border-t">
            <Link className="underline" href={"/credits"}>
                O aplikaci
            </Link>
            <h4>
                Built with ❤️ on React/Next.js with Payload
            </h4>
        </footer>
    )
}