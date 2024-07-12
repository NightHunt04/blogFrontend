import { useState } from "react"
import Header from "./components/Header/Header"
import SearchSidePanel from "./components/sidepanel/SearchSidePanel"
import { HeroContextProvider } from './context/HeroContext'
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()
  const [sidePanel, setSidePanel] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  const toggleIsSignUp = () => {
    setIsSignUp(prev => !prev)
  }

  const toggleSidePanel = () => {
    setSidePanel(prev => !prev)
  }

  // Check wether the email and username is already present in the database or not
  // Call the api below (make a new file for calling the express api by making it a function and call that function below)
  const handleSignUp = () => {
    // call the function/file which calls the express api to check the username and email present in the db

    toggleIsSignUp()
    navigate('signup')  
  }

  return (
    <div 
      onClick={(e) => {
        if(e.target.parentNode.classList[0] !== 'sidePanel' && sidePanel && e.target.parentNode.classList[0] !== 'cancelSidePanel' && e.target.parentNode.parentNode.classList[0] !== 'categories' && e.target.parentNode.classList[0] !== 'categories' && e.target.parentNode.classList[0] !== 'hero' && e.target.parentNode.classList[0] !== 'input' && e.target.parentNode.classList[0] !== 'sign') { 
          toggleSidePanel()
        }
      }} 
      className={`hero flex flex-col items-center justify-start pt-5 2xl:pt-9 text-black bg-white font-poppins min-h-screen w-full `}>

        <HeroContextProvider value={{sidePanel, isSignUp, toggleIsSignUp, toggleSidePanel, handleSignUp}}>

          <SearchSidePanel />
          <Header 
            sidePanel={sidePanel} 
            setSidePanel={setSidePanel}/>
          <Outlet />

        </HeroContextProvider>

    </div>
  )
}

export default App
