"use strict";

(function () {
    
// Default div class for button
const button = '.dark';
// ID for <style>
const styleID = 'color-switcher';
// name for localStorage item
const storageItem = 'dark';

/* vars for setting dark theme color */
const backgroundColor = '#212529';
const fontColor = '#f4f3ef';

const divs = {
    'body': {
        'background-color': backgroundColor,
        'color': fontColor
    },
    '.container': {
        'background-color': 'red',
        'border': '1px solid yellow',
        'width': '200px'
    }
}

// Return to black if it was be chose
if (localStorage.getItem(storageItem)) {
    switchToBlack();
}


// Listiner for button

document.addEventListener('DOMContentLoaded', function () {
    let element = document.querySelector(button);
    element.addEventListener('click', function () {
        let item = localStorage.getItem(storageItem);
        if (parseInt(item) === 1) {
            switchToDefault();
        } else {
            switchToBlack();
        }
    });
});

// function for switching to black theme
function switchToBlack() {

    localStorage.setItem(storageItem, 1);

    // Change background colors
    let elements = '';
    for (let [key, value] of Object.entries(divs)) {
        elements += key + '{';
        // Get properties
        for (let [attribute, properties] of Object.entries(value)) {
            elements += attribute + ':' + properties + ' !important;';
        }
        elements += '}';
    }

    let style = document.createElement('style');
    style.setAttribute('id', styleID);
    document.head.append(style);
    style.innerHTML = elements;
    
}

// Return to default theme
function switchToDefault() {
    const element = document.querySelector('#' + styleID);
    localStorage.removeItem(storageItem);
    element.remove();
}
})();
