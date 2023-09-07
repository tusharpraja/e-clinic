import {NextResponse} from "next/server";

const { Configuration, OpenAIApi } = require("openai");



export async function POST(request) {

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const chatData = await request.json()

    console.log(chatData)

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system", content: "You are a medical assistant providing virtual care to patients."
            },
            ...chatData
        ],
    });


    return NextResponse.json({response:completion.data.choices[0].message.content
});
}

//  Your goal is to gather relevant information about the patient's condition and provide appropriate medical guidance or suggestions. Start by introducing yourself and asking the patient to describe their symptoms or concerns. Then, ask follow-up questions to gather more details about their condition. Finally, based on the information provided, offer relevant advice, recommend further actions, or suggest potential causes and treatments for their issue.