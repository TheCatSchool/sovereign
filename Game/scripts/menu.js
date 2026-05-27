function openMenu(menuNumber) {
    const menu = document.querySelector('.largecentermenu');
    const title = document.querySelector('.LCM-T');
    const content = document.querySelector('.LCM-C');

    const menuNames = {
        1: 'State-laws',
        2: 'Estates',
        3: 'Stability',
        4: 'Economics'
    };

    menu.style.display = 'flex';
    title.textContent = menuNames[menuNumber];

    if (menuNumber === 1) {
        buildLawsMenu(content);
    } else {
        const placeholderContent = {
            2: 'Manage the noble estates, clergy, and burghers.',
            3: 'Monitor the stability of your realm.',
            4: 'Oversee trade, taxation, and the treasury.'
        };
        content.textContent = placeholderContent[menuNumber];
    }
    if (menuNumber === 2) {
        buildEstatesMenu(content);
    }
}

function buildLawsMenu(container) {
    const allMods = [...AdminpointgainMods, ...EcopointgainMods, ...MilpointgainMods];
    const lawMods = allMods.filter(mod => mod.type === "law");

    container.innerHTML = '';

    lawMods.forEach(mod => {
        const btn = document.createElement('button');
        btn.className = 'law-btn';
        btn.id = 'law-btn-' + mod.id;
        btn.textContent = mod.name;
        btn.onclick = () => {
            setFocus(mod.id);
            updateLawButtons();
        };
        container.appendChild(btn);
    });

    updateLawButtons();
}

function updateLawButtons() {
    const allMods = [...AdminpointgainMods, ...EcopointgainMods, ...MilpointgainMods];
    const lawMods = allMods.filter(mod => mod.type === "law");

    lawMods.forEach(mod => {
        const btn = document.getElementById('law-btn-' + mod.id);
        if (!btn) return;
        btn.classList.toggle('law-btn-active', mod.Active === 1);
    });
}
function closeMenu() {
    document.querySelector('.largecentermenu').style.display = 'none';
}

function buildEstatesMenu(container) {
    container.innerHTML = '';
    container.style.flexDirection = 'column';
    container.style.overflowY = 'auto';

    Estates.forEach(estate => {
        const box = document.createElement('div');
        box.className = 'estate-box';

        box.innerHTML = `
            <div class="estate-header">
                <span class="estate-name">${estate.Name}</span>
            </div>
            <div class="estate-stats">
                <div class="estate-stat">
                    <span class="stat-label">Loyalty</span>
                    <div class="stat-bar-bg">
                        <div class="stat-bar loyalty-bar" style="width: ${estate.loyal}%"></div>
                    </div>
                    <span class="stat-val">${estate.loyal}</span>
                </div>
                <div class="estate-stat">
                    <span class="stat-label">Influence</span>
                    <div class="stat-bar-bg">
                        <div class="stat-bar influence-bar" style="width: ${estate.influence}%"></div>
                    </div>
                    <span class="stat-val">${estate.influence}</span>
                </div>
                <div class="estate-stat">
                    <span class="stat-label">Privileges</span>
                    <span class="stat-val">${estate.Privleges.length > 0 ? estate.Privleges.join(', ') : 'None'}</span>
                </div>
            </div>
        `;

        container.appendChild(box);
    });
}