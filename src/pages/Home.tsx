import landingImg from "../assets/landing.png"
import appDownloadImg from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "../components/SearchBar"
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();


  const handleSearchSubmit = (seachFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${seachFormValues.searchQuery}`

    })
  }


  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-3xl font-bold  text-orange-600">Tuck into a takeway today</h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar placeHolder="Search by City, like Dubai, london" onSubmit={handleSearchSubmit}/>

      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImg}/>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="text-2xl font-bold ">Order takeway even faster!</span>
          <span>Download the MernEats App fro fater ordering and personalised</span>
          <img src={appDownloadImg} />

        </div>
      </div>

    </div>
  )
}

export default Home