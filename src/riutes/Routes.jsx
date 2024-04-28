import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Add from "../components/Add";
import PrivetRoute from "../components/privetRoute/PrivetROutes";
import Item from "../components/Item";
import MyCard from "../components/MyCard";
import Update from "../components/Update";
import Erro from "../components/Erro";
import ArtCraft from "../components/ArtCraft";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Erro></Erro>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/add')
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },{
            path:'/add',
            element:<PrivetRoute><Add></Add></PrivetRoute>
        },
        {
          path:'/add/:id',
          element:<PrivetRoute><Item></Item></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:5000/add/${params.id}`)
        },
        {
          path:'/mycard',
          element:<PrivetRoute><MyCard></MyCard></PrivetRoute>,
          loader:()=>fetch('http://localhost:5000/add')
        },
        {
          path:'/update/:id',
          element:<PrivetRoute><Update></Update></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:5000/add/${params.id}`)
        },{
          path:'/art',
          element:<ArtCraft></ArtCraft>,
          loader:()=>fetch('http://localhost:5000/add')
        }
      ]
    },
    
  ]);



  export default router;