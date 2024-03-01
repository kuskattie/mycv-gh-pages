import { TiHome } from "react-icons/ti";



const Introduction = () => {
  return (
    <div className="flex flex-col items-center justify-center" id='introduction'>
        <div className="h-[120px] border-r-[1px] mt-[-65px]" />
        <div className="w-[5px] h-[5px] bg-indigo-400 rounded-full "></div>
        <h2 className="mt-5 text-white font-medium text-[13px] tracking-widest">YOU ARE WELCOME! I AM</h2>
        <h2 className="text-[40px] font-bold text-white tracking-widest mt-5">EKATERINA <br></br>KUSKOVA</h2>
        <div
        className="w-[40px] h-[40px] bg-indigo-400 p-3 rounded-full">
          <TiHome />

          </div>
    </div>
  )
}

export default Introduction
