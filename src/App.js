import { Provider } from 'react-redux';
import store from './components/Bucket/Store';
import Header from './components/Header';
import Map from './components/Map';
import Info from './components/Info';
import LayerTree from './components/LayerTree';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/main.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <LayerTree />
          </div>
          <div className="col-md-6">
            <Map />
          </div>
          <div className="col-md-3">
            <Info />
          </div>
        </div>
      </div>
    </Provider> 
  );
}

export default App;