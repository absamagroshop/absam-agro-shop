
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));
app.get("/api/health", (req, res) => {
  res.json({
      application: "ABSAM AGRO SHOP",
          status: "OK"
            });
            });

            const PORT = process.env.PORT || 3000;

            app.listen(PORT, () => {
              console.log(`Serveur ABSAM AGRO SHOP actif sur le port ${PORT}`);
              });
              