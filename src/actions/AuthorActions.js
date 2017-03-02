import * as types from './ActionTypes';
import AuthorApi from '../API/mockAuthorApi';
export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors().then(authors => {
        dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
        throw(error);
    });
  };
}
