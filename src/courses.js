export const courses = [
    {
        name:'React od začátku',
        desc: 'Kurz je vhodný jak pro úplné začátečníky, tak i pro zkušené programátory, kteří chtějí poznat knihovnu React a využít ji pro vytvoření dynamické webové aplikace.',
        url: 'kurz-react',
        img: 'kurz-react.jpg',
        type: 'dlouhodobý kurz',
        start: '1. 3. 2022',
        place: 'Školíci centrum SH',
        homepage: true
    },
    {
        name:'Python pro začátečníky',
        desc: 'V tomto kurzu si představíme jazyk Python a projdeme úplné základy programování jako jsou proměnné, podmínky, cykly nebo funkce. Naším cílem bude napsání vlastní aplikace s textovým rozhraním.',
        url: 'kurz-python-pro-zacatecniky',
        img: 'kurz-python.jpg',
        type: 'dlouhodobý kurz',
        start: '2. 3. 2022',
        place: 'Školíci centrum SH',
        homepage: true
    },
    {
        name:'AutoCAD',
        desc: 'Kurz je určen začátečníkům, kteří se snaží pokořit AutoCad a donutit ho vygenerovat výkres, který tak pracně nakreslili. Během kurzu zpracujeme jednoduchý půdorys garáže, kde si ukážeme jak výkres začít, uložit a dokončit.',
        url: 'kurz-autocad',
        img: 'kurz-autocad.jpg',
        type: 'série workshopů',
        start: '3. 3. 2022',
        place: 'Školíci centrum SH',
        homepage: true
    },
    {
        name:'Výpočetní metoda konečných prvků',
        desc: 'Seznámení s možnostmi výpočtu konstrukcí pomocí metody konečných prvků, kdy bude představeno vytvoření modelu, stanovení výpočetní sítě a zadání okrajových podmínek. Představeny budou analýzy mechanické, teplotní nebo porušení materiálu.',
        url: 'kurz-vypocetni-metoda-konecnych-prvku',
        img: 'kurz-vypocetni-metoda-konecnych-prvku.webp',
        type: 'série workshopů',
        start: '3. 3. 2022',
        place: 'Školíci centrum SH',
        homepage: true
    },
    {
        name:'Java Spring',
        desc: 'Seznámení s možnostmi výpočtu konstrukcí pomocí metody konečných prvků, kdy bude představeno vytvoření modelu, stanovení výpočetní sítě a zadání okrajových podmínek. Představeny budou analýzy mechanické, teplotní nebo porušení materiálu.',
        url: 'kurz-spring',
        img: 'kurz-spring.jpg',
        type: 'dlouhodobý kurz',
        start: '3. 3. 2022',
        place: 'Školíci centrum SH',
        homepage: true
    }
]

export const homepageCourses = courses.filter(course => course.homepage)