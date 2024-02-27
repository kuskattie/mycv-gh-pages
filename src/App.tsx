import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProfilePic from './components/ProfilePic'
import Introduction from './components/Introduction'
import About from './components/About'
import Services from './components/Services'
import ProgressBar from './components/ProgressBar'
import Contacts from './components/Contacts'



function App() {

  return (
    <div className='w-screen'>
      <Header />
      <Sidebar />
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2 p-5 mt-[90px]'>
            <Introduction />
            <About />
            <Services />
            <Contacts />
        </div>
        <div className='hidden md:block'>
          <ProgressBar />
          <ProfilePic />
        </div>
      </div>

    </div>
  )
}

export default App
