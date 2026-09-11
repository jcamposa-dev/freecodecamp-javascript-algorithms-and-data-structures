let count = 0;
function cardCounter(card) {
    const cartasValidas = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    if (!cartasValidas.includes(card)) {
        return "Card value not supported";
    }
    if ([2, 3, 4, 5, 6].includes(card)) {
        count = ++count;
    }  else if ([10, "J", "Q", "K", "A"].includes(card)) {
        count = --count;
    }
    if (count > 0) {
        return count + " Bet";
    } else if (count <= 0) {
        return count + " Hold";
    }
}
