import React, {
  createContext, useContext, useReducer,
} from 'react';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from '../../../../TypeScript/Interfaces/IInitialContext';

export const StateContext = createContext<IInitialContext | any>({});

export interface IStateProvider {
  reducer: React.Reducer<{}, {}>,
  children: React.ReactElement,
  MyInitialState: IInitialContext,
}

export const StateProvider = (props: IStateProvider): React.ReactElement => {
  const { reducer, children, MyInitialState } = props;

  return (
    <StateContext.Provider value={useReducer(reducer, MyInitialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = (): IInitialContext | any => useContext(StateContext);

export interface IContext {
  context: [IInitialContext, void | any]
}

export const withContext = (Component): any => (props: React.Props<any>): React.ReactElement => (
  <StateContext.Consumer>
    {(context: [IInitialContext, void]): React.ReactElement => (
      <Component {...props} context={context as [IInitialContext, void]} />
    )
  }
  </StateContext.Consumer>
);
