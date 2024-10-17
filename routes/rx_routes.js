const express = require("express");
const router = express.Router();


const {
    login, get_rx, get_drug_data, post_rx, post_rx_drug, rx_rename,
    rx_active, del_rx_drug, get_when, get_frequency, get_time, get_duration,
    rx_drug_update1, rx_drug_update2
  } = require("../controllers/controllers.js");


  router.get("/login", login);
  router.get("/get_rx",get_rx);
  router.get("/get_drug",get_drug_data);
  router.post("/post_rx",post_rx);
  router.post("/post_rx_drug",post_rx_drug);
  router.post("/rename_rx",rx_rename);
  router.post("/rx_active",rx_active);
  router.post("/del_rx_drug",del_rx_drug);
  router.get("/get_when",get_when);
  router.get("/get_frequency",get_frequency);
  router.get("/get_time",get_time);
  router.get("/get_duration",get_duration);
  router.post("/rx_drug_update1",rx_drug_update1);
  router.post("/rx_drug_update2",rx_drug_update2);


module.exports = router;
