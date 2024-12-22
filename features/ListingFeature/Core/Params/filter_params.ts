import type Params from "~/base/core/Params/params";


export default class FilterListingParams implements Params {
  public status: number;
  public countryId: number;
  public rate: number;
  public distance: number;
  public priceRange: number[];
  public address: string;
  public page?: number;
  public limit?: number;

  constructor(
    status: number,
    countryId: number,
    rate: number,
    distance: number,
    priceRange: number[],
    address: string,
    page: number,
    limit: number,
  ) {
    this.status = status;
    this.countryId = countryId;
    this.rate = rate;
    this.distance = distance;
    this.priceRange = priceRange;
    this.address = address;
    this.page = page;
    this.limit = limit;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["status"] = this.status;
    data["country_id"] = this.countryId;
    data["rate"] = this.rate;
    data["distance"] = this.distance;
    data["price_range"] = this.priceRange;
    data["address"] = this.address;
    data["page"] = this.page;
    data["limit"] = this.limit;
    return data;
  }
}