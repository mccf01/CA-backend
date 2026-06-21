import "dotenv/config";
import app from "./server";

const PORT = process.env.PORT || 5432

app.listen(PORT, () => {
    console.log(`✅️SERVER IS RUNNING ON PORT ${PORT}`);
});