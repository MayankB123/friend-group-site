const express = require('express');
const router = express.Router();
const rateLimiter = require('./middlewares/rateLimiter')
const { calculateExperiences, calculateSocial, calculateConflict, calculateDecisionMaking, calculateSharedInterests } = require('./calculations');
const { validateRequestBody } = require('./middlewares/validateRequestBody')

const sampleText = {
    experiences: {
        high: `You got a high compatbility score for your approaches to new experiences! This indicates that the members of your group share a similar level of openness to new experiences and change. This suggests that your group is likely aligned in how you approach new situations, challenges, and opportunities. Such alignment can lead to smoother decision-making and a stronger sense of unity, as members are more likely to support and understand each other's preferences and choices when faced with new experiences. It reflects a group dynamic where everyone is on the same page when it comes to embracing or resisting change, contributing to overall harmony.`,
        medium: `The approach to new experiences score for your group indicates a balanced approach to new experiences and change. While there's some variation in how open each member is to trying new things, there's still a significant level of common ground. This mix of perspectives can be valuable, as it allows the group to approach new situations with both caution and enthusiasm. The diversity in openness means your team can adapt to different circumstances, drawing on both the adventurous spirit of those who embrace change and the steady, thoughtful approach of those who prefer consistency. This balance can lead to well-rounded decisions that are informed by a variety of viewpoints, ultimately strengthening the group's ability to navigate challenges together.`,
        low: `The approach to new experiences score for your group reveals a notable diversity in how open members are to new experiences and change. This suggests that the team includes a range of perspectives, with some members being more inclined towards embracing change, while others may prefer sticking to familiar routines. Such diversity can present both opportunities and challenges. On one hand, it can lead to rich discussions and varied approaches to problem-solving. On the other hand, differing attitudes towards change might require additional effort to find common ground and ensure that everyone feels heard and included. Embracing this variety can ultimately enhance the group's ability to tackle new challenges creatively and effectively.`,
        highAverage: `\n\nYour group also prefers new experiences! This eagerness to embrace change and try new things is a great asset, fostering innovation and dynamic problem-solving. However, this enthusiasm can sometimes lead to taking on too many challenges at once. Balancing your adventurous spirit with thoughtful planning will help you maximize your strengths while staying focused and cohesive.`,
        lowAverage: `\n\nYour group’s preference for familiar approaches ensures consistency and reliability, which helps maintain focus. However, this can sometimes limit opportunities for innovation. Balancing your strong routine with occasional openness to new ideas can enhance adaptability while preserving your stable foundation.`
    },
    social: {
        high: `A high compatibility score for comfort in social gatherings shows that your group shares a similar level of ease with social situations. This alignment suggests that your members approach social interactions in a consistent manner, which can enhance group cohesion and communication. With everyone on the same page regarding social comfort, you're likely to experience smoother interactions and a stronger sense of unity during group activities. This shared comfort in social settings contributes to a harmonious environment where members understand and support each other's social preferences.`,
        medium: `Your group's compatibility score for comfort in social gatherings indicates that while your group has a range of comfort levels with social situations, there is still a moderate degree of alignment. This suggests that your members have varying degrees of ease in social settings, which can bring a mix of perspectives and approaches to social interactions. This diversity allows for a balanced environment where different comfort levels are accommodated, leading to a dynamic but cohesive group experience. Embracing these varying levels can help foster understanding and create a supportive atmosphere for all members.`,
        low: `A low compatibility score for comfort in social gatherings indicates that your group has diverse levels of ease with social situations. This variance suggests that members may approach social interactions very differently, leading to potential challenges in group dynamics. While this diversity can offer a range of perspectives, it might also require extra effort to ensure that everyone feels comfortable and included. Balancing these varying comfort levels is key to fostering a supportive environment and improving overall cohesion in social settings.`,
        highAverage: `\n\nYour group's score reveals that most people are very comfortable in social situations. This suggests that your group excels in engaging with others and thriving in social environments. A strong comfort level means that interactions are likely to be smooth and natural, fostering a vibrant and connected atmosphere. With many members feeling at ease in social settings, your group is well-equipped to collaborate effectively, build strong relationships, and create a positive, inclusive environment where everyone can contribute confidently. This collective ease enhances group cohesion and supports a dynamic, supportive team dynamic.`,
        lowAverage: `\n\nYour group's score reveals that your group tends to prefer more subdued or intimate interactions. This common preference can foster a thoughtful and reflective environment where members feel more at ease in smaller or less formal settings. By focusing on creating supportive and low-pressure social opportunities, you can enhance group cohesion and build strong, meaningful connections that align with everyone’s comfort levels. Embracing this approach can lead to a more harmonious and understanding team dynamic.`
    },
    conflict: {
        high: `A high compatibility score for dealing with conflict indicates that your group shares a similar approach to addressing disagreements and challenges. This alignment suggests that your members are likely to handle conflict in a consistent manner, which can lead to more effective resolution and a cohesive team dynamic. With everyone on the same page regarding how to confront and manage conflicts, decision-making and problem-solving become smoother and more collaborative. This shared approach to conflict helps build trust and understanding within the group, contributing to a harmonious and supportive environment where issues are addressed constructively.`,
        medium: `Your test reveals that your group has a range of approaches to handling disagreements and challenges. This variety in conflict management styles can offer diverse perspectives and solutions, fostering a dynamic environment where different strategies are considered. While there may be some differences in how conflicts are approached, this diversity can be beneficial as it encourages open discussions and creative problem-solving. Balancing these varied approaches with effective communication can help ensure that conflicts are resolved constructively and that the group remains cohesive and supportive.`,
        low: `Your group seems to have diverse approaches to handling disagreements and challenges. This variability suggests that members may have different preferences for addressing conflicts, which can lead to misunderstandings or tension. While this diversity can bring a range of perspectives, it’s important to actively work on finding common ground and developing strategies that accommodate everyone’s styles. Fostering open communication and understanding each other’s conflict resolution preferences can help navigate these differences and improve overall group harmony.`,
        highAverage: `\n\nYour resulst also show that that your group is proactive and direct in addressing issues. This approach ensures problems are resolved quickly and collaboratively, fostering a transparent and respectful environment that strengthens team dynamics.`,
        lowAverage: `\n\nYour group tends to steer clear of direct conflict. This approach helps maintain a harmonious atmosphere and reduces immediate tension. However, it’s important to ensure that underlying issues are addressed in a constructive way, as avoiding confrontation can sometimes lead to unresolved problems.`
    },
    decisionMaking: {
        high: `Your high compatibility score for decision-making style indicates that your group has a diverse range of thinkers and approaches to analyzing choices. This variety can be beneficial, as it brings multiple perspectives and methods to the decision-making process. With such a broad spectrum of viewpoints, your group can tackle problems from different angles, leading to more creative and well-rounded solutions. This diversity enriches discussions and ensures that decisions are thoroughly examined, contributing to a dynamic and effective decision-making environment.`,
        medium: `Your medium compatibility score for decision-making style suggests that your group has a mix of approaches to analyzing choices. This means there's some diversity in how decisions are approached, blending various perspectives and methods. While not as varied as a high score, this level of diversity still provides a range of viewpoints, which can enhance discussions and lead to well-considered decisions. The balance of different approaches contributes to a decision-making process that is both comprehensive and adaptable.`,
        low: `Your low compatibility score for decision-making indicates that your group tends to approach decisions in a very similar manner, with little diversity in how choices are analyzed. This lack of variation means that decision-making is more uniform and predictable, which can lead to efficient and consistent outcomes. However, the absence of different perspectives may limit the exploration of alternative solutions and reduce the depth of analysis. While this uniformity can streamline decision-making, it might also benefit from introducing more varied viewpoints to enhance creativity and adaptability.`,
        highAverage: `\n\nYour group puts a strong emphasis on careful evaluation and detailed consideration of options. Members are likely to engage in deep discussions and weigh various factors before reaching a conclusion, which fosters a well-rounded and informed decision-making process. This thorough approach ensures that all perspectives are considered, leading to more robust and effective outcomes.`,
        lowAverage: `\n\nYour group's choices are likely made quickly and based on immediate impressions rather than thorough evaluation. This approach can lead to faster decision-making but might also miss important details. While this can sometimes streamline processes, it may also result in less informed decisions, as not all perspectives and potential consequences are considered`
    },
    sharedInterests: {
        high: `Your high compatibility score for the importance of shared interests indicates that your group is very unified in how you value common interests. This means everyone agrees on the significance of having shared passions and activities, which fosters a strong sense of connection and cohesion. Such alignment can enhance your group's interactions and strengthen relationships, as members are likely to engage in and support common interests. This shared perspective contributes to a harmonious group dynamic where mutual understanding and common ground are highly valued.`,
        medium: `Your score for the importance of shared interests suggests that your group has a range of opinions on how crucial common interests are. While there is some agreement on the value of shared activities and passions, there is also a diversity of views within the group. This balance allows for both common ground and individual preferences, contributing to a dynamic where members can enjoy shared interests while also appreciating personal differences. This level of compatibility promotes a flexible group environment where varied perspectives on the importance of shared interests can enhance interactions and relationships.`,
        low: `Your group has diverse opinions on how crucial common interests are. Members vary significantly in their views about the role of shared passions and activities, reflecting a range of perspectives within the group. This diversity can lead to a rich mix of individual preferences and interests, offering opportunities for a wide array of experiences. However, it may also mean that finding common ground for activities and bonding might require more effort. Embracing these varied opinions can contribute to a more inclusive environment where different viewpoints are valued.`,
        highAverage: `\n\nCommon passions and activities play a central role in your interactions and relationships. The strong emphasis on shared interests creates a foundation of mutual understanding and connection, leading to a cohesive and supportive environment. Members are likely to bond deeply over their common pursuits, which enhances group dynamics and strengthens relationships. This focus on shared interests helps ensure that everyone feels included and engaged, contributing to a harmonious and unified group atmosphere.`,
        lowAverage: `\n\nYour group tends to focus on individual preferences and diverse pursuits. This allows members to explore their own passions without the need for alignment, leading to a dynamic environment where unique perspectives are valued and respected.`
    }
}

