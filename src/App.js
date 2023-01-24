import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import RGB from './components/RGB.js';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/RGB/:red/:green/:blue" component={RGB} />
      </Switch>
    </main>
  );
}

export default App;
