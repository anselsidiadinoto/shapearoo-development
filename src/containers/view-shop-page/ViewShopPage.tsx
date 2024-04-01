import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { SearchBar } from "@/components/search_bar/SearchBar";
import { ShopDetails } from "@/components/shop_details/ShopDetails";

export function ViewShopPage(){
  return(
    <div>
      <div className="main_container h-[1000px]">
        <div>
          <Header />
          <SearchBar />
          <ShopDetails />
        </div>
      </div>
      <Footer />
    </div>
  )
};