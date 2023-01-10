import { useQuery } from "@tanstack/react-query";
import NewsList from "./components/NewsList";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import SearchForm from "./components/SearchForm";
import { searchNews } from "./api/news.api";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("react");
  const { isLoading, isError, data } = useQuery({
    queryKey: ["news", currentPage, searchTerm],
    queryFn: searchNews,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <div className="container">
      <SearchForm onSubmit={(text) => setSearchTerm(text)} />
      <NewsList news={data.hits} />
      <ReactPaginate
        nextLabel={">>"}
        previousLabel={"<<"}
        breakLabel={"..."}
        forcePage={data.page}
        pageCount={data.nbPages}
        pageRangeDisplayed={5}
        onPageChange={(data) => setCurrentPage(data.selected)}
        activeClassName={"item active "}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        pageClassName={"item pagination-page "}
        previousClassName={"item previous"}
      />
    </div>
  );
}

export default App;
