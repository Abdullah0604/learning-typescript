import { Button } from "@/components/ui/button";
import { GitBranchIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="dark:bg-black dark:text-white w-full h-screen">
      Hello next js with Shadcn
      <div>
        <Button
          variant="outline"
          size="lg"
          className="shadow-md shadow-gray-600"
        >
          <GitBranchIcon /> new branch
        </Button>
      </div>
    </main>
  );
}
