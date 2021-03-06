import { storeState, changeState } from "../src/js/plant.js";

const stateControl = storeState;
const feed = changeState("soil")(0);
const hydrate = changeState("water")(0);
const giveLight = changeState("light")(0);
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

$(document).ready(function() {
  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
  
    $('#feed').click(function() {
      const newState = stateControl()(blueFood);
      $('#soil-value').append(`Soil: ${newState.soil}`);
      $('#water-value').append(`Water: ${newState.water}`);
    });
  
  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
  
    $('#show-state').click(function() {
      // We just need to call stateControl() without arguments to see our current state.
      const currentState = stateControl();
      $('#soil-value').text(`Soil: ${currentState.soil}`);
    });
  });