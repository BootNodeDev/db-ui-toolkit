import React from 'react'
import { createRoot } from 'react-dom/client'
import { Wrapper, InnerContainer } from './index'

const App = () => (
  <Wrapper>
    <InnerContainer style={{ border: '2px solid red' }} className="custom-inner">
      <p>Hola mundo</p>
    </InnerContainer>
  </Wrapper>
)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
