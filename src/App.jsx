import './App.css'
import {Home,Productos} from "./index"
import {createHashRouter, RouterProvider} from 'react-router-dom'


const router = createHashRouter([
  {
    path:'/',
    element: <Home/>,
  },
  {
    path:'/productos',
    element: <Productos/>
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
