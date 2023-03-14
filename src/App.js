import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AddTripComponent from './components/AddTripComponent';
import ListComponent from './components/ListComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" component={HomeComponent} />
        <Route path="/add" component={AddTripComponent} />
        <Route path="/list" component={ListComponent} />
      </Routes>
        

    </BrowserRouter>
  );
}

export default App;
