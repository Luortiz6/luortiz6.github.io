"use strict";(self.webpackChunkortizlu=self.webpackChunkortizlu||[]).push([[6],{3027:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return d}});n(7294);var a=n(4983),o=n(1670),i=["components"],r={date:"May 25, 2022",title:"Moment.js to Date-fns Migration",href:"moment-to-date-fns-migration",slug:"moment-to-date-fns-migration",image:"moment-to-date-fns-migration.jpg",description:"During a few of our quarterly innovation sprints..."},s={_frontmatter:r},l=o.Z;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);return(0,a.kt)(l,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"During a few of our quarterly innovation sprints (sprints where we focus on new innovative ideas or\napproaches), we thought it would be a good idea to sunset Moment.js and migrate to a more modern approach to\ndates."),(0,a.kt)("h2",null,"Why Did We Migrate?"),(0,a.kt)("p",null,"To put it plainly, we were forced to migrate. We received the sad news on September 2020 that Moment.js would\nno longer be maintained. Moment.js has served faithfully on a vast number of websites over the history of the\nweb, but in recent years there have been a surge of more modern and lighter replacements. Additionally, the\nbundle size of Moment is large, and the fact that it provides no tree shaking meant that we would have to load\nthe entire library on every file that used Moment. Lastly, our engineering team was zealous for as much\n“correct” practices as possible, so we wanted a library that promoted immutability."),(0,a.kt)("p",null,"Sure, we could’ve just used vanilla JS. But for the amount of formatting we did as an investment company, it\nmade sense to just to use one of the new fancy libraries, which led us to Date-fns."),(0,a.kt)("h2",null,"The Process"),(0,a.kt)("p",null,"It took a very long time to go through our entire codebase in order to convert every instance of Moment to\nDate-fns. We began with our API, storybook, and utilities repos. After those were completed, the busy season\ncreated an awkward hiatus where our engineers had to learn Date-fns if they needed to work on the back-end but\nstill rendered dates with Moment on the client. But, after a few months later, we finally had enough time to\nget to the biggest hurdle, the client, in order to finally nuke Moment.js for good (R.I.P 🪦 )."),(0,a.kt)("h2",null,"The Challenges"),(0,a.kt)("h3",null,"1. Reading From the Inside-Out"),(0,a.kt)("p",null,"The first hurdle was getting through the initial understanding of how Date-fns works. The coolest thing about\nMoment was that a function always returned a Moment object, which allowed for chaining, and consequently,\neasier-to-read code. For example:"),(0,a.kt)("deckgo-highlight-code",{language:"js",terminal:"none",theme:"one-dark"},"\n          ",(0,a.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'moment().add(1, "months").format("MM/DD/YYYY");'),"\n        "),(0,a.kt)("p",null,"Even if you’ve never used Moment, you can guess pretty easily what's happening if you read from left to\nright. First, we create a Moment object without any arguments, which defaults to today’s date. We add 1 month, and return a\ndate string with the format of MM/DD/YYYY. So, if today is May 25, 2022, the resulting string would be ",(0,a.kt)("inlineCode",{parentName:"p"},"05/25/2022"),"."),(0,a.kt)("p",null,"But in Date-fns, you would read from the inside out. The same operation would read like this in Date-fns:"),(0,a.kt)("deckgo-highlight-code",{language:"js",terminal:"none",theme:"one-dark"},"\n          ",(0,a.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'format(addMonths(new Date(), 1), "MM/DD/YYYY");'),"\n        "),(0,a.kt)("p",null,"Notice that the first operation is the deepest: creating a new JS Date object with today’s date. Then, we\nwrap that in ",(0,a.kt)("inlineCode",{parentName:"p"},"addMonths()"),", add 1 as the second parameter, then wrap that in a format function and pass ",(0,a.kt)("inlineCode",{parentName:"p"},"MM/DD/YYYY")," as the second parameter."),(0,a.kt)("h3",null,"2. Replacing ",(0,a.kt)("inlineCode",{parentName:"h3"},"moment()")),(0,a.kt)("p",null,"The second coolest thing about moment is how concise the ",(0,a.kt)("inlineCode",{parentName:"p"},"moment")," function is at parsing out date strings. Date-fns has a ",(0,a.kt)("inlineCode",{parentName:"p"},"parse")," function, but it is much more verbose than calling ",(0,a.kt)("inlineCode",{parentName:"p"},"moment()"),". Which is why created our own helper function to simplify the migration process. You can find the function at the bottom of the article."),(0,a.kt)("h2",null,"A Few More Differences"),(0,a.kt)("p",null,"But even with some noticeable differences, using Date-fns starts becoming more and more intuitive after a\nwhile. But there were a few more differences we realized we had to keep track of. Firstly, Moment can guess\nsome formats without even being explicit:"),(0,a.kt)("deckgo-highlight-code",{language:"js",terminal:"none",theme:"one-dark"},"\n          ",(0,a.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'const completionDate = "2020-11-13";\nmoment(completionDate).isValid(); //true\nisValid(parse(completionDate, "", new Date())); // true\n\nconst completionDateStardard = "11/13/2020";\nmoment(completionDateStardard).isValid(); //true\nisValid(parse(completionDateStardard, "", new Date())); // false\n\nconst completionDateTwoDigitYear = "11/13/20";\nmoment(completionDateTwoDigitYear).isValid(); //true\nisValid(parse(completionDateTwoDigitYear, "", new Date())); // false'),"\n        "),(0,a.kt)("p",null,"Moment can guess the standard US format of MM/DD/YYYY and MM/DD/YY whereas Date-fns cannot. In this case, I\nbelieve it makes more sense to be as explicit as possible, but there were quite a few instances of past\ndevelopers letting Moment do the guess work."),(0,a.kt)("p",null,"Another difference is the fact that Date-fns does not allow adding floating years and months:"),(0,a.kt)("deckgo-highlight-code",{language:"js",terminal:"none",theme:"one-dark"},"\n          ",(0,a.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'const isOldEnoughMoment = moment(birthday, "MM/DD/YYYY")\n  .add(59.5, "years")\n  .isBefore();\n\n// half years need to be calculated as 6 months with Date-fns\nconst isOldEnoughDateFns = isBefore(\n  addMonths(addYears(parse(birthday, "MM/dd/yyyy", new Date()), 59), 6),\n  new Date()\n);'),"\n        "),(0,a.kt)("p",null,"But the biggest headache was working with UTC time. A whole separate blog post could be written about\nmigrating code that used UTC time, but in summary, the benefit of the Moment object is that it can store time\nzone data, whereas vanilla Date objects cannot. Therefore, if we are passing dates over\nmultiple files, it is important to keep track of what was originally intended with the date. The following is\na small example of what I mean:"),(0,a.kt)("deckgo-highlight-code",{language:"js",terminal:"none",theme:"one-dark"},"\n          ",(0,a.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'import { format as formatTZ, utcToZonedTime } from "date-fns-tz";\n\n// ---------------------------\n// Now in EDT via Moment\n// ---------------------------\n\nconst nowInESTMoment = moment().tz("America/New_York");\n\n// ...in another file\nnowInESTMoment.format("LLL z"); // May 25, 2022 1:55 PM EDT\n\n// ---------------------------\n// Now in EDT via Date-fns\n// ---------------------------\n\nconst nowInETDateFns = utcToZonedTime(new Date(), "America/New_York");\n\n// ...another file\n// Date-fns format without time zone\nformat(nowInETDateFns, "MMMM d, yyyy p z"); // May 25, 2022 1:55 PM GMT-7\n\n// date-fns-tz format with time zone specified\nformatTZ(nowInETDateFns, "MMMM d, yyyy p z", { timeZone: "America/New_York" }); // May 25, 2022 1:55 PM EDT'),"\n        "),(0,a.kt)("p",null,"Notice that Moment keeps track that the timestamp was converted to EST/EDT and can easily format with the\ncorrect specified time zone. Whereas Date-fns does not have the correct time zone unless we use the\ndate-fns-tz ",(0,a.kt)("inlineCode",{parentName:"p"},"format()")," function and explicitly provide the correct time zone."),(0,a.kt)("h2",null,"Conclusion"),(0,a.kt)("p",null,"Nonetheless, all the hard work eventually paid off, and our bundle size for our app decreased significantly\nwith the removal of Moment. Date-fns is awesome and will most likely be used in many newer apps for the next\nfew years. But I look forward to a day where we can use a more native approach, like the upcoming Temporal object!"),(0,a.kt)("deckgo-highlight-code",{language:"js",terminal:"none",theme:"one-dark"},"\n          ",(0,a.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"/**\n* Get Date Helper Function for Date-fns\n* Parse the input date with a given input format into a Date object\n* @param [date] - the date specified in a string, Date, or number\n* @param [inputFormat] - what format the input date is currently in, using date-fns format patterns - https://date-fns.org/v2.19.0/docs/format\n* @returns a Date object parsed from the input date string, Date, or number\n*/\n\nexport const getDate = (\n  date?: string | Date | number,\n  inputFormat?: string,\n): Date => {\n  const invalidDate = new Date('Invalid Date');\n  if (date instanceof Date) {\n    return date;\n  } else if (typeof date === 'number') {\n    return new Date(date);\n  } else if (typeof date === 'string') {\n    if (typeof inputFormat === 'string' && inputFormat !== '') {\n      const splitDate = date.split(/[^0-9]/g) || [];\n      const firstVal = splitDate[0] || '';\n      const secondVal = splitDate[1] || '';\n      const thirdVal = splitDate[2] || '';\n      // perform extra checks for specific input formats\n      switch (inputFormat) {\n        case DateFormat.StandardSlash:\n          return firstVal.length <= 2 &&\n            secondVal.length <= 2 &&\n            thirdVal.length === 4\n            ? parse(date, inputFormat, new Date())\n            : invalidDate;\n        case DateFormat.MonthYearSlash:\n          return firstVal.length <= 2 && secondVal.length === 4\n            ? parse(date, inputFormat, new Date())\n            : invalidDate;\n        default:\n          return parse(date, inputFormat, new Date());\n      }\n    } else {\n      return parseISO(date);\n    }\n  } else {\n    // moment(undefined, format) returns an Invalid Date object, so need to replicate that behavior here\n    return inputFormat ? invalidDate : new Date();\n  }"),"\n        "),(0,a.kt)("h2",null,"Related Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tc39.es/proposal-temporal/docs/"},"Temporal Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Momentjs"},"You don't Need Moment.JS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://date-fns.org/docs/Getting-Started"},"Date-fns Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unsplash.com/photos/O1_vdzQZwMY"},"Article Image By Jonas Elia on Unsplash"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-moment-to-date-fns-migration-mdx-bee4e4af5755ca63fb9e.js.map