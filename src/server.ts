import app from "./app.ts";
import { initDb } from "./models/index.ts";

const PORT = 3000;

(async () => {
  await initDb();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();