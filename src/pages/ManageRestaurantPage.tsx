import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "../api/MyRestaurantApi";
import OrderItemCard from "../components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import ManageRestaurantsForm from "../form/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isLoadingCreated } =
    useCreateMyRestaurant();
  const { myRestaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isLoadingUpdate } =
    useUpdateMyRestaurant();
  const {orders}= useGetMyRestaurantOrders();
  const isEditing = !!myRestaurant;

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>

      <TabsContent value="orders" className="space-y-5 bg-gray-50 pg-10 rounded-lg">
      <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <ManageRestaurantsForm
          onSave={isEditing? updateRestaurant : createRestaurant}
          isLoading={isLoadingCreated || isLoadingUpdate}
          restaurant={myRestaurant}
        />
      </TabsContent>

    </Tabs>
  
  );
};

export default ManageRestaurantPage;
