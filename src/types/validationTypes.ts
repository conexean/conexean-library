export type ValidationRule<T> = (value: T) => string | true;

export type FieldValidation<T> = {
  [K in keyof T]: ValidationRule<T[K]>[];
};

export type ValidationErrors<T> = {
  [K in keyof T]?: string;
};

export type FieldConfig<T> = {
  name: string;
  label: string;
  initialValue: T;
  validations: ValidationRule<T>[];
};

export type FormFieldConfig = 
  | FieldConfig<string>
  | FieldConfig<string[]>;

export type FormConfig = FormFieldConfig[];