router.post('/group-compatibility', rateLimiter, validateRequestBody, (req, res) => {
    const data = req.body;

    const experiences = []
    const social = []
    const conflict = []
    const decisionMaking = []
    const sharedInterests = []

    data.forEach((item) => {
        experiences.push(item.attribute1)
        social.push(item.attribute2)
        conflict.push(item.attribute3)
        decisionMaking.push(item.attribute4)
        sharedInterests.push(item.attribute5)
    })

    score = 0
    const experiencesScore = calculateExperiences(experiences)
    const socialScore = calculateSocial(social)
    const conflictScore = calculateConflict(conflict)
    const decisionMakingScore = calculateDecisionMaking(decisionMaking)
    const sharedInterestsScore = calculateSharedInterests(sharedInterests)
    score += experiencesScore[0]
    score += socialScore[0]
    score += conflictScore[0]
    score += decisionMakingScore[0]
    score += sharedInterestsScore[0]

    text = {}

    if (experiencesScore[0] > 17) {
        text.experiences = sampleText.experiences.high
    }
    if (experiencesScore[0] > 13) {
        text.experiences = sampleText.experiences.medium
    }
    if (experiencesScore[0] <= 13) {
        text.experiences = sampleText.experiences.low
    }
    if (experiencesScore[1] > 7.5) {
        text.experiences += sampleText.experiences.highAverage
    }
    if (experiencesScore[1] < 2.5) {
        text.experiences += sampleText.experiences.lowAverage
    }

    if (socialScore[0] > 17) {
        text.social = sampleText.social.high
    }
    if (socialScore[0] > 13) {
        text.social = sampleText.social.medium
    }
    if (socialScore[0] <= 13) {
        text.social = sampleText.social.low
    }
    if (socialScore[1] > 7.5) {
        text.social += sampleText.social.highAverage
    }
    if (socialScore[1] < 2.5) {
        text.social += sampleText.social.lowAverage
    }

    if (conflictScore[0] > 17) {
        text.conflict = sampleText.conflict.high
    }
    if (conflictScore[0] > 13) {
        text.conflict = sampleText.conflict.medium
    }
    if (conflictScore[0] <= 13) {
        text.conflict = sampleText.conflict.low
    }
    if (conflictScore[1] > 7.5) {
        text.conflict += sampleText.conflict.highAverage
    }
    if (conflictScore[1] < 2.5) {
        text.conflict += sampleText.conflict.lowAverage
    }

    if (decisionMakingScore[0] > 17) {
        text.decisionMaking = sampleText.decisionMaking.high
    }
    if (decisionMakingScore[0] > 13) {
        text.decisionMaking = sampleText.decisionMaking.medium
    }
    if (decisionMakingScore[0] <= 13) {
        text.decisionMaking = sampleText.decisionMaking.low
    }
    if (decisionMakingScore[1] > 7.5) {
        text.decisionMaking += sampleText.decisionMaking.highAverage
    }
    if (decisionMakingScore[1] < 2.5) {
        text.decisionMaking += sampleText.decisionMaking.lowAverage
    }

    if (sharedInterestsScore[0] > 17) {
        text.sharedInterests = sampleText.sharedInterests.high
    }
    if (sharedInterestsScore[0] > 13) {
        text.sharedInterests = sampleText.sharedInterests.medium
    }
    if (sharedInterestsScore[0] <= 13) {
        text.sharedInterests = sampleText.sharedInterests.low
    }
    if (sharedInterestsScore[1] > 7.5) {
        text.sharedInterests += sampleText.sharedInterests.highAverage
    }
    if (sharedInterestsScore[1] < 2.5) {
        text.sharedInterests += sampleText.sharedInterests.lowAverage
    }

    const result = {
        friends: data,
        score: score,
        text: text
    }

    res.json(result);
});

module.exports = router;
