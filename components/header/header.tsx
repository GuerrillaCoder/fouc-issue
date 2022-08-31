import * as React from "react";
import styled from "styled-components";
import {
  ThemePropsOptional,
  ThemePropsRequired,
  ThemeSettings,
  useTheme,
} from "../../contexts/theme-context";
import Image from "next/image";
// import logo from "../../public/images/common/logo.svg";
import menuIcon from "../../public/images/common/menu-60.svg";
import { MobileMenu } from "./mobile-menu";
import { DesktopMenu } from "./desktop-menu";
import Link from "next/link";

const HeaderWrapper = styled.div<ThemePropsRequired>`
  display: flex;
  background-color: ${(props) => props.theme.darkBg};
  padding: 10px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
  }
`;

const LogoWrapper = styled.div`
  width: 100px;
`;

const MobileMenuWrapper = styled.div<ThemePropsRequired>`
  background-color: ${(props) => props.theme.lightBg};
  border-radius: 8px;
  display: flex;
  position: relative;
  padding: 3px;
  width: 60px;
  height: 50px;
`;

const SiteHeader = styled.header<ThemePropsRequired>`
  max-width: ${(props: ThemePropsRequired) => props.theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

export const Header = () => {
  const { currentTheme } = useTheme();

  return (
    <HeaderWrapper theme={currentTheme}>
      <SiteHeader theme={currentTheme}>
        <LogoWrapper>

        </LogoWrapper>
        <DesktopMenu></DesktopMenu>
      </SiteHeader>
    </HeaderWrapper>
  );
};
