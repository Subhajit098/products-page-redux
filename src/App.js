import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './components/Product';
import { createBrowserRouter,createRoutesFromElements,RouterProvider ,Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";

function App() {

  const router=createBrowserRouter(createRoutesFromElements(
    <Route>
      
    </Route>
  ))

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
