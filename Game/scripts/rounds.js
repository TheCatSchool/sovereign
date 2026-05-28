const RB = document.getElementById("Next")

RB.addEventListener("click", newround);

round = 1
function newround() {
    
    round += 1;
    turn()
    triggerRandomEvent()
    loyaltycheck(Nobility)
    loyaltycheck(Bourgeoisie)
    loyaltycheck(Clergy)
    loyaltycheck(Peasentry)
}