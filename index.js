exports.cloudFunc = (req, res) => {
  res.send(`Hello ${req.body.name || 'World'}!`)
}