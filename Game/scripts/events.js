const randomEvents = [
    {
        id: 1,
        name: "Bailout",
        eventText: "A wealthy business owner has gone bankrupt after bad investments. He comes to us asking for a bailout. It will cost us, or we could let him go — though that will harm our relationships with other rich men.",
        choices: [
            {
                cid: 1,
                text: "Bail them out",
                eftype: "money",
                ef: -500
            },
            {
                cid: 2,
                text: "Not the crown's duty to help fools",
                eftype: "BLoyal",
                ef: -10
            },
        ]
    },
    {
        id: 2,
        name: "Noble Feud",
        eventText: "Two noble houses have erupted into a bitter feud over a disputed land inheritance. Both demand the crown arbitrate in their favour. Siding with either will displease the other, but ignoring them both risks open conflict.",
        choices: [
            {
                cid: 1,
                text: "Rule in House Aldric's favour",
                eftype: "NLoyal",
                ef: -8
            },
            {
                cid: 2,
                text: "Divide the land equally",
                eftype: "Admin",
                ef: -15
            },
            {
                cid: 3,
                text: "Declare it a crown matter and seize the land",
                eftype: "NInfluence",
                ef: -10
            },
        ]
    },
    {
        id: 3,
        name: "Bumper Harvest",
        eventText: "This year's harvest has been extraordinary. The granaries overflow and the peasants celebrate in the streets. The crown can tax the surplus or let the people enjoy their fortune.",
        choices: [
            {
                cid: 1,
                text: "Tax the surplus heavily",
                eftype: "money",
                ef: 800
            },
            {
                cid: 2,
                text: "Take a modest tithe",
                eftype: "money",
                ef: 300
            },
            {
                cid: 3,
                text: "Let the people keep it all",
                eftype: "PLoyal",
                ef: 15
            },
        ]
    },
    {
        id: 4,
        name: "Travelling Preacher",
        eventText: "A charismatic preacher has arrived in the capital, drawing enormous crowds with sermons that subtly undermine the authority of the established clergy. The church demands we silence him. The people adore him.",
        choices: [
            {
                cid: 1,
                text: "Expel the preacher from our lands",
                eftype: "CLoyal",
                ef: 12
            },
            {
                cid: 2,
                text: "Allow him to continue preaching",
                eftype: "PLoyal",
                ef: 10
            },
            {
                cid: 3,
                text: "Arrest him quietly",
                eftype: "CInfluence",
                ef: 8
            },
        ]
    },
    {
        id: 5,
        name: "Mercenary Contract",
        eventText: "A seasoned mercenary captain offers his company of 2,000 men for a seasonal contract. The cost is steep but they would considerably bolster our military strength in these uncertain times.",
        choices: [
            {
                cid: 1,
                text: "Hire the full company",
                eftype: "money",
                ef: -700
            },
            {
                cid: 2,
                text: "Hire a smaller detachment",
                eftype: "money",
                ef: -300
            },
            {
                cid: 3,
                text: "Decline — we cannot afford distractions",
                eftype: "Mil",
                ef: -20
            },
        ]
    },
    {
        id: 6,
        name: "Guild Petition",
        eventText: "The merchant guilds have banded together to petition for reduced tariffs on imported goods. They argue it will stimulate trade and grow the economy. The nobility fear cheaper imports will undercut their estate revenues.",
        choices: [
            {
                cid: 1,
                text: "Grant the tariff reduction",
                eftype: "BLoyal",
                ef: 15
            },
            {
                cid: 2,
                text: "Reject the petition outright",
                eftype: "NLoyal",
                ef: 10
            },
            {
                cid: 3,
                text: "Commission a study — delay the decision",
                eftype: "Admin",
                ef: -10
            },
        ]
    },
    {
        id: 7,
        name: "Plague in the East",
        eventText: "A deadly plague has broken out in our eastern provinces. Physicians are demanding emergency funding to contain the outbreak. Failure to act could see it spread to the capital.",
        choices: [
            {
                cid: 1,
                text: "Fund a full emergency response",
                eftype: "money",
                ef: -600
            },
            {
                cid: 2,
                text: "Quarantine the region and send minimal aid",
                eftype: "PLoyal",
                ef: -12
            },
            {
                cid: 3,
                text: "Ask the clergy to lead prayers and charity",
                eftype: "CInfluence",
                ef: 10
            },
        ]
    },
    {
        id: 8,
        name: "Scholar's Proposal",
        eventText: "A renowned scholar proposes the establishment of a royal academy of administration and law. It would be expensive to build but would produce capable administrators for generations to come.",
        choices: [
            {
                cid: 1,
                text: "Fund the academy in full",
                eftype: "money",
                ef: -400
            },
            {
                cid: 2,
                text: "Offer partial crown funding, seek noble patrons",
                eftype: "NInfluence",
                ef: 8
            },
            {
                cid: 3,
                text: "Reject it — an unnecessary luxury",
                eftype: "Admin",
                ef: -25
            },
        ]
    },
    {
        id: 9,
        name: "Peasant Uprising",
        eventText: "A village in the western reaches has risen up against their lord, citing brutal taxation and unjust treatment. The nobility demand swift military punishment. The peasants beg for the crown's mercy and justice.",
        choices: [
            {
                cid: 1,
                text: "Send troops to crush the uprising",
                eftype: "NLoyal",
                ef: 12
            },
            {
                cid: 2,
                text: "Investigate the lord's conduct and mediate",
                eftype: "PLoyal",
                ef: 18
            },
            {
                cid: 3,
                text: "Dismiss the peasants and fine the lord symbolically",
                eftype: "NInfluence",
                ef: -8
            },
        ]
    },
    {
        id: 10,
        name: "Foreign Ambassador",
        eventText: "An ambassador from a neighbouring kingdom arrives bearing gifts and a proposal for a trade agreement. The terms are favourable but require us to lower border controls — something our military advisors warn against.",
        choices: [
            {
                cid: 1,
                text: "Accept the trade agreement in full",
                eftype: "Eco",
                ef: 30
            },
            {
                cid: 2,
                text: "Negotiate stricter terms before signing",
                eftype: "Admin",
                ef: -10
            },
            {
                cid: 3,
                text: "Decline and maintain our border controls",
                eftype: "Mil",
                ef: 15
            },
        ]
    },
]

