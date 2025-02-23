import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-auto w-full flex flex-wrap justify-end items-center gap-6 px-docOffsetXSmall tablet:px-docOffsetXBig py-docOffsetY border-t bg-white">
            <Link className="underline" href={"/credits"}>
                O aplikaci
            </Link>
            <h4>
                Built with ❤️ on React/Next.js with Payload
            </h4>
        </footer>
    )
}