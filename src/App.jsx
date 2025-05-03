import { useState,useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Routes/HomePage'
import UserLogin from './Routes/UserLogin'
import ProtectedRoute from './Components/ProtectedRoutes'
import UserContext from './Authorization/UserContext';
import Navigation from "./Components/NavbarComponent"
import UserPage from './Routes/UserPage'
import UserList from './Routes/UserList'
import UserSignUp from './Routes/UserSignUp'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <>
      <BrowserRouter>
      <UserContext.Provider value={{currentUser,setCurrentUser}}>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<UserLogin/>}/>
          <Route path='/signup' element={<UserSignUp/>}/>
          //protected routes
          {/* <Route path='/users/:username' element={<ProtectedRoute></ProtectedRoute>} /> */}
          <Route path='/users' element={<UserList/>} />
          <Route path='/users/:id'element={<UserPage/>}/>
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
