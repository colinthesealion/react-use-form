import { useState } from 'react';

/**
 * A custom hook to create the form context
 *
 * @param {Object} [initialValues] a mapping from input name to value
 * @returns {ReactContext} the context for the form
 */
const useForm = (initialValues) => {
  // Create the state of the form
  const [ fields, setFields ] = useState(
    initialValues
      ? Object.keys(initialValues).reduce(
        (values, name) => {
          values[name] = {
            value: initialValues[name],
            isValid: true,
          };
          return values;
        },
        {}
      )
      : {}
  );

  // Add or update a field value, ref and validity
  const setField = ({ name, value, ref, isValid=true }) => {
    setFields((prevFields) => {
      return {
        ...prevFields,
        [name]: {
          value,
          ref,
          isValid,
        },
      };
    });
  };

  // Get the value of a specific field
  const getFormValue = (name) => {
    return fields[name] ? fields[name].value : '';
  };

  // Get all field values
  const getFormValues = () => {
    return Object.keys(fields).reduce(
      (values, name) => {
        values[name] = fields[name].value || '';
        return values;
      },
      {}
    );
  };

  // Determine if the form is valid
  const isValid = () => {
    Object.keys(fields).forEach((name) => {
      if (!fields[name].isValid) {
        if (fields[name].ref && fields[name].ref.current) {
          fields[name].ref.current.focus();
        }
        return false;
      }
    });
    return true;
  }

  return {
    setField,
    getFormValue,
    getFormValues,
    isValid,
  };
};

export default useForm;
