let revisarError = (err, res, data) => {
    if (err) {
        return res.status(400).json({
            ok: false,
            err
        });
    } else {
        return res.json({
            ok: true,
            data
        });
    }
};

module.exports = {
    revisarError
};