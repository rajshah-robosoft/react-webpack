import React, { Suspense } from 'react';

// Routing
import { createHashHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// Routes
import { ROUTES } from './routes';

// Creating hash routing
const hist = createHashHistory();

const App = _ => {
  let renderRoute = ROUTES.map((item, index) => 
    <Route {...item} key={index} />
  )

  return (
    <Router history={hist}>
      <Suspense fallback="Loading ...">
        <Switch>
          {renderRoute}
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App;