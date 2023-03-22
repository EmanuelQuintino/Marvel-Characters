import { Container } from "./style"
import { BsSearch } from "react-icons/bs";

export function InputSearch() {
  return (
    <Container>
      <div className="inputSection">
        <form>
            <input
                id="inputSearchCharacter" 
                type="text"
                placeholder=" " 
                // onChange={(event) => setSearchStudent(event.target.value)}
            />
            <label htmlFor="inputSearchCharacter" className="labelInputSearch">Search Character</label>
            <BsSearch className="searchIcon"/>
        </form>
      </div>
    </Container>
  )
}