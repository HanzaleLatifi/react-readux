import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer';
import CakeWithPayload from './components/CakeWithPayload';

function App() {
  return (

    <Provider store={store}>
      <div className="App" >
        {/* <CakeContainer/> */}
        <HooksCakeContainer/>
        <HooksIcecreamContainer/>
        <CakeWithPayload/>
      </div>
    </Provider>


  );
}

export default App;
