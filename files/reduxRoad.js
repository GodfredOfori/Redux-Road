const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};

const currentState = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather": {
      return {
        ...state, 
        supplies: state.supplies + 15, 
        days: state.days + 1 
      };
    }
    case "travel": {
        return { 
          ...state, 
          supplies: state.supplies - 20,
          distance: state.distance + 10, 
          days: state.days + action.payload,
        }
    }
    case "tippedWagon": {
      return { 
        ...state, 
        supplies: state.supplies - 30, 
        days: state.days + 1
        }
    }
    default: {
      return state;
    }
  }
}

let wagon = currentState(undefined, {});
console.log(wagon);

wagon = currentState(wagon, {type: 'travel', payload: 1})
console.log(wagon);

wagon = currentState(wagon, {type: 'gather', payload: 0})
console.log(wagon);

wagon = currentState(wagon, {type: 'tippedWagon', payload: 0})
console.log(wagon);

wagon = currentState(wagon, {type: 'travel', payload: 3})
console.log(wagon)