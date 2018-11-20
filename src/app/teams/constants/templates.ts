const teamForm = '<form style="padding: 24px;" novalidate [formGroup]="generalForm">' +
  '<p>' +
  '<mat-form-field class="full-width">' +
  '<input type="text" formControlName="name" matInput placeholder="team title">' +
  '</mat-form-field>' +
  '</p>' +
  '<p>' +
  '<mat-form-field class="full-width" formArrayName="project_id">' +
  '<mat-select placeholder="select project">' +
  '<mat-option *ngFor="let project of projects$ | async as projects">project 1</mat-option>' +
  '</mat-select></mat-form-field>' +
  '</p>' +
  '<button mat-raised-button color="primary"' +
  ' type="submit" (click)="submit()"' +
  ' class="submit-button text-floral-white"' +
  ' [disabled]="generalForm.invalid">' +
  '<mat-icon iconsmall>save</mat-icon>Save</button>' +
  '</form>';
const memeberForm = '<p><mat-form-field class="full-width"><input type="text" matInput placeholder="full name" formControlName="name"></mat-form-field></p><p><mat-form-field class="full-width"><input type="email" formControlName="email" matInput placeholder="email"></mat-form-field></p><div fxLayout="row"><mat-form-field fxFlex="90"><input type="password" formControlName="password" matInput placeholder="password"></mat-form-field><button mat-icon-button><mat-icon>add</mat-icon></button></div><button mat-raised-button color="primary" type="submit" (click)="submit()" class="submit-button text-floral-white" [disabled]="generalForm.invalid"><mat-icon iconsmall>save</mat-icon>Save</button></form>';
const manageMemberPermisonForm = '<h3 class="mat-headline">UserName</h3><h4>Available Permission</h4><mat-checkbox>can fill form</mat-checkbox><button mat-raised-button color="primary" type="submit" (click)="submit()" class="submit-button text-floral-white" [disabled]="generalForm.invalid"><mat-icon iconsmall>save</mat-icon>Save</button></form>';
export const teamFormMap = {
  team_form: teamForm,
  memeber_form: memeberForm,
  permission_form: manageMemberPermisonForm
};
