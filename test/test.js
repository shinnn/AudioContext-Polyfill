'use strict';

describe('new AudioContext()', function() {
  it('should return AudioContext object', function () {
    return (typeof new AudioContext() === 'object');
  });
});
