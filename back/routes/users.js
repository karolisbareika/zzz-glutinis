// const router = require('express').Router();
// const User = require('../models/user');
// const bcrypt = require('bcrypt');

// //

// router.post('/register', async (req, res) => {
//     try {
//         const salt = await bcrypt.genSalt(8);
//         const hashedPass = await bcrypt.hash(req.body.password, salt)

//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: hashedPass,
//         });
//     const user = await newUser.save();
//     res.status(200).json(user._id);
//     } catch(err) {
//         res.status(500).json(err);
//     }
// });

// router.post('/login', async (req, res) => {
//     try {
//       const user = await User.findOne({username: req.body.username})
//       !user && res.status(400).json('Netinkamas vardas arba slaptažodis');

//       const validPass = await bcrypt.compare(
//           req.body.password,
//           user.password
//         );
//         !validPass && res.status(400).json('Netinkamas vardas arba slaptažodis');

//         res.status(200).json({ _id: user._id, username: username });

//     } catch(err) {
//         res.status(500).json(err);
//     }
// })

// module.exports = router;
