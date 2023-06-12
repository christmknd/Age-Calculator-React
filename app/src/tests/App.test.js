import { render, screen } from '@testing-library/react';
import App from '../App';
import AgeForm from '../components/AgeForm';

test('App.js contains AgeForm', () => {
  const {getByTestId} = render(<App />);
  const childComponent = getByTestId("age-form");
  expect(childComponent).toBeInTheDocument();
});
