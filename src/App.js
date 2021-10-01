import React, { components}  from 'react';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Individual from './components/Individual/Individual';
import Notfound from './components/NotFound/Notfound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>
      <Header></Header>
      
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <Shop></Shop>
        </Route>
        <Route path="/shop">
<Shop></Shop>
        </Route>
        <Route path="/review">
<OrderReview></OrderReview>
        </Route>
        <Route path="*">
<Notfound></Notfound>
        </Route>

        <Route path="/inventory">
<Individual></Individual>
        </Route>
      </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
