import express from "express";
import cors from "cors";
import axios from "axios";
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/send-sms", async (req, res) => {
    try {
        const { recipient, text } = req.body;
        const response = await axios.post(`https://api.textmebot.com/send.php?recipient=${recipient}&apikey=ZY5od66WeEF1&text=${text}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to send message" });
    }
});
app.listen(5000, () => console.log("Server running on port 5000"));
