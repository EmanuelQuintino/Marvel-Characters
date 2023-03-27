import { Container } from "./style"
import { BsSearch } from "react-icons/bs";

export function InputSearch({setCharacterName, setOffsetPage}) {  
  function handleSubmit(event) {
    event.preventDefault();
    setCharacterName(event.target.name.value);
    setOffsetPage(0);
  }
  
  function handleInput(event) {
    if (event.target.value == "") {
      setCharacterName(event.target.value)
    }
  }

  return (
    <Container>
      <div className="inputSection" onSubmit={handleSubmit}>
        <form>
            <input
                id="inputSearchCharacter" 
                type="text"
                placeholder=" "
                name="name"
                onChange={handleInput} 
            />
            <label htmlFor="inputSearchCharacter" className="labelInputSearch">Search Character</label>
            <button className="searchIcon">
              <BsSearch onClick={handleSubmit}/>
            </button>
        </form>
      </div>
    </Container>
  )
}