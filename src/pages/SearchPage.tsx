
import {  useNavigate, useParams } from 'react-router'
import { useSearchRestaurants } from '../api/RestaurantApi';

import { useState } from 'react';
import  SearchBar, { SearchForm } from '../components/SearchBar';
import SearchResultCard from '../components/SearchResultCard';
import SearchResultInfo from '../components/SearchResultInfo';
import PaginationSelector from '../components/PaginationSelector';
import CuisineFilter from '../components/CuisineFilter';
import SortOptionDropdown from '../components/SortOptionDropdown';

export type SearchState = {
    searchQuery: string,
    page: number,
    selectedCuisines: string[],
    sortOption: string;
}
const SearchPage = () => {
    const navigate = useNavigate();

    const goToHome = () => {
      navigate('/');
    };
    const {city} = useParams();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [searchState, setSearchState] = useState<SearchState>({
        searchQuery: "",
        page: 1,
        selectedCuisines: [],
        sortOption: "bestMatch",
       
      });
    const {results, isLoading} = useSearchRestaurants(searchState,city);

    const setSelectedCuisines = (selectedCuisines: string[]) => {
        setSearchState((prevState) => ({
          ...prevState,
          selectedCuisines,
          page: 1,
        }));
      };

    const handleSearchQuery = (searchFormData:SearchForm)=>{
        setSearchState((prevState)=>({
            ...prevState,
            searchQuery: searchFormData.searchQuery,
            page: 1

        }))


    }
    const resetSearch =()=>{
        setSearchState((prevState)=>({
            ...prevState,
            searchQuery: "",
            page: 1

        }))
    }

    const setPageChange = (page:number)=>{
        setSearchState((prevState)=>({
            ...prevState,
            page

        }))

    }

    const setSortOption = (sortOption: string) => {
        setSearchState((prevState) => ({
          ...prevState,
          sortOption,
          page: 1,
        }));
      };

    if(isLoading){
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] ">
              
              <p className="text-2xl font-semibold text-gray-600 mt-4">Loading...</p>
              
            </div>
          );
    }



    if(!results?.data || !city){
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] ">
              <h1 className="text-4xl font-bold text-gray-800">404</h1>
              <p className="text-2xl font-semibold text-gray-600 mt-4">Ooops!!</p>
              <p className="text-lg text-gray-500 mt-2">NO RESULTS FOUND.</p>
              <button
                onClick={goToHome}
                className="mt-8 px-6 py-3 text-white bg-orange-500 rounded  focus:outline-none   "
              >
                Go Back to Home
              </button>
            </div>
          );
    }


  return (
    <div className='grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5'>
        <div id='cuisines-list'>
        <CuisineFilter
        isExpanded={isExpanded}
          selectedCuisines={searchState.selectedCuisines}
          onChange={setSelectedCuisines}
          onExpandedClick={()=>setIsExpanded(!isExpanded)}
          
        /></div>

        <div id='main-content' className="flex flex-col gap-5">
            <SearchBar searchQuery={searchState.searchQuery}   onSubmit={handleSearchQuery} placeHolder='Search by Cuisine or Restaurant Name' onReset={resetSearch}/>
            <div className='flex justify-between flex-col gap-3 lg:flex-row'>
            <SearchResultInfo total={results.pagination.total} city={city} />
            <SortOptionDropdown sortOption={searchState.sortOption} onChange={(value)=>setSortOption(value)} />
            </div>
            {results.data.map((restaurant)=>(
                <SearchResultCard key={restaurant._id} restaurant={restaurant}/>
            ))}
            <PaginationSelector
            page={results.pagination.page}
            pages={results.pagination.pages}
            onPageChange={setPageChange}
            />
        </div>

   
        </div>
  )
}

export default SearchPage