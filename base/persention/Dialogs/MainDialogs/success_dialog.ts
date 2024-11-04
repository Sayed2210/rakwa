import DialogService from '~/base/persention/Dialogs/dialog_service'

export default class ShowSuccessDialog extends DialogService {
  private static instance: ShowSuccessDialog
  constructor() {
    super()
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ShowSuccessDialog()
    }
    return this.instance
  }
}
