import Product from "./Product";

function Products(){

    let products=[
        {id:'1',name:'samsung',price:'50000', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTVCjbO_zHt6Urdc-7YUPD6PJ5kX6qa_oHJrb_oj4HMc1Gb3N-05bL9kBsxU06M_8fYc&usqp=CAU'},
        {id:'2',name:'vivo',price:'20000', url:'https://tiimg.tistatic.com/fp/1/007/898/super-amoled-blue-vivo-v15-memory-size-32gb-display-size-6-39-inch-vivo-mobile-phone-074.jpg'},
        {id:'3',name:'azus',price:'40000', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBStrM8J96qukSkNZqoyg1_r11Y-Ej9u1Hw&usqp=CAU'},
        {id:'4',name:'one plus',price:'45000', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh971GgJ5wCwqM6T7OhIgQDwpwuDLGwf09JA&usqp=CAU'}
    ]



    return(<div className='products'>
        {
    products.map((product)=>{
        return(
            <Product name={product.name} price={product.price} url={product.url} key={product.id} />
        );
    })
    }
    </div>

    )
}

export default Products;
