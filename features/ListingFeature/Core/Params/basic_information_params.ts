import type Params from "~/base/core/Params/params";

export default class BasicInformationParams implements Params {
  public title: string;
  public logo: File | null;
  public categories: number;
  public serviceCategory: number;
  public keywords: string;
  public description: string;
  public minimumPriceRange: number;
  public maximumPriceRange: number;

  constructor(
    title: string,
    logo: File | null,
    categories: number,
    serviceCategory: number,
    keywords: string,
    description: string,
    minimumPriceRange: number,
    maximumPriceRange: number,
  ) {
    this.title = title;
    this.logo = logo;
    this.categories = categories;
    this.serviceCategory = serviceCategory;
    this.keywords = keywords;
    this.description = description;
    this.minimumPriceRange = minimumPriceRange;
    this.maximumPriceRange = maximumPriceRange;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["title"] = this.title;
    if (this.logo && this.logo instanceof File) data["image"] = this.logo;
    data["category_id"] = this.categories;
    data["service_id"] = this.serviceCategory;
    data["keywords"] = this.keywords;
    data["description"] = this.description;
    data["minimum_price"] = this.minimumPriceRange;
    data["maximum_price"] = this.maximumPriceRange;
    return data;
  }
}
