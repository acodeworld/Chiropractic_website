
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import servicesdata from './data/servicesdata'
import About from './pages/About'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Contact from './pages/Contact'





  const Layout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  }
  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Body />,
       },
      {
        path: "/About",
        element: <About />,
       },
      {
        path: "/Contact",
        element: <Contact />,
       },
     

    ]
  }



])


function App() {

 

  return (
    <div>
      <RouterProvider router={router} />
    </div>

  )
}

export default App
