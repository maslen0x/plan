import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export type ViewValue = '2d' | '3d';
export type NavValue = 'plan' | 'dismantling' | 'furniture' | 'doors' | 'walls' | 'materials';

export interface PlanContextValue {
  view: ViewValue;
  nav: NavValue;
  setView: Dispatch<SetStateAction<ViewValue>>;
  setNav: Dispatch<SetStateAction<NavValue>>;
}

const PlanContext = createContext<PlanContextValue | null>(null);

export const usePlan = () => useContext(PlanContext) as PlanContextValue;

const useProvidePlan = () => {
  const [view, setView] = useState<ViewValue>('2d');
  const [nav, setNav] = useState<NavValue>('plan');

  return {
    view,
    nav,
    setView,
    setNav,
  };
};

export const PlanProvider: FC<PropsWithChildren> = ({ children }) => {
  const plan = useProvidePlan();

  return <PlanContext.Provider value={plan}>{children}</PlanContext.Provider>;
};
