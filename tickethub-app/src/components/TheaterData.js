import Theatre2 from "../assets/theatre2.jpg";
import Theatre4 from "../assets/theatre4.jpg";
import Theatre6 from "../assets/theatre6.jpg";

const tileData = [
    {
        id: 0,
        name: 'Silvercity St. Vital Cinemas'
    },
    {
        id: 1,
        name: 'Silvercity: Polo Park'
    },
    {
        id: 2,
        name: 'Scotiabank Theatre'
    },
    {
        id: 3,
        name: 'Cineplex Odeon Cinemans VIP'
    },

    { name: 'SilverCity St. Vital Cinemas', id: 0, address: "Address: 1225 St Mary's Rd #160, Winnipeg, MB R2M 5E5", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 256-3901"},
    { name: 'Cineplex Odeon Cinemas', id: 1, address: "Address: 2190 McGillivray Blvd, Winnipeg, MB R3Y 1S6", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 269-9981"},
    { name: 'Landmark Cinemas 8 Grant Park', id: 2, address: "Address: 1120 Grant Avenue Unit 127, Winnipeg MB R3M 2A6", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 453-4536"},
    { name: 'Scotiabank Theatre', id: 3, address: "Address: 817 St James St, Winnipeg, MB R3G 3L3", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 774-1001"},
    { name: 'Cinematheque', id: 4,  address: "Address: 304 - 100 Arthur St, Winnipeg, MB R3B 1H3", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 925-3456"},
    { name: 'Famous Players',  id: 5, address: "Address: 1555 Regent Ave W, Winnipeg, MB R2C 4J2", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 663-2166"},
    { name: 'Cinema City Northgate', id: 6, address: "Address: Northgate, 1399 McPhillips St, Winnipeg, MB R2V 3C4", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 334-6253"},
    { name: 'The Flicks Cinema', id: 7, address: "Address: 319 1 St E, Stonewall, MB R0C 2Z0", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 467-8401"},
    { name: 'Bulldog Outdoor Movies', id: 8, address: "Address: Bulldog Outdoor Movies, Winnipeg, MB", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 334-1397"},
    { name: 'Dramatic Arts Centre', id: 9, address: "Address: 585 Ellice Ave, Winnipeg, MB R3B 1Z7", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 416-5205"},
    { name: 'John J. Conklin Theatre', id: 10,address: "Address: 162 Dafoe Rd W, Winnipeg, MB R3T 6B3", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 474-6880"},
    { name: 'Black Hole Theatre', id: 11, address: "Address: 150 Dafoe Rd W, Winnipeg, MB R3T 6B3", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 474-6880"},
    { name: 'Celebrations Dinner Theatre', id: 12 ,address: "Address: 1824 Pembina Hwy, Winnipeg, MB R3T 2G2", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 982-8282"},
    { name: 'Burton Cummings Theatre',id: 13,  address: "Address: 364 Smith St, Winnipeg, MB R3B 2H2", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 987-7825"},
    { name: 'Pantages Playhouse Theatre', id: 14, address: "Address: 180 Market Ave, Winnipeg, MB R3B 0P7", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 989-2889"},
    { name: 'Manitoba Opera Theatre', id: 15, address: "Address: 115 Bannatyne Ave, Winnipeg, MB R3B 0R3", hours: "Hours: 08:00 AM - 12:00 AM", phone: "Phone: (204) 942-7479"}
];

export default function GetTheater(i){
    return tileData[i];
}