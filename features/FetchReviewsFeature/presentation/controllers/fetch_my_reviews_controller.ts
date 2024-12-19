import { ControllerInterface } from "~/base/persention/Controller/controller_interface";
import MyReviews from "~/features/FetchReviewsFeature/Data/models/my_review_model";
import type { DataState } from "~/base/core/networkStructure/Resources/dataState/data_state";
import type Params from "~/base/core/Params/params";
import FetchMyReviewsUseCase from "~/features/FetchReviewsFeature/Domain/use_case/fetch_my_reviews_use_case";

export default class FetchMyReviewsController extends ControllerInterface<
  MyReviews[]
> {
  private static instance: FetchMyReviewsController;
  private constructor() {
    super();
  }
  private FetchMyReviewsUseCase = new FetchMyReviewsUseCase();

  static getInstance() {
    if (!this.instance) {
      this.instance = new FetchMyReviewsController();
    }
    return this.instance;
  }

  async fetchMyReviews(params: Params) {
    // useLoaderStore().setLoadingWithDialog();
    try {
      this.setLoading();
      const dataState: DataState<MyReviews[]> =
        await this.FetchMyReviewsUseCase.call(params);
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
