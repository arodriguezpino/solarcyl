import "leaflet/dist/leaflet.css";
import { GeoJSON, MapContainer, Polygon, TileLayer } from "react-leaflet";
import Title from "../../title/Title";
import "./Map.page.css";
import data from "../../../assets/files/example";

const MapPage = () => {
  return (
    <>
      <Title
        title="Mapa zonas excluidas en Castilla y León"
        subtitle="Aquí podrás informarte del excluido fotovoltaico en Castilla y León "
      />
      <MapContainer
        center={[41.6534, -4.7319]}
        zoom={7.8}
        scrollWheelZoom={true}
        className="map"
      >
        <Polygon
          pathOptions={{
            fill: true,
            color: "blue",
          }}
          positions={[]}
        ></Polygon>
        <GeoJSON data={data}></GeoJSON>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>

    // Hay unos puntos en la página que se pueden añadir
    // https://datosabiertos.jcyl.es/web/jcyl/set/es/medio-ambiente/renovables-excluidas-fotovoltaico/1285260719958
  );
};

export default MapPage;
