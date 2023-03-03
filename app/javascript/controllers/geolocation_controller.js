import { Controller } from '@hotwired/stimulus';
import { getDistance, convertDistance } from 'geolib';

export default class extends Controller {
    static targets = ['property']
    connect() {
        console.log(this.propertyTargets);
        window.navigator.geolocation.getCurrentPosition((position) => {
            this.element.dataset.latitude = position.coords.latitude;
            this.element.dataset.longitude = position.coords.longitude;
            const distance = getDistance(
              { latitude: position.coords.latitude, longitude: position.coords.longitude},
              { latitude: 47.620146, longitude: -100.540737 }
            );
            console.log(convertDistance(distance, 'km'));
            this.propertyTargets.forEach((propertyTarget) => {
              let distanceFrom = getDistance(
                { latitude: position.coords.latitude, longitude: position.coords.longitude},
                { latitude: propertyTarget.dataset.latitude, longitude: propertyTarget.dataset.longitude}, 
                ); 
              propertyTarget.querySelector('[data-distance-away]').innerHTML = `${Math.round(convertDistance(distanceFrom, 'km'))} kilometers away` ;
            });
          });
  }
}