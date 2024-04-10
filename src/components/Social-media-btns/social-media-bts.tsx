import { EmailIcon } from "../Icons/email-icon";
import { GitHubIcon } from "../Icons/github-icon";
import { LinkedInIcon } from "../Icons/linkedIn-icon";
import "./social-media-bts.scss"

export function SocialMediaButtons() {
    return (
        <div className="buttons">
            <div className="socialButtons">
                <a href="https://github.com/mickalala" target="_blank">
                    <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/mickaelly-larissa-rodrigues/" target="_blank">
                    <LinkedInIcon />
                </a>
            </div>
            <a className="btn-primary" href="mailto:mickalarissa01@gmail.com">
                email <EmailIcon />
            </a>
        </div>
    )
}