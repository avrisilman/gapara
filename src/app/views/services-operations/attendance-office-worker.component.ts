import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'attendance-office-worker.component.html'
})
export class AttendanceOfficeWorkerComponent {
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  @ViewChild('successModal') public successModal: ModalDirective;
  @ViewChild('warningModal') public warningModal: ModalDirective;
  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  @ViewChild('infoModal') public infoModal: ModalDirective;
}
