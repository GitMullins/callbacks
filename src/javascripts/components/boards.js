import boardData from '../helpers/data/boardsData';
import util from '../helpers/util';

const domStringBuilder = (boards) => {
  let domString = '';
  boards.forEach((board) => {
    domString += '<div class="card col-3">';
    domString += `<div>${board.id}</div>`;
    domString += `<div>${board.name}</div>`;
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      domStringBuilder(resp.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
