import type Params from "~/base/core/Params/params";

export default class FilterListingParams implements Params {
  public status: number;
  public countryId: number;
  public cityId: number;
  public rate: number;
  public distance: number;
  public priceRange: number[];
  public address: string;
  public categoryId: number;
  public page?: number;
  public limit?: number;

  constructor(
    status: number,
    countryId: number,
    cityId: number,
    rate: number,
    distance: number,
    priceRange: number[],
    address: string,
    categoryId: number,
    page: number,
    limit: number,
  ) {
    this.status = status;
    this.countryId = countryId;
    this.cityId = cityId;
    this.rate = rate;
    this.distance = distance;
    this.priceRange = priceRange;
    this.address = address;
    this.categoryId = categoryId;
    this.page = page;
    this.limit = limit;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["status"] = this.status;
    data["country_id"] = this.countryId;
    data["city_id"] = this.cityId;
    data["rate"] = this.rate;
    data["distance"] = this.distance;
    data["price_range"] = this.priceRange;
    data["address"] = this.address;
    data["category_id"] = this.categoryId;
    data["page"] = this.page;
    data["limit"] = this.limit;
    return data;
  }
}
