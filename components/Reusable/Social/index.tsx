import React from "react";
import Background from "./style";
import Gitbook from "public/Social/gitbook";
import Twitter from "public/Social/twitter";
import Discord from "public/Social/discord";
import Medium from "public/Social/medium";
import GitHub from "public/Social/github";
import Telegram from "public/Social/telegram";

interface SocialProps {}

export const social = [
  {
    img: <Gitbook />,
    link: "https://docs.buffer.finance/",
    name: "GitBook",
  },
  {
    img: <Twitter />,
    link: "https://twitter.com/Buffer_Finance",
    name: "Twitter",
  },
  {
    img: <Discord />,
    link: "https://discord.com/invite/Hj4QF92Kdc",
    name: "Discord",
  },
  {
    img: <Telegram />,
    link: "https://t.me/bufferfinance",
    name: "Telegram",
  },
  {
    img: <Medium />,
    link: "https://buffer-finance.medium.com/",
    name: "Medium",
  },
  {
    img: <GitHub />,
    link: "https://github.com/Buffer-Finance",
    name: "GitHub",
  },
];
const Social: React.FC<SocialProps> = () => {
  console.log(" : ");
  return (
    <Background className="flex items-center">
      <div className="flex items-center footer">
        {social.map((s, index) => (
          <a
            className="flex items-center content-center mar"
            key={index}
            href={s.link}
            target="_blank"
            title={s.name}
          >
            <div className="icon flex items-center content-center">{s.img}</div>
          </a>
        ))}
      </div>
    </Background>
  );
};

export default Social;
