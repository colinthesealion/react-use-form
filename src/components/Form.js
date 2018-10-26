import React from 'react';

import FormContext from '../context';
import useForm from '../hooks/useForm';

/**
 * A basic HTML form that uses the context API for client-side validation
 *
 * @param {Node|Node[]} [children] the children of this component
 * @param {Function} [onSubmit] a function which takes the form values and returns whether or not they are valid
 * @param {Object} [props] any additional props to pass to the child form component
 * @returns {ReactDOM} the rendered DOM
 */
const Form = ({ children, onSubmit, ...props }) => {
  const context = useForm();

  const handleSubmit = (event) => {
    if (!context.isValid()) {
      event.preventDefault();
      return;
    }

    if (onSubmit) {
      if (!onSubmit(context.getFormValues())) {
        event.preventDefault();
        return;
      }
    }
  };

  return (
    <FormContext.Provider value={context}>
      <form {...props} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
}

export default Form;
