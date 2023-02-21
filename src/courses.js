export const courses = [
    {
        name:'React pro začátečníky',
        desc: 'Kurz je vhodný jak pro úplné začátečníky, tak i pro zkušené programátory, kteří chtějí poznat knihovnu React a využít ji pro vytvoření dynamické webové aplikace.',
        url: '/kurz-react',
        img: 'kurz-react.jpg',
        type: 'dlouhodobý kurz',
        start: '16. 3. 2023',
        place: 'Blok 7 - Zasedací místnost (suterén)',
        homepage: true
    },
    {
        name:'Python pro začátečníky',
        desc: 'V tomto kurzu si představíme jazyk Python a projdeme úplné základy programování jako jsou proměnné, podmínky, cykly nebo funkce. Naším cílem bude napsání vlastní aplikace s textovým rozhraním.',
        url: '/kurz-python-pro-zacatecniky',
        img: 'kurz-python.jpg',
        type: 'dlouhodobý kurz',
        start: '7. 3. 2023',
        place: 'Blok 7 - Zasedací místnost (suterén)',
        homepage: true
    },
    {
        name:'Pandas - Zpracování dat v jazyce Python',
        desc: 'V kurzu si na začátek ukážeme základy Pythonu, pak si ukážeme možnosti knihovny Pandas - Práce s Pandas DataFrame a Series, práci s datovými typy, agregaci dat, načítání různých formátů a možnosti těch formátů ',
        url: '/kurz-pandas-spracovani-dat-v-python',
        img: 'kurz-pandas.png',
        type: 'dlouhodobý kurz',
        start: '7. 3. 2023',
        place: 'Blok 7 - Zasedací místnost (suterén)',
        homepage: true
    },
    {
        name:'AutoCAD',
        desc: 'Kurz je určen začátečníkům, kteří se snaží pokořit AutoCad a donutit ho vygenerovat výkres, který tak pracně nakreslili. Během kurzu zpracujeme jednoduchý půdorys garáže, kde si ukážeme jak výkres začít, uložit a dokončit.',
        url: '/kurz-autocad',
        img: 'kurz-autocad.jpg',
        type: 'série workshopů',
        start: '6. 3. 2023',
        place: 'Školíci centrum Silicon Hill',
        homepage: true
    },
    // {
    //     name:'Java Spring',
    //     desc: 'Kurz je vhodný pre každého kto sa už stretol s Javou (prípadne Java SE) a chcel by si rozšíriť znalosti a schopnosti s programovaním backednových systémov.',
    //     url: '/kurz-spring',
    //     img: 'kurz-java-spring.png',
    //     type: 'dlouhodobý kurz',
    //     start: 'týden od 24. 10. 2022 - upřesníme',
    //     place: 'Školíci centrum Silicon Hill',
    //     homepage: true
    // },
    {
        name:'ArchiCad',
        desc: 'Začínáš s Archicadem a nevíš si rady? Potřebuješ poradit s úkolem? Prijď na kurz pro začátečníky a mírně pokročilé!',
        url: '/kurz-archicad',
        img: 'kurz-archicad-logo.jpg',
        type: 'série workshopů',
        start: '8. 3. 2023',
        place: 'Školíci centrum Silicon Hill',
        homepage: true
    },
        {
        name:'Porkočilé webové technologie',
        desc: 'Zajímá tě, jak jsou dnes tvořeny webové stránky? Chtěl by jsi prohlédnout hlouběji do tajů JavaScriptu a moderních technologíí webu? Pak je tento kurz právě pro tebe. Každou hodinu si představíme nejrůznější moderní technologie, které se dnes reálně využívají.',
        url: '/kurz-webove-technologie',
        img: 'kurz-web-tech-logo.jpg',
        type: 'dlouhodobý kurz',
        start: '9. 3. 2023',
        place: 'Blok 7 - Zasedací místnost (suterén)',
        homepage: true
    }
]

export const homepageCourses = courses.filter(course => course.homepage)