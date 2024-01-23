import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useNavigate } from "react-router-dom";
import { getCookie } from "cookies-next";

function Navbar() {
  const [user, setUser] = useState();

  const getDatauser = async () => {
    const user = (await getCookie("user"))
      ? JSON.parse(getCookie("user"))
      : null;
    setUser(user);
  };
  //   const Pindah_Halaman = useNavigate();

  //   console.log(user);

  //   const handleNavLog = () => {
  //     Pindah_Halaman("./login");
  //   };
  //   const handleNavReg = () => {
  //     Pindah_Halaman("./register");
  //   };
  //   const handleNavUpc = () => {
  //     Pindah_Halaman("./upcoming");
  //   };
  useEffect(() => {
    getDatauser();
  });
  return (
    <>
      <div
        id="navbar"
        className="shadow-md shadow-[#5E50A1] flex items-center justify-between w-full py-[20px] px-[100px]"
      >
        <Link href={"/"}>
          <img src="/images/logo-purple.png" alt="logo"></img>
        </Link>
        <div>
          {user ? (
            <div>
              <img
                alt="profile"
                src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
                className="rounded-full"
                width="50px"
                height="50px"
              ></img>
            </div>
          ) : (
            <div className="flex justify-between gap-[10px] bg-[white] md:gap-[20px]">
              <Link href={"./login"}>
                <button className="hover:scale-[1.03] border-[#5E50A1] border-[2px] px-[15px] text-[black] rounded-xl py-[5px]">
                  Masuk
                </button>
              </Link>
              <Link href={"./register"}>
                <button className="hover:scale-[1.03] bg-[#5E50A1] border-[2px] px-[15px] rounded-xl py-[5px] border-[#5E50A1] text-[white]">
                  Daftar
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* <section id="navbar" className="top-0 bg-[black]">
        <div className="shadow-md shadow-[#5E50A1] flex items-center justify-between w-full py-[20px] px-[100px]">
          <div className="flex bg-[grey] w-[250px] h-[50px]">
            <Link href={"/"}>
              <img
                src="/images/logo-purple.png"
                alt="logo"
                className="absolute md:flex h-[40px] ml-[-80px] md:ml-[0]"
              ></img>
            </Link>
          </div>
          <div className="hidden md:flex">
            {user ? (
              <img
                alt="profile"
                src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
                className="rounded-full"
                width="50px"
                height="50px"
              ></img>
            ) : (
              <div className="flex justify-between gap-[10px] bg-[black] md:gap-[20px]">
                <Link href={"/upcoming"}>
                  <button className="hover:scale-[1.03] border-[#5E50A1] border-[2px] px-[15px] text-[black] rounded-xl py-[5px]">
                    Masuk
                  </button>
                </Link>
                <Link href={"/upcoming"}>
                  <button className="hover:scale-[1.03] bg-[#5E50A1] border-[2px] px-[15px] rounded-xl py-[5px] border-[#5E50A1] text-[white]">
                    register
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className="block md:hidden ml-[180px]">
          <Link href={"/login"}>
                  <button className="hover:scale-[1.03] border-[#5E50A1] border-[2px] px-[15px] text-[black] rounded-xl py-[5px]">
                    Masuk
                  </button>
                </Link>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Navbar;
