'use strict';

var assert = chai.assert;
var ctx, buf, osc;

describe('new AudioContext()', function() {
  it('should return object', function () {
    ctx = new AudioContext();
    assert.typeOf(ctx, 'object');
  });
  
  describe('#createBufferSource()', function() {
    it('should return object', function () {
      buf = ctx.createBufferSource();
      assert.typeOf(buf, 'object');
    });
    
    describe('#start', function() {
      it('should return function', function () {
        assert.typeOf(buf.start, 'function');
      });
    });

    describe('#stop', function() {
      it('should return function', function () {
        assert.typeOf(buf.stop, 'function');
      });
    });
  });
  
  describe('#createOscillator()', function() {
    it('should return object', function () {
      osc = ctx.createOscillator();
      assert.typeOf(osc, 'object');
    });
    
    describe('#start', function() {
      it('should return function', function () {
        assert.typeOf(osc.start, 'function');
      });
    });

    describe('#stop', function() {
      it('should return function', function () {
        assert.typeOf(osc.stop, 'function');
      });
    });
  });
  
  describe('#createGain()', function() {
    it('should return object', function () {
      assert.typeOf(ctx.createGain(), 'object');
    });
  });

  describe('#createDelay()', function() {
    it('should return object', function () {
      assert.typeOf(ctx.createDelay(), 'object');
    });
  });

  describe('#createScriptProcessor()', function() {
    it('should return object', function () {
      assert.typeOf(ctx.createScriptProcessor(256, 1, 1), 'object');
    });
  });
});
