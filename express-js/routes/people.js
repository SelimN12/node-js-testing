const express = require('express');
const router = express.Router();

let { people } = require('../data');


router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: people });
});


router.post('/', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide name value' });
  }

  res.status(201).json({ success: true, person: name });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find(p => p.id === Number(id));

  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `No person with id ${id}`,
    });
  }

  const newPeople = people.map(p => {
    if (p.id === Number(id)) {
      p.name = name;
    }
    return p;
  });

  res.status(200).json({ success: true, data: newPeople });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const person = people.find(p => p.id === Number(id));

  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `No person with id ${id}`,
    });
  }

  const newPeople = people.filter(p => p.id !== Number(id));

  res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
