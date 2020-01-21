import { merge } from 'lodash';
import React, { useReducer } from 'react';

import Context from '../context';

const reducer = (state: any, next: any) =>
  typeof next === 'function'
    ? merge({}, state, next(state))
    : merge({}, state, next);

export default (props: any) => {
  const [state, setState] = useReducer(reducer, {
    mode: 'normal',
    step: 0,
    metadata: {}
  });

  const register = (index: number, key: any, value: any) => {
    if (state.metadata[index] && state.metadata[index][key]) return;
    setState({
      metadata: {
        [index]: {
          [key]: value
        }
      }
    });
  };

  const context = {
    ...state,
    setState,
    register
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
