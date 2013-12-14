# AudioContext-Polyfill

Polyfill for `AudioContext` object on [Web Audio API](http://www.w3.org/TR/webaudio/])

## Installation

### Bower

Download via [Bower](http://bower.io/).

`bower install --save audiocontext-polyfill`

Or add `audiocontext-polyfill` to your app's `bower.json`.

```json
"dependencies": {
  "audiocontext-polyfill": "latest"
}
```

And run `bower install`.

### Standalone

Download [ZIP file of this repository.](https://github.com/shinnn/AudioContext-Polyfill/archive/master.zip)

### Usage

Load `audiocontext-polyfill.js` before any scripts related to the Web Audio API.

After this script loaded, you can use Web Audio API without any prefixes or deprecated methods.

For example, you can create audio context with `new AudioContext()` instead of `new webkitAudioContext()`, and you can play sound with `.start(0)` instead of old API `.noteOn(0)`.


### Supported API

| Clean API name       | Prefixed/Deprecated      |
| -------------------- |:------------------------:|
| AudioContext         | webkitAudioContext       |
| OfflineAudioContext  | webkitOfflineAudioContext|
| start                | noteOn                   |
| stop                 | noteOff                  |
| createGain           | createGainNode           |
| createDelay          | createDelayNode          |
| createScriptProcessor| createJavaScriptNode     |

## License

Copyright (c) 2013 Shinnosuke Watanabe All rights reserved.

Unless otherwise stated, all source code in this repository is licensed under the [MIT license](http://opensource.org/licenses/mit-license.php).
