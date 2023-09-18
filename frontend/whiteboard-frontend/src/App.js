import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Forms from './Components/Forms';
import RoomPage from './pages/RoomPage';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Forms/>
  },
  {
    path:'/:roomId',
    element:<RoomPage/>
  }
 
])

function App() {
  return (
    <div className="container">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
