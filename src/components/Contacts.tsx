import { IoIosMail } from "react-icons/io";


const Contacts: React.FC = () => {
  const email = 'e.lujnova@gmail.com'

  const handleMailClick = () => {
    window.location.href = `mailto:${email}`
  }

  return (
    <div className="px-12 mt-12" id='contacts'>
          <div className="flex flex-col items-center">
            
            <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
            <h2 className="text-[18px] font-bold">Contacts</h2>
            <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
          </div>

          <div className="flex justify-around mt-16">
            <div className="flex flex-col gap-7 mb-10 text-[30px]">
            <IoIosMail 
            className="transition-all ease-in-out cursor-pointer hover:scale-110"
            onClick={handleMailClick}
             />

            </div>
            <div className="flex flex-col gap-2">
          <h2 className="text-gray-400">España, Valencia</h2>
          <p className="text-gray-400">Tel: +34 654 956 443</p>
        </div>
          </div>

    </div>
  )
}

export default Contacts
