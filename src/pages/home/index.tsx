
import { Card } from 'antd'
import Category from '../../components/dashboard/category'
import  Footer  from '../../components/footer/Footer'
import Header from '../../components/header'
 import Slideer from '../../components/modals/slider/Slideer'
import Products from '../../components/dashboard/products'
import PlantSection from '../../components/PlantSection'
import  Section  from '../../components/section'


const Home = () => {
  return (
    <div>




        <Header />
       <Slideer />
       <div className="flex w-[90%] m-auto gap-5 flex-wrap">

       <Category />
       <Card />
       <Products />
       </div>
       <PlantSection />
       <Section />
         <Footer /> 
    </div>
  )
}

export default Home