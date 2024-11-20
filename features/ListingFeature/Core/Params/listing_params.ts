import type Params from "~/base/core/Params/params";
import BasicInformationParams from "./basic_information_params";
import LocationParams from "./location_params";
import DetailsParams from "./details_params";
import OpeningHoursParams from "./opening_hours";
import PricingBookableServices from "./pricing_bookable_services";
export default class ListingParams implements Params {
  public basicInformation: BasicInformationParams;
  public Location: LocationParams;
  public gallery: string[];
  public details: DetailsParams;
  public openingHours: OpeningHoursParams[];
  public pricingBookableServices: PricingBookableServices[];

  constructor(
    basicInformation: BasicInformationParams,
    Location: LocationParams,
    gallery: string[],
    details: DetailsParams,
    openingHours: OpeningHoursParams[],
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
    console.log(data["basic_information"]);
    data["location"] = this.Location.toMap();
    data["gallery"] = this.gallery;
    data["details"] = this.details.toMap();
    data["opening_hours"] = this.openingHours.map((item: OpeningHoursParams) =>
      item.toMap(),
    );
    data["pricing_bookable_services"] = this.pricingBookableServices.map(
      (item: PricingBookableServices) => item.toMap(),
    );
    return data;
  }
}
