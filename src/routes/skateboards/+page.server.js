import { createClient } from "$lib/prismicio"

export async function load({fetch, request}){
    const client = createClient({fetch, request})

    const document = await client.getByUID('page', 'skateboards', {'fetchLinks': ['skateboard.visual', 'skateboard.title']})

    return document.data
}