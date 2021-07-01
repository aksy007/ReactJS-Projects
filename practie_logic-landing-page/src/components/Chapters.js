import React from 'react';
import ChapterList from './ChapterList';

const Chapters = ()=>{

    const intro = [
        {
            id: 1,
            quizName: "Warmup Puzzles",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280&quot",
            quizText : "Get started with some logic warmups."
        },
        {
            id: 2,
            quizName: "Truth-Seeking",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png?width=280",
            quizText : "Who or what is telling the truth?"
        },
        {
            id: 3,
            quizName: "Strategic Deduction",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Machine_Logic_and_Strategy-jrTuIK-2FIeRk.png?width=280",
            quizText: "Stretch the information you're given as far as it can go!"
        },
    ];
    const rationalDetective = [
        {
            id: 1,
            quizName: "Riddles of Order",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png?width=280",
            quizText: "What order do these racers finish in?"
        },
        {
            id: 2,
            quizName: "Crafty Counting",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Crafty_Counting-MyeNyB.png?width=280",
            quizText: "Learn startegies for counting that go far beyond just counting."
        },
        {
            id: 3,
            quizName: "Mystery Containers",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mystery_Containers-jce39Z.png?width=280",
            quizText: "What's in each of these mystery boxes?"
        },
        {
            id: 4,
            quizName: "Futoshiki",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Futoshiki-bNVmO9.png?width=280",
            quizText: "Arrange the numbers to match the inequalities."
        },
        {
            id: 5,
            quizName: "Shuffles",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Shuffles-GgH8Ox.png?width=280",
            quizText: "Where did everything get shuffled to?"
        },
        {
            id: 6,
            quizName: "False Information",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/False_Information-WRykiD.png?width=280",
            quizText: "Solve problems where the people giving you hints might be lying."
        },
    ];
    const puzzlesAndRiddles = [
        {
            id: 1,
            quizName: "Werewolves",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Werewolves-Jd2lIq.png?width=280",
            quizText: "Who's a werewolf?"
        },
        {
            id: 2,
            quizName: "Logical Language",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Language-6tn9sJ.png?width=280",
            quizText: 'Explore the logical use of the words "and", "or", and "not".' 
        },
        {
            id: 3,
            quizName: "If A, then B",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/If_A_then_B.-vl28Kf.png?width=280",
            quizText: "If you do this quiz, you will learn about sentences like this one."
        },
        {
            id: 4,
            quizName: "Elimination Grids",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Elimination_Grids-bpMmxt.png?width=280",
            quizText: "Solve classic logic elimination puzzles."
        },
        {
            id: 5,
            quizName: "Jigsaw Map",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Jigsaw_Map-qFUgaS.png?width=280",
            quizText: "Where do the pieces go on the map?"
        },
    ];
    const multilevelTinking = [
        {
            id: 1,
            quizName: "Perfect Information",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Perfect_Information-mqTyGs.png?width=280",
            quizText : "If everyone follows the same logic, can you find out what they know?"
        },
        {
            id: 2,
            quizName: "Hat Colors",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors-5jioSi.png?width=280",
            quizText : "Can you figure out who can figure out the color of their hat?"
        },
        {
            id: 3,
            quizName: "Hat Colors with More People",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors_with_More_People-96NuCs.png?width=280",
            quizText : "What happens to hat puzzles when there are more hats and more people?"
        },
        {
            id: 4,
            quizName: "Red-Eyed Dragons",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Red-Eyed_Dragons-v4T9FK.png?width=280",
            quizText : "Exactly how much can you learn from no one knowing anything?"
        },
        {
            id: 5,
            quizName: "Logical Pirates",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Pirates-mMDacg.png?width=280",
            quizText : "Beware! Every pirate is as logical, greedy, and cutthroat as every other pirate."
        },
        {
            id: 6,
            quizName: "Knights and knaves",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Knights_and_Knaves-vNOTMQ.png?width=280",
            quizText : "Solve classic truthteller-liar puzzles where someone else knows the answer."
        },
    ];
    const competitiveGames = [
        {
            id: 1,
            quizName: "Poisoned Chocolate",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Poisoned_Chocolate-2hzzdS.png?width=280",
            quizText : "Don't take the last chocolate!"
        },
        {
            id: 2,
            quizName: "Luk Tsut k'i ",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Luk_Tsut_Ki-YkvdnC.png?width=280",
            quizText : 'Find the complete solution to a classic game.' 
        },
        {
            id: 3,
            quizName: "Puppies and Kittens",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Puppies_and_Kittens-MyD5W8.png?width=280",
            quizText : "Solve a fuzzier, livelier variant of the poisoned chocolate game."
        },
        {
            id: 4,
            quizName: "Poisoned Chocolate II",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Poisoned_Chocolate_II-jCwMSc.png?width=280",
            quizText: "What happens when the chocolate comes in rectangles?"
        },
        {
            id: 5,
            quizName: "Game Search Algorithms",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Game_Search_Algorithms-8CTK46.png?width=280",
            quizText: "Learn how simple AI systems approach game strategy."
        },
    ];
    const logicMachines = [
        {
            id: 1,
            quizName: "Truth Tables",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth_Tables-fQehm6.png?width=280",
            quizText : "Diagram out the meanings of each logical operator."
        },
        {
            id: 2,
            quizName: "Basic Logic Gates",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Basic_Logic_Gates-SuCIgu.png?width=280",
            quizText : 'How do AND, OR, and NOT gates work?' 
        },
        {
            id: 3,
            quizName: "Combinations",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Combinations-wp6DqR.png?width=280",
            quizText : "Combine gates together to make complex circuits."
        },
        {
            id: 4,
            quizName: "Fredkin Gates",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Fredkin_Gates-B8FBqg.png?width=280",
            quizText: "Take a peek at a gate used in biological and quantum computing."
        },
        {
            id: 5,
            quizName: "Binary Numbers and Addition",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Creating_a_Mechanical_Adder-yTzxMV.png?width=280",
            quizText: "How does computer arithmetic work?"
        },
        {
            id: 6,
            quizName: "Creating a Mechanical Adder",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Creating_a_Mechanical_Adder-yTzxMV.png?width=280",
            quizText: "Use what you've learned about logic gates to create a circuit that adds numbers."
        },
    ];
    const advancesKnights = [
        {
            id: 1,
            quizName: "Indirection",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Indirection-PZKKoF.png?width=280",
            quizText : "Can you trick a liar into telling you the truth?"
        },
        {
            id: 2,
            quizName: "Knights and knaves En Masse",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Knights_and_Knaves_En_Masse-7DRnSV.png?width=280",
            quizText : 'What happens when you try to do logic at a big island party?' 
        },
        {
            id: 3,
            quizName: "Jokers",
            quizImgSrc : "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Jokers-wSQW6c.png?width=280",
            quizText : "Solve tricky variants of knights and knaves puzzles where some residents can behave like either."
        },
        {
            id: 4,
            quizName: "Other Validations",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Oher_Variations-PnIvJz.png?width=280",
            quizText: "Twist your mind around these unusual variants."
        },
        {
            id: 5,
            quizName: "Humans vs Vampires",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Humans_and_Vampires-zhcWOo.png?width=280",
            quizText: "Now there are four types of island resident: can you still work out the truth?"
        },
        {
            id: 6,
            quizName: "Challanges",
            quizImgSrc: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Challenges-o42cgt.png?width=280",
            quizText: "Challenge yourself with our hardest selection of logic puzzles."
        },
    ];

    return(
        <section className="chapters">
            <ul className="chapter-list">
                <ChapterList 
                    id = "1"
                    chapter={intro} 
                    title="Introduction" 
                    chapterDetail="Put your logic to the test with these warmups!" 
                    key = "1"
                    isLock = "false"
                />
                <ChapterList 
                    id = "2"
                    chapter = {rationalDetective}
                    title = "The Rational Detective"
                    chapterDetail = "Eliminate the impossible and uncover the truth!"
                    key ="2"
                    isLock = "true"
                />
                <ChapterList 
                    id = "3"
                    chapter = {puzzlesAndRiddles}
                    title = "puzzles and Reedles"
                    chapterDetail = "Even trickier puzzles and the tools you need to solve them."
                    key ="3"
                    isLock = "true"
                />
                <ChapterList 
                    id = "4"
                    chapter = {multilevelTinking}
                    title = "Multi-Level Thinking"
                    chapterDetail = "If you know that I know that you know... what then?"
                    key ="4"
                    isLock = "true"
                />
                <ChapterList 
                    id = "5"
                    chapter = {competitiveGames}
                    title = "Competitive Games"
                    chapterDetail = "What will your opponent do? Logic it out!"
                    key ="5"
                    isLock = "true"
                />
                <ChapterList 
                    id = "6"
                    chapter = {logicMachines}
                    title = "Logic Machines"
                    chapterDetail = "Turn logic into arithmetic machines."
                    key ="6"
                    isLock = "true"
                />
                <ChapterList 
                    id = "7"
                    chapter = {advancesKnights}
                    title = "Advanced Knights and Knaves"
                    chapterDetail = "Uncover liars on this island of logic!"
                    key ="7"
                    isLock = "true"
                />
            </ul>
        </section>
    );
}

export default Chapters;