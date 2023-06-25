import PropTypes from 'prop-types'

import styled from 'styled-components'


const Button = styled.button`
margin-top: 0.9em;
padding: 0.6em 1.5em;
border-style: solid;
border-width: 1px;
border-color: hsla(0, 0%, 93.3%, 0.2);
border-radius: 100vw;
background-color: transparent;
color: #eee;
font-size: 0.4rem;
line-height: 1.2;
transition: all .1s;
&:hover{
    background-color: white;
    color: black;
}
`;

const CatBreeds = ({breed, setCurrentBreed}) => {


  return (


                <Button key={breed.id} onClick={()=>setCurrentBreed(breed.id)}>
                    {breed.name}
                </Button>


  )
}


CatBreeds.propTypes = {
    totalBreeds: PropTypes.number.isRequired,
    breed: PropTypes.object.isRequired,
    setCurrentBreed: PropTypes.func.isRequired,
  };
  

export default CatBreeds