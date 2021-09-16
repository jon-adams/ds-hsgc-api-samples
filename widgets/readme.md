# Digital Scout Widgets

[![Build Status](http://build.digitalscout.com/buildStatus/icon?job=GameCenterWidgetsBuild)](http://build.digitalscout.com/job/GameCenterWidgetsBuild)

## [CHANGELOG](https://github.com/playon/ds-hsgc-api-samples/blob/master/widgets/History.md)

## Usage

The easiest way to embed widgets is to drop the following `<IFRAME>` into your web site as raw HTML. (Though there are also other options. See below.)

You will have to add this `IFRAME` code once for every game you want to link to.

```html
    <!-- Change the width & height (optional), apiKey (required, see Data License below), and gameKey (which will be different for each game) -->
    <iframe width="940" height="1800" style="border: 0;"
        src="https://cdn.digitalscout.com/js/hsgc-widgets/2.1.0/football.html?apiKey=aaaaaaaa-bbbb-cccc-dddd-eee222444888&gameKey=123456789"></iframe>
```

In the URL, the `gameKey=123456789` is the Digital Scout game ID (the number part). You can find it in the Digital Scout [Dashboard](https://dashboard.digitalscout.com/dashboard/?utm_source=digitalscout&utm_medium=github&utm_campaign=widgets) by clicking the **Edit** game button and copying the ID from the end of the URL.

> :warning: The `gameKey` is different for each game, so make sure to update it!

The HTML page (`football.html` in the above example) can be changed to `football.html`, `basketball.html`, or `volleyball.html`. Or, you can instead make your own based on the [examples](./examples) provided in this repository.

The `width` should be set to whatever fits best with your site width and for inside the content area you are placing the `<IFRAME>`.

The `height` can be whatever you want; it will scroll if too short, or leave white space if too long. Each game is different so you can't really predict a perfect size for the height.

The `apiKey` is customized just for you when you purchase a data license. (Required for using the widgets. Contact sales at digitalscout.com.) Make sure to include it in every request like this so that the box score will load correctly.

Feel free to place any logos, sponsorships, or ads before or after the `<IFRAME>` code as you see fit. As long as they fit within the Digital Scout data license agreement terms. (Which basically boils down to 'no inappropriate ads'. The complete agreement is of course available when you purchase the data license from us, or ask our Sales team for a copy if want to go through it in more detail now.)

Some additional tech notes:

* `1200px` is the best breakpoint for the widget `width`, as it lets the views and labels expand. But that width may also be shrunk down if necessary, so it will work well for mobile devices too.
* If you customize the widgets and use your own HTML instead of an `<IFRAME>` (see the [examples](./examples)), you should implement a responsive design without having to set a fixed width and height for the `<IFRAME>`. But that takes a developer on your side to be able to integrate it with your site more directly, without the `<IFRAME>` but by including the direct JavaScript links and AngularJS-tagged elements. You are welcome to do that if you have the ability.
* The `style` in this example `<IFRAME>` code is optional; feel free to style the outer container as you wish. In most cases you won't want a border, so we added that setting in the example for you.

## Examples

See the `examples` directory for what kind of code you would need to use to embed these widgets in an `IFRAME` anywhere on the web.

The examples are available for display at `https://cdn.digitalscout.com/js/hsgc-widgets/VERSION/EXAMPLE.html` where `VERSION` is the current version as specified in `package.json` and `EXAMPLE.html` is the one of the example HTML files in the `examples/` directory in this repository. For example, [`https://cdn.digitalscout.com/js/hsgc-widgets/2.1.0/minibox.html`](https://cdn.digitalscout.com/js/hsgc-widgets/2.1.0/minibox.html)

Most of the examples link to a specific game for demonstration. Most of the common examples, like `football.html`, `basketball.html`, and `volleyball.html` do not. Instead, you need to pass a `gameKey` like you need to when you reference the specific game you want to show.

Here are some examples you can use in this case:

* [`basketball.html?apiKey=your-api-key-goes-here&gameKey=9105703`](https://cdn.digitalscout.com/js/hsgc-widgets/2.1.0/basketball.html?gameKey=9105703)
* [`football.html?apiKey=your-api-key-goes-here&gameKey=8284106`](https://cdn.digitalscout.com/js/hsgc-widgets/2.1.0/football.html?gameKey=8284106)
* [`volleyball.html?apiKey=your-api-key-goes-here&gameKey=8267306`](https://cdn.digitalscout.com/js/hsgc-widgets/2.1.0/volleyball.html?gameKey=8267306)

## License

This code is licensed under the MIT license (see the README at the top level of this repository for more info) but access to the API data requires a separate license. So use and modify this code as allowed in the MIT license, but don't load any data from **api.digitalscout.com** without a written agreement with Digital Scout, LLC.

## Development Requirements

1. **nodejs** v14.15+
1. **npm**
1. **grunt** (`npm install -g grunt-cli`)

## Usage

### Running locally

1. Download this repository, and navigate to the `widgets` directory
1. Ensure `nodejs` is installed (preferably by `nvm`)
1. Ensure npm is up to date with `npm update -g npm`
1. Install `grunt` globally: `npm install grunt yarn -g`
1. Run `yarn` to install the project dependencies
   1. Note: Windows Powershell can't run some special syntax paperjs `0.12.11` uses, so you need to use git bash or similar, by running this at the command line `C:\Program Files\git\bin\bash.exe` then running `yarn` from there. (See [paperjs issue #1833](https://github.com/paperjs/paper.js/issues/1833) for more on the issue.)
1. Create a new file in the main `widgets` directory called `.grunt-aws`. The file should contains a JSON object with the properties `key` and `secret`. For local testing, it can have fake data, and does *not* need access to the S3. For example, for local testing this will work: `{ "key": "your_key", "secret": "your_secret" }`
1. To build: run `grunt` which will create a minified JavaScript file at `build/hsgc-widgets.min.js`, as well as styled and un-styled, example HTML pages
1. To test, go to [`https://localhost:3001/`](https://localhost:3001/) and select an appropriate HTML file to test—you will have to accept the self-signed certificate in your browser
1. To automatically watch for file changes and rebuild, run `grunt watch` (or use the default `grunt` task which calls the same `watch` task)

### Deploying

1. If it does not yet exist, create a new file called `.grunt-aws`. The file should contains a JSON object with the properties `key` and `secret` that have access to the `cdn.hsgamecenter.com` S3 bucket. Example: `{ "key": "your_key", "secret": "your_secret" }`
1. If any images were added or modified, run `grunt optimize` to losslessly compress all files in the `/src/img` directory
1. Run `grunt deploy`.  This will copy all files from the build directory to the cdn.hsgamecenter.com S3 bucket with the path `/js/ds-widgets/{version from package.json}/`. The assets in this bucket should then be accessed via the CloudFront cache of that bucket via `https://cdn.digitalscout.com/js/ds-widgets/{version from package.json}/...`.

#### Architecture

The high-level view of the system is that grunt compiles the code down into a handful of resource files. Then a simple HTML include of jQuery, the compiled JS output, and the compiled CSS output is added to a basic HTML body with a few `<div>`s with AngularJS attribute directives and an inline `<script>` block to initialize the widgets and you're done.

The bulk of the code you will probably need to modify for development is in less files for styling, the `src/js/directives` or `src/js/filters` for code, and `src/templates` for the HTML templates.

#### Other important files

* For new sports, update `src/js/directives/datacast.js`, `src/js/services/hsgc-api.js`, `src/templates/gameSummary.html`, and `src/templates/fullBoxScore.html` to allow and implement the new sport, in addition to any new directives and templates required for that sport
* Info about configuration options are available at `src/js/services/hsgcConfig.js`

#### Debug logging

AngularJS provides the `$logProvider` for logging purposes. Inject `'$log'` into a directive/service/etc and use `$log.debug('message ' + obj.someValue)` which will then output to the standard `console.log`.

Other levels can be used (info, error, warn) but are generally discouraged since they will be put in the console in production. Why won't DEBUG level? Because the HSGC widget `app.js` file configures DEBUG messages to not display.

To enable DEBUG messages to display, *temporarily* change this configuration to `$logProvider.debugEnabled(true);`. Only do this during development; *do not commit this change* so that production will continue to suppress these logs.
