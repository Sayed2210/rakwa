import BasicInformationParams from "~/features/ListingFeature/Core/Params/basic_information_params";
import LocationParams from "~/features/ListingFeature/Core/Params/location_params";
import OpeningHoursParams from "~/features/ListingFeature/Core/Params/opening_hours";
import PricingBookableServices from "~/features/ListingFeature/Core/Params/pricing_bookable_services";
import SocialParams from "~/features/ListingFeature/Core/Params/social_params";
import UpdateListingParams from "~/features/ListingFeature/Core/Params/update_listing_params";

export default class UpdateListingParamsBuilder {
  private static _instance: UpdateListingParamsBuilder | null = null;


  private listingId: string = "";
  private basicInformation: BasicInformationParams | null = null;
  private location: LocationParams | null = null;
  private socials: SocialParams | null = null;
  private openingHours: OpeningHoursParams[] = [];
  private pricingBookableServices: PricingBookableServices[] = [];

  // Private constructor to prevent instantiation
  private constructor() {}

  // Static method to get the singleton instance
  public static get Instance(): UpdateListingParamsBuilder {
    if (!UpdateListingParamsBuilder._instance) {
      UpdateListingParamsBuilder._instance = new UpdateListingParamsBuilder();
    }
    return UpdateListingParamsBuilder._instance;
  }



  // Methods to set fields

  setListingId(listingId: string): this {
    this.listingId = listingId;
    return this;
  }
  setBasicInformation(basicInformation: BasicInformationParams): this {
    this.basicInformation = basicInformation;
    return this;
  }

  setLocation(location: LocationParams): this {
    this.location = location;
    return this;
  }




  setSocials(socials: SocialParams): this {
    this.socials = socials;
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
  build(): UpdateListingParams {
    if (!this.basicInformation) {
      throw new Error("BasicInformation is required.");
    }
    if (!this.location) {
      throw new Error("Location is required.");
    }
    const params = new UpdateListingParams(
      this.listingId,
      this.basicInformation,
      this.location,
      this.socials,
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
    this.openingHours = [];
    this.pricingBookableServices = [];
  }
}
