import { render } from '@testing-library/react'
import Button from '../../components/Button'
import Home from '../index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    
   const button1=<Button>Buscar Endereço</Button>
   const button2=<Button>Buscar Cep</Button>

  expect([button1,button2]).toBeVisible
    
  })
})

