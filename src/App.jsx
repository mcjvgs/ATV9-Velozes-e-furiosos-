import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VelozeseFuriosos from './pages/VelozeseFuriosos';
import Elenco from './pages/Elenco';
 
const router = createBrowserRouter ([
    {
      path:"/",
      element: <VelozeseFuriosos />
    }, 
    {
      path:"/Elenco",
      element: <Elenco/> 
    },
    {
      path:"/Sobre",
      element: <Sobre/> 
    },
])

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}

