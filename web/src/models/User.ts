import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const callbackHandlers = this.events[eventName] || [];
    callbackHandlers.push(callback);
    this.events[eventName] = callbackHandlers;
  }

  trigger(eventName: string): void {
    const callbackHandlers = this.events[eventName];
    if (!callbackHandlers || callbackHandlers.length === 0) {
      return;
    }
    callbackHandlers.forEach(callback => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      // put -> update user
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // post -> new user
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
