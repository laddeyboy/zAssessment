import { LOGO_IMAGES, CardType } from "./constants";

export const createRandomCardArray = () => {
  const randomCardsArray = [];
  const [...cardImages] = LOGO_IMAGES;
  while (cardImages.length > 0) {
    let randomIndex = Math.floor(Math.random() * cardImages.length);
    randomCardsArray.push(cardImages[randomIndex]);
    cardImages.splice(randomIndex, 1);
  }
  return randomCardsArray;
};

export const selectRandomCard = (cardsLeftToFind: Array<CardType>) => {
  let randomIndex = Math.floor(Math.random() * cardsLeftToFind.length);
  return cardsLeftToFind[randomIndex];
};
