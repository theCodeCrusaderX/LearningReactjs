import React from "react";
import MultiActionAreaCard from "../Card";
import leetCode from "/assets/leetCode.jpeg"
import coding_club from "/assets/coding_club.jpeg"
import hacktoberfest from "/assets/hacktoberfest.jpeg"
import { useSelector } from "react-redux";

function Achievement() {
  const theme = useSelector((state) => state.themeChanger.value);

  return (
    <div
      className={`flex justify-between flex-wrap m-4 gap-4 mt-10 mb-10 ${
        theme ? "bg-[#1A1A1A]" : "bg-gray-100 "
      } rounded-xl md:p-10 `}
    >
      <div>
      <a
          href="https://www.linkedin.com/posts/thecodecrusaderx_hacktoberfest2024-opensource-learning-activity-7256251757591199744-Ktxj?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
        <MultiActionAreaCard
          img={hacktoberfest}
          name={"hacktoberFest 2024"}
          dis={
            "Hacktoberfest 2024 was an amazing experience! I dove headfirst into the open-source world, contributing to various projects and learning a ton along the way. It was challenging at times, but incredibly rewarding to see my contributions merged and knowing I'm part of something bigger. This experience has fueled my passion for open source and I'm excited to continue contributing in the future."
          }
        />
        </a>
      </div>
      <div>
      <a
          href="https://www.linkedin.com/posts/thecodecrusaderx_my-first-leetcode-badge-activity-7240783085439500290-sYkK?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
        <MultiActionAreaCard
          img={leetCode}
          name={"LeetCode Profile"}
          dis={
            "50+ problems"
          }
        />
        </a>
      </div>
      <div>
      <a
          href="https://www.linkedin.com/posts/thecodecrusaderx_a-great-session-conducted-by-me-and-our-team-activity-7104627407956942848-UdXS?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
        <MultiActionAreaCard
          img={coding_club}
          name={"Coding Club"}
          dis={
            "Managed the Coding Club, coordinating 14+ core members for efficient task delivery."
          }
        />
        </a>
      </div>
    </div>
  );
}

export default Achievement;
