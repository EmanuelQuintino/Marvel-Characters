import { Container } from "./style"
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

export function InputSearch({setCharacterName}) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCharacterName(name);
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
                value={name}
                onChange={(event) => setName(event.target.value)} 
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