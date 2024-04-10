import "./section-title.scss"
interface SectionProps { title: string }

export function SectionTitle({ title }: Readonly<SectionProps>) {
    return (
        <h3 className="section-title">{title}</h3>
    )
}