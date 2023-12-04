import "leaflet/dist/leaflet.css";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import Title from "../../title/Title";
import "./Map.page.css";
import { IconWithText } from "../../iconWithText/IconWithText";
import jcylLogo from "../../../assets/images/junta-de-castilla-y-leon.png";

const MapPage = () => {
  return (
    <>
      <Title
        title="Mapa zonas excluidas en Castilla y León"
        subtitle="Aquí podrás informarte del excluido fotovoltaico en Castilla y León "
      />
      {/* <iframe
        src="https://solaratlas.es/valladolid/map#map"
        className="map"
      ></iframe> */}
      <div className="row">
        <div className="col">
          <MapContainer
            center={[41.6534, -4.7319]}
            zoom={15}
            scrollWheelZoom={true}
            className="map"
          >
            <Polygon
              pathOptions={{
                fill: true,
                color: "red",
              }}
              positions={[
                [
                  [41.6473, -4.7309],
                  [41.6488, -4.73303],
                  [41.65915, -4.73157],
                  [41.65913, -4.73015],
                ],
                [
                  [41.64511, -4.73351],
                  [41.64814, -4.72977],
                  [41.64824, -4.7292],
                  [41.64428, -4.72681],
                  [41.64413, -4.72735],
                  [41.64446, -4.72781],
                  [41.64437, -4.73151],
                  [41.64511, -4.73351],
                ],
              ]}
            ></Polygon>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
        <div className="col">
          <IconWithText
            icon={jcylLogo}
            link="https://idecyl.jcyl.es/vcig/"
            text="Mapa de excluido fotovoltaico"
          />
          <IconWithText
            icon={jcylLogo}
            link="https://solaratlas.es/valladolid/map"
            text="Mapa de potencial fotovoltaico de los tejados de Valladolid"
          />
        </div>
      </div>
    </>

    // Hay unos puntos en la página que se pueden añadir
    // https://datosabiertos.jcyl.es/web/jcyl/set/es/medio-ambiente/renovables-excluidas-fotovoltaico/1285260719958
  );
};

export default MapPage;
