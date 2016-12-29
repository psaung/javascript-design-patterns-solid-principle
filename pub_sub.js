var PubSub = function() {};

PubSub.prototype.publish = function(topic) {
  this._topics[topic].forEach(function(subscription) {
    subscription.callback.call(subscription.context);
  });
};

PubSub.prototype.subscribe = function(topic, callback, context) {
  context = context || this;
  this._topics = this._topics || {};
  this._topics[topic] = this._topics[topic] || [];
  this._topics[topic].push({"context": context, "callback": callback});
};

module.exports = PubSub;