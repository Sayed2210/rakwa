import { ControllerInterface } from "~/base/persention/Controller/controller_interface";
import UserModel from "~/features/UpdateProfileFeature/Data/models/user_model";
import type { DataState } from "~/base/core/networkStructure/Resources/dataState/data_state";
import type Params from "~/base/core/Params/params";
import UpdateProfileUseCase from "~/features/UpdateProfileFeature/Domain/use_case/update_profile_use_case";
import { useUserStore } from "~/stores/user";
import errorImage from "~/assets/images/error.png";
import successImage from "~/assets/images/success-dialog.png";
import DialogSelector from "~/base/persention/Dialogs/dialog_selector";

export default class UpdateProfileController extends ControllerInterface<UserModel> {
  private static instance: UpdateProfileController;
  private constructor() {
    super();
  }
  private UpdateProfileUseCase = new UpdateProfileUseCase();

  static getInstance() {
    if (!this.instance) {
      this.instance = new UpdateProfileController();
    }
    return this.instance;
  }

  async updateProfile(params: Params, ) {
    // useLoaderStore().setLoadingWithDialog();
    try {
      const dataState: DataState<UserModel> =
        await this.UpdateProfileUseCase.call(params);
      this.setState(dataState);
      if (this.isDataSuccess()) {
        DialogSelector.instance.successDialog.openDialog({
          dialogName: "dialog",
          titleContent: "UpdateProfile Success",
          imageElement: successImage,
          messageContent: null,
        });
        const userStore = useUserStore();
        if (this.state.value.data) {
          console.log(this.state.value.data)
          userStore.setUser(this.state.value.data);
        }
      }else {
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