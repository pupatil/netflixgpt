import './App.css';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './Utils/store';

function App() {
  return (
    <Provider store={appStore}>
    <Body></Body>
   </Provider>
  );
}

export default App;
