import { FiSearch } from "react-icons/fi"
import { IoMdPerson } from "react-icons/io"
import { RiMenu2Fill } from "react-icons/ri"

function Header() {
  return (
    <div className="flex items-center justify-between w-full h-18 bg-gray-100 px-6 lg:px-10 py-5 border-b drop-shadow-md">
      {/** logo */}
      <div className="flex items-center gap-[2px]">
        <svg fill="#3eb489" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="question" className="icon glyph"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,16a1,1,0,1,1,1-1A1,1,0,0,1,12,18Zm1.71-4.61c-.71.34-.71.39-.71.61a1,1,0,0,1-2,0,2.6,2.6,0,0,1,1.84-2.42C13.61,11.21,14,11,14,10a1,1,0,0,0-.49-.86A2.82,2.82,0,0,0,12,8.75c-.69,0-2,.26-2,1.25a1,1,0,0,1-2,0c0-1.88,1.68-3.25,4-3.25S16,8.12,16,10A3.41,3.41,0,0,1,13.71,13.39Z"></path></svg>
        <h2 className="font-bold text-2xl text-[#333] font-candal strike-through">Finder</h2>
      </div>

      {/** navlinks */}
      <div className="hidden md:block">
          <div className="flex items-center md:text-sm lg:text-lg md:gap-2 lg:gap-5 font-dmsans font-medium">
            <h2>Jobs</h2>
            <h2>Companies</h2>
            <h2>Internships</h2>
            <h2>Services</h2>
            <div className="relative hidden lg:block">
              <input
                placeholder="Search jobs here"
                className="text-sm px-8 py-2 rounded-full ml-2 border border-[#757575] outline-none"
              />
              <FiSearch className="absolute top-[3px] right-[3px] text-white bg-[#3eb489] rounded-full p-1 h-8 w-8" />
            </div>
          </div>
      </div>

      {/** profile */}
      <div className="hidden md:block">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-[2px] border-2 border-sky-500 rounded-full px-2 py-1">
            <h2 className="font-candal text-sky-500">Finder</h2>
            <h2 className="font-dmsans text-[#3eb489]">360</h2>
          </div>
          <IoMdPerson className="w-10 h-10 border rounded-full p-1 text-[#333] cursor-pointer border-gray-300 hover:border-[#333]" />
          <div className="relative">
            <span className="text-[10px] absolute top-0 right-0 text-white bg-red-600 rounded-full p-[2px]">23</span>
            <svg className="cursor-pointer" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5V12C21 7.02944 16.9706 3 12 3ZM8 11C8 10.4477 8.44772 10 9 10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H9C8.44772 12 8 11.5523 8 11ZM11 15C11 14.4477 11.4477 14 12 14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H12C11.4477 16 11 15.5523 11 15Z" fill="#3eb489"/>
            </svg>
          </div>
        </div>
      </div>

      {/** mobile nav */}
      <div className="flex items-center gap-3 md:hidden">
        <button className="text-base font-dmsans font-semibold border border-[#333] px-5 py-1.5 rounded-lg">Login</button>
        <RiMenu2Fill className="w-8 h-8 text-[#333]" />
      </div>
    </div>
  )
}

export default Header