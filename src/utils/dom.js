export function getStyle(el, name) {
    let style = el.style[name];

    if (!style) {
        style = getComputedStyle(el)[name];
    }

    return style;
}
