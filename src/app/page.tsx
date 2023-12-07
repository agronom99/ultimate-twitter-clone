import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center relative text-white bg-black">
      <div className=" max-w-[70vw] w-full h-full flex relative ">
        <LeftSidebar />
        <MainComponent />
        <section className=" w-full sticky top-2 overflow-y-scroll mt-2  flex flex-col items-screen h-screen px-6">
          <div>
            <div className=" relative w-full h-full group">
              <input
                id="searchBox"
                type="text"
                placeholder="Search Twitter"
                className=" w-full h-full rounded-xl p-4 outline-none peer focus:border-primary focus:border bg-gray-900/90 py-4 px-14"
              />
              <label
                htmlFor="searchBox"
                className=" absolute top-0  left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary"
              >
                <BsSearch className=" w-5 h-5 " />
              </label>
            </div>
          </div>
          <div className=" flex flex-col rounded-t-xl bg-neutral-900  mt-4">
            <h3 className=" font-bold text-xl my-2 p-2">What`s happening</h3>
          </div>
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className=" bg-neutral-900 hover:bg-white/20 p-4 last:rounded-b-xl transition duration-500"
              >
                <div className=" font-bold text-lg">#trending ${i + 1}</div>
                <div className=" text-xs text-neutral-400">35.4k</div>
              </div>
            ))}
          </div>
          <div className=" flex flex-col rounded-t-xl bg-neutral-900  mt-4">
            <h3 className=" font-bold text-xl my-2 p-2">Who to follow</h3>
          </div>
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className=" bg-neutral-900 hover:bg-white/20 flex p-4  justify-between items-center last:rounded-b-xl transition duration-500"
              >
                <div className=" flex items-center space-x-2">
                  <div className=" w-10 h-10 bg-neutral-500 rounded-full"></div>
                  <div className=" flex flex-col  ">
                    <div className=" font-bold text-white">Other User</div>
                    <div className=" text-gray-500 text-xs">@otheruser1232</div>
                  </div>
                </div>
                <div className="">
                  <button className=" rounded-full px-6 py-2 bg-white text-neutral-950">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
