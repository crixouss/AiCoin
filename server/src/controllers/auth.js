const postUser = async (req, res) => {
    console.log(req.body);
    await res.json({ status: 'success' });
};

module.exports = { postUser };