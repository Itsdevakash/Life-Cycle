import './App.css';
import Render,{useState} from './component/Render';
import React from 'react';
import Did_mount from './component/Did_mount';
import UpdateComnent from './component/UpdateComnent';
import Didupdate from './component/Didupdate';
import Willunmount from './component/Willunmount';

function App() {
const[title,setTitle]=React.useState('Akash')
  return (
    <div className="App">
      <h1>Render Method In React </h1>
      <Render name={title}/>
      <button onClick={()=>setTitle('Maurya')}>Update Props</button>
      <hr></hr>
      <h1>Component Did Mount</h1>
      <Did_mount/>
      <hr></hr>
      <h1> Component Did Update</h1>
        <Didupdate/>
      <hr></hr>
      <h1>Should Component Update</h1>
       <UpdateComnent />
     <hr></hr>
     <h1> Component Will Unmount</h1>
       <Willunmount/>
     <hr></hr>

   </div>
  );
}

export default App;
