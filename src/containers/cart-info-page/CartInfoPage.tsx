import { ItemsSelectionInfo } from "@/components/cart/ItemsSelectionInfo";
import { ShopSelectionInfo } from "@/components/cart/ShopSelectionInfo";
import { SummaryCard } from "@/components/cart/SummaryCard";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { SearchBar } from "@/components/search_bar/SearchBar";

export function CartInfoPage(){
  return(
    <div>
      <div className="main_container">
        <Header />

        <div className="flex">
          <div className="flex h-[1000px] bg-yellow-50 flex-col w-3/4 font-light">
            <div className="mb-2">Print Shop Selection</div>
            <ShopSelectionInfo/>
            <div className="mb-2">Review Items</div>
            <ItemsSelectionInfo/>
          </div>
          <div className="w-1/4 bg-green-50">
            <SummaryCard/>
          </div>
        </div>


      </div>
      <Footer/>
    </div>
  );
};