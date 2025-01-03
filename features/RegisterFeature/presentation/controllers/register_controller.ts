import { ControllerInterface } from "~/base/persention/Controller/controller_interface";
import UserModel from "~/features/RegisterFeature/Data/models/user_model";
import type { DataState } from "~/base/core/networkStructure/Resources/dataState/data_state";
import type Params from "~/base/core/Params/params";
import RegisterUseCase from "~/features/RegisterFeature/Domain/use_case/register_use_case";
import { useRouter } from "vue-router";
import errorImage from "~/assets/images/error.png";
import DialogSelector from "~/base/persention/Dialogs/dialog_selector";
import successImage from "assets/images/success-dialog.png";
import {useUserStore} from "~/stores/user";

// import { useLoaderStore } from "~/stores/dialogs/loader";

export default class RegisterController extends ControllerInterface<UserModel> {
  private static _instance: RegisterController;
  private constructor() {
    super();
  }
  private RegisterUseCase = new RegisterUseCase();

  static get Instance() {
    if (!this._instance) {
      this._instance = new RegisterController();
    }
    return this._instance;
  }

  async Register(params: Params , router: any) {
    // useLoaderStore().setLoadingWithDialog();
    try {
      // console.log(params)
      const dataState: DataState<UserModel> =
        await this.RegisterUseCase.call(params);
      this.setState(dataState);
      if (this.isDataSuccess()) {
        DialogSelector.instance.successDialog.openDialog({
          dialogName: "dialog",
          titleContent: "Login Success",
          imageElement: successImage,
          messageContent: null,
        });
        await router.push("/");
        const userStore = useUserStore();
        if (this.state.value.data) {
          console.log(this.state.value.data)
          userStore.setUser(this.state.value.data);
        }

        // useLoaderStore().endLoadingWithDialog();
      } else {
        throw new Error(this.state.value.error?.title);
      }
      return this.state;
    } catch (error: any) {
      console.log(error);
      DialogSelector.instance.errorDialog.openDialog({
        dialogName: "dialog",
        titleContent: error,
        imageElement: errorImage,
        messageContent: null,
      });
      // useLoaderStore().endLoadingWithDialog();
    }
  }
}
