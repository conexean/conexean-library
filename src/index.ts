// Components
export { default as Input } from './components/Input/Input';
export type { IInput } from './components/Input/Input';

// Hooks
export { useForm } from './hooks/useForm';

// Utilities
export {
  minLength,
  maxLength,
  pattern,
  required,
  removeMask,
  CheckActiveRoute
} from './utils/validationUtils';

// Types
export type {
  ValidationRule,
  FieldValidation,
  ValidationErrors,
  FieldConfig,
  FormFieldConfig,
  FormConfig
} from './types/validationTypes';
