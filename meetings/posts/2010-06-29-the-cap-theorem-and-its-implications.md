---
title: The CAP Theorem and its Implications
date: '2010-06-29'
---
# {{ title }}

In 2000, Eric Brewer proposed the CAP Conjecture. It was proven in 2002 by a group at MIT, and is henceforth known as the CAP Theorem.

The CAP Theorem states that any subsystem can have only two of these three attributes:

-   Consistency
-   Accessibility
-   Partitioning

Consistency is the property that two users see the same state. Accessibility means that users can get to their data. Partitioning places subsets of data in different locations.

If you can have only two, which two do you choose? Everyone agrees on accessibility. Traditional architectures have chosen consistency over partitioning. New architectures are reversing that trend. We will discuss architectural decisions, such as:

-   Eventual Consistency
-   Event Sourcing
-   Command Query Responsibility Segregation

I will demonstrate ways of coding these architectures, and the benefits and drawbacks of these techniques.

<table><tbody><tr><td>Speaker:</td><td>&nbsp;</td><td>Michael Perry</td></tr><tr><td>Date:</td><td>&nbsp;</td><td><b>Wednesday July 7th, 2010</b></td></tr><tr><td>Time:</td><td>&nbsp;</td><td><b>6:00 - 8:30</b></td></tr><tr><td>Location:</td><td>&nbsp;</td><td><b>Intuit Headquarters</b><br>Maps: <a href="http://maps.google.com/maps?q=5601 Headquarters Drive,+Plano,+TX+75024+United States&amp;hl=en" target="_blank">Google</a> | <a href="http://maps.yahoo.com/maps_result?addr=5601 Headquarters Drive&amp;csz=Plano,+TX+75024&amp;country=us" target="_blank">Yahoo</a> | <a href="http://www.mapquest.com/maps/map.adp?country=US&amp;address=5601 Headquarters Drive&amp;city=Plano&amp;state=TX&amp;zipcode=75024" target="_blank">Mapquest</a> | <a href="http://maps.live.com/default.aspx?v=2&amp;style=r&amp;lvl=100&amp;where1=5601 Headquarters Drive%2CPlano%2CTX%2C75024" target="_blank">Microsoft</a></td></tr></tbody></table>

## [RSVP Here](http://thecaptheorem.eventbrite.com/)

## Speaker Bio

Throughout his career, Michael has applied mathematical concepts to the construction of software. As a Solutions Architect at AmerisourceBergen, he applies the concepts of eventual consistency, event sourcing, and CQRS to building scalable and robust enterprise systems. He has written about the mathematical underpinnings of various algorithms in C/C++ Users Journal, Delphi Informant, and Code Magazine. Craig Shoemaker interviewed him on the Polymorphic Podcast about Update Controls, an open source project based on the mathematical concept of dependency. You can find out more at qedcode.com.

Make sure to attend, because in addition to our awesome presenter, we have some way cool giveaways.

## Sponsors

[![](http://nddnug.net/files/uploads/intuit_logo.jpg)](http://intuit.com)  
NorthDallas.net graciously thanks Intuit for their continued sponsorship  
and support. Without their fine meeting facilities awesome team members, our meetings would not be possible.  
  
For more information, please visit: [http://www.intuit.com/](http://www.intuit.com/)

[![](http://northdallas.net/files/sponsor/MedAssetsLogo.png)](http://www.medassets.com)

**MedAssets**

**Financial Solutions for Healthcare Providers**

Our mission is to partner with hospitals and health systems to enhance their financial strength through improved operating margins and cash flow.

**Imagine What Caring & Innovative People Can Do For Healthcare.**

At MedAssets our people are our competitive advantage. Although our 1700 employees come from diverse backgrounds and have wide-ranging skills, we all share the same mission and core values. MedAssets is committed to recruit, retain and promote individuals with compassion, character, confidence, and commitment. Looking beyond the present and challenging the notion about what is possible in healthcare is what we do and what we expect from our team.

Our employees, in all of our locations, thrive in a fun, high-energy atmosphere and believe in the power of the team being greater than the sum of its parts. This commitment to teamwork extends beyond the workplace into the community through our unique Heart & Soul program that offers employees paid time off to work with charitable organizations.

MedAssets' comprehensive employee benefits portfolio offers flexible healthcare options, performance-based incentives, a great time-off program, retirement savings plans and more.

If you’re ready to discover what it’s like to be a part of a truly special organization, we invite you to view our current openings.

[http://www.MedAssets.com/](http://www.MedAssets.com/)

 ![](http://northdallas.net/files/media/image/TekPub.JPG)
    
