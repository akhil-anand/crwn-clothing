import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// )

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      {/* <Route exact path='/hats' component={HatsPage}/>*/}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
