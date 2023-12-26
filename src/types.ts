import {StaticImageData} from "next/image";

export type TShowStatus = {
    active: boolean;
}

export type TProject = {
    src: StaticImageData,
    title: string,
    description: string,
    url?: string
}