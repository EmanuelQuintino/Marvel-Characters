import { Container } from "./style"
import { BsSearch } from "react-icons/bs";

export function InputSearch({setCharacterName}) {

  function handleSubmit(event) {
    event.preventDefault();
    setCharacterName(event.target.name.value);
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
            />
            <label htmlFor="inputSearchCharacter" className="labelInputSearch">Search Character</label>
            <BsSearch className="searchIcon"/>
        </form>
      </div>
    </Container>
  )
}