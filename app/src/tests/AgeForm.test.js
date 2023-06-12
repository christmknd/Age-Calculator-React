import { render , fireEvent } from '@testing-library/react';
import AgeForm from '../components/AgeForm';

test('Renders the good informations  when the birthdate 28-01-1994', ()=> {
    const { getByTestId, getByText } = render(<AgeForm />);
    const form = getByTestId('age-form');
    const inputDate = getByTestId('dateNaissance');
    const submitButton = getByText('Calculer');

    const birthDate = '1994-01-28';

    fireEvent.change(inputDate, { target: { value: birthDate } });
    fireEvent.click(submitButton);

    const yearsSinceBirth = getByTestId('yearsSinceBirth');
    const monthsSinceBirth = getByTestId('monthsSinceBirth');
    const daysSinceBirth = getByTestId('daysSinceBirth');

    expect(yearsSinceBirth.textContent.trim()).toBe('29 ans');
    expect(monthsSinceBirth.textContent.trim()).toBe('352 mois sont passés depuis le jour de votre naissance');
    expect(daysSinceBirth.textContent.trim()).toBe('Il s\'est écoulé 10727 jours');
})