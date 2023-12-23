import Layout from "@/Layout/Layout";
import s from './styles/projects.module.scss';
import bookStorePj from '../../public/assets/bookStoreNextJsPj.png';
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import kanbanPjImg from '../../public/assets/kanban-board.png';
import weatherWidgetPjImg from '../../public/assets/weather-widget.png';
import todoListImg from '../../public/assets/todo-project.png';
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
        <Image src={leftArrow} alt='' width={64} height={64} className={slideIndex > 0 ? s.arrowLeftActive : s.arrowLeftInactive} onClick={onLeftClick}/>
        <ProjectItem src={pjItemsData[slideIndex].src} title={pjItemsData[slideIndex].title}
                     description={pjItemsData[slideIndex].description}/>
        <Image src={leftArrow} alt='' width={64} height={64} className={slideIndex === pjItemsData.length - 1 ? s.arrowRightInactive : s.arrowRightActive} onClick={onRightClick}/>
      </div>
    </Layout>
  )
}