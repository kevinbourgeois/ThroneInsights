import { select } from "d3-selection";



const drawAllSymbols = (dots) => {
    //addSymbol(dots[6], ['☠️'], "Khal Drogo pours molten lava on Daenerys' brother");
    //addSymbol(dots[8], ['🧟'], "Jon Snow kills the first White Walker");

    addSymbol(dots[getEpisodeNumber(1)], [{
        'symbol': '🧑‍🦽',
        'caption': 'Brandon Stark is paralyzed'
    }]);

    addSymbol(dots[getEpisodeNumber(6)], [{
        'symbol': '☠️',
        'caption': 'Khal Drogo pours molten lava on Daenerys\' brother'
    }]);

    addSymbol(dots[getEpisodeNumber(8)], [{
        'symbol': '🧟',
        'caption': 'Jon Snow kills a wight'
    }]);

    addSymbol(dots[getEpisodeNumber(9)], [{
        'symbol': '💀',
        'caption': 'Ned Stark is beheaded'
    },
    {
        'symbol': '⛓️',
        'caption': 'Jaime is captured by Robb Stark'
    }]);

    addSymbol(dots[getEpisodeNumber(10)], [{
        'symbol': '💀',
        'caption': 'Daenerys kills Khal Drogo'
    }, 
    {   'symbol': '🐉',
        'caption': "Daenerys's dragons are born"}]
    );

    addSymbol(dots[getEpisodeNumber(11)], [{
        'symbol': '👑',
        'caption': 'Rob Stark is crowned king'
    }]);

    addSymbol(dots[getEpisodeNumber(13)], [{
        'symbol': '💔',
        'caption': 'Theon Greyjoy betrays the Starks'
    }]);

    addSymbol(dots[getEpisodeNumber(15)], [{
        'symbol': '💀',
        'caption': 'Renly Baratheon is killed by Mellissandre shadow creature'
    }]);

    addSymbol(dots[getEpisodeNumber(16)], [{
        'symbol': '🏰',
        'caption': 'Theon Greyjoy takes Winterfell'
    }]);

    addSymbol(dots[getEpisodeNumber(17)], [{
        'symbol': '💀',
        'caption': 'Theon claims that he killed Bran and Rickon Stark'
    }]);

    addSymbol(dots[getEpisodeNumber(19)], [{
        'symbol': '⚔️',
        'caption': 'Stannis looses the battle of Blackwater'
    }]);

    addSymbol(dots[getEpisodeNumber(20)], [{
        'symbol': '🧟',
        'caption': 'First apparition of the White Walkers army'
    }]);

    addSymbol(dots[getEpisodeNumber(22)], [{
        'symbol': '⛓️',
        'caption': 'Theon is captured'
    },
    {
        'symbol': '⭐',
        'caption': 'Brandon Starts discovers his powers'
    }]);

    addSymbol(dots[getEpisodeNumber(23)], [{
        'symbol': '🩸',
        'caption': 'Jaime gets his hand cut off'
    }]);

    addSymbol(dots[getEpisodeNumber(24)], [{
        'symbol': '🛡️',
        'caption': 'Daenerys frees the Unsullied'
    },
        {
        'symbol': '💀',
        'caption': 'Jeor Mormont is killed at Craster\'s Keep'
    }
    ]);

    addSymbol(dots[getEpisodeNumber(25)], [{
        'symbol': '❤️',
        'caption': 'Jon Snow and Ygritte fall in love'
    }]);

    addSymbol(dots[getEpisodeNumber(28)], [{
        'symbol': '🧟',
        'caption': 'Sam kills a White Walker'
    },
    {
        'symbol': '💍',
        'caption': 'Tyrion and Sansa get married'
    }]);

    addSymbol(dots[getEpisodeNumber(29)], [{
        'symbol': '💔',
        'caption': 'Jon Snow betrays Ygritte and the Wildlings',
    
    },
    {
        'symbol': '💀',
        'caption': 'Robb, Catelyn, Talisa and their army are killed at the Red Wedding'
    }]);

    addSymbol(dots[getEpisodeNumber(30)], [{
        'symbol': '🏰',
        'caption': 'Daenerys takes Yunkai and frees the slaves'
    }]);

    addSymbol(dots[getEpisodeNumber(32)], [{
        'symbol': '💍',
        'caption': 'Joffrey and Margaery get married'
    },
    {
        'symbol': '💀',
        'caption': 'Joffrey is poisoned'
    },
    {
        'symbol': '⛓️',
        'caption': 'Tyrion is held responsible for Joffrey\'s death'
        }]);

    addSymbol(dots[getEpisodeNumber(33)], [{
        'symbol': '🏃‍♀️',
        'caption': 'Littlefinger helps Sansa escape King\'s Landing'
    }]);

    addSymbol(dots[getEpisodeNumber(34)], [{
        'symbol': '🏰',
        'caption': 'Daenerys takes Meereen and frees the slaves'
    },
    {
        'symbol': '🧟',
        'caption': 'A White Walker turns Craster\'s baby into a White Walker'
        }]);

    addSymbol(dots[getEpisodeNumber(35)], [{
        'symbol': '👑',
        'caption': 'Tommen is crowned king'
    }]);

    addSymbol(dots[getEpisodeNumber(36)], [{
        'symbol': '⛓️',
        'caption': 'Tyrion\'s trial'
    }]);

    addSymbol(dots[getEpisodeNumber(37)], [{
        'symbol': '💀',
        'caption': 'Littlefinger pushes Lysa Arryn out of the Moon Door'
    }]);

    addSymbol(dots[getEpisodeNumber(38)], [{
        'symbol': '💀',
        'caption': 'The mountain crushes Oberyn\'s head'
    }]);

    addSymbol(dots[getEpisodeNumber(39)], [{
        'symbol': '⚔️',
        'caption': 'The wildlings attack Castle Black but are repelled'
    },
    {
        'symbol': '💀',
        'caption': 'Ygritte is killed by Olly'
    }]);

    addSymbol(dots[getEpisodeNumber(40)], [{
        'symbol': '⚔️',
        'caption': 'Stannis defeats the Mance Rayder\'s army'
    },
    {
        'symbol': '⭐',
        'caption': 'Brandon Stark meets the Three-Eyed Raven'
    },
    {
        'symbol': '💀',
        'caption': 'Tyrion kills Shae and Tywin'
    }]);

    addSymbol(dots[getEpisodeNumber(41)], [{
        'symbol': '💀',
        'caption': 'Jon shoots an arrow in the heart of Mance Rayder'
    }]);

    addSymbol(dots[getEpisodeNumber(42)], [{
        'symbol': '⭐',
        'caption': 'Arya becomes No One'
    },
    {
        'symbol': '👑',
        'caption': 'Jon Snow is named Lord Commander of the Night\'s Watch'
    }]);

    addSymbol(dots[getEpisodeNumber(44)], [{
        'symbol': '💀',
        'caption': 'Ser Baristan Selmy is killed by the Sons of the Harpy'
    }]);
    
    addSymbol(dots[getEpisodeNumber(45)], [{
        'symbol': '🩸',
        'caption': 'Jorah Mormont is infected by Greyscale'
    },
    {
        'symbol': '🤝',
        'caption': 'Jon Snow and the Wildlings make peace'
    },
    {
        'symbol': '❤️',
        'caption': 'Grey Worm and Missandei fall in love'
    }]);

    addSymbol(dots[getEpisodeNumber(46)], [{
        'symbol': '⛓️',
        'caption': 'Maegeary and Loras are arrested by the Faith Militant'
    },
    {
        'symbol': '💍',
        'caption': 'Sansa marries Ramsay Bolton'
    },
    {
        'symbol': '🩸',
        'caption': 'Ramsey rapes Sansa'
    }]);

    addSymbol(dots[getEpisodeNumber(47)], [{
        'symbol': '⛓️',
        'caption': 'Jorah and Tyrion are sold as slaves'
    },
    {
        'symbol': '⛓️',
        'caption': 'Cersei is arrested by the Faith Militant'
    }]);

    addSymbol(dots[getEpisodeNumber(48)], [{
        'symbol': '🤝',
        'caption': 'Tyrion is named Daenerys\' advisor'
    },
    {
        'symbol': '🧟',
        'caption': 'White Walkers attack Hardhome'
    }, 
    {
        'symbol': '🧟',
        'caption': 'Jon Snow kills a White Walker with Longclaw'
    },
    {
        'symbol': '🧟',
        'caption': 'The Night King raises his arms and turns the dead into White Walkers'
    }]);

    addSymbol(dots[getEpisodeNumber(49)], [{
        'symbol': '💀',
        'caption': 'Shireen is burned alive by Melisandre'
    },
    {
        'symbol': '⚔️',
        'caption': 'The Sons of Harpy attack the fighting pits'
    },
    {
        'symbol': '🐉',
        'caption': 'Drogon saves Daenerys from the Sons of Harpy and flies away with her'
    }]);

    addSymbol(dots[getEpisodeNumber(50)], [{
        'symbol': '💀',
        'caption': 'Stannis is killed by Brienne of Tarth after losing the Battle of Winterfell'
    },
    {
        'symbol': '🏃‍♀️',
        'caption': 'Theon and Sansa escape Winterfell'
    },
    {
        'symbol': '⛓️',
        'caption': 'Cersei is forced to walk naked through the streets of King\'s Landing'
    },
    {
        'symbol': '⭐',
        'caption': 'The Mountain gets resurrected by Qyburn'
    },
    {
        'symbol': '💀',
        'caption': 'Myrcella is poisoned by Ellaria Sand'
    },
    {
        'symbol': '💀',
        'caption': 'Jon Snow is stabbed to death by the Night\'s Watch'
    }]);

    addSymbol(dots[getEpisodeNumber(51)], [{
        'symbol': '⭐',
        'caption': 'Melissandre reveals her true form'
    }]);

    addSymbol(dots[getEpisodeNumber(52)], [{
        'symbol': '⭐',
        'caption': 'Brandon goes back in time and sees his father as a child'
    },
    {
        'symbol': '💀',
        'caption': 'Ramsey kills Roose Bolton'
    },
    {
        'symbol': '💀',
        'caption': 'Euron Greyjoy kills Balon Greyjoy'
    },
    {
        'symbol': '⭐',
        'caption': 'Jon Snow is resurrected by Melissandre'
    }]);

    addSymbol(dots[getEpisodeNumber(53)], [{
        'symbol': '⛓️',
        'caption': 'Rickon, Osha are captured by the Boltons'
    },
    {
        'symbol': '💀',
        'caption': 'Jon kills Alliser Thorne and the mutineers'
    }]);

    addSymbol(dots[getEpisodeNumber(54)], [{
        'symbol': '🛡️',
        'caption': 'The Dothraki Khalasar joins Daenerys'
    },
    {
        'symbol': '💀',
        'caption': 'Osha is killed by Ramsay Bolton'
    }]);

    addSymbol(dots[getEpisodeNumber(55)], [{
        'symbol': '🧟',
        'caption': 'Bran sees the creation of the White Walkers'
    },
    {
        'symbol': '👑',
        'caption': 'Euron Greyjoy is crowned King of the Iron Islands'
    },
    {
        'symbol': '🧟',
        'caption': 'The Night King kills the Three-Eyed Raven and the Children of the Forest'
    },
    {
        'symbol': '💀',
        'caption': 'Hodor is killed by White Walkers'
    }]);

    addSymbol(dots[getEpisodeNumber(56)], [{
        'symbol': '🐉',
        'caption': 'Daenerys with her dragon tell the Dothraki she will lead them to Westeros'
    }]);

    addSymbol(dots[getEpisodeNumber(58)], [{
        'symbol': '🏃‍♀️',
        'caption': 'Arya leaves the House of Black and White to go back home' 
    }]);

    addSymbol(dots[getEpisodeNumber(59)], [{
        'symbol': '🤝',
        'caption': 'Yara and Theon join Daenerys\' forces'
    },
    {
        'symbol': '⚔️',
        'caption': 'The Battle for Winterfell'
    },
    {
        'symbol': '💀',
        'caption': 'Rickon is killed by Ramsay Bolton'
    },
    {
        'symbol': '💀',
        'caption': 'Sansa kills Ramsay Bolton by feeding him to his own dogs'
    }]);

    addSymbol(dots[getEpisodeNumber(60)], [{
        'symbol': '💥',
        'caption': 'Cersei blows up the Sept of Baelor'
    },
    {
        'symbol': '👑',
        'caption': 'Jon Snow is crowned King in the North'
    },
    {
        'symbol': '💀',
        'caption': 'Arya kills Walder Frey and his sons'
    }]);

    addSymbol(dots[getEpisodeNumber(61)], [{
        'symbol': '🧟',
        'caption': 'The White Walkers walk towards the Wall'
    },
    {
        'symbol': '🐉',
        'caption': 'Daenerys, the Dothrakis and her dragons arrive at Dragonstone'
    }]);

    addSymbol(dots[getEpisodeNumber(62)], [{
        'symbol': '⚔️',
        'caption': 'Yara\'s fleet gets destroyed by Euron Greyjoy'
    },
    {
        'symbol': '⛓️',
        'caption': 'Euro Greyjoy captures Yara and Ellaria Sand'
    }]);

    addSymbol(dots[getEpisodeNumber(63)], [{
        'symbol': '💀',
        'caption': 'Cersei kills Ellaria Sand and her daughter'
    },
    {
        'symbol': '❤️‍🩹',
        'caption': 'Jorah is cured of greyscale'
    },
    {
        'symbol': '🏰',
        'caption': 'The Unsullied capture Casterly Rock'
    },
    {
        'symbol': '🏰',
        'caption': 'The Lannister capture Highgarden'
    },
    {
        'symbol': '⚔️',
        'caption': 'Euron attacks the Unsullied fleet'
    },
    {
        'symbol': '💀',
        'caption': 'Jaime gives a poison to Olenna Tyrell'
    }] );

    addSymbol(dots[getEpisodeNumber(64)], [{
        'symbol': '❤️',
        'caption': 'Arya reunites with her family'
    },
    {
        'symbol': '⚔️',
        'caption': 'Daenerys rides Drogon and decimates the Lannister army'
    },
    {
        'symbol': '🐉',
        'caption': 'Drogon gets hit by a scorpion bolt'
    }] );

    addSymbol(dots[getEpisodeNumber(66)], [{
        'symbol': '🧟',
        'caption': 'Jon Snow and his companions are trapped by the White Walkers'
    },
    {
        'symbol': '🐉',
        'caption': 'Daenerys and her dragons save Jon Snow and his companions'
    },
    {
        'symbol': '💀',
        'caption': 'Uncle Benjen saves Jon Snow and dies'
    },
    {
        'symbol': '🧟',
        'caption': 'The night king kills Viserion and resurrects him as a wight dragon'
    }] );

    addSymbol(dots[getEpisodeNumber(67)], [{
        'symbol': '🧟',
        'caption': 'Cersei sees a wight, but refuses to help Jon Snow'
    },
    {
        'symbol': '❤️',
        'caption': 'Jon and Daenerys fall in love'
    },
    {
        'symbol': '💀',
        'caption': 'Littlefinger is killed by Arya during a trial'
    },
    {
        'symbol': '🐉',
        'caption': 'Jon\'s true identity is revealed'
    },
    {
        'symbol': '🧟',
        'caption': 'The Night King destroys the Wall with Viserion'
    }] );

    addSymbol(dots[getEpisodeNumber(68)], [{
        'symbol': '🏃‍♀️',
        'caption': 'Theon rescues Yara'
    },

    {
        'symbol': '🐉',
        'caption': 'Jon Snow rides Rhaegal'
    },
    {
        'symbol': '🐉',
        'caption': 'Jon learns about his true identity'
    }] );

    addSymbol(dots[getEpisodeNumber(69)], [{
        'symbol': '❤️',
        'caption': 'Arya seduces Gendry'
    },
    {
        'symbol': '🤝',
        'caption': 'Brienne is knighted by Jaime'
    },
    {
        'symbol': '🐉',
        'caption': 'Jon reveals his true identity to Daenerys'
    }] );

    addSymbol(dots[getEpisodeNumber(70)], [{
        'symbol': '⚔️',
        'caption': 'The Night King and his army arrive at Winterfell'
    },
    {
        'symbol': '💀',
        'caption': 'Lyan Mormont is killed by a wight giant'
    },
    {
        'symbol': '💀',
        'caption': 'Beric Dondarrion is killed by the Night King'
    },
    {
        'symbol': '💀',
        'caption': 'Jorah Mormont is killed defending Daenerys'
    },
    {
        'symbol': '💀',
        'caption': 'Theon Greyjoy is killed by the Night King defending Bran'
    },
    {
        'symbol': '🧟',
        'caption': 'The Night King is killed by Arya Stark'
    },    {
        'symbol': '💀',
        'caption': 'Melisandre dies after the battle'
    },] );

    addSymbol(dots[getEpisodeNumber(71)], [{
        'symbol': '🐉',
        'caption': 'Jon Snow reaveals his true identity to Daenerys'
    },
    {
        'symbol': '⚔️',
        'caption': 'Daenerys, Jon and her allies go to King\'s Landing'
    },
    {
        'symbol': '🐉',
        'caption': 'Euron kills Rhaegal with a scorpion bolt'
    },
    {
        'symbol': '💔',
        'caption': 'Cersei refuses to surrender'
    },
    {
        'symbol': '💀',
        'caption': 'Missandei is beheaded by the Mountain'
    }]  );

    addSymbol(dots[getEpisodeNumber(72)], [{
        'symbol': '💀',
        'caption': 'Varys is executed by Daenerys'
    },
    {
        'symbol': '⚔️',
        'caption': 'Daenerys destroys Euro\'s fleet and the scorpions'
    },{
        'symbol': '🐉',
        'caption': 'Daenerys destroys King\'s Landing with Drogon'
    },
    {
        'symbol': '💀',
        'caption': 'Jaime, injured, kills Euron'
    },{
        'symbol': '💀',
        'caption': 'The Hound kills the Mountain'
    },
    {
        'symbol': '💀',
        'caption': 'Cersei and Jaime die in the Red Keep'
    }] );

    addSymbol(dots[getEpisodeNumber(73)], [{
        'symbol': '🏁',
        'caption': 'The End !'
    }] );















}

