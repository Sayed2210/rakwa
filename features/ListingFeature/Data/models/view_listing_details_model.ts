import ImageModel from "~/features/ListingFeature/Data/models/image_model";
import SocialModel from "~/features/ListingFeature/Data/models/social_model";
import OpeningHoursModel from "~/features/ListingFeature/Data/models/opening_hours_model";
import ReviewModel from "~/features/ListingFeature/Data/models/review_model";
import LocationModel from "~/features/ListingFeature/Data/models/location_model";
import BasicInformationModel from "~/features/ListingFeature/Data/models/basic_information_model";
import UserModel from "~/features/LoginFeature/Data/models/user_model";

export default class ViewListingDetailsModel {
  public id: number;
  public BasicInformation: BasicInformationModel;

  public location: LocationModel;

  public social: SocialModel;

  public images: ImageModel[];
  public openingHours: OpeningHoursModel[];

  public reviews: ReviewModel[]; // Adjust this type as needed
  public myReview: ReviewModel | null;
  public claimStatus: number;
  constructor(
    id: number,
    BasicInformation: BasicInformationModel,
    location: LocationModel,
    social: SocialModel,
    images: ImageModel[],
    openingHours: OpeningHoursModel[],
    reviews: ReviewModel[],
    claimStatus: number = 0,
    myReview: ReviewModel | null,
  ) {
    this.id = id;
    this.BasicInformation = BasicInformation;
    this.location = location;
    this.social = social;
    this.images = images;
    this.openingHours = openingHours;
    this.reviews = reviews;
    this.claimStatus = claimStatus;
    this.myReview = myReview;
  }

  static fromMap(map: { [key: string]: any }): ViewListingDetailsModel {
    return new ViewListingDetailsModel(
      map["id"],
      BasicInformationModel.fromMap(map["basic_information"]),
      LocationModel.fromMap(map["location_information"]),
      SocialModel.fromMap(map["sosial"]),
      map["images"].map((image: any) => ImageModel.fromMap(image)),
      map["opening_hours"].map((openingHour: any) =>
        OpeningHoursModel.fromMap(openingHour),
      ),
      map["reviews"].map((review: any) => ReviewModel.fromMap(review)),
      map["claim_status"],
      map["my_review"] ? ReviewModel.fromMap(map["my_review"]) : null,
    );
  }
}
