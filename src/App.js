import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

import Routes from './routes';
import { Router } from 'react-router-dom';
import history from './services/history';

function App() {
  return (
    <Router navigator={history} location={history.location}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

//

export default App;
