const initialState = {
    conversion: {
        currentConversion: 82,
        previousConversion: 52,
        categories: [
            {
                title: 'Advokat',
                icon: 'ico-advokat',
                amount: 85,
                fullConversion: 30,
                fewCustomersConversion: 40,
                noCustomersConversion: 15,
                isCurrentConversionGreaterThanPrevious: true,
                income: 350000,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Andre',
                icon: 'ico-andre',
                amount: 130,
                fullConversion: 40,
                fewCustomersConversion: 50,
                noCustomersConversion: 40,
                isCurrentConversionGreaterThanPrevious: false,
                income: 350000,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Bedriftsforsikring',
                icon: 'ico-bedriftsforsikring',
                amount: 90,
                fullConversion: 60,
                fewCustomersConversion: 10,
                noCustomersConversion: 20,
                isCurrentConversionGreaterThanPrevious: true,
                income: 486034,
                isCurrentIncomeGreaterThanPrevious: true
            },
            {
                title: 'Boligalarm',
                icon: 'ico-boligalarm',
                amount: 100,
                fullConversion: 20,
                fewCustomersConversion: 30,
                noCustomersConversion: 50,
                isCurrentConversionGreaterThanPrevious: false,
                income: 350000,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Boliglaan',
                icon: 'ico-boliglaan',
                amount: 100,
                fullConversion: 20,
                fewCustomersConversion: 30,
                noCustomersConversion: 50,
                isCurrentConversionGreaterThanPrevious: false,
                income: 350000,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Bredbaand',
                icon: 'ico-bredbaand',
                amount: 100,
                fullConversion: 20,
                fewCustomersConversion: 30,
                noCustomersConversion: 50,
                isCurrentConversionGreaterThanPrevious: false,
                income: 350000,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Eiendomsmegler',
                icon: 'ico-eiendomsmegler',
                amount: 100,
                fullConversion: 20,
                fewCustomersConversion: 30,
                noCustomersConversion: 50,
                isCurrentConversionGreaterThanPrevious: false,
                income: 350000,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Flyttebyraa',
                icon: 'ico-flyttebyraa',
                amount: 100,
                fullConversion: 20,
                fewCustomersConversion: 30,
                noCustomersConversion: 50,
                isCurrentConversionGreaterThanPrevious: false,
                income: 350000,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Forsikring',
                icon: 'ico-forsikring',
                amount: 105,
                fullConversion: 60,
                fewCustomersConversion: 15,
                noCustomersConversion: 30,
                isCurrentConversionGreaterThanPrevious: false,
                income: 350000,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Garasje',
                icon: 'ico-garasje',
                amount: 100,
                fullConversion: 20,
                fewCustomersConversion: 30,
                noCustomersConversion: 50,
                isCurrentConversionGreaterThanPrevious: false,
                income: 350000,
                isCurrentIncomeGreaterThanPrevious: false
            },
            // {
            //     title: 'Garasjeport',
            //     icon: 'ico-garasjeport',
            //     amount: 100,
            //     fullConversion: 20,
            //     fewCustomersConversion: 30,
            //     noCustomersConversion: 50,
            //     isCurrentConversionGreaterThanPrevious: false,
            //     income: 350000,
            //     isCurrentIncomeGreaterThanPrevious: false
            // },
            // {
            //     title: 'Huskatalog',
            //     icon: 'ico-huskatalog',
            //     amount: 100,
            //     fullConversion: 20,
            //     fewCustomersConversion: 30,
            //     noCustomersConversion: 50,
            //     isCurrentConversionGreaterThanPrevious: false,
            //     income: 350000,
            //     isCurrentIncomeGreaterThanPrevious: false
            // },
            // {
            //     title: 'Radon',
            //     icon: 'ico-radon',
            //     amount: 100,
            //     fullConversion: 20,
            //     fewCustomersConversion: 30,
            //     noCustomersConversion: 50,
            //     isCurrentConversionGreaterThanPrevious: false,
            //     income: 350000,
            //     isCurrentIncomeGreaterThanPrevious: false
            // },
            // {
            //     title: 'Regnskapsfoerer',
            //     icon: 'ico-regnskapsfoerer',
            //     amount: 100,
            //     fullConversion: 20,
            //     fewCustomersConversion: 30,
            //     noCustomersConversion: 50,
            //     isCurrentConversionGreaterThanPrevious: false,
            //     income: 350000,
            //     isCurrentIncomeGreaterThanPrevious: false
            // },
            // {
            //     title: 'Smaalaan',
            //     icon: 'ico-smaalaan',
            //     amount: 100,
            //     fullConversion: 20,
            //     fewCustomersConversion: 30,
            //     noCustomersConversion: 50,
            //     isCurrentConversionGreaterThanPrevious: false,
            //     income: 350000,
            //     isCurrentIncomeGreaterThanPrevious: false
            // },
            // {
            //     title: 'Solskjerming',
            //     icon: 'ico-solskjerming',
            //     amount: 100,
            //     fullConversion: 20,
            //     fewCustomersConversion: 30,
            //     noCustomersConversion: 50,
            //     isCurrentConversionGreaterThanPrevious: false,
            //     income: 350000,
            //     isCurrentIncomeGreaterThanPrevious: false
            // },
            // {
            //     title: 'Takstmann',
            //     icon: 'ico-takstmann',
            //     amount: 100,
            //     fullConversion: 20,
            //     fewCustomersConversion: 30,
            //     noCustomersConversion: 50,
            //     isCurrentConversionGreaterThanPrevious: false,
            //     income: 350000,
            //     isCurrentIncomeGreaterThanPrevious: false
            // },
            // {
            //     title: 'Utleiemegler',
            //     icon: 'ico-utleiemegler',
            //     amount: 100,
            //     fullConversion: 20,
            //     fewCustomersConversion: 30,
            //     noCustomersConversion: 50,
            //     isCurrentConversionGreaterThanPrevious: false,
            //     income: 350000,
            //     isCurrentIncomeGreaterThanPrevious: false
            // },
            // {
            //     title: 'Varmepumpe',
            //     icon: 'ico-varmepumpe',
            //     amount: 100,
            //     fullConversion: 20,
            //     fewCustomersConversion: 30,
            //     noCustomersConversion: 50,
            //     isCurrentConversionGreaterThanPrevious: false,
            //     income: 350000,
            //     isCurrentIncomeGreaterThanPrevious: false
            // },
            // {
            //     title: 'Varmepumpeservice',
            //     icon: 'ico-varmepumpeservice',
            //     amount: 100,
            //     fullConversion: 20,
            //     fewCustomersConversion: 30,
            //     noCustomersConversion: 50,
            //     isCurrentConversionGreaterThanPrevious: false,
            //     income: 350000,
            //     isCurrentIncomeGreaterThanPrevious: false
            // },
            // {
            //     title: 'Vinduer',
            //     icon: 'ico-vinduer',
            //     amount: 100,
            //     fullConversion: 20,
            //     fewCustomersConversion: 30,
            //     noCustomersConversion: 50,
            //     isCurrentConversionGreaterThanPrevious: false,
            //     income: 350000,
            //     isCurrentIncomeGreaterThanPrevious: false
            // }
        ]
    },
    customers: {
        currentCustomers: 40,
        previousCustomers: 32,
        list: [
            {
                date: '2018-12-05',
                title: 'Gjensidige Bolighandel AS',
                category: 'Bredband_theme',
                icon: 'ico-bredbaand',
                newCustomers: 10,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-fred.jpg',
                personName: 'Fred',
                personCount: 19
            },
            {
                date: '2018-10-23',
                title: 'Nobo Cargo AS',
                category: 'Advokat',
                icon: 'ico-advokat',
                newCustomers: 16,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-dan.jpg',
                personName: 'Dan',
                personCount: 22
            },
            {
                date: '2018-10-21',
                title: 'Toppen Tannlegesenter',
                category: 'Varmepumpeservice',
                icon: 'ico-varmepumpeservice',
                newCustomers: 25,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-oyvind.jpg',
                personName: 'Øyvind',
                personCount: 7
            },
            {
                date: '2018-10-21',
                title: 'Ventistål AS',
                category: 'Eiendomsmegling',
                icon: 'ico-eiendomsmegler',
                newCustomers: 6,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-fred.jpg',
                personName: 'Fred',
                personCount: 19
            },
            {
                date: '2018-10-18',
                title: 'Olaf Ryes Plass Eiendomsmegling AS',
                category: 'Forsikring',
                icon: 'ico-forsikring',
                newCustomers: 18,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-dan.jpg',
                personName: 'Dan',
                personCount: 22
            },
            {
                date: '2018-10-18',
                title: 'Nobo Cargo AS',
                category: 'Boligalarm',
                icon: 'ico-boligalarm',
                newCustomers: 16,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-dan.jpg',
                personName: 'Dan',
                personCount: 22
            },

            {
                date: '2018-10-21',
                title: 'Toppen Tannlegesenter',
                category: 'Varmepumpeservice',
                icon: 'ico-varmepumpeservice',
                newCustomers: 25,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-oyvind.jpg',
                personName: 'Øyvind',
                personCount: 7
            },
            {
                date: '2018-10-23',
                title: 'Nobo Cargo AS',
                category: 'Advokat',
                icon: 'ico-advokat',
                newCustomers: 16,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-dan.jpg',
                personName: 'Dan',
                personCount: 22
            },
            {
                date: '2018-10-23',
                title: 'Gjensidige Bolighandel AS',
                category: 'Bredband_theme',
                icon: 'ico-bredbaand',
                newCustomers: 10,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-fred.jpg',
                personName: 'Fred',
                personCount: 19
            },
            {
                date: '2018-10-18',
                title: 'Olaf Ryes Plass Eiendomsmegling AS',
                category: 'Forsikring',
                icon: 'ico-forsikring',
                newCustomers: 18,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-dan.jpg',
                personName: 'Dan',
                personCount: 22
            },
            {
                date: '2018-10-23',
                title: 'Nobo Cargo AS',
                category: 'Advokat',
                icon: 'ico-advokat',
                newCustomers: 16,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-dan.jpg',
                personName: 'Dan',
                personCount: 22
            },
            {
                date: '2018-10-21',
                title: 'Toppen Tannlegesenter',
                category: 'Varmepumpeservice',
                icon: 'ico-varmepumpeservice',
                newCustomers: 25,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-oyvind.jpg',
                personName: 'Øyvind',
                personCount: 7
            }
        ]
    },
    devices: {
        currentOnlineUsers: 55,
        isCurrentOnlineUsersGreaterThanPrevious: true,
        currentDesktopUsers: 40,
        isCurrentDesktopUsersGreaterThanPrevious: true,
        currentTabletUsers: 5,
        isCurrentTabletUsersGreaterThanPrevious: false,
        currentMobileUsers: 10,
        isCurrentMobileUsersGreaterThanPrevious: false
    },
    plans: {
        categories: [
            {
                title: 'Marketing',
                icon: 'ico-marketing',
                persons: [
                    {
                        name: 'Jakub',
                        photo: 'http://geekon.by/projects/tt/images/vis-jakub.jpg'
                    },
                    {
                        name: 'Linda Therese',
                        photo: 'http://geekon.by/projects/tt/images/vis-linda.jpg'
                    },
                    {
                        name: 'Julie',
                        photo: 'http://geekon.by/projects/tt/images/vis-julie.jpg'
                    }
                ],
                content: [
                    'Komme i gang med Programmatic marketing',
                    'Flytte WP-sider over på Laravel'
                ]
            },
            {
                title: 'Utvikling',
                icon: 'ico-utvikling',
                persons: [
                    {
                        name: 'Sven Håkon',
                        photo: 'http://geekon.by/projects/tt/images/vis-sven.jpg'
                    },
                    {
                        name: 'Vladislav',
                        photo: 'http://geekon.by/projects/tt/images/vis-vlad.jpg'
                    },
                    {
                        name: 'Pavel',
                        photo: 'http://geekon.by/projects/tt/images/vis-pavel.jpg'
                    },
                    {
                        name: 'Alexander',
                        photo: 'http://geekon.by/projects/tt/images/vis-alex.jpg'
                    },
                    {
                        name: 'Dmitry',
                        photo: 'http://geekon.by/projects/tt/images/vis-dmitry.jpg'
                    }
                ],
                content: [
                    'Definere tekniske behov for Forsikring',
                    'Utarbeide arbeidsoppgaver for Lena',
                    'Finne prosjektstyringsverktøy',
                    'Lage tidsplan for de neste 6mnd'
                ]
            },
            {
                title: 'Salg',
                icon: 'ico-salg',
                persons: [
                    {
                        name: 'Dan Bendik',
                        photo: 'http://geekon.by/projects/tt/images/vis-dan.jpg'
                    },
                    {
                        name: 'Fred',
                        photo: 'http://geekon.by/projects/tt/images/vis-fred.jpg'
                    }
                ],
                content: [
                    'Selge på vinduer og garasjeporter',
                    'Målsetning: 10 nye kunder'
                ]
            },
            {
                title: 'Administrasjon & Support',
                icon: 'ico-administrasjon',
                persons: [
                    {
                        name: 'Anders',
                        photo: 'http://geekon.by/projects/tt/images/vis-anders.jpg'
                    },
                    {
                        name: 'Pål',
                        photo: 'http://geekon.by/projects/tt/images/vis-pal.jpg'
                    },
                    {
                        name: 'Isak',
                        photo: 'http://geekon.by/projects/tt/images/vis-isak.jpg'
                    }
                ],
                content: [
                    'Teste bankløsning'
                ]
            }
        ]
    },
    income: {
        currentDay: 120830,
        isCurrentDayGoalAchieved: true,
        previousDay: 135830,
        currentWeek: 300400,
        currentWeekGoal: 700400,
        currentWeekGoalExceeded: 560,
        currentMonth: 2234400,
        currentMonthGoal: 3121560,
        currentMonthGoalExceeded: 560,
    }
};

export default initialState;