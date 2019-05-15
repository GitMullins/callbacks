import pinsData from '../../helpers/data/pinsData';

const initPins = (boardId) => {
  pinsData.loadPinsForBoard(boardId) // this '.then().catch()' resolves the 'new Promise'
    .then((pins) => {
      console.error('allpins', pins);
    })
    .catch(err => console.error(err));
};

export default { initPins };
