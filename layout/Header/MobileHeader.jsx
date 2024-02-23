import React from "react";
import styles from "./styles.module.scss";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import Logo from "../../public/svg/logo.svg";
import { useRouter } from "next/router";
import { RxCross2 } from "react-icons/rx";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaDesktop,
  FaIndustry,
  FaGlobe,
  FaBook,
  FaBriefcase,
  FaPhoneAlt,
  FaChevronDown,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export const HamburgerNav1 = ({}) => {
  const router = useRouter();
  const [state, setState] = React.useState({
    left: false,
  });
  const data = {
    heading: {
      logo: <Logo />,
      link: "/",
    },
    links: [
      {
        id: 1,
        name: "Home",
        link: "/",
        icon: <FaHome />,
      },
      {
        id: 2,
        name: "About",
        link: "/about_us",
        icon: <FaInfoCircle />,
      },
      {
        id: 3,
        name: "Services",
        link: "/services",
        icon: <FaCogs />,
        subLinks: [
          {
            id: 1,
            name: "IT Service",
            link: "/",
            icon: <FaDesktop />,
          },
          {
            id: 2,
            name: "Industries",
            link: "/",
            icon: <FaIndustry />,
            subLinks: [
              {
                id: 1,
                name: "Platform",
                link: "/",
                icon: <FaGlobe />,
              },
              {
                id: 2,
                name: "NCE Digital Services",
                link: "/",
                icon: <FaIndustry />,
              },
              {
                id: 3,
                name: "NCE Security",
                link: "/",
                icon: <FaIndustry />,
              },
              {
                id: 4,
                name: "Software Solution",
                link: "/",
                icon: <FaIndustry />,
              },
              {
                id: 5,
                name: "Payroll Solution",
                link: "/",
                icon: <FaIndustry />,
              },
            ],
          },
          {
            id: 3,
            name: "Website Design",
            link: "/",
            icon: <FaGlobe />,
          },
          {
            id: 4,
            name: "Device & Assets",
            link: "/",
            icon: <FaDesktop />,
          },
          {
            id: 5,
            name: "Social Media",
            link: "/",
            icon: <FaBook />,
          },
        ],
      },
      {
        id: 4,
        name: "Resources",
        link: "/resources",
        icon: <FaBook />,
      },
      {
        id: 5,
        name: "Career",
        link: "/career",
        icon: <FaBriefcase />,
      },
      {
        id: 6,
        name: "Contact",
        link: "/contact_us",
        icon: <FaPhoneAlt />,
      },
    ],
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={styles.__hamburgerNav}
    >
      <List className={styles.__hamburgerNav__list}>
        {data.links.map((item, index) => {
          if (item.name == "Home") {
            return (
              <ListItem
                key={index}
                className={styles.__hamburgerNav__list__item}
              >
                <div
                  className={styles.__hamburgerNav__list__item__logo}
                  disablePadding
                  sx={{ ":hover": { background: "transparent" } }}
                >
                  <div
                    onClick={() => {
                      toggleDrawer(anchor, false);
                      router.push("/");
                    }}
                  >
                    <Logo />
                  </div>
                  <div
                    onClick={() => {
                      toggleDrawer(anchor, false);
                    }}
                  >
                    <RxCross2 />
                  </div>
                </div>
              </ListItem>
            );
          } else if (item.subLinks) {
            // console.log(item, "item");
            item?.subLinks?.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  disablePadding
                  className={styles.__hamburgerNav__list__item}
                >
                  <ListItemButton
                    className={styles.__hamburgerNav__list__item__button}
                    onClick={() => router.push(item.link)}
                  >
                    <ListItemIcon>{item?.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              );
            });
          } else {
            return (
              <ListItem
                key={index}
                disablePadding
                className={styles.__hamburgerNav__list__item}
              >
                <ListItemButton
                  className={styles.__hamburgerNav__list__item__button}
                  onClick={() => router.push(item.link)}
                >
                  <ListItemIcon>{item?.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          }
        })}
      </List>
      <Divider />
    </Box>
  );
  return (
    <div className={styles.__hamburgerNav__container}>
      {["left"].map((anchor) => (
        <>
          <div className={styles.__hamburgerNav__container__button}>
            <span>
              <Logo />
            </span>

            <button onClick={toggleDrawer(anchor, true)}>
              <RxHamburgerMenu />
            </button>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className={styles.__drawer}
          >
            {list(anchor)}
          </Drawer>
        </>
      ))}
    </div>
  );
};

