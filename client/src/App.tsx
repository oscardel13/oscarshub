import { Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppContainer from './routes/container/container.route';
import Home from './routes/home/home.route';
import EmbeddedSandBox from './routes/graphql_sandbox/graphql_sandbox.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppContainer/>}>
        <Route index element={<Home/>}/>
        <Route path='/graphql' element={<EmbeddedSandBox/>}></Route>
      </Route>
      {/* <Route path='/graphql' element={<EmbeddedSandBox/>}></Route> */}
    </Routes>
  );
}

export default App;