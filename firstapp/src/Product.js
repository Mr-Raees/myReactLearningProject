import { useState } from 'react';




function Product(props){

    let [isAvailable,setIsAvailable] = useState("yes");

    //function notAvailable(){
    //    setIsAvailable("No");
    //}


    return(
        <section className="product">
            <img className="image" src={props.url}/>
            <h3>{props.name}</h3>
            <p>{props.price}Rs</p>
            <p>{isAvailable}</p>

            <button className='btn' onClick={()=>{setIsAvailable("no")}}> Click</button>
        </section>
    )

}
export default Product;