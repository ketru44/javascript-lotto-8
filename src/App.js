import { createLottos } from "./domains/createLottoNumbers";
import Lotto from "./entities/Lotto";

class App {
  async run() {}
  generateLottoObjects(quantity) {
    const lottos = createLottos();
    new Lotto
  }
}

export default App;
