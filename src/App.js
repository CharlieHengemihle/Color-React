import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/blurple" />
        <Route exact path="/pank" />
        <Route exact path="/greige" />
      </Switch>
    </main>
  );
}

export default App;
