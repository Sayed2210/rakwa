import type Params from "~/base/core/Params/params";
import BasicInformation from "./basic_information_params";
import LocationParams from "./location_params";
import DetailsParams from "./details_params";
import OpeningHours from "./opening_hours";
import PricingBookableServices from "./pricing_bookable_services";
export default class ListingParams implements Params {
  public basicInformation: BasicInformation;
  public Location: LocationParams;
  public gallery: string[];
  public details: DetailsParams;
  public openingHours: OpeningHours[];
  public pricingBookableServices: PricingBookableServices[];

  constructor(
    basicInformation: BasicInformation,
    Location: LocationParams,
    gallery: string[],
    details: DetailsParams,
    openingHours: OpeningHours[],
    pricingBookableServices: PricingBookableServices[],
  ) {
    this.basicInformation = basicInformation;
    this.Location = Location;
    this.gallery = gallery;
    this.details = details;
    this.openingHours = openingHours;
    this.pricingBookableServices = pricingBookableServices;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["basic_information"] = this.basicInformation.toMap();
    data["location"] = this.Location.toMap();
    data["gallery"] = this.gallery;
    data["details"] = this.details.toMap();
    data["opening_hours"] = this.openingHours.map((item: OpeningHours) =>
      item.toMap(),
    );
    data["pricing_bookable_services"] = this.pricingBookableServices.map(
      (item: PricingBookableServices) => item.toMap(),
    );
    return data;
  }
}