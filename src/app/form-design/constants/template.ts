const textInputPopupForm = '<form style="padding: 24px;" novalidate #form="ngForm" (ngSubmit)="submit()">' +
  '  <p>' +
  '    <mat-form-field class="full-width">' +
  '      <input type="text" name="placeholder" ngModel [(ngModel)]="placeholder" matInput placeholder="placeholder" required>' +
  '    </mat-form-field>' +
  '  </p>' +
  '  <p>' +
  '      <mat-checkbox color="primary" style="margin-left: 9px;" name="required" ngModel [(ngModel)]="required">Required</mat-checkbox>' +
  '  </p>' +
  '  <p>' +
  '    <mat-form-field class="full-width">' +
  '    <mat-select name="validation" matNativeControl ngModel placeholder="validation" required [(ngModel)]="validation">' +
  '      <mat-option value="none">none</mat-option>' +
  '      <mat-option value="number">number</mat-option>' +
  '      <mat-option value="email">email</mat-option>' +
  '      <mat-option value="url">url</mat-option>' +
  '    </mat-select>' +
  '    </mat-form-field>' +
  '  </p>' +
  '  <button mat-raised-button color="primary" type="button"\n' +
  '(click)="submit(form)"' +
  '          class="submit-button text-floral-white"\n' +
  '          [disabled]="form.invalid || form.pristine">' +
  '    <mat-icon iconsmall>save</mat-icon>Save' +
  '  </button>' +
  '</form>';
const textAreaPopupForm =  '<form style="padding: 24px;" novalidate #form="ngForm" (ngSubmit)="submit()">' +
  '  <p>' +
  '    <mat-form-field class="full-width">' +
  '      <input type="text" name="placeholder" ngModel [(ngModel)]="placeholder" matInput placeholder="placeholder" required>' +
  '    </mat-form-field>' +
  '  </p>' +
  '  <p>' +
  '      <mat-checkbox color="primary" style="margin-left: 9px;" name="required" ngModel [(ngModel)]="required">Required</mat-checkbox>' +
  '  </p>' +
  '  <button mat-raised-button color="primary" type="button"\n' +
  '(click)="submit(form)"' +
  '          class="submit-button text-floral-white"\n' +
  '          [disabled]="form.invalid || form.pristine">' +
  '    <mat-icon iconsmall>save</mat-icon>Save' +
  '  </button>' +
  '</form>';
const checkboxPopupForm = '<form style="padding: 24px;" novalidate #form="ngForm" (ngSubmit)="submit()">' +
  '  <p>' +
  '    <mat-form-field class="full-width">' +
  '      <input type="text" name="placeholder" ngModel [(ngModel)]="placeholder" matInput placeholder="placeholder" required>' +
  '    </mat-form-field>' +
  '  </p>' +
  '  <p>' +
  '      <mat-checkbox color="primary" style="margin-left: 9px;" name="required" ngModel [(ngModel)]="required">Required</mat-checkbox>' +
  '  </p>' +
  '  <button mat-raised-button color="primary" type="button"\n' +
  '(click)="submit(form)"' +
  '          class="submit-button text-floral-white"\n' +
  '          [disabled]="form.invalid || form.pristine">' +
  '    <mat-icon iconsmall>save</mat-icon>Save' +
  '  </button>' +
  '</form>';
const radioPopupForm = '<form style="padding: 24px;" novalidate #form="ngForm" (ngSubmit)="submit()">' +
  '  <p>' +
  '    <mat-form-field class="full-width">' +
  '      <input type="text" name="placeholder" ngModel [(ngModel)]="placeholder" matInput placeholder="placeholder" required>' +
  '    </mat-form-field>' +
  '  </p>' +
  '  <p>' +
  '      <mat-checkbox color="primary" style="margin-left: 9px;" name="required"  [(ngModel)]="required">Required</mat-checkbox>' +
  '  </p>' +
  '<h4 style="display: inline-block;" *ngFor="let option of options">Radio buttons</h4>' +
  '<span class="spacer"></span>' +
  '<button mat-button type="button" (click)="addMore()"><mat-icon>add</mat-icon>&nbsp;add more</button>' +
  '<p *ngFor="let option of options; let i = index">' +
  '    <mat-form-field class="half-width">' +
  '      <input type="text" name="label{{i}}"  [(ngModel)]="option.label" matInput placeholder="{{option.label}}">' +
  '    </mat-form-field>' +
  '    <mat-form-field class="half-width">' +
  '      <input type="text" name="value{{i}}"  [(ngModel)]="option.value" matInput placeholder="{{option.value}}">' +
  '    </mat-form-field>' +
  '</p>' +
  '  <button mat-raised-button color="primary" type="button"' +
  '(click)="submit(form)"' +
  '          class="submit-button text-floral-white"\n' +
  '          [disabled]="form.invalid || form.pristine">' +
  '    <mat-icon iconsmall>save</mat-icon>Save' +
  '  </button>' +
  '</form>';
