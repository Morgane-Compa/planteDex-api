import express from 'express';
import cors from 'cors';
import appDataSource from './data-source';
import plantRouter from './routes/PlantRoutes';

appDataSource.initialize().then(() => {

  // Parameters
  const app = express();

  app.use(express.json());
  app.use(
    cors({
      origin: "*", // 'http://localhost:3000'
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("Hello world")
  });

  // Routes
  app.use("/api/plants", plantRouter);

  app.listen(process.env.PORT, () => {
    console.log(
      `API is running on PORT :${process.env.PORT}`
    );
  });
})
  .catch((err) => {
    console.log(`Une erreur s'est produite :`, err);
  });