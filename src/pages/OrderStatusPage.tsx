import { useGetOrders } from "../api/OrderApi"
import OrderStatusDetail from "../components/OrderStatusDetails";
import OrderStatusHeader from "../components/OrderStatusHeader";
import { AspectRatio } from "../components/ui/aspect-ratio";

const OrderStatusPage = () => {
    const {orders, isLoading}= useGetOrders();
    if(isLoading){
        return (
            <div className="flex flex-col items-center justify-center h-[30vh] ">
              <p className="text-2xl font-semibold text-gray-600 mt-4">Loading...</p>
            </div>
          );
    }
    if(!orders || orders.length === 0){
        return (
            <div className="flex flex-col items-center justify-center  ">
              <p className="text-2xl font-semibold text-gray-600 mt-4">No orders found</p>
            </div>
          );
    }

  return (
    <div className="space-y-10">
        {orders.map((order)=>(
            <div className="space-y-10 bg-slate-50 p-10 rounded-md">
                <OrderStatusHeader order={order} />

                <div className="grid gap-10 md:grid-cols-2">
                    <OrderStatusDetail order={order}/>
                    <AspectRatio ratio={16 / 5}>
              <img
                src={order.restaurant.imageUrl}
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
                </div>
            </div>
        ))}
    </div>
  )
}

export default OrderStatusPage