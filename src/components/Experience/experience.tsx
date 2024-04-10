import { SectionTitle } from "../Section-title/section-title"
import { Skills } from "../Skills/skill"
import "./experience.scss"

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle title="Experience" />
            <p>
                One year working as a Freelancer Software Developer,
                my principal languge is JavaScript, i do use frameworks as
                React, Nest.
            </p>
            <Skills language="JavaScript" img="/js.png" years={1} />
            <Skills language="React" img="/react.png" years={1} />
            <Skills language="TypeScript" img="/ts.png" years={1} />
        </div>

    )
}