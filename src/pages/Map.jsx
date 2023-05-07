const Map = () => {
  const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBGunsUmQ7N12nT29zMLRFg_srdOdtHSUo`;
  const loadingElement = <div className="h-full" />;
  const containerElement = <div className="h-full" />;
  const mapElement = <div className="h-full" />;
  const lat = 37.7749;
  const lng = -122.4194;

  return (
    <div>
      <Map
        googleMapURL={googleMapURL}
        loadingElement={loadingElement}
        containerElement={containerElement}
        mapElement={mapElement}
        lat={lat}
        lng={lng}
      />
    </div>
  );
};

export default Map;
