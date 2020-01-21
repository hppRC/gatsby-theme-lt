import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import Deck from '../components/deck';
import splitSlides from '../split-slides';

export const pageQuery = graphql`
  query($id: String!) {
    deck: deck(id: { eq: $id }) {
      id
      body
    }
  }
`;

const wrapper = (props: any) => {
  const slides = splitSlides(props);
  return <Deck {...props} slides={slides} />;
};

const components = {
  wrapper
};

export default ({ data, ...props }: { data: any | null }) => {
  if (!data) return <></>;
  const {
    deck: { body }
  } = data;
  const Component = (props: any) => <MDXRenderer {...props} children={body} />;

  return <Component {...props} components={components} />;
};
