import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	cookies: service(),
	clientId: '5c90f3fc830346b827fb0905',
	clientSecret: '5c90db71eeefcc082c0823b2',
	redirectUri: 'http://192.168.100.165:8081/oauth-callback',

	model() {

	}
});
