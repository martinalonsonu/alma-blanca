import * as React from "react";
import { PropsSocialLinks } from "./types";

const FacebookIcon: React.FC<PropsSocialLinks> = ({ width, height, fill }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
    >
        <path
            fill={fill}
            d="M15 8a7 7 0 0 0-7-7 7 7 0 0 0-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7 7 0 0 0 15 8"
        />
    </svg>
);
export default FacebookIcon;