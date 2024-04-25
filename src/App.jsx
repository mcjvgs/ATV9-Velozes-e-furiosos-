import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VelozeseFuriosos from './pages/VelozeseFuriosos';

const router = createBrowserRouter ([
    {
      path:"/",
      element: <VelozeseFuriosos />
    }
])

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}

