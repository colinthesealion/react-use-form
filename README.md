# react-use-form
Custom react hook for HTML forms

# usage
`npm install --save react-use-form react@^16.7.0-alpha.0 react-dom@^16.7.0-alpha.0`

```
import { Form, Input } from 'react-use-form';

const handleSubmit = (values) => {
  if (values.surname === 'Jetson') {
    return values.name === 'George';
  }
  else {
    return true;
  }
};

const isValidSurname = (surname) => {
  return ['Jetson', 'Flinstone', 'Simpson'].findIndex(surname) >= 0;
};

const MyForm = ({ initialValues }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input InputAs="input" name="name" />
      <Input InputAs="input" name="surname" validate={isValidSurname} />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
```
