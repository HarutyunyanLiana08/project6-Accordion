
import './App.css';
import Accordion from './Accordion';
import AccordionFunc from './AccordionFunc';
import {Route, Link, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <h1>Components</h1>
      <div>
        <ul>
          <li> <Link to="/class">ClassComponent</Link> </li>
          <li> <Link to="/function">FunctionComponent</Link> </li>
        </ul>
      </div>
      <Routes>
        <Route path='/class' element={<Accordion />} />
        <Route path='/function' element={<AccordionFunc />} />
      </Routes>
    </div>
  );
}

export default App;
