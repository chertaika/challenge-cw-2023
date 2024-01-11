import { createSelector } from '@reduxjs/toolkit';

const transformDataForTree = createSelector(
  state => state.cards,
  cards => cards.reduce((acc, current) => {
    (acc[current.category] = acc[current.category] || []).push(current);
    return acc;
  }, {}),
);

export default transformDataForTree;
