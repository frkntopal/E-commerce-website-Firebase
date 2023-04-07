import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";
import SliderContainer from "../../components/slider/slider.component";
import Footer from "../../components/footer/footer.component";
import DiscountContainer from "../../components/discount-container/discount.component";


function Home() {
    const categories = [
      {
        id: 1,
        title: "Puma",
        imageUrl: "https://images.pexels.com/photos/14433229/pexels-photo-14433229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 2,
        title: "Nike",
        imageUrl: "https://images.unsplash.com/photo-1611417833111-284ac6508488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: 3,
        title: "Adidas",
        imageUrl: "https://images.pexels.com/photos/15759591/pexels-photo-15759591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 4,
        title: "Womens",
        imageUrl: "https://images.pexels.com/photos/4862429/pexels-photo-4862429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 5,
        title: "Mens",
        imageUrl: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ];
    return (
    <div>
      <Outlet/>
      <Directory categories={categories} />
      <SliderContainer />
      <DiscountContainer/>
      <Footer/>
    </div>
    );
  }

  export default Home;