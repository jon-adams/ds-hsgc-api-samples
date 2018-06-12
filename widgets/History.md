# History

## 2.0.4 / 2018-06-10

* Lock down AngularJS 1.6 until the code can be upgrade to 1.7
* A few design tweaks related to the game date display
* Pass through API keys through to the DS API

## 2.0.3 / 2018-04-14

* Update AngularJS library
* Remove deprecated bower front-end dependency package management in favor of npm for both front- and back-end
* Various JavaScript cleanups
* Minor basketball layout fix for a particular width between tablet and mobile sizes

## 2.0.0 / 2017-11-17

* Clean up CSS (includes breaking changes)
  * Switch CSS class prefixes to `digital-scout`
  * More consistent use of CSS prefixes
  * Restructure some HTML
  * New default styling/layout example: `less/digitalscout.less`
* Significant performance improvements for the football drive chart during live games
* Show the "As Reported By" fields to the user

*Hot patch to 2.0.0 on 2017-12-12:*

* Various layout cleanups, especially for small screen devices

## 1.2.0 / 2017-09-16

* Enable SSL mode in development to better reflect final environment
* Enable "hsgc" (Digital Scout) identifier lookups
* Add top 'summary' card and team colors to logos
* Football "Drive Chart" draw performance improvements
* Player profile links
* Some API usage improvements
* No longer stops polling if any API response returns an error
* Library updates

*Hot patch to 1.2.0 on 2017-10-16:*

* Library updates
* Basketball shot chart friendly message when shot chart not available for business reasons

*Hot patch to 1.2.0 on 2017-11-06:*

* Hide Football Drive Chart tab when data not available

## 1.1.1 / 2016-11-02

* Better tab layouts for small screen devices
* Library updates

## 1.1.0 / 2016-06-22

* Switch to CloudFront CDN for loading assets
* Update grunt S3 SDK library to one that is still active

*Hot patch to 1.1.0 on 2016-11-2:*

* "Full box" view tab height looks better when text wraps (for example, the "Scoring Summary" football tab)
* Various Football "Game Leaders" formatting improvements
* Consistent "period" column width on the "Scoreboard"

## 1.0.9 / 2015-06-01

* Volleyball
* Minor fixes to the NFHS layout and to the example HTML files
* Compressed CSS files
* Show "Highlights" in the play-by-play
* Improved drive chart rendering/performance and bug fixes
* Support for 'final scores in first period' feature
* Enable the use of font logos when appropriate

## 1.0.8 / 2015-02-18

* Basketball
* Layout improvements and bug fixes

## 1.0.7 / 2014-10-06

* Add down and distance to play-by-play
* Group play-by-play by drive
* Add support for overtime in play-by-play
* CSS namespaces
* Generic third party support
* BREAKING: Include angular dependency inside primary javascript include
* BREAKING: Move to object based initializer

## 1.0.5 / 2014-08-18

* Adding additional functions to datacast directive model - getPrimaryColor, getTeamName, getTeamLogo, isFinal, isWinner

## 1.0.4 / 2014-07-28

* Added environment configuration.  Please call hsgcWidgets.init() to initialize.  By default this will point to the production environment.  If you would like to point to staging, use hsgcWidgets.init('stage').

## 1.0.3 / 2014-07-28

* Added new directive that allows inline templates for datacast properties
  * `<div datacast="unity game key" publisher="publisher key" sport="football"> ... </div>`
  * To render a score for a team, use the syntax `{{getScore('team key')}}`
* Added some basic logic for hiding widgets that data is unavailable for.  Please include nfhs.css or custom styles.

## 1.0.2 / 2014-07-16

* Changed all directives to require unity keys as attributes
  * `<div directiveType game="{unity game key}" publisher="{unity publisher key}"`
* Added new directive for a full box score (scoreboard, leaders, team stats, scoring summary, play-by-play, rosters, team stats)
  * Syntax: `<div full-box-score game="{unity game key}" publisher={unity publisher key}"`"
* Added changelog!
