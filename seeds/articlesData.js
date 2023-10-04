const { Articles } = require('../models');

const articlesData = [
  {
    title: 'Computer science vs Information technology?',

    created_by_user_id: 1,
    content: `The college I want to go to has two majors. One is computer science and the other one is information technology. It looks to me like the main difference is the lack of math and physics in information technology. They both have similar jobs listed for after graduation and similar class loads except for the math/physics. Would taking information technology bar me from some jobs? Does it look better to have taken computer science? `
  },
  {
    title: 'How to prepare for a Front End interview ',

    created_by_user_id: 2,
    content: ` Earlier this year I found myself diving into Frontend interview prep, and looking online for advice on how best to do this (it having been a few years since the last time I went through the wringer).

The common advice seemed to boil down to:

    Grind as many Leetcode questions as you can

    Get ready for countless JS/CSS/HTML trivia questions

After half a dozen interviews with Bay Area companies, I personally experienced just one Leetcode-style algorithmic question (a pretty basic graph question) and zero FE trivia questions.

My Frontend interview experience was roughly: 25% culture fit, 25% system design/experience (e.g. discussing a project I worked on and choices I made, or walking through designing some system), and 50% practical Front End coding.

This obviously doesn't match up at all with the current advice for preparing for a Frontend interview, possibly for a few reasons:

    Trivia and Leetcode-style questions were popular up until a few years ago, but are becoming less popular in favor of practical coding and take-home exercises

    Most of the highly ranked advice on Google etc was relevant a few years ago, and it'll take a while for blog posts, courses, etc with up-to-date advice to catch up

    I only interviewed at Bay Area companies, so maybe non-Bay Area companies still ask mostly trivia and Leetcode questions?

(Big caveat: my experience is mostly limited to companies in the Bay Area. It could well be that outside of this bubble the interview experience is entirely different, so I'm very interested to hear your own experiences!)
How I'd prepare for a Front End interview today
Do your research on the company

If you have a specific company in mind, or an interview scheduled, do research on the company to see if any information is available on the interview format. This information is occasionally on Glassdoor, but could be incomplete or outdated. I would recommend asking the recruiter/hiring manager what to expect, or if there's anything specific you should do to prepare.

Prepare for practical coding interviews

Interview format: 30-60 min coding a practical feature/component in a collaborative environment (e.g. codepen.io)

In my opinion, your main focus should be on practical coding. I've added a few of my favorite Front End practice questions below, and have added a few more to frontendeval.com - a small site a friend and I put together to help others prepare for Front End interviews.

At a glance, questions like these can be intimidating, and I have been the recipient of some truly scary questions (e.g. implement 2-player Battleship). However, like solving Leetcode questions this is one of those things that you just get better at over time. It's certainly not a perfect model for testing a candidate, but it does at least require some of the same day-to-day skills:

    Breaking down a large problem into manageable pieces

    Asking clarifying questions

    Understanding trade-offs in different approaches

    Learning how to debug issues (and using debugging tools)

    Validating your implementation and testing edge cases

To prepare for this interview, I'd suggest making lots of small projects in a similar environment

    codepen.io seems to be pretty commonly used for interviews. I'd suggest practicing in this environment to get familiar with the UI, shortcuts, available libraries, etc

    When doing a practice question, read the prompt and think about what clarifying questions you might ask in a real interview (e.g. unclear requirements, edge cases you might need to account for)

    Forget time limits initially, just focus on completing the question to the best of your ability. After completing, review your approach: what went well, did you get stuck on any specific parts, what could be improved, etc

    When you've finished a question, think about how you could refactor it for readability, extensibility, re-usability, and performance

    Redo the same question a few times (at a later date), but this time using a different approach. e.g. vanilla JS vs framework, using Redux vs using React context API

Prepare for the culture/behavioral interview

Interview format: 30min talking about the company/engineering culture

Some companies may have a culture interview that focuses on the company culture, while others may have one that focuses on the engineering culture (or both!). It definitely doesn't hurt to prepare for both of these:

    Read through the company/engineering blog to learn as much as you can about the company culture

    Learn what you can about the tech stack. Think about why they might be using one technology over another, and come up with interesting questions you can ask

    Similarly, learn what you can about what the company actually does! What's their history, where are they heading, do they have any big competitors, etc

    Think in advance about the highlights and lowlights of your engineering career: you may be asked to talk about a time you did something well, or overcame some issue

Prepare for an experience interview

Interview format: 30-45min discussing a project you worked on (design decisions, etc)

This interview gives you a chance to talk about a particularly interesting project that you worked on. You will talk through the problem you were solving, the approach you took, and the end result, and the interview will often stop to ask clarifying questions or dive deeply on a particular design decision you made. This interview is one of the easier ones to prepare for: you just need to have a project that you worked on that you can talk about, and can explain why you did things the way you did.

    Pick one or two projects, and write out everything you can about them. A good project to talk about is one that started with a specific problem where you went through a process of identifying multiple possible solutions and finding the best fit

    Prepare for it similar to a presentation, but not so rigorously: make sure you know all of the key points well, but don't rehearse it like a script because there will be a lot of questions and tangents in the interview

    Try and have a good answer for every big decision you made, e.g. "I used React Testing Library over Enzyme because Enzyme has poor support for testing React hooks" vs "I used React Testing Library because I heard it was good"

Prepare for a system design interview

Interview format: 30-60min

This interview seems to be common in interviews for more senior roles. You will be presented with a question such as "How would you design a photo sharing service?" and have to talk through the system design at a high-level, occasionally drilling into specific aspects (e.g. db schema, scalability). This interview is a bit of a weird one for me: working as a Front End engineer at a big tech company I may do some backend or infra work occasionally, but my knowledge of much of the stack is limited. This would probably be less of an issue if I worked at a startup and had to wear many more hats, but in my current role this is definitely a subject I feel I need to relearn whenever I interview.

Grokking the System Design interview seems to be the top result for preparing for this interview, but I can't say I was too impressed. The practice questions and walkthrough were pretty good, but the learning part of the course was poor: they appeared to be largely copy-pasted from random articles on the web, missing lots of context, and jumping around between topics in a random order.

If I were to prepare for this again from scratch, I'd try and find a good (and up-to-date) book or course on system design, and then just do the practice questions on Grokking/in this repo.

Prepare for any interview

Have interesting questions to ask! Your time for questions will come up at the end of the interview, so as well as being an opportunity to find out if it's actually somewhere you want to work (remember, you're interviewing them as much as they're interviewing you), it's also a great chance to demonstrate your knowledge of the industry, company, and technology.

Having sat on the other side of the table quite a few times I feel that this can really make a lot of difference. While it won't necessarily turn a 'No' into a 'Yes', it could turn a 'Yes' into a 'Strong yes'.

Some general tips:

    Stay away from generic questions, e.g. "What's it like to work here?", "What's your favorite part about working here?"

    See if you can find out from the hiring manager/recruiter who will be your interviewers and find out their background. This won't always help much, but sometimes can depending on the interview. For example, I discovered my interviewer for an Experience interview was in an Infra role, so I decided to talk about a more web infra-related project I had worked on rather than a pure Front end project

    Researching the company and the domain in advance will help you come up with good questions. Read the company blog, news articles, and if possible be sure to use the product
`
  },
  {
    title: 'Are you a developer procrastinating on creating your portfolio + blogging site? ',

    created_by_user_id: 3,
    content: `

I developed a template out of my personal website for other developers who are procrastinating on creating their portfolio site. You can showcase your projects, write blogs all in developer friendly markdown and configure the entire website from one config file.

You can also showcase your github contributions on the homepage in a beautiful heatmap.

If you need comments/likes on your blog/project, you can integrate firebase auth and firestore in may be 5 minutes.

It's a dark themed, SEO friendly: Nuxt Content + TailwindCSS + Firebase + i18n based SPA for developers.

Check it out here: https://github.com/karngyan/karngyan.com
Template with all features enabled: https://template.karngyan.com
`
  },
  {
    title: ' I was wrong ',

    created_by_user_id: 4,
    content: `

I was a javascript purist. Vanilla Javascript was the highest form of frontend programming to me. Everything web components.

I've made a few apps in vanilla javascript. Each taking a few months to complete.

And so I was making another app in vanilla JS, but this one a lot more complex than the other ones. And two weeks go by, working on this thing for about 3-4 hours a day, and I'm barely getting anywhere.

And so I say fuck it and try to actually get something done in React. And it's taken me 3 days of coding in React to get more than I got done in two weeks with vanilla JS.

I get it now. React/frameworks are a hell of a lot less code and headache and doing everything manually than vanilla JS. Don't get me wrong, I couldn't have gotten this far in React if I didn't spend countless hours making shit in vanilla JS. But geez, it's like night and day here.
`
  },
];

const seedArticles = () => Articles.bulkCreate(articlesData);

module.exports = seedArticles