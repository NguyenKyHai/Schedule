import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import { store } from './redux/store';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer/>
    </Provider>
  );
}

export default App;
