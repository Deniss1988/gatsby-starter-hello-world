import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <section className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
      <div class="icon-wrap flex row">
          <a href="https://www.linkedin.com/in/deniss-mijusovs-11514290/">
            <div class="flex icon" id="icon-2">
              <i class="mdi mdi-linkedin"></i>
            </div>
          </a>
          <a href="https://www.facebook.com/denis.miyusov/">
            <div class="flex icon" id="icon-3">
              <i class="mdi mdi-facebook"></i>
            </div>
          </a>
          <a href="https://www.instagram.com/deniscj1988/">
            <div class="flex icon" id="icon-4">
              <i class="mdi mdi-instagram"></i>
            </div>
          </a>
        </div>
        <p>Copyright &copy; 2023 - Deniss Mijusovs</p>
      </footer>
    </section>
  );
}
