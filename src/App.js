import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// css
import './App.css';
/**  @type {import('tailwindcss').Config} */
// pages
import Navigation from './components/Navigation/Navigation';
import HomePage from "./components/Pages/HomePage/HomePage";
import NotFound from "./components/NotFound";
import WhyGreen from "./components/Pages/WhyGreen/WhyGreen";
import ContactUs from "./components/Pages/Contacts/ContactUs";
import Faq_P from "./components/Pages/Contacts/Faq_p";
import Faq_B from "./components/Pages/Contacts/Faq_b";
// registration and login
//  import Signin from "./components/Login/SignIn/SignIn";
//  import SignUp from "./components/Login/SignUp/SignUp";


// import { Component } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Navigation/>} errorElement={<NotFound/>}>
      <Route index element={<HomePage/>}/>
      <Route path="contactus" element={<ContactUs/>}/>
      <Route path="whygreen" element={<WhyGreen/>} />
      <Route path="faq_p" element={<Faq_P/>}/>
      <Route path="faq_b" element={<Faq_B/>}/>

      {/* <Route path="login" element={<Signin/>}/>
        <Route path="signup" element={<SignUp/>}/> */}

    </Route>
  )
)


function App(){
     return (

      <div>
          <RouterProvider router={router}/>
      </div>
    );
  }

export default App;
