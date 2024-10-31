import database from "@react-native-firebase/database";

export class Task {
  private _id: string;
  private _user_id: string;
  private _name: string;
  private _location: string | undefined;
  private _detail: string | undefined;
  private _state: boolean;
  private _start_date: number;

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get user_id(): string {
    return this._user_id;
  }
  public set user_id(value: string) {
    this._user_id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get location(): string | undefined {
    return this._location;
  }
  public set location(value: string | undefined) {
    this._location = value;
  }
  public get detail(): string | undefined {
    return this._detail;
  }
  public set detail(value: string | undefined) {
    this._detail = value;
  }
  public get state(): boolean {
    return this._state;
  }
  public set state(value: boolean) {
    this._state = value;
  }
  public get start_date(): number {
    return this._start_date;
  }
  public set start_date(value: number) {
    this._start_date = value;
  }

  constructor(
    id: string,
    user_id: string,
    name: string,
    location: string | undefined,
    detail: string | undefined,
    start_date: number,
    state?: boolean
  ) {
    this._id = id;
    this._user_id = user_id;
    this._name = name;
    this._location = location;
    this._detail = detail;
    this._state = state ?? false; // null合体演算子
    this._start_date = start_date;
  }

  // タスクの編集
  public edtiTask = async (
    name: string,
    start_date: number,
    location?: string,
    detail?: string
  ) => {
    try {
      const taskRef = database().ref(`tasks/${this.id}/`);
      await taskRef.update({
        user_id: this.user_id,
        name: name,
        location: location,
        detail: detail,
        start_date: start_date,
      });
    } catch (e) {
      console.error(`タスク編集エラー: ${e}`);
    }
  };

  // TODO: リマインド送信
  public sendRemind(): void {}

  // TODO: タスクの完了・未完了
  public toggleState = async (): Promise<void> => {
    try {
      const taskRef = database().ref(`tasks/${this._id}`);
      const snapshot = await taskRef.once("value");
      const currentState: boolean = snapshot.val().state;
      await taskRef.update({ state: !currentState });
    } catch (e) {
      console.log(`データ更新エラー : ${e}`);
    }
  };
}
