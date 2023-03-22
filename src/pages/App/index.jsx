import { useEffect, useState } from 'react'
import { Container } from "./style"
import axios from "axios"

export function App() {
  const [characters, setCharacters] = useState({});

  const API = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8e7fb05ab6b828a15d90074ae8106e06&hash=203f8e9960ae6528a06db554ddafcbff"

  useEffect(() => {
    axios.get(API)
    .then((res) => setCharacters(res.data))
    .catch((error) => console.error(error));
  }, [])

  console.log(characters);

  return (
    <Container>
      <h1>Home</h1>
    </Container>
  )
}
