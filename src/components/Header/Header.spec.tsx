import { render } from '@testing-library/react';
import { Header } from '../Header';

describe('Header component',()=>{
    it('renders correctly',()=>{
        const {getByText}=render(
            <Header/>
        )
        expect(getByText('BuscadorCep!'))
    })
})