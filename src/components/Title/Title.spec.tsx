import { render, screen } from '@testing-library/react'
import Title from '.'


describe('Home', () => {
  it('renders a heading', () => {
    render(<Title />)
    
    const headerTitle=screen.getByText("BuscadorCep!")

    expect(headerTitle).toBeInTheDocument()
  })
})