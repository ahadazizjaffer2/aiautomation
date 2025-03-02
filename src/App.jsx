import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardPage from './routes/Dashaboard'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from './Layout.jsx/Layout'
import Calendar from './routes/calender'
import Analytics from './routes/Analytics'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Crm from './routes/Crm';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<>
      <Route path='/login' element={ <Login/> } />
        <Route path='/signup' element={ <Signup/> } />
      <Route path='/' element={ <Layout />}>
        <Route index element={ <DashboardPage />} />
        <Route path='/crm' element={ <Crm /> } />
        <Route path='/calender' element={ <Calendar /> } />
        <Route path='/analytics' element={ <Analytics /> } />
      </Route>
        </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App