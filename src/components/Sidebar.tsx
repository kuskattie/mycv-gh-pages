import { IoLogoLinkedin } from "react-icons/io5";

function SideBar() {
return (
  <div
  className="w-[90px] border-r-[2px]
  h-screen fixed flex flex-col justify-around items-center mt-[90px]"
  >
      <h2 className='tracking-widest -rotate-90'>HOMEPAGE</h2>
      <div className='flex flex-col gap-7 mb-10 text-[20px]'>
        <a href='https://www.linkedin.com/in/ekaterina-kuskova-b9558516b/' target='_blank' >
          <IoLogoLinkedin className="transition-all ease-in-out cursor-pointer hover:scale-110"/>
        </a>
      </div>
  </div>
)
}

export default SideBar