import type Params from '~/base/core/Params/params'
import type ListingModel from '~/features/ListingFeature/Data/models/listing_index_model'
import type UseCase from '~/base/Domain/UseCase/use_case'
import type { DataState } from '~/base/core/networkStructure/Resources/dataState/data_state'
import { FilterListingRepo } from '~/features/ListingFeature/Domain/repositories/filter_listing_repo'

export default class FilterListingUseCase implements UseCase<ListingModel[], Params> {
  async call(params: Params): Promise<DataState<ListingModel[]>> {
    return FilterListingRepo.getInstance().call(params)
  }
}
