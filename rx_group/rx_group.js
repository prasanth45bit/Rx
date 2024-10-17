const { where } = require("sequelize");
const { Doctors, Rx_group,Rx_group_drug, Drug_varient, Drugs,When,Time, Frequency, Drug_catagory, Doctor_languages,Doctor_hospitals, Specialty, Languages, Doctor_specialty } = require("../models");
const { removeAllListeners } = require("process");



const login_data = async (email, password, callback) => {
  try {
    const doctor = await Doctors.findOne({
      where: { email, password },
    });

    if (!doctor) {
      return callback(new Error("Doctor not found"), null);
    }

    const doctorLanguages = await Doctor_languages.findAll({ where: { doctor_id: doctor.id },
       include: [
      {
        model: Languages,
        as: 'Language',   
        required: false,
      },
    ], });
    const doctorSpecialties = await Doctor_specialty.findAll({ where: { doctor_id: doctor.id },
      include: [
        {
          model: Specialty,
          as: 'Specialty',      
          required: false,
        },
      ], });
    const doctorDetails = {
      doctor: doctor,
      languages: doctorLanguages,
      specialties: doctorSpecialties,
      // workingAt: doctorWorkingAt,
    };

    callback(null, doctorDetails);
  } catch (error) {
    console.error("Error during login: ", error);
    callback(error, null);
  }
};



const get_rx_group = async (doctor_id, callback) => {
  try {
    const rx_group = await Rx_group.findAll({
      where: { doctor_id },
      include: [
        {
          model: Rx_group_drug,
          include: [
            {
              model: Drug_varient, 
            },
          ],
        },
      ],
    });

    if (!rx_group || rx_group.length === 0) {
      return callback(new Error("Rx group or related data not found"), null);
    }

    callback(null, rx_group);
  } catch (error) {
    console.error("Error during fetching Rx group data: ", error);
    callback(error, null);
  }
};

const get_drug = async (callback) => {
  try {
    const drugVariants = await Drug_varient.findAll({
      include: [
        {
          model: Drugs,
          as: 'Drug',
          include: [
            {
              model: Drug_catagory,
              as: 'Category',
            },
          ],
        },
      ],
    });


    const processedVariants = await Promise.all(drugVariants.map(async (variant) => {
      const time = variant.time_id ? await Time.findOne({ where: { id: variant.time_id },  attributes: ['time'], }) : null;
      const when = variant.when_id ? await When.findOne({ where: { id: variant.when_id },  attributes: ['when'], }) : null;
      const frequency = variant.frequency_id ? await Frequency.findOne({ where: { id: variant.frequency_id },  attributes: ['frequency'],  }) : null;

      return {
        ...variant.dataValues,
        Time: time,
        When: when,
        Frequency: frequency,
      };
    }));

    callback(null, processedVariants);
  } catch (error) {
    console.error('Error fetching drug variants with drugs and categories:', error);
    callback(error, null);
  }
};



const insert_rx_group = async (rxGroupData) => {
  try {
    const rxGroup = await Rx_group.create(
      {
        id: rxGroupData.rx_group_id,
        rx_group_name: rxGroupData.rx_group_name,
        doctor_id: rxGroupData.doctor_id,
      }
    );
    return rxGroup; 
  } catch (error) {
    console.error('Error inserting data into rx_group:', error);
    throw error; 
  }
};


const insert_rx_drug = async (rxDrugData) => {
  try {
    const { rx_group_id, drug_varient_ids } = rxDrugData;
    let rxDrugsData = [];

    for (let varientId of drug_varient_ids) {
        const drugVariants = await Drug_varient.findAll({ where: { id: varientId } });
        drugVariants.forEach(variant => {
          rxDrugsData.push({
            rx_group_id: rx_group_id,
            drug_varient_id: variant.id,
            duration: variant.duration,
            quantity: variant.quantity,
            dose_m: variant.dose_m,
            dose_an: variant.dose_an,
            dose_n: variant.dose_n,
            time_id: variant.time_id,
            frequency_id: variant.frequency_id,
            when_id: variant.when_id
          });
        });
    }

    await Rx_group_drug.bulkCreate(rxDrugsData);
    console.log('Data successfully inserted into the rx_group_drug table.');
  } catch (error) {
    console.error('Error inserting data into rx_group_drug:', error);
    throw error;
  }
};



const rename_rx_group = async (rx_group_id, new_name, callback) => {
  try {
    const result = await Rx_group.update(
      { rx_group_name: new_name },
      { where: { id: rx_group_id } } 
    );

    if (result[0] === 0) {
      return callback(new Error("Rx group not found or no update was made"), null);
    }

    callback(null, { message: "Rx group name updated successfully" });
  } catch (error) {
    console.error("Error updating Rx group name: ", error);
    callback(error, null);
  }
};


const set_rx_active = async (rx_group_id, active, callback) => {
  try {
    const result = await Rx_group.update(
      { isactive: active },
      { where: { id: rx_group_id } } 
    );

    if (result[0] === 0) {
      return callback(new Error("Rx group not found or no update was made"), null);
    }
    callback(null, { message: "Rx group name updated successfully" });
  } catch (error) {
    console.error("Error updating Rx group name: ", error);
    callback(error, null);
  }
};




const delete_rx_drug = async (rx_group_id, drug_varient_id, callback) => {
  try {
    const existingEntry = await Rx_group_drug.findOne({
      where: {
        rx_group_id: rx_group_id,
        drug_varient_id: drug_varient_id,
      },
    });
    if (!existingEntry) {
      return callback(new Error('Drug variant not found in the specified Rx group'), null);
    }
    await Rx_group_drug.destroy({
      where: {
        rx_group_id: rx_group_id,
        drug_varient_id: drug_varient_id,
      },
    });

    callback(null, { message: 'Drug variant successfully deleted from the Rx group' });
  } catch (error) {
    console.error('Error deleting drug variant from Rx group:', error.message);
    callback(error, null);
  }
};




const get_drug_when = async (callback) => {
  try {
    const WhenData = await When.findAll({});
    callback(null, whenData);
  } catch (error) {
    console.error("Error during fetching Rx group data: ", error);
    callback(error, null);
  }
};



module.exports = {
  login_data,
  get_rx_group,
  get_drug,
  insert_rx_drug,
  insert_rx_group,
  rename_rx_group,
  set_rx_active,
  delete_rx_drug,
  get_drug_when
};
