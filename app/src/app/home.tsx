import Badge from "@/components/ion/Badge";
import Card from "@/components/ion/Card";
import { VideoCamera } from "@phosphor-icons/react/dist/ssr";

export function HomePage() {
  return (
    <div className="w-full flex flex-grow justify-between items-center gap-2.5">
      <div className="w-[500px] flex-col flex gap-8">
        <div className="w-full flex-col flex gap-2 font-medium">
          <div className="text-6xl leading-[72px] text-gray-800 w-full">
            Infinite Length
          </div>
          <div className="text-3xl text-gray-600 w-full">
            Automated cell counting via continuous flow of samples
          </div>
        </div>
        <div className="text-lg text-gray-800 w-full">
          Designed for researchers who demand precision and efficiency, we
          continuous, automated cell counting with unmatched accuracy.
        </div>
      </div>
      <Card type="elevated">
        <div className="bg-white relative flex items-start h-fit">
          <img
            className="object-cover h-full w-[550px]"
            alt="Sawdust Sample Feb 25 (3) 1"
            src="/images/mac-book-pro-14-1/sawdust-sample-feb-25-(3)-1.png"
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
