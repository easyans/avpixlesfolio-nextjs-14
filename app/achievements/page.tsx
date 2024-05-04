import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Form } from "../components/Form";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import prize from '../../public/prize.jpeg'
import paper from '../../public/paper.jpeg'
import certificate from '../../public/certificate.jpeg'

export default function Guestbookpage() {
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">
        My <span className="text-blue-500">Achievements</span>
      </h1>
      <p className="leading-7 text-muted-foreground mt-3">🏆🏅😁</p>

      <div className="flex flex-wrap justify-between"> {/*  Wrap carousels in a flexbox */}
        <Carousel className="aspect-ratio-auto max-w-sm flex justify-center items-center p-5">
          <CarouselContent>
            {Array.from({ length: 1 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden aspect-square flex items-center justify-center p-4">
                  <Image
                    src={prize}
                    alt={`Random image ${index + 1}`}
                    className="w-full h-full object-cover rounded-sm"
                    style={{ width: '400px', height: '400px' }}
                  />
                </Card>
                <div>
                  <h1 className="text-2xl font-semibold sm:text-2xl pt-5">
                    UI/UX <span className="text-blue-600">Winners</span>
                  </h1>
                  <p className="text-base text-slate-400 text-justify">
                    Hackathon conducted by TEXUS&apos;23 and Organised by the Department
                    of Computer Science, SRM Institute of Science and Technology, Ramapuram Campus.
                    Took Place at IITM Incubation Cell.
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>


        <Carousel className="aspect-ratio-auto max-w-sm flex justify-center items-center p-5">
          <CarouselContent>
            {Array.from({ length: 1 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden aspect-square flex items-center justify-center p-4">
                  <Image
                    src={paper}
                    alt={`Random image ${index + 1}`}
                    className="w-full h-full object-cover rounded-sm"
                    style={{ width: '400px', height: '400px' }}
                  />
                </Card>
                <div>
                  <h1 className="text-2xl font-semibold sm:text-2xl pt-5">
                    Research <span className="text-blue-600">Publication</span>
                  </h1>
                  <p className="text-base text-slate-400 text-justify">
                    I&apos;m excited to contribute to the field of App Development.
                    Additionally, I&apos;m proud to announce that I&apos;ve recently earned my ARET-2024
                    certification of Presentation and Publication.
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>



        <Carousel className="aspect-ratio-auto max-w-sm flex justify-center items-center p-5">
          <CarouselContent>
            {Array.from({ length: 1 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden aspect-square flex items-center justify-center p-4">
                  <Image
                    src={certificate}
                    alt={`Random image ${index + 1}`}
                    className="w-full h-full object-cover rounded-sm"
                    style={{ width: '400px', height: '400px' }}
                  />
                </Card>
                <div>
                  <h1 className="text-2xl font-semibold sm:text-2xl pt-5">
                    Oracle <span className="text-blue-600">Database Foundations</span>
                  </h1>
                  <p className="text-base text-slate-400 text-justify">
                    Oracle Database Foundations course.Now I have gained a solid understanding
                    of the underlying ideas behind database management
                    utilising Oracle technology thanks to this extensive training.
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
