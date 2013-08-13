exports.attachEvent = function(obj, event, cb) {
  var onEventName = "on" + event;
  if (obj.addEventListener) {
    obj.addEventListener(event, cb, false);
  } else if (obj.attachEvent) {
    obj.attachEvent(onEventName, cb);
  } else {
    var currentEventHandler = obj[onEventName];
    obj[onEventName] = function() {
      if (typeof currentEventHandler === 'function') {
        currentEventHandler.apply(obj, arguments);
      }
      cb.apply(obj, arguments);
    };
  }
};

exports.detachEvent = function(obj, event, cb) {
  var onEventName = "on" + event;
  if (obj.removeEventListener) {
    obj.removeEventListener(event, cb, false);
  } else if (obj.detachEvent) {
    obj.detachEvent(onEventName, cb);
  } else {
    delete obj[onEventName];
  }
};
