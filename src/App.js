import { Provider } from 'react-redux';
import  store  from './redux/store';
import Counter from './components/Counter';
import UserData from './components/UserData';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Counter/>
          <UserData/>
        </Provider>
    </div>
  );
}

export default App;
