/* eslint-disable */
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { showNavbarTradeAtom } from "components/Home/Main";
import { useAtom } from "jotai";
import { useState } from "react";
import BufferDropdown from "../BufferDropdown";
import Gradientbtn from "../Buttons/Gradientbtn";
import { BufferIcon } from "../SVG";
import Background from "./style";
interface INavbar {}

const navlinks = [
  {
    link: "https://app.buffer.finance/",
    name: "Trade",
    subTabs: [],
    isAvailable: true,
  },
  // {
  //   link: `https://app.buffer.finance/#/referral`,
  //   name: "Referral",
  //   subTabs: [],
  //   isAvailable: true,
  // },
  // {
  //   link: `https://app.buffer.finance/#/profile`,
  //   name: "Profile",
  //   subTabs: [],
  //   isAvailable: true,
  // },
  // {
  //   link: `https://app.buffer.finance/#/dashboard`,
  //   name: "Dashboard",
  //   subTabs: [],
  //   isAvailable: true,
  // },
  {
    link: `https://stats.buffer.finance/`,
    name: "Stats",
    subTabs: [],
    isAvailable: true,
  },
  {
    link: `https://optopi.buffer.finance/`,
    name: "Optopi NFT",
    subTabs: [],
    isAvailable: true,
  },
  {
    link: `https://app.buffer.finance/#/leaderboard/daily`,
    name: "Competitions",
    subTabs: [],
    isAvailable: true,
  },
  {
    link: `https://testnet.buffer.finance/`,
    name: "Practice Trading",
    subTabs: [],
    isAvailable: true,
  },
  // {
  //   link: `https://classic.app.buffer.finance/`,
  //   name: "Trade(Classic)",
  //   subTabs: [],
  //   isAvailable: true,
  // },

  {
    link: `https://earn.buffer.finance/`,
    name: "Earn",
    subTabs: [],
    isAvailable: true,
  },
  {
    link: "https://twitter.com/Buffer_Finance",
    name: "Twitter",
    subTabs: [],
    isAvailable: true,
  },
  {
    link: "https://github.com/Buffer-Finance",
    name: "Github",
    subTabs: [],
    isAvailable: true,
  },
  {
    link: "https://docs.buffer.finance/",
    name: "Docs",
    subTabs: [],
    isAvailable: true,
  },
  {
    link: "https://www.youtube.com/@BufferFinance/",
    name: "YouTube",
    subTabs: [],
    isAvailable: true,
  },
  {
    link: "https://discord.com/invite/Hj4QF92Kdc",
    name: "Discord",
    subTabs: [],
    isAvailable: true,
  },
  {
    link: "https://t.me/bufferfinance",
    name: "Telegram",
    subTabs: [],
    isAvailable: true,
  },
  {
    link: "https://mirror.xyz/0xc730FbdFEb3e9dF76008A19962963cA4A2bd8de2",
    name: "Mirror",
    subTabs: [],
    isAvailable: true,
  },
];
const visibleLinks = 6;
const TabButton: React.FC<{ link: string; name: string; isAvailable?: boolean }> = ({
  link,
  name,
  isAvailable = true,
}) => {
  if (isAvailable)
    return (
      <div className={`mxxph sxxpv sf text-3 bold nav-link`}>
        <a href={link} target={`_blank`} className="cursor-pointer hover:!text-1">
          {name}
        </a>
      </div>
    );
  else
    return (
      <div className="flex items-center mxxph sxxpv sf text-3 bold">
        <div className="cursor-default">{name}</div>
        <div className="relative group">
          <img src="/clock.png" alt="clock" className="ml-2" />
          <div className="invisible group-hover:visible absolute -right-8 top-6 w-fit whitespace-nowrap bg-1 py-2 px-4 rounded-[6px]">
            Coming Soon...
          </div>
        </div>
      </div>
    );
};
const Navbar: React.FC<INavbar> = ({}) => {
  const [show, setShow] = useAtom(showNavbarTradeAtom);
  const [open, setOpen] = useState(false);

  return (
    <Background>
      <div className="flex items-center content-sbw nav-background ">
        <div className="flex items-center content-center">
          <div className="flex items-center buffer-logo mf bold pointer">
            <BufferIcon className="buffer-icon" />
            <span className="text-1 sxxxpl"> Buffer </span>
          </div>
          <div className={`nav-links mpl   relative  flex `}>
            {navlinks.slice(0, visibleLinks).map((single) => (
              <TabButton link={single.link} name={single.name} isAvailable={single.isAvailable} key={single.name} />
            ))}
            {navlinks.length > visibleLinks && (
              <>
                {/* <div className="flex items-center mxxph sxxpv text-1 pointer sf text-3 bold nav-link">
                    More
                    <NavbarDropdownIcon className="sxxxmt sml" />
                  </div> */}
                <BufferDropdown
                  items={navlinks.slice(visibleLinks - 1)}
                  initialActive={0}
                  dropdownBox={(activeItem) => (
                    <div className="flex items-center dropdown-value items-c content-sbw sxxpv">
                      <div className="flex items-c">
                        <div className="capitalize sf s-txt bold">More</div>
                      </div>
                      <ArrowDropDownIcon className="arrow" />
                    </div>
                  )}
                  item={(singleItem, handleClose, onChange) => (
                    <div
                      key={singleItem.name}
                      className="new flex items-c py-[6px] pl-5 border-botto"
                      role="button"
                      onClick={() => {
                        onChange({
                          property: "name",
                          item: singleItem,
                        });
                        window.open(singleItem.link, "_blank");
                        handleClose();
                      }}
                    >
                      <div className="capitalize dropdown-item-text s-txt">{singleItem.name}</div>
                    </div>
                  )}
                />
              </>
            )}
            {/* <BufferDropdown
              items={[{}, ...navlinks.slice(4)]}
              initialActive={0}
              dropdownBox={(activeItem) => (
                <div className="flex items-center dropdown-value items-c content-sbw sxxpv">
                  <div className="flex items-c">
                    <div className="capitalize sf s-txt bold">More</div>
                  </div>
                  <ArrowDropDownIcon className="arrow" />
                </div>
              )}
              item={(SingleItem, handleClose, onChange) => (
                <div
                  key={SingleItem.name}
                  className="new flex items-center py-[6px] pl-5 border-botto"
                  role="button"
                  onClick={() => {
                    onChange({
                      property: "name",
                      item: SingleItem,
                    });
                    window.open(SingleItem.link, "_blank");
                    handleClose();
                  }}
                >
                  <div className={SingleItem.name === "Mirror" ? "scale-110 mx-2" : ""}>
                    <SingleItem.Img />
                  </div>
                  <div className="ml-2 capitalize dropdown-item-text s-txt">{SingleItem.name}</div>
                </div>
              )}
            /> */}
          </div>
        </div>
        <div className="flex items-center">
          {/*  <Gradientbtn
            onClick={() => {
              window.open("https://app.buffer.finance/#/leaderboard/weekly", "_blank");
            }}
            class="btn btn-not-rounded "
          >
            <LeaderboardTropy />
            Contest
          </Gradientbtn> */}
          <MenuIcon
            className="hamburger mml"
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
      <Drawer
        anchor={`right`}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        classes={{
          paper: "balck-bg",
        }}
      >
        {/* <CloseIcon
          onClick={() => {
            setOpen(false);
          }}
          className="close-icon"
        /> */}
        <div className="flex items-center justify-center mt-5 mb-6 buffer-logo mf bold pointer">
          <BufferIcon className="buffer-icon" />
          <span className="text-1 sxxxpl"> Buffer </span>
        </div>
        <div className="flex-col content-center">
          {navlinks.map((single) => (
            <div className="text-center mxxph sxxpv pointer nav-link-sidebar sidebar-text">
              <a
                href={single.link}
                target="_blank"
                className="a-link"
                style={{
                  color: "var(--text-1)",
                  textDecoration: "none",
                }}
              >
                {single.name}
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 px-8 bbborderrr">
          {/* {social.map((S) => {
            return (
              <a className="unset" href={S.link} target="_blank">
                <span className="text-2 ">
                  <S.Img />
                </span>
              </a>
            );
          })} */}
        </div>
        {show && (
          <Gradientbtn
            onClick={() => {
              window.open("https://app.buffer.finance", "_blank");
            }}
            class="btn btn-not-rounded mt-6"
          >
            Launch App
          </Gradientbtn>
        )}
      </Drawer>
    </Background>
  );
};

export default Navbar;

import { SVGProps } from "react";

const LeaderboardTropy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    // className="scale-90"
    style={{ transform: "scale(0.75)" }}
    {...props}
  >
    <rect width="25" height="25" fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_2423_33183" transform="translate(0 -0.0344828) scale(0.00195312 0.00208782)" />
      </pattern>
      <image
        id="image0_2423_33183"
        width="512"
        height="512"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
