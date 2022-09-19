import React from 'react'

function TableData( { products, search } ) {
    const filteredProducts = products.filter( product => product.name.toUpperCase().includes( search ) );
    const length = filteredProducts.length;
    const myData = filteredProducts.map( element => {
        return (
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.price}</td>
                <td>{element.quantity}</td>
            </tr>
        )
    } )
    const res = length < 1 ? <h1>No data Found</h1> : (
        <tbody>{myData}</tbody>
    )
   
    return (
        <>
            {res} 
        </>
           
  )
}

export default TableData