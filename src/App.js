import { useState } from 'react';
import './App.css';
import { productData } from './Components/Data';
import ProductsTable from './Components/ProductsTable';
import SearchBar from './Components/SearchBar';

function App() {
  const [data, setData] = useState( productData );
  const [search, setSearch] = useState( "" );
  function handleSearcgChange( e ) {
    setSearch( e.target.value.toUpperCase());
  }
  return (
    <div className="App">
      <SearchBar search={search} handleChange={handleSearcgChange} />
      <ProductsTable id="tables" products={data} search={ search} />
    </div>
  );
}

export default App;
