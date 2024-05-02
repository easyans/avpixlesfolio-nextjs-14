import Image from "next/image";
import precodes from '../../public/precodes.jpg';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import adode from "../../public/adobe.svg"
import canva from "../../public/tech-icons/canva.svg";
import ai from "../../public/tech-icons/ai.svg";
import figma from "../../public/tech-icons/figma.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import cloud from "../../public/tech-icons/creativecloud.svg";
import framer from "../../public/tech-icons/framer.svg";
import github from "../../public/tech-icons/github.svg";
import discord from "../../public/tech-icons/discord.svg";
import youtube from "../../public/tech-icons/youtube.svg";
import chrome from "../../public/tech-icons/chrome.svg";
import notion from "../../public/tech-icons/notion.svg";
import twitter from "../../public/twitter.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import { Button } from "@/components/ui/button";

const icons = [
    adode,
    canva,
    ai,
    figma,
    chatgpt,
    framer,
    github,
    discord,
    youtube,
    chrome,
    notion,
]

const socialMedia = [
    {
        id: 1,
        icon: insta,
        name: 'Instagram',
        username: '@aakash',
        link:'https://x.com/designu03?s=11'
    },
    {
        id: 2,
        icon: twitter,
        name: 'X / twitter',
        username:'@aakash',
        link:'https://x.com/designu03?s=11',
    },
    {
        id: 3,
        icon: linkedin,
        name: 'linkedin',
        username:'@aakash',
        link:'https://www.linkedin.com/in/aakash-raj-670334217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
]


export function SectionTwo() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
            <div className="w-full relative col-span-1">
                <Image
                    src={precodes}
                    alt="precodes"
                    className="object-cover rounded-2xl"
                    style={{ width: '400px', height: '400px' }}
                />
            </div>
            <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
                <Card className="bg-gray-100 border-none">
                    <CardHeader>
                    <CardTitle>Explore my stack</CardTitle>
                    <CardDescription>Check out the tools i use daily</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                        {icons.map((item, index) => (
                            <Image key={index} src={item} alt="icon" className="w-12 h-12"/>
                        ))}
                    </CardContent>
                </Card>
                <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
                        {socialMedia.map((item) => (
                            <Card key={item.id} className="p-4 flex flex-col item-center sm:item-start bg-gray-100 border-none">
                                <Image src={item.icon} alt="Icon" className="w-12 h-12"/>
                                <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
                                <p className="text-muted-foreground">{item.username}</p>
                                <Button className="mt-4" size="sm">Lets Connect</Button>
                            </Card>
                        ))}
                </div>

            </div>
        </div>
    )
}