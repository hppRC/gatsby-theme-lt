import { createContext } from 'react';

type Context = {
  steps: number;
  step: number;
  slug: string;
  length: number;
  index: number;
  preview: any;
  metadata: { steps: number }[];
  setState: ({}) => void;
  register: (index: number, steps: string, length: number) => void;
};

export default createContext<Context>({
  steps: 0,
  step: 0,
  slug: '',
  length: 0,
  preview: {},
  index: 0,
  metadata: [{ steps: 0 }],
  setState: ({}) => {},
  register: () => {}
});
