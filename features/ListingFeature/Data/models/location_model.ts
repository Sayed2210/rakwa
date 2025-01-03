import type CountryModel from "~/features/FetchCountriesFeature/Data/models/country_model";
import type CityModel from "~/features/FetchCitiesFeature/Data/models/city_model";

export default class LocationModel {
  address: string;
  lat: number;
  lng: number;
  googleMapId: string;
  country: CountryModel;
  city: CityModel;

  constructor(
    address: string,
    lat: number,
    lng: number,
    googleMapId: string,
    country: CountryModel,
    city: CityModel,
  ) {
    this.address = address;
    this.lat = lat;
    this.lng = lng;
    this.googleMapId = googleMapId;
    this.country = country;
    this.city = city;
  }

  static fromMap(map: { [key: string]: any }): LocationModel {
    return new LocationModel(
      map["address"],
      map["lat"],
      map["long"],
      map["google_map_id"],
      map["country"],
      map["city"],
    );
  }
}
