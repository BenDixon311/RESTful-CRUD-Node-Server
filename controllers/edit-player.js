const Player = require('../models/player');

exports.addPlayer = (req, res, next) => {
    const name = req.body.name;
    const number = req.body.number;
    const team = req.body.team;
    const position = req.body.position;
    const imgurl = req.body.imgurl;
    const player = new Player({ name: name, number: number, team: team, position: position, imgurl: imgurl });

    player
        .save()
        .then(result => {
            res.status(201).redirect('localhost:3000');
            console.log('Player Created');
            
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getPlayerById = (req, res, next) => {
    const playerId = req.params.id;

   Player.findById(playerId)
   .then(result => {
       res.send(result);
   })
}

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

    Player.findByIdAndUpdate(req.params.id,
        {$set: req.body}
    )
    .then(result => {
        res.status(200)
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
            .redirect('localhost:3000')
            .send({
                confirmation: 'Player Deleted'
            })
    })
    .catch(err => {
        console.log(err);
    })
}