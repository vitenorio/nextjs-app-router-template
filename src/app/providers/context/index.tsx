import {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ContextValue = {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
};

const Context = createContext<ContextValue>({} as ContextValue);

export const ContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todo, setTodo] = useState("");

  return (
    <Context.Provider value={{ todo, setTodo }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = (): ContextValue => useContext(Context);
