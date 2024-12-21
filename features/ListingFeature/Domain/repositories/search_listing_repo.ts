import { SearchListingApiService } from "~/features/ListingFeature/Data/api_services/search_listing_api_service";
import ListingModel from "~/features/ListingFeature/Data/models/listing_index_model";
import RepoInterface from "~/base/Domain/Repositories/repo_interface";
import type ServicesInterface from "~/base/Data/ApiService/api_service_interface";

class SearchListingRepo extends RepoInterface<ListingModel[]> {
  private static instance: SearchListingRepo;
  // eslint-disable-next-line ~typescript-eslint/no-empty-function
  private constructor() {
    super();
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new SearchListingRepo();
    }
    return this.instance;
  }

  onParse(data: any): ListingModel[] {
    return data.map((item: any) => ListingModel.fromMap(item));
  }

  get serviceInstance(): ServicesInterface {
    return SearchListingApiService.getInstance();
  }
}

export { SearchListingRepo };
