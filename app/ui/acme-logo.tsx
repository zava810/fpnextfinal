import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import { FontProvider, FontContext } from '@/FontContext';
import FontPicker from '@/app/ui/FontPicker';
export default function AcmeLogo() {
  return (
    <div
      className="flex flex-row items-center leading-none text-black"
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <FontPicker />
      <p className="text-[44px] ">Acme</p>
    </div>
  );
}
