const taxrules = [
    {
        id: "tax1",
        name: "hightax",
        taxvalue: 30,
        active: 0,
    },
    {
        id: "tax2",
        name: "medtax",
        taxvalue: 20,
        active: 0
    },
    {
        id: "tax3",
        name: "lowtax",
        taxvalue: 10,
        active: 1
    }


]

prodbuilds = [
    {
        id: 1,
        type: "f1",
        name: "fishing",
        prodvalue: 2
    },
    {
        id: 2,
        type: "m1",
        name: "MetalMine",
        prodvalue: 8
    }
]

taxcalc()
productioncalc()
tradecalc()
population = 1000;
function taxcalc() {
    population = 1000;
    popmoney = 0.1 * population
    // console.log(popmoney)
    taxlaw = taxrules.find((law) => law.active === 1)
    // console.log(taxlaw)
    taxvalue = (taxlaw.taxvalue)
    // console.log(taxvalue)
    tax = taxvalue / 100
    // console.log(tax)
    taxeff = 1
    taxgain = Math.round(popmoney * (tax * taxeff))

    console.log("tax gain",taxgain)
}
function productioncalc() {
    prodamount = prodbuilds.filter(build => build.prodvalue > 0)
    tprod = 0
    for (let i = 0; i < prodamount.length; i++) {

        console.log(prodamount[i].prodvalue)
        tprod += prodamount[i].prodvalue
    }


    console.log(tprod)



}
function tradecalc() {

    // tax calc
    taxlaw = taxrules.find((law) => law.active === 1)
    taxvalue = (taxlaw.taxvalue)

    tradetax = (100 - taxvalue)/100
    // tax calc
    console.log(tradetax)
    marketcontroll = 1

    tradeEfficiency = (100 - taxvalue)/100 




    console.log("tradeEfficiency is", tradeEfficiency)
    tradeprod = (tprod * marketcontroll) 
    tradegain = tradeprod * tradeEfficiency
    console.log("trade prod is", tradeprod)
    console.log("tradegain is", tradegain)
    moneycalc()
}

function moneycalc() {
    m1 = Math.round(tradegain)
    m2 = Math.round(tprod)
    m3 = taxgain

    totalGain = m1 + m2 + m3



}