import { ControllerInterface } from "~/base/persention/Controller/controller_interface";
import OtherReviews from "~/features/FetchReviewsFeature/Data/models/other_review_model";
import type { DataState } from "~/base/core/networkStructure/Resources/dataState/data_state";
import type Params from "~/base/core/Params/params";
import FetchOtherReviewsUseCase from "~/features/FetchReviewsFeature/Domain/use_case/fetch_other_reviews_use_case";

export default class FetchOtherReviewsController extends ControllerInterface<
  OtherReviews[]
> {
  private static instance: FetchOtherReviewsController;
  private constructor() {
    super();
  }
  private FetchOtherReviewsUseCase = new FetchOtherReviewsUseCase();

  static getInstance() {
    if (!this.instance) {
      this.instance = new FetchOtherReviewsController();
    }
    return this.instance;
  }

  async fetchOtherReviews(params: Params) {
    // useLoaderStore().setLoadingWithDialog();
    try {
      this.setLoading();
      const dataState: DataState<OtherReviews[]> =
        await this.FetchOtherReviewsUseCase.call(params);
      this.setState(dataState);
      if (this.isDataSuccess()) {
        return this.state;
      } else {
        throw new Error(this.state.value.error?.title);
      }
      // useLoaderStore().endLoadingWithDialog();
    } catch (error: any) {
      return this.state;
    }
  }
}
