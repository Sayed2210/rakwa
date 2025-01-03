import type Params from "~/base/core/Params/params";
import type ListingModel from "~/features/FetchListingFeature/Data/models/listing_model";
import type UseCase from "~/base/Domain/UseCase/use_case";
import type { DataState } from "~/base/core/networkStructure/Resources/dataState/data_state";
import { FetchListingRepo } from "~/features/FetchListingFeature/Domain/repositories/fetch_listings_repo";

export default class FetchListingUseCase
  implements UseCase<ListingModel[], Params>
{
  async call(params: Params): Promise<DataState<ListingModel[]>> {
    return FetchListingRepo.getInstance().call(params);
  }
}
