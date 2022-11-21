import posts from "./tuits.js";
let tuits = posts;

const findTuits  = (req, res) => res.json(tuits);


const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime();
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.username = 'me';
    newTuit.handle = '@me';
    newTuit.time = 'just now';
    newTuit.image = "space.webp";
    newTuit.title = "New Tuit";
    newTuit.topic = "Space";
    newTuit.tuit = "haha";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}


const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
      (t) => t._id.toString() === tuitdIdToUpdate)
    tuits[tuitIndex] = 
      {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}
// !!!Careful the id comparison here because
// the id is a number and the parameter is always a string
// so either set all id as strings or convert them to string when comparing

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
      t._id.toString() !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
