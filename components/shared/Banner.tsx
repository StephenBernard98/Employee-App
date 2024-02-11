import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { mooli } from "@/fonts";
import Image from "next/image";

const Banner = async () => {
  // const { sessionClaims } = auth();
  // const userId = sessionClaims?.userId as string;
  // const user = await getUserById(userId);
  // console.log(user)

  return (
    <main className="mt-[5rem]  max-w-[1000px] mx-auto">
      <section>
        <div className="bg-slate-800 mt-[6rem] px-3 h-[300px] flex items-center justify-between  rounded-full">
          <div className="mx-2 leading-loose ml-4">
            <h1 className={` text-6xl mr-3 text-white font-extrabold  mb-4`}>
              Welcome Back,
            </h1>
            {/* <p className={`text-6xl mr-3 text-white font-extrabold`}>
              {user?.username
                ? `${user.username
                    .charAt(0)
                    .toUpperCase()}${user.username.slice(1)}!`
                : "Guest"}
            </p> */}
          </div>
          <div className="border-[20px] border-white border-r-transparent rounded-full">
            {/* <Image
              src={user.photo}
              alt="user-img"
              width={250}
              height={250}
              className="rounded-full border-[15px] border-slate-800"
            /> */}
            Hello Staff
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
