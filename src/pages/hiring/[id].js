import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import axios from "axios";
import Link from "next/link";
import { getCookie } from "cookies-next";

function Hiring(props) {
  const { Data } = props;

  const token = getCookie("token");

  const [subject, setSubject] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [desk, setDesk] = React.useState("");
  const [successMsg, setSuccessMsg] = React.useState("");
  const [isoading, setisoading] = React.useState(false);

  const handleSend = () => {
    setisoading(true);

    axios
      .post(
        "https://peworld-hiring-web-be.cyclic.app/v1/contact",
        {
          subject: subject,
          description: desk,
          sender: fullname,
          toName: Data?.fullname,
          to: Data?.socmed?.email,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((resullt) => {
        setSuccessMsg("Email success sended to user");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setisoading(false);
      });
  };
  return (
    <>
      <section>
        <p>ini kosongan</p>
      </section>
    </>
  );
}

export async function getServerSideProps({ request, res, params }) {
  const { id } = params;

  const user = getCookie("user", { request, res });
  const token = getCookie("token", { request, res });

  // if (user && token) {
  //     return {
  //       redirect: {
  //         permanent: false,
  //         destination: `/talent-list`,
  //       },
  //     };
  // }

  const req = await axios.get(
    `https://dummy-peworld.vercel.app/api/list-talent?id=${id}`
  );
  return {
    props: req.data,
  };
}

export default Hiring;
