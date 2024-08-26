/* Having a high experience score is a good sign as you guys are aligned with what you want to do as a group */

function calculateExperiences(experiences) {
    const mean = experiences.reduce((sum, num) => sum + num, 0) / experiences.length;
    const variance = experiences.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / experiences.length;
    const standardDeviation = Math.sqrt(variance);
    
    if (standardDeviation <= 1.1) {
        return [20, mean]
    }
    if (standardDeviation <= 1.6) {
        return [18, mean]
    }
    if (standardDeviation <= 2.5) {
        return [16, mean]
    }
    if (standardDeviation <= 3.1) {
        return [14, mean]
    }
    if (standardDeviation <= 3.8) {
        return [12, mean]
    }
    else {
        return [10, mean]
    }
}

function calculateSocial(social) {
    const mean = social.reduce((sum, num) => sum + num, 0) / social.length;
    const variance = social.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / social.length;
    const standardDeviation = Math.sqrt(variance);
    
    if (standardDeviation <= 1.1) {
        return [20, mean]
    }
    if (standardDeviation <= 1.6) {
        return [18, mean]
    }
    if (standardDeviation <= 2.5) {
        return [16, mean]
    }
    if (standardDeviation <= 3.1) {
        return [14, mean]
    }
    if (standardDeviation <= 3.8) {
        return [12, mean]
    }
    else {
        return [10, mean]
    }
    // if (standardDeviation <= 1.1) {
    //     return 14
    // }
    // if (standardDeviation <= 1.6) {
    //     return 17
    // }
    // if (standardDeviation <= 2.5) {
    //     return 20
    // }
    // if (standardDeviation <= 3.1) {
    //     return 17
    // }
    // if (standardDeviation <= 3.8) {
    //     return 14
    // }
    // else {
    //     return 13
    // }
}

function calculateConflict(social) {
    const mean = social.reduce((sum, num) => sum + num, 0) / social.length;
    const variance = social.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / social.length;
    const standardDeviation = Math.sqrt(variance);
    
    if (standardDeviation <= 1.1) {
        return [20, mean]
    }
    if (standardDeviation <= 1.6) {
        return [18, mean]
    }
    if (standardDeviation <= 2.5) {
        return [16, mean]
    }
    if (standardDeviation <= 3.1) {
        return [14, mean]
    }
    if (standardDeviation <= 3.8) {
        return [12, mean]
    }
    else {
        return [10, mean]
    }
}

function calculateDecisionMaking(social) {
    const mean = social.reduce((sum, num) => sum + num, 0) / social.length;
    const variance = social.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / social.length;
    const standardDeviation = Math.sqrt(variance);
    
    if (standardDeviation <= 1.1) {
        return [10, mean]
    }
    if (standardDeviation <= 1.6) {
        return [12, mean]
    }
    if (standardDeviation <= 2.5) {
        return [14, mean]
    }
    if (standardDeviation <= 3.1) {
        return [16, mean]
    }
    if (standardDeviation <= 3.8) {
        return [18, mean]
    }
    else {
        return [20, mean]
    }
}

function calculateSharedInterests(social) {
    const mean = social.reduce((sum, num) => sum + num, 0) / social.length;
    const variance = social.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / social.length;
    const standardDeviation = Math.sqrt(variance);
    
    if (standardDeviation <= 1.1) {
        return [20, mean]
    }
    if (standardDeviation <= 1.6) {
        return [18, mean]
    }
    if (standardDeviation <= 2.5) {
        return [16, mean]
    }
    if (standardDeviation <= 3.1) {
        return [14, mean]
    }
    if (standardDeviation <= 3.8) {
        return [12, mean]
    }
    else {
        return [10, mean]
    }
}

module.exports = {
    calculateExperiences,
    calculateSocial,
    calculateConflict,
    calculateDecisionMaking,
    calculateSharedInterests
};

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