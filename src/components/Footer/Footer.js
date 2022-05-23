import styled from "@emotion/styled";
import React from "react";
import btnAppstore from "../../assets/images/downloads/btn_appstore.png";
import btnPlaystore from "../../assets/images/downloads/btn_playstore.png";
import logo from "../../assets/images/FD-logo-pink.png";

const OuterContainer = styled.div`
  border-top: 1px solid #e0e0e0;
  width: 100%;
`;
const InnerContainer = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;
const Row1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 30px 0 47px 0;
`;
const LinkList = styled.ul`
  list-style-type: none;

  li > a {
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
    line-height: 2.5;
    padding: 10px 0;
    color: #000;
    text-decoration: none;
  }
`;
const DownloadText = styled.p`
  color: #da254e;
  font-weight: bold;
  margin-bottom: 15px;
`;
const DownloadButtons = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;
const DownloadImg = styled.img`
  max-width: 120px;
`;
const Row2 = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-bottom: 60px;
`;
const FooterLogo = styled.img`
  height: 30px;
  margin-bottom: 10px;
`;
const CopyRightText = styled.p`
  color: rgba(0, 0, 0, 0.5);
`;
const SocmedList = styled.ul`
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;

  li {
    display: flex;
    align-items: center;
  }

  li > button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 40px;
    width: 40px;
    border-radius: 9999px;
  }

  li > button.social-media-icon {
    color: #fff;
  }

  .facebook-background {
    background-color: #3b5998;
  }

  .twitter-background {
    background-color: #1da1f2;
  }

  .instagram-background {
    background-color: #1da1f2;
  }

  .youtube-background {
    background-color: #d42528;
  }

  .social-media-icon {
    color: #fff;
  }
`;
const Footer = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <Row1>
          <LinkList>
            <li>
              <a href="/#">About Us</a>
            </li>
            <li>
              <a href="/#">FeedBack</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </LinkList>
          <LinkList>
            <li>
              <a href="/#">Terms and Conditions</a>
            </li>
            <li>
              <a href="/#">Privacy Policy</a>
            </li>
            <li>
              <a href="/#">Help</a>
            </li>
          </LinkList>
          <LinkList>
            <li>
              <a href="/#">Awards</a>
            </li>
            <li>
              <a href="/#">Newsletter</a>
            </li>
          </LinkList>
          <div>
            <DownloadText>Download Our Mobile App</DownloadText>
            <DownloadButtons>
              <DownloadImg src={btnAppstore} alt="appstore-btn" />
              <DownloadImg src={btnPlaystore} alt="playstore-btn" />
            </DownloadButtons>
          </div>
        </Row1>
        <Row2>
          <div>
            <FooterLogo src={logo} alt="Female Daily Network logo" />
            <CopyRightText>
              Copyright &copy; 2015-2017 Female Daily Network &middot; All
              rights reserved
            </CopyRightText>
          </div>
          <SocmedList>
            <li>
              <button className="facebook-background">
                <i className="fab fa-facebook-f fa-lg social-media-icon"></i>
              </button>
            </li>
            <li>
              <button className="twitter-background">
                <i className="fab fa-twitter fa-lg social-media-icon"></i>
              </button>
            </li>
            <li>
              <button className="instagram-background">
                <i className="fab fa-instagram fa-lg social-media-icon"></i>
              </button>
            </li>
            <li>
              <button className="youtube-background">
                <i className="fab fa-youtube fa-lg social-media-icon"></i>
              </button>
            </li>
          </SocmedList>
        </Row2>
      </InnerContainer>
    </OuterContainer>
  );
};

export default Footer;
