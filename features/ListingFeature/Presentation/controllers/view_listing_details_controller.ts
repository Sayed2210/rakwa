import { ControllerInterface } from "~/base/persention/Controller/controller_interface";
import type { DataState } from "~/base/core/networkStructure/Resources/dataState/data_state";
import type Params from "~/base/core/Params/params";
import ViewListingDetailsUseCase from "~/features/ListingFeature/Domain/use_case/view_listing_details_use_case";
// import { useUserStore } from "~/stores/user";
import errorImage from "~/assets/images/error.png";
import successImage from "~/assets/images/success-dialog.png";
import DialogSelector from "~/base/persention/Dialogs/dialog_selector";
import type ViewListingDetailsModel from "~/features/ListingFeature/Data/models/view_listing_details_model";

export default class ViewListingDetailsController extends ControllerInterface<
    ViewListingDetailsModel
> {
  private static instance: ViewListingDetailsController;
  private constructor() {
    super();
  }
  private ViewListingDetailsUseCase = new ViewListingDetailsUseCase();

  static getInstance() {
    if (!this.instance) {
      this.instance = new ViewListingDetailsController();
    }
    return this.instance;
  }

  async viewListingDetails(params: Params) {
    // useLoaderStore().setLoadingWithDialog();
    try {
      const router = useRouter();
      const dataState: DataState<ViewListingDetailsModel> =
        await this.ViewListingDetailsUseCase.call(params);
      this.setState(dataState);
      if (this.isDataSuccess()) {
        return this.state;
        // await router.push("/");
        // const userStore = useUserStore();
        // if (this.state.value.data) {
        //   console.log(this.state.value.data)
        //   userStore.setUser(this.state.value.data);
        // }
      } else {
        throw new Error(this.state.value.error?.title);
      }
      // useLoaderStore().endLoadingWithDialog();
    } catch (error: any) {
      return this.state;
    }
  }
}
