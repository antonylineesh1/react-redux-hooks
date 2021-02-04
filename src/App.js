import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import Contact from './components/contacts/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="py-3">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
