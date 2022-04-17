import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/HomePage/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Home></Home>
    <Footer></Footer>
    </div>
  );
}

export default App;
