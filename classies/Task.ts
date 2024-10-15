export class Task {
  private _id: string;
  private _person_id: string;
  private _name: string;
  private _location: string;
  private _detail: string;
  private _state: boolean;
  private _start_date: Date;

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get person_id(): string {
    return this._person_id;
  }
  public set person_id(value: string) {
    this._person_id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get location(): string {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }
  public get detail(): string {
    return this._detail;
  }
  public set detail(value: string) {
    this._detail = value;
  }
  public get state(): boolean {
    return this._state;
  }
  public set state(value: boolean) {
    this._state = value;
  }
  public get start_date(): Date {
    return this._start_date;
  }
  public set start_date(value: Date) {
    this._start_date = value;
  }

  constructor(
    id: string,
    person_id: string,
    name: string,
    location: string,
    detail: string,
    start_date: Date
  ) {
    this._id = id;
    this._person_id = person_id;
    this._name = name;
    this._location = location;
    this._detail = detail;
    this._state = false;
    this._start_date = start_date;
  }

  // リマインド送信
  public sendRemind(): void {}
}
