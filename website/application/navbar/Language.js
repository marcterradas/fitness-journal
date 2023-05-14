import { getLanguage } from "@/infrastructure/functions/information";
import Image from "@/infrastructure/components/Image";

export default function Language({ languageCode }) {
  const language = getLanguage(languageCode);
  const imgSrc = `/img/${languageCode}.svg`;
  return (
    <div className="flex items-center justify-start p-2 cursor-pointer w-36">
      <div className="relative w-8 h-6">
        <Image
          src={imgSrc}
          alt={languageCode}
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div className="ml-2 font-sans text-base sm:text-lg">{language}</div>
    </div>
  );
}
