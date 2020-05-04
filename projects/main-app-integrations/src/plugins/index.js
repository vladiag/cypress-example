module.exports = (on, config) => {
    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
            launchOptions.args.push('--disable-dev-shm-usage');
            launchOptions.args.push('--window-size=1440,1200');

            return launchOptions;
        }

        return launchOptions;
    });
};
