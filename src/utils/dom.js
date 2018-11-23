export function getStyle(el, name) {
    let style = el.style[name];

    if (!style) {
        style = getComputedStyle(el)[name];
    }

    return style;
}

export function findComponentUpward(context, componentName) {
    let target = undefined;

    while (!target && (context = context.$parent)) {
        if (context.$options.name === componentName) {
            target = context;
        }
    }

    return target;
}

export function findComponentsDownward(context, componentName) {
    return context.$children.reduce((component, child) => {
        if (child.$options.name === componentName) {
            component.push(child);
        }

        return component.concat(findComponentsDownward(child, componentName));
    }, []);
}
