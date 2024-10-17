const { login_data, get_rx_group, get_drug, insert_rx_group, insert_rx_drug, rename_rx_group, set_rx_active, delete_rx_drug, get_drug_when } = require("../rx_group/rx_group.js");
const bcrypt = require('bcrypt');

const login = (req, res) => {
  const { email, password } = req.body;
  login_data(email, password, (error, doctor) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    } else {
      console.log("Doctor data with associated details:", doctor);
      return res.status(200).json(doctor);
    }
  });
};



const get_rx = (req, res) => {
  const { doctor_id } = req.body;
  get_rx_group(doctor_id, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  });
};

const get_drug_data = (req, res) => {
  get_drug( (err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  });
};


const post_rx = async (req, res) => {
  try {
    const rxGroupData = req.body; 
    await insert_rx_group(rxGroupData);
    res.status(200).json({ message: 'Rx Group and Drugs inserted successfully.' });
  } catch (error) {
    console.error('Error posting rx group data:', error);
    res.status(500).json({ error: 'An error occurred while posting rx group data.' });
  }
};

const post_rx_drug = async (req, res) => {
  try {
    const rxDrugData = req.body; 
    await insert_rx_drug(rxDrugData);
    res.status(200).json({ message: 'Rx Group and Drugs inserted successfully.' });
  } catch (error) {
    console.error('Error posting rx group data:', error);
    res.status(500).json({ error: 'An error occurred while posting rx group data.' });
  }
};


const rx_rename = async (req, res) => {
  try {
    const { rx_group_id, new_name } = req.body; 
    await rename_rx_group(rx_group_id, new_name, (error, result) => {
      if (error) {
        console.error("Failed to rename Rx group:", error.message);
      }
      res.status(200).json({ message: 'Rx group renamed successfully.' });
    });
  } catch (error) {
    console.error("Failed to rename Rx group:", error.message);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
};


const rx_active = async (req, res) => {
  try {
    const { rx_group_id, active } = req.body; 
    await set_rx_active(rx_group_id, active, (error, result) => {
      if (error) {
        console.error("Failed to rename Rx group:", error.message);
      }
      res.status(200).json({ message: 'Rx group renamed successfully.' });
    });
  } catch (error) {
    console.error("Failed to rename Rx group:", error.message);
  }
};



const del_rx_drug = async (req, res) => {
  try {
    const { rx_group_id, drug_varient_id } = req.body; 
    await delete_rx_drug(rx_group_id, drug_varient_id, (error, result) => {
      if (error) {
        console.error("Failed to delete the  Rx group drug:", error.message);
      }
      res.status(200).json({ message: 'Rx group drug deleded successfully.' });
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
};



const get_when = (req, res) => {
  get_drug_when((err, result) => {
    if (err) {
      console.error("Error fetching When data:", err);
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    } else {
      res.status(200).json(result);
    }
  });
};



const get_frequency = (req, res) => {
  get_drug_frequency( (err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  });
};


const get_time = (req, res) => {
  get_drug_time( (err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  });
};







module.exports = {
  login,
  get_rx,
  get_drug_data,
  post_rx,
  post_rx_drug,
  rx_rename,
  del_rx_drug,
  rx_active,
  get_when,
  get_time,
  get_frequency
};
