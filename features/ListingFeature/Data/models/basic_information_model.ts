import ImageModel from "~/features/ListingFeature/Data/models/image_model";
import CategoryModel from "~/features/FetchCategoriesFeature/Data/models/category_model";
import CategoryTypeModel from "~/features/FetchCategoryTypeFeature/Data/models/category_type_model";

export default class BasicInformationModel {
  public id: number;
  public title: string;
  public description: string;
  public image: ImageModel[];
  public keywords: string;
  public category: CategoryModel;
  public type: { id: number; title: string };
  public typeCategory: CategoryTypeModel;
  public minPrice: number;
  public maxPrice: number;
  public totalRate: number;
  public status: number;
  public rate: number;
  public rateCount: number;

  constructor(
    id: number,
    title: string,
    description: string,
    image: ImageModel[],
    keywords: string,
    category: CategoryModel,
    type: {
      id: number;
      title: string;
    },
    typeCategory: CategoryTypeModel,
    minPrice: number,
    maxPrice: number,
    totalRate: number,
    status: number,
    rate: number,
    rateCount: number,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.keywords = keywords;
    this.category = category;
    this.type = type;
    this.typeCategory = typeCategory;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.totalRate = totalRate;
    this.status = status;
    this.rate = rate;
    this.rateCount = rateCount;
  }

  static fromMap(map: { [key: string]: any }): BasicInformationModel {
    return new BasicInformationModel(
      map["id"],
      map["title"],
      map["description"],
      map["image"],
      map["keywords"],
      CategoryModel.fromMap(map["category"]),
      map["type"],
      CategoryTypeModel.fromMap(map["type_category"]),
      map["min_price"],
      map["max_price"],
      map["total_rate"],
      map["status"],
      map["rate"],
      map["rate_count"],
    );
  }
}
