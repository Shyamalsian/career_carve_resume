import './App.css';
import Items from './components/Items';
import { Box, Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="">
        {/* <Dragdrop/> */}
        {/* <ItemCard/> */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            marginTop: '2vh', width: '53vw'
          }}>
            <h1>Select your sections</h1>
          </div>
        </div>
        <Items />
        

      </header>
    </div>
  );
}

export default App;
