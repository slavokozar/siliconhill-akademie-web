export const courses = [
    {
        name:'React pro začátečníky',
        desc: 'Kurz je vhodný jak pro úplné začátečníky, tak i pro zkušené programátory, kteří chtějí poznat knihovnu React a využít ji pro vytvoření dynamické webové aplikace.',
        url: '/kurz-react',
        img: 'kurz-react.jpg',
        type: 'dlouhodobý kurz',
        start: '8. 3. 2022',
        place: 'Blok 7 - Zasedací místnost (suterén)',
        homepage: true
    },
    {
        name:'Python pro začátečníky',
        desc: 'V tomto kurzu si představíme jazyk Python a projdeme úplné základy programování jako jsou proměnné, podmínky, cykly nebo funkce. Naším cílem bude napsání vlastní aplikace s textovým rozhraním.',
        url: '/kurz-python-pro-zacatecniky',
        img: 'kurz-python.jpg',
        type: 'dlouhodobý kurz',
        start: '28. 2. 2022',
        place: 'Blok 7 - Zasedací místnost (suterén)',
        homepage: true
    },
    {
        name:'Pandas - Zpracování dat v jazyce Python',
        desc: 'V kurzu si na začátek ukážeme základy Pythonu, pak si ukážeme možnosti knihovny Pandas - Práce s Pandas DataFrame a Series, práci s datovými typy, agregaci dat, načítání různých formátů a možnosti těch formátů ',
        url: '/kurz-pandas-spracovani-dat-v-python',
        img: 'kurz-pandas.png',
        type: 'dlouhodobý kurz',
        start: '28. 2. 2022',
        place: 'Blok 7 - Zasedací místnost (suterén)',
        homepage: true
    },
    {
        name:'AutoCAD',
        desc: 'Kurz je určen začátečníkům, kteří se snaží pokořit AutoCad a donutit ho vygenerovat výkres, který tak pracně nakreslili. Během kurzu zpracujeme jednoduchý půdorys garáže, kde si ukážeme jak výkres začít, uložit a dokončit.',
        url: '/kurz-autocad',
        img: 'kurz-autocad.jpg',
        type: 'série workshopů',
        start: '29. 2. 2022',
        place: 'Školíci centrum Silicon Hill',
        homepage: true
    },
    {
        name:'Java Spring',
        desc: 'Kurz je vhodný pre každého kto sa už stretol s Javou (prípadne Java SE) a chcel by si rozšíriť znalosti a schopnosti s programovaním backednových systémov.',
        url: '/kurz-spring',
        img: 'kurz-java-spring.png',
        type: 'dlouhodobý kurz',
        start: '10. 3. 2022',
        place: 'Školíci centrum Silicon Hill',
        homepage: true
    },
    {
        name:'ArchiCad',
        desc: 'Začínáš s Archicadem a nevíš si rady? Potřebuješ poradit s úkolem? Prijď na kurz pro začátečníky a mírně pokročilé!',
        url: '/kurz-archicad',
        img: 'kurz-archicad-logo.jpg',
        type: 'dlouhodobý kurz',
        start: '1. 3. 2022',
        place: 'Studovna B6',
        homepage: true
    }
]

export const homepageCourses = courses.filter(course => course.homepage)