const avgScore = (score1, score2, score3) => {
  const avg = (score1 + score2 + score3) / 3;
  return avg;
};

const checkWinner = (avg1, avg2) => {
  if (avg1 >= 2 * avg2) {
    return `dolphins win (${avg1} vs ${avg2})`;
  } else if (avg2 >= 2 * avg1) {
    return `kolas win (${avg2} vs ${avg1})`;
  } else {
    return -1;
  }
};

dolphinsAvg = avgScore(44, 23, 71);
kolasAvg = avgScore(65, 54, 49);
console.log(checkWinner(dolphinsAvg, kolasAvg));
