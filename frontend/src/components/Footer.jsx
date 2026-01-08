import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Post Kusth Seva Ashram sujabad Parao,Varanasi</li>
            <li>rv2477207@gmail.com</li>
            <li>+91 9305686883</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"https://github.com/Rajvish3133"} target="_blank">
                <span>
                  <FaGithub />
                </span>
                <span>GitHub</span>
              </Link>
            </li>
            <li>
              <Link
                to={
                  "https://www.instagram.com/rajvishwakarma3133?igsh=MWR5OGlmeDF4MXdzZQ=="
                }
                target="_blank"
              >
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.youtube.com/@chlo-nit-chale"}
                target="_blank"
              >
                <span>
                  <FaYoutube />
                </span>
                <span>Youtube</span>
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.linkedin.com/in/raj-vishwakarma-277467287/"}
                target="_blank"
              >
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Rajvishwakarma. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
