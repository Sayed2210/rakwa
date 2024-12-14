import { ControllerInterface } from '~/base/persention/Controller/controller_interface'
import UserModel from '~/features/RegisterFeature/Data/models/user_model'
import type { DataState } from '~/base/core/networkStructure/Resources/dataState/data_state'
import type Params from '~/base/core/Params/params'
import RegisterUseCase from '~/features/RegisterFeature/Domain/use_case/register_use_case'
import {useRouter} from "vue-router";

// import { useLoaderStore } from "~/stores/dialogs/loader";

export default class RegisterController extends ControllerInterface<UserModel> {
  private static _instance: RegisterController
  private constructor() {
    super()
  }
  private RegisterUseCase = new RegisterUseCase()

  static get Instance() {
    if (!this._instance) {
      this._instance = new RegisterController()
    }
    return this._instance
  }

  async Register(params: Params) {
    // useLoaderStore().setLoadingWithDialog();
    const router = useRouter()
    // console.log(params)
    const dataState: DataState<UserModel> = await this.RegisterUseCase.call(params)
    this.setState(dataState)
    if (this.isDataSuccess()) {
      await router.push("/")
      // useLoaderStore().endLoadingWithDialog();
    } else {
      throw new Error("Error while Register")
    }
    return this.state
  }
}