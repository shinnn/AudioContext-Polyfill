# AudioContext-Polyfill

Polyfill for `AudioContext` and its parties on [Web Audio API](http://www.w3.org/TR/webaudio/ "Web Audio API W3C Working Draft")

## Installation

### Bower

Download via [Bower](http://bower.io/ "BOWER: A package manager for the web").

```
bower install --save audiocontext-polyfill
```

Or add `audiocontext-polyfill` to your app's `bower.json` and run `bower install`.

```json
{
  "dependencies": {
    "audiocontext-polyfill": "latest"
  }
{
```

### Standalone

[Download script file directly.](https://raw.github.com/shinnn/AudioContext-Polyfill/master/audiocontext-polyfill.js "view raw")

## Usage

Load `audiocontext-polyfill.js` before any scripts else related to the Web Audio API.

After this script loaded, you can use Web Audio API without any prefixes or deprecated methods.

For example, you can create audio context with `new AudioContext()` instead of `new webkitAudioContext()`, or play sound with `.start(0)` instead of old API `.noteOn(0)`.


### Supported API

[ctx]: <http://www.w3.org/TR/webaudio/#AudioContext-section>
[octx]: <http://www.w3.org/TR/webaudio/#OfflineAudioContext-section>
[gain]: <http://www.w3.org/TR/webaudio/#GainNode-section>
[delay]: <http://www.w3.org/TR/webaudio/#DelayNode-section>
[proc]: <http://www.w3.org/TR/webaudio/#ScriptProcessorNode>

| Clean API name                | Prefixed/Deprecated      |
| ----------------------------- | ------------------------ |
| [AudioContext][ctx]           | webkitAudioContext       |
| [OfflineAudioContext][octx]   | webkitOfflineAudioContext|
| start                         | noteOn                   |
| stop                          | noteOff                  |
| [createGain][gain]            | createGainNode           |
| [createDelay][delay]          | createDelayNode          |
| [createScriptProcessor][proc] | createJavaScriptNode     |

## License

Copyright (c) 2013 [Shinnosuke Watanabe](https://github.com/shinnn) All rights reserved.

Licensed under the [MIT license](http://opensource.org/licenses/mit-license.php).
