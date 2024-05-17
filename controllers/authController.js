// controllers/authController.js
const User = require('../models/user'); // Mengimpor dari lokasi yang benar
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("Password from database:", user.password);
        console.log("Password from request body:", password);

        const isPasswordValid = await bcrypt.compare(password, user.password);

        console.log("Is password valid?", isPasswordValid); // Logging tambahan

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // At this point, login successful, you can generate token here if using JWT

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

