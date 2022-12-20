import cors from 'cors';

const corsOptions = cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "authorization"],
});

export default corsOptions;