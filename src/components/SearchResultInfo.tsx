import { Link } from "react-router"

type Props ={
    total: number,
    city: string
}

const SearchResultInfo = ({total,city}:Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
        <span> {total} Resturant found in {city}
        <Link to="/" className="text-sm font-semibold underline cursor-pointer text-blue-500 ml-1">Change Location</Link>
        </span>
        

    </div>
  )
}

export default SearchResultInfo