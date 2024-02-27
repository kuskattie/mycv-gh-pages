import Strings from "../Shared/Strings"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";


const About = () => {
  return (
    <div className="flex flex-col items-center mt-12 text-center px-44" id='about'> 
      <h2 className="text-[20px] font-bold">{Strings.ABOUT_HEADING}</h2>
      <FaQuoteLeft className='p-3 text-[44px] rounded-full text-white mt-6' />
        <h2 className="my-5 text-indigo-200">{Strings.ABOUT_DESC}</h2>
      
      <FaQuoteRight className='p-3 text-[44px] rounded-full text-white mt-6'/>
    </div>
  )
}

export default About
