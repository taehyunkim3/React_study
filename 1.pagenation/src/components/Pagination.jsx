import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
color: white;
background: none;
font-size: 30px;
margin:10px;
`;

const ButtonWrap = styled.div`

`;


const Pagination = ({totalPosts, limit, setPage}) => {
const numPages = Math.ceil(totalPosts/ limit)

console.log('numPAGE :'+numPages)

  return (
    <div>
        {Array.from({length: numPages}).map((_,i) => {
            console.log(i+' : return index')
            return (
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