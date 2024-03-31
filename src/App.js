// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
    <Navbar title="TextUtil" aboutText="About us" home="Home Page"></Navbar>
    <div className='container mb-3'>
    <TextForm heading="Enter the text to analyze below"></TextForm>
    </div>
    </>
  );
}

export default App;
