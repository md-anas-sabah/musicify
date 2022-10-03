import React from "react";
import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center w-full">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEl8aFib9z2ek3C3NO49lJWwfg_aORdaYxhA&usqp=CAU"
        alt="logo"
        className="w-600 mb-5 rounded-full" 
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#1da2cf] text-white p-5 rounded-lg"
            onClick={() => {
              signIn(provider.id, { callbackUrl: "/" });
            }}
          >
            Login with Musicify
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
