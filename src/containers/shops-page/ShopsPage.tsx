import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { SearchBar } from "@/components/search_bar/SearchBar";
import { Shops } from "@/components/shops_browse/Shops";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";



export function ShopsPage() {
  return (
    <div>
      <div className="main_container">
        <Header/>
        <SearchBar />
        <div className="w-[900px] h-[900px] mt-6 mb-0 mx-auto flex flex-wrap content-start gap-4 ">
          <Shops />
          <Shops />
          <Shops />
          <Shops />
          <Shops />
          <Shops />
          <Shops />
          <Shops />
          <Shops />
          <Shops />

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
      <Footer />
    </div>
  )
};