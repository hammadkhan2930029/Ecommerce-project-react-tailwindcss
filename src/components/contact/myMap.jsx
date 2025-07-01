import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const MyMap = () => (
  <MapContainer center={[24.8607, 67.0011]} zoom={13} className='w-full h-[400px]'>
    <TileLayer
      attribution='&copy; OpenStreetMap contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[24.8607, 67.0011]}>
      <Popup>Karachi!</Popup>
    </Marker>
  </MapContainer>
);
