import { useState } from "react";
import UseGeoLocation from "./components/UseGeoLocation";

export default function App() {
  const [countClicks, setCountClicks] = useState(0);

  const {
    isLoading,
    error,
    position: { lat, lng },
    getPosition,
  } = UseGeoLocation();
  function handleClik() {
    setCountClicks((count) => count + 1);
    getPosition();
  }
  return (
    <div>
      <button onClick={handleClik} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
