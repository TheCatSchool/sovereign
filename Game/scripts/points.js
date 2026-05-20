PAD = document.getElementById("PA")
PBD = document.getElementById("PE")
PMD = document.getElementById("PM")
cashD = document.getElementById("Cash")

Admin = 0
Economics = 0
Mil = 0
mv = 0

basegrowth = 10
function start() {
    Admin = 100
    Economics = 100
    Mil = 100
    mv = 1000

    updateValues()
}

const AdminpointgainMods = [

    {
        id: "A1",
        name: "Adminfocus",
        valueC: 5,
        Active: 1


    },
    {
        id: "A2",
        name: "EcofocusAdmin",
        valueC: -2.5,
        Active: 0


    },
    {
        id: "A3",
        name: "MilFocusAdmin",
        valueC: -2.5,
        Active: 0


    },
    {
        id: "A4",
        name: "test",
        valueC: 2.5,
        Active: 1

    }



]

const EcopointgainMods = [

    {
        id: "E1",
        name: "Ecofocus",
        valueC: 5,
        Active: 0


    },
    {
        id: "E2",
        name: "AdminfocusEco",
        valueC: -2.5,
        Active: 1


    },
    {
        id: "E3",
        name: "MilFocusEco",
        valueC: -2.5,
        Active: 0


    },



]
const MilpointgainMods = [

    {
        id: "M1",
        name: "Milfocus",
        valueC: 5,
        Active: 0


    },
    {
        id: "M2",
        name: "AdminfocusMil",
        valueC: -2.5,
        Active: 1


    },
    {
        id: "M3",
        name: "EcoFocusMil",
        valueC: -2.5,
        Active: 0


    },



]

function setFocus(id) {
    [AdminpointgainMods, EcopointgainMods, MilpointgainMods].forEach(arr =>
        arr.forEach(mod => mod.Active = 0)
    );

    const syncMap = {
        "A1": ["E2", "M2"],
        "E1": ["A2", "M3"],
        "M1": ["A3", "E3"]
    };

    const allMods = [...AdminpointgainMods, ...EcopointgainMods, ...MilpointgainMods];
    const triggered = allMods.find(mod => mod.id === id);
    if (!triggered) return;
    triggered.Active = 1;

    const linked = syncMap[id];
    if (linked) {
        linked.forEach(linkedId => {
            const mod = allMods.find(m => m.id === linkedId);
            if (mod) mod.Active = 1;
        });
    }
}

function adminvaluecalc() {
    adminvalue = basegrowth
    modifers = AdminpointgainMods.filter((AdminMods) => AdminMods.Active === 1)
    console.log(modifers)
    for (let i = 0; i < modifers.length; i++) {
        console.log("works")
        console.log(modifers[i])

        adminvalue += modifers[i].valueC
        console.log(adminvalue)
    }
    // setAdminvalue(adminvalue)
    // turnvalue()

}
function ecovaluecalc() {
    ecovalue = basegrowth
    modifers = EcopointgainMods.filter((EcoMods) => EcoMods.Active === 1)
    console.log(modifers)
    for (let i = 0; i < modifers.length; i++) {
        console.log("works")
        console.log(modifers[i])
        ecovalue += modifers[i].valueC
        console.log(ecovalue)
    }


}

function milvaluecalc() {
    milvalue = basegrowth
    modifers = MilpointgainMods.filter((MilMods) => MilMods.Active === 1)
    console.log(modifers)
    for (let i = 0; i < modifers.length; i++) {
        console.log("works")
        console.log(modifers[i])
        milvalue += modifers[i].valueC
        console.log(milvalue)
    }
    turnvalue()
}

function turn() {
    adminvaluecalc()
    ecovaluecalc()
    milvaluecalc()
}

function turnvalue() {


    Admin += adminvalue
    Economics += ecovalue
    Mil += milvalue
    mv += 10

    updateValues()
}

function updateValues() {
    PAD.innerHTML = Admin
    PBD.innerHTML = Economics
    PMD.innerHTML = Mil
    cashD.innerHTML = mv
}
start()