const dropDownPopupForm =  '<form style="padding: 24px;" novalidate #form="ngForm" (ngSubmit)="submit()">' +
  '  <p>' +
  '    <mat-form-field class="full-width">' +
  '      <input type="text" name="placeholder" ngModel [(ngModel)]="placeholder" matInput placeholder="placeholder" required>' +
  '    </mat-form-field>' +
  '  </p>' +
  '  <p>' +
  '      <mat-checkbox color="primary" style="margin-left: 9px;" name="required"  [(ngModel)]="required">Required</mat-checkbox>' +
  '  </p>' +
  '<h4 style="display: inline-block;" *ngFor="let option of options">Radio buttons</h4>' +
  '<span class="spacer"></span>' +
  '<button mat-button type="button" (click)="addMore()"><mat-icon>add</mat-icon>&nbsp;add more</button>' +
  '<p *ngFor="let option of options; let i = index">' +
  '    <mat-form-field class="half-width">' +
  '      <input type="text" name="label{{i}}"  [(ngModel)]="option.label" matInput placeholder="{{option.label}}">' +
  '    </mat-form-field>' +
  '    <mat-form-field class="half-width">' +
  '      <input type="text" name="value{{i}}"  [(ngModel)]="option.value" matInput placeholder="{{option.value}}">' +
  '    </mat-form-field>' +
  '</p>' +
  '  <button mat-raised-button color="primary" type="button"' +
  '(click)="submit(form)"' +
  '          class="submit-button text-floral-white"' +
  '          [disabled]="form.invalid || form.pristine">' +
  '    <mat-icon iconsmall>save</mat-icon>Save' +
  '  </button>' +
  '</form>';
const datePopupForm = '<form style="padding: 24px;" novalidate #form="ngForm" (ngSubmit)="submit()">' +
  '  <p>' +
  '    <mat-form-field class="full-width">' +
  '      <input type="text" name="placeholder" ngModel [(ngModel)]="placeholder" matInput placeholder="placeholder" required>' +
  '    </mat-form-field>' +
  '  </p>' +
  '  <p>' +
  '      <mat-checkbox color="primary" style="margin-left: 9px;" name="required" ngModel [(ngModel)]="required">Required</mat-checkbox>' +
  '  </p>' +
  '  <button mat-raised-button color="primary" type="button"' +
  '(click)="submit(form)"' +
  '          class="submit-button text-floral-white"' +
  '          [disabled]="form.invalid || form.pristine">' +
  '    <mat-icon iconsmall>save</mat-icon>Save' +
  '  </button>' +
  '</form>';
const filePopupForm = '<form style="padding: 24px;" novalidate #form="ngForm" (ngSubmit)="submit()">' +
  '  <p>' +
  '    <mat-form-field class="full-width">' +
  '      <input type="text" name="placeholder" ngModel [(ngModel)]="placeholder" matInput placeholder="placeholder" required>' +
  '    </mat-form-field>' +
  '  </p>' +
  '  <p>' +
  '      <mat-checkbox color="primary" style="margin-left: 9px;" name="required" ngModel [(ngModel)]="required">Required</mat-checkbox>' +
  '  </p>' +
  '  <button mat-raised-button color="primary" type="button"' +
  '(click)="submit(form)"' +
  '          class="submit-button text-floral-white"' +
  '          [disabled]="form.invalid || form.pristine">' +
  '    <mat-icon iconsmall>save</mat-icon>Save' +
  '  </button>' +
  '</form>';
const locationPopupForm = '<form style="padding: 24px;" novalidate #form="ngForm" (ngSubmit)="submit()">' +
  '  <p>' +
  '    <mat-form-field class="full-width">' +
  '      <input type="text" name="placeholder" ngModel [(ngModel)]="placeholder" matInput placeholder="placeholder" required>' +
  '    </mat-form-field>' +
  '  </p>' +
  '  <p>' +
  '      <mat-checkbox color="primary" style="margin-left: 9px;" name="required" ngModel [(ngModel)]="required">Required</mat-checkbox>' +
  '  </p>' +
  '  <button mat-raised-button color="primary" type="button"' +
  '(click)="submit(form)"' +
  '          class="submit-button text-floral-white"' +
  '          [disabled]="form.invalid || form.pristine">' +
  '    <mat-icon iconsmall>save</mat-icon>Save' +
  '  </button>' +
  '</form>';
const linkPopupForm = '<form style="padding: 24px;" novalidate #form="ngForm" (ngSubmit)="submit()">' +
  '  <p>' +
  '    <mat-form-field class="full-width">' +
  '      <input type="text" name="placeholder" ngModel [(ngModel)]="placeholder" matInput placeholder="placeholder" required>' +
  '    </mat-form-field>' +
  '  </p>' +
  '  <p>' +
  '      <mat-checkbox color="primary" style="margin-left: 9px;" name="required" ngModel [(ngModel)]="required">Required</mat-checkbox>' +
  '  </p>' +
  '  <button mat-raised-button color="primary" type="button"' +
  '(click)="submit(form)"' +
  '          class="submit-button text-floral-white"' +
  '          [disabled]="form.invalid || form.pristine">' +
  '    <mat-icon iconsmall>save</mat-icon>Save' +
  '  </button>' +
  '</form>';
export const formElementsEditForms = {
  text_input: textInputPopupForm,
  text_area: textAreaPopupForm,
  check_box: checkboxPopupForm,
  radio_button: radioPopupForm,
  drop_down: dropDownPopupForm,
  date_range: datePopupForm,
  file: filePopupForm,
  location_input: locationPopupForm,
  insert_link: linkPopupForm
};
