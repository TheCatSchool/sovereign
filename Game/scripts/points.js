PAD = document.getElementById("PA")
PBD = document.getElementById("PE")
PMD = document.getElementById("PM")
cashD = document.getElementById("Cash")

Admin = 0
Economics = 0
Mil = 0
mv = 0
function start() {
    Admin = 100
    Economics = 100
    Mil = 100
    mv = 1000

    updateValues()
}


function turnvalue() {
    Admin += 10
    Economics += 10
    Mil += 10
    mv += 100

    updateValues()
}

function updateValues() {
    PAD.innerHTML = Admin
    PBD.innerHTML = Economics
    PMD.innerHTML = Mil
    cashD.innerHTML = mv
}
start()