import Image from "next/image";

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  bio: string;
}

export default function ProfileCard({ imageSrc, name, bio }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center text-center rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="w-28 h-28 relative">
        <Image
          src={`${process.env.PAGES_BASE_PATH || ''}${imageSrc}`}
          alt={name}
          fill
          className="object-cover rounded-full"
        />
      </div>

      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-gray-600 max-w-xs">{bio}</p>
    </div>
  );
}
