import React, { createRef, useContext, useState } from 'react';

import FormContext from '../context';

/**
 * A form input that validates and communicates its value to the closest form context.
 *
 * @param {ReactComponent} InputAs a react component class, function or string
 * @param {Function} [validate] a function which takes a value and returns a boolean
 * @param {String} name the name of the input
 * @param {Node|Node[]} [children] the children of the input
 * @param {Object} [props] any additional props to pass to the child InputAs component
 *
 * @returns {ReactDOM} the rendered DOM
 */
const Input = ({ InputAs, validate, name, children, ...props }) => {
  const { setField, getFormValue } = useContext(FormContext);
  const [ value, setValue ] = useState(props.value || getFormValue(name));
  const [ ref ] = useState(createRef());

  const handleChange = (event) => {
    setValue(event.target.value);
    const isValid = validate ? validate(event.target.value) : true;
    setField({
      name,
      ref,
      value: event.target.value,
      isValid,
    });
  };

  return (
    <InputAs {...props} value={value} name={name} onChange={handleChange} ref={ref}>
      {children}
    </InputAs>
  );
};

export default Input;
