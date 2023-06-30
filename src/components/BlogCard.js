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
  Box,
} from "@chakra-ui/react";

export const BlogCard = ({ blog }) => {
  console.log(blog);
  return (
    <>
      <Card className="BlogCardWrapper">
        <CardBody>
          <Image
            src={blog.thumbnail.url}
            alt="サムネイル画像"
            borderRadius="lg"
            style={{ height: "150px", objectFit: "cover", margin: "0 auto" }}
          />
          <Stack mt="6" spacing="3">
            <Heading
              size="md"
              style={{
                fontSize: "20px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {blog.title}
            </Heading>

            <Box
              style={{
                maxWidth: "280px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: "15px",
              }}
            >
              {blog.subTitle}
            </Box>
          </Stack>
        </CardBody>
        {/* <Divider /> */}
      </Card>
    </>
  );
};
