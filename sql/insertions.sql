
INSERT INTO Country values ("CAN", "56.1304° N, 106.3468° W", "Canada", "CAD");
INSERT INTO Country values("MEX", "23.6345° N, 102.5528° W", "Mexico", "PESO");
INSERT INTO Country values("ZBE", "19.0154° S, 29.1549° E", "Zimbabwe", "ZMB");
INSERT INTO Country values("AUS", "25.2744° S, 133.7751° E", "Australia", "KANG");
INSERT INTO Country values("TWN", "23.6978° N, 120.9605° E", "Taiwan", "YEN");
INSERT INTO Country values("USA", "37.0902° N, 95.7129° W", "United States", "USD");

INSERT INTO Sponsorships values(1, "Adidas");
INSERT INTO Sponsorships values(2, "Jordan");
INSERT INTO Sponsorships values(3, "Yeezy");
INSERT INTO Sponsorships values(4, "Balenciaga");
INSERT INTO Sponsorships values(5, "Nike");

INSERT INTO City values(1, "GS", "San Francisco","37.7749° N, 122.4194° W", 1005000000, 600000, "USA");
INSERT INTO City values(2, "LA", "Los Angeles", "34.0522° N, 118.2437° W", 200000000, 900000, "USA");
INSERT INTO City values(3, "SAC", "Sacramento", "38.5816° N, 121.4944° W", 500000, 300000, "USA");
INSERT INTO City values(4, "BOS", "Boston", "42.3656° N, 71.0096° W", 23423458, 400000, "USA");
INSERT INTO City values(5, "TOR", "Toronto", "43.6777° N, 79.6248° W", 300000000, 10000000, "CAN");
INSERT INTO City values(6, "POR", "Portland","45.5051° N, 122.6750° W", 1005000000, 600000, "USA");
INSERT INTO City values(7, "OKC", "Oklahoma City", "35.4676° N, 97.5164° W", 200000000, 900000, "USA");
INSERT INTO City values(8, "MIA", "Miami", "25.7617° N, 80.1918° W", 500000, 300000, "USA");
INSERT INTO City values(9, "BKN", "Brooklyn", "40.6782° N, 73.9442° W", 23423458, 400000, "USA");
INSERT INTO City values(10, "NY", "New York", "40.7128° N, 74.0060° W", 300000000, 10000000, "USA");
INSERT INTO City values(12, "MIN", "Minnesota", "46.7296° N, 94.6859° W", 200000000, 900000, "USA");
INSERT INTO City values(13, "CHI", "Chicago", "41.8781° N, 87.6298° W", 500000, 300000, "USA");
INSERT INTO City values(14, "DET", "Detriot", "42.3314° N, 83.0458° W", 23423458, 400000, "USA");
INSERT INTO City values(15, "PHX", "Phoenix", "33.4484° N, 112.0740° W", 300000000, 10000000, "USA");
INSERT INTO City values(16, "DAL", "Dallas","32.7767° N, 96.7970° W", 1005000000, 600000, "USA");
INSERT INTO City values(17, "SA", "San Antonio", "29.4241° N, 98.4936° W", 200000000, 900000, "USA");
INSERT INTO City values(18, "HOU", "Houston", "29.7604° N, 95.3698° W", 500000, 300000, "USA");
INSERT INTO City values(19, "ORL", "Orlando", "28.5383° N, 81.3792° W", 23423458, 400000, "USA");
INSERT INTO City values(20, "ATL", "Atlanta", "33.7490° N, 84.3880° W", 300000000, 10000000, "USA");
INSERT INTO City values(21, "CHA", "Charlotte","35.2271° N, 80.8431° W", 1005000000, 600000, "USA");
INSERT INTO City values(22, "NO", "New Orleans", "29.9511° N, 90.0715° W", 200000000, 900000, "USA");
INSERT INTO City values(29, "MEM", "Memphis", "35.1495° N, 90.0490° W", 500000, 300000, "USA");
INSERT INTO City values(24, "UTAH", "Utah", "39.3210° N, 111.0937° W", 23423458, 400000, "USA");
INSERT INTO City values(25, "DEN", "Denver", "39.7392° N, 104.9903° W", 300000000, 10000000, "USA");
INSERT INTO City values(26, "PHI", "Philidelphia","39.9526° N, 75.1652° W", 1005000000, 600000, "USA");
INSERT INTO City values(27, "WASH", "Washington, DC", "38.9072° N, 77.0369° W", 200000000, 900000, "USA");
INSERT INTO City values(30, "IND", "Indiana", "40.2672° N, 86.1349° W", 300000000, 10000000, "USA");
INSERT INTO City values(31, "CLE", "Cleveland", "41.4993° N, 81.6944° W", 300000000, 10000000, "USA");
INSERT INTO City values(28, "MIL", "Milwaukee", "41.4993° N, 81.6944° W", 300000000, 10000000, "USA");

