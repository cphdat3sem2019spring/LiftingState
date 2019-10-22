import React from 'react';
import AppSimple from "./noCount/App"
import AppEdit from "./withEdit/App"
import {HashRouter as Router, Route} from "react-router-dom"

const App = ()=> {
  return (
   <Router>
     <Route exact path="/">
       <AppSimple/>
     </Route>
     <Route path="/edit">
       <AppEdit/>
     </Route>
   </Router>
  )
}
export default App;