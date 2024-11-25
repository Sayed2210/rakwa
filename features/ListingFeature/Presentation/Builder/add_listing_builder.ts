import type Params from "~/base/core/Params/params";
import BasicInformationParams from "~/features/ListingFeature/Core/Params/basic_information_params";
import LocationParams from "~/features/ListingFeature/Core/Params/location_params";
import DetailsParams from "~/features/ListingFeature/Core/Params/details_params";
import OpeningHoursParams from "~/features/ListingFeature/Core/Params/opening_hours";
import PricingBookableServices from "~/features/ListingFeature/Core/Params/pricing_bookable_services";
import ListingParams from "~/features/ListingFeature/Core/Params/listing_params";

export default class ListingParamsBuilder {
  private static _instance: ListingParamsBuilder | null = null;

  private basicInformation: BasicInformationParams | null = null;
  private location: LocationParams | null = null;
  private gallery: string[] = [];
  private details: DetailsParams | null = null;
  private openingHours: OpeningHoursParams[] = [];
  private pricingBookableServices: PricingBookableServices[] = [];

  // Private constructor to prevent instantiation
  private constructor() {}

  // Static method to get the singleton instance
  public static get instance(): ListingParamsBuilder {
    if (!ListingParamsBuilder._instance) {
      ListingParamsBuilder._instance = new ListingParamsBuilder();
    }
    return ListingParamsBuilder._instance;
  }

  // Methods to set fields
  setBasicInformation(basicInformation: BasicInformationParams): this {
    this.basicInformation = basicInformation;
    return this;
  }

  setLocation(location: LocationParams): this {
    this.location = location;
    return this;
  }

  setGallery(gallery: string[]): this {
    this.gallery = gallery;
    return this;
  }

  setDetails(details: DetailsParams): this {
    this.details = details;
    return this;
  }

  setOpeningHours(openingHours: OpeningHoursParams[]): this {
    this.openingHours = openingHours;
    return this;
  }

  setPricingBookableServices(
    pricingBookableServices: PricingBookableServices[],
  ): this {
    this.pricingBookableServices = pricingBookableServices;
    return this;
  }

  // Build method to construct the ListingParams object
  build(): ListingParams {
    if (!this.basicInformation) {
      throw new Error("BasicInformation is required.");
    }
    if (!this.location) {
      throw new Error("Location is required.");
    }
    if (!this.details) {
      throw new Error("Details are required.");
    }

    const params = new ListingParams(
      this.basicInformation,
      this.location,
      this.gallery,
      this.details,
      this.openingHours,
      this.pricingBookableServices,
    );
    // Reset the builder state after building
    this.reset();
    return params;
  }

  // Reset the builder state for reuse
  private reset(): void {
    this.basicInformation = null;
    this.location = null;
    this.gallery = [];
    this.details = null;
    this.openingHours = [];
    this.pricingBookableServices = [];
  }
}