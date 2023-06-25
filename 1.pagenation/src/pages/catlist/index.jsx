import { useEffect, useState } from "react";
import styled from "styled-components";
import CatListComponent from "../../components/CatListComponent";
import Pagination from "../../components/Pagination";
import CatBreeds from "../../components/CatBreeds";


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

const [breeds, setBreeds] = useState([]);
const [currentBreed, setCurrentBreed] = useState('beng');



useEffect(()=>{
    fetch(`https://api.thecatapi.com/v1/images/search?limit=70&breed_ids=${currentBreed}&order=RAND&api_key=live_azQcADuBx09SzH1CxC1xsjGcXZgl056pvXUSfbA4IMmTe2oG0qmSVWhujRGEADZh`, {method : "GET"})
    .then(res=>res.json())
    .then(res=>{
        setCatImage(res);
    })
}, [currentBreed]);


useEffect(()=>{
    fetch(`https://api.thecatapi.com/v1/breeds`, {method : "GET"})
    .then(res=>res.json())
    .then(res=>{
       setBreeds(res);
    })
}, []);




const [page, setPage] = useState(1);
const limit = 4;
const offset = (page-1)*limit;

const postData = (posts)=>{
    if(posts){
        let result = posts.slice(offset, offset+limit);
        return result;
    }
}


console.log(catImage.length)
  return (
    <CatListContainer>
        <CatListHeader>
            <h1>CATLIST</h1>
            <a href="" onClick={()=>{setToggle(!toggle)}}>
                {toggle ? <p>list view공사중</p> : <p>grid view공사중</p> }
            </a>
        </CatListHeader>


        {breeds.map((breed)=>(
            <CatBreeds key={breed.id} setCurrentBreed={setCurrentBreed} breed={breed}/>   
        ))}
    
        <CarListPhotoWrapper>
            {postData(catImage).map((cat)=>(
                <CatListComponent key={cat.id} cat={cat} currentBreed={currentBreed}/>  
            ))}        
        </CarListPhotoWrapper>
        <Pagination totalPosts={catImage.length} limit={limit} page={page} setPage={setPage}/>
    </CatListContainer>
  )
}

export default CatList