function triggerRandomEvent() {
    const event = randomEvents[Math.floor(Math.random() * randomEvents.length)];
    const menu = document.querySelector('.largestcentermenu');
    const title = document.querySelector('.LCM-TT');
    const content = document.querySelector('.LCM-CT');

    title.textContent = event.name;

    content.innerHTML = `
        <p class="event-text">${event.eventText}</p>
        <div class="event-choices">
            ${event.choices.map(choice => `
                <button class="event-choice-btn" onclick="applyChoice(${event.id}, ${choice.cid})">
                    ${choice.text}
                </button>
            `).join('')}
        </div>
    `;

    menu.style.display = 'flex';
}

function applyChoice(eventId, choiceId) {
    const event = randomEvents.find(e => e.id === eventId);
    const choice = event.choices.find(c => c.cid === choiceId);

    switch (choice.eftype) {
        case "money":        mv += choice.ef; break;
        case "Admin":        Admin += choice.ef; break;
        case "Eco":          Economics += choice.ef; break;
        case "Mil":          Mil += choice.ef; break;
        case "NLoyal":       Estates.find(e => e.Name === "Nobility").loyal += choice.ef; break;
        case "BLoyal":       Estates.find(e => e.Name === "Bourgeoisie").loyal += choice.ef; break;
        case "CLoyal":       Estates.find(e => e.Name === "Clergy").loyal += choice.ef; break;
        case "PLoyal":       Estates.find(e => e.Name === "Peasentry").loyal += choice.ef; break;
        case "NInfluence":   Estates.find(e => e.Name === "Nobility").influence += choice.ef; break;
        case "BInfluence":   Estates.find(e => e.Name === "Bourgeoisie").influence += choice.ef; break;
        case "CInfluence":   Estates.find(e => e.Name === "Clergy").influence += choice.ef; break;
    }

    updateValues();
    document.querySelector('.largestcentermenu').style.display = 'none';
}
