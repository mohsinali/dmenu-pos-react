const tableNoReducerDefaultState = {table_no: 0}

const tableNoReducer = (state = tableNoReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TABLE_NUMBER':      
      return {
        table_no: action.table_no
      };

    default:
      return state;
  }
}

export default tableNoReducer;