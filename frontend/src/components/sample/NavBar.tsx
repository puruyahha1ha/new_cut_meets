import { HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-[60px] z-50">
      <div className="flex justify-around items-center h-16">
        <NavItem icon={HomeIcon} label="Home" />
        <NavItem icon={MagnifyingGlassIcon} label="Search" />
        <NavItem icon={UserIcon} label="Profile" />
      </div>
    </div>
  );
};

const NavItem = ({ icon: Icon, label }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, label: string }) => {
  return (
    <Button className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500 bg-white">
      <Icon className="h-6 w-6" />
      <span className="text-xs">{label}</span>
    </Button>
  );
};

export default BottomNavBar;
