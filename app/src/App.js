import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './containers/Home/Home'
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import Cart from '../src/containers/Cart/Cart'
import Buy from '../src/containers/Buy/Buy'
import ShowProduct from '../src/containers/ShowProduct/ShowProduct'
import HomeAdmin from '../src/containers/Home-Admin/HomeAdmin'
import Categories from '../src/containers/Categories/Categories'
import Accesories from '../src/containers/Categories/Accesories/Accesories'
import Boy from '../src/containers/Categories/Boy/Boy'
import Girl from '../src/containers/Categories/Girl/Girl'
import Discount from '../src/containers/Categories/Discount/Discount'
import Unisex from '../src/containers/Categories/Unisex/Unisex'
import Jewelry from '../src/containers/Categories/Jewelry/Jewelry'
import Shoes from '../src/containers/Categories/Shoes/Shoes'
import Size from '../src/containers/Size/Size'
import Blythe from './containers/Size/Blythe/Blythe'
import MsdMdd from './containers/Size/MsdMdd/MsdMdd'
import MsdSlim from './containers/Size/MsdSlim/MsdSlim'
import SdThree from './containers//Size/Sd3/Sd3'
import SdSeven from './containers/Size/Sd7/Sd7'
import SdUncle from './containers/Size/SdUncle/SdUncle'
import Tiny from './containers/Size/Tiny/Tiny'
import Yosd from './containers/Size/Yosd/Yosd'


import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/cart' component={Cart}/>
                    <Route exact path='/buy' component={Buy}/>
                    <Route exact path='/show-product' component={ShowProduct}/>
                    <Route exact path='/home-admin' component={HomeAdmin}/>
                    <Route exact path='/categories' component={Categories}/>
                    <Route exact path='/categories/accesories' component={Accesories}/>
                    <Route exact path='/categories/boy' component={Boy}/>
                    <Route exact path='/categories/girl' component={Girl}/>
                    <Route exact path='/categories/discount' component={Discount}/>
                    <Route exact path='/categories/unisex' component={Unisex}/>
                    <Route exact path='/categories/jewelry' component={Jewelry}/>
                    <Route exact path='/categories/shoes' component={Shoes}/>
                    <Route exact path='/size' component={Size}/>
                    <Route exact path='/blythe' component={Blythe}/>
                    <Route exact path='/msd-mdd' component={MsdMdd}/>
                    <Route exact path='/msd-slim' component={MsdSlim}/>
                    <Route exact path='/sd-3' component={SdThree}/>
                    <Route exact path='/sd-7' component={SdSeven}/>
                    <Route exact path='/sd-uncle' component={SdUncle}/>
                    <Route exact path='/tiny' component={Tiny}/>
                    <Route exact path='/yosd' component={Yosd}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
