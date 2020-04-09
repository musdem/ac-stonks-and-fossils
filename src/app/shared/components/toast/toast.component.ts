import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast-service/toast.service';
import { Toast } from '../../models/toast.model';

@Component({
  selector: 'ac-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  visible = false;
  toast = new Toast('', 0, true);

  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.toastService.getToasts()
      .subscribe(toast => {
        this.toast = toast;
        this.toggle();
        setTimeout(() => this.toggle(), this.toast.timeout);
      });
  }

  private toggle() {
    this.visible = !this.visible;
  }

}
