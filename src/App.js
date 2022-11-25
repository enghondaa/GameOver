import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import WrongPage from './Component/WrongPage/WrongPage';
import GameDetails from './Component/GameDetails/GameDetails';
import Games from './Component/Games/Games';
import Platforms from './Component/Platforms/Platforms';
import SortBy from './Component/SortBy/SortBy';
import AllGames from './Component/AllGames/AllGames';
import Categories from './Component/Categories/Categories';

function App() {
  useEffect(()=>{
    if (localStorage.getItem('userToken') !==null)
    {
      saveUserData();
    }
  },[])
  function saveUserData(){
    let encoded = localStorage.getItem('userToken');
    let decoded = jwtDecode(encoded);
    setUserData(decoded);
  }
  const [userData , setUserData] = useState(null);

  function logout() {
  localStorage.removeItem('userToken');
  setUserData(null);
  return <Navigate to='/login'/>};

  function ProtectedRoute({children}) {
              if (localStorage.getItem('userToken')===null)
              {
                return <Navigate to='/login'/>
              }
              else {   return children;}
    }
  
  const router = createBrowserRouter([
    {path:'/' , element:<Layout userData={userData} logout={logout}/> , children:[
    {path:'login', element:<Login saveUserData={saveUserData}/>}, 
     {index:true, element:<ProtectedRoute><Home/></ProtectedRoute>}, 
     {path:'register', element:<Register/>}, 
     {path:'gamedetails/:id', element:<ProtectedRoute><GameDetails/></ProtectedRoute>}, 
     {path:'games', element:<ProtectedRoute><Games/></ProtectedRoute>,children:[
      {path:'platforms/:type', element:<Platforms/>},  
      {path:'sort-by/:type', element:<SortBy/>}, 
      {path:'categories/:type', element:<Categories/>}, 
      {path:'all', element:<AllGames/>}, 
     ] }, 
     {path:'*' , element:<ProtectedRoute><WrongPage/></ProtectedRoute>}
    ]}
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
