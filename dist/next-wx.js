(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var wx = (global.wx = global.wx);
  var UNKNOW = 'unknow';
  var ERR_MSG = 'Require wx-jssdk: http://res.wx.qq.com/open/js/jweixin-1.2.0.js';

  var NxWx = nx.declare('nx.Wx', {
    statics: {
      VERSION: '1.2.0',
      init: function() {
        if (wx && wx.ready) {
          wx.ready(function(){
            global.__WEIXIN_READY__ = true;
            wx.getNetworkType({
              success: function(res) {
                global.__NETWORK_TYPE__ = res.networkType;
              },
              fail:function(){
                global.__NETWORK_TYPE__ = UNKNOW;
              },
            });
          });
        } else {
          nx.error(ERR_MSG);
        }
      },
      config: function(inOptions, inApiList) {
        var options = nx.mix(inOptions, { jsApiList: inApiList });
        return wx.config(options);
      },
      ready: function(inCallback, inContext) {
        return wx.ready.call(inContext, inCallback);
      },
      error: function(inCallback, inContext) {
        return wx.error.call(inContext, inCallback);
      },
    },
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWx;
  }
})();
