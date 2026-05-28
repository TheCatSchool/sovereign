Estates = [
    {
        Name: "Nobility",
        loyal: 50,
        influence: 40,
        Privleges: [],
        modifers: [
            {
                //      tier one:
                modifers1: "mileffec", //mil effeciency 
                modifers2: "milpow", //milpower gain
                //      Tier two:
                modifers3: "stab", //turnly stab gain or stab loss
                modifers4: "NobLoyalEvents1", //posetive events
                //      Tier three: 
                modifers5: "NobLoyalEvents2", //extremly posetive event chance or doomsday events

            }
        ]

    },
    {
        Name: "Bourgeoisie",
        loyal: 50,
        influence: 30,
        Privleges: [],
        modifers: [
            {
                //      tier one:
                modifers1: "tradeeffec", //tade effeciency 
                modifers2: "constcost", //construction cost 
                //      Tier two:
                modifers3: "ecogain", //turnly eco gain or eco loss
                modifers4: "rev-gain", //posetive events
                //      Tier three: 
                modifers5: "", //extremly posetive event chance or doomsday events

            }
        ]


    },
    {
        Name: "Clergy",
        loyal: 50,
        influence: 10,
        Privleges: [],
        modifers: []



    },
    {
        Name: "Peasentry",
        loyal: 50,
        influence: 10,
        Privleges: [],
        modifers: []


    },]


Nobility = Estates.find(estate => estate.Name === "Nobility")
Bourgeoisie = Estates.find(estate => estate.Name === "Bourgeoisie")
Clergy = Estates.find(estate => estate.Name === "Clergy")
Peasentry = Estates.find(estate => estate.Name === "Peasentry")

function loyaltycheck(estate) {
    if (estate.loyal <= 20) {
        console.log(estate.Name, "loyality is 20")
        if (estate.influence <= 20) {

        }
        if (estate.influence <= 40) {

        }
        if (estate.influence <= 60) {

        }
        if (estate.influence <= 80) {

        }



    }
    if (estate.loyal >= 60) {
        console.log(estate.Name, "loyality is 60")
        if (estate.influence <= 20) {

        }
        if (estate.influence <= 40) {

        }
        if (estate.influence <= 60) {

        }
        if (estate.influence <= 80) {

        }

    }
    if (estate.loyal >= 40) {
        console.log(estate.Name, "loyality is 40")
        if (estate.influence <= 20) {

        }
        if (estate.influence <= 40) {

        }
        if (estate.influence <= 60) {

        }
        if (estate.influence <= 80) {

        }

    }

    if (estate.loyal >= 75) {
        console.log(estate.Name, "loyality is 75")
        if (estate.influence <= 20) {

        }
        if (estate.influence <= 40) {

        }
        if (estate.influence <= 60) {

        }
        if (estate.influence <= 80) {

        }

    }
    if (estate.loyal >= 90) {
        console.log(estate.Name, "loyality is 90")
        if (estate.influence <= 20) {

        }
        if (estate.influence <= 40) {

        }
        if (estate.influence <= 60) {

        }
        if (estate.influence <= 80) {

        }

    }
}












