import './App.css';
import { Navbar } from './components/Navbar';
import Contact from './components/contacts/Contact';
import { Provider } from "react-redux";
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddContact from './components/contacts/AddContact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route component={Contact} path="/" exact/>
                <Route component={AddContact} path="/contacts/add"/>
              </Switch>
              
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
