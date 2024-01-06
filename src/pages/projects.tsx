import Layout from "@/Layout/Layout";
import s from './styles/projects.module.scss';
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import leftArrow from '../../public/assets/arrow-left-3099.svg';
import Image from "next/image";
import {pjItemsData} from "@/data";
import React, {useState} from "react";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";

export default function Projects() {

  const [slideIndex, setSlideIndex] = useState(0);
  const actualTheme = useAppSelector((state: RootState) => state.theme);

  function onRightClick() {
    if (slideIndex === pjItemsData.length - 1) return;
    setSlideIndex(prev => prev + 1);
  }

  function onLeftClick() {
    if (slideIndex < 1) return;
    setSlideIndex(prev => prev - 1);
  }

  return (
    <Layout>
      <div className={actualTheme.theme === 'light' ? s.root : s.darkRoot}>
        <Image src={leftArrow} alt='' className={slideIndex > 0 ? s.arrowLeftActive : s.arrowLeftInactive}
               onClick={onLeftClick}/>
        <ProjectItem src={pjItemsData[slideIndex].src} title={pjItemsData[slideIndex].title}
                     description={pjItemsData[slideIndex].description} url={pjItemsData[slideIndex].url}/>
        <Image src={leftArrow} alt=''
               className={slideIndex === pjItemsData.length - 1 ? s.arrowRightInactive : s.arrowRightActive}
               onClick={onRightClick}/>
      </div>
    </Layout>
  )
}