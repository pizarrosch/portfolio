import {StaticImageData} from "next/image";
import {Dispatch, SetStateAction} from "react";

export type TShowStatus = {
    active: boolean;
}

export type TProject = {
    src: StaticImageData,
    title: string,
    description: string,
    url?: string,
    gitHubUrl?: string
}

export type TTheme = {
    theme: string
}

export type TDropdown = {
    isDropdownVisible: boolean,
    setIsDropdownVisible: Dispatch<SetStateAction<boolean>>,
    IsMobileMenuVisible: boolean,
    setIsMobileMenuVisible: Dispatch<SetStateAction<boolean>>,
    leftOffset: number,
    topOffset: number
}