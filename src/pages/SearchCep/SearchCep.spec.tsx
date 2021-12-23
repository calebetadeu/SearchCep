import { fireEvent, render, screen } from '@testing-library/react';
import { UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../../types/Forms';
import SearchCep from '../SearchCep/index';

type testProps={
 register: UseFormRegister<FormInputs>;
}

describe('SearchCep', () => {

  it('renders a heading', () => {
    render(<SearchCep  />)
   
    fireEvent.input(screen.getByLabelText("andress"), {
      target: {
        value: "address"
      }
    });
    
  

    expect(screen.getByLabelText("address")).toBe({...register("address")});
    
  })


})

