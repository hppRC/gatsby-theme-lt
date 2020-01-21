import React from 'react';
import Decks from 'src/components/decks';

export default ({ pageContext, ...props }: { pageContext: any }) => {
  const decks = pageContext.decks.map((d: any) => d.node);

  return <Decks {...props} decks={decks} />;
};
