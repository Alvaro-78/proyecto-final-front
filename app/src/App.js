import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../src/containers/home/home'
import Login from '../src/containers/login/login'
import Register from '../src/containers/register/register'
import Profile from '../src/containers/profile/profile'
import Categories from '../src/containers/categories/categories'
import Accesories from '../src/containers/categories/accesories/accesories'
import Boy from '../src/containers/categories/boy/boy'
import Girl from '../src/containers/categories/girl/girl'
import Discount from '../src/containers/categories/discount/discount'
import Unisex from '../src/containers/categories/unisex/unisex'
import Shoes from '../src/containers/categories/shoes/shoes'
import Size from '../src/containers/size/size'
import Blythe from './containers/size/blythe/blythe'
import MsdMdd from './containers/size/msd-mdd/msd-mdd'
import MsdSlim from './containers/size/msd-slim/msd-slim'
import SdThree from './containers/size/sd-3/sd-3'
import SdSeven from './containers/size/sd-7/sd-7'
import SdUncle from './containers/size/sd-uncle/sd-uncle'
import Tiny from './containers/size/tiny/tiny'
import Yosd from './containers/size/yosd/yosd'


import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/register' exact component={Register}/>
                    <Route path='/profile' exact component={Profile}/>
                    <Route path='/categories' exact component={Categories}/>
                    <Route path='/categories/accesories' exact component={Accesories}/>
                    <Route path='/categories/boy' exact component={Boy}/>
                    <Route path='/categories/girl' exact component={Girl}/>
                    <Route path='/categories/discount' exact component={Discount}/>
                    <Route path='/categories/unisex' exact component={Unisex}/>
                    <Route path='/categories/shoes' exact component={Shoes}/>
                    <Route path='/size' exact component={Size}/>
                    <Route path='/size/blythe' exact component={Blythe}/>
                    <Route path='/size/msd-mdd' exact component={MsdMdd}/>
                    <Route path='/size/msd-slim' exact component={MsdSlim}/>
                    <Route path='/size/sd-3' exact component={SdThree}/>
                    <Route path='/size/sd-7' exact component={SdSeven}/>
                    <Route path='/size/sd-uncle' exact component={SdUncle}/>
                    <Route path='/size/tiny' exact component={Tiny}/>
                    <Route path='/size/yosd' exact component={Yosd}/>
                </Switch>
            </BrowserRouter>
        </div>
  );
}

export default App;
