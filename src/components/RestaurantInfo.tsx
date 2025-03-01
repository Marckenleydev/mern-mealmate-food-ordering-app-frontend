import { Dot } from "lucide-react"
import { Restaurant } from "../types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

type Props={
    restaurant:Restaurant
}

const RestaurantInfo = ({restaurant}:Props) => {
  return (
    <Card className="border-sla">
        <CardHeader>
            <CardTitle className="text-3xl font-semibold tracking-tight">{restaurant.restaurantName}</CardTitle>
            <CardDescription>
                {restaurant.city},{restaurant.country}
            </CardDescription>
        </CardHeader>
        <CardContent className="flex">
            {restaurant.cuisines.map((cuisine,index)=>(
                <span className="flex">
                    
                   <span>{cuisine}</span> 
                   {index < restaurant.cuisines.length - 1 && <Dot/>}
                    </span>
               
            ))}
        </CardContent>
    </Card>
  )
}

export default RestaurantInfo