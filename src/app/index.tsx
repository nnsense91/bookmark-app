import './styles/normalize.css';
import { FC } from 'react';
import { withProviders } from '@app/providers';
import { Router } from '@processes/router';

const App: FC = () => {
  return (
    <div className='App'>
      <Router />
    </div>
  );
};

export default withProviders(App);
