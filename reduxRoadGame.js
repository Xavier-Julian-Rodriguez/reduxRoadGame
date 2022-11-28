// This is an adventure game project built using reducers, state, and actions.
// The state will represent the state of the game. It contains the player’s inventory,
// distance travelled, and time on the road. Each event in the game is represented
// as an action. Players can gather supplies, travel, and–if they play risky–sometimes
// tip over the wagon carrying their supplies.


const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
  }
  
  const gameStateReducer = (state = initialWagonState, action) => {
    switch(action.type) {
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1
        };
      }
      case 'travel': {
        if(state.supplies < 20) {
          return {...state};
        } else {
        return {
          ...state,
          supplies: state.supplies - (20 * action.payload),
          distance: state.distance + (10 * action.payload),
          days: state.days + action.payload
        }}
      }
      case 'tippedWagon': {
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
  //day 0
  let wagon = gameStateReducer(undefined, {});
  console.log(wagon)
  //day 1
  wagon = gameStateReducer(wagon, {type:'travel', payload: 1});
  console.log(wagon);
  //day 2
  wagon = gameStateReducer(wagon, {type: 'gather'});
  console.log(wagon);
  //day 3
  wagon = gameStateReducer(wagon, {type: 'tippedWagon'});
  console.log(wagon);
  //day 4
  wagon = gameStateReducer(wagon, {type: 'travel', payload: 3});
  console.log(wagon);
  //testing out the negative supplies travel conditional
  wagon = gameStateReducer(wagon, {type: 'travel', payload: 3})
  console.log(wagon);