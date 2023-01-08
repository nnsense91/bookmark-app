import './styles/normalize.css';
import { withProviders } from '@app/providers';
import { Router, Header } from '@processes';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Router />
    </div>
  );
};

export default withProviders(App);
