import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './Component/Login'
import Home from "./Component/Home"


class Routes extends React.Component{
    render(){
        return(
           <>
           <Switch>
               <Route exact path="/" component={Login}/>
               <Route exact path="/home" component={Home}/>
           </Switch>
           </>
        )
            
    }
}

export default Routes;
