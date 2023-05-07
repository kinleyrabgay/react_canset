/* eslint-disable react/prop-types */
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

function MapComponent(props) {
  const { lat, lng } = props;
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat, lng }}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
}

const WrappedMapComponent = withScriptjs(withGoogleMap(MapComponent));

export default function Map(props) {
  const {
    googleMapURL,
    loadingElement,
    containerElement,
    mapElement,
    lat,
    lng,
  } = props;
  return (
    <div className="h-screen">
      <WrappedMapComponent
        googleMapURL={googleMapURL}
        loadingElement={loadingElement}
        containerElement={containerElement}
        mapElement={mapElement}
        lat={lat}
        lng={lng}
      />
    </div>
  );
}
