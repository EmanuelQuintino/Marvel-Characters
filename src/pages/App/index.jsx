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
    <Container className="element">     
      <header>
        <img src="https://m.media-amazon.com/images/S/abs-image-upload-na/6/AmazonStores/A1F83G8C2ARO7P/0742df6fb0bfa5eaf657483f504df0e2.w3000.h600.jpg" alt="" className="logoMarvelHeader"/>
      </header>

      <main>
        <h1>Marvel's Characters</h1>
        <InputSearch className="inputSearch"/>

        <div className="characterCards">
          { characters && 
            characters.map((character, index) => {
              return (
                <a href="#" className="characterCard" key={index}>
                  <div className="part1">
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt=""/>
                  </div>
                  <div className="part2">
                    <h3>{character.name}</h3>
                  </div>
                </a>
              )
            })
          }
        </div>
      </main>

      <footer>
        <img src="https://cdn.shopify.com/s/files/1/0623/8683/1586/collections/27690-marvel-logo-wallpaper-picture_2000x.jpg?v=1642404009" alt="" className="logoMarvelFooter" />
      </footer>
    </Container>
  )
}
