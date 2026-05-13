const RB = document.getElementById("Next")

RB.addEventListener("click", newround);

round = 1
function newround() {
    round += 1;
    turnvalue()
}