import * as React from "react";
import FacebookIcon from './svg/fb-icon'
import InstagramIcon from './svg/insta-icon'
import WhatsappIcon from './svg/wapp-icon'
import { socialLinks } from "@/utils/social-links";

const classes = {
    header: 'flex w-full h-8 px-16 justify-end bg-black text-white',
    iconsContainer: "flex items-center gap-2"
}

const HeadBoard: React.FC = () => {
    return (
        <header className={classes.header}>
            <div className={classes.iconsContainer}>
                <a href={socialLinks.facebook} target="_blank">
                    <FacebookIcon width={23} height={23} fill="#fff" />
                </a>
                <a href={socialLinks.instagram} target="_blank">
                    <InstagramIcon width={21} height={21} fill="#fff" />
                </a>
                <a href={socialLinks.whatsapp} target="_blank">
                    <WhatsappIcon width={24} height={24} fill="#fff" />
                </a>
            </div>
        </header>
    )
}

export default HeadBoard