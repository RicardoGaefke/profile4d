import React, {
  createContext, useContext, useReducer,
} from 'react';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from '../../../../TypeScript/Interfaces/IInitialContext';

const StateContext = createContext<IInitialContext | any>({});

interface IStateProvider {
  reducer: React.Reducer<{}, {}>,
  children: React.ReactElement,
  MyInitialState: IInitialContext,
}

export const StateProvider = (props: IStateProvider): React.ReactElement<any> => {
  const { reducer, children, MyInitialState } = props;

  return (
    <StateContext.Provider value={useReducer(reducer, MyInitialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = (): IInitialContext | any => useContext(StateContext);
