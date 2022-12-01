//import posts from "./tuits.js";
//let tuits = posts;

import * as tuitsDao from './tuits-dao.js'


const findTuits  = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
}


const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.userName = 'Me';
    newTuit.handle = '@me';
    newTuit.time = 'just now';
    newTuit.image = "space.webp";
    newTuit.title = "New Tuit";
    newTuit.topic = "Space";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}


const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
}
// !!!Careful the id comparison here because
// the id is a number and the parameter is always a string
// so either set all id as strings or convert them to string when comparing

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
