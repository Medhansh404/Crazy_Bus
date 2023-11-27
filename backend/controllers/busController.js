// controllers/busController.js
const bus = require('../models/Buses');

exports.searchBuses = (req, res) => {
    const { destination, date } = req.body;

    const query = {
        $and: [
            {destination: destination},
            {date: date}
        ]
    };
    bus.find(query).exec((err, buses) => {
        if (err) {
            
            res.json({ status: false, message: "Error while searching", error: err });
        } else {
            //console.log(buses)
            res.json({ status: true, buses });
        }
    });
};
// exports.searchBuses = (req, res) => {
//     bus.find({}).exec((err, buses) => {
//         if (err) {
//             res.json({ status: false, message: "Error while searching", error: err });
//         } else {
//             console.log("Found Buses:", buses);
//             res.json({ status: true, buses });
//         }
//     });
// };

