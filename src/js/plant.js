export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const changeState = (property) => {
  return (value) => {
    return (state) => ({
      ...state,
      [property]: ((state[property] + value) || value)
    });
  };
};

// -----Abilities-----
const canFruit = (plant) => ({
  fruit: (typeFruit) => {
    return `${plant.name} bears ${typeFruit}.`;
  }
});
const canFlower = (plant) => ({
  flower: (typeFlower) => {
    return `${typeFlower} blossoms from the ${plant.name}.`;
  }
});
// const nameStarterPlant = changeState("name")("Starter");
// let appleTreePlant = stateControl({ soil: 0, water: 0, light: 0, name: "Apple Tree" })(nameStarterPlant);
// const appleTree = canFruit(appleTreePlant);
// let cherryTreePlant = { soil: 0, light: 0, water: 0, name: "Cherry Tree"};
// const cherryTree = canFlower(cherryTreePlant);
// console.log(cherryTree.flower("cherry blossom"));

// const createStartPlant = storeState({ soil: 0, water: 0, light: 0, name: "" });

// const createNewPlant = (name) => {
//   let plant = {
//     name,
//   };
//   return { ...plant, ...feed(plant), ...hydrate(plant), ...giveLight(plant)};
// };

// const fedPlant = stateControl()(blueFood);
// const plantFedAgain = stateControl()(greenFood);
// console.log(plantFedAgain);
// const startingPlant = createStartPlant(nameStarterPlant);
// const startingPlant = stateControl({ soil: 0, water: 0, light: 0, name: "" })(nameStarterPlant);
// console.log(startingPlant);
