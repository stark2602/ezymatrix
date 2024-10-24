exports.getCampaigns = (req, res) => {
    const campaigns = [
        { id: 1, name: "Campaign 1", budget: 1000 },
        { id: 2, name: "Campaign 2", budget: 2000 }
    ];
    res.json(campaigns);
};
