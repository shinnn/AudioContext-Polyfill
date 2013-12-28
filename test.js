'use strict';

var assert = chai.assert;

function audioContextTest(ctx) {
  var buf, osc;
  
  describe('new AudioContext()', function() {
    it("should have 'currentTime' property", function() {
      assert.property(ctx, 'currentTime');
    });
  
    describe('#createBufferSource()', function() {
      it("should have 'context' property " +
      "which is equal to its owner AudioContext", function() {
        buf = ctx.createBufferSource();
        assert.strictEqual(buf.context, ctx);
      });
    
      describe('#start(0)', function() {
        it('should return undefined', function() {
          assert.isUndefined(buf.start(0));
        });
      });

      describe('#stop(0)', function() {
        it('should return undefined', function() {
          assert.isUndefined(buf.stop(0));
        });
      });
    });
  
    describe('#createOscillator()', function() {
      it("should have 'frequency' property and it is object", function() {
        osc = ctx.createOscillator();
        assert.isObject(osc.frequency);
      });
    
      describe('#start(0)', function() {
        it('should return undefined', function() {
          assert.isUndefined(osc.start(0));
        });
      });

      describe('#stop(0)', function() {
        it('should return undefined', function() {
          assert.isUndefined(osc.stop(0));
        });
      });
    });
  
    describe('#createGain()', function() {
      it("should have 'context' property " +
      "which is equal to its owner AudioContext", function() {
        var gain = ctx.createGain();
        assert.strictEqual(gain.context, ctx);
      });
    });

    describe('#createDelay()', function() {
      it("should have 'context' property " +
      "and is equal to its owner AudioContext", function() {
        var delay = ctx.createDelay();
        assert.strictEqual(delay.context, ctx);
      });
    });

    describe('#createScriptProcessor(256, 1, 1)', function() {
      it("should have 'bufferSize' property which returns 256", function() {
        var proc = ctx.createScriptProcessor(256, 1, 1);
        assert.strictEqual(proc.bufferSize, 256);
      });
    });
  });
}

audioContextTest(new AudioContext);
audioContextTest(new OfflineAudioContext(1, 22050, 96000));