INSERT INTO HasMascot values("Laquan", "Wolf");
INSERT INTO HasMascot values("Mike", "Hunter");
INSERT INTO HasMascot values("Wen", "Spider");
INSERT INTO HasMascot values("Michael", "Bat");
INSERT INTO HasMascot values("Asad", "Lion");

INSERT INTO TeamPlaysIn values(1, 1, "Warriors", "gsw.png");
INSERT INTO TeamPlaysIn values(2, 2, "Lakers", "lal.png");
INSERT INTO TeamPlaysIn values(3, 3, "Kings", "sac.png");
INSERT INTO TeamPlaysIn values(4, 4, "Celtics", "bos.png");
INSERT INTO TeamPlaysIn values(5, 5, "Raptors", "tor.png");
INSERT INTO TeamPlaysIn values(6, 6, "Trail Blazers", "por.png");
INSERT INTO TeamPlaysIn values(7, 2, "Clippers", "lac.png");
INSERT INTO TeamPlaysIn values(8, 7, "Thunder", "okc.png");
INSERT INTO TeamPlaysIn values(9, 8, "Heat", "mia.png");
INSERT INTO TeamPlaysIn values(10, 9, "Nets", "bkn.png");
INSERT INTO TeamPlaysIn values(11, 10, "Knicks", "nyk.png");
INSERT INTO TeamPlaysIn values(12, 12, "Timberwolves", "min.png");
INSERT INTO TeamPlaysIn values(13, 13, "Bulls", "chi.png");
INSERT INTO TeamPlaysIn values(14, 14, "Pistons", "det.png");
INSERT INTO TeamPlaysIn values(15, 15, "Phoenix", "phx.png");
INSERT INTO TeamPlaysIn values(16, 16, "Mavericks", "dal.png");
INSERT INTO TeamPlaysIn values(17, 17, "Spurs", "sas.png");
INSERT INTO TeamPlaysIn values(18, 18, "Rockets", "hou.png");
INSERT INTO TeamPlaysIn values(19, 19, "Magic", "orl.png");
INSERT INTO TeamPlaysIn values(20, 20, "Hawks", "atl.png");
INSERT INTO TeamPlaysIn values(21, 21, "Hornets", "cha.png");
INSERT INTO TeamPlaysIn values(22, 22, "Pelicans", "nop.png");
INSERT INTO TeamPlaysIn values(24, 24, "Jazz", "uth.png");
INSERT INTO TeamPlaysIn values(25, 25, "Nuggets", "den.png");
INSERT INTO TeamPlaysIn values(26, 26, "Sixers", "phi.png");
INSERT INTO TeamPlaysIn values(27, 27, "Wizards", "was.png");
INSERT INTO TeamPlaysIn values(29, 29, "Grizzlies", "mem.png");
INSERT INTO TeamPlaysIn values(28, 28, "Bucks", "mil.png");
INSERT INTO TeamPlaysIn values(30, 30, "Pacers", "ind.png");
INSERT INTO TeamPlaysIn values(31, 31, "Cavaliers", "cle.png");

INSERT INTO Funds values(1, 1, 1);
INSERT INTO Funds values(2, 2, 2);
INSERT INTO Funds values(3, 3, 3);
INSERT INTO Funds values(4, 4, 4);
INSERT INTO Funds values(5, 5, 5);

INSERT INTO Stadium values(1, "Rogers' Arena");
INSERT INTO Stadium values(2, "GMC Center");
INSERT INTO Stadium values(3, "Old Tafford");
INSERT INTO Stadium values(4, "Staples Centre");
INSERT INTO Stadium values(5, "IKB");
INSERT INTO Stadium values(6, "Koerner Library");
INSERT INTO Stadium values(7, "Air Canada Centre");
INSERT INTO Stadium values(8, "Chase Centre");
INSERT INTO Stadium values(9, "Madison Square Garden");
INSERT INTO Stadium values(10, "TD Garden");
INSERT INTO Stadium values(11, "Gilette Stadium");
INSERT INTO Stadium values(12, "The Nest");
INSERT INTO Stadium values(13, "Life Building");
INSERT INTO Stadium values(14, "ICICS Building");
INSERT INTO Stadium values(15, "Ponderosa Commons");
INSERT INTO Stadium values(16, "Walter Gage Res");
INSERT INTO Stadium values(17, "Orchard Commons");
INSERT INTO Stadium values(18, "Brock Commons");
INSERT INTO Stadium values(19, "Marine Drive");
INSERT INTO Stadium values(20, "Totem Park");
INSERT INTO Stadium values(21, "Place Vanier");
INSERT INTO Stadium values(22, "Exchange");
INSERT INTO Stadium values(24, "Chemistry Building");
INSERT INTO Stadium values(25, "Birdcoop");
INSERT INTO Stadium values(26, "ARC");
INSERT INTO Stadium values(27, "Science World");
INSERT INTO Stadium values(28, "Stanley Park");
INSERT INTO Stadium values(29, "Lions Gate");
INSERT INTO Stadium values(30, "Langley");
INSERT INTO Stadium values(31, "Eiffel Tower");

