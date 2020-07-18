import React, { Fragment } from "react";
import { GitHubIcon } from "../icons/GitHubIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { NetWorks, Foot, Mention } from "../styles/Footer/Footer";

export const Footer = () => {
  return (
    <Fragment>
      <Foot>
        <NetWorks>
          <ul>
            <li>
              <a href="https://github.com/juandurandev" target="_blank">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/juanduranb_/" target="_blank">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/juanduranb/" target="_blank">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/JuanDuranb_" target="_blank">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </NetWorks>

        <Mention>
          <p>
            Developer and Designer
            <br />
            <span> &lt;Juan Duran /&gt;</span>
          </p>
        </Mention>
      </Foot>
    </Fragment>
  );
};
