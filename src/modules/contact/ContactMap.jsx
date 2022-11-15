import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { sessionService } from 'services';

const VARIABLES = {
  mapStyles: {
    width: '100%',
    height: '50vh'
  },
  location: {
    lat: 46.24583707405474,
    lng: 6.996486157129973
  }
};

const ContactMap = ({ google }) => {

  return (
    <div style={VARIABLES.mapStyles}>
      <Map
        initialCenter={VARIABLES.location}
        style={VARIABLES.mapStyles}
        center={VARIABLES.location}
        zoom={10.2}
        google={google}>
        <Marker position={VARIABLES.location} name='Current location' />
      </Map>
    </div>
  );

};


export default GoogleApiWrapper({
  apiKey: '',
  language: sessionService.currentLang.get()
})(ContactMap);
