import type Params from "~/base/core/Params/params";
import CategoryModel from "~/features/FetchCategoriesFeature/Data/models/category_model";
import CategoryTypeModel from "~/features/FetchCategoryTypeFeature/Data/models/category_type_model";
import {convertToBase64} from "~/base/persention/utils/convert_to_base_64";

export default class BasicInformationParams implements Params {
  public title: string;
  public logo: File | null;
  public categories: CategoryModel;
  public serviceCategory: CategoryTypeModel;
  public keywords: string;
  public description: string;
  public minimumPriceRange: number;
  public maximumPriceRange: number;
  public type: number = 1;

  constructor(
    title: string,
    logo: File | null,
    categories: CategoryModel,
    serviceCategory: CategoryTypeModel,
    keywords: string,
    description: string,
    minimumPriceRange: number,
    maximumPriceRange: number,
    type: number = 1,
  ) {
    this.title = title;
    this.logo = logo;
    this.categories = categories;
    this.serviceCategory = serviceCategory;
    this.keywords = keywords;
    this.description = description;
    this.minimumPriceRange = minimumPriceRange;
    this.maximumPriceRange = maximumPriceRange;
    this.type = type;
  }

  toMap(): { [p: string]: any } {
    const data: { [p: string]: any } = {};
    data["title"] = this.title;
    data["image"] = this.logo;
    data["category_id"] = this.categories.id;
    data["category_type_id"] = this.serviceCategory.id;
    data["keywords"] = this.keywords;
    data["description"] = this.description;
    data["minimum_price"] = this.minimumPriceRange;
    data["maximum_price"] = this.maximumPriceRange;
    data["type"] = this.type ?? 1;
    return data;
  }
}
