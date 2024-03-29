import {FaPizzaSlice,FaHamburger} from "react-icons/fa";
import {GiNoodles,GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


function Catagory() {
  return (
    <Listee>
        <Slink to={'./Cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink to={'./Cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={'./Cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink to={'./Cuisine/Japaneese'}>
            <GiChopsticks/>
            <h4>Japaneese</h4>
        </Slink>
    </Listee>
  )
}

const Listee=styled.div`
display:flex;
justify-content:center;
margin:2rem 0rem;
`;
const Slink=styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-right:2rem;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background:linear-gradient(35deg,#494949,#313131);
width:6rem;
height:6rem;
cursor:pointer;
transform:scale(0.8);

h4{
    color:white;
    font-size:0.8rem;
}
svg{
    color:white;
    font-size:1.5rem;
}
&.active{
    background:linear-gradient(to right, #f27121,#e94057);

h4{
    color:white;
    
}
svg{
    color:white;
   
}}
`;

export default Catagory