export const HamburgerNav = ({}) => {
  const router = useRouter();
  const [state, setState] = React.useState({
    left: false,
  });

  const data = {
    heading: {
      logo: <Logo />,
      link: "/",
    },
    links: [
      {
        id: 1,
        name: "Home",
        link: "/",
        icon: <FaHome />,
      },
      {
        id: 2,
        name: "About",
        link: "/about_us",
        icon: <FaInfoCircle />,
      },
      {
        id: 3,
        name: "Services",
        link: "/services",
        icon: <FaCogs />,
        subLinks: [
          {
            id: 1,
            name: "IT Service",
            link: "/",
            icon: <FaDesktop />,
          },
          {
            id: 2,
            name: "Industries",
            link: "/",
            icon: <FaIndustry />,
            subLinks: [
              {
                id: 1,
                name: "Platform",
                link: "/",
                icon: <FaGlobe />,
              },
              {
                id: 2,
                name: "NCE Digital Services",
                link: "/",
                icon: <FaIndustry />,
              },
              {
                id: 3,
                name: "NCE Security",
                link: "/",
                icon: <FaIndustry />,
              },
              {
                id: 4,
                name: "Software Solution",
                link: "/",
                icon: <FaIndustry />,
              },
              {
                id: 5,
                name: "Payroll Solution",
                link: "/",
                icon: <FaIndustry />,
              },
            ],
          },
          {
            id: 3,
            name: "Website Design",
            link: "/",
            icon: <FaGlobe />,
          },
          {
            id: 4,
            name: "Device & Assets",
            link: "/",
            icon: <FaDesktop />,
          },
          {
            id: 5,
            name: "Social Media",
            link: "/",
            icon: <FaBook />,
          },
        ],
      },
      {
        id: 4,
        name: "Resources",
        link: "/resources",
        icon: <FaBook />,
      },
      {
        id: 5,
        name: "Career",
        link: "/career",
        icon: <FaBriefcase />,
      },
      {
        id: 6,
        name: "Contact",
        link: "/contact_us",
        icon: <FaPhoneAlt />,
      },
    ],
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const RecursiveList = ({ items, paddingLeft, anchor }) => ( // Accept anchor as a prop
    <List className={styles.__hamburgerNav__list}>
      {items.map((item, index) => {
        const [open, setOpen] = useState(false); 
        const handleClick = (event) => {
          event.stopPropagation(); // Prevent event propagation to parent elements
          setOpen(!open); // Toggle visibility of sub-menu
        };

        if (item.name === "Home") {
          return (
            <ListItem
              key={index}
              className={styles.__hamburgerNav__list__item}
            >
              <div
                className={styles.__hamburgerNav__list__item__logo}
                sx={{ ":hover": { background: "transparent" } }}
              >
                <div
                  onClick={() => {
                    toggleDrawer(anchor, false);
                    router.push("/");
                  }}
                >
                  <Logo />
                </div>
                <div
                  onClick={() => {
                    toggleDrawer(anchor, false);
                  }}
                >
                  <RxCross2 />
                </div>
              </div>
            </ListItem>
          );
        }
        return (
          <React.Fragment key={index}>
            <ListItem
              key={index}
              disablePadding
              className={styles.__hamburgerNav__list__item}
              style={{ paddingLeft: paddingLeft ? `${paddingLeft}em` : "0px" }}
            >
              <ListItemButton
                className={styles.__hamburgerNav__list__item__button}
                onClick={handleClick} // Toggle sub-menu visibility
              >
                <ListItemIcon className={styles.__hamburgerNav__list__item__button__icon}>
                  {item?.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} className={styles.__hamburgerNav__list__item__button__text} />
                {item.subLinks && <ListItemIcon> <FaChevronDown /> </ListItemIcon>}
              </ListItemButton>
            </ListItem>
            {item.subLinks && open && <RecursiveList items={item.subLinks} paddingLeft={paddingLeft ? paddingLeft + 1 : 1} anchor={anchor} />} 
          </React.Fragment>
        );
      })}
    </List>
  );

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <RecursiveList items={data.links} anchor={anchor} /> {/* Pass anchor as a prop */}
      <Divider   />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor, index) => ( 
        <div key={index} className={styles.__hamburgerNav__container}>
          <div className={styles.__hamburgerNav__container__button}>
            <span>
              <Logo />
            </span>
            <button onClick={toggleDrawer(anchor, true)}>
              <RxHamburgerMenu />
            </button>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className={styles.__drawer}
          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  );
};

const MobileHeader = ({ recursiveLink }) => {
  const router = useRouter();
  return (
    <div className={styles.__mobileHeader}>
      <HamburgerNav recursiveLink={recursiveLink} />
    </div>
  );
};

export default MobileHeader;
