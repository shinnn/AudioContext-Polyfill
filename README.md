# AudioContext-Polyfill

[![Bower version](https://badge.fury.io/bo/audiocontext-polyfill.png)](http://badge.fury.io/bo/audiocontext-polyfill)
[![devDependency Status](https://david-dm.org/shinnn/Audiocontext-polyfill/dev-status.png)](https://david-dm.org/shinnn/Audiocontext-polyfill#info=devDependencies)

Polyfill for `AudioContext` and its parties on [Web Audio API](http://www.w3.org/TR/webaudio/ "Web Audio API W3C Working Draft")

## Installation

### Bower

Download via [Bower](http://bower.io/ "BOWER: A package manager for the web").

```
bower install --save audiocontext-polyfill
```

Or add `audiocontext-polyfill` to the [`bower.json`](http://bower.io/#defining-a-package) of your project and run `bower install`.

```json
{
  "dependencies": {
    "audiocontext-polyfill": "latest"
  }
{
```

### Standalone

[Download the script file directly.](https://raw.github.com/shinnn/AudioContext-Polyfill/master/audiocontext-polyfill.js "view raw")

## Usage

Load `audiocontext-polyfill.js` before any scripts else related to Web Audio API.

After it loaded, you can use Web Audio API without any vendor prefixes or deprecated methods.

For example, you can create an audio context with `new AudioContext()` instead of `new webkitAudioContext()`, or play sounds with `.start(0)` instead of old API `.noteOn(0)`.


### Supported API

[ctx]: <http://www.w3.org/TR/webaudio/#AudioContext-section>
[octx]: <http://www.w3.org/TR/webaudio/#OfflineAudioContext-section>
[gain]: <http://www.w3.org/TR/webaudio/#GainNode-section>
[delay]: <http://www.w3.org/TR/webaudio/#DelayNode-section>
[proc]: <http://www.w3.org/TR/webaudio/#ScriptProcessorNode>

| Clean API name                | deprecated or vendor-prefixed |
| ----------------------------- | ----------------------------- |
| [AudioContext][ctx]           | webkitAudioContext            |
| [OfflineAudioContext][octx]   | webkitOfflineAudioContext     |
| start                         | noteOn                        |
| stop                          | noteOff                       |
| [createGain][gain]            | createGainNode                |
| [createDelay][delay]          | createDelayNode               |
| [createScriptProcessor][proc] | createJavaScriptNode          |

## License

Copyright (c) 2013 - 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT license](./LICENSE).
