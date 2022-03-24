const firstUpper = text => {
    if(!text) return '';
    else {
        text = text.trim();
        text = text.toLowerCase();
        text = text.charAt(0).toUpperCase() + text.slice(1);
    }
    return text;
}

module.exports.firstUpper = firstUpper;