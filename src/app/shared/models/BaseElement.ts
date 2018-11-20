export interface BaseElement {
  id?: number;
  name?: string;
  type?: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
  value?: any;
  options?: SelectOption[];
  validation?: string;
}

export interface SelectOption {
  label?: string;
  value?: string;
}
