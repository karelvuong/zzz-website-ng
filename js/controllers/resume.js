"use strict";

angular.module('karel.controllers')
.controller("ResumeController", function($scope){
    $scope.showOnlyCurrent = false;
    $scope.showOnlyActive = false;

    $scope.experience = [
        {
            company: "Zazzle",
            position: "Product Manager Intern",
            location: "Redwood City, CA",
            date: {
                current: false,
                future: true,
                start: new Date(2015, 0),
                end: new Date(2015, 3)
            }
        },
        {
            company: "BlackBerry",
            position: "Product Manager Intern, Analytics R&D - Quality",
            location: "Waterloo, ON",
            date: {
                current: false,
                start: new Date(2014, 6),
                end: new Date(2014, 11),
                duration: getMonthDifference(new Date(2014, 6), new Date(2014, 11))
            },
            details: [
                {
                    text: "Led efforts for rebuild of the business process management and modelling platform used by over 3,000 active employees."
                },
                {
                    text: "Modernized platform's core architecture and technology stack to move away from strictly Oracle based to a three-tiered architecture using AngularJS, Python, MongoDB and Oracle."
                }
            ]
        },
        {
            company: "BlackBerry",
            position: "Applications Developer Intern, Analytics R&D - Quality",
            location: "Waterloo, ON",
            date: {
                current: false,
                start: new Date(2014, 0),
                end: new Date(2014, 6),
                duration: getMonthDifference(new Date(2014, 0), new Date(2014, 6))
            },
            details: [
                {
                    text: "Conceptualized Lean Six Sigma Green Belt project to redesign and improve processes for marketing, manufacturing, reliability, and software development organizations."
                },
                {
                    text: "Developed administrative tool that acted as a database front end client to allow core team and customers to perform platform support, improving support response time and accelerating onboarding process for new hires."
                }
            ]
        },
        {
            company: "Innovitas",
            position: "Consultant",
            location: "Toronto, ON",
            date: {
                current: false,
                start: new Date(2014, 6),
                end: new Date(2015, 0),
                duration: getMonthDifference(new Date(2014, 6), new Date(2015, 0))
            },
            details: [
                {
                    text: "<strong><a href='http://thetyc.ca/'>Toronto Youth Cabinet - Website</a></strong>",
                    date: {
                        current: false,
                        start: new Date(2014, 6),
                        end: new Date(2015, 0),
                        duration: getMonthDifference(new Date(2014, 6), new Date(2015, 0))
                    },
                    list: [
                        {
                            text: "Launched rebranding campaign by designing new logo, styleguide, and design material."
                        }
                    ]
                }
            ]
        },
        {
            company: "Independent",
            position: "Mobile Application Developer (BlackBerry 10)",
            location: "Toronto, ON",
            date: {
                current: false,
                start: new Date(2013, 8),
                end: new Date(2014, 0),
                duration: getMonthDifference(new Date(2013, 8), new Date(2014, 0))
            },
            details: [
                {
                    text: "Designed and developed apps for BlackBerry 10 using the Native SDK with the Cascades UI Framework (C++, QT/QML):",
                    list: [
                        {
                            text: "<strong><a href='http://bit.ly/karel-cella-bbw'>Cella</a></strong> (BfB Certified): a home inventory management app that securely stores information of possessions in a three-tiered organizational system."
                        },
                        {
                            text: "<strong><a href='http://bit.ly/karel-cooler-bbw'>Cooler</a></strong> (BfB Certified): an app for designers that algorithmically generates colour schemes and palettes through real-time colour manipulation based on RGB and HSV values."
                        }
                    ]
                }
            ]
        }
    ]






    $scope.volunteering = [
        {
            company: "EdAppHack 2014",
            position: "Mentor",
            date: {
                start: new Date(2014, 9)
            },
            details: [
                {
                    text: "Mentored group of secondary school students received an honourable mention for their application prototype, TimeLine."
                }
            ]
        },
        {
            company: "1 Million Music Moments",
            position: "Digital Director",
            location: "Toronto, ON",
            date: {
                current: true,
                start: new Date(2014, 0),
                end: new Date(),
                duration: getMonthDifference(new Date(2014, 0), new Date())
            },
            details: [
                {
                    text: "<strong><a href='http://1MMM.org/feed'>#1MMM Feed</a></strong>",
                        date: {
                            current: false,
                            start: new Date(2014, 2),
                            end: new Date(2014, 6),
                            duration: getMonthDifference(new Date(2014, 2), new Date(2014, 6))
                        },
                        list: [
                            {
                                text: "Developed interactive, content driven feed that aggregates musical moments hashtagged with #1MMM across all social media websites."
                            }
                        ]
                },
                {
                    text: "Defined brand identity across all print and digital mediums: corporate identity, logo, electronic pitch kit, promotional material, sponsor packages, and email campaigns."
                },
                {
                    text: "Oversaw digital outreach by developing concepts with viral potential to drive brand awareness and achieve visible social media presence through analytics and content strategy."
                }
            ]
        }
    ]





    $scope.projects = [
        {
            id: "projectThemesBrackets",
            name: "Themes (Brackets)",
            details: [
                {
                    text: "<strong><a href='https://github.com/karelvuong/fox-brackets--dark'>Fox</a></strong>: A syntax theme based on Mozilla's Firefox Developer Edition."
                }
            ],
            date: {
                active: true,
                format: "MMMM y",
                start: new Date(2014, 10),
                end: new Date()
            },
            tags: ["design", "tool"]
        },
        {
            id: "projectThemesChrome",
            name: "Themes (Chrome Developer Tools)",
            details: [
                {
                    text: "<strong><a href='https://github.com/karelvuong/chromegray'>Chromegray</a></strong>: A theme based on the popular Spacegray Sublime Text 2/3 UI theme."
                }
            ],
            date: {
                active: false
            },
            tags: ["design", "tool"]
        },
        {
            id: "projectThemesST",
            name: "Themes (Sublime Text)",
            details: [
                {
                    text: "<strong><a href='https://github.com/karelvuong/fox'>Fox</a></strong>: A UI + syntax theme based on Mozilla's Firefox Developer Edition."
                }
            ],
            date: {
                active: true,
                format: "MMMM y",
                start: new Date(2014, 10),
                end: new Date()
            },
            tags: ["design", "tool"]
        },
        {
            id: "projectFlow",
            name: "Flow",
            client: "BlackBerry",
            link: {
                internal: true,
                url: "/construction"
            },
            details: [
                {
                    text: "An enterprise-wide business process management and modelling platform used by over 3,000 active employees within BlackBerry worldwide"
                }
            ],
            date: {
                active: false,
                format: "MMMM y",
                start: new Date(2014, 6),
                end: new Date(2014, 11)
            },
            tags: ["web"]
        },
        {
            id: "projectCasa",
            name: "Casa",
            client: "Hack the North 2014",
            link: {
                internal: false,
                url: "https://github.com/casa-"
            },
            date: {
                active: false,
                format: "MMMM y",
                start: new Date(2014, 8),
                status: "Complete"
            },
            details: [
                {
                    text: "A platform that eases the subletting process for students, co-op workers, and young professionals."
                },
                {
                    text: "Conceived at Hack the North 2014 in 36 hours."
                }
            ],
            tags: ["hackathon", "web"]
        },
        {
            id: "projectCuro",
            name: "Curo",
            client: "RBC Royal Bank - Next Great Innovator",
            date: {
                active: false,
                format: "MMMM d, y",
                start: new Date(2014, 5, 7),
                end: new Date(2014, 5, 8),
                status: "Complete"
            },
            details: [
                {
                    text: "A business intelligence and analytics platform prototype that translates client and transactional data into actionable signal data to offer recommendations for account managers and financial service representatives."
                },
                {
                    text: "Conceived at the RBC Next Great Innovator Challenge 2014 in 36 hours."
                }
            ],
            tags: ["hackathon", "web"]
        },
        {
            id: "projectClinico",
            name: "Clinico",
            client: "Eli Lilly - Clinical Trial Visualization Redesign",
            link: {
                internal: false,
                url: "http://challengepost.com/software/clinico"
            }   ,
            date: {
                active: false,
                format: "MMMM y",
                start: new Date(2013, 10),
                status: "Complete"
            },
            details: [
                {
                    text: "An iOS prototype that translates clinical trial protocols into guided, patient-centric interfaces."
                },
                {
                    text: "Designed for the Eli Lilly Clinical Trial Visualization Redesign Challenge."
                },
                {
                    text: "Awarded with <a href='http://portal.lillycoi.com/2013/11/14/winners-selected-in-clinical-trial-visualization-redesign-challenge/' target='_blank'>honourable mention</a> and a $3,000 cash prize."
                }
            ],
            tags: ["contest", "design", "mobile"]
        }
    ]

    function getMonthDifference(d1, d2) {
        var months;

        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();

        return months <= 0 ? 0 : months;
    }
})