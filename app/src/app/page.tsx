"use client";

// Generated with Ion on 2/25/2024, 10:30:23 AM
// Figma Link: https://www.figma.com/file/7wSFefFp54HAeZCAYsugCk?node-id=4001:3530
import { House, Flask } from "@phosphor-icons/react/dist/ssr";
import { Tabs, TabsList, Tab } from "@/components/ion/Tabs";
import { useState } from "react";
import { HomePage } from "./home";
import { ExperimentPage } from "./experiment";

type Tab = "Home" | "Experiment";
function MacBookPro141() {
  const [currTab, setCurrTab] = useState<Tab>("Home");

  return (
    <div className="bg-white w-screen min-h-screen flex-col flex items-center gap-16 px-16 py-10">
      <Tabs defaultValue="Home">
        <TabsList>
          <Tab
            value="Home"
            iconLeading={<House size={16} weight={"fill"} />}
            onClick={() => setCurrTab("Home")}
          >
            Home
          </Tab>
          <Tab
            value="Experiment"
            iconLeading={<Flask size={16} weight={"fill"} />}
            onClick={() => setCurrTab("Experiment")}
          >
            Experiment
          </Tab>
        </TabsList>
      </Tabs>
      {currTab === "Home" && <HomePage />}
      {currTab === "Experiment" && <ExperimentPage />}
    </div>
  );
}
export default MacBookPro141;
