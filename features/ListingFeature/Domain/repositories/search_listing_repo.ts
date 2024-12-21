import { SearchListingApiService } from "~/features/ListingFeature/Data/api_services/search_listing_api_service";
import RepoInterface from "~/base/Domain/Repositories/repo_interface";
import type ServicesInterface from "~/base/Data/ApiService/api_service_interface";
import SearchListingModel from "~/features/ListingFeature/Data/models/search_listing_model";

class SearchListingRepo extends RepoInterface<SearchListingModel[]> {
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

  onParse(data: any): SearchListingModel[] {
    return data.map((item: any) => SearchListingModel.fromMap(item));
  }

  get serviceInstance(): ServicesInterface {
    return SearchListingApiService.getInstance();
  }
}

export { SearchListingRepo };
