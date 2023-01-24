import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import RGB from './components/RGB.js';
import Home from './components/Home.js';
import NotFound from './components/NotFound.js';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/RGB/:red/:green/:blue" component={RGB} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
