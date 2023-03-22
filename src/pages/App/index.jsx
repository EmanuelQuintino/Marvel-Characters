import { Container } from "./style"
import axios from "axios"
import { useQuery } from "react-query";

const API = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8e7fb05ab6b828a15d90074ae8106e06&hash=203f8e9960ae6528a06db554ddafcbff"

export function App() {
  const {data, isLoading, error} = useQuery(
    "characters", () => {
    return (
      axios.get(API)
        .then((res) => res.data)
        .catch((error) => console.error(error))
      )
    }, {
      retry: 5
    }
  );

  
  if (isLoading) return <p className="loading">Carregando...</p>
  if (error) return <p>ALgo deu errado!</p>
  const characters = data.data.results;
  console.log(characters[10]);
  return (
    <Container>
      <h1>Home</h1>
      { characters && 
        characters.map((character, index) => {
          return (
            <div className="characterCard" key={index}>
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt=""/>
              <p>{character.name}</p>
              <p>About</p>
            </div>
          )
        })
      }
    </Container>
  )
}