const addSymbol = (dot, symbols) => { 

    //tri des symboles par ordre alphabétique
    symbols.sort((a, b) => {
        if (a.symbol < b.symbol) {
            return -1;
        }
        if (a.symbol > b.symbol) {
            return 1;
        }
        return 0;
    });

    //const skullSymbol = symbols.filter(symbol => symbol.symbol === '💀');
    //console.log(skullSymbol);


    let marginTop = 0;

    let lastSymbol = {};
    let sameSymbols = [];

    for (const symbol of symbols) {
        
        

        if (lastSymbol.symbol === symbol.symbol) {
            sameSymbols.push(lastSymbol);
        }

    select('.main')
        .append('text')
        .attr('class', 'symbol')
        .attr('x', dot.cx.baseVal.value - 12)
        .attr('y', dot.cy.baseVal.value - (30 + marginTop))
        .style('fill', 'black')
        .text(symbol.symbol)
        .style('opacity', 0.8)
        //sur le hover l'élément symbol on lui met une opacité de 1

        .on('mouseover', (e) => {
            select('svg')
                .append('text')
                .attr('class', 'caption')
                .attr('x', e.clientX)
                .attr('y', e.clientY)
                //si la div sort du cadre, on la met à l'intérieur
                .attr('transform', () => {
                    if (e.clientX > 1000) {
                        return 'translate(-200, 0)';
                    }                    //if (e.clientY > 500) {
                    //    return 'translate(0, -100)';
                    //}
                    return 'translate(0, 0)';
                })
                .style('fill', 'black')
                .text(symbol.caption)
                
        })
        .on("mousemove", function(e){return select('.caption').style("top", (e.pageY-10)+"px").style("left",(e.pageX+10)+"px");})
        //sur le mouseout de la div, on supprime la div avec du texte
        .on('mouseout', () => {
            select('.caption').remove  ();
        })
    
        marginTop += 30;

        lastSymbol = symbol; 
    }


    


  
        
}

//fonction qui rend le numero devant l'episode en faisant + 1 
const getEpisodeNumber = (noEpisode) => {
    return noEpisode-1;
}

const drawSeasonsDots = (dots) => {
    colorDots(dots, 0, 10, 'season-one');
    colorDots(dots, 10, 20, 'season-two');
    colorDots(dots, 20, 30, 'season-three');
    colorDots(dots, 30, 40, 'season-four');
    colorDots(dots, 40, 50, 'season-five');
    colorDots(dots, 50, 60, 'season-six');
    colorDots(dots, 60, 67, 'season-seven');
    colorDots(dots, 67, 73, 'season-eight');
}

const colorDots = (dots, firstEp, LastEp, className) => {
    for(let i = firstEp; i < (LastEp); i++) {
        //on ajoute la classe .season-one à chaque point
        dots[i].classList.add(className);
    }
}


export {drawAllSymbols, drawSeasonsDots};