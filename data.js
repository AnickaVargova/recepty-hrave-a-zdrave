'use strict'
let recepty = [{
        nazev: 'Hrášková polévka',
        pocetPorci: 4,
        kategorie: ['polévky', 'vegetariánské'],
        postup: 'Pórek a cibuli nakrájíme najemno. V kastrolu na středním ohni rozehřejeme  máslo, přidáme pórek a cibuli, zamícháme, přiklopíme poklicí a necháme dusit 3 minuty. Opět promícháme. Přidáme mražený hrášek, zvýšíme oheň a důkladně mícháme 2 minuty. Přilijeme vroucí vodu, osolíme a přivedeme k varu. Přidáme zakysanou smetanu, opět přivedeme k varu a kastrol stáhneme z ohně. Přidáme lístky máty  a polévku důkladně rozmixujeme v mixéru. Poté ji přepasírujeme přes cedník do čistého hrnce.',
        ingredience: ['500 g mraženého hrášku', '800 ml vody', '1 lžíce   zakysané smetany', '100 g bílé části pórku', '100 g oloupané cibule', '50 g másla', 'hrst lístků máty', 'sůl'],
        obrazek: 'hraskovapolevka.jpg',
        oblibene: false,
        vyhledavani: ['hrášek', 'pórek', 'cibule']
    },

    {
        nazev: 'Quesadillas',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'maso'],
        postup: 'Maso osolíme z obou stran, položíme na rozpálený gril a ogrilujeme z obou stran. Hotové maso nakrájíme na plátky. Rajčata nakrájíme na plátky, papriku na nudličky. Slaninu ogrilujeme dozlatova. Na polovinu každé tortilly položíme část rajčat, masa, papriky a koriandr. Přidáme část slaniny a plátek sýra a každou tortillu překlopíme napůl. Takto připravené tortilly položíme na gril a grilujeme 2 minuty.',
        ingredience: ['380 g kuřecích řízků', '70 g slaniny nakrájené na plátky', '4 kukuřičné tortilly', '4 plátky sýra čedar nebo gouda', '2 lžíce olivového oleje', '300 g rajčat', '100 g červené papriky', '4 lžíce lístků koriandru', 'sůl'],
        obrazek: 'quesadillas.jpg',
        oblibene: false,
        vyhledavani: ['kuře', 'rajčata', 'papriky', 'tortilly', 'slanina', 'sýr', 'koriandr']
    },
    {
        nazev: 'Vaječná pomazánka',
        pocetPorci: 4,
        kategorie: ['pomazánky', 'snídaně', 'svačiny'],
        postup: 'Vejce uvaříme natvrdo. Po vychladnutí je nakrájíme na malé kousky. Cibuli a okurky nakrájíme na kostičky, pažitku nasekáme nadrobno. Vše smícháme s jogurtem, francouzskou hořčicí a dochutíme solí.',
        ingredience: ['8 vajec', '200 ml bílého jogurtu', '1 lžíce francouzské hořčice', 'hrst pažitky', '1 malá cibule', 'sůl'],
        obrazek: 'vajecnapomazanka.jpg',
        oblibene: false,
        vyhledavani: ['vejce', 'jogurt', 'pažitka', 'cibule', 'hořčice']
    },
    {
        nazev: 'Focaccia s rajčaty, olivami a cibulí',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'vegetariánské'],
        postup: 'Smícháme oba druhy mouky se solí a sušeným droždím. Přilijeme vodu a olej. Vypracujeme těsto, které hněteme asi 5 min. Poprášíme moukou, přikryjeme utěrkou a necháme 1 h kynout. Na plech položíme pečící papír nebo ho vymažeme olejem. Rozválíme placku, položíme ji na plech a poklademe cibulí, okapanými rajčaty, olivami a bylinkami. Pečeme asi 20 min při teplotě 200°C. ',
        ingredience: ['300 g hladké mouky', '200 g celozrnné mouky', '3-4 dcl vlažné vody', 'sáček sušeného droždí', '2 lžičky soli', '5 lžic oleje', '1 větší cibule nakrájená na plátky', '200 ml sušených  rajčat v oleji', '200 g černých nebo zelených oliv', 'bylinky podle chuti', ],
        obrazek: 'focaccia.jpg',
        oblibene: false,
        vyhledavani: ['mouka', 'rajčata', 'olivy', 'cibule']
    },
    {
        nazev: 'Čočková polévka',
        pocetPorci: 4,
        kategorie: ['polévky', 'vegetariánské'],
        postup: 'Cibuli nakrájíme na kostičky, mrkev a petržel očistíme a nastrouháme na hrubém struhadle. Cibuli a zeleninu podusíme na oleji a trošce vody. Přisypeme červenou čočku a zalijeme litrem vody. Před dokončením přidáme majoránku a osolíme podle chuti.',
        ingredience: ['200 g červené čočky', '1 cibule', '1 petržel', '1 mrkev', 'majoránka', '2 lžíce oleje', 'sůl'],
        obrazek: 'cockovapolevka.jpg',
        oblibene: false,
        vyhledavani: ['čočka', 'mrkev', 'petržel']
    },
    {
        nazev: 'Zapečený květák',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'vegetariánské'],
        postup: 'Květák rozebereme na růžičky a uvaříme v osolené vodě téměř doměkka. Máslo dáme rozehřát, přisypeme mouku a uděláme světlou jíšku. Přilijeme mléko, rozmícháme dohladka a krátce povaříme. Nastrouháme sýr nahrubo. Do omáčky vmícháme polovinu sýra. Květák rozložíme do zapékací mísy nebo pekáčku, zalijeme omáčkou a zasypeme zbylým sýrem. Pečeme, dokud sýr nezezlátne. Ozdobíme nasekanou petrželkou.',
        ingredience: ['900 g květáku', '150 ml mléka', '45 g hladké mouky', '60 g másla', '150 g tvrdého sýra', 'petržel na ozdobu'],
        obrazek: 'zapecenykvetak.jpg',
        oblibene: false,
        vyhledavani: ['květák', 'sýr', 'mléko']
    },
    {
        nazev: 'Hovězí na houbách',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'maso'],
        postup: 'Hovězí nakrájíme na plátky silné asi 1,5 cm. Cibuli nakrájíme na kostičky. V tlakovém hrnci rozpálíme olej, nasypeme na něj cibuli a položíme hovězí plátky, které lehce osmahneme z obou stran. Přidáme houby, osolíme a zalijeme vodou nebo vývarem. Zavřeme tlakový hrnec a dusíme na mírném plameni asi 45 min, dokud maso není měkké. Podáváme s rýží nebo brambory.',
        ingredience: ['600 g zadního hovězího', '300 g čerstvých hub', '2 cibule', '3 lžíce oleje', 'sůl', '0,5 l vody nebo vývaru'],
        obrazek: 'hovezinahoubach.jpg',
        oblibene: false,
        vyhledavani: ['hovězí maso', 'houby']
    },
    {
        nazev: 'Pečené brambory s jogurtovým dressingem',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'vegetariánské'],
        postup: 'Brambory omyjeme a se slupkou je nakrájíme na plátky silné asi 0,5 cm. Plech vymažeme olejem a poklademe plátky brambor. Osolíme. Pečeme v troubě rozehřáté na 180°C, dokud brambory nezezlátnou. Zatím si připravíme dressing. Rozmícháme bílý jogurt se solí, rozetřeným česnekem a nasekanými bylinkami. Upečené brambory podáváme s miskou dressingu.',
        ingredience: ['750 g brambor', 'sůl', 'olivový olej', '500 ml bílého jogurtu', 'bylinky', 'česnek'],
        obrazek: 'pecenebrambory.jpg',
        oblibene: false,
        vyhledavani: ['brambory', 'česnek', 'jogurt']
    },
    {
        nazev: 'Francouzská cibulačka',
        pocetPorci: 4,
        kategorie: ['polévky', 'vegetariánské'],
        postup: 'Cibuli překrájíme na poloviny a potom na plátky tak, aby se rozpadla na půlkolečka. V hrnci se silnějším dnem rozehřejeme olej a máslo, přisypeme cibuli a opékáme s občasným zamícháním  tak dlouho, dokud cibule nezezlátne. Zaprášíme moukou, zalijeme vodou a přivedeme k bodu varu. Vaříme na mírném ohni asi 20 min. Zatím si nastrouháme sýr a nakrájíme rohlíky. Kostičky rohlíků opečeme nasucho nebo na malém množství tuku na mírném ohni. Nezapomeneme míchat. Na talíře rozdělíme sýr, opečené rohlíky a zalijeme vroucí polévkou. Můžeme ozdobit petrželkou.',
        ingredience: ['2 lžíce oleje', '1 lžíce másla', '600 g cibule', '100 g sladšího tvrdého sýra', '1 lžíce hladké mouky', '1 l vody', 'sůl', 'rohlíky nebo bagety, nakrájené na kostičky', 'petrželka na ozdobu'],
        obrazek: 'francouzskacibulacka.jpg',
        oblibene: false,
        vyhledavani: ['cibule', 'sýr']
    },
    {
        nazev: 'Kuře na paprice',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'maso'],
        postup: 'Kuřecí řízky nakrájíme na menší kousky, cibuli na kostičky. V mléce rozmícháme hladkou mouku. Rozpálíme olej, osmahneme na něm cibuli a maso.  Přisypeme sladkou papriku, osolíme. Podlijeme vodou a dusíme, dokud maso není měkké. Přilijeme mléko s moukou a za stálého míchání přivedeme k bodu varu. Chvilku povaříme všechno dohromady. Podáváme s těstovinami nebo noky.',
        ingredience: ['800 g kuřecích řízků', '1 cibule', '200 ml mléka', '1 lžíce hladké mouky', '1 lžíce oleje', '1 lžíce sladké papriky', 'sůl'],
        obrazek: 'kurenapaprice.jpg',
        oblibene: false,
        vyhledavani: ['kuřecí maso', 'cibule', 'mléko']
    },
    {
        nazev: 'Pečené filé s rajčaty a sýrem',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'ryby'],
        postup: 'Do pekáčku naskládáme rybí filé, pokryjeme rajčaty, česnekem nakrájeným na plátky, bylinkami a nahrubo nastrouhaným sýrem. Pečeme v troubě zhruba 30 min. Podáváme s brambory nebo těstovinami.',
        ingredience: ['4 kostky rybího filé', '2 velká rajčata', '100 g tvrdého sýra', 'česnek', 'sůl', 'bylinky (např. oregano nebo tymián)'],
        obrazek: 'pecenefile.jpg',
        oblibene: false,
        vyhledavani: ['ryba', 'rajčata', 'sýr', 'česnek']
    },
    {
        nazev: 'Těstovinový salát s tuňákem',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'ryby', 'saláty'],
        postup: 'Těstoviny uvaříme v osolené vodě do měkka. Zatím dáme do mísy okapané maso z tuňáka, které rozmělníme vidličkou. Cibuli a papriku nakrájíme na kostičky, rajčata překrájíme na poloviny, bylinky nasekáme. Nesolíme, tuňák je slaný dost.  V jogurtu rozmícháme francouzskou hořčici a přidáme ke směsi. Vše promícháme. Těstoviny scedíme a ještě za tepla přimícháme k ostatním surovinám. Necháme vše vychladit a podáváme.',
        ingredience: ['500 g těstovin', '300 g konzervovaného tuňáka ve vlastní šťávě', '400 g cherry rajčat', '1 žlutá paprika', '1 cibule', '200 ml bílého jogurtu', 'lžíce francouzské hořčice', 'bylinky podle chuti'],
        obrazek: 'testovinovysalat.jpg',
        oblibene: false,
        vyhledavani: ['těstoviny', 'ryba', 'rajčata', 'paprika', 'cibule', 'jogurt']
    },
    {
        nazev: 'Salát z červené řepy z bílým sýrem',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'vegetariánské', 'saláty'],
        postup: 'Červenou řepu uvaříme doměkka. Po vychladnutí oloupeme a nastrouháme na tenké plátky. Sýr nakrájíme na kostičky, přidáme slunečnicová semínka a vše smícháme dohromady. Zakápneme olivovým olejem a vinným octem a pokud je třeba, přisolíme. Podáváme s celozrnným pečivem.',
        ingredience: ['500 g červené řepy', '200 g mozzarelly nebo jiného bílého sýra', '2 lžíce slunečnicových semínek', 'olivový olej', 'vinný ocet', 'sůl podle chuti'],
        obrazek: 'salatzcervenerepy.jpg',
        oblibene: false,
        vyhledavani: ['červená řepa', 'slunečnice', 'sýr']
    },
    {
        nazev: 'Kuskusový salát',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'vegetariánské', 'saláty'],
        postup: 'Kuskus zalijeme vroucí vodou a necháme pod pokličkou nabobtnat. Přidáme olivový olej a rozdrobíme vidličkou. Přimícháme nakrájená rajčata, cibulky, bylinky a podle chuti sůl a citronovou šťávu.',
        ingredience: ['250 g kuskusu', '250 ml vody', 'sůl', 'citrónová šťáva', '2 lžíce olivového oleje', 'čerstvá máta a petržel', '6 malých rajčat', '2 cibulky se zelenou natí'],
        obrazek: 'kuskusovysalat.jpg',
        oblibene: false,
        vyhledavani: ['kuskus', 'rajčata', 'máta', 'petržel', 'cibulky']
    },
    {
        nazev: 'Palačinky',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'dezerty', 'snídaně'],
        postup: 'Rozmícháme dohladka všechny suroviny. Na pánev s nepřilnavým povrchem nalijeme naběračku těsta a rozlijeme ji na celou pánev. Pečeme ji na mírném ohni, dokud neztuhne. Pak ji dřevěnou obracečkou obrátíme, nebo ji můžeme zkusit vyhodit do vzduchu a opět chytit na pánev. Chvilku pečeme z druhé strany a sesuneme na plochý talíř. Zdobíme ovocem, jogurtem, marmeládou, nastrouhanou hořkou čokoládou, ořechy atd. Můžeme vyzkoušet i palačinky naslano, např. se sýrem nebo špenátem.',
        ingredience: ['400 ml mléka', '2 vejce', '200 g hladké mouky (možno částečně nahradit celozrnnou)', 'špetka soli'],
        obrazek: 'palacinky.jpg',
        oblibene: false,
        vyhledavani: ['mléko', 'vejce', 'mouka']
    },
    {
        nazev: 'Chia pudink',
        pocetPorci: 4,
        kategorie: ['dezerty', 'snídaně', 'svačiny'],
        postup: 'Chia semínka nasypeme do větší uzavíratelné nádoby, zalijeme mlékem, vodou a sirupem. Dobře zamícháme (protřepeme) a necháme stát 5 minut. Potom znovu protřepeme, rozlijeme do čtyř menších nádobek a necháme nejméně 1 hodinu, ideálně přes noc v lednici ztuhnout. Ozdobíme ovocem a podáváme.',
        ingredience: ['100 g chia semínek', '250 ml mléka', '250 ml vody', '2 lžíce javorového nebo jiného sirupu', 'ovoce podle chuti'],
        obrazek: 'chiapudink.jpg',
        oblibene: false,
        vyhledavani: ['chia', 'mléko', 'ovoce']
    },
    {
        nazev: 'Jablečný koláč',
        pocetPorci: 4,
        kategorie: ['dezerty', 'snídaně', 'svačiny'],
        postup: 'Oba druhy mouky smícháme, vytvoříme důlek, do něj vložíme nakrájené máslo a žloutek. Vařečkou směs důkladně spojíme, přilijeme studenou vodu a vytvoříme kouli. Zabalíme ji do fólie a dáme do ledničky. Troubu předehřejeme na 180°C. Jablka oloupeme, zbavíme jader a nakrájíme na plátky. Těsto rozválíme na placku a přemístíme na plech. Poklademe plátky jablek, posypeme cukrem, skořicí a poklademe máslem. Pečeme zhruba 45 min.',
        ingredience: ['120 g hladké špaldové mouky', '80 g celozrnné mouky', '100 g másla pokojové teploty', '1 žloutek', '2-3 lžíce studené vody', '4-5 jablek', '3 lžíce přírodního cukru', '50 g másla', 'skorice'],
        obrazek: 'jablecnykolac.jpg',
        oblibene: false,
        vyhledavani: ['jablka', 'máslo', 'skořice']
    },
    {
        nazev: 'Jogurtový pohár',
        pocetPorci: 4,
        kategorie: ['dezerty'],
        postup: 'Část jogurtu promícháme s medem, část s kakaem. Do poháru skládáme vrstvy piškotů, dvou druhů jogurtu a ovoce. Poslední vrstvu tvoří ovoce.',
        ingredience: ['600 ml bílého jogurtu', 'lžička kakaa', 'piškoty', 'med', 'ovoce podle chuti'],
        obrazek: 'jogurtovypohar.jpg',
        oblibene: false,
        vyhledavani: ['jogurt', 'kakao', 'piškoty', 'med', 'ovoce']
    },
    {
        nazev: 'Košíčky',
        pocetPorci: 40,
        kategorie: ['dezerty'],
        postup: 'Oba druhy mouky smícháme, vytvoříme důlek, do něj vložíme nakrájené máslo a žloutek. Vařečkou směs důkladně spojíme, přilijeme studenou vodu a hnětením vytvoříme kouli. Zabalíme ji do fólie a dáme do ledničky. Troubu předehřejeme na 180°C. Kousky těsta vytvarujeme do formiček. Pečeme asi 15 minut, dokud košíčky nezrůžoví. Necháme zchladnout a až potom opatrně vyklopíme z formiček. Mezitím si uvaříme pudink podle receptu na obalu sáčku. Nalijeme ho do formiček a necháme v chladu ztuhnout. Nakonec ozdobíme ovocem.',
        ingredience: ['300 g hladké špaldové mouky', '200 g hladké celozrnné mouky', '250 g másla', 'žloutek', '2 lžíce vody', '2 sáčky vanilkového pudinku', '0,5 l mléka', '2 lžíce přírodního cukru', 'ovoce'],
        obrazek: 'kosicky.jpg',
        oblibene: false,
        vyhledavani: ['pudink', 'ovoce']
    },
    {
        nazev: 'Ovocné nanuky',
        pocetPorci: 6,
        kategorie: ['dezerty'],
        postup: 'Ovoce rozmačkáme a vmícháme do jogurtu, můžeme ho též rozkrájet na kousky. Směs dosladíme podle chuti. Nalijeme do tvořítek na nanuky a dáme zmrazit.',
        ingredience: ['500 ml bílého nebo ovocného jogurtu', 'ovoce', 'přírodní cukr nebo med'],
        obrazek: 'nanuky.jpg',
        oblibene: false,
        vyhledavani: ['jogurt', 'ovoce']
    },
    {
        nazev: 'Severský obložený chléb',
        pocetPorci: 4,
        kategorie: ['snídaně', 'hlavní jídla', 'svačiny'],
        postup: 'Chléb potřeme máslem, zeleninu, vejce a ryby nakrájíme na plátky nebo na kousky a skládáme na chleby podle chuti a inspirace. Posypeme bylinkami.',
        ingredience: ['8 plátků tmavého chleba', 'máslo na potření', 'uzený losos', 'konzervované ryby a mořské plody', 'natvrdo uvařené vejce', 'plátkový sýr', 'okurka, rajčata a jiná zelenina', 'kopr', 'petržel'],
        obrazek: 'oblozenychleb.jpg',
        oblibene: false,
        vyhledavani: ['chléb', 'vejce', 'ryby', 'zelenina', 'sýr', 'kopr', 'petržel', 'mořské plody']
    },
    {
        nazev: 'Plněné avokádo',
        pocetPorci: 4,
        kategorie: ['předkrmy', 'svačiny', 'saláty'],
        postup: 'Avokáda rozpůlíme a vyjmeme pecku. Rajčata, papriky, okurku a balkánský sýr nakrájíme na kostičky. Pokapeme olivovým olejem a citronovou šťávou. Směs navršíme na poloviny avokád.',
        ingredience: ['2 velká zralá avokáda', '2 rajčata', 'paprika', 'okurka', '200 g balkánského sýra', 'olivový olej', 'citronová šťáva'],
        obrazek: 'plneneavokado.jpg',
        oblibene: false,
        vyhledavani: ['avokádo', 'rajčata', 'papriky', 'okurky', 'sýr', 'zelenina']
    },
    {
        nazev: 'Rajčata s mozzarellou',
        pocetPorci: 4,
        kategorie: ['předkrmy', 'svačiny', 'saláty'],
        postup: 'Rajčata a mozzarellu nakrájíme na půlcentimetrové plátky. Střídavě naskládáme na talíř, lehce osolíme, pokapeme olivovým olejem a balzamikem. Nakonec ozdobíme lístky bazalky.',
        ingredience: ['4 velká rajčata', '200 g mozzarelly', 'bazalka', 'olivový olej', 'balzamikový ocet', 'sůl'],
        obrazek: 'rajcatasmozzarellou.jpg',
        oblibene: false,
        vyhledavani: ['rajčata', 'mozzarella', 'zelenina', 'bazalka', 'bylinky']
    },
    {
        nazev: 'Kuřecí salát',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'saláty'],
        postup: '',
        ingredience: ['500 g kuřecích prsou', 'olej na opékání', 'rajčata, papriky, ledový salát a jiná zelenina', '300 ml bílého jogurtu', 'lžíce citrónové šťávy', 'sůl'],
        obrazek: 'kurecisalat.jpg',
        oblibene: false,
        vyhledavani: ['kuře', 'rajčata', 'papriky', 'salát', 'zelenina', 'jogurt']
    },
    {
        nazev: 'Pečené kuře s bylinkami',
        pocetPorci: 4,
        kategorie: ['', ''],
        postup: '',
        ingredience: ['', '', '', '', '', '', '', '', '', ''],
        obrazek: 'pecenekure.jpg',
        oblibene: false,
        vyhledavani: ['', '', '', '', '']
    },
    {
        nazev: 'Dýňová polévka',
        pocetPorci: 4,
        kategorie: ['polévky'],
        postup: '',
        ingredience: ['', '', '', '', '', '', '', '', '', ''],
        obrazek: 'dynovapolevka.jpg',
        oblibene: false,
        vyhledavani: ['', '', '', '', '']
    },
    {
        nazev: 'Špagety s rukolou a rajčaty',
        pocetPorci: 4,
        kategorie: ['hlavní jídla'],
        postup: 'Špagety uvaříme al dente (téměř do měkka). Nakrájíme česnek na plátky a rajčátka na poloviny. Na pánvi si rozehřejeme olej a opečeme na něm plátky česneku. Potom přihodíme rajčata a mícháme asi 5 min. Pak přidáme špagety a opět promícháme. Dáme do mísy a přimícháme rukolu. Na talířích posypeme parmazánem.',
        ingredience: ['400 g špaget', '400 g cherry rajčat', '2 hrsti rukoly', '5 stroužků česneku', 'strouhaný parmazán', 'olivový olej', 'sůl'],
        obrazek: 'spagetysrukolou.jpg',
        oblibene: false,
        vyhledavani: ['těstoviny', 'špagety', 'rajčata', 'rukola', 'česnek', 'parmazán', 'sýr', 'zelenina']
    },
    {
        nazev: 'Quiche s pórkem, houbami a sýrem',
        pocetPorci: 4,
        kategorie: ['', ''],
        postup: '',
        ingredience: ['', '', '', '', '', '', '', '', '', ''],
        obrazek: 'quichesporkem.jpg',
        oblibene: false,
        vyhledavani: ['', '', '', '', '']
    },
    {
        nazev: '',
        pocetPorci: 4,
        kategorie: ['', ''],
        postup: '',
        ingredience: ['', '', '', '', '', '', '', '', '', ''],
        obrazek: '',
        oblibene: false,
        vyhledavani: ['', '', '', '', '']
    },

];

console.log("Celkem máme " + recepty.length + " receptů.");