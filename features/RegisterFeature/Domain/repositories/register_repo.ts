import { RegisterApiService } from '~/features/RegisterFeature/Data/api_services/register_api_service'
import UserModel from '~/features/RegisterFeature/Data/models/user_model'
import RepoInterface from '~/base/Domain/Repositories/repo_interface'
import type ServicesInterface from '~/base/Data/ApiService/api_service_interface'

class RegisterRepo extends RepoInterface<UserModel> {
  private static instance: RegisterRepo
  // eslint-disable-next-line ~typescript-eslint/no-empty-function
  private constructor() {
    super()
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new RegisterRepo()
    }
    return this.instance
  }

  onParse(data: any): UserModel {
    return UserModel.fromMap(data);
  }

  get serviceInstance(): ServicesInterface {
    return RegisterApiService.getInstance();
  }
}

export { RegisterRepo }
