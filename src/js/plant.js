const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

const changeState = (property) => {
  return (value) => {
    return (state) => ({
      ...state,
      [property]: (state[property] || 0) + value
    })
  }
}

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);
let plant = { soil: 0, light: 0, water: 0};

const fedPlant = stateControl(blueFood);
const plantFedAgain = stateControl(greenFood);
console.log(plantFedAgain);