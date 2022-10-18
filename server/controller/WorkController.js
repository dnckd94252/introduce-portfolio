class WorkController {
    async create (req , res) {
        console.log(req.body);
    }
}

module.exports = new WorkController();
