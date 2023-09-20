import Droites from "@/widgets/Droites/Droites";
import Labs from "@/widgets/Labs/Labs";
import LabsVariable from "@/widgets/LabsVariable";
import labs1 from "@/images/labs/1.jpeg";
import labs2 from "@/images/labs/2.jpeg";
import labs3 from "@/images/labs/3.jpeg";
import labs4 from "@/images/labs/4.jpeg";
import labs5 from "@/images/labs/5.jpeg";
import labs6 from "@/images/labs/6.jpeg";
import FingerTest from "@/widgets/Labs1Test";
import FirstPage from "@/widgets/FirstPage";
import Slider from "@/widgets/SliderPage";
import Questionnaire from "@/widgets/Questionnaire";
import Microphone from "@/widgets/Microphone";
import PhotoPage from "../PhotoPage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const MainPage = () => {
  const { hash } = useLocation();
  console.log(hash);

  useEffect(() => {
    // if (hash === "#labs") {
    //   const scrollTo = document.querySelector("#labs");

    //   if (scrollTo) {
    //     const x = scrollTo.scrollHeight + window.innerHeight * 2;

    //     window.scrollTo({
    //       top: x,
    //       behavior: "smooth",
    //     });
    //   }
    // if (hash) {
    //   const scrollTo = document.querySelector(hash);

    //   if (scrollTo) {
    //     const x = scrollTo.scrollHeight + scrollTo.clientHeight;

    //     window.scrollTo({
    //       top: x,
    //       behavior: "smooth",
    //     });
    //   }
    // }
    if (hash) {
      const scrollTo: HTMLElement | null = document.querySelector(hash);

      if (scrollTo) {
        window.scrollTo({
          top: scrollTo.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);
  return (
    <>
      <FirstPage />
      <Slider />
      <Droites />
      <Labs />
      <LabsVariable id={1} img={labs1} title='title' text='text' />
      <FingerTest />
      <LabsVariable
        id={2}
        img={labs2}
        title='title'
        text='text'
        buttonLink='/test/0'
        buttonText='Пройти тест'
      />
      <LabsVariable id={3} img={labs3} title='title' text='text' />
      <LabsVariable id={4} img={labs4} title='title' text='text' />
      <Microphone />
      <LabsVariable id={5} img={labs5} title='title' text='text' />
      <PhotoPage single={true} />
      <LabsVariable id={6} img={labs6} title='title' text='text' />
      <Questionnaire link='https://google.com' text='Google' />
    </>
  );
};

export default MainPage;
