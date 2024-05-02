import { createClient } from "next-sanity";

export const client = createClient({
    projectId: '2xtpazyj',
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-01-01",
})