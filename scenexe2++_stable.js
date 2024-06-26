(function() {
    const self = document.querySelector.bind(document);
    self('body').insertAdjacentHTML('afterbegin', `
            <div id="star_counter">
                <span id="star_counter_text">0</span>
                <span id="star_counter_username">Unknown</span>
            </div>
            <div id="settings_background" class="panel" style="opacity: 0; pointer-events: none;"></div>
            <div id="settings_menu" style="top: -100%;"></div>
            <h1 id="settings_header" class="radiantColor">Settings</h1>
            <hr id="settings_divider_top">
            <div id="settings_uncap">
              <label id="settings_uncap_text">Uncap Slider Limits</label>
              <label class="switch_settings">
              <input type="checkbox">
              <span class="slider_settings"></span>
            </label>
            </div>
            <div id="settings_pick_text_color">
              <label id="settings_pick_text_color_text">Change Text Color</label>
              <input id="settings_pick_text_color_value" type="text" placeholder="Color Value">
            </div>
            <div id="settings_pick_text_border_color">
              <label id="settings_pick_text_border_color_text">Change Text Border Color</label>
              <input id="settings_pick_text_border_color_value" type="text" placeholder="Border Color Value">
            </div>
            <hr id="settings_divider_bottom" style="width:100%;position:absolute;bottom:80px;left:50%;transform:translate(-50%,0);">
            <button id="settings_back">BACK</button>
            <style>
               .switch_settings {
                    position:relative;
                    display:inline-block;
                    width:60px;
                    height:34px
                }
                
                .switch_settings input {
                    opacity:0;
                    width:0;
                    height:0
                }
                
                .slider_settings {
                    border-radius:34px;
                    position:absolute;
                    cursor:pointer;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    background-color:#ccc;
                    -webkit-transition:.4s;
                    transition:.4s
                }
                
                .slider_settings:before {
                    border-radius:50%;
                    position:absolute;
                    content:"";
                    height:26px;
                    width:26px;
                    left:4px;
                    bottom:4px;
                    background-color:#fff;
                    -webkit-transition:.4s;
                    transition:.4s
                }
                
                input:checked+.slider_settings {
                    background-color:#2196F3
                }

                input:focus+.slider_settings {
                    box-shadow:0 0 1px #2196F3
                }

                input:checked+.slider_settings:before {
                    -webkit-transform:translateX(26px);
                    -ms-transform:translateX(26px);
                    transform:translateX(26px)
                }

                #settings_uncap,#settings_pick_text_color,#settings_pick_text_border_color {
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    -webkit-text-size-adjust:100%;
                    -webkit-tap-highlight-color:#0000;
                    line-height:1.5;
                    -webkit-font-smoothing:antialiased;
                    font-size:1vmin;
                    color:#fff;
                    font-family:Roboto;
                    font-weight:700;
                    text-align:center;
                    box-sizing:border-box;
                    margin-bottom:.5vmin;
                    margin-top:.5vmin
                }

                #settings_uncap_text,#settings_pick_text_color_text,#settings_pick_text_border_color_text {
                    -webkit-text-size-adjust:100%;
                    -webkit-tap-highlight-color:#0000;
                    line-height:1.5;
                    -webkit-font-smoothing:antialiased;
                    color:#fff;
                    box-sizing:border-box;
                    font-size:2vmin;
                    font-family:Roboto;
                    font-weight:400;
                    margin:1vmin;
                    text-align:center;
                    margin-bottom:.2vmin;
                    margin-top:.2vmin
                }
                #settings_pick_text_color_value,#settings_pick_text_border_color_value {
                    font-family: Roboto;
                    user-select: none;
                    pointer-events: all;
                    border-radius: 5px;
                    font-size: 2vmin;
                    width: 235px;
                    height: 27px;
                    padding: 3px;
                    text-align:center;
                    background-color: rgba(15, 15, 15, 0.75);
                    color: rgb(155, 155, 155);
                    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0.4vmin;
                    border: none;
                    outline: none;
                }
                #settings_pick_text_border_color_value {
                   font-size: 1.75vmin;
                }
                #settings_divider_top {
                    -webkit-text-size-adjust:100%;
                    -webkit-tap-highlight-color:#0000;
                    line-height:1.5;
                    -webkit-font-smoothing:antialiased;
                    font-size:1vmin;
                    color:#fff;
                    font-family:Roboto;
                    font-weight:700;
                    text-align:center;
                    box-sizing:content-box;
                    overflow:visible;
                    border:0;
                    height:1vmin;
                    width:100%;
                    margin-bottom:.5vmin;
                    margin-top:.5vmin;
                    border-top:.2vmin solid #fff
                }

                #settings_back {
                    visibility:visible;
                    pointer-events:all;
                    transform-origin:0 0;
                    font-family:Roboto;
                    user-select:none;
                    outline:none;
                    background:#0003;
                    border:5px solid #0003;
                    border-radius:8px;
                    display:inline;
                    cursor:pointer;
                    position:absolute;
                    bottom:20px;
                    left:50%;
                    transform:translate(-50%,0);
                    font-weight:700;
                    color:#fff;
                    font-size:30px;
                    padding-top:5px;
                    padding-left:10px;
                    padding-right:10px
                }

                #settings_menu {
                    visibility:visible;
                    pointer-events:all;
                    transform-origin:0 0;
                    font-family:Roboto;
                    user-select:none;
                    outline:none;
                    position:absolute;
                    left:50%;
                    width:800px;
                    height:calc(75% - 200px);
                    transform:translate(-50%,-50%);
                    background:#000000b3;
                    border:5px solid #0003;
                    border-radius:9px;
                    transition:top .5s ease;
                    top:-100%
                }

                #settings_header {
                    -webkit-text-size-adjust:100%;
                    -webkit-tap-highlight-color:#0000;
                    line-height:1.5;
                    -webkit-font-smoothing:antialiased;
                    color:#fff;
                    box-sizing:border-box;
                    font-size:3.5vmin;
                    text-align:center;
                    font-family:Roboto;
                    font-weight:700;
                    margin-bottom:.5vmin;
                    margin-top:.5vmin
                }

                #star_counter_text,#star_counter_username {
                    pointer-events:inherit;
                    visibility:visible;
                    color:#fff;
                    text-shadow:-3px -3px 0 #000,0 -3px 0 #000,3px -3px 0 #000,3px 0 0 #000,3px 3px 0 #000,0 3px 0 #000,-3px 3px 0 #000,-3px 0 0 #000,-3px -2px 0 #000,-3px 2px 0 #000,-2px 3px 0 #000,2px 3px 0 #000,3px 2px 0 #000,3px -2px 0 #000,2px -3px 0 #000,-2px -3px 0 #000;
                    font-size:50px;
                    font-weight:800;
                    white-space:nowrap;
                    transform-origin:0 0;
                    font-family:Roboto;
                    user-select:none;
                    outline:none;
                    position:fixed;
                    top:0;
                    right:0;
                    margin-top:75px;
                    margin-right:20px
                }

                #star_counter_username {
                    margin-top:25px
                }

                #settings_background {
                    visibility:visible;
                    transform-origin:0 0;
                    font-family:Roboto;
                    user-select:none;
                    outline:none;
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    background:#00000080;
                    transition:opacity .5s ease;
                    opacity:0;
                    pointer-events:none
                }

                #star_counter_image {
                    position:fixed;
                    top:0;
                    right:0;
                    margin-top:75px;
                    margin-right:60px;
                    width:55px;
                    height:55px
                }

                #view_account_button {
                    border:none;
                    border-radius:.5vmin;
                    background-color:#0092c3;
                    box-shadow:0 0 0 .4vmin #000;
                    position:fixed;
                    top:0;
                    right:0;
                    margin-top:140px;
                    margin-right:20px;
                    width:60px;
                    height:60px
                }

                #view_account_image {
                    position:fixed;
                    top:0;
                    right:0;
                    margin-top:140px;
                    margin-right:20px;
                    width:60px;
                    height:60px
                }

                #settings_button {
                    border:none;
                    border-radius:.5vmin;
                    background-color:#888;
                    box-shadow:0 0 0 .4vmin #000;
                    position:fixed;
                    top:0;
                    right:0;
                    margin-top:140px;
                    margin-right:100px;
                    width:60px;
                    height:60px
                }

                #settings_image {
                    position:fixed;
                    top:0;
                    right:0;
                    margin-top:140px;
                    margin-right:100px;
                    width:60px;
                    height:60px
                }
        </style>
    `);
    var overlay1 = document.querySelector("#overlay1");
    var debugMenu = document.querySelector("#debugSlide");
    var debugSliders = debugMenu.querySelectorAll("input");
    var deathScreen = document.querySelector("#respawnPanel");
    var deathReason = document.querySelector("#killer");
    var modals = document.querySelector("#modals > div");
    var starsElement = document.querySelector("#accountContent > div:nth-child(5)");
    var leaderboardEntries = document.querySelector("#leaderboardEntries");
    var accountName = document.querySelector("#accountContent > div:nth-child(5)");
    var tankScoreElement = document.querySelector("#tankScoreDisplay");
    var starCounter = document.querySelector("#star_counter");
    var starCounterUsername = document.querySelector("#star_counter_username");
    var starCounterText = document.querySelector("#star_counter_text");
    var starCounterImage = document.createElement('img');
    var viewAccountButton = document.createElement('button');
    var viewAccountImage = document.createElement('img');
    var settingsImage = document.createElement('img');
    var settingsButton = document.createElement('button');
    var settingsBackground = document.querySelector("#settings_background");
    var settingsMenu = document.querySelector("#settings_menu");
    var settingsBackButton = document.querySelector("#settings_back");
    var settingsHeader = document.querySelector('#settings_header');
    var settingsDividerTop = document.querySelector('#settings_divider_top');
    var settingsDividerBottom = document.querySelector('#settings_divider_bottom');
    var settingsUncap = document.querySelector('#settings_uncap');
    var settingsUncapSwitch = document.querySelector('#settings_uncap input[type="checkbox"]');
    var settingsTextColor = document.querySelector('#settings_pick_text_color');
    var settingsTextColorInput = document.querySelector('#settings_pick_text_color input[type="text"]');
    var settingsTextBorderColor = document.querySelector('#settings_pick_text_border_color');
    var settingsTextBorderColorInput = document.querySelector('#settings_pick_text_border_color input[type="text"]');

    var regularAccountMenu = document.querySelector("#accountFull");
    var accountMenuDarkness = document.querySelector("#accountDark");
    var tankHealth = null;
    var tankKills = null;
    var tankScore = null;
    var totalStarsBeforeDeath = null;
    var tankKillsBeforeDeath = null;
    var playtimeBeforeDeath = null;

    starCounterText.innerText = "0";
    settingsHeader.textContent = 'Settings';

    starCounterImage.src = 'https://scenexe.io/assets/star_small.png';
    starCounterImage.id = 'star_counter_image';

    viewAccountButton.id = 'view_account_button';

    settingsImage.src = 'https://scenexe.io/assets/button_settings.png';
    settingsImage.id = 'settings_image';

    settingsButton.id = 'settings_button';

    viewAccountImage.src = 'https://scenexe.io/assets/button_account.png';
    viewAccountImage.id = 'view_account_image';

    document.addEventListener('keydown', (event) => {
        if (overlay1.style.visibility === "visible") {
            if (event.key === "l" && settingsMenu.style.top === '-100%') {
                settingsMenu.style.top = '50%';
            } else if (event.key === "l" && settingsMenu.style.top === '50%') {
                settingsMenu.style.top = '-100%';
            }
        }
    });

    modals.appendChild(settingsBackground);
    modals.appendChild(settingsMenu);
    deathScreen.appendChild(settingsButton);
    deathScreen.appendChild(viewAccountButton);
    deathScreen.appendChild(starCounter);
    starCounter.appendChild(starCounterUsername);
    starCounter.appendChild(starCounterText);
    starCounter.appendChild(starCounterImage);
    settingsButton.appendChild(settingsImage);
    settingsMenu.appendChild(settingsBackButton);
    settingsMenu.appendChild(settingsHeader);
    settingsMenu.appendChild(settingsDividerTop);
    settingsMenu.appendChild(settingsDividerBottom);
    settingsMenu.appendChild(settingsUncap);
    settingsMenu.appendChild(settingsTextColor);
    settingsMenu.appendChild(settingsTextBorderColor);
    viewAccountButton.appendChild(viewAccountImage);

    viewAccountButton.addEventListener('click', function() {
        if (regularAccountMenu.style.top === '-100%') {
            regularAccountMenu.style.top = '50%';
            accountMenuDarkness.style.opacity = '1';
            accountMenuDarkness.style.pointer_events = 'all';
        } else if (regularAccountMenu.style.top === '50%') {
            regularAccountMenu.style.top = '-100%';
            accountMenuDarkness.style.opacity = '0';
            accountMenuDarkness.style.pointer_events = 'none';
        }
    });
    settingsButton.addEventListener('click', function() {
        settingsMenu.style.top = '50%';
        settingsBackground.style.opacity = '1';
        settingsBackground.style.pointerEvents = 'all';
    });
    settingsBackButton.addEventListener('click', function() {
        settingsMenu.style.top = '-100%';
        settingsBackground.style.opacity = '0';
        settingsBackground.style.pointerEvents = 'none';
    });

    settingsUncapSwitch.addEventListener('change', function() {
        debugSliders.forEach(slider => {
            var options = debugMenu.querySelectorAll('option');
            options.forEach(option => {
                if (option.value === "10") {
                    option.value = "25";
                } else if (option.value === "40") {
                    option.value = "50"
                } else if (option.value === "70") {
                    option.value = "75"
                }
            });
            if (slider.min != "0") {
                slider.min = "0";
                slider.max = "200";
            } else if (slider.min = "0") {
                slider.min = "10";
                slider.max = "100";
            }
        });
    });
function replaceColors(input, newColor) {
    var colorRegex = /#(?:[0-9a-fA-F]{3}){1,2}|rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g;
    var result = input.replace(colorRegex, function(match) {
        return newColor;
    });

    return result;
}
    function changeTextColor(value, type) {
        overlay1.querySelectorAll("div").forEach(div => {
            if (div.parentNode.id !== 'debugSlide' && div.parentNode.id !== 'debugText' && div.id !== 'debugSlide') {
                if (type === "textShadow") {
                   var textshadow = getComputedStyle(div).getPropertyValue('text-shadow');
                   var result = replaceColors(textshadow,value);
                   console.log(result);
                   div.style[type] = result
                }
                if (value === "radiant" || value === "Radiant") {
                    div.classList.add('radiantColor');
                } else if (value === "default" || value === "Default") {
                    if (div.classList.contains("radiantColor")) {
                        div.classList.remove("radiantColor")
                    }
                    div.style[type] = `rgb(255,255,255)`;
                    console.log("will be implemented later, sowwy 3:");
                } else if (value.includes("rgb(")) {
                    if (div.classList.contains("radiantColor")) {
                        div.classList.remove("radiantColor")
                    }
                    var v = value.replace("rgb(", "").replace(")", "");
                    var rgbValues = v.split(",").map(val => parseInt(val.trim()));
                    var r = rgbValues.length > 0 ? rgbValues[0] : 0;
                    var g = rgbValues.length > 1 ? rgbValues[1] : 0;
                    var b = rgbValues.length > 2 ? rgbValues[2] : 0;
                    div.style[type] = `rgb(${r},${g},${b})`;
                }
            }
        });
    }
    settingsTextColorInput.addEventListener('input', function() {
        console.log(settingsTextColorInput.value);
        changeTextColor(settingsTextColorInput.value, 'color');
    });

    settingsTextBorderColorInput.addEventListener('input', function() {
        console.log(settingsTextBorderColorInput.value);
        changeTextColor(settingsTextBorderColorInput.value, 'textShadow');
    });

    function retrieveData(accountData) {
        return fetch(accountData)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    function resetTankScore() {
        var tankScoreElement = document.querySelector("#tankScoreDisplay");
        var tankScoreHTML = tankScoreElement.innerHTML;
        var scoreLines = tankScoreHTML.split('<br>');
        scoreLines.forEach(line => {
            if (line.includes("Score:")) {
                const parts = line.split(':');
                tankScore = parts[1].trim();
            }
        })
    }

    function resetStats() {
        var previousAccountData = starsElement.innerHTML;
        var starLines = previousAccountData.split('<br>');
        starLines.forEach(line => {
            if (line.includes("Stars:")) {
                const parts = line.split(':');
                totalStarsBeforeDeath = parseInt(parts[1].trim());
            }
        });
    }

    function checkAccountContent() {
        starsElement = document.querySelector("#accountContent > div:nth-child(5)");
        accountName = document.querySelector("#accountContent > div:nth-child(5)");
        if (starsElement && accountName) {
            var username = getUsername(accountName.innerHTML.split('<br>')[0]);
            starCounterUsername.innerText = username;
            var accountData = "https://scenexe2.io/account?u=" + username;
            var data = retrieveData(accountData);
            console.log("Found accountContent!");
            console.log("Current user: " + username);
            retrieveData(accountData)
                .then(data => {
                    totalStarsBeforeDeath = data.stars;
                    starCounterText.innerText = data.stars;
                    playtimeBeforeDeath = data.timePlayed;
                    tankKillsBeforeDeath = data.tankKills;
                })
                .catch(error => {
                    console.error('Error occurred:', error);
                });
            setupobserver(accountData);
        } else {
            setTimeout(checkAccountContent, 500);
        }
    }

    function getUsername(deathMessage) {
        var matches = deathMessage.match(/Username: (.+)/);
        return matches ? matches[1] : "Unknown";
    }
function debounce(callback, delay) {
    let timerId;
    return function () {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback.apply(this, arguments);
        }, delay);
    };
}
    function setupobserver(accountData) {
        const observer1 = new MutationObserver((mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    if (mutation.target.style.top === "0px") {
                        retrieveData(accountData)
                            .then(data => {
                                resetTankScore();
                                starCounterText.style.opacity = "1";
                                starCounterText.innerText = data.stars;
                                starCounterUsername.style.opacity = "1";
                                var playtime = data.timePlayed - playtimeBeforeDeath;
                                var hours = Math.floor(playtime / 3600);
                                var minutes = Math.floor((playtime % 3600) / 60);
                                var seconds = playtime % 60;
                                hours = String(hours).padStart(2, '0');
                                minutes = String(minutes).padStart(2, '0');
                                seconds = String(seconds).padStart(2, '0');
                                playtime = hours + ":" + minutes + ":" + seconds;
                                tankKills = data.tankKills;
                                var starsGained = data.stars - totalStarsBeforeDeath;
                                var totalKills = tankKills - tankKillsBeforeDeath;
                                deathReason.innerHTML += "<br><br>Time Played: " + playtime + "<br>Score: " + tankScore + "<br>Kills: " + totalKills + "<br>Stars Gained: " + starsGained;
                                // reset stats for next run
                                resetStats();
                                playtimeBeforeDeath = data.timePlayed;
                                tankKillsBeforeDeath = data.tankKills;
                                totalStarsBeforeDeath = data.stars;
                            })
                            .catch(error => {
                                console.error('Error occurred:', error);
                            });
                    }
                }
            }
        });
        const observer2 = new MutationObserver((mutationsList, observer) => {
            mutationsList.forEach(mutation => {
                if (mutation.attributeName === 'style') {
                    const visibility = overlay1.style.visibility;
                    if (visibility === 'visible') {
                        starCounterText.style.opacity = "0";
                        starCounterUsername.style.opacity = "0";
                        retrieveData(accountData).then(data => {
                            resetTankScore();
                            resetStats();
                            playtimeBeforeDeath = data.timePlayed;
                            tankKillsBeforeDeath = data.tankKills;
                            totalStarsBeforeDeath = data.stars;
                        }).catch(error => {
                            console.error('Error occurred:', error)
                        });
                    }
                }
            });
        });
        const observer3 = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const starCounterTextRect = entry.contentRect;
                const newMarginRight = starCounterTextRect.width + 30;
                const starCounterImage = document.querySelector("#star_counter_image");
                if (starCounterImage) {
                    starCounterImage.style.marginRight = `${newMarginRight}px`;
                }
            }
        });

const observer4 = new MutationObserver((mutationsList, observer) => {
    for (var mutation of mutationsList) {
        mutation.addedNodes.forEach(node => {
            if (node.textContent.trim().length > -1) {
                changeTextColor(settingsTextColorInput.value, 'color');
                changeTextColor(settingsTextBorderColorInput.value, 'textShadow');
            }
        });
    };
});
        const observerConfig = {
            attributes: true,
            attributeFilter: ['style'],
            attributeOldValue: true,
        };

        observer1.observe(deathScreen, observerConfig);
        observer2.observe(overlay1, observerConfig);
        observer3.observe(starCounterText);
        observer4.observe(leaderboardEntries, {subtree: true, childList: true});
    }
    checkAccountContent();
})();
