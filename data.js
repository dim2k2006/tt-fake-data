const initialState = {
    conversion: {
        currentConversion: 82,
        previousConversion: 52,
        categories: [
            {
                title: 'Advokat',
                icon: 'ico-advokater',
                amount: 85,
                fullConversion: 30,
                fewCustomersConversion: 40,
                noCustomersConversion: 15,
                isCurrentConversionGreaterThanPrevious: true,
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
                icon: 'ico-bredband',
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
                icon: 'ico-eiendom',
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
                icon: 'ico-flyttebyraaer',
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
                icon: 'ico-forsikring-2',
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
            {
                title: 'Garasjeport',
                icon: 'ico-garasjeporter',
                amount: 10,
                fullConversion: 4,
                fewCustomersConversion: 4,
                noCustomersConversion: 2,
                isCurrentConversionGreaterThanPrevious: false,
                income: 10500.30,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Huskatalog',
                icon: 'ico-huskataloger',
                amount: 8,
                fullConversion: 2,
                fewCustomersConversion: 2,
                noCustomersConversion: 2,
                isCurrentConversionGreaterThanPrevious: false,
                income: 5400,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Radon',
                icon: 'ico-radon',
                amount: 15,
                fullConversion: 8,
                fewCustomersConversion: 4,
                noCustomersConversion: 3,
                isCurrentConversionGreaterThanPrevious: false,
                income: 6100.85,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Regnskapsfoerer',
                icon: 'ico-regnskapsfoerere',
                amount: 9,
                fullConversion: 3,
                fewCustomersConversion: 3,
                noCustomersConversion: 3,
                isCurrentConversionGreaterThanPrevious: false,
                income: 2000,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Smaalaan',
                icon: 'ico-forbrukslaan',
                amount: 14,
                fullConversion: 6,
                fewCustomersConversion: 6,
                noCustomersConversion: 2,
                isCurrentConversionGreaterThanPrevious: false,
                income: 4000,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Solskjerming',
                icon: 'ico-solskjerming',
                amount: 17,
                fullConversion: 10,
                fewCustomersConversion: 2,
                noCustomersConversion: 5,
                isCurrentConversionGreaterThanPrevious: false,
                income: 7443,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Takstmann',
                icon: 'ico-takstmann',
                amount: 20,
                fullConversion: 5,
                fewCustomersConversion: 5,
                noCustomersConversion: 10,
                isCurrentConversionGreaterThanPrevious: false,
                income: 1500,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Utleiemegler',
                icon: 'ico-utleiemegler',
                amount: 16,
                fullConversion: 4,
                fewCustomersConversion: 8,
                noCustomersConversion: 4,
                isCurrentConversionGreaterThanPrevious: false,
                income: 3200.34,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Varmepumpe',
                icon: 'ico-varmepumper',
                amount: 40,
                fullConversion: 20,
                fewCustomersConversion: 15,
                noCustomersConversion: 5,
                isCurrentConversionGreaterThanPrevious: false,
                income: 3123.45,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Varmepumpeservice',
                icon: 'ico-varmepumperservice',
                amount: 14,
                fullConversion: 4,
                fewCustomersConversion: 4,
                noCustomersConversion: 6,
                isCurrentConversionGreaterThanPrevious: false,
                income: 2300,
                isCurrentIncomeGreaterThanPrevious: false
            },
            {
                title: 'Vinduer',
                icon: 'ico-vinduer',
                amount: 13,
                fullConversion: 5,
                fewCustomersConversion: 5,
                noCustomersConversion: 3,
                isCurrentConversionGreaterThanPrevious: false,
                income: 2500,
                isCurrentIncomeGreaterThanPrevious: false
            }
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
                icon: 'ico-bredband',
                newCustomers: 10,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-fred.jpg',
                personName: 'Fred',
                personCount: 19
            },
            {
                date: '2018-10-23',
                title: 'Nobo Cargo AS',
                category: 'Advokat',
                icon: 'ico-advokater',
                newCustomers: 16,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-dan.jpg',
                personName: 'Dan',
                personCount: 22
            },
            {
                date: '2018-10-21',
                title: 'Toppen Tannlegesenter',
                category: 'Varmepumpeservice',
                icon: 'ico-varmepumperservice',
                newCustomers: 25,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-oyvind.jpg',
                personName: 'Øyvind',
                personCount: 7
            },
            {
                date: '2018-10-21',
                title: 'Ventistål AS',
                category: 'Eiendomsmegling',
                icon: 'ico-eiendom',
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
                icon: 'ico-varmepumperservice',
                newCustomers: 25,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-oyvind.jpg',
                personName: 'Øyvind',
                personCount: 7
            },
            {
                date: '2018-10-23',
                title: 'Nobo Cargo AS',
                category: 'Advokat',
                icon: 'ico-advokater',
                newCustomers: 16,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-dan.jpg',
                personName: 'Dan',
                personCount: 22
            },
            {
                date: '2018-10-23',
                title: 'Gjensidige Bolighandel AS',
                category: 'Bredband_theme',
                icon: 'ico-bredband',
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
                icon: 'ico-advokater',
                newCustomers: 16,
                personPhoto: 'http://geekon.by/projects/tt/images/vis-dan.jpg',
                personName: 'Dan',
                personCount: 22
            },
            {
                date: '2018-10-21',
                title: 'Toppen Tannlegesenter',
                category: 'Varmepumpeservice',
                icon: 'ico-varmepumperservice',
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
