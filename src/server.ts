import app from "./app";
import { initDb } from "./models";

const PORT = 3000;

(async () => {
  await initDb();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();