
import Flower from "./Flower";
{/* коллекция, то есть как раз цикл по массиву */}
function FlowersList ({elems}){
    return(
        <ul>
            {elems.map( elem => 
                <li key = {elem.id}>
                     <Flower                         
                        name = {elem.name}
                        url = {elem.url}
                        price = {elem.price}
                        size = {elem.size}
                        count = {elem.count}
                    />
                </li>
                )}
        </ul>
    );
};


export default FlowersList;