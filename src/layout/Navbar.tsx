import React from "react";
import Link from "next/link";
import { Button } from "@mantine/core";
import styled from "styled-components";
import { JSONCrackLogo } from "./JsonCrackLogo";

const StyledNavbarWrapper = styled.div`
  z-index: 3;
  transition: background 0.2s ease-in-out;
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  background: white;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media only screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  white-space: nowrap;
`;

const Center = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Navbar = () => {
  return (
    <StyledNavbarWrapper className="navbar">
      <StyledNavbar>
        <Left>
          <JSONCrackLogo fontSize="1.2rem" />
        </Left>
        <Center>
          <Button
            component={Link}
            prefetch={false}
            href="/#pricing"
            variant="subtle"
            color="dark"
            size="md"
            radius="md"
          >
            Pricing
          </Button>
          <Button
            component="a"
            href="https://marketplace.visualstudio.com/items?itemName=AykutSarac.jsoncrack-vscode"
            target="_blank"
            variant="subtle"
            color="dark"
            size="md"
            radius="md"
          >
            VS Code
          </Button>
          <Button
            component="a"
            href="https://github.com/AykutSarac/jsoncrack.com"
            target="_blank"
            variant="subtle"
            color="dark"
            size="md"
            radius="md"
          >
            Open Source
          </Button>
        </Center>
        <Right>
          <Button
            variant="subtle"
            color="dark"
            component="a"
            href="https://app.jsoncrack.com/sign-in"
            visibleFrom="sm"
            size="md"
            radius="md"
          >
            Log in
          </Button>
          <Button
            radius="md"
            component="a"
            color="#202842"
            href="/editor"
            visibleFrom="sm"
            size="md"
          >
            Free editor
          </Button>
        </Right>
      </StyledNavbar>
    </StyledNavbarWrapper>
  );
};
