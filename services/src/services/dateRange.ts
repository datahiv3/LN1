import dayjs from "dayjs";

// 2018-04-04T16:00:00.000+07:00
export class DateRange {
  private from: dayjs.Dayjs = dayjs(0);
  private to: dayjs.Dayjs = dayjs().add(1, "second");

  setFrom(from: string) {
    this.from = dayjs(from);

    return this;
  }

  setTo(to: string) {
    this.to = dayjs(to);

    return this;
  }

  current() {
    return { from: this.from, to: this.to };
  }

  getFromMs() {
    return this.from.valueOf();
  }

  getToMs() {
    return this.to.valueOf();
  }
}
