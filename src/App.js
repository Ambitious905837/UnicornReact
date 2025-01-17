import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
