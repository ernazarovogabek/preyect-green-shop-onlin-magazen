//  import  Header  from "../../components/header"
// // import ProducstShop from "../../components/products-shop"


// const Shop = () => {
//   return (
//   <>
//     <Header />
//   </>
//   )
// }

// export default Shop











import Header from '../../components/header'
import ProductShop from '../../components/products-shop'


const Shop = () => {
  return (
    <section>
        <Header/>
        <div className="w-[90%] mx-auto">
            <ProductShop/>
        </div>
    </section>
  )
}

export default Shop