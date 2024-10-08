export class Task {
  private id: string;
  private name: string;
  private place: string;
  private detail: string;
  private state: boolean;
  private start_date: Date;

  // リマインド送信
  public sendRemind(): void {}
}
