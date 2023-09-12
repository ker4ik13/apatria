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

const MainPage = () => {
  return (
    <>
      <Droites />
      <Labs />
      <LabsVariable id={1} img={labs1} title='title' text='text' />
      <FingerTest />
      <LabsVariable id={2} img={labs2} title='title' text='text' />
      <LabsVariable id={3} img={labs3} title='title' text='text' />
      <LabsVariable id={4} img={labs4} title='title' text='text' />
      <LabsVariable id={5} img={labs5} title='title' text='text' />
      <LabsVariable id={6} img={labs6} title='title' text='text' />
    </>
  );
};

export default MainPage;
