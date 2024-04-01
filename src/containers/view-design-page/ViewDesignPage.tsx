import { DesignDetails } from "@/components/design_items/DesignDetails";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { SearchBar } from "@/components/search_bar/SearchBar";

export function ViewDesignPage(){
  return (
    <div>
      <div className="main_container h-[1000px]">
        <Header />
        <SearchBar />
        <DesignDetails />
      </div>
      <Footer />
    </div>
  )
};