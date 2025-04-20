import {Button} from "@hexbytelabs/ui-library";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-7xl font-bold">HexByte Labs</h1>
      <p className="text-3xl">Starter Project</p>

      <Button className="mt-8" variant="link">Click Me</Button>
    </div>
  );
}
