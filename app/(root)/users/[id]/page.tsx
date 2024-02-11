import { getUserById } from "@/lib/actions/user.action"
import { auth } from "@clerk/nextjs";

const UserProfile = async () => {
   const { sessionClaims } = auth();
   const userId = sessionClaims?.userId as string;
   const user = await getUserById(userId);
  return (
    <div className='mt-[7rem]'>
      Hello {user.username}!
    </div>
  )
}

export default UserProfile
