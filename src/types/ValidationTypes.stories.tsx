import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ValidationRule, FieldValidation, ValidationErrors, FieldConfig, FormFieldConfig, FormConfig } from './validationTypes';

export default {
  title: 'Types/ValidationTypes',
} as Meta;

const ValidationTypesStory: StoryFn = () => {
  // Example usage of ValidationRule
  const exampleValidationRule: ValidationRule<string> = (value: string) => 
    value.length > 5 || 'Value must be longer than 5 characters';

  // Example usage of FieldValidation
  const exampleFieldValidation: FieldValidation<{ name: string; age: number }> = {
    name: [exampleValidationRule],
    age: [(value: number) => value >= 18 || 'Must be 18 or older'],
  };

  // Example usage of ValidationErrors
  const exampleValidationErrors: ValidationErrors<{ name: string; age: number }> = {
    name: 'Name is required',
    age: 'Age must be a number',
  };

  // Example usage of FieldConfig
  const exampleFieldConfig: FieldConfig<string> = {
    name: 'username',
    label: 'Username',
    initialValue: '',
    validations: [exampleValidationRule],
  };

  // Example usage of FormFieldConfig
  const exampleFormFieldConfig: FormFieldConfig = {
    name: 'email',
    label: 'Email',
    initialValue: '',
    validations: [(value: string) => value.includes('@') || 'Invalid email'],
  };

  // Example usage of FormConfig
  const exampleFormConfig: FormConfig = [
    exampleFormFieldConfig,
    {
      name: 'password',
      label: 'Password',
      initialValue: '',
      validations: [(value: string) => value.length >= 8 || 'Password must be at least 8 characters'],
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Validation Types</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">ValidationRule Example:</h3>
          <pre className="bg-gray-100 p-2 rounded">
            {exampleValidationRule('short').toString()}
          </pre>
        </div>
        <div>
          <h3 className="font-semibold">FieldValidation Example:</h3>
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(exampleFieldValidation, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="font-semibold">ValidationErrors Example:</h3>
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(exampleValidationErrors, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="font-semibold">FieldConfig Example:</h3>
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(exampleFieldConfig, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="font-semibold">FormFieldConfig Example:</h3>
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(exampleFormFieldConfig, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="font-semibold">FormConfig Example:</h3>
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(exampleFormConfig, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export const Default = ValidationTypesStory.bind({});