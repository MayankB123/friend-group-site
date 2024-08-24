const express = require('express');
const router = express.Router();
const rateLimiter = require('./middlewares/rateLimiter')

router.get('/hello', rateLimiter, (req, res) => {
    res.json({ message: 'Hello World!' });
});

/* 
POST a JSON in the following format:
{
    friend1: {
        name: asdasd,
        answer to q1: 3,
        answer to q2, 5,
        answer to q3, 5,
        answer to q4, 5,
        answer to q5, 5
    },
    friend2: {
        name: asdasd,
        answer to q1: 3,
        answer to q2, 5,
        answer to q3, 5,
        answer to q4, 5,
        answer to q5, 5
    }
    ... Maximum of 8 friends?
}
*/

router.post('/group-compatibility', (req, res) => {
    const data = req.body;

    console.log(data)

    res.json({ received: data });
});

module.exports = router;

/* Calculating score

    Should they all be that similar?
    There should be a good spread
    Polar opposites isn't as good though, you want them to be semi distant - Maybe make it a parabola of distance from each other maybe???
    If they're all exactly the same, not so good.
    A wide variation if there are a lot of people is good.
    Make a variation variable that increases with the number of people in the group. They can vary more before the parabola drops off if there's more people?
    Should not have a big divide between the group, as in 3 are on one end and 3 are on the polar opposite end?
    Perhaps calculate the compatibility score for each separate criteria then calculat the average score based on that (maybe put more weighting to some though)
    Give a justification for each reason on why I've done what I've done e.g. Not enough variety, and variety is the spice of life.
    See what else to chuck in the email. See how you can actually do an email SMTP server, SendGrid, MailChimp etc?
    Don't give a score too low to people

    Make sure you check that there aren't more than 8 friends.

*/