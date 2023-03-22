import { useState } from 'react'
import { Container } from "./style"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <h1>Home</h1>
    </Container>
  )
}
