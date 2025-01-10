
import UserProfileForm from '../form/user-profile-form/UserProfileForm'
import { useGetMyUser, useUpdateMyUser } from '../api/MyUserApi'

const UserProfilePage = () => {
  const {updateUser, isLoading:isUpdateLoading} = useUpdateMyUser();
  const {currentUser, isLoading:isGetLoading} = useGetMyUser();

  if(isGetLoading) {
    return <div>Loading...</div>
  }
  if(!currentUser){
    return <div>Unable to load user profile</div>  // Show a message to the user when no user is found.
  }
  return (
    <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} currentUser={currentUser} />
  )
}

export default UserProfilePage