import { Route, Routes as Switch } from 'react-router-dom';
import Home from "./pages/Home/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Home /> } />
    </Switch >
  );
}
