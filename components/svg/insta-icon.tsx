import * as React from "react";
import { PropsSocialLinks } from "./types";

const InstagramIcon: React.FC<PropsSocialLinks> = ({ width, height, fill }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" fill={fill} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 0A4.5 4.5 0 0 0 0 4.5v6A4.5 4.5 0 0 0 4.5 15h6a4.5 4.5 0 0 0 4.5-4.5v-6A4.5 4.5 0 0 0 10.5 0zM4 7.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M11 4h1V3h-1z"
            fill={fill}
        />
    </svg>
);
export default InstagramIcon;
