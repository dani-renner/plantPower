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
let plant = { soil: 0, light: 0, water: 0};

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

feed(5)(plant);
console.log(feed(5)(plant));