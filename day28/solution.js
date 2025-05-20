class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!Object.hasOwn(this.events, eventName)) {
      this.events[eventName] = [];
    }

    const eventCallbacks = this.events[eventName];
    eventCallbacks.push(callback);
    const index = eventCallbacks.length - 1;

    return {
      unsubscribe: () => {
        eventCallbacks[index] = null;
      },
    };
  }

  emit(eventName, args = []) {
    if (!this.events[eventName]) return [];
    const callbacks = this.events[eventName];
    const results = [];

    for (const cb of callbacks) {
      if (cb !== null) results.push(cb(...args));
    }

    return results;
  }
}
