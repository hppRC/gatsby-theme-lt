import { useContext } from 'react';
import DeckContext from 'src/context';

export const useDeck = () => useContext(DeckContext);
export default useDeck;
