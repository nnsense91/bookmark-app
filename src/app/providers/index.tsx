import compose from 'compose-function';
import { withAuth } from '@app/providers/with-auth';
import { withRouter } from '@app/providers/with-router';

export const withProviders = compose(withRouter, withAuth);
