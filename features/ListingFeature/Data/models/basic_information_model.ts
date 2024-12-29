import ImageModel from "~/features/ListingFeature/Data/models/image_model";
import CategoryModel from "~/features/FetchCategoriesFeature/Data/models/category_model";
import CategoryTypeModel from "~/features/FetchCategoryTypeFeature/Data/models/category_type_model";
import UserModel from "~/features/LoginFeature/Data/models/user_model";

export default class BasicInformationModel {
  public id: number;
  public title: string;
  public description: string;
  public image: string;
  public keywords: string;
  public category: CategoryModel;
  public type: { id: number; title: string };
  public typeCategory: CategoryTypeModel | null;
  public minPrice: number;
  public maxPrice: number;
  public totalRate: number;
  public status: number;
  public rate: number;
  public rateCount: number;
  public claimStatus: number;
  public owner: UserModel | null;

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    keywords: string,
    category: CategoryModel,
    type: {
      id: number;
      title: string;
    },
    typeCategory: CategoryTypeModel | null,
    minPrice: number,
    maxPrice: number,
    totalRate: number,
    status: number,
    rate: number,
    rateCount: number,
    claimStatus: number,
    owner: UserModel | null,
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
    this.claimStatus = claimStatus;
    this.owner = owner;
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
      map["type_category"]
        ? CategoryTypeModel.fromMap(map["type_category"])
        : null,
      map["min_price"],
      map["max_price"],
      map["total_rate"],
      map["status"],
      map["rate"],
      map["total_rate"],
      map["claim_status"],
      map["owner"] ? UserModel.fromMap(map["owner"]) : null,
    );
  }
}
