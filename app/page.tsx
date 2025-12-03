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
          This project is a virtual Fabrication Lab and Machine Shop simulation designed to provide engineering students with an interactive, 
          immersive training experience. Within the simulation, users can navigate a realistic fab lab environment, 
          interact with common tools and learn essential safety procedures before ever stepping into a physical workspace. A central focus of the platform is the 
          SawStop table saw and its core safety features as it is used in the UGA Fabrication Laboratory. The simulation models the machine's most 
          important real-world behaviors, including required key card access, immediate blade stoppage on skin contact, 
          and activation only after meeting required lab conditions (such as proper attire, including safety goggles and earplugs). By accurately replicating these systems, 
          The simulation allows students to practice proper machine setup, operation, and emergency response in a controlled digital environment without the risks, scheduling limitations, 
          or personnel demands associated with in-person training.
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

     
      
    </div>
  );
}
