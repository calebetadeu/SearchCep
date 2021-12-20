import styled from 'styled-components'

export const ButtonContainer = styled.div` 
 
  display: flex;

  padding: 0 20px;

  button {
    width: 180px;
    height: 4rem;
    border: 0;
    border-radius: 2rem;
    background: #ee2e31;
    color: var(--white);
    font-size: 1.25rem;
    font-weight: bold;

    transition: filter 0.2s;
    &:disabled {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
    }
    &:hover {
      filter: brightness(0.8);
    }
  }



`