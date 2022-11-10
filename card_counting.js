let count = 0;
let answer = "";

function cc(card) {
  
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count > 0) {
    answer = "Bet";
  } else {
    answer = "Hold";
  }

  return `${count} ${answer}`;
}

cc(2); cc(3); cc("K"); cc('K'); cc('A');