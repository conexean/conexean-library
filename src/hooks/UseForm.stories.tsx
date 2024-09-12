import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from '../hooks/useForm';
import Input from '../components/Input/Input';

export default {
    title: 'Hooks/useForm',
    parameters: {
      docs: {
        description: {
          component: `
            \`useForm\` is a custom React hook for managing form state, including validation and submission.
            It provides a simple and flexible way to handle form inputs, validations, and submissions in React applications.
          `,
        },
      },
    },
  } as Meta;

// Mock submit button component
const SubmitButton: React.FC<{ isSubmitting: boolean }> = ({ isSubmitting }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
  >
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </button>
);

const UseFormExample: React.FC = () => {
  const { formData, errors, isSubmitting, handleChange, validateForm, setSubmitting } = useForm({
    name: {
      initialValue: "",
      validations: [
        (value: string) => value.length > 0 || "Name is required",
        (value: string) => value.length >= 3 || "Name must be at least 3 characters long",
      ],
    },
    email: {
      initialValue: "",
      validations: [
        (value: string) => value.length > 0 || "Email is required",
        (value: string) => value.includes('@') || "Invalid email address",
      ],
    },
    phone: {
      initialValue: "",
      validations: [
        (value: string) => /^\d{10}$/.test(value) || "Phone must be 10 digits",
      ],
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitting(true);
      console.log("Form is valid. Submitting:", formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form submitted successfully!");
      setSubmitting(false);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-6">
      <Input
        name="name"
        id="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        errors={errors.name}
      />
      <Input
        name="email"
        id="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        errors={errors.email}
      />
      <Input
        name="phone"
        id="phone"
        label="Phone"
        value={formData.phone}
        onChange={handleChange}
        errors={errors.phone}
        mask="(###) ###-####"
      />
      <div className="flex justify-end">
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};

export const CompleteFormExample: StoryFn = () => <UseFormExample />;

CompleteFormExample.parameters = {
  docs: {
    source: {
      code: `
import React from 'react';
import { useForm } from './path-to-your-library/hooks/useForm';
import Input from './path-to-your-library/components/Input/Input';

const YourFormComponent: React.FC = () => {
  const { formData, errors, isSubmitting, handleChange, validateForm, setSubmitting } = useForm({
    name: {
      initialValue: "",
      validations: [
        (value: string) => value.length > 0 || "Name is required",
        (value: string) => value.length >= 3 || "Name must be at least 3 characters long",
      ],
    },
    email: {
      initialValue: "",
      validations: [
        (value: string) => value.length > 0 || "Email is required",
        (value: string) => value.includes('@') || "Invalid email address",
      ],
    },
    phone: {
      initialValue: "",
      validations: [
        (value: string) => /^\d{10}$/.test(value) || "Phone must be 10 digits",
      ],
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitting(true);
      // Your form submission logic here
      await submitFormData(formData);
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-6">
      <Input
        name="name"
        id="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        errors={errors.name}
      />
      <Input
        name="email"
        id="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        errors={errors.email}
      />
      <Input
        name="phone"
        id="phone"
        label="Phone"
        value={formData.phone}
        onChange={handleChange}
        errors={errors.phone}
        mask="(###) ###-####"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default YourFormComponent;
      `,
    },
  },
};

export const Documentation: StoryFn = () => (
  <div className="prose max-w-none">
    <h2>Using the useForm Hook</h2>
    <p>The <code>useForm</code> hook provides a complete solution for form state management, including validation and submission handling. Here's how to use it:</p>
    
    <h3>1. Import the hook and components</h3>
    <pre><code>{`
import { useForm } from './path-to-your-library/hooks/useForm';
import Input from './path-to-your-library/components/Input/Input';
    `}</code></pre>
    
    <h3>2. Initialize the hook</h3>
    <p>Call <code>useForm</code> with a configuration object that defines your form fields:</p>
    <pre><code>{`
const { formData, errors, isSubmitting, handleChange, validateForm, setSubmitting } = useForm({
  fieldName: {
    initialValue: "",
    validations: [
      (value) => value.length > 0 || "Field is required",
      // Add more validation rules as needed
    ],
  },
  // Add more fields as needed
});
    `}</code></pre>
    
    <h3>3. Create your form JSX</h3>
    <p>Use the <code>Input</code> component and the values from <code>useForm</code> to create your form:</p>
    <pre><code>{`
<form onSubmit={handleSubmit}>
  <Input
    name="fieldName"
    id="fieldName"
    label="Field Label"
    value={formData.fieldName}
    onChange={handleChange}
    errors={errors.fieldName}
  />
  {/* Add more fields as needed */}
  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </button>
</form>
    `}</code></pre>
    
    <h3>4. Handle form submission</h3>
    <p>Create a submit handler that uses <code>validateForm</code> and <code>setSubmitting</code>:</p>
    <pre><code>{`
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (validateForm()) {
    setSubmitting(true);
    // Your form submission logic here
    await submitFormData(formData);
    setSubmitting(false);
  }
};
    `}</code></pre>
    
    <h3>Hook Return Values</h3>
    <ul>
      <li><strong>formData:</strong> An object containing the current values of all form fields.</li>
      <li><strong>errors:</strong> An object containing any validation errors for the form fields.</li>
      <li><strong>isSubmitting:</strong> A boolean indicating whether the form is currently being submitted.</li>
      <li><strong>handleChange:</strong> A function to handle changes to form inputs.</li>
      <li><strong>validateForm:</strong> A function to validate all form fields at once, typically used on form submission.</li>
      <li><strong>setSubmitting:</strong> A function to update the submitting state of the form.</li>
    </ul>
  </div>
);