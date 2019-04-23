import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
    this.route('page-login', { path: 'login' });
    this.route('oauth-callback');
    this.route('page-result', { path: 'result' }, function () {
        this.route('review');
    });
    this.route('page-notice', { path: 'notice/:proposal_id' });
    this.route('page-scenario', { path: 'scenario/:proposal_id' }, function() {
      this.route('reference');
      this.route('decision-review');
    });
});

export default Router;
