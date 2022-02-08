import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct, TUrlParams } from '../../types';
import Product from '../Product';

const url = 'https://fakestoreapi.com/products'
const many = '?limit=5'

const Products = () => {

    const { id } = useParams<TUrlParams>();

    const [ products, setProducts ] = useState<IProduct[]>([])
    const [ loading, setLoading ] = useState(true);

    useEffect(()=> {
        let active = true;
        console.log(id)
        fetch(id ? `${url}/${id}` : `${url+many}`)
            .then(res=>res.json())
            .then(json=>{
                if(active){
                    if(id) {
                        const arrayRes = []
                        arrayRes.push(json);
                        setProducts(arrayRes)
                    } else {
                        setProducts(json);
                    }
                    setLoading(false);
                }
            })
            .catch(e => console.error(e))
            .finally(()=> setLoading(false));
        
        return ()=> {
            active = false;
        }
    },[id])


    if(loading){
        return <p>loading...</p>
    }

    return (
        <article>

            <h1>Products: {products.length}</h1>
            <section>
                {products.map((prd:IProduct) => (
                    <Product key={prd.id} {...prd}/>
                ))}
            </section>
        
        </article>
    ) 
}

export default Products;
