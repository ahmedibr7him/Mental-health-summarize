
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Provider } from "react-redux";
import {store} from './Redux/CountStore.jsx'
// import './i18n/i18n';
import './index.css' 
import LinksProvider from './Context/LinksContext.jsx'
import  ThemeProvider  from './dark/Theme.jsx'
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
   <BrowserRouter>
    <ThemeProvider>
      <LinksProvider>
        <App />
      </LinksProvider>
    </ThemeProvider>
  </BrowserRouter>
  </Provider>

)
