import Image from "next/image";

const GuestWelcome = () => {
  return (
    <div className="mt-[7rem] flex justify-center items-center">
      <div className="">
        <div className="flex justify-center">
          <Image
            src="/assets/images/hello_img.jpg"
            alt="logo"
            width={300}
            height={300}
          />
        </div>
        <p className="text-2xl font-semibold text-slate-800 mt-3 text-center">
          You are welcome esteemed Jetski staff! Please sign in to access your
          account..!!
        </p>
      </div>
    </div>
  );
};

export default GuestWelcome;
