import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        {/* Switch component just makes sure that only
         1 of the links is active at a particular time */}
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>

          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact={true}>
            <Products />
          </Route>
          <Route path="/products/:product">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
