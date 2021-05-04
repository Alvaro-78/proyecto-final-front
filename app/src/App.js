import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './containers/Home/Home'
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
// import Profile from '../src/containers/profile/profile'
// import Categories from '../src/containers/categories/categories'
// import Accesories from '../src/containers/categories/accesories/accesories'
// import Boy from '../src/containers/categories/boy/boy'
// import Girl from '../src/containers/categories/girl/girl'
// import Discount from '../src/containers/categories/discount/discount'
// import Unisex from '../src/containers/categories/unisex/unisex'
// import Shoes from '../src/containers/categories/shoes/shoes'
// import Size from '../src/containers/size/size'
// import Blythe from './containers/size/blythe/blythe'
// import MsdMdd from './containers/size/msd-mdd/msd-mdd'
// import MsdSlim from './containers/size/msd-slim/msd-slim'
// import SdThree from './containers/size/sd-3/sd-3'
// import SdSeven from './containers/size/sd-7/sd-7'
// import SdUncle from './containers/size/sd-uncle/sd-uncle'
// import Tiny from './containers/size/tiny/tiny'
// import Yosd from './containers/size/yosd/yosd'


import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    {/* <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/categories' component={Categories}/> */}
                    {/* <Route exact path='/categories/accesories' component={Accesories}/>
                    <Route exact path='/categories/boy' component={Boy}/>
                    <Route exact path='/categories/girl' component={Girl}/>
                    <Route exact path='/categories/discount' component={Discount}/>
                    <Route exact path='/categories/unisex' component={Unisex}/>
                    <Route exact path='/categories/shoes' component={Shoes}/>
                    <Route exact path='/size' component={Size}/>
                    <Route exact path='/blythe' component={Blythe}/>
                    <Route exact path='/msd-mdd' component={MsdMdd}/>
                    <Route exact path='/msd-slim' component={MsdSlim}/>
                    <Route exact path='/sd-3' component={SdThree}/>
                    <Route exact path='/sd-7' component={SdSeven}/>
                    <Route exact path='/sd-uncle' component={SdUncle}/>
                    <Route exact path='/tiny' component={Tiny}/>
                    <Route exact path='/yosd' component={Yosd}/> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
