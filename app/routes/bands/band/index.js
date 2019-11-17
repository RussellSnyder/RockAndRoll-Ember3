import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  router: service(),
  redirect(band) {
    if (band.description) {
      this.router.transitionTo('bands.band.details');
    } else {
      this.router.transitionTo('bands.band.songs');
    }
  }
});