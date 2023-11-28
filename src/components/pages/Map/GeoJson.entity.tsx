export interface GeoJSONEntity {
  type:
    | "GeometryCollection"
    | "Polygon"
    | "Point"
    | "MultiPoint"
    | "LineString"
    | "MultiLineString"
    | "MultiPolygon"
    | "Feature"
    | "FeatureCollection";
  features?: Feature[];
}

export interface Feature {
  type?: string;
  coordinates?: Array<Array<number[]>>;
}

export interface Geometry {
  type?: string;
}

export interface Properties {}
