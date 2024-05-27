import { useEffect, useRef, useState } from "react";
import { createContext, useContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  {
    /*adding active class to nav links */
  }
  const [activeLink, setActiveLink] = useState("home");
  {
    /*opening and closing drawer */
  }
  const [drawerOpen, setDrawerOpen] = useState(false);

  {
    /**adding automatic active class to links on scroll to specific section */
  }
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    const addActiveOnScroll = () => {
      const homeTop = homeRef.current.offsetTop;
      const homeBottom =
        homeRef.current.offsetTop + homeRef.current.offsetHeight;
      const aboutTop = aboutRef.current.offsetTop;
      const aboutBottom =
        aboutRef.current.offsetTop + aboutRef.current.offsetHeight;
      const servicesTop = servicesRef.current.offsetTop;
      const servicesBottom =
        servicesRef.current.offsetTop + servicesRef.current.offsetHeight;
      const portfolioTop = portfolioRef.current.offsetTop;
      const portfolioBottom =
        portfolioRef.current.offsetTop + portfolioRef.current.offsetHeight;
      const contactTop = contactRef.current.offsetTop;
      const contactBottom =
        contactRef.current.offsetTop + contactRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      if (scrollPosition >= homeTop && scrollPosition < homeBottom) {
        setActiveLink("home");
      } else if (scrollPosition >= aboutTop && scrollPosition < aboutBottom) {
        setActiveLink("about");
      } else if (
        scrollPosition >= servicesTop &&
        scrollPosition < servicesBottom
      ) {
        setActiveLink("services");
      } else if (
        scrollPosition >= portfolioTop &&
        scrollPosition < portfolioBottom
      ) {
        setActiveLink("portfolio");
      } else if (
        scrollPosition >= contactTop &&
        scrollPosition < contactBottom
      ) {
        setActiveLink("contact");
      }
    };
    window.addEventListener("scroll", addActiveOnScroll);
    return () => window.removeEventListener("scroll", addActiveOnScroll);
  }, []);
  {
    /*scrolling to specific section */
  }
  const handleScrollToSection = (sectionRef) => {
    console.log(sectionRef);
    const y = sectionRef.current.offsetTop;
    console.log(y);
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  {
    /*opening drawer */
  }
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  {
    /*closing drawer */
  }
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        activeLink,
        drawerOpen,
        homeRef,
        aboutRef,
        servicesRef,
        portfolioRef,
        contactRef,
        handleScrollToSection,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
