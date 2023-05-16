import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-col bg-black h-screen  items-center justify-evenly w-[220px] rounded-r-2xl">
      <div className=" flex flex-col items-center mx-auto justify-evenly text-xl mt-10 ">
       <div>
       <ul className="text-white flex flex-col text-start  mb-8">
          <li className="mb-5 w-[120px] text-start ">
            <a className="hover:text-[#CD5888] cursor-pointer" href="">Home</a>
          </li>
          <li className="mb-5">
            <a className="hover:text-[#CD5888] cursor-pointer" href="">Course</a>
          </li>
          <li className="mb-5">
            <a className="hover:text-[#CD5888] cursor-pointer" href="">Students</a>
          </li>
        </ul>
       </div>

       <hr className="w-[120px] mb-10 " />

       
        <div className="">
        <ul className="text-white text-start mb-8">
        <li className="mb-5 w-[120px] text-start ">
            <a className="hover:text-[#CD5888] cursor-pointer" href="">Schedule </a>
          </li>
          <li className="mb-5">
            <a className="hover:text-[#CD5888] cursor-pointer" href="">Live Classes </a>
          </li>
          <li className="mb-5">
            <a className="hover:text-[#CD5888] cursor-pointer" href="">Study Material</a>
          </li>
          <li className="mb-5">
            <a className="hover:text-[#CD5888] cursor-pointer" href="">Students</a>
          </li>
        </ul>
        </div>

        <hr className="w-[120px] mb-10 " />
        
       <div className="">
       <ul className="text-white mb-5">
        <li className="mb-5 w-[120px] text-start  ">
            <a className="hover:text-[#CD5888] cursor-pointer" href="">Chats</a>
          </li>
          <li className="mb-5">
            <a className="hover:text-[#CD5888] cursor-pointer" href="">Profile</a>
          </li>
        </ul>
       </div>

      </div>
      
      <div  >
        <button className="w-[150px]  h-[35px] rounded bg-slate-500 text-white flex items-center justify-center " >
        <img src="setting.png"  className="w-[23px] h-[23px] mr-2" alt="" />
         <a  href="">Settings</a>
        </button>
      </div>
    
    </div>
  );
};

export default NavBar;