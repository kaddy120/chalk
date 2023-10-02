import './App.css';
import Button from 'react-bootstrap/Button'

// or, specify which plugins you need:
const Page = () => {
  return (
    <div>
      <div className='container py-4 px-3 mx-auto component'>
        <h1>Hello, Bootstrap and Vite!</h1>
        <Button variant='primary'>Primary button</Button>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Page />
    </>
  );
}

export default App;
