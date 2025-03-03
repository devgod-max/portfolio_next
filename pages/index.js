import dynamic from "next/dynamic";
import Script from "next/script";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
//import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
import siteMetadata from "../src/utils/siteMetaData";

const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);

const bio = `<p>
👋 <strong>I&apos;m Cristiano</strong>, a Dynamic and detail-oriented Senior Full Stack Engineer with over <strong>10</strong> years of experience in designing, developing, and deploying web applications. Proficient in both front-end and back-end technologies with a passion for building scalable and efficient solutions. Expertise in JavaScript, TypeScript frameworks, cloud technologies, and DevOps practices. A collaborative team player with strong problem-solving skills and a commitment to delivering high-quality software.
</p>`;

const services = [
  {
    icon: "fa fa-code",
    title: "Language",
    desc: "Node, Python, .Net, Ruby on Rails, Java, React, Next.js, Vue, Angular, Express.js, Nest, Django, Flask, Spring Boot, Preact, Svelte",
  },
  {
    icon: "fa-brands fa-google",
    title: "Engine",
    desc: "Node.js, CPython, .NET Core, JVM",
  },
  {
    icon: "fa-brands fa-react",
    title: "Principle",
    desc: "DRY, KISS, TDD, SOLID",
  },
  {
    icon: "fa-solid fa-calendar",
    title: "DevOps",
    desc: "Git, Jenkins, Chef, Jira, Docker, AWS, Azure, Jest",
  },
];

const animationText = [
  "Frontend Developer",
  "Blogger",
  "Freelancer",
  "Graphic Designer",
];

const Index3 = () => {
  return (
    <Layout bg={"gradient"}>
      <Header noSideBarBtn animationText={animationText} />
      <Home>
        <Script src="https://kit.fontawesome.com/29b275fb0c.js"></Script>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/mine.png)" }}
          />
          {/* profile titles */}
          <div className="title">Cristiano Silva</div>

          <TypingAnimation data={animationText} />
          {/* profile socials */}
          <div className="social">
            <a target="_blank" rel="noreferrer" href={siteMetadata.github}>
              <span className="fa fa-github" />
            </a>
            <a target="_blank" rel="noreferrer" href={siteMetadata.linkedin}>
              <span className="fa fa-linkedin" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a
              target="_blank"
              rel="noreferrer"
              href=""
              className="lnk"
            >
              <span className="text">Download resume</span>
              <span className="ion ion-android-download" />
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services serviceList={services} />
          {/* <Testimonials /> */}
          {/* <FunFact /> */}
          {/* <Clients /> */}
        </About>
        <Resume>
          <ResumeSection />
          {/* <Quote /> */}
          {/* <Skills /> */}
          {/* <Testimonials /> */}
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index3;
