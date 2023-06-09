import './App.css';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      {/* <Header/> */}
      <h1>Hello</h1>
      <section className='main'>
        <Sidebar/>
        <h1>Main</h1>
        {/* <Main/> */}
      </section>
      <Footer/>
    </div>
  );
}

export default App;
