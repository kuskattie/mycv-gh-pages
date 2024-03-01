import {useState, useEffect} from 'react'

const ProgressBar = () => {

    const [scrollTop, setScrollTop] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll',onScroll)
        return () => window.removeEventListener('scroll', onScroll)

    },[])

    const onScroll = () => {
        const windowScroll = document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrolled = (windowScroll/height)*100

        setScrollTop(scrolled)
    }

  return (
    <div className="w-1.5 bg-gray-200 fixed ml-[-5px] mt-[45px] h-full mb-4">
      <div className="bg-indigo-200" style={{ height: `${scrollTop}%` }}>

      </div>
    </div>
  )
}

export default ProgressBar
