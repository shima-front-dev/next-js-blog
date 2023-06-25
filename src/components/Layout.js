import { Header } from "~/src/components/Header";
import { Container, Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Box style={{ backgroundColor: "#EDF2F7", height: "100vh" }}>
        <Header />
        <Container maxW="container.lg">
          <main>{children}</main>
        </Container>
      </Box>
    </>
  );
}
