import { Controller } from '@hotwired/stimulus';
import { getDistance } from 'geolib';

export default class extends Controller {
    
    connect() {
        console.log('geolib: ', getDistance);
        window.navigator.geolocation.getCurrentPosition((position) => {
            this.element.dataset.latitude = position.coords.latitude;
            this.element.dataset.longitude = position.coords.longitude;
            const distance = getDistance(
              { latitude: position.coords.latitude, longitude: position.coords.longitude},
              { latitude: 47.620146, longitude: -100.540737 }
            );
            console.log('distance: ', distance);
          });
  }
}