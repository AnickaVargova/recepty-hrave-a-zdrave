'use strict'
let recepty = [{
        nazev: 'Hrášková polévka',
        pocetPorci: 4,
        kategorie: ['polévky', 'vegetariánské'],
        postup: 'Pórek a cibuli nakrájíme najemno. V kastrolu na středním ohni rozehřejeme  máslo, přidáme pórek a cibuli, zamícháme, přiklopíme poklicí a necháme dusit 3 minuty. Opět promícháme. Přidáme mražený hrášek, zvýšíme oheň a důkladně mícháme 2 minuty. Přilijeme vroucí vodu, osolíme a přivedeme k varu. Přidáme zakysanou smetanu, opět přivedeme k varu a kastrol stáhneme z ohně. Přidáme lístky máty  a polévku důkladně rozmixujeme v mixéru. Poté ji přepasírujeme přes cedník do čistého hrnce.',
        ingredience: ['500 g mraženého hrášku', '800 ml vody', '1 lžíce   zakysané smetany', '100 g bílé části pórku', '100 g oloupané cibule', '50 g másla', 'hrst lístků máty', 'sůl'],
        obrazek: 'hraskovapolevka.jpg',
        vyhledavani: ['hrášek', 'pórek', 'cibule']
    },

    {
        nazev: 'Quesadillas',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'maso'],
        postup: 'Maso osolíme z obou stran, položíme na rozpálený gril a ogrilujeme z obou stran. Hotové maso nakrájíme na plátky. Rajčata nakrájíme na plátky, papriku na nudličky. Slaninu ogrilujeme dozlatova. Na polovinu každé tortilly položíme část rajčat, masa, papriky a koriandr. Přidáme část slaniny a plátek sýra a každou tortillu překlopíme napůl. Takto připravené tortilly položíme na gril a grilujeme 2 minuty.',
        ingredience: ['380 g kuřecích řízků', '70 g slaniny nakrájené na plátky', '4 kukuřičné tortilly', '4 plátky sýra čedar nebo gouda', '2 lžíce olivového oleje', '300 g rajčat', '100 g červené papriky', '4 lžíce lístků koriandru', 'sůl'],
        obrazek: 'quesadillas.jpg',
        vyhledavani: ['kuře', 'rajčata', 'papriky', 'tortilly', 'slanina', 'sýr', 'koriandr']
    },
    {
        nazev: 'Vaječná pomazánka',
        pocetPorci: 4,
        kategorie: ['pomazánky', 'snídaně', 'svačiny'],
        postup: 'Vejce uvaříme natvrdo. Po vychladnutí je nakrájíme na malé kousky. Cibuli a okurky nakrájíme na kostičky, pažitku nasekáme nadrobno. Vše smícháme s jogurtem, francouzskou hořčicí a dochutíme solí.',
        ingredience: ['8 vajec', '200 ml bílého jogurtu', '1 lžíce francouzské hořčice', 'hrst pažitky', '1 malá cibule', 'sůl'],
        obrazek: 'vajecnapomazanka.jpg',
        vyhledavani: ['vejce', 'jogurt', 'pažitka', 'cibule', 'hořčice']
    },
    {
        nazev: 'Focaccia s rajčaty, olivami a cibulí',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'vegetariánské'],
        postup: 'Smícháme oba druhy mouky se solí a sušeným droždím. Přilijeme vodu a olej. Vypracujeme těsto, které hněteme asi 5 min. Poprášíme moukou, přikryjeme utěrkou a necháme 1 h kynout. Na plech položíme pečící papír nebo ho vymažeme olejem. Rozválíme placku, položíme ji na plech a poklademe cibulí, okapanými rajčaty, olivami a bylinkami. Pečeme asi 20 min při teplotě 200°C. ',
        ingredience: ['300 g hladké mouky', '200 g celozrnné mouky', '3-4 dcl vlažné vody', 'sáček sušeného droždí', '2 lžičky soli', '5 lžic oleje', '1 větší cibule nakrájená na plátky', '200 ml sušených  rajčat v oleji', '200 g černých nebo zelených oliv', 'bylinky podle chuti', ],
        obrazek: 'focaccia.jpg',
        vyhledavani: ['mouka', 'rajčata', 'olivy', 'cibule']
    },
    {
        nazev: 'Čočková polévka',
        pocetPorci: 4,
        kategorie: ['polévky', 'vegetariánské'],
        postup: 'Cibuli nakrájíme na kostičky, mrkev a petržel očistíme a nastrouháme na hrubém struhadle. Cibuli a zeleninu podusíme na oleji a trošce vody. Přisypeme červenou čočku a zalijeme litrem vody. Před dokončením přidáme majoránku a osolíme podle chuti.',
        ingredience: ['200 g červené čočky', '1 cibule', '1 petržel', '1 mrkev', 'majoránka', '2 lžíce oleje', 'sůl'],
        obrazek: 'cockovapolevka.jpg',
        vyhledavani: ['čočka', 'mrkev', 'petržel']
    },
    {
        nazev: 'Zapečený květák',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'vegetariánské'],
        postup: 'Květák rozebereme na růžičky a uvaříme v osolené vodě téměř doměkka. Máslo dáme rozehřát, přisypeme mouku a uděláme světlou jíšku. Přilijeme mléko, rozmícháme dohladka a krátce povaříme. Nastrouháme sýr nahrubo. Do omáčky vmícháme polovinu sýra. Květák rozložíme do zapékací mísy nebo pekáčku, zalijeme omáčkou a zasypeme zbylým sýrem. Pečeme, dokud sýr nezezlátne. Ozdobíme nasekanou petrželkou.',
        ingredience: ['900 g květáku', '150 ml mléka', '45 g hladké mouky', '60 g másla', '150 g tvrdého sýra', 'petržel na ozdobu'],
        obrazek: 'zapecenykvetak.jpg',
        vyhledavani: ['květák', 'sýr', 'mléko']
    },
    {
        nazev: 'Hovězí na houbách',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'maso'],
        postup: 'Hovězí nakrájíme na plátky silné asi 1,5 cm. Cibuli nakrájíme na kostičky. V tlakovém hrnci rozpálíme olej, nasypeme na něj cibuli a položíme hovězí plátky, které lehce osmahneme z obou stran. Přidáme houby, osolíme a zalijeme vodou nebo vývarem. Zavřeme tlakový hrnec a dusíme na mírném plameni asi 45 min, dokud maso není měkké. Podáváme s rýží nebo brambory.',
        ingredience: ['600 g zadního hovězího', '300 g čerstvých hub', '2 cibule', '3 lžíce oleje', 'sůl', '0,5 l vody nebo vývaru'],
        obrazek: 'hovezinahoubach.jpg',
        vyhledavani: ['hovězí maso', 'houby']
    },
    {
        nazev: 'Pečené brambory s jogurtovým dressingem',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'vegetariánské'],
        postup: 'Brambory omyjeme a se slupkou je nakrájíme na plátky silné asi 0,5 cm. Plech vymažeme olejem a poklademe plátky brambor. Osolíme. Pečeme v troubě rozehřáté na 180°C, dokud brambory nezezlátnou. Zatím si připravíme dressing. Rozmícháme bílý jogurt se solí, rozetřeným česnekem a nasekanými bylinkami. Upečené brambory podáváme s miskou dressingu.',
        ingredience: ['750 g brambor', 'sůl', 'olivový olej', '500 ml bílého jogurtu', 'bylinky', 'česnek'],
        obrazek: 'pecenebrambory.jpg',
        vyhledavani: ['brambory', 'česnek', 'jogurt']
    },
    {
        nazev: 'Francouzská cibulačka',
        pocetPorci: 4,
        kategorie: ['polévky', 'vegetariánské'],
        postup: 'Cibuli překrájíme na poloviny a potom na plátky tak, aby se rozpadla na půlkolečka. V hrnci se silnějším dnem rozehřejeme olej a máslo, přisypeme cibuli a opékáme s občasným zamícháním  tak dlouho, dokud cibule nezezlátne. Zaprášíme moukou, zalijeme vodou a přivedeme k bodu varu. Vaříme na mírném ohni asi 20 min. Zatím si nastrouháme sýr a nakrájíme rohlíky. Kostičky rohlíků opečeme nasucho nebo na malém množství tuku na mírném ohni. Nezapomeneme míchat. Na talíře rozdělíme sýr, opečené rohlíky a zalijeme vroucí polévkou. Můžeme ozdobit petrželkou.',
        ingredience: ['2 lžíce oleje', '1 lžíce másla', '600 g cibule', '100 g sladšího tvrdého sýra', '1 lžíce hladké mouky', '1 l vody', 'sůl', 'rohlíky nebo bagety, nakrájené na kostičky', 'petrželka na ozdobu'],
        obrazek: 'francouzskacibulacka.jpg',
        vyhledavani: ['cibule', 'sýr']
    },
    {
        nazev: 'Kuře na paprice',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'maso'],
        postup: 'Kuřecí řízky nakrájíme na menší kousky, cibuli na kostičky. V mléce rozmícháme hladkou mouku. Rozpálíme olej, osmahneme na něm cibuli a maso.  Přisypeme sladkou papriku, osolíme. Podlijeme vodou a dusíme, dokud maso není měkké. Přilijeme mléko s moukou a za stálého míchání přivedeme k bodu varu. Chvilku povaříme všechno dohromady. Podáváme s těstovinami nebo noky.',
        ingredience: ['800 g kuřecích řízků', '1 cibule', '200 ml mléka', '1 lžíce hladké mouky', '1 lžíce oleje', '1 lžíce sladké papriky', 'sůl'],
        obrazek: 'kurenapaprice.jpg',
        vyhledavani: ['kuřecí maso', 'cibule', 'mléko']
    },
    {
        nazev: 'Pečené filé s rajčaty a sýrem',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'ryby'],
        postup: 'Do pekáčku naskládáme rybí filé, pokryjeme rajčaty, česnekem nakrájeným na plátky, bylinkami a nahrubo nastrouhaným sýrem. Pečeme v troubě zhruba 30 min. Podáváme s brambory nebo těstovinami.',
        ingredience: ['4 kostky rybího filé', '2 velká rajčata', '100 g tvrdého sýra', 'česnek', 'sůl', 'bylinky (např. oregano nebo tymián)'],
        obrazek: 'pecenefile.jpg',
        vyhledavani: ['ryba', 'rajčata', 'sýr', 'česnek']
    },
    {
        nazev: 'Těstovinový salát s tuňákem',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'ryby', 'saláty'],
        postup: 'Těstoviny uvaříme v osolené vodě do měkka. Zatím dáme do mísy okapané maso z tuňáka, které rozmělníme vidličkou. Cibuli a papriku nakrájíme na kostičky, rajčata překrájíme na poloviny, bylinky nasekáme. Nesolíme, tuňák je slaný dost.  V jogurtu rozmícháme francouzskou hořčici a přidáme ke směsi. Vše promícháme. Těstoviny scedíme a ještě za tepla přimícháme k ostatním surovinám. Necháme vše vychladit a podáváme.',
        ingredience: ['500 g těstovin', '300 g konzervovaného tuňáka ve vlastní šťávě', '400 g cherry rajčat', '1 žlutá paprika', '1 cibule', '200 ml bílého jogurtu', 'lžíce francouzské hořčice', 'bylinky podle chuti'],
        obrazek: 'testovinovysalat.jpg',
        vyhledavani: ['těstoviny', 'ryba', 'rajčata', 'paprika', 'cibule', 'jogurt']
    },
    {
        nazev: 'Salát z červené řepy s bílým sýrem',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'vegetariánské', 'saláty'],
        postup: 'Červenou řepu uvaříme doměkka. Po vychladnutí oloupeme a nastrouháme na tenké plátky. Sýr nakrájíme na kostičky, přidáme slunečnicová semínka a vše smícháme dohromady. Zakápneme olivovým olejem a vinným octem a pokud je třeba, přisolíme. Podáváme s celozrnným pečivem.',
        ingredience: ['500 g červené řepy', '200 g mozzarelly nebo jiného bílého sýra', '2 lžíce slunečnicových semínek', 'olivový olej', 'vinný ocet', 'sůl podle chuti'],
        obrazek: 'salatzcervenerepy.jpg',
        vyhledavani: ['červená řepa', 'slunečnice', 'sýr']
    },
    {
        nazev: 'Kuskusový salát',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'vegetariánské', 'saláty'],
        postup: 'Kuskus zalijeme vroucí vodou a necháme pod pokličkou nabobtnat. Přidáme olivový olej a rozdrobíme vidličkou. Přimícháme nakrájená rajčata, cibulky, bylinky a podle chuti sůl a citronovou šťávu.',
        ingredience: ['250 g kuskusu', '250 ml vody', 'sůl', 'citrónová šťáva', '2 lžíce olivového oleje', 'čerstvá máta a petržel', '6 malých rajčat', '2 cibulky se zelenou natí'],
        obrazek: 'kuskusovysalat.jpg',
        vyhledavani: ['kuskus', 'rajčata', 'máta', 'petržel', 'cibulky']
    },
    {
        nazev: 'Palačinky',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'dezerty', 'snídaně'],
        postup: 'Rozmícháme dohladka všechny suroviny. Na pánev s nepřilnavým povrchem nalijeme naběračku těsta a rozlijeme ji na celou pánev. Pečeme ji na mírném ohni, dokud neztuhne. Pak ji dřevěnou obracečkou obrátíme, nebo ji můžeme zkusit vyhodit do vzduchu a opět chytit na pánev. Chvilku pečeme z druhé strany a sesuneme na plochý talíř. Zdobíme ovocem, jogurtem, marmeládou, nastrouhanou hořkou čokoládou, ořechy atd. Můžeme vyzkoušet i palačinky naslano, např. se sýrem nebo špenátem.',
        ingredience: ['400 ml mléka', '2 vejce', '200 g hladké mouky (možno částečně nahradit celozrnnou)', 'špetka soli'],
        obrazek: 'palacinky.jpg',
        vyhledavani: ['mléko', 'vejce', 'mouka']
    },
    {
        nazev: 'Chia pudink',
        pocetPorci: 4,
        kategorie: ['dezerty', 'snídaně', 'svačiny'],
        postup: 'Chia semínka nasypeme do větší uzavíratelné nádoby, zalijeme mlékem, vodou a sirupem. Dobře zamícháme (protřepeme) a necháme stát 5 minut. Potom znovu protřepeme, rozlijeme do čtyř menších nádobek a necháme nejméně 1 hodinu, ideálně přes noc v lednici ztuhnout. Ozdobíme ovocem a podáváme.',
        ingredience: ['100 g chia semínek', '250 ml mléka', '250 ml vody', '2 lžíce javorového nebo jiného sirupu', 'ovoce podle chuti'],
        obrazek: 'chiapudink.jpg',
        vyhledavani: ['chia', 'mléko', 'ovoce']
    },
    {
        nazev: 'Jablečný koláč',
        pocetPorci: 4,
        kategorie: ['dezerty', 'snídaně', 'svačiny'],
        postup: 'Oba druhy mouky smícháme, vytvoříme důlek, do něj vložíme nakrájené máslo a žloutek. Vařečkou směs důkladně spojíme, přilijeme studenou vodu a vytvoříme kouli. Zabalíme ji do fólie a dáme do ledničky. Troubu předehřejeme na 180°C. Jablka oloupeme, zbavíme jader a nakrájíme na plátky. Těsto rozválíme na placku a přemístíme na plech. Poklademe plátky jablek, posypeme cukrem, skořicí a poklademe máslem. Pečeme zhruba 45 min.',
        ingredience: ['120 g hladké špaldové mouky', '80 g celozrnné mouky', '100 g másla pokojové teploty', '1 žloutek', '2-3 lžíce studené vody', '4-5 jablek', '3 lžíce přírodního cukru', '50 g másla', 'skorice'],
        obrazek: 'jablecnykolac.jpg',
        vyhledavani: ['jablka', 'máslo', 'skořice']
    },
    {
        nazev: 'Jogurtový pohár',
        pocetPorci: 4,
        kategorie: ['dezerty'],
        postup: 'Část jogurtu promícháme s medem, část s kakaem. Do poháru skládáme vrstvy piškotů, dvou druhů jogurtu a ovoce. Poslední vrstvu tvoří ovoce.',
        ingredience: ['600 ml bílého jogurtu', 'lžička kakaa', 'piškoty', 'med', 'ovoce podle chuti'],
        obrazek: 'jogurtovypohar.jpg',
        vyhledavani: ['jogurt', 'kakao', 'piškoty', 'med', 'ovoce']
    },
    {
        nazev: 'Košíčky',
        pocetPorci: 40,
        kategorie: ['dezerty'],
        postup: 'Oba druhy mouky smícháme, vytvoříme důlek, do něj vložíme nakrájené máslo a žloutek. Vařečkou směs důkladně spojíme, přilijeme studenou vodu a hnětením vytvoříme kouli. Zabalíme ji do fólie a dáme do ledničky. Troubu předehřejeme na 180°C. Kousky těsta vytvarujeme do formiček. Pečeme asi 15 minut, dokud košíčky nezrůžoví. Necháme zchladnout a až potom opatrně vyklopíme z formiček. Mezitím si uvaříme pudink podle receptu na obalu sáčku. Nalijeme ho do formiček a necháme v chladu ztuhnout. Nakonec ozdobíme ovocem.',
        ingredience: ['300 g hladké špaldové mouky', '200 g hladké celozrnné mouky', '250 g másla', 'žloutek', '2 lžíce vody', '2 sáčky vanilkového pudinku', '0,5 l mléka', '2 lžíce přírodního cukru', 'ovoce'],
        obrazek: 'kosicky.jpg',
        vyhledavani: ['pudink', 'ovoce']
    },
    {
        nazev: 'Ovocné nanuky',
        pocetPorci: 6,
        kategorie: ['dezerty'],
        postup: 'Ovoce rozmačkáme a vmícháme do jogurtu, můžeme ho též rozkrájet na kousky. Směs dosladíme podle chuti. Nalijeme do tvořítek na nanuky a dáme zmrazit.',
        ingredience: ['500 ml bílého nebo ovocného jogurtu', 'ovoce', 'přírodní cukr nebo med'],
        obrazek: 'nanuky.jpg',
        vyhledavani: ['jogurt', 'ovoce']
    },
    {
        nazev: 'Severský obložený chléb',
        pocetPorci: 4,
        kategorie: ['snídaně', 'hlavní jídla', 'svačiny'],
        postup: 'Chléb potřeme máslem, zeleninu, vejce a ryby nakrájíme na plátky nebo na kousky a skládáme na chleby podle chuti a inspirace. Posypeme bylinkami.',
        ingredience: ['8 plátků tmavého chleba', 'máslo na potření', 'uzený losos', 'konzervované ryby a mořské plody', 'natvrdo uvařené vejce', 'plátkový sýr', 'okurka, rajčata a jiná zelenina', 'kopr', 'petržel'],
        obrazek: 'oblozenychleb.jpg',
        vyhledavani: ['chléb', 'vejce', 'ryby', 'zelenina', 'sýr', 'kopr', 'petržel', 'mořské plody']
    },
    {
        nazev: 'Plněné avokádo',
        pocetPorci: 4,
        kategorie: ['předkrmy', 'svačiny', 'saláty'],
        postup: 'Avokáda rozpůlíme a vyjmeme pecku. Rajčata, papriky, okurku a balkánský sýr nakrájíme na kostičky. Pokapeme olivovým olejem a citronovou šťávou. Směs navršíme na poloviny avokád.',
        ingredience: ['2 velká zralá avokáda', '2 rajčata', 'paprika', 'okurka', '200 g balkánského sýra', 'olivový olej', 'citronová šťáva'],
        obrazek: 'plneneavokado.jpg',
        vyhledavani: ['avokádo', 'rajčata', 'papriky', 'okurky', 'sýr', 'zelenina']
    },
    {
        nazev: 'Rajčata s mozzarellou',
        pocetPorci: 4,
        kategorie: ['předkrmy', 'svačiny', 'saláty'],
        postup: 'Rajčata a mozzarellu nakrájíme na půlcentimetrové plátky. Střídavě naskládáme na talíř, lehce osolíme, pokapeme olivovým olejem a balzamikem. Nakonec ozdobíme lístky bazalky.',
        ingredience: ['4 velká rajčata', '200 g mozzarelly', 'bazalka', 'olivový olej', 'balzamikový ocet', 'sůl'],
        obrazek: 'rajcatasmozzarellou.jpg',
        vyhledavani: ['rajčata', 'mozzarella', 'zelenina', 'bazalka', 'bylinky']
    },
    {
        nazev: 'Kuřecí salát',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'saláty'],
        postup: 'Kuřecí maso opláchneme, nakrájíme na kousky, osolíme, opepříme a necháme opékat na rozpáleném ohni cca 15 minut. Zeleninu nakrájíme a dáme do mísy. Přidáme hotové maso. Dresing připravíme smícháním bílého jogurtu, soli a citrónu. ',
        ingredience: ['500 g kuřecích prsou', 'olej na opékání', 'rajčata, papriky, ledový salát a jiná zelenina', '300 ml bílého jogurtu', 'lžíce citrónové šťávy', 'sůl'],
        obrazek: 'kurecisalat.jpg',
        vyhledavani: ['kuře', 'rajčata', 'papriky', 'salát', 'zelenina', 'jogurt']
    },

    {
        nazev: 'Dýňová polévka',
        pocetPorci: 4,
        kategorie: ['polévky'],
        postup: 'Toto je super jednoduchá, ale chutná varianta dýňové polévky. Dýni rozpůlíme, odstraníme semena, neloupeme, rozkrájíme na kousky a dáme do studené vody, aby všechny kousky byly ponořené. Uvaříme do měkka. Rozmixujeme vše ponorným mixérem. Pokud je polévka příliš hustá, naředíme vodou. Osolíme podle chuti. Na talíři servírujeme se lžící zakysané smetany a bylinkami či semínky.',
        ingredience: ['1 kg dýně hokkaido', 'zakysaná smetana', 'bylinky nebo dýňová semena na ozdobu', 'sůl'],
        obrazek: 'dynovapolevka.jpg',
        vyhledavani: ['dýně', 'smetana']
    },
    {
        nazev: 'Špagety s rukolou a rajčaty',
        pocetPorci: 4,
        kategorie: ['hlavní jídla'],
        postup: 'Špagety uvaříme al dente (téměř do měkka). Nakrájíme česnek na plátky a rajčátka na poloviny. Na pánvi si rozehřejeme olej a opečeme na něm plátky česneku. Potom přihodíme rajčata a mícháme asi 5 min. Pak přidáme špagety a opět promícháme. Dáme do mísy a přimícháme rukolu. Na talířích posypeme parmazánem.',
        ingredience: ['400 g špaget', '400 g cherry rajčat', '2 hrsti rukoly', '5 stroužků česneku', 'strouhaný parmazán', 'olivový olej', 'sůl'],
        obrazek: 'spagetysrukolou.jpg',
        vyhledavani: ['těstoviny', 'špagety', 'rajčata', 'rukola', 'česnek', 'parmazán', 'sýr', 'zelenina']
    },
    {
        nazev: 'Quiche s pórkem, houbami a sýrem',
        pocetPorci: 8,
        kategorie: ['hlavní jídla', 'svačiny', 'snídaně'],
        postup: 'Z mouky, nasekaného másla, soli a vody vytvoříme kouli. Zabalíme ji do fólie a dáme do ledničky. Pórek a houby nakrájíme na kousky a podusíme na lžíci oleje. Osolíme. V případě potřeby podléváme vodou. Z těsta vytvoříme placku, kterou vmáčkneme do formy s vyššími okraji. Těsto by mělo tvořit misku. Dovnitř naskládáme zeleninovou směs, zalijeme rozšlehanými vejci a zasypeme sýrem. Pečeme při teplotě 180°C, dokud těsto nezezlátne.',
        ingredience: ['280 g hladké špaldové mouky', '165 g másla', '8 lžic vody', 'sůl', '6 vajec', 'pórek', '500 g žampiónů', 'lžíce oleje', '100 g tvrdého nastrouhaného sýra'],
        obrazek: 'quichesporkem.jpg',
        vyhledavani: ['pórek', 'vejce', 'houby', 'sýr']
    },

    {
        nazev: 'Brownies',
        pocetPorci: 20,
        kategorie: ['dezerty'],
        postup: 'V jedné misce smícháme hladkou mouku, kakao a kypřící prášek. V druhé misce rozmačkáme banány vidličkou, přidáme sirup, vajíčko a kokosový olej (pokud nemáme, můžeme ho nahradit 100g rozpuštěného másla). Smícháme obě misky dohromady a vylejeme do formy vyložené pečícím papírem. Podrobíme nastrouhanou čokoládou a pečeme 30 minut na 180 stupnů.',
        ingredience: ['90g hladké celozrnné mouky', '3 banány', '2 vajíčka', '50g kakaa', 'kypřící prášek', '5 lžic medu/sirupu', '2 lžíce kokosového oleje', 'hořká čokoláda'],
        obrazek: 'brownies.jpg',
        vyhledavani: ['banán', 'čokoláda']
    },

    {
        nazev: 'Batátové pyré s candátem',
        pocetPorci: 4,
        kategorie: ['hlavní jídla'],
        postup: 'Batáty oloupeme, nakrájíme na malé kousky a vaříme v osolené vodě 10-15 minut do změknutí. Po scedení přidáme lžíci másla a rozšťoucháme na pyré. Filety candáta omyjeme a usušíme. Potom ho osolíme a opepříme z obou stran. Candáta osmažíme na rozpáleném oleji maximálně 5 minut z obou stran. Na závěr ho můžeme pokapat citrónem.',
        ingredience: ['750g batátů', '4 filety candáta', 'olivový olej', 'pepř', 'sůl', 'citrón'],
        obrazek: 'batatovepyrescandatem.jpg',
        vyhledavani: ['batáty', 'candát', 'ryby']
    },

    {
        nazev: 'Kuřecí vývar',
        pocetPorci: 4,
        kategorie: ['polévky'],
        postup: 'Kuřecí díly přidáme do hrnce plného studené vody. Necháme přivést k varu a stáhneme plamen na minimum, aby voda jemně problublávala. Přidáme polévkové koření a necháme běžet minimálně dvě hodiny - mezitím vybíráme lžící pěnu, která se objeví na hladině. Potom přidáme polévkovou zeleninu a povaříme jí do změknutí. Části kuřete vyjmeme, necháme chvíli vychladnout a maso obereme. Maso vložíme zpět do kuřecího vývaru. Dochutíme solí, případně i pepřem.',
        ingredience: ['Kuřecí polévková směs', '1/4 celere', '1 petržel', '1 mrkev', '1 cibule', '5 kuliček nového koření', '3 listy bobkového listu', '5 kuliček pepře'],
        obrazek: 'kurecivyvar.jpg',
        vyhledavani: ['kuře', 'vývar', 'polévky', ]
    },
    {
        nazev: 'Ovesné sušenky',
        pocetPorci: 20,
        kategorie: ['svačiny', 'dezerty'],
        postup: 'Máslo rozpustíme na mírném ohni a smícháme se sirupem. Přidáme sodu rozmíchánou se dvěmi lžícemi horké vody. Dáme dohromady všechny suché ingredience a promícháme s rozehřátou směsí. Vyložíme plech pečícím papírem a lžící vytvarujeme těsto na sušenky. Pečeme 15-20 minut na 150 stupňů.',
        ingredience: ['1 hrnek ovesných vloček', '1 hrnek celozrnné hladké mouky', '1/2 hrnku třtinového cukru', '125 g másla', '3 lžíce sirupu/medu', '1 lžička jedlé sody', 'libovolně oříšků, rozinek a semínek'],
        obrazek: 'ovesnesusenky.jpg',
        vyhledavani: ['ovesné vločky', 'oříšky'] 
    },
    {
        nazev: 'Vajíčkové muffiny',
        pocetPorci: 12,
        kategorie: ['snídaně', 'svačiny'],
        postup: 'Troubu předehřejeme na 160 stupňů. V míse smíchame všechny ingredience. Směs vylejeme do formiček na muffiny a pečeme 8-10 minut.',
        ingredience: ['10 vajec', '100g tvrdého sýru', '150g čerstvého špenátu', '2 rajčata', 'sůl', 'pepř'],
        obrazek: 'vajickovemuffiny.jpg',
        vyhledavani: ['vejce', 'sýr', 'rajčata', 'špenát']
    },
    {
        nazev: 'Salát s balkánským sýrem',
        pocetPorci: 4,
        kategorie: ['svačiny', 'saláty', 'vegetariánské'],
        postup: 'Všechnu zeleninu nakrájíme nadrobno a dáme do mísy. Podrobíme balkánským sýrem, osolíme, opepříme a můžeme podávat.',
        ingredience: ['okurka', 'rajčata', 'paprika', 'červená cibule', 'olivy', 'salát'],
        obrazek: 'salatsbalkanskymsyrem.jpg',
        vyhledavani: ['balkánský sýr', 'rajčata', 'okurka', 'paprika', 'olivy', 'zelenina']
    },
    {
        nazev: 'Krůtí roláda',
        pocetPorci: 4,
        kategorie: ['hlavní jídla'],
        postup: 'Krůtí maso omyjeme, naklepeme, osolíme a opepříme. Poklademe kousky mozzarely a cherry rajčat. Následně směs zarolujeme a svážeme potravinářským provázkem. Pečeme na 180 stupňů cca 2 hodiny, přitom průběžně podléváme. Krůtí roláda se skvěle hodí k bramborové kaši.',
        ingredience: ['Krůtí vykostěnné stehno', '125g mozzarely', '100g cherry rajčat', '750g brambor'],
        obrazek: 'krutirolada.jpg',
        vyhledavani: ['krůtí maso', 'mozzarela', 'rajčata', 'brambory']
    },
    {
        nazev: 'Kuřecí řízky s cuketou',
        pocetPorci: 4,
        kategorie: ['hlavní jídla'],
        postup: 'Předehřejeme troubu na 200 stupňů. Plátky kuřete naklepeme a dáme je do pekáče. Přidáme pár brambor, nakrájený citrón a sezóní zeleninu, například cuketu. Osolíme, opepříme a můžeme dochutit bazalkou. Pekáč zakápneme kapkou olivového oleje a pečeme 35-45 minut.',
        ingredience: ['600g kuřecích prsních řízků', '1/2 citrónu', '500g cukety', '1 cuketa', 'bazalka'],
        obrazek: 'kureciprsascuketou.jpg',
        vyhledavani: ['kuřecí maso', 'cuketa', 'zelenina', 'brambory', 'citrón', 'bazalka']
    },
    {
        nazev: 'Losos s chřestem',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'ryby'],
        postup: 'Plech vyložíme pečícím papírem. Chřest umyjeme a nakrojíme cca 1,5 cm od konců. Filety také omyjeme a pokládáme na plech v pořadí chřest filety chřest. Vršek slabě osolíme a přidáme kousky citrónu a másla. Pečeme cca 30 min na 175 stupňů. ',
        ingredience: ['500g lososa', '2 citróny', '50g másla', '500g chřestu', 'sůl'],
        obrazek: 'lososschrestem.jpg',
        vyhledavani: ['losos', 'ryby', 'chřest', 'zelenina', 'citrón', 'máslo']
    },
    {
        nazev: 'Quiche s mozzarelou a rajčaty',
        pocetPorci: 4,
        kategorie: ['hlavní jídla', 'svačiny', 'vegetariánské'],
        postup: 'Zpracujeme mouku, máslo, 1 vajíčko a dvě lžíce mléka do těsta a dáme ho vychladit do ledničky. Po 30ti minutách ho vytáhneme a namačkáme do formy, pečeme 15min na 180 stupňů. Nápň připravíme smícháním tří vajíček, mléka, smetany a po špetce soli, pepře a muškátového oříšku. Do hotového korpusu naskládáme kousky mozzarely na plátky, pokrájená rajčáta a čerstvý špenát nastřídačku a nakonec zalijeme náplní. Pečeme 45 minut.',
        ingredience: ['300g hladké celozrnné mouky', '150g másla', '4 vejce', '70 ml mléka', '250g mozzarely', '250g rajčat', '20 lístků bazalky', '80ml smetany', 'muškátový oříšek', 'čerstvý špenát'],
        obrazek: 'quichesmozzarelouarajcaty.jpg',
        vyhledavani: ['rajčata', 'sýr', 'mozzarela', 'špenát', 'vejce']
    },

    {
        nazev: 'Tuňákový salát s vajíčkem',
        pocetPorci: 1,
        kategorie: ['hlavní jídla', 'svačiny', 'saláty', 'ryby'],
        postup: 'Salát nakrájíme, smícháme se zeleninou a dáme na talíř. Vajíčka oloupeme a nakrájíme a přidáme navrch směsi. Na to položíme tuňáka z konzervy. Salát jemně osolíme a opepříme.',
        ingredience: ['salát', 'tuňák z konzervy v olivovém oleji', 'zelenina', 'rajčata', 'okurka', 'vejce', 'kukuřice', 'olivy'],
        obrazek: 'tunakovysalatsvajickem.jpg',
        vyhledavani: ['ryby', 'vejce', 'salát', 'zelenina', 'rajčata']
    },
    {
        nazev: 'Kuře na kari',
        pocetPorci: 4,
        kategorie: ['hlavní jídla'],
        postup: 'Uvařte rýži dle návodu. Maso nakrájejte a osmahněte na pánvi s troškou oleje. Přidejte ananas se šťávou, sůl a kari koření a chvíli povařte. Přidejte žervé a míchejte, dokud se nerozpustí. Můžeme podávat.',
        ingredience: ['300g rýže', '500g kuřecích prsních nebo stehenních řízků', '300 g čerstvého nebo kompotovaného ananasu bez cukru', '2 lžičky kari', '150g žervé', 'olivový olej'],
        obrazek: 'kurecinakari.jpg',
        vyhledavani: ['kuřecí maso', 'rýže', 'kari', 'ananas', 'ovoce']
    },
    {
        nazev: 'Ananasový shake s koriandrem',
        pocetPorci: 4,
        kategorie: ['dezerty', 'svačiny'],
        postup: 'Ananas nakrájíme a dáme do mixéru, přidáme ostatní suroviny a mixujeme, dokud není směs hladká.',
        ingredience: ['ananas', 'ananasový džus', '4 snítky koriandru', '1 plátek zázvoru', '1 špetka soli'],
        obrazek: 'ananasovyshakeskoriandrem.jpg',
        vyhledavani: ['ananas', 'ovoce', 'zázvor']
    },



];


console.log("Celkem máme " + recepty.length + " receptů.");