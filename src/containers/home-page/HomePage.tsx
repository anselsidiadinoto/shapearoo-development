import { DesignItems } from "@/components/design_items/DesignItems";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { SearchBar } from "@/components/search_bar/SearchBar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


export function HomePage(){
  return (
    <div>
      <div className="main_container">
        <Header />
        <SearchBar/>
        <div className="w-full mt-6 flex flex-wrap gap-4 content-start ">
          <DesignItems />          
          <DesignItems />          
          <DesignItems />          
          <DesignItems />          
          <DesignItems /> 
          
          <DesignItems />          
          <DesignItems />          
          <DesignItems />          
          <DesignItems />          
          <DesignItems /> 

          <DesignItems />          
          <DesignItems />          
          <DesignItems />          
          <DesignItems />          
          <DesignItems /> 

          <DesignItems />          
          <DesignItems />          
          <DesignItems /> 
          <DesignItems /> 
          <DesignItems /> 
                
        </div> 
        
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
   
      </div>
      <Footer/>
    </div>
  );
};