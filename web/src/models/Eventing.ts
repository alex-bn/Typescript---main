type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const callbackHandlers = this.events[eventName] || [];
    callbackHandlers.push(callback);
    this.events[eventName] = callbackHandlers;
  };

  trigger = (eventName: string): void => {
    const callbackHandlers = this.events[eventName];
    if (!callbackHandlers || callbackHandlers.length === 0) {
      return;
    }
    callbackHandlers.forEach(callback => {
      callback();
    });
  };
}
