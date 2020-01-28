import { useSwipeable } from 'react-swipeable';

import { modes } from '../constants';
import { next, previous } from '../navigate';
import useDeck from './use-deck';

export default (next: any) => (state: any) =>
  state.mode === next ? { mode: modes.normal } : { mode: next };

export const useSwipe = () => {
  const context = useDeck();

  const onSwipedLeft = (e: any) => {
    next(context);
  };

  const onSwipedRight = (e: any) => {
    previous(context);
  };

  const onSwipedUp = (e: any) => {
    context.setState({ mode: modes.presenter });
  };

  const onSwipedDown = (e: any) => {
    context.setState({ mode: modes.normal });
  };

  const props = useSwipeable({
    onSwipedLeft,
    onSwipedRight,
    onSwipedUp,
    onSwipedDown
  });

  return props;
};
