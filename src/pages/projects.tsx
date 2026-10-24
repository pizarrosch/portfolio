import Layout from "@/Layout/Layout";
import s from './styles/projects.module.scss';
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import leftArrow from '../../public/assets/arrow-left-3099.svg';
import Image from "next/image";
import {pjItemsData} from "@/data";
import React, {useState} from "react";

export default function Projects() {
  const [slideIndex, setSlideIndex] = useState(0);

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
      <div className={s.root}>
        <Image src={leftArrow} alt='Previous' className={slideIndex > 0 ? s.arrowActive : s.arrowInactive}
               onClick={onLeftClick}/>
        <ProjectItem src={pjItemsData[slideIndex].src} title={pjItemsData[slideIndex].title}
                     description={pjItemsData[slideIndex].description} url={pjItemsData[slideIndex].url}
                     gitHubUrl={pjItemsData[slideIndex].githubUrl}/>
        <Image src={leftArrow} alt='Next'
               className={`${s.arrowRight} ${slideIndex === pjItemsData.length - 1 ? s.arrowInactive : s.arrowActive}`}
               onClick={onRightClick}/>
      </div>
    </Layout>
  )
}
