import { createClient } from "$lib/prismicio"

export async function load({fetch, request}){
    const client = createClient({fetch, request})

    const document = await client.getByUID('home', 'home', {'fetchLinks': ['skateboard.visual', 'skateboard.title']})

    return document.data
}