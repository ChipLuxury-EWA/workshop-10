require('express-async-errors');
const express = require('express');
const router = express.Router();
const storage = require('../services/storage_service');

// curl localhost:3042/players
router.get('/players', async (_, res) => {
  res.send(await storage.getPlayers());
});

// curl localhost:3042/player/1
router.get('/player/:player_id', async (req, res) => {
  res.send(await storage.getPlayer(req.params.player_id));
});

// curl -X POST localhost:3042/player   -H 'Content-Type: application/json'   -d '{ "player_id":9999,"player_name":"player name","age":30,"position":"Attacker","country":"fr"}'
router.post('/player', async (req, res) => {
  await storage.createPlayer(req.body);
  res.end();
});

// curl localhost:3042/salary/1
router.get('/salary/:salary_id', async (req, res) => {
  res.send(await storage.getSalary(req.params.salary_id));
});

// curl -X POST localhost:3042/salary   -H 'Content-Type: application/json'   -d '{ "start_date":"2022-01-02","end_date":"2023-01-01","amount":100000,"player_id":1}'
router.post('/salary', async (req, res) => {
  await storage.createSalary(req.body);
  res.end();
});

router.use((error, req, res, next) => {
  console.log("Error handled");
  console.log(error.stack);
  console.log(error.message);
  return res.status(error.statusCode || 500).json({
    message: error.message || "Something went wrong"
  });
});

module.exports = router;
