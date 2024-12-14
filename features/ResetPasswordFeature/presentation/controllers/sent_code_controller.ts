import { ControllerInterface } from "~/base/persention/Controller/controller_interface";
import SentCodeModel from "~/features/ResetPasswordFeature/Data/models/user_model";
import type { DataState } from "~/base/core/networkStructure/Resources/dataState/data_state";
import type Params from "~/base/core/Params/params";
import SentCodeUseCase from "~/features/ResetPasswordFeature/Domain/use_case/sent_code_case";
import { useRouter } from "vue-router";
import errorImage from "~/assets/images/error.png";
import DialogSelector from "~/base/persention/Dialogs/dialog_selector";
import ResetPasswordBuilder from "~/features/ResetPasswordFeature/presentation/builders/reset_password_builder";

export default class SentCodeController extends ControllerInterface<SentCodeModel> {
  private static instance: SentCodeController;
  private constructor() {
    super();
  }
  private SentCodeUseCase = new SentCodeUseCase();

  static getInstance() {
    if (!this.instance) {
      this.instance = new SentCodeController();
    }
    return this.instance;
  }

  async sentCode(params: Params) {
    // useLoaderStore().setLoadingWithDialog();
    try {
      const router = useRouter();
      const dataState: DataState<SentCodeModel> =
        await this.SentCodeUseCase.call(params);
      this.setState(dataState);
      if (this.isDataSuccess()) {
        await router.replace("/auth/verify-code");
        if (this.state.value.data?.email) {
          ResetPasswordBuilder.Instance.setEmail(this.state.value.data?.email);
        }
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
