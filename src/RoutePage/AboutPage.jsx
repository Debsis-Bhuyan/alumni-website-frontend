import React, { useEffect, useRef, useState } from "react";

import { TopBar } from "../components";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <div className=" lg:px-10 pb-3 2xl:px-40 bg-bgColor lg:rounded-lg overflow-hidden">
        <TopBar />
      </div>
      <div>
        <div className="w-full flex gap-2 text-ascent-3 lg:gap-4 pt-5 pb-10 h-full">
          <div className="p-7 py-5 md:p-6">
            <div className="md:flex gap-4 py-">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-5xl  font-bold py-2">
                  Welcome to this Alumni website
                </h2>
                <p className="py-3 text-base ">
                  This alumni website is an online platform dedicated to
                  connecting and engaging graduates or former students of a
                  <span className="text-xl font-bold">
                    {" "}
                    Veer Surendra ai University of Technology , Burla, Odisha
                  </span>{" "}
                  . This website serves as a virtual hub that facilitates
                  communication, networking, and collaboration among alumni
                  members.
                </p>
                <div>
                  <br />

                  <ul>
                    <li>
                      <span className="font-bold">Alumni Profiles: </span>The
                      core feature of an alumni website is the creation of
                      individual profiles for each person. These profiles often
                      include personal information, professional achievements,
                      and photos.
                    </li>
                    <li>
                      <span className="font-bold">
                        Photo and Memory Sharing:
                      </span>{" "}
                      Alumni can share photos, and Recuriment related notice
                      from their time at the institution, creating an
                      interacting community.
                    </li>
                    <li>
                      <span className="font-bold">News and Updates: </span>{" "}
                      Alumni are kept informed about the latest developments and
                      news related to the educational institution . This can
                      include updates on campus improvements and alumni success
                      stories.
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://keepmeintouch.io/wp-content/uploads/2023/02/blog-intouch-how-to-build-an-alumni-network.jpg"
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="">
              <div className="flex w-full items-center">
                <h2 className="font-bold text-2xl text-slate-800 mb-4">
                  <button className="bg-blue  text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    <Link to="/">Let's Explore</Link>
                  </button>
                </h2>
              </div>
            </div>
            <div>
              <br />
              <p className="py-3 text-base">
                An alumni website plays a crucial role in maintaining and
                nurturing the connections formed during one's educational
                journey. It helps graduates stay engaged with their professional
                relationships, and create a sense of belonging to a larger
                community long after graduation. These websites are an
                invaluable resource for both the alumni and the educational
                institution itself, fostering a sense of pride, loyalty, and
                support among its graduates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
