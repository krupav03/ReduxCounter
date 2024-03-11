const initialState = {
    count : 0
}
// intially the state is going to have this value

const counterReducer= (state = initialState,action) => {
    // it will take two parameters one is the initial state and the other is the action which will be triggeredfrom action.js
    switch(action.type) {
        //whenever an action is triggered weshould return an object
// if the action type that has been triggered matches any of the below cases it returns the functionality inside that case.
        case 'INCREMENT' :
            return {
            // ...state indicates that we need to spread all the current states that we have at the moment.
                ...state, 
                count: state.count + 1
                // the state is being updated along with the current state value
            }

        case 'DECREMENT' :
                return {
                    ...state,
                    count: state.count - 1
                }
                // if it doesn't match with any of the cases it will return this
        default:
            return state;
    }
}

export default counterReducer;

//In a real time application : there can be n number of states -->  n number of reducers so we need to combine all the reducers into a single reducer.
//  after combining all the reducers into a single one we need to put that in the store
