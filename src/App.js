import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header/>
      <section className='main'>
        <Sidebar/>
        {/* <Main/> */}
      </section>
      <Footer/>
    </div>
  );
}

export default App;
