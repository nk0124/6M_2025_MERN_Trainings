import Country from "./component/Country";
import Location from "./component/Location";
import ProductsDetails from "./component/ProductsDetails";


function App() {
   // array of object
   const products=[
    {
      name:"Smartphone",
      price:"10,000",
      description:"Latest model with high-end features"
    },
    {
      name:"Laptop",
      price:"70,000",
      description:"powerful model with high-end features"
    },
    {
      name:"Headphones",
      price:"3000",
      description:" Noise-cancelling over-ear headphones"
    },
   ];
  return (
    <div>
      <h1>Product List</h1>
      {/* pass products array of productsDetails */}
      <ProductsDetails   products={products}  />
      <Location />
      <Country   country="USA"/>
      <Country  country="New Zork"/>

    </div>
      
      
  )

}
export default App;
