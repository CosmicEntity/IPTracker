import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import icon from "./icon";

export default function MarkerPosition({ address }) {
  const position = [address.location.lat, address.location.lng];
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);
  return (
    <>
      <Marker icon={icon} position={position}></Marker>
    </>
  );
}
