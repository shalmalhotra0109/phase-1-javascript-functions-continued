function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`

}
saturdayFun();

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
 
  function wrapAdjective(highlight = '*') {
    return function(adj) {
      return `You are ${highlight}${adj}${highlight}!`;
  }
}
