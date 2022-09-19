import React from 'react'
import TableData from './TableData'

function ProductsTable({products,search}) {
  return (
      <table>
             <caption>Product List</caption>
          <thead>
              <tr>
                  <th>Serial No.</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>In Stock</th>
              </tr>
          </thead>
          <TableData products={products} search={search} />
    </table>
  )
}

export default ProductsTable