// import Link from "next/link";
import { client } from "~/libs/client";
import styles from "~/src/styles/Home.module.scss";
import { Link, Flex, Grid, Box, Center } from "@chakra-ui/react";
import { BlogCard } from "~/src/components/BlogCard";
import Pagination from "~/src/components/Pagination";
import { useState } from "react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // ページの変更処理を追加する場合はここに記述します
  };

  return (
    // <div className={styles.container}>
    <Box style={{ marginTop: "50px" }}>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={4}
      >
        {blog.map((blog) => (
          <Box key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <BlogCard blog={blog} />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
    // </div>
  );
}
