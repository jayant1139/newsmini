import './App.css';
import Finance from './Components/Finance';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    < >
    {/* <Home/> */}
    <div className='between-space'>
    <div>
    <Header/>
    <Finance/>
    </div>
    <Footer/>
    </div>
    </>
  );
}

export default App;
