import FilterListingParams from "~/features/ListingFeature/Core/Params/filter_params";

export default class FilterListingParamsBuilder {
  private static _instance: FilterListingParamsBuilder | null = null;

  private status: number | null = null;
  private countryId: number | null = null;
  private cityId: number | null = null;
  private rate: number | null = null;
  private distance: number | null = null;
  private priceRange: number[] | null = null;
  private address: string | null = null;
  private page: number | null = null;
  private limit: number | null = null;

  // Private constructor to prevent instantiation
  private constructor() {}

  // Static method to get the singleton instance
  public static get Instance(): FilterListingParamsBuilder {
    if (!FilterListingParamsBuilder._instance) {
      FilterListingParamsBuilder._instance = new FilterListingParamsBuilder();
    }
    return FilterListingParamsBuilder._instance;
  }

  // Methods to set fields
  public setStatus(status: number): this {
    this.status = status;
    return this;
  }
  public setCountryId(countryId: number): this {
    this.countryId = countryId;
    return this;
  }
  public setCityId(cityId: number) {
    this.cityId = cityId;
    return;
  }
  public setRate(rate: number): this {
    this.rate = rate;
    return this;
  }
  public setDistance(distance: number): this {
    this.distance = distance;
    return this;
  }
  public setPriceRange(priceRange: number[]): this {
    this.priceRange = priceRange;
    return this;
  }
  public setAddress(address: string): this {
    this.address = address;
    return this;
  }
  public setPage(page: number): this {
    this.page = page;
    return this;
  }
  public setLimit(limit: number): this {
    this.limit = limit;
    return this;
  }

  // Build method to construct the FilterListingParams object
  public build(): FilterListingParams {
    return new FilterListingParams(
      this.status!,
      this.countryId!,
      this.cityId!,
      this.rate!,
      this.distance!,
      this.priceRange!,
      this.address!,
      this.page!,
      this.limit!,
    );
  }
}
