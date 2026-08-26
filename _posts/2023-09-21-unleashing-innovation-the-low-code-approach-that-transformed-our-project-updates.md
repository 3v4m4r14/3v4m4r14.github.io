---
title: Transforming project updates with low-code innovation
date: 2023-09-21T09:07:17.000Z
image: /assets/img/posts/unleashing-innovation-the-low-code-approach-that-transformed-our-project-updates/amongus.webp
description: 
tags:
  - technology
  - ux

---
Ever wished you could revolutionize your work processes without coding skills? Discover how a simple idea and a low-code solution transformed our status updates, and how you can do the same!

In today’s ever-evolving organizational landscape, there is a common misconception that innovation and transformative change are exclusive domains reserved for tech wizards and coding maestros. However, I want to share a story that emphasizes a fundamental truth: the power to create value and drive change knows no boundaries, and it does not hinge on your job title or coding skills.

> “The power to create value and drive change knows no boundaries, and it does not hinge on your job title or coding skills.”

At [Playtech](https://www.playtech.com/), my unit encountered a challenge that many organizations face: how to streamline the process of sharing project status updates. Our mission was simple: to enhance existing systems and processes, making them more user-friendly, accessible, and efficient. We embarked on a journey to discover how technology, specifically low-code solutions, could be a catalyst for change, even in the hands of those without a coding background.

In this article, I will show you how we leveraged [Microsoft PowerApps](https://powerapps.microsoft.com/en-us/ "Microsoft PowerApps") to create a user-friendly, low-code prototype for managing status updates. This minimum viable product (MVP) is already making a significant impact by simplifying complexity. I will walk you through our experience, emphasizing a practical approach that can inspire anyone, regardless of their coding expertise, to revolutionize their processes.

If you’re eager to discover how anyone, no matter their role or skills, can be a driving force of positive change within their organization, read on. Together, we will explore a solution that underscores the idea that the path to innovation is open to all.

## Identifying the Challenges: Our Initial Project Update Dilemma

In our team, sending in project-related status updates used to be a manual and time-consuming task. Team members diligently copied and pasted information from the previous week’s email, adjusting only the parts that had changed, such as project phases or comments. In addition, our team leads used to spend time manually transferring data from those emails to a central project board.

Thus, from both first-hand experience and extensive user research, it was clear that we had the potential for improvement: the process was overwhelming for the participants, the regularity and quality of status updates were highly dependent on technical project managers’ way of working, and team leads were burdened with manual data extraction tasks. The old system’s cumbersome nature occasionally led to forgotten, avoided, or erroneous status updates, hindering effective communication and progress tracking.

While our process worked, it was evident that we could enhance it to save time and ensure a smoother flow of information. Our objective was never to discredit our existing systems and processes. Instead, we aimed to refine and modernize them, making them more user-friendly, accessible, and efficient. We [saw an opportunity]({% post_url 2020-03-09-tcd-creative-thinking-and-innovation %}) to embrace technology as a means to simplify, not disrupt.

## A Closer Look at Status Update Sender 

At the heart of the transformation lies a user-friendly, low-code prototype I crafted using [Microsoft PowerApps](https://powerapps.microsoft.com/en-us/). Our minimum viable product is called **Status Update Sender** or, affectionately, **SUS**. This solution, while still a work in progress, has already begun reshaping the way we handle project-related status updates.

SUS has two key components for the two target groups:

-   **Web app for project managers:** A web application simplifies the process of sharing status updates for technical project managers. It allows them to effortlessly add new projects, search for existing ones, and edit project details such as name, progress percentage, phase, comments, critical dates, and integration test results. This information is neatly stored in a local “database” (an Excel table for MVP purposes). Edits automatically generate a status update email with the subject and recipient fields automatically populated, removing one more item from project managers’ mental load.

-   **Script for team leads:** A Python script takes data from the Excel file where updates are held and writes it directly into [Monday.com](https://monday.com/), where an overview of projects is kept. The script eliminates the need for time-consuming and error-prone manual entries. It enhances efficiency and frees up team leads to focus on more strategic tasks.

The user interface of Status Update Sender prioritizes functionality while maintaining simplicity. Comprising three screens within the PowerApps canvas app, it efficiently serves the needs of technical project managers. The primary screen provides an overview of active, on-hold, and upcoming projects, displaying essential project details. Users can select a project to access the editing view, where they can modify project-related information and add comments. An email preview and recipient editing popup are integrated within this view. Upon saving changes, the user lands on a read-only form with updated project details, assuring them that the edits were successful. The streamlined UI enhances usability.

{% include elements/figure.html image="/assets/img/posts/unleashing-innovation-the-low-code-approach-that-transformed-our-project-updates/screen1.webp" caption="Overview of projects" %}

{% include elements/figure.html image="/assets/img/posts/unleashing-innovation-the-low-code-approach-that-transformed-our-project-updates/screen2.webp" caption="Editing view" %}

{% include elements/figure.html image="/assets/img/posts/unleashing-innovation-the-low-code-approach-that-transformed-our-project-updates/screen3.webp" caption="Email preview" %}

{% include elements/figure.html image="/assets/img/posts/unleashing-innovation-the-low-code-approach-that-transformed-our-project-updates/screen4.webp" caption="Read-only project information" %}

Using PowerApps’ built-in functionality, SUS harnesses the capabilities of [Office365](https://www.office.com/) services, specifically Office365Users and Office365Outlook. These integrations facilitate searching for people within our organization, obtaining their email addresses, and sending emails directly from the SUS app. Moreover, SUS can be seamlessly integrated into Microsoft Teams as a dedicated tab, offering convenient access to project-related information.

While SUS automates many aspects of project status updates, some manual actions remain. SUS operates in conjunction with our central project management repository hosted on [Monday.com](https://monday.com/). To simulate seamless data exchange, I export the Monday board to an Excel file weekly. This file is still manually edited – I remove formatting and convert it into a table that PowerApps can effectively read and write to. Once status updates have been submitted, team leads run a Python script to write data from the Excel database back to [Monday.com](https://monday.com/).

Being a fully functional prototype, SUS serves as a proof of concept, demonstrating rapid value delivery. While it effectively streamlines project updates for now, the scalability of the web app is limited by the Excel sheet acting as a data source. The occasional data corruption and saving issues that occurred have, thankfully, mysteriously reduced over time. With a more robust database structure, SUS could be designed for scalability, though a comprehensive, long-term solution was never the main goal when working on this passion project.

In the end, SUS is reliable enough for the tasks it was created for. By harnessing the capabilities of [Microsoft PowerApps](https://powerapps.microsoft.com/en-us/) and integrating seamlessly with our existing Microsoft products, SUS offers a streamlined approach to project status updates, enhancing communication and productivity for our team. Thus, it perfectly demonstrates the rapid delivery of value with limited resources.

## Making Work Easier and More Pleasant: The Positive Outcomes of Our Solution

The impact of Status Update Sender has been nothing short of transformational. The benefits that have unfolded include:

1.  **Enhanced communication:** Thanks to the simplicity of SUS, our technical project managers treat status updates as a more pleasant task to complete than before. Colleagues who were once reluctant to send updates now find the process so much more user-friendly that their participation has significantly increased. Furthermore, automatically adding project team members to the CC list ensures everyone is always in the loop. The result is heightened visibility and more streamlined communication across the organization.

2.  **Saved time:** From a team lead perspective, the hours spent copying information from emails to our [Monday.com](https://monday.com/ "Monday.com") board have dramatically decreased. What used to take 30 minutes can now be accomplished in a mere 5 minutes or less. The efficiency gains are not only tangible but also liberating, allowing us to allocate more time to strategic tasks and the well-being of our people.

3.  **Engaged project managers:**  By simplifying the process of sending project-related status updates, we have ignited a newfound enthusiasm among team members. Quoting one of our integration managers Andre Pukk, “Life is definitely better now; sending reports is no longer a hassle as it used to be. The previous email formatting was a nightmare. I recommend everyone to start using Status Update Sender!”. Redesigning previously burdensome tasks and showing how anyone can effortlessly create value has contributed to a more inspiring atmosphere.

4.  **Simplified emails:** Our simplified email templates reduce unnecessary noise, making it easier for team members to provide concise updates and align them with our central project board on [Monday.com](https://monday.com/). True, some details about risks and issues might be less prominent, but this has been a challenge regardless of the template format – how thoroughly people document their projects strongly relies on intrinsic motivation and individual ways of working.  I believe this trade-off is well worth the overall efficiency and clarity gained.

In a nutshell, our low-code solution has not only modernized and streamlined our project-related status updates but has also elevated overall communication, efficiency, and team morale. It is proof that you do not need to be a coding expert to create real value for your organization.

> “Life is definitely better now; sending reports is no longer a hassle as it used to be. The previous email formatting was a nightmare. I recommend everyone to start using Status Update Sender!”
> 
> <cite>– Andre Pukk, integration manager</cite>

## Challenges Unveiled: A Quick Start and Unexpected Twists

Of course, bringing this solution to life wasn’t without its challenges. Getting a basic prototype up and running was relatively quick and took about 10 minutes. Adding the tweaks and any extra functionality, however, required time and effort. I encountered various hurdles along the way:

-   **Data format alignment:** One of the initial challenges we encountered was aligning data formats and connections between the Monday board, Excel file, and PowerApps user interface. For example, the [Monday.com](https://monday.com/) export displays dates in a single number format, but PowerApps requires them in a short date format. Furthermore, while the Monday export looks pretty to the eye, it cannot directly be used as input for PowerApps where a plain table with no formatting is required.

-   **Email and Monday.com differences:** In order to use the Python script, ensuring that the information in our update emails matched the column on Monday.com was also a challenge. To streamline the automatic writing process, we had to simplify the format of the emails, even if it meant removing some details.

-   **Mysterious network errors:** We faced sporadic PowerApps network errors that temporarily disrupted the saving of updates. Although emails could still be sent out, the updates were not being saved into the database. Thankfully, they vanished as mysteriously as they appeared, although the exact cause remains a mystery.

-   **Data storage mysteries:** At one point, we encountered a mysterious issue where information within the Excel database jumped around in columns randomly. The cause of this phenomenon remains unknown, but fortunately, it resolved itself, sparing us from the headache. _(Note, though, that I cannot recommend using Excel instead of a database – while it achieves our goal, it is not trustworthy enough.)_

-   **Manual work residue:** As mentioned above, some manual tasks remain, like exporting the [Monday.com](https://monday.com/) table weekly to ensure the Excel database remains up-to-date as well as initiating the script to write the updates to [Monday.com](https://monday.com/).

-   **Coding:** Despite having a degree in informatics, getting started with the Python script still required me to consult with a more proficient colleague. He created a rough draft which proved crucial in keeping me motivated to continue with the team lead target group as well.

Collaboration played a crucial role in surmounting these challenges. The support of co-workers like Jan Vend, who helped with the script, and the invaluable feedback and feature suggestions from my team – the main user group – were instrumental in refining our low-code solution.

![](/assets/img/posts/unleashing-innovation-the-low-code-approach-that-transformed-our-project-updates/diagram.webp)

## Empowering Non-Coders: Creating Value Without Tech Expertise

One of the most inspiring takeaways from our journey with Status Update Sender (SUS) is the realization that you do not have to be a coding expert to drive innovation and make a substantial impact on your organization. SUS stands as a shining example of how low-code solutions can be your gateway to digital transformation, regardless of your coding proficiency.

In the past, you might have believed that developing an application to streamline project-related status updates was a task reserved for IT professionals or seasoned developers. However, SUS challenges this notion and opens doors for everyone, irrespective of their coding skills by:

1.  **Embracing low-code simplicity:** Low-code platforms like [Microsoft PowerApps](https://powerapps.microsoft.com/en-us/) provide intuitive tools and pre-built components, making app development accessible to individuals with varying levels of coding expertise. SUS was born from a desire to simplify processes, not from complex coding acrobatics.

2.  **Designing with the user in mind:** SUS’s success is attributed to its user-centric design approach. Rather than diving into complex code, the focus was on understanding the needs of end-users, such as our technical project managers and team leads. By aligning the solution with user requirements, SUS achieved a level of usability and functionality that resonates with its audience, all without writing extensive code.

3.  **Relying on rapid prototyping:** Low-code platforms offer the freedom to experiment and rapidly prototype. SUS started as a basic prototype and evolved through user feedback and evolving requirements. The agility of low code enables quick adaptation without the need for protracted development cycles.

4.  **Focusing on outcomes, not coding wizardry:** Low-code solutions shift the focus from coding intricacies to achieving practical results. SUS was created to simplify status updates, not to showcase complex coding feats. It serves as a reminder that our goal is to solve problems and deliver practical solutions, not to win coding awards.

In a tech-driven world, Status Update Sender (SUS) reminds us that you do not necessarily need coding skills to make a significant impact. While it is true that a script component has been added to SUS, it was already creating value for our technical project managers as a basic three-screen app. It is a real-life example of how low- and no-code solutions can empower individuals from diverse backgrounds to innovate, streamline processes, and deliver substantial value to their organizations. It is about keeping things simple with the available tools and focusing on what users truly need. For us, SUS has made handling project status updates a breeze, proving that you can be a digital change-maker with just a low-code platform and a straightforward idea. So, remember that anyone, regardless of their coding skills, can be a driving force in the world of digital transformation.

* * *

_PS! If your company is using Microsoft tools, you might already have access to PowerApps as well!_