import { DesignItems } from "@/components/design_items/DesignItems";
import { DesignerDetails } from "@/components/designer_details/DesignerDetails";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { SearchBar } from "@/components/search_bar/SearchBar";

export function ViewDesignerPage(){
  return (
    <div>
      <div className="main_container h-[1000px]">
        <Header />
        <SearchBar />
        <DesignerDetails />
        <div className="mt-5">
          <div>Designs</div>
          <div className="w-full mt-6 flex flex-wrap gap-4 content-start ">
            <DesignItems />          
            <DesignItems />          
            <DesignItems />          
            <DesignItems />          
          </div> 
        </div>
      </div>
      <Footer />
    </div>
  )
};