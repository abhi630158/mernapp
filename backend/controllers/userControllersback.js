let users = [
    { id: 1, name: "Avinash" },
    { id: 2, name: "Rahul" }
];

// GET users
const getUsers = async (req, res) => {
    try {
        // Simulate async operation (e.g., database call)
        await new Promise((resolve) => setTimeout(resolve, 3000));
        res.json(users);
    } catch (error) {
        console.error("getUsers error:", error.message);
        res.status(500).json({ message: "error" });
    }
};
// POST user
const createUser = (req, res) => {  // ✅ no need for async — no await used
    try {
        // ✅ Guard against undefined body (when Content-Type is not application/json)
        if (!req.body) {
            return res.status(400).json({ message: "Request body is empty. Make sure to send raw JSON with Content-Type: application/json" });
        }

        const { name } = req.body;

        // ✅ Validate input
        if (!name || name.trim() === "") {
            return res.status(400).json({ message: "Name is required" });
        }

        const newUser = {
            id: users.length + 1,
            name: name.trim()
        };

        users.push(newUser);
        res.status(201).json(newUser); // ✅ 201 = Created
    } catch (error) {
        console.error("createUser error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// getUserNames
const getUserNames = (req, res) => {
    const names = users.map(u => ({ name: u.name }));
    res.json(names);
};
// getUserIds
const getUserIds = (req, res) => {
    const ids = users.map(u => ({ id: u.id }));
    res.json(ids);
};

module.exports = { getUsers, createUser, getUserNames, getUserIds };