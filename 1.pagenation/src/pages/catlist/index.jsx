import { useEffect, useState } from "react";
import styled from "styled-components";
import CatListComponent from "../../components/CatListComponent";


const CatListContainer = styled.div`
min-height: 100vh;
padding-top: 11em;
padding-bottom: 11em;
width: 100%;
max-width: 100em;
margin-right: auto;
margin-left: auto;
padding: 5em 6em;
`;

const CatListHeader = styled.div`
padding: 5em 0em;
display: flex;
    margin-bottom: 3em;
    padding-bottom: 2em;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-end;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    border-bottom: 2px solid hsla(0, 0%, 93.3%, 0.2);
    h1 {font-family: Rainertrial, sans-serif;
        font-size: 11em;
        line-height: 0.8;
        font-weight: 500;
        text-transform: uppercase;
        margin-top: 0px;
        margin-bottom: 0px;}
    a {
        padding: 0.9em 2.1em;
        border-style: solid;
        border-width: 2px;
        border-color: #eee;
        border-radius: 100vw;
        background-color: #eee;
        color: #070707;
        font-size: 0.9rem;
        font-weight: 700; 
        max-width: 100%;
        display: inline-block;
    }
}
`;

const CarListPhotoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 3em;
    padding-bottom: 2em;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    -webkit-box-align: end;
    align-items: flex-end;
    grid-column-gap: 2em;
    grid-row-gap: 2em;

}
`;

const CatList = () => {
const [toggle, setToggle] = useState(false);
const [catImage, setCatImage] = useState([]);


useEffect(()=>{
    fetch('https://api.thecatapi.com/v1/images/search?limit=50&breed_ids=beng&pages=3&api_key=live_azQcADuBx09SzH1CxC1xsjGcXZgl056pvXUSfbA4IMmTe2oG0qmSVWhujRGEADZh', {method : "GET"})
    .then(res=>res.json())
    .then(res=>{
        console.log(1, res);
        setCatImage(res);
    })
}, []);

  return (
    <CatListContainer>
        <CatListHeader>
            <h1>CATLIST</h1>
            <a href="" onClick={()=>{setToggle(!toggle)}}>
                {toggle ? <p>list view</p> : <p>grid view</p> }
            </a>
        </CatListHeader>
        <CarListPhotoWrapper>
            {catImage.map((cat)=>(
                <CatListComponent key={cat.id} cat={cat}/>  
            ))}
            
                       
        </CarListPhotoWrapper>
    </CatListContainer>
  )
}

export default CatList