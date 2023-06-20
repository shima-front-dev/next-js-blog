import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

export const BlogCard = ({ blog }) => {
  console.log(blog);
  return (
    <>
      <Card>
        <CardBody>
          <Image
            src={blog.thumbnail.url}
            alt="サムネイル画像"
            borderRadius="lg"
            style={{ height: "150px", objectFit: "cover", margin: "0 auto" }}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{blog.title}</Heading>
            <Text>This sofa is perfect for modern tropical</Text>
          </Stack>
        </CardBody>
        {/* <Divider /> */}
      </Card>
    </>
  );
};
