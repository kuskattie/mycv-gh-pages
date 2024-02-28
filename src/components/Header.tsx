import { Link } from 'react-scroll'
import { useState } from 'react'


function Header() {
    const menu = [
      {
        id: 1,
        name: 'Home',
        path: 'about',
      },
      {
        id: 2,
        name: 'Skills and languages',
        path: 'skills',
      },
      
      {
        id: 4,
        name: 'Contacts',
        path: 'contacts',
      },
    ]

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    

    return (
      <div className="flex items-center fixed w-full justify-between border-b-[1px] bg-indigo-300">
      <div className="w-[90px] h-[90px]"></div>
      <div className="md:flex gap-14">
        <ul className={click ? 'nav-link active' : 'nav-link'}>
          {menu.map((item) => (
            <li key={item.id} className="inline-flex items-center justify-between m-3 font-medium text-white cursor-pointer hover:underline">
              <Link to={item.path} spy={true} offset={50} duration={500} onClick={handleClick}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[90px] h-[90px] flex justify-center items-center"></div>
    </div>
    );
  }
  
  export default Header;