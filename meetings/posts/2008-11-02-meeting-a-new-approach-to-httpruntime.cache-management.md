---
title: '11/5/2008 Meeting: A New Approach to HttpRuntime.Cache Management'
date: '2008-11-02'
---
# {{ title }}

![David Penton](http://northdallas.net/files/headshot/headshot-dpenton.jpg)  
David Penton  
[David's Blog](http://pentonizer.com)  

Our next meeting is on **Wednesday 11/5/2008**, where former SQL Server MVP David Penton will lead us through a low-level, code-intensive presentation of a new caching mechanism for ASP.NET & SQL Server.

Topic:

A New Approach to HttpRuntime.Cache Management

Date:

Wednesday, November 5, 2008

Time:

6:00pm

Where:

Intuit's Headquarters in Plano Texas  
          Maps: [Google](http://maps.google.com/maps?q=5601 Headquarters Drive,+Plano,+TX+75024+United States&hl=en) | [Yahoo](http://maps.yahoo.com/maps_result?addr=5601 Headquarters Drive&csz=Plano,+TX+75024&country=us) | [Mapquest](http://www.mapquest.com/maps/map.adp?country=US&address=5601 Headquarters Drive&city=Plano&state=TX&zipcode=75024) | [Microsoft](http://maps.live.com/default.aspx?v=2&style=r&lvl=100&where1=5601 Headquarters Drive%2CPlano%2CTX%2C75024)

  
 

ASP.NET has a wonderful built-in framework for managing Cached items within a website in the namespace System.Web.Caching. It is accessible from HttpRuntime.Cache (among other ways, such as from System.Web.UI.Page.Cache). You have great flexibility with the data you may wish to cache. With this flexibility, there is an extremely important piece missing from HttpRuntime.Cache - and that is thread safety. Not from inside of the Cache, but from the external code that accesses it. Websites under high load could cause a cache item to be populated multiple times. Web applications are multi-threaded (whether you know it or not!). This is wonderful and wicked at the same time. Why, do you ask? This discussion will show you how to manage safely loading items into HttpRuntime Cache. I will also describe methodologies for easily load collections in a thread safe manner.

David L. Penton ([blog](http://pentonizer.com/)) lives in Richardson, TX and has a bachelor's degree in Mathematics from Northwestern State University, Natchitoches, LA. He currently is a Lead Software Development Engineer / Performance Lead at [Telligent Systems, Inc.](http://telligent.com") Before that, he was a technical lead for the International Systems Group and then in Merchandising Systems at JCPenney, Inc., in Plano, TX. Before that, he was a senior business and analysis analyst for Lockheed Martin Missile and Fire Control in Grand Prairie, TX. During that time he has worked on various technologies. He currently spends most of his time with C# and SQL Server. Database platforms he has dealt with (development and admin) include but not limited to SQL Server, Oracle, DB2. David is a member of the ASPInsiders and was formerly a SQL Server MVP for several years.

Thank you to our sponsors for this month!  

[![](http://nddnug.net/files/uploads/intuit_logo.jpg)](http://intuit.com)  
  
NDDNUG gracoiusly thanks Intuit for their continued sponsorship  
and support. Without their fine meeting facilities awesome team members, our meetings would not be possible.  
  
For more information, please visit: [http://www.intuit.com/](http://www.intuit.com/)

[![](http://nddnug.net/files/uploads/Logo-Accuro.png)](http://accurohealth.com)

Accuro's revenue management solutions help providers achieve optimal  
financial results in an era of diminishing resources and expanding  
regulatory complexities. Our Web-based tools help maintain an accurate  
chargemaster to improve reimbursement and ensure compliance; calculate  
expected payment; address transparent pricing issues with rational, yet  
optimum prices; monitor and manage payor performance, and deliver  
pioneering business analytics, including denials management.

[http://www.accurohealth.com/](http://www.accurohealth.com/)
    
