import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

// function MyApp(){
//   return(
//     <div>
//       <h1>hlo guyz</h1>
//     </div>
//   )
// }


// const ReactElement = {
//     type : 'a',
//     props:{
//         href : 'https://www.google.com',
//         target : '_blank'
//     },
//     children : 'Click to visit Google'
// }


const ReactElement = React.createElement(
  'a',
  {
    href : "https://www.google.com",
    target : "_blank"
  },
  'Click to visit Google' 
)
createRoot(document.getElementById('root')).render(
  
    <App />
  
)
