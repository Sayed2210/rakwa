import { ControllerInterface } from '~/base/persention/Controller/controller_interface'
import UserModel from '~/features/LoginFeature/Data/models/user_model'
import type { DataState } from '~/base/core/networkStructure/Resources/dataState/data_state'
import type Params from '~/base/core/Params/params'
import LoginUseCase from '~/features/LoginFeature/Domain/use_case/login_use_case'
import {useRouter} from "vue-router";

// import { useLoaderStore } from "~/stores/dialogs/loader";

export default class LoginController extends ControllerInterface<UserModel> {
  private static instance: LoginController
  private constructor() {
    super()
  }
  private LoginUseCase = new LoginUseCase()

  static getInstance() {
    if (!this.instance) {
      this.instance = new LoginController()
    }
    return this.instance
  }

  async login(params: Params) {
    // useLoaderStore().setLoadingWithDialog();
    const router = useRouter()
    const dataState: DataState<UserModel> = await this.LoginUseCase.call(params)
    this.setState(dataState)
    if (this.isDataSuccess()) {
      await router.push("/")
      // useLoaderStore().endLoadingWithDialog();
    } else {
      throw new Error('Error while login')
    }
    return this.state
  }
}
