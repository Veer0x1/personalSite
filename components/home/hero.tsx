'use client'

import BlurFadeText from "@/components/blur-fade-text"
import BlurFade from "@/components/blur-fade"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DATA } from "@/data/resume"
import Markdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
const BLUR_FADE_DELAY = 0.04;

const Hero = () => {

  return (
    <main className="flex flex-col space-y-10">
    <section id="hero">
      <div className="mx-auto w-full space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage  alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown
        rehypePlugins={[rehypeRaw]}
        >
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
    {/* <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        {DATA.work.map((work, id) => (
          <BlurFade
            key={work.company}
            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
          >
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section> */}
    {/* <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        {DATA.education.map((education, id) => (
          <BlurFade
            key={education.school}
            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
          >
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </section> */}
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  </main>
     )
}

export default Hero
