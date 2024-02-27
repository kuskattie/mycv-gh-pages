import Strings from "../Shared/Strings"


function Services() {
    const servicesList = [
        {
            id: 1,
            title: Strings.SKILLS,
            desc: Strings.FRONT
        },
        {
            id: 2,
            title: Strings.LANG,
            desc: Strings.LANG_DESC
        }
    ]

    return (
        <div className="px-12 mt-12" id='skills'>
          <div className="flex flex-col items-center">
            
            <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
            <h2 className="text-[24px] font-bold">{Strings.SERVICES}</h2>
            <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
            
            <div className="flex justify-around mt-16">
              {servicesList.map((item) => (
                <div className="flex flex-col items-center justify-center gap-6 text-center">
                  <h2 className="mt-5 font-bold">{item.title}</h2>
                  <h2 className="text-gray-400">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

export default Services
