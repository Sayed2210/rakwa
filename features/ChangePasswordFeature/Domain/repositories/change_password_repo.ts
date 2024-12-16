import { ChangePasswordApiService } from '~/features/ChangePasswordFeature/Data/api_services/change_password_service'
import UserModel from '~/features/ChangePasswordFeature/Data/models/user_model'
import RepoInterface from '~/base/Domain/Repositories/repo_interface'
import type ServicesInterface from '~/base/Data/ApiService/api_service_interface'


enum ResponseType {
  withData,
  withoutData,
}

class ChangePasswordRepo extends RepoInterface<UserModel> {
  private static instance: ChangePasswordRepo
  // eslint-disable-next-line ~typescript-eslint/no-empty-function
  private constructor() {
    super()
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new ChangePasswordRepo()
    }
    return this.instance
  }


  get responseType(): ResponseType {
    return ResponseType.withoutData
  }

  onParse(data: any): UserModel {
    return UserModel.fromMap(data);
  }

  get serviceInstance(): ServicesInterface {
    return ChangePasswordApiService.getInstance();
  }
}

export { ChangePasswordRepo }
