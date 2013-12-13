(function(window, document, undefined){
  'use strict';
  
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  if (AudioContext === undefined) {
    console.warn('Web Audio API is not supported in this browser.\n' +
    'Please launch this site again with Google Chrome.');
  }
  
  window.OfflineAudioContext = window.OfflineAudioContext ||
                               window.webkitOfflineAudioContext;
  
  var Proto = AudioContext.prototype;
  
  var tmpctx = new AudioContext();
	
	// Support alternate names
	// start (noteOn), stop (noteOff), createGain (createGainNode), etc.
  var isStillOld = function(normative, old){
    return normative === undefined && old !== undefined; 
  };

  var bufProto = tmpctx.createBufferSource().constructor.prototype;  
  
  if (isStillOld(bufProto.start, bufProto.noteOn) ||
  isStillOld(bufProto.stop, bufProto.noteOff)) {
    var nativeCreateBufferSource = Proto.createBufferSource;

    Proto.createBufferSource = function createBufferSource(){
      var returnNode = nativeCreateBufferSource.call(this);
      returnNode.start = returnNode.start || returnNode.noteOn;
      returnNode.stop = returnNode.stop || returnNode.noteOff;
      
      return returnNode;
    };
  }
  
  // Firefox 24 doesn't support OscilatorNode
  if(typeof tmpctx.createOscillator === 'function'){
    var oscProto = tmpctx.createOscillator().constructor.prototype;
  
    if(isStillOld(oscProto.start, oscProto.noteOn) || isStillOld(oscProto.stop, oscProto.noteOff)){
      var nativeCreateOscillator = Proto.createOscillator;

      Proto.createOscillator = function createOscillator(){
        var returnNode = nativeCreateOscillator.call(this);
        returnNode.start = returnNode.start || returnNode.noteOn;
        returnNode.stop = returnNode.stop || returnNode.noteOff;
        
        return returnNode;
      };
    }
  }
  
  if (Proto.createGain === undefined &&
  Proto.createGainNode !== undefined) {
    Proto.createGain = Proto.createGainNode;
  }

  if (Proto.createDelay === undefined &&
  Proto.createDelayNode !== undefined) {
    Proto.createDelay = Proto.createGainNode;
  }
  
  if (Proto.createScriptProcessor === undefined &&
  Proto.createJavaScriptNode !== undefined) {
    Proto.createScriptProcessor = Proto.createJavaScriptNode;
  }
	
  // Black magic for iOS 
  var is_iOS = (navigator.userAgent.indexOf('like Mac OS X') !== -1);
  if(is_iOS){
    var NativeAudioContext = AudioContext;
    this.AudioContext = function() {
      var audioContext = new NativeAudioContext();
			
      var body = document.body;
      var tmpsrc = audioContext.createBufferSource();
      var tmpProc = audioContext.createScriptProcessor(256, 1, 1);
	
      var initialEvent;
      if (body.ontouchstart !== undefined) {
        initialEvent = 'touchstart';
      } else if(body.onmousedown !== undefined) {
        initialEvent = 'mousedown';
      } else {
        initialEvent = 'click';
      }
	
      body.addEventListener(initialEvent, instantProcess, false);
	
      function instantProcess() {
        tmpsrc.start(0);
        tmpsrc.connect(tmpProc);
        tmpProc.connect(audioContext.destination);				
      }
  
      // This function will be called once and for all.
      tmpProc.onaudioprocess = function() {
        tmpsrc.disconnect();
        tmpProc.disconnect();
        body.removeEventListener(initialEvent, instantProcess, false);
        tmpProc.onaudioprocess = null;
      };
			
      return audioContext;
    };
  }
}(window, document));
