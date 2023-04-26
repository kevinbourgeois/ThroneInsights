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
        'caption': 'Jon Snow kills the first White Walker'
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















}

const addSymbol = (dot, symbols) => { 
    
    let marginTop = 0;
    for (const symbol of symbols) {


    select('.main')
        .append('text')
        .attr('class', 'symbol')
        .attr('x', dot.cx.baseVal.value - 12)
        .attr('y', dot.cy.baseVal.value - (30 + marginTop))
        .style('fill', 'black')
        .text(symbol.symbol)
        //sur le hover de la div, on affiche une div avec du texte
        .on('mouseover', (e) => {
            select('.main')
                .append('text')
                .attr('class', 'caption')
                .attr('x', e.pageX)
                .attr('y', dot.cy.baseVal.value)
                .style('fill', 'black')
                .text(symbol.caption)
        })
        //sur le mouseout de la div, on supprime la div avec du texte
        .on('mouseout', () => {
            select('.caption').remove()
        })
    
        marginTop += 30;
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