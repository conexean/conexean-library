import { ValidationRule } from '../types/validationTypes';

export const minLength = (min: number, fieldName: string): ValidationRule<string> => 
  (value: string) => value.length >= min || `${fieldName} deve ter pelo menos ${min} caracteres`;

export const maxLength = (max: number, fieldName: string): ValidationRule<string> => 
  (value: string) => value.length <= max || `${fieldName} deve ter no máximo ${max} caracteres`;

export const pattern = (regex: RegExp, message: string): ValidationRule<string> => 
  (value: string) => regex.test(value) || message;

export const required = (fieldName: string): ValidationRule<any> => 
  (value: any) => value !== undefined && value !== null && value !== '' || `${fieldName} é obrigatório`;

export const removeMask = (value: string): string => {
  return value.replace(/\D/g, '');
};

interface ICheckActiveRoute {
  pathname: string;
  link: string;
}

export const CheckActiveRoute = ({
  pathname,
  link,
}: ICheckActiveRoute): boolean => {
  if (link === '/') {
    return pathname === link;
  }
  return pathname.includes(link);
};