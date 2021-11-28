import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./pages/NotFound";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Crew from "./pages/Crew";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/crew">
          <Crew />
        </Route>
        <Route path="/technology">
          <Technology />
        </Route>

        <Route path="*">
          {/*jeśli nie znajduje żadnych powyżej*/}
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
