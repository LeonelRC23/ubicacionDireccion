import { useState } from 'react';
import GeocodeForm from './componnents/GeocodeForm';

function App() {
  const [coordinates, setCoordinates] = useState(null);

  const handleCoordinatesFetched = (coords) => {
    setCoordinates(coords);
  };

  return (
    <>
      <div>
        <h1>Geocoder utilizando OpenStreetMap</h1>
        <GeocodeForm onCoordinatesFetched={handleCoordinatesFetched} />
        {coordinates && (
          <div>
            <p>Latitud: {coordinates.lat}</p>
            <p>Longitud: {coordinates.lon}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
