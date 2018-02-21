const express       = require('express');
const router        = express.Router();
const Entry         = require('../../models/journal-entry');

router.get('/journal-entries', (req, res, next) => {
  Entry.find({}, (err, entries) => {
    if (err) { return res.json(err).status(500); }

    return res.json(entries);
  });
});

router.get('/journal-entries/:id', (req, res, next) => {
  Entry.findById(req.params.id, (err, entry) => {
    if (err)    { return res.json(err).status(500); }
    if (!entry) { return res.json(new Error('Entry not found')).status(404); }

    return res.json(entry);
  });
});

router.post('/journal-entries', (req, res, next) => {
  const newEntry = new Entry({
    title: req.body.title,
    content: req.body.content
  });

  newEntry.save( (err) => {
    if (err)             { return res.status(500).json(err); }
                           return res.json(newEntry);
  });
});

module.exports = router;
