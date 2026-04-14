import { MobileMenuItem, MobileMenuLink, MobileMenuName } from "./style";
import { ElementType } from "react";

type NavProps = {
  to: string;
  name: string;
  Icon: ElementType;
  isActive: boolean;
  onNavigate: (to: string) => void;
};

function MobileNavItems({ to, name, Icon, isActive, onNavigate }: NavProps) {
  return (
    <MobileMenuItem>
      <MobileMenuLink
        to={to}
        $isActive={isActive}
        onClick={(event) => {
          event.preventDefault();
          onNavigate(to);
        }}
      >
        <Icon />
        <MobileMenuName>{name}</MobileMenuName>
      </MobileMenuLink>
    </MobileMenuItem>
  );
}

export default MobileNavItems;
