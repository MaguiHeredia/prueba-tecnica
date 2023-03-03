import axios from 'axios';
import React, {useState} from 'react';
import '../styles/Search.css'

const Search = ({ setCharacters}) => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = async(e) => {
        e.preventDefault()
        const res = await axios.get (`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
        setCharacters(res.data)

    }
    const handleChange = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }
    return (
        <>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <input type='text' autoComplete='off' placeholder='Busca un personaje' onChange={(e) => {handleChange(e)}} className='input'/>
            <button type='submit' className='button'><img src='https://cdn-icons-png.flaticon.com/512/68/68213.png' className='imagen'></img></button>
        </form>
        </>
    )
}
export default Search