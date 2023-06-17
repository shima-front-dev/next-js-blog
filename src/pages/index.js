// import Link from "next/link";
import { client } from "~/libs/client";
import styles from "~/src/styles/Home.module.scss";
import { Link, Flex, Grid, Box, Center } from "@chakra-ui/react";
import { BlogCard } from "~/src/components/BlogCard";

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
      <Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={4}
        >
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Box>
      </Box>
    </div>
  );
}
