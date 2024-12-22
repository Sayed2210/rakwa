import { FilterListingApiService } from "~/features/ListingFeature/Data/api_services/filter_listing_api_service";
import ListingModel from "~/features/ListingFeature/Data/models/listing_index_model";
import RepoInterface from "~/base/Domain/Repositories/repo_interface";
import type ServicesInterface from "~/base/Data/ApiService/api_service_interface";

class FilterListingRepo extends RepoInterface<ListingModel[]> {
  private static instance: FilterListingRepo;
  // eslint-disable-next-line ~typescript-eslint/no-empty-function
  private constructor() {
    super();
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new FilterListingRepo();
    }
    return this.instance;
  }

  onParse(data: any): ListingModel[] {
    return data.map((item: any) => ListingModel.fromMap(item));
  }

  get serviceInstance(): ServicesInterface {
    return FilterListingApiService.getInstance();
  }
}

export { FilterListingRepo };
