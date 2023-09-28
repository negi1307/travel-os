import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Paper } from '@mui/material';

const Map = ({ latitude, longitude }: any) => {
  const mapStyles = {
    width: '100%',
    height: '589px',
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };
  return (
    <Paper elevation={3} sx={{ marginBottom: 4 }}>
      <LoadScript googleMapsApiKey="  .....key......  ">
        <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </Paper>
  );
};

export default Map;
