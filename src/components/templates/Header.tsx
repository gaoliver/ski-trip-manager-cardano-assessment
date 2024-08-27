import { Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type NavigationButtonProps = {
  to: string;
  children: React.ReactNode;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({ to, children }) => (
  <Button colorScheme="whiteAlpha" variant="outline">
    <Link href={to}>{children}</Link>
  </Button>
);

export const Header = () => {
  return (
    <Flex as="header" bgColor="primary" w="100%" px="lg" py="sm" alignItems="center">
      <Heading as="h1" size="md" color="white" lineHeight={1}>Ski Trip Manager</Heading>
      <ButtonGroup ml="auto">
        <NavigationButton to="/">Home</NavigationButton>
        <NavigationButton to="/about">About</NavigationButton>
      </ButtonGroup>
    </Flex>
  );
}