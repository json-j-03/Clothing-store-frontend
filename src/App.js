import './App.css';
import React from 'react';
// import Conditionalrendering from './Conditionalrendering';
// import FetchAPI from './FetchAPI.js';
import Project from './project';
import ProjectGet from './Project-get';
import Update from './Update';
import Delete from './Delete';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
return(
<div className="App">
<BrowserRouter ><Routes>
        <Route path='/' element={<Project/>}/>
        <Route path='/ProjectGet' element={<ProjectGet/>}/>
        <Route path='/Update' element={<Update/>}/>
        <Route path='/Delete' element={<Delete/>}/>
        </Routes></BrowserRouter>
</div>
  );    
}
export default App;