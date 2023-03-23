import { Container } from "./style"
import axios from "axios"
import { useQuery } from "react-query";
import { InputSearch } from "../../components/InputSearch";
import { ImSpinner2 } from "react-icons/im";
import { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export function App() {
  const [offsetPage, setOffsetPage] = useState(0);
  const [limitCharacterPage, setLimitCharacterPage] = useState(20);
  
  const API = `https://gateway.marvel.com/v1/public/characters?limit=${limitCharacterPage}&offset=${offsetPage}&ts=1&apikey=8e7fb05ab6b828a15d90074ae8106e06&hash=203f8e9960ae6528a06db554ddafcbff`;

  function nextPage(data) {
    if (data) {
      setOffsetPage(previousState => Math.min((previousState + limitCharacterPage), data.data.total - limitCharacterPage));
    }
  }
  
  function previousPage() {
    setOffsetPage(previousState => Math.max((previousState - limitCharacterPage), 0));
  }
  
  const {data, isLoading, error} = useQuery(
    ["characters", limitCharacterPage, offsetPage], () => {
    return (
      axios.get(API)
        .then((res) => res.data)
        .catch((error) => console.error(error))
      )
    }, {
      retry: 5
    }
  );
 
  if (error) return <p>ALgo deu errado!</p>

  return (
    <Container className="element">     
      <header>
        <img src="logo-mavel-header.jpg" alt="" className="logoMarvelHeader"/>
      </header>

      <main>
        <h1>Marvel's Characters</h1>
        <InputSearch className="inputSearch"/>

        <section className="navigatePage">
          <button>
            <MdNavigateBefore className="navigateIcon previousIcon" onClick={previousPage}/>
          </button>
          <button>
            <MdNavigateNext className="navigateIcon nextIcon" onClick={() => nextPage(data)}/>
          </button>
        </section>

        {isLoading && 
          <p><ImSpinner2 className="spinner"/></p>  
        }

        <div className="characterCards">
          { data && 
            data.data.results.map((character, index) => {
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
        <img src="logo-mavel-footer.jpg" alt="" className="logoMarvelFooter" />
      </footer>
    </Container>
  )
}
