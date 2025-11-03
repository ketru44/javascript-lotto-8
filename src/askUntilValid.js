import { MissionUtils } from "@woowacourse/mission-utils";
export async function askUntilValid({ question, parse, makeAndValidate }) {
  while (true) {
    try {
      const raw = (await MissionUtils.Console.readLineAsync(question)).trim();
      const parsed = parse(raw);
      const value = makeAndValidate(parsed);
      if(value !== true) throw new Error(value);
      return parsed;
    } catch (e) {
      MissionUtils.Console.print(e.message); // "[ERROR] ..." 출력 후 루프 지속
    }
  }
}
