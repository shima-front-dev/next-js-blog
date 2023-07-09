import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const JunleTab = () => {
  return (
    <>
      <Tabs size="lg" style={{ margin: "0 0 40px 0" }}>
        <TabList>
          <Tab>プログラミング</Tab>
          <Tab>ガジェット</Tab>
          <Tab>ライフハック</Tab>
        </TabList>
      </Tabs>
    </>
  );
};

export default JunleTab;
