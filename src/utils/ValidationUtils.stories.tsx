import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { minLength, maxLength, pattern, required, removeMask, CheckActiveRoute } from './validationUtils';

export default {
  title: 'Utils/ValidationUtils',
  argTypes: {
    input: { control: 'text' },
  },
} as Meta;

const ValidationUtilsStory: StoryFn<{ input: string }> = ({ input }) => {
  const [pathname, setPathname] = useState('/home');
  const [link, setLink] = useState('/');

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Validation Utils</h2>
      <div className="mb-4">
        <label className="block mb-2">Test input:</label>
        <input 
          type="text" 
          value={input} 
          readOnly 
          className="border p-2 rounded"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">minLength(3):</h3>
          <p>{minLength(3, 'Field')(input).toString()}</p>
        </div>
        <div>
          <h3 className="font-semibold">maxLength(10):</h3>
          <p>{maxLength(10, 'Field')(input).toString()}</p>
        </div>
        <div>
          <h3 className="font-semibold">pattern(/^[A-Z]+$/):</h3>
          <p>{pattern(/^[A-Z]+$/, 'Must be uppercase')(input).toString()}</p>
        </div>
        <div>
          <h3 className="font-semibold">required:</h3>
          <p>{required('Field')(input).toString()}</p>
        </div>
        <div>
          <h3 className="font-semibold">removeMask:</h3>
          <p>{removeMask(input)}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold mb-2">CheckActiveRoute:</h3>
        <div className="flex space-x-4 mb-2">
          <input 
            type="text" 
            value={pathname} 
            onChange={(e) => setPathname(e.target.value)}
            placeholder="pathname"
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            value={link} 
            onChange={(e) => setLink(e.target.value)}
            placeholder="link"
            className="border p-2 rounded"
          />
        </div>
        <p>Result: {CheckActiveRoute({ pathname, link }).toString()}</p>
      </div>
    </div>
  );
};

export const Default = ValidationUtilsStory.bind({});
Default.args = {
  input: 'Test Input',
};