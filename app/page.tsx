import Image from "next/image";
import ProfileCard from "./components/ProfileCard";
import Kelsey from "./images/Kelsey.jpg"
import Angel from "./images/angel.jpg"
import Blake from "./images/blake.jpg"
import Marra from "./images/marra.jpg"

export default function Home() {
  const people = [
    {
      imageSrc: Kelsey,
      name: "Kelsey Sterner",
      bio: "Full-stack developer passionate about solving complex problems and building community through impactful software.",
    },
    {
      imageSrc: Angel,
      name: "Angel Hoang",
      bio: "Full-stack developer focused on building thoughtful and user-centered experiences.",
    },
    {
      imageSrc: Blake,
      name: "Blake Withee",
      bio: "Embedded systems engineer with experience in designing and integrating both hardware and software systems.",
    },
    {
      imageSrc: Marra,
      name: "Marra Young",
      bio: "Computer systems engineer passionate about creating immersive virtual and mixed reality experiences that blend technology and design.",
    },
  ];
  return (
    <div className="">
    <section className="w-full max-w-6xl mx-auto py-14">
      <div className="border-l-4 border-blue-500 pl-6">
        <h2 className="text-3xl font-semibold tracking-tight">Project Description</h2>
        <p className="mt-3 text-gray-600 text-lg leading-relaxed">
          This project is a virtual Fabrication Lab and Machine Shop simulation designed to provide users with an interactive, 
          immersive learning experience. Users can explore and operate a variety of machines typically found in a fab lab, gaining hands-on experience in a safe virtual environment. 
          The simulation aims to enhance understanding of manufacturing processes, machine operations, 
          and fabrication techniques while fostering engagement and practical learning without the risks or limitations of a physical lab.
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
