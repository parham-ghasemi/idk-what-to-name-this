import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import customMarker from '/icons/Medical Symbol - red.svg';

const customIcon = new L.Icon({
  iconUrl: customMarker,
  iconSize: [48, 48],     // size of the icon
  iconAnchor: [24, 24],   // point of the icon which will correspond to marker's location
  popupAnchor: [0, -40],  // point from which the popup should open relative to the iconAnchor
});

const MapComponent = () => {
  return (
    <MapContainer
      center={[35.6892, 51.389]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "538px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.6892, 51.389]} icon={customIcon}>
        <Popup>سلام! اینجا تهران است.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
