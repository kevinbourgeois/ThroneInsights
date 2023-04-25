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
    }]);

    addSymbol(dots[getEpisodeNumber(40)], [{
        'symbol': '⚔️',
        'caption': 'Stannis defeats the Mance Rayder\'s army'
    },
    {
        'symbol': '⭐',
        'caption': 'Brandon Stark meets the Three-Eyed Raven'
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

export {drawAllSymbols};