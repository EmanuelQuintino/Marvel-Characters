import { Container } from "./style"
import { BsSearch } from "react-icons/bs";

export function InputSearch() {
  return (
    <Container>
      <div className="inputSection">
        <form>
            <input
                id="inputSearchStudent" 
                type="text"
                placeholder=" " 
                // onChange={(event) => setSearchStudent(event.target.value)}
            />
            <label htmlFor="inputSearchStudent" className="labelInputSearch">Buscar aluno</label>
            <BsSearch className="searchIcon"/>
        </form>
      </div>
    </Container>
  )
}