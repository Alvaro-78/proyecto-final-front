import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../src/containers/home/home'
import Login from '../src/containers/login/login'



import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                </Switch>
            </BrowserRouter>
        </div>
  );
}

export default App;