INSERT INTO Game values(1, 1, "Lakers", "Lakers");
INSERT INTO Game values(2, 1, "Raptors", "Raptors");
INSERT INTO Game values(3, 1, "Bucks", "Bucks");
INSERT INTO Game values(4, 1, "Clippers", "Clippers");
INSERT INTO Game values(5, 1, "Jazz", "Jazz");
INSERT INTO Game values(6, 1, "Lakers", "Warriors");
INSERT INTO Game values(7, 7, "Raptors", "Clippers");
INSERT INTO Game values(8, 24, "Bucks", "Jazz");
INSERT INTO Game values(9, 3, "Clippers", "Kings");
INSERT INTO Game values(10, 29, "Jazz", "Grizzlies");
INSERT INTO Game values(11, 20, "Lakers", "Hawks");
INSERT INTO Game values(12, 10, "Raptors", "Raptors");
INSERT INTO Game values(13, 12, "Bucks", "Timberwolves");
INSERT INTO Game values(14, 13, "Clippers", "Clippers");
INSERT INTO Game values(15, 1, "Trail Blazers", "Trail Blazers");

INSERT INTO PlayerPlaysFor values(1, 1, 30, "Stephen Curry", "G", 3.5);
INSERT INTO PlayerPlaysFor values(2, 2, 13, "Jeremy Lin", "G", -1);
INSERT INTO PlayerPlaysFor values(3, 3, 30, "Lebron James", "F", 4);
INSERT INTO PlayerPlaysFor values(4, 4, 8, "Buddy Hield", "G", 3.5);
INSERT INTO PlayerPlaysFor values(5, 5, 4, "Deaaron Fox", "G", 3.5);
INSERT INTO PlayerPlaysFor values(6, 6, 6, "Kawhi Leonard", "F", 4);
INSERT INTO PlayerPlaysFor values(7, 7, 3, "Chris Paul", "G", 2);
INSERT INTO PlayerPlaysFor values(8, 8, 14, "Jimmy Butler", "F", 3);
INSERT INTO PlayerPlaysFor values(9, 9, 35, "Kevin Durant", "F", 4);
INSERT INTO PlayerPlaysFor values(10, 10, 23, "RJ Barrett", "F", 1);
INSERT INTO PlayerPlaysFor values(11, 1, 30, "Klay Thompson", "G", 3.5);
INSERT INTO PlayerPlaysFor values(12, 2, 23, "Anthony Davis", "F", 4);
INSERT INTO PlayerPlaysFor values(13, 3, 23, "Draymond Green", "F", 2);
INSERT INTO PlayerPlaysFor values(14, 4, 8, "Marcus Smart", "F", 1.5);
INSERT INTO PlayerPlaysFor values(15, 5, 4, "Fred VanVleet", "G", 1);
INSERT INTO PlayerPlaysFor values(16, 6, 13, "Paul George", "F", 3);
INSERT INTO PlayerPlaysFor values(17, 7, 9, "Steven Adams", "C", 2);
INSERT INTO PlayerPlaysFor values(18, 8, 14, "Dion Waiters", "G", -2);
INSERT INTO PlayerPlaysFor values(19, 9, 1, "Kyrie Irving", "G", 3);
INSERT INTO PlayerPlaysFor values(20, 10, 0, "Zion Williamson", "F", 4);

INSERT INTO TeamPlaysGame values(1, 2);
INSERT INTO TeamPlaysGame values(2, 3);
INSERT INTO TeamPlaysGame values(3, 6);
INSERT INTO TeamPlaysGame values(4, 5);
INSERT INTO TeamPlaysGame values(5, 1);

INSERT INTO SeasonOf values(2012, 1, "First");
INSERT INTO SeasonOf values(2013, 2, "Third");
INSERT INTO SeasonOf values(2014, 3, "Second");
INSERT INTO SeasonOf values(2015, 4, "Tenth");
INSERT INTO SeasonOf values(2016, 5, "Seventh");

INSERT INTO coach values(1, 'Gregg Popovich', 3, NULL, 1);
INSERT INTO coach values(2, 'Doc Rivers', 5, NULL, 2);
INSERT INTO coach values(3, 'Steve Kerr', 12, NULL, 3);
INSERT INTO coach values(4, 'Rick Carlisle', 1, NULL, 5);
INSERT INTO coach values(5, 'Frank Vogel', 7, NULL, 9);