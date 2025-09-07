import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 import Header from './components/Header'
 import MainContent from './components/MainContent'
 import Footer from './components/Footer'
 import UserProfile from './components/UserProfile'
import ProfilePage from './components/ProfilePage'
import UserContext from './components/UserContext';

function App() {
  // const [count, setCount] = useState(0)
const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
  <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    {/* <Header />
    <MainContent />
     <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    <Footer /> */}
   
    </>
  )
}

export default App
