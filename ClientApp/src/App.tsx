import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import { store } from './redux/store';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "dayjs/locale/vi";
function App() {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">
      <AppRouter />
      <ToastContainer/>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
