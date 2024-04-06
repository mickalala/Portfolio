import "./header.scss"
import Image from "next/image"

export function Header() {
    return (
        <div className="header">
            <div>
                <h1>Software Developer </h1>
                <h2>Welcome to my Portfolio, I'm Mickaelly!</h2>
            </div>
            <Image src="/me.jpg"
                alt="my picture"
                width={325}
                height={310}
                priority />

        </div>
    )
}