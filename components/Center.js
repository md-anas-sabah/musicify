import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

function Center() {
  const { data: session } = useSession();

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black text-white space-x-2 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          {/* <img
            className="rounded-full w-10 h-10"
            src={session?.user?.image}
            alt="user"
          />
          <h2>{session?.user?.name}</h2> */}
          <img
            className="rounded-full w-12 h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEl8aFib9z2ek3C3NO49lJWwfg_aORdaYxhA&usqp=CAU"
            alt=""
          />
          <h2>Hello User</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section
        className={`bg-gradient-to-b to-black from-red-500 text-white h-80 flex items-end space-x-7 p-8`}
      >
        {/* <img src="" alt="" /> */}
        <h1>Hello</h1>
      </section>
    </div>
  );
}

export default Center;
