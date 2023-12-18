import Layout from "@/Layout/Layout";
import s from './styles/projects.module.scss';
import bookStorePj from '../../public/assets/Bookstore_pj.png';
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
    setSlideIndex(prev => prev + 1);
  }

  return (
    <Layout>
      <div className={s.root}>
        <Image src={leftArrow} alt='' width={64} height={64} className={s.arrowLeftInactive} />
        <ProjectItem src={pjItemsData[slideIndex].src} title={pjItemsData[slideIndex].title}
                     description={pjItemsData[slideIndex].description}/>
        <Image src={leftArrow} alt='' width={64} height={64} className={s.arrowRightActive} onClick={onRightClick}/>
      </div>
    </Layout>
  )
}