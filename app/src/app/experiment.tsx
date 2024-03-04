import Badge from "@/components/ion/Badge";
import Card from "@/components/ion/Card";
import { VideoCamera } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

export function ExperimentPage() {
  const [currTime, setCurrTime] = useState("0:00 AM");
  const [numCells, setNumCells] = useState(0);
  // TODO: trigger when to start counting cells
  const [startExperiment, setStartExperiment] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setCurrTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZoneName: "short",
          timeZone: "America/Los_Angeles",
        })
      );
    }, 1000);
  }, []);

  const [imageSrc, setImageSrc] = useState(
    "/images/mac-book-pro-14-1/example-sawdust-livestream.jpg"
  );

  const [position, setPosition] = useState(
    "Position: (-37.0043, 47.08124, 128.7662)"
  );

  useEffect(() => {
    const fetchImageAndPosition = async () => {
      try {
        // TODO: extrace API base url to env variable
        const imageResponse = await fetch("http://127.0.0.1:8000/image/");
        const imageData = await imageResponse.json();
        setImageSrc(`data:image/jpeg;base64,${imageData.image}`);

        const positionResponse = await fetch("http://127.0.0.1:8000/position/");
        const positionData = await positionResponse.json();
        setPosition(
          `Position: (${positionData.x}, ${positionData.y}, ${positionData.z})`
        );
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    setInterval(fetchImageAndPosition, 500);
  }, []);

  useEffect(() => {
    // Todo: Run Rob's cell counting algorithm to update
    // Todo: Save in db
    const numCellIncrease = async () => {
      const randomIncrease = Math.floor(Math.random() * 6);
      setNumCells((prevNumCells) => prevNumCells + randomIncrease);
    };

    setInterval(numCellIncrease, 5000);
  }, []);

  return (
    <div className="w-full flex h-full flex-grow justify-between items-center gap-2.5">
      {/* Todo: Don't brute force with fixed gap */}
      <div className="w-[700px] flex-col flex h-full gap-y-[300px]">
        <div className="w-full flex-col flex font-medium">
          <div>
            <p className="text-[#D1D5DB] text-2xl font-light">{currTime}</p>
            <div className="text-6xl leading-[72px] text-gray-800 w-full">
              Labsmore LIP-X1
            </div>
          </div>
          <div className="text-lg text-[#9CA3AF] w-full h- flex-grow">
            <p>Status: 200 (OK)</p>
            <p>{position}</p>
            <p>Objective: 5x</p>
          </div>
        </div>

        <div>
          <p className="text-[#9CA3AF] text-5xl">Cell Count: {numCells}</p>
        </div>
      </div>
      <Card type="elevated">
        <div className="bg-white relative flex items-start h-fit">
          <img
            className="object-cover h-full w-[550px]"
            alt="Sawdust Sample Feb 25 (3) 1"
            src={imageSrc}
          />
          <div className="right-[11px] top-[11px] absolute flex-col flex">
            <Badge
              iconLeading={<VideoCamera size={12} weight={"bold"} />}
              emphasis="medium"
              color="red"
              size="sm"
            >
              Live
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}
