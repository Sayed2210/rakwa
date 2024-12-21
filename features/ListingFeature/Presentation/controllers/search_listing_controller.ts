import { ControllerInterface } from "~/base/persention/Controller/controller_interface";
import type { DataState } from "~/base/core/networkStructure/Resources/dataState/data_state";
import type Params from "~/base/core/Params/params";
import SearchListingUseCase from "~/features/ListingFeature/Domain/use_case/search_listing_use_case";
// import { useUserStore } from "~/stores/user";
import errorImage from "~/assets/images/error.png";
import successImage from "~/assets/images/success-dialog.png";
import DialogSelector from "~/base/persention/Dialogs/dialog_selector";
import SearchListingModel from "~/features/ListingFeature/Data/models/search_listing_model";

export default class SearchListingController extends ControllerInterface<SearchListingModel[]> {
  private static instance: SearchListingController;
  private constructor() {
    super();
  }
  private SearchListingUseCase = new SearchListingUseCase();

  static getInstance() {
    if (!this.instance) {
      this.instance = new SearchListingController();
    }
    return this.instance;
  }

  async SearchListing(params: Params) {
    // useLoaderStore().setLoadingWithDialog();
    try {
      const router = useRouter();
      const dataState: DataState<SearchListingModel[]> =
        await this.SearchListingUseCase.call(params);
      this.setState(dataState);
      if (this.isDataSuccess()) {
        return  this.state;
        // DialogSelector.instance.successDialog.openDialog({
        //   dialogName: "dialog",
        //   titleContent: "SearchListing Success",
        //   imageElement: successImage,
        //   messageContent: null,
        // });
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
      DialogSelector.instance.errorDialog.openDialog({
        dialogName: "dialog",
        titleContent: error,
        imageElement: errorImage,
        messageContent: null,
      });
    }
  }
}