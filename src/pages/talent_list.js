import React from "react";
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CardTalent from "@/components/card_talent";
import axios, { all } from "axios";
import { list } from "postcss";
import next from "next";

export default function Talent_list(props) {
  console.log(props);
  const alldata = React.useState(props?.Data.length / 4);
  const data = Math.ceil(parseFloat(alldata));

  const [currentPages, setCurrentPages] = React.useState(
    props?.Data?.slice(0, 4)
  );

  const [pageNumber, setpageNumber] = React.useState(1);

  const handlePagination = (nextPages) => {
    setCurrentPages(props?.Data?.slice(4 * (nextPages - 1), 4 * nextPages));
    setpageNumber(nextPages);

    // console.log(pageNumber)
    // console.log(currentPages)

    // setCurrentPages(nextPages);
    // console.log(currentPages)
    // if (nextPages > 1) {
    //     setCurrentPages(props?.Data?.slice(4 * (nextPages - 1), 4 * nextPages));
    //     setpageNumber(nextPages);
    // } else {
    //     setCurrentPages(props?.Data?.slice(0, 4));
    //     setpageNumber(nextPages);
    // }
    // console.log(pageNumber)
  };
  const getData = async () => {
    const req = await axios.get(
      "https://dummy-peworld.vercel.app/api/dataTalent"
    );
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <section>
        <div className=" px-[100px] py-[30px] bg-[#5E50A1]">
          <h2 className="text-[30px] text-[white]">Top Talent</h2>
        </div>
        <div className="flex justify-between bg-[#F6F7F8]  px-[100px] py-[20px]">
          <input
            placeholder="Search ur talent"
            className="focus:outline-none w-full shadow-lg shadow-qin rounded-xl shadow-md shadow-[#5E50A1] pl-[20px] py-[20px]"
          ></input>
          <div className="ml-[15px] flex gap-[20px]">
            {/* <div className="flex flex-col justify-center ">
              <img
                src="/images/search.png"
                alt="search"
                width="50px"
                className="hover:scale-[1.03] "
              ></img>
            </div> */}
            <div className="flex flex-col justify-center">
              <button className="hover:scale-[1.03] px-[25px] py-[10px] rounded-md bg-[#5E50A1] text-[white]">
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          {currentPages.map((item, key) => (
            <div key={key}>
              <CardTalent
                fullname={item.fullname}
                job={item.job}
                photo={item.photo}
                skill={item.skills}
                location={item.location}
                id={item.id}
              />
            </div>
          ))}
        </div>
        {/* Pagination start */}
        <div className="flex justify-center gap-[10px] mb-[50px]">
          <button className="hover:border-[black] border-2  py-[10px] px-[15px] flex justify-center item-center rounded-md">
            <img src="/images/Back.png"></img>
          </button>
          {[...new Array(data)].map((item, key) => {
            const increment = ++key;

            return (
              <button
                key={increment}
                onClick={() => handlePagination(increment)}
                className={`hover:border-[#5E50A1] border-2  py-[10px] px-[20px] flex justify-center item-center rounded-md ${
                  key === pageNumber
                    ? "bg-[#5E50A1] text-[white]"
                    : "text-[black] bg-[white]"
                }`}
              >
                <span>
                  {increment} <p className="hidden">{item}</p>
                </span>
              </button>
            );
          })}
          <div className="hover:border-[black] border-2  py-[10px] px-[15px] flex justify-center item-center rounded-md">
            <img src="/images/next.png"></img>
          </div>
        </div>
        {/* Pagination end */}
      </section>
      <Footer />
    </>
  );
}

// export async function getServerSideProps() {
//   const req = await axios.get(
//     "https://dummy-peworld.vercel.app/api/dataTalent"
//   );
//   return {
//     props: req.data,
//   };
// }
