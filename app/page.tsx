import Image from "next/image";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  const people = [
    {
      imageSrc: "/Kelsey.jpg",
      name: "Kelsey Sterner",
      bio: "Full-stack developer passionate about solving complex problems and building community through impactful software.",
    },
    {
      imageSrc: "/Kelsey.jpg",
      name: "Angel Hoang",
      bio: "Bio here",
    },
    {
      imageSrc: "/Kelsey.jpg",
      name: "Blake Withee",
      bio: "Bio here",
    },
    {
      imageSrc: "/Kelsey.jpg",
      name: "Marra Young",
      bio: "Bio here",
    },
  ];
  return (
    <div className="">
    <section className="w-full max-w-6xl mx-auto py-14">
      <div className="border-l-4 border-blue-500 pl-6">
        <h2 className="text-3xl font-semibold tracking-tight">Project Description</h2>
        <p className="mt-3 text-gray-600 text-lg leading-relaxed">
          A focused explanation of the project’s purpose, core idea, and impact.
        </p>
      </div>
    </section>

    <section className="w-full max-w-6xl mx-auto py-14">
      <div className="border-l-4 border-yellow-500 pl-6">
        <h2 className="text-3xl font-semibold tracking-tight">Video</h2>
        <p className="mt-3 text-gray-600 text-lg leading-relaxed">
          A clear walkthrough demonstrating how the application functions.
        </p>
      </div>
    </section>

    <section className="w-full max-w-6xl mx-auto py-14">
      <div className="border-l-4 border-green-500 pl-6">
        <h2 className="text-3xl font-semibold tracking-tight">Members</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 p-8">
      {people.map((p, idx) => (
        <ProfileCard key={idx} {...p} />
      ))}
    </div>
      </div>
    </section>

      <h2 className="text-2xl font-semibold tracking-tight">Members</h2>
      
    </div>
  );
}
