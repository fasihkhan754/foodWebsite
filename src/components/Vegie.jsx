
import { useEffect,useState } from "react";
import styled from "styled-components";
import { Splide,SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/skyblue';
import { Link } from "react-router-dom";

function Vegie() {
  
const [vegie,setVegie]=useState([]);

useEffect(()=>{
    getVegie();
},[]);
const getVegie=async ()=>{

    const chck=localStorage.getItem('vegie');
    if(chck){
        setVegie(JSON.parse(chck));
    }else{

    const api=await fetch('https://api.spoonacular.com/recipes/random?apiKey=b8f8bef23c1d46298cd601aa4fcb57f7&number=10&tags=vegetarian');
    const data=await api.json();
    
    localStorage.setItem('vegie',JSON.stringify(data.recipes));
    setVegie(data.recipes);
    console.log(data);
    }

}
  return (
    <div>       
        <Wrap>
            <h3>Vegetarian Items</h3>
            <Splide
            options={{
                perPage:3,
                arrows:false,
                pagination:false,
                drag:'free',
                gap:'5rem'

            }}>
            {vegie.map((recipe)=>{
                return(
                    <SplideSlide key={recipe.id}>
                <Card>
                <Link to={'/recipe/'+recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
                    <Grad/>
                    </Link>
                </Card>
                </SplideSlide>
        );
            })}
            </Splide>
        </Wrap>
       
    </div>
  );
}


const Wrap=styled.div`
margin:4rem 0rem;
`;
const Card=styled.div `min-height:25rem;
border-radius:2rem;
overflow:hidden;
position:relative;

img{
    border-radius:3rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
}
`;

const Grad=styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;


export default Vegie