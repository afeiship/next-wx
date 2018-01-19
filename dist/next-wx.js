(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var wx = global.wx = global.wx;

  var NxWx = nx.declare('nx.Wx', {
    statics: {
      config: function ( inOptions, inApiList ) {
        var options = nx.mix( inOptions, { jsApiList: inApiList } );
        return wx.config( options );
      },
      ready: function ( inCallback, inContext ) {
        return wx.ready.call(inContext, inCallback);
      },
      error: function ( inCallback, inContext){
        return wx.error.call(inContext, inCallback);
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWx;
  }

}());
