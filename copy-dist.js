var cpr = require('cpr');

let copySource = () => {
    cpr('src', 'dist/src', {
        deleteFirst: false,
        overwrite: true,
        confirm: false
    }, function(err, files) {
        if (err) {
            console.error(err);
            return;
        }
    });
};

let copyAssets = (cb) => {
    cpr('.', 'dist', {
        deleteFirst: false,
        overwrite: true,
        confirm: false,
        filter: (item) => {
            return !/node_modules/.test(item) && /.*\.md/.test(item);
        }
    }, function(err, files) {
        if (err) {
            console.error(err);
            return;
        }
        copySource();
    });
};

copyAssets();