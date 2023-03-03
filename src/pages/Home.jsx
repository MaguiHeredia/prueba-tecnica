import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Card from '../components/Card';
import Search from '../components/Search'
import '../styles/Home.css'

const Home = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        let res = axios.get('https://rickandmortyapi.com/api/character')
        res.then(response => {
            setCharacters(response.data)
        })
    }, [])
     console.log(characters.results)
    return (
        <div className='container'>
        <h1 id='title'>The Rick and Morty API</h1>
        <Search setCharacters={setCharacters}/>
        <div className='container-cards'>
        {characters ? 
        characters.results?.map((elem, index) => {
                return (
                <Card params={elem}></Card>
                )
            })
        : null}
        </div>
        </div>
    )
}
export default Home;