"use client";
import { FC, ReactNode, createContext, useContext } from "react";
interface MembershipContextProps {
  ability: Array<string>;
}
const MembershipContext = createContext<MembershipContextProps | undefined>(
  undefined
);

// provider
export const MembershipProvider: FC<{
  children: ReactNode;
  ability: string[];
}> = (props) => {
  return (
    <MembershipContext.Provider
      value={{
        ability: props.ability,
      }}
    >
      {props.children}
    </MembershipContext.Provider>
  );
};

const useMembershipProvider = () => {
  return useContext(MembershipContext) as MembershipContextProps;
};

// check engine
const useCheckAbility = (ability: string, scopeAbility: string[]) => {
  const isAllow = scopeAbility.includes(ability);
  if (isAllow) {
    return true;
  } else {
    false;
  }
};

// scope components
export const Can: FC<{
  componentAbility: string;
  children: ReactNode;
}> = (props) => {
  const scopeAbility = useMembershipProvider();

  const ability = useCheckAbility(
    props.componentAbility,
    scopeAbility?.ability
  );

  if (ability) {
    return props.children;
  } else {
    return <p>no authorization</p>;
  }
};
