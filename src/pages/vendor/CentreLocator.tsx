import { useState, useEffect } from "react";
import { MapPin, Search, Filter, Navigation, Phone, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Store locations data from Excel file
const storeLocations = [
  {
    id: 1,
    name: "Chennai G.P.O",
    address: "37VR+4H6, Beach Rd, Mannadi, Fort St George, Chennai, Tamil Nadu 600009",
    region: "Chennai",
    country: "India",
    lat: 13.0827,
    lng: 80.2707,
    type: "Post Office",
    phone: "+91 44 2534 1234",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Mail Services", "Postal Banking", "Government Services"],
    description: "Main post office serving Chennai metropolitan area"
  },
  {
    id: 2,
    name: "Chennai IBC",
    address: "252W+PX5, Chennai - Theni Hwy, Ramapuram, Alandur, St.Thomas Mount, Chennai, Tamil Nadu 600016",
    region: "Chennai",
    country: "India",
    lat: 13.0017,
    lng: 80.1971,
    type: "Post Office",
    phone: "+91 44 2234 5678",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.1,
    specialties: ["International Mail", "Courier Services", "Express Post"],
    description: "International Business Center for postal services"
  },
  {
    id: 3,
    name: "Anna Road H.O",
    address: "3799+2XM, Anna Salai, Chennai, Tamil Nadu 600005",
    region: "Chennai",
    country: "India",
    lat: 13.0681,
    lng: 80.2685,
    type: "Post Office",
    phone: "+91 44 2852 1234",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.3,
    specialties: ["Retail Post", "Money Orders", "Savings Bank"],
    description: "Head office serving Anna Salai area"
  },
  {
    id: 4,
    name: "Ambattur H.O",
    address: "447X+9XJ, Chennai - Tiruttani Hwy, Varadaraja Puram, Ambattur, Chennai, Tamil Nadu 600053",
    region: "Chennai",
    country: "India",
    lat: 13.1133,
    lng: 80.1497,
    type: "Post Office",
    phone: "+91 44 2656 7890",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.0,
    specialties: ["Local Mail", "Parcel Services", "Insurance"],
    description: "Head office serving Ambattur industrial area"
  },
  {
    id: 5,
    name: "Anna Nagar S.O",
    address: "Post Office Anna Nagar SO (Sub-Office), Chennai, Tamil Nadu, India (IN), Pin Code: 600040",
    region: "Chennai",
    country: "India",
    lat: 13.0850,
    lng: 80.2101,
    type: "Post Office",
    phone: "+91 44 2615 4321",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.4,
    specialties: ["Residential Services", "Speed Post", "Money Transfer"],
    description: "Sub office serving Anna Nagar residential area"
  },
  {
    id: 6,
    name: "Mylapore H.O",
    address: "27MC+VQ2, Kutchery Rd, Girija Garden, Mylapore, Chennai, Tamil Nadu 600004",
    region: "Chennai",
    country: "India",
    lat: 13.0347,
    lng: 80.2719,
    type: "Post Office",
    phone: "+91 44 2499 8765",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.5,
    specialties: ["Heritage Services", "Cultural Mail", "Traditional Banking"],
    description: "Historic post office in cultural heart of Chennai"
  },
  {
    id: 7,
    name: "Tiruvannamalai H.O",
    address: "NH 66, Railway Station Rd, Mathalangulam, Tiruvannamalai, Tamil Nadu 606601",
    region: "Tiruvannamalai",
    country: "India",
    lat: 12.2253,
    lng: 79.0747,
    type: "Post Office",
    phone: "+91 4175 222 333",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Rural Services", "Agricultural Banking", "Pilgrimage Mail"],
    description: "Main post office serving the temple town"
  },
  {
    id: 8,
    name: "Cuddalore H.O",
    address: "1, Bharathi Rd, Manjakuppam, Cuddalore, Tamil Nadu 607001",
    region: "Cuddalore",
    country: "India",
    lat: 11.7480,
    lng: 79.7714,
    type: "Post Office",
    phone: "+91 4142 233 444",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.1,
    specialties: ["Port Services", "Industrial Mail", "Coastal Banking"],
    description: "Head office serving coastal industrial area"
  },
  {
    id: 9,
    name: "Salem H.O",
    address: "Bus Stand, V Market Rd, opposite to Old, I Agraharam, Salem, Tamil Nadu 636001",
    region: "Salem",
    country: "India",
    lat: 11.6643,
    lng: 78.1460,
    type: "Post Office",
    phone: "+91 427 244 5555",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.3,
    specialties: ["Commercial Services", "Steel City Mail", "Business Banking"],
    description: "Main post office serving Salem steel city"
  },
  {
    id: 10,
    name: "Coimbatore H.O",
    address: "XXX7+W9G, Goods Shed Rd, near Head Post Office, Town Hall, Coimbatore, Tamil Nadu 641001",
    region: "Coimbatore",
    country: "India",
    lat: 11.0168,
    lng: 76.9558,
    type: "Post Office",
    phone: "+91 422 255 6666",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.4,
    specialties: ["Textile Services", "Industrial Mail", "Export Services"],
    description: "Head office serving textile capital of South India"
  },
  {
    id: 11,
    name: "Madurai H.O",
    address: "W4F7+M68, Chinna Kadai St, Meenakshi Bazaar, Area, Madurai Main, Poondhotam, Tamil Nadu 625001",
    region: "Madurai",
    country: "India",
    lat: 9.9252,
    lng: 78.1198,
    type: "Post Office",
    phone: "+91 452 266 7777",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.6,
    specialties: ["Temple Services", "Cultural Mail", "Heritage Banking"],
    description: "Historic post office serving temple city"
  },
  {
    id: 12,
    name: "Tiruchirappalli H.O",
    address: "RM2Q+GM5, Madurai Main Rd, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620001",
    region: "Tiruchirappalli",
    country: "India",
    lat: 10.7905,
    lng: 78.7047,
    type: "Post Office",
    phone: "+91 431 277 8888",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.3,
    specialties: ["Central Services", "Railway Mail", "Educational Services"],
    description: "Central post office serving Trichy region"
  },
  {
    id: 13,
    name: "Thanjavur H.O",
    address: "Q4HR+F8H, Graham Nagar, Shivaji Nagar, Thanjavur, Tamil Nadu 613001",
    region: "Thanjavur",
    country: "India",
    lat: 10.7870,
    lng: 79.1378,
    type: "Post Office",
    phone: "+91 4362 288 999",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.5,
    specialties: ["Cultural Services", "Art Mail", "Heritage Banking"],
    description: "Post office serving the cultural capital"
  },
  {
    id: 14,
    name: "Nagercoil H.O",
    address: "Nagercoil HO (Head-Office), Kanyakumari, Tamil Nadu, India (IN), Pin Code: 629001",
    region: "Kanyakumari",
    country: "India",
    lat: 8.1778,
    lng: 77.4341,
    type: "Post Office",
    phone: "+91 4652 299 000",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Southernmost Services", "Tourist Mail", "Coastal Banking"],
    description: "Head office serving India's southern tip"
  },
  {
    id: 15,
    name: "Pondicherry H.O",
    address: "Pondicherry HO (Head-Office), Pondicherry, Puducherry, India (IN), Pin Code: 605001",
    region: "Pondicherry",
    country: "India",
    lat: 11.9416,
    lng: 79.8083,
    type: "Post Office",
    phone: "+91 413 300 1111",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.7,
    specialties: ["French Heritage", "International Services", "Cultural Mail"],
    description: "Head office serving the French heritage city"
  },
  {
    id: 16,
    name: "Teynampet S.O",
    address: "Teynampet S.O, Chennai, Chennai, Tamil Nadu, 600018",
    region: "Chennai",
    country: "India",
    lat: 13.0418,
    lng: 80.2341,
    type: "Post Office",
    phone: "+91 44 2434 5678",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Urban Services", "Express Post", "Digital Services"],
    description: "Sub office serving Teynampet area"
  },
  {
    id: 17,
    name: "T.Nagar North S.O",
    address: "No 107, North Usman Road, T Nagar, Chennai - 600017 (Near Devar Kalyana Mandapam, Below Kodambakkam Flyover)",
    region: "Chennai",
    country: "India",
    lat: 13.0435,
    lng: 80.2341,
    type: "Post Office",
    phone: "+91 44 2434 9876",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.4,
    specialties: ["Shopping District", "Commercial Services", "Retail Banking"],
    description: "Sub office serving T.Nagar shopping district"
  },
  {
    id: 18,
    name: "Adyar S.O",
    address: "No.2, 5th St, Padmanabha Nagar, Adyar, Chennai, Tamil Nadu 600020",
    region: "Chennai",
    country: "India",
    lat: 13.0067,
    lng: 80.2206,
    type: "Post Office",
    phone: "+91 44 2441 2345",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.3,
    specialties: ["Residential Services", "Educational Mail", "IT Services"],
    description: "Sub office serving Adyar IT corridor"
  },
  {
    id: 19,
    name: "Rajapalayam H.O",
    address: "FH26+323, T.P. Mills Rd, Rajapalayam, Tamil Nadu 626117",
    region: "Virudhunagar",
    country: "India",
    lat: 9.4500,
    lng: 77.5500,
    type: "Post Office",
    phone: "+91 4563 234 567",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.1,
    specialties: ["Textile Services", "Mill Area", "Industrial Mail"],
    description: "Head office serving textile mill area"
  },
  {
    id: 20,
    name: "Karur H.O",
    address: "No.9, Jawahar Bazaar, Karur, Tamil Nadu 639001",
    region: "Karur",
    country: "India",
    lat: 10.9601,
    lng: 78.0766,
    type: "Post Office",
    phone: "+91 4324 245 678",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Textile Hub", "Handloom Services", "Export Mail"],
    description: "Head office serving textile hub"
  },
  {
    id: 21,
    name: "Dindigul H.O",
    address: "3, Scheme Rd, near Head Post Office, Mendonsa Colony, Dindigul, Tamil Nadu 624001",
    region: "Dindigul",
    country: "India",
    lat: 10.3673,
    lng: 77.9803,
    type: "Post Office",
    phone: "+91 451 256 789",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.3,
    specialties: ["Agricultural Services", "Leather Goods", "Traditional Crafts"],
    description: "Head office serving leather and agriculture center"
  },
  {
    id: 22,
    name: "Nagapattinam H.O",
    address: "QR6W+4G2, Tata Nagar, Nagapattinam, Tamil Nadu 611003",
    region: "Nagapattinam",
    country: "India",
    lat: 10.7658,
    lng: 79.8448,
    type: "Post Office",
    phone: "+91 4365 267 890",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.0,
    specialties: ["Coastal Services", "Port Mail", "Fishing Community"],
    description: "Head office serving coastal port area"
  },
  {
    id: 23,
    name: "Vellore H.O",
    address: "State Highway 9, Arni Rd, Vasanthapuram, Kosapet, Vellore, Tamil Nadu 632001",
    region: "Vellore",
    country: "India",
    lat: 12.9165,
    lng: 79.1325,
    type: "Post Office",
    phone: "+91 416 278 901",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.4,
    specialties: ["Leather Industry", "Educational Services", "Medical Services"],
    description: "Head office serving leather and medical hub"
  },
  {
    id: 24,
    name: "Erode H.O",
    address: "8PPG+3WX, Periyar Nagar, Erode, Tamil Nadu 638001",
    region: "Erode",
    country: "India",
    lat: 11.3410,
    lng: 77.7172,
    type: "Post Office",
    phone: "+91 424 289 012",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Textile Mills", "Handloom", "Agricultural Products"],
    description: "Head office serving textile and agriculture center"
  },
  {
    id: 25,
    name: "Tiruppur H.O",
    address: "485R+597, Uthukuli Road, Opp Railway Station, Kumaran Rd, Kannipiran Colony, Valipalayam, Tiruppur, Tamil Nadu 641601",
    region: "Tiruppur",
    country: "India",
    lat: 11.1085,
    lng: 77.3411,
    type: "Post Office",
    phone: "+91 421 290 123",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.5,
    specialties: ["Knitwear Capital", "Export Services", "Garment Industry"],
    description: "Head office serving knitwear capital of India"
  },
  {
    id: 26,
    name: "Arni H.O",
    address: "Arni H.O, 632301, Head Office (Delivery Office); Arni Fort SO, 632301",
    region: "Tiruvannamalai",
    country: "India",
    lat: 12.6667,
    lng: 79.2833,
    type: "Post Office",
    phone: "+91 4177 301 234",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.0,
    specialties: ["Rural Services", "Fort Area", "Heritage Mail"],
    description: "Head office serving historic Arni fort area"
  },
  {
    id: 27,
    name: "Vriddachalam H.O",
    address: "VRIDDACHALAM HEAD POST OFFICE, PIN - 606001",
    region: "Cuddalore",
    country: "India",
    lat: 11.5167,
    lng: 79.3167,
    type: "Post Office",
    phone: "+91 4142 312 345",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.1,
    specialties: ["Temple Town", "Religious Services", "Pilgrimage Mail"],
    description: "Head office serving temple town"
  },
  {
    id: 28,
    name: "Panruti S.O",
    address: "164, KUMBAKONAM ROAD, Panruti, Thorapadi, Tamil Nadu 607106",
    region: "Cuddalore",
    country: "India",
    lat: 11.7833,
    lng: 79.5500,
    type: "Post Office",
    phone: "+91 4142 323 456",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.0,
    specialties: ["Jackfruit Capital", "Agricultural Services", "Fruit Export"],
    description: "Sub office serving jackfruit growing region"
  },
  {
    id: 29,
    name: "Suramangalam H.O",
    address: "VRIDDACHALAM HEAD POST OFFICE, PIN - 606001",
    region: "Salem",
    country: "India",
    lat: 11.7167,
    lng: 78.1167,
    type: "Post Office",
    phone: "+91 427 334 567",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Industrial Area", "Steel Services", "Manufacturing Mail"],
    description: "Head office serving industrial area"
  },
  {
    id: 30,
    name: "Palayankottai H.O",
    address: "English Church St, opp. Police Station, Palayamkottai, Tirunelveli, Tamil Nadu 627002",
    region: "Thirunelveli",
    country: "India",
    lat: 8.7139,
    lng: 77.7567,
    type: "Post Office",
    phone: "+91 462 345 678",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.3,
    specialties: ["Educational Hub", "College Services", "Academic Mail"],
    description: "Head office serving educational district"
  },
  {
    id: 31,
    name: "Bodinayakanur H.O",
    address: "21, Periyandavarpuram St, Near Head Post office, Periyandavarpuram, Ammankulam, Bodinayakanur, Tamil Nadu 625513",
    region: "Theni",
    country: "India",
    lat: 10.0167,
    lng: 77.3500,
    type: "Post Office",
    phone: "+91 4546 356 789",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.1,
    specialties: ["Hill Station", "Cardamom Trade", "Spice Services"],
    description: "Head office serving cardamom hills"
  },
  {
    id: 32,
    name: "Lalgudi H.O",
    address: "Lalgudi HO (Head-Office), Tiruchirappalli, Tamil Nadu, India (IN), Pin Code: 621601",
    region: "Trichy",
    country: "India",
    lat: 10.8667,
    lng: 78.8167,
    type: "Post Office",
    phone: "+91 431 367 890",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.0,
    specialties: ["Agricultural Hub", "Rice Mills", "Grain Services"],
    description: "Head office serving agricultural region"
  },
  {
    id: 33,
    name: "Mayiladuthurai H.O",
    address: "Post Office Mayiladuthurai HO (Head-Office), Nagapattinam, Tamil Nadu, India (IN), Pin Code: 609001",
    region: "Mayiladuthurai",
    country: "India",
    lat: 11.1000,
    lng: 79.6500,
    type: "Post Office",
    phone: "+91 4364 378 901",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Temple Services", "Cultural Heritage", "Religious Mail"],
    description: "Head office serving temple town"
  },
  {
    id: 34,
    name: "R.S Puram H.O",
    address: "205 & 206, E TV Swamy Rd, Opposite Kalai Rangam, R.S. Puram, Coimbatore, Tamil Nadu 641002",
    region: "Coimbatore",
    country: "India",
    lat: 11.0183,
    lng: 76.9725,
    type: "Post Office",
    phone: "+91 422 389 012",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.4,
    specialties: ["Residential Area", "Cultural Services", "Premium Mail"],
    description: "Head office serving upscale residential area"
  },
  {
    id: 35,
    name: "Sirkali H.O",
    address: "6PQM+6V3, SH 210, Thenpathi, Sirkali, Tamil Nadu 609110",
    region: "Mayiladuthurai",
    country: "India",
    lat: 11.2333,
    lng: 79.7333,
    type: "Post Office",
    phone: "+91 4364 390 123",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.1,
    specialties: ["Ancient Town", "Heritage Services", "Traditional Crafts"],
    description: "Head office serving ancient heritage town"
  },
  {
    id: 36,
    name: "Ariyalur H.O",
    address: "43PC+JCM, SH27, Meala Agraharam, MIN Nagar, Ariyalur, Tamil Nadu 621704",
    region: "Ariyalur",
    country: "India",
    lat: 11.1333,
    lng: 79.0833,
    type: "Post Office",
    phone: "+91 4329 401 234",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.0,
    specialties: ["Cement Industry", "Mining Services", "Industrial Mail"],
    description: "Head office serving cement and mining hub"
  },
  {
    id: 37,
    name: "Tallakulam H.O",
    address: "W4JJ+JVM, NH 785, Madurai, Tamil Nadu 625002",
    region: "Madurai",
    country: "India",
    lat: 9.9317,
    lng: 78.1317,
    type: "Post Office",
    phone: "+91 452 412 345",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.3,
    specialties: ["Suburban Services", "Residential Mail", "Local Commerce"],
    description: "Head office serving Madurai suburbs"
  },
  {
    id: 38,
    name: "Ashok Nagar S.O",
    address: "Jawaharlal Nehru Road, Sector 10, Oppo. To Udayam Theatre, Chennai, Tamil Nadu 600083",
    region: "Chennai",
    country: "India",
    lat: 13.0358,
    lng: 80.2064,
    type: "Post Office",
    phone: "+91 44 2423 456",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Residential Complex", "Modern Services", "Digital Mail"],
    description: "Sub office serving modern residential area"
  },
  {
    id: 39,
    name: "Perambalur H.O",
    address: "Post office street, Super Nagar, Perambalur, Tamil Nadu 621212",
    region: "Perambalur",
    country: "India",
    lat: 11.2333,
    lng: 78.8833,
    type: "Post Office",
    phone: "+91 4328 434 567",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.1,
    specialties: ["Agricultural Services", "Rural Banking", "Farmer Support"],
    description: "Head office serving agricultural district"
  },
  {
    id: 40,
    name: "Mannargudi H.O",
    address: "Mannargudi HO (Head-Office), Tiruvarur, Tamil Nadu, India (IN), Pin Code: 614001",
    region: "Thiruvarur",
    country: "India",
    lat: 10.6667,
    lng: 79.4500,
    type: "Post Office",
    phone: "+91 4367 445 678",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Temple Town", "Religious Services", "Cultural Mail"],
    description: "Head office serving temple heritage town"
  },
  {
    id: 41,
    name: "Kumbakonam H.O",
    address: "X94J+X7M, Head Post Office Rd, Gandhi Adigal Salai, Valayapettai Agraharam, Kumbakonam, Tamil Nadu 612001",
    region: "Thanjavur",
    country: "India",
    lat: 10.9597,
    lng: 79.3881,
    type: "Post Office",
    phone: "+91 435 456 789",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.5,
    specialties: ["Temple City", "Brass Works", "Traditional Crafts"],
    description: "Head office serving temple and brass craft city"
  },
  {
    id: 42,
    name: "Papanasam H.O",
    address: "14, Papanasam-Saliamangalam Rd, Papanasam, Tamil Nadu 614205",
    region: "Thanjavur",
    country: "India",
    lat: 10.9167,
    lng: 79.2833,
    type: "Post Office",
    phone: "+91 4362 467 890",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.1,
    specialties: ["Pilgrimage Services", "Religious Tourism", "Heritage Mail"],
    description: "Head office serving pilgrimage center"
  },
  {
    id: 43,
    name: "Pattukottai H.O",
    address: "C8H8+XFR, Kulaal Street, Mainckam Colony, Pattukkottai, Tamil Nadu 614601",
    region: "Thanjavur",
    country: "India",
    lat: 10.4297,
    lng: 79.3167,
    type: "Post Office",
    phone: "+91 4373 478 901",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.0,
    specialties: ["Coastal Services", "Salt Production", "Marine Products"],
    description: "Head office serving coastal salt production area"
  },
  {
    id: 44,
    name: "Thuckalay H.O",
    address: "Thuckalay HO (Head-Office), Kanyakumari, Tamil Nadu, India (IN), Pin Code: 629175",
    region: "Kanyakumari",
    country: "India",
    lat: 8.3167,
    lng: 77.3167,
    type: "Post Office",
    phone: "+91 4651 489 012",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Border Services", "Rubber Plantation", "Spice Trade"],
    description: "Head office serving rubber and spice region"
  },
  {
    id: 45,
    name: "Udagamandalam H.O",
    address: "Udagamandalam HO (Head-Office), Nilgiris, Tamil Nadu, India (IN), Pin Code: 643001",
    region: "Nilgiris",
    country: "India",
    lat: 11.4064,
    lng: 76.6932,
    type: "Post Office",
    phone: "+91 423 490 123",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.6,
    specialties: ["Hill Station", "Tea Gardens", "Tourism Services"],
    description: "Head office serving queen of hill stations - Ooty"
  },
  {
    id: 46,
    name: "Chengalpattu H.O",
    address: "Chengalpattu HO (Head-Office), Kanchipuram, Tamil Nadu, India (IN), Pin Code: 603001",
    region: "Chengalpattu",
    country: "India",
    lat: 12.6922,
    lng: 79.9753,
    type: "Post Office",
    phone: "+91 4114 501 234",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.3,
    specialties: ["IT Corridor", "Industrial Services", "Modern Banking"],
    description: "Head office serving IT and industrial corridor"
  },
  {
    id: 47,
    name: "Tambaram H.O",
    address: "Tambaram HO (Head-Office), Kanchipuram, Tamil Nadu, India (IN), Pin Code: 600045",
    region: "Chengalpattu",
    country: "India",
    lat: 12.9249,
    lng: 80.1000,
    type: "Post Office",
    phone: "+91 44 2512 345",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.4,
    specialties: ["Suburban Rail", "Residential Services", "Commuter Mail"],
    description: "Head office serving major suburban railway hub"
  },
  {
    id: 48,
    name: "Karaikudi H.O",
    address: "Karaikudi HO (Head-Office), Sivaganga, Tamil Nadu, India (IN), Pin Code: 630001",
    region: "Sivaganga",
    country: "India",
    lat: 10.0667,
    lng: 78.7667,
    type: "Post Office",
    phone: "+91 4565 523 456",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.5,
    specialties: ["Chettinad Heritage", "Traditional Architecture", "Cultural Services"],
    description: "Head office serving Chettinad heritage region"
  },
  {
    id: 49,
    name: "Tenkasi H.O",
    address: "Tenkasi HO (Head-Office), Tirunelveli, Tamil Nadu, India (IN), Pin Code: 627811",
    region: "Tenkasi",
    country: "India",
    lat: 8.9597,
    lng: 77.3153,
    type: "Post Office",
    phone: "+91 4633 534 567",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Temple Services", "Handloom Weaving", "Traditional Crafts"],
    description: "Head office serving temple and handloom center"
  },
  {
    id: 50,
    name: "Ramanathapuram H.O",
    address: "Ramanathapuram HO (Head-Office), Ramanathapuram, Tamil Nadu, India (IN), Pin Code: 623501",
    region: "Ramanathapuram",
    country: "India",
    lat: 9.3667,
    lng: 78.8333,
    type: "Post Office",
    phone: "+91 4567 545 678",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.1,
    specialties: ["Coastal Services", "Island Connectivity", "Marine Products"],
    description: "Head office serving coastal and island region"
  },
  {
    id: 51,
    name: "Ranipet H.O",
    address: "Head Post Office, Ranipet - 632401. Pincode: 632401",
    region: "Ranipet",
    country: "India",
    lat: 12.9333,
    lng: 79.3333,
    type: "Post Office",
    phone: "+91 4172 556 789",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.0,
    specialties: ["Leather Industry", "Tanning Services", "Export Mail"],
    description: "Head office serving leather industrial hub"
  },
  {
    id: 52,
    name: "Kanchipuram H.O",
    address: "RPJ5+WX8, Railway Rd, Ennaikaran, Kanchipuram, Tamil Nadu 631501",
    region: "Kanchipuram",
    country: "India",
    lat: 12.8342,
    lng: 79.7036,
    type: "Post Office",
    phone: "+91 4427 567 890",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.7,
    specialties: ["Silk Sarees", "Temple City", "Handloom Weaving"],
    description: "Head office serving silk saree weaving capital"
  },
  {
    id: 53,
    name: "Pudukkottai H.O",
    address: "9RM9+C97, Melaraja Vidi, Brindavan, Pudukkottai, Tamil Nadu 622001",
    region: "Pudukottai",
    country: "India",
    lat: 10.3833,
    lng: 78.8167,
    type: "Post Office",
    phone: "+91 4322 578 901",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.2,
    specialties: ["Princely State", "Heritage Services", "Cultural Mail"],
    description: "Head office serving former princely state"
  },
  {
    id: 54,
    name: "Dharmapuri H.O",
    address: "45M6+97X, Dharmapuri, Tamil Nadu 636701",
    region: "Dharmapuri",
    country: "India",
    lat: 12.1333,
    lng: 78.1667,
    type: "Post Office",
    phone: "+91 4342 589 012",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.1,
    specialties: ["Mango Cultivation", "Agricultural Services", "Horticulture"],
    description: "Head office serving mango growing region"
  },
  {
    id: 55,
    name: "Namakkal H.O",
    address: "658C+624, Tiruchirapalli - Salem Main Rd, Thillaipuram, Namakkal, Tamil Nadu 637001",
    region: "Namakkal",
    country: "India",
    lat: 11.2167,
    lng: 78.1667,
    type: "Post Office",
    phone: "+91 4286 590 123",
    hours: "9:00 AM - 5:00 PM",
    rating: 4.3,
    specialties: ["Poultry Hub", "Egg Production", "Agricultural Services"],
    description: "Head office serving poultry capital of India"
  }
];

const CentreLocator = () => {
  const [selectedCenter, setSelectedCenter] = useState<typeof storeLocations[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapSrc, setMapSrc] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5782678.336971016!2d75.28412705388668!3d15.420409585221002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475cc463361f0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1766104573335!5m2!1sen!2sin");

  const filteredCenters = storeLocations.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         center.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || center.region === typeFilter;
    return matchesSearch && matchesType;
  });

  const centerTypes = [...new Set(storeLocations.map(center => center.region))];

  // Initialize Map (Demo version with interactive India map)
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleCenterClick = (center: typeof storeLocations[0]) => {
    setSelectedCenter(center);
    // Generate Google Maps embed URL for specific location with zoom
    const locationMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d${center.lng}!3d${center.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM${center.lat.toFixed(6)}%2C${center.lng.toFixed(6)}!5e0!3m2!1sen!2sin!4v1766104573335!5m2!1sen!2sin&q=${encodeURIComponent(center.name + ', ' + center.address)}`;
    setMapSrc(locationMapSrc);
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-heritage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="font-sanskrit text-3xl font-bold text-white">
              Store Locator
            </h1>
            <p className="text-white/90 mt-2">Find Indicraft partner stores and service centers across Tamil Nadu</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardHeader>
                <CardTitle>Search Stores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    {centerTypes.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Centers List */}
            <Card>
              <CardHeader>
                <CardTitle>Partner Stores ({filteredCenters.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredCenters.map((center) => (
                    <div
                      key={center.id}
                      onClick={() => handleCenterClick(center)}
                      className={`p-3 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        selectedCenter?.id === center.id ? 'border-primary bg-primary/5' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{center.name}</h3>
                          <p className="text-xs text-muted-foreground mb-2">{center.address}</p>
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {center.region}
                            </Badge>
                            <div className="flex items-center text-xs">
                              <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                              {center.rating}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {center.specialties.slice(0, 2).map((specialty, index) => (
                              <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map */}
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-96 rounded-lg relative overflow-hidden shadow-lg">
                  {!mapLoaded ? (
                    <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                        <p className="text-muted-foreground">Loading Google Maps...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      {/* Google Maps Embed */}
                      <iframe
                        src={mapSrc}
                        className="w-full h-full rounded-lg"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Tamil Nadu Store Locations - Google Maps"
                      ></iframe>
                      
                      {/* Map Controls */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <h4 className="text-xs font-semibold mb-2">Quick Actions</h4>
                        <div className="space-y-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs w-full"
                            onClick={() => {
                              setMapSrc("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5782678.336971016!2d75.28412705388668!3d15.420409585221002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475cc463361f0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1766104573335!5m2!1sen!2sin");
                              setSelectedCenter(null);
                            }}
                          >
                            Reset View
                          </Button>
                          {selectedCenter && (
                            <Button
                              size="sm"
                              variant="default"
                              className="text-xs w-full bg-gradient-heritage"
                              onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${selectedCenter.lat},${selectedCenter.lng}`, '_blank')}
                            >
                              Open in Maps
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      {/* Map Info */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <p className="text-xs font-semibold">{filteredCenters.length} Stores</p>
                        <p className="text-xs text-muted-foreground">Tamil Nadu Network</p>
                        {selectedCenter ? (
                          <p className="text-xs text-primary font-medium mt-1">
                            📍 {selectedCenter.region}
                          </p>
                        ) : (
                          <p className="text-xs text-muted-foreground">Click store to zoom</p>
                        )}
                      </div>
                      
                      {/* Store Legend */}
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-xs">
                        <h4 className="text-xs font-semibold mb-2">Store Regions ({centerTypes.length})</h4>
                        <div className="grid grid-cols-2 gap-1 max-h-20 overflow-y-auto">
                          {centerTypes.map((region) => (
                            <div key={region} className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                              <span className="text-xs truncate">{region}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Selected Center Details */}
            {selectedCenter && (
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-primary" />
                        {selectedCenter.name}
                      </CardTitle>
                      <p className="text-muted-foreground mt-1">{selectedCenter.address}</p>
                    </div>
                    <Badge>{selectedCenter.region}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{selectedCenter.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{selectedCenter.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{selectedCenter.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm">{selectedCenter.rating} Rating</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Navigation className="w-4 h-4 text-muted-foreground" />
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${selectedCenter.lat},${selectedCenter.lng}`, '_blank')}
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCenter.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentreLocator;