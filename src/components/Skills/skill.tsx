interface SkillProps {
    img: string,
    language: string,
    years: number
}
import "./skill.scss"

export function Skills({ language, img }: Readonly<SkillProps>) {
    return (
        <div className="skills">
            <img src={img} alt="javaScript logo" />
            <div className="experience-div">
                <div className="experience-measure">
                    <p>{language}</p>
                </div>
            </div>
        </div>
    )
}