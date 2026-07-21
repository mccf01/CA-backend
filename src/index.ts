import "dotenv/config";
import app from "./server";

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    console.info(`✅️SERVER IS RUNNING ON PORT ${PORT}`);
});