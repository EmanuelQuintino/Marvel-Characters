import { Container } from "./style"
import axios from "axios"
import { useQuery } from "react-query";
import { InputSearch } from "../../components/InputSearch";

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
      <img src="https://m.media-amazon.com/images/S/abs-image-upload-na/6/AmazonStores/A1F83G8C2ARO7P/0742df6fb0bfa5eaf657483f504df0e2.w3000.h600.jpg" alt="" className="logoMarvel"/>

      <h1>Marvel's Characters</h1>
      <InputSearch className="inputSearch"/>

      <div className="characterCards">
        { characters && 
          characters.map((character, index) => {
            return (
              <div className="characterCard" key={index}>
                <div className="part1">
                  <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt=""/>
                </div>
                <div className="part2">
                  <h3>{character.name}</h3>
                  <a href="#">About</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </Container>
  )
}
