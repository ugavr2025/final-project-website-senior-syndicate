import Image from "next/image";
import ProfileCard from "./components/ProfileCard";
import Kelsey from "./images/Kelsey.jpg";
import Angel from "./images/angel.jpg";
import Blake from "./images/blake.jpg";
import Marra from "./images/marra.jpg";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-20">
      {/* ----------------- PROJECT DESCRIPTION ----------------- */}
      <section className="w-full max-w-5xl mx-auto py-20 px-6">
        <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-1.5 bg-blue-500 rounded-full" />
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              Project Description
            </h2>
          </div>

          <p className="mt-3 text-gray-700 text-lg leading-relaxed">
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

      {/* ----------------- VIDEO SECTION ----------------- */}
      <section className="w-full max-w-5xl mx-auto py-10 px-6">
        <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-1.5 bg-yellow-500 rounded-full" />
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              Video
            </h2>
          </div>

          <p className="mt-2 text-gray-700 text-lg leading-relaxed">
            A clear walkthrough demonstrating how the application functions.
          </p>

          <div className="mt-6 aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-Y7u5lw2A9o"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ----------------- MEMBERS ----------------- */}
      <section className="w-full max-w-6xl mx-auto py-20 px-6">
        <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1.5 bg-green-500 rounded-full" />
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              Members
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((p, idx) => (
              <ProfileCard key={idx} {...p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
