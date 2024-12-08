import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import FontPicker from '@/app/ui/FontPicker';
import PickerFont from '@/app/ui/PickerFont'
export default function AcmeLogo() {
  return (
	<div>
		<div className="flex flex-row items-center leading-none text-black" >
		  <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
		  <p className="text-[44px] ">Acme</p>
		</div>
		<div className="flex flex-row items-center leading-none text-black" >
		  <PickerFont />
		</div>
    </div>
  );
}
