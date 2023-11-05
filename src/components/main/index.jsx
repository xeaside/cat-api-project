import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Chat from "../chat";
import Cat from "../cat-api";
import Registration from "../registration/registration";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Cat} />
        <Route path="/chat" component={Chat} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </div>
  );
};

export default Main;
