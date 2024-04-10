import { SectionTitle } from "../Section-title/section-title"
import "./infos.scss"

export function Informations() {
    return (
        <div className="infos" >

            <SectionTitle title="Languanges" />
            <p>🇺🇸 English - Fluent</p>
            <p>🇧🇷 Portuguese - Native Speaker</p>

            <SectionTitle title="Education" />
            <p>🎓 UFPI- Física Bachelors Degree </p>
        </div>
    )

}
