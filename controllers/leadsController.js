exports.getLeads = (req, res) => {
    const leads = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" }
    ];
    res.json(leads);
};
