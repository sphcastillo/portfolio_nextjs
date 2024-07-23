import { useEffect, useState } from "react";

function Header() {
    // const useTypewriter = (text: String, speed = 50) => {
    //     const [displayText, setDisplayText] = useState("");

    //     useEffect(() => {
    //         let i = 0;
    //         const typingInterval = setInterval(() => {
    //             if(i < text.length) {
    //                 setDisplayText(prevText => prevText + text.charAt(i));
    //                 i++;
    //             } else {
    //                 clearInterval(typingInterval);
    //             }
    //         }, speed);

    //         return () => {
    //             clearInterval(typingInterval);
    //         }
    //     }, [text, speed]);

    //     return displayText;
    // }

    // const Typewriter = ({ text, speed }) => {
    //     const displayText = useTypewriter(text, speed);
    //     return <span>{displayText}</span>;
    // }

    // export default Typewriter;
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            {/* <Typewriter text=""/> */}
          </h1>
          <h3>
            Based in Huntington Beach. <span>Software Engineer</span>. Experienced in NextJS, Typescript, Node, MongoDB ... - I have the tools to make your vision come true. Let&apos;s chat.
          </h3>
          <hr />
          {/* <ul className="social">{networks}</ul> */}
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}
export default Header;
