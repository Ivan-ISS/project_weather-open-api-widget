function setThemeStyleVar(theme: string) {
    const root = document.querySelector(':root') as HTMLElement;
    const components = [
        'bodyBackground',
        'componentBackground',
        'cardBackground',
        'switchBackground',
        'errorBackground',
        'shadow',
        'textColor',
        'textError',
    ];

    components.forEach((component) => {
        root.style.setProperty(`--${component}Default`, `var(--${component}${theme})`);
    });
}

export { setThemeStyleVar };
