import { Header } from "~/src/components/Header";
import { Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxW="container.lg">
        <main>{children}</main>
      </Container>
    </>
  );
}
