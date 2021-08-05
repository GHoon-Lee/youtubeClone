import express from "express";

const PORT = 4000;

const app = express();

const gossip = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const protectionMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === '/protected') {
        return res.send("<h1>Not Allowed</h1>");
    }
    next();
}

const handleHome = (req, res) => {
    return res.send("asdasd");
};

app.use(gossip);
app.use(protectionMiddleware);
app.get("/", handleHome);

const handleListening = () => console.log(`Server listening http://localhost:${PORT}!!`);

app.listen(PORT, handleListening);