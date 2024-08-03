const { openai, model } = require('../config/configOpenAi');

async function processChat() {
    try {
        const completion = await openai.chat.completions.create({
            model: model,
            messages: [
                { role: "system", content: "I will integrate you in a coin analyzing app. Also give the exact price ranges of the last coins sold, based on condition of the coin, Poor to Good Condition: , Very Fine to Extra Fine Condition:, Perfect Condition:. Don't say that you are an AI! make it on 1888 10 pfennig" },
                { role: "user", content: " Also give the exact price ranges of the last coins sold, based on condition of the coin, Poor to Good Condition: , Very Fine to Extra Fine Condition:, Perfect Condition:. make it on 1888 10 pfennig" }
            ],
            max_tokens: 512,
            temperature: 0.7,
        });

        return completion.choices[0].message;
    } catch (error) {
        console.error("Error creating completion: ", error);
        throw new Error("An error occurred while processing your request.");
    }
}

module.exports = {
    processChat,
};
