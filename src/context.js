import { createContext } from 'react';

/**
 * The context for our forms
 */
const FormContext = createContext({
  setField() {},
  getFormValue() {
    return '';
  },
  getFormValues() {
    return {};
  },
  isValid() {
    return true;
  },
});

export default FormContext;
