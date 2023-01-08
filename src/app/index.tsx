import './styles/normalize.css';
import { withProviders } from '@app/providers';
import { Router } from '@processes/router';

const App = () => {
  return (
    <div className='App'>
      <Router />
    </div>
  );
};

export default withProviders(App);
