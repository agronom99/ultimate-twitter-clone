import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";


const Home = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center relative text-white bg-black">
      <div className=" max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent/>
        {/* <section>right</section> */}
      </div>
    </div>
  );
};

export default Home;
