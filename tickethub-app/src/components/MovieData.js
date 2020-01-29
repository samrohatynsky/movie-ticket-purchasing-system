import fordvferrari from "../ui/fordvferrari.jpg";
import joker from "../ui/joker.jpg";
import doctorsleep from "../ui/doctorsleep.jpg";
import terminator from "../ui/terminator.jpg";
import charliesangels from "../ui/charliesangels.jpg";
import zombieland from "../ui/zombieland.jpg";
import midway from "../ui/midway.jpg";
import lastchristmas from "../ui/lastchristmas.jpg";
import maleficent from "../ui/maleficent.jpg";

const tileData = [
    {
        img: fordvferrari,
        title: 'Ford v Ferrari',
        director: 'Mangold',
        description: 'American automotive designer Carroll Shelby and fearless British race car driver Ken Miles battle corporate interference, the laws of physics and their own personal demons to build a revolutionary vehicle for the Ford Motor Co.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: joker,
        title: 'Joker',
        director: 'Phillips',
        description: 'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he\'s part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: doctorsleep,
        title: 'Doctor Sleep',
        director: 'Flanagan',
        description: 'Struggling with alcoholism, Dan Torrance remains traumatized by the sinister events that occurred at the Overlook Hotel when he was a child. His hope for a peaceful existence soon becomes shattered when he meets Abra, a teen who shares his extrasensory gift of the "shine." Together, they form an unlikely alliance to battle the True Knot, a cult whose members try to feed off the shine of innocents to become immortal.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: terminator,
        title: 'Terminator: Dark Fate',
        director: 'Miller',
        description: 'In Mexico City, a newly modified liquid Terminator -- the Rev-9 model -- arrives from the future to kill a young factory worker named Dani Ramos. Also sent back in time is Grace, a hybrid cyborg human who must protect Ramos from the seemingly indestructible robotic assassin. But the two women soon find some much-needed help from a pair of unexpected allies -- seasoned warrior Sarah Connor and the T-800 Terminator.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: charliesangels,
        title: "Charlie's Angels",
        director: 'Banks',
        description: 'A brilliant scientist invents Calisto -- a sustainable energy source that will revolutionize the way people use power. But when Calisto falls into the wrong hands, the Angels must retrieve it before it can be used as a weapon of mass destruction.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: zombieland,
        title: "Zombieland: Double Tap",
        director: 'Fleischer',
        description: 'Zombie slayers Tallahassee, Columbus, Wic-hita and Little Rock leave the confines of the White House to travel to Graceland in Memphis, Tenn. Along the way, they encounter other post-apocalyptic warriors and a group of survivors who find refuge in a commune. The scrappy fighters must now rely on their wits and weapons more than ever as they soon find themselves in a relentless battle against smarter, faster and seemingly indestructible zombies.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: midway,
        title: "Midway",
        director: 'Emmerich',
        description: 'On Dec. 7, 1941, Japanese forces launch a devastating attack on Pearl Harbor, the U.S. naval base in Hawaii. Six months later, the Battle of Midway commences on June 4, 1942, as the Japanese navy once again plans a strike against American ships in the Pacific. For the next three days, the U.S. Navy and a squad of brave fighter pilots engage the enemy in one of the most important and decisive battles of World War II.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: lastchristmas,
        title: 'Last Christmas',
        director: 'Feig',
        description: 'Nothing seems to go right for young Kate, a frustrated Londoner who works as an elf in a year-round Christmas shop. But things soon take a turn for the better when she meets Tom -- a handsome charmer who seems too good to be true. As the city transforms into the most wonderful time of the year, Tom and Kate\'s growing attraction turns into the best gift of all -- a Yuletide romance.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: maleficent,
        title: 'Maleficent: Mistress of Evil',
        director: 'Ronning',
        description: 'Maleficent travels to a grand old castle to celebrate young Aurora\'s upcoming wedding to Prince Phillip. While there, she meets Aurora\'s future mother-in-law -- a conniving queen who hatches a devious plot to destroy the land\'s fairies. Hoping to stop her, Maleficent joins forces with a seasoned warrior and a group of outcasts to battle the queen and her powerful army.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
];

export default function GetMovieData(i){
    return tileData[i];
}