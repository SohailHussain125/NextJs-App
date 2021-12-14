import styled from "styled-components"

const Search = styled.input`
border:none;
background:#efeff8;
border-radius:10px;
flex:2;
height:35px;
padding:10px;
width:100%
`
interface SearchProps {
    placeholder: string,

}
const SearchBar = ({ placeholder }: SearchProps) =>
    <Search placeholder={placeholder}></Search >

export default SearchBar