const tableNoReducerDefaultState = {table_no: ''}

const tableNoReducer = (state = tableNoReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TABLE_NUMBER':
      console.log('set now');
      return true;

    default:
      return state;
  }
}