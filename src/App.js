import logo from './logo.svg';
import './App.css';
// import Testing from './Components/Testing';
// import ArrayFunction from './Components/ArrayFunction';
// import ArrayMethod from './Components/ArrayMethod';
// import Example from './Components/Example';
// import Destructing from './Components/Destructing';
// import DestructObject from './Components/DestructObject';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ArrayFunction from './Components/ArrayFunction';
import ArrayMethod from './Components/ArrayMethod';
import Example from './Components/Example';
import DestructObject from './Components/DestructObject';
import Destructing from './Components/Destructing';
import Home from './Components/Home';
import ImportModules from './Components/ImportModules';
import SpreadOperator from './Components/SpreadOperator';
import TernaryOperator from './Components/TernaryOperator';
import Props from './Components/Props';
import Exusestate from './Components/Exusestate';
import Counter from './Components/Counter';
import ExuseEffect from './Components/ExuseEffect';
import Basicbutton from './Components/MUI_components/Basicbutton';
import NewTypo from './Components/NewTypo';
import BasicTable from './Components/MUI_components/BasicTable';
import RecipeReviewCard from './Components/MUI_components/RecipeReviewCard';
import Insert from './Components/Insert';
import View from './Components/View';
import Appbarr from './Components/Appbarr';
import Qouteapi from './Components/Qouteapi';

function App() {
  return (
    <div>
      
      {/* <Testing />
      <ArrayFunction/>
      <ArrayMethod/>
      <Example/>
      <Destructing/>
      <DestructObject/> */}
      <BrowserRouter>
      <Appbarr/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ArrayFunction' element={<ArrayFunction/>}/>
          <Route path='/ArrayMethod' element={<ArrayMethod/>}/>
          <Route path='/Example' element={<Example/>}/>
          <Route path='/DestructObject' element={<DestructObject/>}/>
          <Route path='/Destructing' element={<Destructing/>}/>
          <Route path='/ImportModules' element={<ImportModules/>}/>
          <Route path='/SpreadOperator' element={<SpreadOperator/>}/>
          <Route path='/TernaryOperator' element={<TernaryOperator/>}/>
          <Route path='/Props' element={<Props name="Karla"/>}/>
          <Route path='/UseState' element={<Exusestate name="Black"/>}/>
          <Route path='/UseEffect' element={<ExuseEffect name="Black"/>}/>
          <Route path='/Counter' element={<Counter/>}/>
          <Route path='/BasicButton' element={<Basicbutton/>}/>
          <Route path='/NewTypo' element={<NewTypo/>}/>
          <Route path='/BasicTable' element={<BasicTable/>}/>
          <Route path='/RecipeReviewCard' element={<RecipeReviewCard/>}/>
          <Route path='/Insert' element={<Insert/>}/>
          <Route path='/View' element={<View/>}/>
          <Route path='/Qouteapi' element={<Qouteapi/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
