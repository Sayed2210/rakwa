import type Params from "~/base/core/Params/params";
import BasicInformationParams from "./basic_information_params";
import LocationParams from "./location_params";
import ImagesParams from "./details_params";
import OpeningHoursParams from "./opening_hours";
import PricingBookableServices from "./pricing_bookable_services";
import SocialParams from "~/features/ListingFeature/Core/Params/social_params";
export default class ListingParams implements Params {
  public basicInformation: BasicInformationParams;
  public Location: LocationParams;
  public gallery: string[];
  public details: ImagesParams[];
  public social: SocialParams | null;
  public openingHours: OpeningHoursParams[];
  public pricingBookableServices: PricingBookableServices[];

  constructor(
    basicInformation: BasicInformationParams,
    Location: LocationParams,
    gallery: string[],
    details: ImagesParams[],
    social: SocialParams | null,
    openingHours: OpeningHoursParams[],
    pricingBookableServices: PricingBookableServices[],
  ) {
    this.basicInformation = basicInformation;
    this.Location = Location;
    this.gallery = gallery;
    this.details = details;
    this.social = social;
    this.openingHours = openingHours;
    this.pricingBookableServices = pricingBookableServices;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["basic_information"] = this.basicInformation.toMap();
    // console.log(data["basic_information"]);
    data["location"] = this.Location.toMap();
    data["gallery"] = this.gallery;
    data["images"] = this.details.map((item: ImagesParams) => item.toMap());
    data["social"] = this.social?.toMap();
    data["opening_hours"] = this.openingHours.map((item: OpeningHoursParams) =>
      item.toMap(),
    );
    data["pricing_bookable_services"] = this.pricingBookableServices.map(
      (item: PricingBookableServices) => item.toMap(),
    );
    return data;
  }
}
