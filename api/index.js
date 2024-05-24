import express from "express";
import shortid from "shortid";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4000;

let channels = [];
const lessons = [];

app.get("/", (req, res) => {
  res.json({ hello: "WORLD" });
});

app.get("/hello", (req, res) => {
  res.json({ hello: "Future senior dev" });
});

app.post("/api/write", (req, res) => {
  const channelInfo = req.body;
  channelInfo.id = shortid.generate();
  channels.push(channelInfo);
  // res.status(201);
  console.log(channelInfo);
  try {
    const response = channelInfo;
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/write", (req, res) => {
  res.status(200).json(channels);
});

app.delete("/api/write/:id", (req, res) => {
  const { id } = req.params;
  const deleted = channels.find((channels) => channels.id === id); //go into this array (channels) find and return to me the channel where the channel id in the array matches the one we passing in on tthis (line 42)req.params and stick it in this variable(this line)
  if (deleted) {
    console.log(deleted);
    channels = channels.filter((channels) => channels.id !== id); //!==(is not equal) //return to us a brand new channels array minus the id of the one we passed in here (app.delete("/api/channels/:id", (req, res) =>)
    res.status(200).json(deleted);
  } else {
    console.log(deleted);
    res
      .status(404)
      .json({ message: "Channel you are looking for does not exist" }); //else say hey i cant find it
  }
});

app.get("/api/write/:id", (req, res) => {
  const { id } = req.params;

  const found = channels.find((channel) => channel.id == id);
  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).json({ message: "channel does not exist" });
  }
});

app.listen(4000, () => {
  console.log(`\n Server Running on http://localhost:${PORT}`);
});
