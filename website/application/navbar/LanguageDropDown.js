import {
  DropDownWrapper,
  DropDownButton,
  DropDownContent,
} from "@/infrastructure/components/DropDown";
import LanguageSelected from "@/application/navbar/LanguageSelected";
import LanguageDropDownElements from "@/application/navbar/LanguageDropDownElements";

export default function LanguageDropDown({
  selectedLanguageCode,
  languagesCodes,
}) {
  return (
    <DropDownWrapper>
      <DropDownButton>
        <LanguageSelected selectedLanguageCode={selectedLanguageCode} />
      </DropDownButton>
      <DropDownContent>
        {({ close: closePopover }) => (
          <div className="grid gap-2 rounded-sm shadow-md">
            <LanguageDropDownElements
              selectedLanguageCode={selectedLanguageCode}
              languagesCodes={languagesCodes}
              closePopover={closePopover}
            />
          </div>
        )}
      </DropDownContent>
    </DropDownWrapper>
  );
}
