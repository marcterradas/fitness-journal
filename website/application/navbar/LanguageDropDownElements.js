import Link from "@/infrastructure/components/Link";
import { getLanguage } from "@/infrastructure/functions/information";
import Language from "@/application/navbar/Language";

export default function LanguageDropDownElements({
  selectedLanguageCode,
  languagesCodes,
  closePopover,
}) {
  const dropDown = languagesCodes
    .filter((languageCode) => languageCode != selectedLanguageCode)
    .sort()
    .map((languageCode) => (
      <Link
        key={languageCode}
        href={languageCode}
        locale={languageCode}
        onClick={closePopover}
        title={getLanguage(languageCode)}
        className="z-10 pl-1 pr-2 transition-colors duration-300 ease-linear rounded-sm cursor-pointer w-36 hover:bg-stone-200"
      >
        <Language languageCode={languageCode}></Language>
      </Link>
    ));
  return <>{dropDown}</>;
}
