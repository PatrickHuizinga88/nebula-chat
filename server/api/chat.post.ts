import OpenAI from 'openai'
import {OpenAIStream, StreamingTextResponse} from 'ai'

export default defineLazyEventHandler(async () => {
    const apiKey = useRuntimeConfig().openaiApiKey
    if (!apiKey) throw new Error('Missing OpenAI API key')
    const openai = new OpenAI({
        apiKey: apiKey,
    });

    return defineEventHandler(async event => {
        const {messages} = await readBody(event)

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages,
        })

        const stream = OpenAIStream(response)

        return new StreamingTextResponse(stream)
    })
})