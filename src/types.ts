import {StaticImageData} from "next/image";

export type TShowStatus = {
    show: true | false;
}

export type TProject = {
    src: StaticImageData,
    title: string,
    description: string
}