import { BiHomeCircle, BiUser } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";
import { BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitter } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
// import { TfiTwitter } from "react-icons/tfi";
import Link from "next/link";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const LeftSidebar = () => {
  return (
    <section className=" sticky top-0 w-[30%] flex flex-col items-screen h-screen px-6 ">
    {/* <Link className=" py-2 px-6 text-2xl  hover:bg-white/70" href={"/"}>
      <BsTwitter />
    </Link> */}
    <div className=" flex flex-col items-screen h-full space-y-4 my-4">
      {NAVIGATION_ITEMS.map((item) => (
        <Link
          className=" hover:bg-white/70 text-3xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
          href={"/${item.title.toLowerCase()}"}
          key={item.title}
        >
          <div>
            <item.icon />
          </div>
          {item.title !== "Twitter" && <div>{item.title}</div>}
        </Link>
      ))}
      <button className=" w-full m-4 rounded-full bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
        Tweet
      </button>
    </div>
    <button className="rounded-full flex items-center m-4 space-x-2 bg-transparent p-4  text-center hover:bg-white/70 hover:bg-opacity-70 transition duration-200 w-full justify-between">
    <div className=" flex items-center space-x-2">
      <div className=" rounded-full bg-slate-400 w-10 h-10"></div>
        <div className="text-left text-sm">
          <div className=" font-semibold">Club Of Coders</div>
          <div className=" ">@clubofcoderscom</div>
        </div>
      </div>
      <div>
        <BsThreeDots />
      </div>
    </button>
  </section>
  )
}

export default LeftSidebar