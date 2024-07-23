'use client'
import Header from "@/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      {/* <Header data={resumeData.main} /> */}
      {/* <About data={resumeData.main} /> */}
      {/* <Resume data={resumeData.resume} /> */}
      {/* <Portfolio data={resumeData.portfolio} /> */}
      {/* <Testimonials data={resumeData.testimonials} /> */}
      {/* <Contact data={resumeData.main} /> */}
      {/* <Footer data={resumeData.main} /> */}
    </div>
  );
}
