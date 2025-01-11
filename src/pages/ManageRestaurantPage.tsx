import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "../api/MyRestaurantApi"
import ManageRestaurantsForm from "../form/manage-restaurant-form/ManageRestaurantForm";



const ManageRestaurantPage = () => {
    const {createRestaurant, isLoading:isLoadingCreated} = useCreateMyRestaurant();
    const {myRestaurant} = useGetMyRestaurant();
    const {updateRestaurant, isLoading:isLoadingUpdate} = useUpdateMyRestaurant();

    const isEditing = !!myRestaurant;
   
  return (
    <ManageRestaurantsForm  onSave={isEditing ? updateRestaurant : createRestaurant   } isLoading={isLoadingCreated || isLoadingUpdate} restaurant={myRestaurant}/>
  )
}

export default ManageRestaurantPage