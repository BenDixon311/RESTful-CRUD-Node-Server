const Player = require('../models/player');

exports.addPlayer = (req, res, next) => {
    const name = req.body.name;
    const number = req.body.number;
    const team = req.body.team;
    const position = req.body.position;
    const player = new Player({ name: name, number: number, team: team, position: position });

    player
        .save()
        .then(result => {
            console.log('Player Created');
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getOnePlayer = (req, res, next) => {
    const player = req.params.name;

    Player.find({
        name: player
    })
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    })
};

exports.getTeam = (req, res, next) => {
    const teamName = req.params.team;

    Player.find({
        team: teamName
    })
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err);
    })
};

exports.getAllPlayers = async (req, res, next) => {
    try {
        const allPlayers = await Player.find()

        res.send(allPlayers);
    }
    catch(err) {
        console.log(err);
    }
};

exports.updatePlayer = (req, res, next) => {
    const playerId = req.body.id;
    const updatedName = req.body.name;
    const updatedNumber = req.body.number;
    const updatedTeam = req.body.team;
    const updatedPosition = req.body.position;

    Player.findByIdAndUpdate(playerId, {
        name: updatedName,
        number: updatedNumber,
        team: updatedTeam,
        position: updatedPosition
    })
    .then(result => {
        res.status(201) //maybe change this to 200
            .send('Updated Player')
    })
    .catch(err => {
        console.log(err);
    })
}

exports.deletePlayer = (req, res, next) => {
    const playerId = req.params.id;

    Player.findByIdAndDelete(playerId)
    .then(result => {
        res.status(200)
            .send({
                confirmation: 'Player Deleted'
            })
    })
    .catch(err => {
        console.log(err);
    })
}