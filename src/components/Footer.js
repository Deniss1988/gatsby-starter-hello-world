import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="icon-wrap flex row">
        <a href="https://www.linkedin.com/in/deniss-mijusovs-11514290/">
          <div className="flex icon" id="icon-2">
            <i className="mdi mdi-linkedin"></i>
          </div>
        </a>
        <a href="https://www.facebook.com/denis.miyusov/">
          <div className="flex icon" id="icon-3">
            <i className="mdi mdi-facebook"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/deniscj1988/">
          <div className="flex icon" id="icon-4">
            <i className="mdi mdi-instagram"></i>
          </div>
        </a>
      </div>
      <p>Copyright &copy; 2023 - Deniss Mijusovs</p>
    </footer>
  );
}
