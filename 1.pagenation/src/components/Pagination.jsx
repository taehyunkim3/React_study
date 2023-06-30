import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Button = styled.button`
margin-top: 0.9em;
padding: 0.6em 1.5em;
border-style: solid;
border-width: 2px;
border-color: hsla(0, 0%, 93.3%, 0.2);
border-radius: 100vw;
background-color: transparent;
color: #eee;
font-size: 0.75rem;
line-height: 1.2;
text-transform: uppercase;
transition: all .2s;
&:hover{
    background-color: white;
    color: black;
}
`;



const Pagination = ({totalPosts, limit, setPage}) => {
const numPages = Math.ceil(totalPosts/ limit)

  return (
    <div>
        {Array.from({length: numPages}).map((_, i) => {
            return (
              // <Link to={`/${i+1}`} key={i}>
              //  <Button>
              //     {i+1}
              //   </Button>  

              // </Link>
                <Button key={i+1} onClick={()=>setPage(i+1)}>
                    {i+1}
                </Button>
            )})
        }
    </div>
  )
}

Pagination.propTypes = {
    totalPosts: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
  };
  

export default Pagination