import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
//import About from './components/About';

{/*import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom"*/}

function App() {
  const [mode,setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled","success");
      document.title= "TextUtils -  DarkMode";
    }
    else{
      setMode ('light') ;
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
      document.title = "TextUtils - LightMode";
    }
    
  }

  return (
  <>
  {/*<Router>*/}
  {/* */}
  {/*
  
    <Routes>

      <Route exact path="about" element={<About />} /> 
      <Route exact path="/" element={} />

      
  </Routes>*/}
  
  <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
  <Alert alert = {alert}/>
  <div className = "container my-3">
  <TextForm showAlert = {showAlert} heading="Enter the text to analyse below" mode = {mode} />
  
  {/*</Router>*/}
  </div>
  </>
    );
}

    
export default App;
