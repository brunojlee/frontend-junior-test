import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import AddToken from './pages/AddToken/AddToken';
import EditToken from './pages/EditToken/EditToken';
import Home from './pages/Home/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/AddToken" element={<AddToken />} />
      <Route exact path="/EditToken" element={<EditToken />} />
    </Switch>
  );
}
