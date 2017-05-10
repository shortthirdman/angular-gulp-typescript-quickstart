/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'libs/node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/platform-server': 'npm:@angular/platform-server/bundles/platform-server.umd.js',
			'@angular/platform-webworker': 'npm:@angular/platform-webworker/bundles/platform-webworker.umd.js',
			'@angular/platform-webworker-dynamic': 'npm:@angular/platform-webworker-dynamic/bundles/platform-webworker-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
            'primeng': 'npm:primeng',
            'primeui': 'npm:primeui/primeui-ng-all.min.js',
            'clipboard': 'npm:clipboard/dist/clipboard.js',
            'ng2-translate': 'npm:ng2-translate',
			'ng-lightning/ng-lightning': 'npm:ng-lightning/bundles/ng-lightning.umd.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            primeng: {
                defaultExtension: 'js'
            },
            'angular-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ng2-translate': {
				main: 'ng2-translate.js',
				defaultExtension: 'js'
			},
			'ng-lightning/ng-lightning': {
				defaultExtension: 'js'
			}
        }
    });
})(this);