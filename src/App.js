import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./product";
import UploadPage from "./upload";
/* react 외부 주석처리 */

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
