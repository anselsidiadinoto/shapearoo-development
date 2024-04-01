import { ItemsSelectionInfo } from "@/components/cart/ItemsSelectionInfo";
import { ReviewItemsTop } from "@/components/cart/ReviewItemsTop";
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
          <div className="flex h-[1000px] flex-col w-4/5 font-light">
            <div className="mb-2">Print Shop Selection</div>
            <ShopSelectionInfo/>
            <div className="mb-2">Review Items</div>
            <ReviewItemsTop/>
            <ItemsSelectionInfo/>
            <ItemsSelectionInfo/>
            <ItemsSelectionInfo/>
          </div>
          <div className="w-1/5">
            <SummaryCard/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};