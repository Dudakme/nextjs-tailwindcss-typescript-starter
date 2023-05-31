import { FirstCard as Card } from "../cards";
import Link from "next/link";
import React from "react";

const Projects: React.FC = () => (
  <main className="pb-10 justify-center text-center bg-white pt-10 shadow-md">
    <h1 className="text-4xl mb-5 text-black">Lessons</h1>

    <div className="block justify-center p-2 w-10/12 bg-white text-left mx-auto rounded mt-5">
      <div className="flex mb-5">
        <Card
          title="3 Dribble Skills"
          description="Learn about basic dribble skills that are actually useful! Rainbow flick, Scissors and Elasco"
        >
          <button className="text-blue-500 underline">
            <Link href="https://www.youtube.com/watch?v=F5VVCT6OXqo&ab_channel=harrykane"> See More</Link>
          </button>
        </Card>
        <Card
          title="Warm ups"
          description="Some basic exercises that will overall enhance the ability in football."
        >
          <button className="text-blue-500 underline">
            <Link href="https://www.youtube.com/watch?v=xU_GvJJu6L0&ab_channel=harrykane">See More</Link>
          </button>
        </Card>
        <Card
          title="Penalty Kick"
          description="How to practice penalty kick. It allows kick ability and penalty kick skills to be improved."
        >
          <button className="text-blue-500 underline">
            <Link href="https://www.youtube.com/watch?v=GsnLpW_IXHk&ab_channel=harrykane"> See More</Link>
          </button>
        </Card>
      </div>
    </div>
  </main>
);

export default Projects;
