import './App.css';
import { Navbar } from './components/Navbar';
import Contact from './components/contacts/Contact';
import { Provider } from "react-redux";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Contact />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
