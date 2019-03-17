var file = (data) => {
    var out = {
          filename : data.originalname,
          size : data.size
    }
    return out
}

module.exports = file