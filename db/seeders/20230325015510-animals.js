"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("animals", [
      {
        name: "Lion",
        locationId: 11,
        lifespan: "Up to 16 years for lionesses. Up to 12 years for lions.",
        diet: "Large animals like zebra and wildebeest.",
        habitat: "From open plains to thick brush and dry thorn forests.",
        range: "Southern fringe of the Sahara to northen South Africa.",
        description: JSON.stringify([
          {
            title: "Working as a pride",
            content:
              "Lions live in social groups known as prides, made up of one or more mature males, several closely-related females and their young. Males roar and spray urine to advertise their territory to rivals. Females work in teams to take down prey, encircling the prey and blocking escape routes. The lionesses do most of the hunting but the dominant male gets the lion's share. Only after he's had his fill do the females have their turn. The young can only pick at the remains.",
          },
          {
            title: "Infanticide for a reason",
            content:
              "Lions are running on a tight schedule when it comes to passing on their genes to the next generation. Females space out their births every two years but prides also typically change leadership every two years. Given the short timeframe, lions taking over a new pride would routinely kill all cubs so that females can come on heat quickly to breed. Some females may die defending their young but those that survive will be ready to mate with the new pride leaders in 2-3 weeks' time. This is Nature's way of `quality control' to ensure that only strong individuals get to pass on their genes to maintain the health of the species.",
          },
          {
            title: "The mane concern",
            content:
              "The only cat to sport one, the mane is believed to protect the lion's throat from the bites of other males during territorial fights. Females prefer males with prominent dark manes, which are more likely to be stronger, more experienced males that would stay on with the pride and protect the females and their cubs for longer. Studies have confirmed that a heavy-maned lion signals health and strength to rival males, prompting them to think twice before challenging him.",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Hunting The King",
            description:
              "To prove their hunting prowess, Maasai warriors slew lions and cut off their mane and tail. These are then passed to their womenfolk for beading. The mane was worn during special occasions and the tail kept in the warrior's camp. This ancient practice and all lion hunting are now banned in East Africa.",
          },
        ]),
      },
      {
        name: "African Painted Dog",
        locationId: 11,
        lifespan: "Up to 11 years.",
        diet: "Antelope, wildebeest, rodents and birds.",
        habitat: "Grasslands, savannahs and open woodlands.",
        range: "Largest populations remain in Southeeastern Africa.",
        description: JSON.stringify([
          {
            title: "Body 'Paintings'",
            content:
              "Named for their colourful coat, the African painted dogs sport mottled patches of red, black, brown, white, and yellow fur all over their bodies. Each dog has its own unique 'painted' pattern.",
          },
          {
            title: "Highly Successful Hunters",
            content:
              "African painted dogs hunt in cooperative packs of 6-20 animals. Their preferred prey are usually about twice their weight, like the impala.. Packs will also take on much larger prey like wildebeests, particularly ill or injured ones. They can keep up a hunt over a distance of 5km at a steady pace of 48km/hr, till their prey drop dead from exhaustion. With such incredible stamina, it's no wonder they have the highest kill rate among carnivores.",
          },
          {
            title: "Pack Behaviour",
            content:
              "Pack members that take part in a hunt eat together before returning to their den to regurgitate food for the young, old or sick. These dogs are very social, often communicating through touch, actions and calls. They use their large ears to listen out for calls of their pack members. Each pack is dominated by a monogamous breeding pair. The female gives birth to a litter of 2-20 pups, which are later cared for by the whole pack.",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Going To The Dogs",
            description:
              "Once widely distributed across Africa, with packs of 100 not uncommon, these dogs are now threatened by human encroachment on their habitat. Besides persecution by farmers who fear for their livestock, these dogs are also susceptible to infectious diseases transmitted by domestic animals.",
          },
        ]),
      },
      {
        name: "African Penguin",
        locationId: 26,
        lifespan: "15 to 20 years in the wild. Up to 40 years in captivity.",
        diet: "Sardines, anchovies,  gobies and herring.",
        habitat: "Sea cliffs, shorelines, beaches, rocky offshore islands.",
        range: "Coasts and islands of southern Africa.",
        description: JSON.stringify([
          {
            title: "Distinguishing Factors",
            content:
              "Like our fingerprints, each penguin's feather pattern is unique. The flecks across their white chests are a way to distinguish one penguin from another. Each individual also has its own distinct calls. There are three different types of calls: a bray to attract a mate; the yell to defend their territory; and the haw, used by mates to locate each other. You can tell if a penguin is angry by its body language too - chest puffed, wings back, beak forward and head bobbing.",
          },
          {
            title: "Adapted to the weather",
            content:
              "A suit of dense, waterproof feathers keeps them dry and warm when they dive in the cold waters off the African coast. Look closely and you will see the penguins have a small pink gland above each eye. This feature helps them to cope with soaring temperatures in the day, the glands take on a pinker appearance as the weather warms up. When a penguin gets hot, more blood is sent to these glands, where it is cooled by the surrounding air, thus keeping the bird cool.",
          },
        ]),
        iucnStatus: "Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Without A Roof Over Their Heads",
            description:
              "These penguins burrow in guano (sea birds' droppings) but guano collection for use as fertiliser has taken the roof off their nests. Left at the mercy of the weather, heat stress and rainstorms force some birds to abandon their nests. Their eggs and chicks become open targets for gulls and wild cats",
          },
          {
            title: "Oil Spill",
            description:
              "In 2000, an oil spill affected 21,500 penguins. We sent two keepers and a vet to aid in the rescue mission. About 500 birds had to be cleaned a day and all oil and detergent removed before their release. Over 90% of the oiled birds were saved, when usually only 50% of birds affected in a spill survive.",
          },
          {
            title: "Plummeting populations",
            description:
              "Besides oil spills and overfishing, the penguins also have to contend with predation from fur seals and sharks. Despite efforts to protect them, their population continues to plummet. In 2000, the IUCN reclassified them from threatened to vulnerable and again in 2010, from vulnerable to endangered.",
          },
        ]),
      },
      {
        name: "Aldabra Giant Tortoise",
        locationId: 7,
        lifespan: "More than 100 years.",
        diet: "Vegetation.",
        habitat: "Grassy areas.",
        range: "Aldabra Atoll, Indian Ocean.",
        description: JSON.stringify([
          {
            title: "On the Aldabra",
            content:
              "This species is found naturally on three of the islets of the Aldabra Atoll, a small group of coral islands. Over 90% of the population is found on the largest islet of Grande-Terre and the tortoises here are highly sociable compared to those on the other islets. Water scarcity and inadequate food on Grande-Terre have inhibited the growth of individual tortoises. They should be ready to mate at 20 to 30 years of age but many do not reach sexual maturity.",
          },
          {
            title: "Loud courtship",
            content:
              "Perhaps this long wait before they come of age is why they sound so excited during courtship. Tortoises have a wide repertoire of grunts, hisses, squeaks and sighs. During their prolonged mating ritual, they emit the strangest barking noises you'd never imagine coming from a tortoise. Perfect for Jurassic Park's sound designer, looking to voice creatures no-one has heard before. The barks of the raptors in the movie's famous kitchen scene were made by a mating tortoise!",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Lone survivor",
            description:
              "At least 18 different species of land tortoises used to live in the Indian Ocean region. All except the Aldabra have been driven to extinction by sailors who harvested them for food on long voyages and by introduced species such as rats, cats and pigs that preyed on their eggs and hatchlings.",
          },
          {
            title: "Island-Hopping",
            description:
              "In the 1880s, the esteemed Charles Darwin and other conservationists initiated the protection of the Aldabra tortoises. They were one of the first species to be conserved to ensure its survival. A breeding population was set aside on neighbouring Mauritius. Aldabra Atoll is now a World Heritage Site.",
          },
          {
            title: "Protection Needed",
            description:
              "The level of protection instituted by the Seychelles government has seen Aldabra tortoise populations growing steadily and there are now an estimated 100,000 on the atoll. Nevertheless, the species remains at risk due to habitat encroachment by humans and rising sea levels brought on by global warming.",
          },
        ]),
      },
      {
        name: "Asian Elephant",
        locationId: 2,
        lifespan:
          "60 to 70 years in the wild, up to 80 years under human care.",
        diet: "Mainly browse and grass. Often visit salt licks.",
        habitat: "Grassland and forest from sea level to 3000m asl.",
        range: "Fragmented populations in tropical Asia.",
        description: JSON.stringify([
          {
            title: "Matriachal Society",
            content:
              "Females form herds of related cows and their calves, led by a matriarch, which is usually the eldest. Bull elephants may join a herd short-term to mate.",
          },
          {
            title: "Communication in Sinhalese",
            content:
              'Our first elephant, Anusha, came from Sri Lanka on a steamer in 1973. She only understood Sinhalese and our keepers had to learn the language. Though Komali is the only Sri Lankan in our current herd the Sinhalese tradition continues to this day. "Pijit" - meaning "stop it" - is one of the 18 verbal commands used. If you overhear it, it\'s probably because one of our elephants had been overly \'nosy\' with her trunk!',
          },
          {
            title: "Tell-'Tail' Signs",
            content:
              "The elephant's trunk functions like a fifth limb. If any part of their bodies is hurting, the elephants might use their trunks or tails to soothe it. Our keepers keep a keen eye out for such tell-tale signs first thing in the morning, when the stables are cleared of food (and poop!) from the night before. Next up, the elephants get their daily full-body scrubs. This is another chance for keepers to check on their health while strengthening their bond with them.",
          },
        ]),
        iucnStatus: "Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Elephant Response Units",
            description:
              "We provide key support for the mitigation of human-elephant conflicts (HEC) in Way Kambas National Park, Indonesia. To mitigate HEC, Elephant Response Units (ERUs) of trained elephants and their mahouts form forest patrols, herding wild elephants away from farmland and back to the protected areas.",
          },
        ]),
      },
      {
        name: "Asian Small-Clawed Otter",
        locationId: 27,
        lifespan: "Up to 16 years under human care.",
        diet: "Crustaceans and molluscs. Also small fish, insects, rodents, reptiles and frogs.",
        habitat:
          "Freshwater swamps, meadering rivers, mangroves and tidal pools.",
        range:
          "From India through Southeast Asia to the Phillippines, Taiwan and Southern China.",
        description: JSON.stringify([
          {
            title: "You 'Otter' Be Here!",
            content:
              "Our otters' two-tiered exhibit is spread across an outdoor upper deck and an indoor viewing gallery. The terrain of the top tier is rocky - they build their dens and nest chambers beneath the boulders. Here, you'll see them doing their laps in the stream, engaged in a game of tag or playing 'juggle-the-pebble'. To view their underwater acrobatics, follow the footpath to the lower exhibit. Zoom in on their tiny ears and nostrils - the otters can close them while they swim.",
          },
          {
            title: "Layering for Warmth",
            content:
              "At the underwater viewing gallery, you'd probably get close enough to note the otters' thick fur coat. What you see is their outer layer of long guard hairs, coated with oil to repel water. Only this layer gets wet when the otters take a dive. A layer of fine, tightly-packed underfur stays dry. Air pockets within their coat keep the otters insulated while they swim. It's important to regularly reintroduce air into their coats, which is why you'd often see them grooming themselves.",
          },
          {
            title: "Nimble Paws and Action",
            content:
              "True to their name, these otters' claws do not grow past their digital pads. They have partially webbed paws, which means they're far more dexterous than otters with fully-webbed ones. Using their forepaws rather than their mouth, they dig for shellfish like clams, mussels and their favourite crabs on the sandy shoreline. Their sharp teeth are well-adapted to the task of crushing shells. Alternatively, they bring catch like clams on land, leaving them to open in the sun.",
          },
          {
            title: "Passing on Information",
            content:
              "With a vocabulary of 12 different calls, these otters can be a noisy bunch. The calls are used for contact, summons, greeting, threat and alarm. Scent markings are just as important for communication. Otters emit a musky smell from paired scent glands at the base of the tail that helps mark their territory. The scent also gives chemical cues as to identity, sex and reproductive state. If you were wondering about the smell at the exhibit, this probably explains!",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Free Aquarius",
            description:
              "Carelessly-disposed waste that ends up in our waterways is a threat to wildlife. In the “Free Aquarius” operation, Mandai Wildlife Reserve vets rescued a wild smooth-coated otter pup injured by an 'O' ring coiled around her body. Let's help the otters by reducing waste. Refill your bottle at water dispensers in our parks.",
          },
        ]),
      },
      {
        name: "Babirusa",
        locationId: 28,
        lifespan: "24 years on average.",
        diet: "Tubers, leaves, mushrooms, fruits, insects, snails.",
        habitat: "Forests and wetlands.",
        range: "Indonesia.",
        description: JSON.stringify([
          {
            title: "Pig Deer",
            content:
              "Babi' is the Malay word for pig and 'rusa' means deer. Thus 'babirusa' translates to 'pig deer'. \n Only the males have tusks. The upper tusks that grow through the snout of the babirusa look very much like the antlers of a deer, hence the animal's common name.",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Saving The Babirusa's Home",
            description:
              "Threatened by rampant destruction of their rainforest habitat and illegal poaching for their meat, the babirusa is in grave danger of extinction in the wild. We support the Forest and Species Protection Patrol (Nantu Protection Units), who remove snares and traps and hand over illegal loggers to the authorities. By protecting the Nantu forest, we help ensure the babirusa's habitat remains safe.",
          },
        ]),
      },
      {
        name: "Orangutan",
        locationId: 12,
        lifespan:
          "35 to 40 years in the wild. Up to 60 years under human care.",
        diet: "Variety of fruits. Also leaves, barks, flowers and insects.",
        habitat: "Tropical rainforests. Arboreal, lives in trees.",
        range: "Parts of Borneo and Sumatra.",
        description: JSON.stringify([
          {
            title: "Largest Tree-Dwelling Mammals",
            content:
              "Orangutans are apes, which means that unlike monkeys, they do not have a tail. Found in the rainforests of Borneo and Sumatra, they have special feet with long toes for grasping branches, and long limbs that can stretch out far so that they can move easily through the treetops. Orangutan babies stay with their mother for 7 to 8 years to learn survival skills. Play is an important way for them to learn these skills.",
          },
          {
            title: "Ah Meng and Singapore Zoo",
            content:
              "Ah Meng was our own homegrown celebrity. She came to Singapore Zoo at the tender age of seven and rose to stardom in the 1980s as the gracious host of our “Breakfast with Orangutan”. She became the first and only animal to be conferred the 'Special Tourism Ambassador' award. Everyone who has rubbed shoulders with Ah Meng has a story to tell. When she passed on in 2008, 4,000 people turned up to pay their final respects. Our yearly Safari Zoo Run is dedicated in her memory. Ah Meng's grand daughter Ishta has been named the new Ah Meng for her resemblance to her grandmother.",
          },
          {
            title: "All in the Name",
            content:
              "Ah Meng was named by the Chinese family that had kept her illegally.\n One of our impressive Sumatran male orangutans, Charlie, was probably named so as a British school had sponsored him while he was at Malaysia's national zoo. \n Anita, one of the senior female orangutans, was named after singer Anita Sarawak, who donated her to our zoo. \n Galdikas carries the name of famed primatologist Dr Birute Galdikas, and is the father of Ishta, the new Ah Meng.",
          },
          {
            title: "Like One of their Own",
            content:
              "When Ishta was younger, her mother Sayang fell sick and was unable to care for her. In a show of kinship, rarely seen in orangutans, Chomel adopted Ishta and cared for her like one of her own. At around the same time, Anita also adopted Endah, Ishta's sister. Ah Meng was known to adopt the orphaned young of other females and it is possible this is a learnt behaviour that Chomel and Anita had picked up from her.",
          },
          {
            title: "Two's Company, Three's a Crowd",
            content:
              "Our orangutans are notoriously picky about the company they keep. They form lifetime bonds with their keepers, to the point of possessiveness. Even our grande dame, Ah Meng, lost her cool when her lifetime caretaker, Sam, was seen getting too chummy with a French lady researcher.\n As a rule of thumb, junior keepers work alongside orangutans for a minimum of two years before they attain the level of trust necessary to bring the primates out for visitor interactions.",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Safety Net For The Species",
            description:
              "Both the Sumatran and Bornean orangutans are critically endangered - the latter was reclassified recently, from endangered status to reflect the magnitude of threats from habitat loss and illegal hunting.\n Managing orangutan populations in zoos ensures the survival of the species. It also allows members of the public to appreciate and learn more about them, and hopefully with emotional connection, comes the desire to protect these 'men of the forest'.",
          },
        ]),
      },
      {
        name: "Brown Lemur",
        locationId: 10,
        lifespan: "Up to 30 years.",
        diet: "Mainly fruits, young leaves and flowers.",
        habitat: "Tropical dry forest, moist lowland and montane forest.",
        range: "Madagascar",
        description: JSON.stringify([
          {
            title: "Agile Social Creatures",
            content:
              "he brown lemur moves through the forest canopy on all fours. Its tail is as long as or longer than its body and is used to maintain its balance when it performs aerial leaps. Brown lemurs are social animals and this is seen even in their teeth! They have a dental 'comb', formed by modified teeth, which they use to groom one another, building relationships. They also communicate verbally - 'crou' is to sound the alarm while a high-pitched 'cree' is a territorial call.",
          },
          {
            title: "Free-Ranging at the Zoo",
            content:
              "Their close social ties are the reason why they were selected to free-range. As they are fed at the same place every day, they learn to associate the area with food and to establish their territory there. \nAside from the Treetops Trail feeding, the brown lemurs can also be seen at the big bamboo clump by the Zoo entrance. You can view them up-close, without any of the barriers that usually separate visitors and animals. Do keep an eye out for those round-eyed faces!",
          },
        ]),
        iucnStatus: "Nearly Threatened",
        iucnDescription: JSON.stringify([
          {
            title: "Threatened Existence In The Wild",
            description:
              "Brown lemurs are hunted for food. Blowpipes, guns, bow-and-arrows, and even traps are used. Sometimes entire groups are captured. \n Their habitat is increasingly destroyed by slash-and-burn practices, charcoal production, and illegal logging. Choose paper and wood products from sustainable sources.",
          },
        ]),
      },
      {
        name: "Californian Sea Lion",
        locationId: 20,
        lifespan: "Up to 30 years in the wild.",
        diet: "A wide variety of seafood, mainly squid and fish, and sometimes clams.",
        habitat:
          "Coastal waters, sandy or rocky beaches, and man-made structures such as piers and buoys.",
        range: "Along the western coast and islands of North America.",
        description: JSON.stringify([
          {
            title: "Deep-Water Vision",
            content:
              "Adept swimmers, the Californian sea lions have a streamlined body and ear passages and nostrils can be closed underwater. They have large eyes and well-developed vision as they spend a lot of time underwater with reduced light levels. At the surface, where there is brightness and glare, the pupil is contracted to a tiny pinhole, protecting the sensitive retinas.",
          },
          {
            title: "Vocal and Playful Pinnipeds",
            content:
              "Sea lions often vocalise underwater and are able to locate sound sources easily. Playful and exuberant, they are highly vocal and bark like dogs. Pups produce a bleat-like call. These social animals congregate in large colonies on land and smaller groups in the water, called rafts.",
          },
          {
            title: "Military Marine Mammals",
            content:
              "Californian sea lions are used in military applications by the U.S. Navy, including detecting naval mines and enemy divers. In the Persian Gulf, the animals are trained to swim behind divers approaching a U.S. naval ship and attach a clamp with a rope to the enemy diver's leg. Navy officials say the sea lions can do this in seconds, before the enemy even realises what has happened.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Recovered from Historical Exploitation",
            description:
              "California Sea Lions have recovered from historical exploitation and their population is now large and still expanding slowly. Beyond the temporal effects of El Niño events, no other major threats are apparent.",
          },
        ]),
      },
      {
        name: "Celebes Crested Macaque",
        locationId: 21,
        lifespan: "18 years in the wild. Up to 34 years under human care.",
        diet: "Mainly fruits, also insects, young leaves, even crops.",
        habitat: "Humid tropical rainforests. Also farmland on forest edges.",
        range: "Northeastern Sulawesi, Indonesia and neighbouring islands.",
        description: JSON.stringify([
          {
            title: "Selfie Fame",
            content:
              "A cheeky Celebes crested macaque named Naruto, who snapped a few selfies with an unattended camera in Indonesia's Tangkoko, has shot his entire species to fame. The photos went viral, and garnered the yaki, as they're locally known, legions of fans worldwide. A high-profile lawsuit ensued - does Naruto own the copyright to his photos? The answer was no, but all that publicity was probably just what was needed to boost awareness of the conservation needs of this relatively unknown primate.",
          },
          {
            title: "Yaki Expressions",
            content:
              "The type of toothy grin, as seen in Naruto's selfies, is thought to be a display of 'peaceful intentions'. Males often 'yawn' to display their canines and assert their superiority. To show aggression, male macaques stare open-mouthed, grin with lips closed, then yawn and give chase. A grimace and lip-smacking signals submission or satisfaction. A loud, bird-like call may be used to resolve conflicts, to warn others away or to indicate dominance in contests for females.",
          },
          {
            title: "Attractive in Red",
            content:
              "Every male and female macaque has multiple mates. When females are ready to mate, their rump swells and becomes bright red. The swelling may appear grotesque to us but it is an important visual signal of fertility. Olfactory cues may be at work too - males are seen to sniff the females' rears at this time. Butt-sniffing is also a form of greeting, as is embracing, especially among the females. Female form more egalitarian bonds, whereas males conform to a strict pecking order.",
          },
        ]),
        iucnStatus: "Critically Engangered",
        iucnDescription: JSON.stringify([
          {
            title:
              "Mandai Wildlife Group In Support Of The Celebes Crested Macaque",
            description:
              "This macaque is one of the world's 25 most endangered primates — wild populations have declined by 80-90% in 40 years. The illegal bushmeat trade and habitat encroachment are the principal threats to their survival. \n Mandai Nature supports the work of Yayasan Selamatkan Yaki Indonesia (SY) in saving the Celebes crested macaque.",
          },
        ]),
      },
      {
        name: "Cheetah",
        locationId: 11,
        lifespan: "6 to 8 years in the wild. 17 to 19 years under human care.",
        diet: "Gazelle, kob and impala, also hares and wildebeest.",
        habitat:
          "From dry forest and thick scrub to grassland and hyperarid deserts.",
        range: "Strongholds in southern and eastern Africa.",
        description: JSON.stringify([
          {
            title: "Need for Speed",
            content:
              "A supple spine, long limbs, protruding claws and ridges on its footpads aid the cheetah in achieving a top speed of up to 115km/h. It can keep this up for all of 20 seconds and no more than 400m, so it approaches to within 30m of its quarry before its final attack. When it gets within striking distance, it trips its prey over with a sideways stroke of its forepaw or brings it down from the rear using its dewclaw (extra sharp claw on the inside of the foreleg).",
          },
          {
            title: "Chirping Cheetahs",
            content:
              "A cheetah mum makes chirruping calls to signal to her cubs to join her in feeding on a fresh kill. She may also call for them with a throaty purr if they have wandered off from their den. Her young respond with chirps. Cheetah mums shift dens every few days to prevent the build-up of their scent, which may attract predation from lions or hyenas. \n If separated, members of a male coalition may also “yipp” and “churr” for up to 20 minutes at a go, till they're reunited.",
          },
          {
            title: "Last of the Asiatics",
            content:
              "Cheetahs have disappeared across most of their Asian range due to live capture. Captured cheetahs were tamed and trained to hunt deer and gazelle as sport for royalty. The depletion of wild prey and habitat fragmentation have also contributed to their demise. The Asiatic cheetah is now Critically Endangered, with only about 80 left in Iran. An active pet trade market remains in the Gulf States and live cheetah cubs are being smuggled out of Africa to meet this demand.",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Breeding Success",
            description:
              "In the wild, cheetahs are solitary or live in small groups. Males and females usually do not cross paths unless it's breeding time. Though difficult to breed in zoos, we have successfully bred our cheetahs by separating the male and the female and introducing them only when the female is ready to mate.",
          },
        ]),
      },
      {
        name: "Chimpanzee",
        locationId: 22,
        lifespan: "Average of 45 years in the wild.",
        diet: "Fruits, plants, insects and eggs. Monkeys, wild pigs and small antelopes are also hunted.",
        habitat: "Primary and secondary rainforests, woodlands and grasslands.",
        range: "Southern Senegal to western Tanzania and western Uganda.",
        description: JSON.stringify([
          {
            title: "Jungle Gym",
            content:
              "Our chimp exhibit models a hillside forest clearing and comes equipped with a jungle 'gymnasium' in the form of a multi-tiered timber platform structure. Fallen tree trunks and overhanging forest vines are purposefully placed around the area to enhance this primate 'playground'. Given the high intelligence of chimpanzees (they possess over 98% of the genetic blueprint of humans), we strive to provide ample opportunities for our chimps to exercise and enjoy themselves.",
          },
          {
            title: "Using Tools",
            content:
              "Puzzle boxes and 'termite mounds' in the exhibit are filled with condensed milk or honey. To get at the sweet treat, our chimps search for sticks that fit or shape unsuitable ones to do the job. \n Chimps in the wild gather insect 'kebabs' or spear grubs in logs in a similar manner. They also use stones to crack nuts and leaves as napkins, or as sponges to dip for water. Tool use varies between communities - 'culture' may play a key part in knowledge transmission among chimps.",
          },
          {
            title: "Information Communication",
            content:
              "Young chimps usually stay with their mothers till they are seven, in order to learn survival skills. One of these skills may be knowledge of medicinal plants - chimps that appear ill have been noted to seek out herbs with healing properties. Mothers and their young develop a close bond that may last a lifetime. \n Chimps communicate through body language, facial expressions, hand-clapping, grooming and kissing. Some chimps have even learnt how to use human sign language!",
          },
          {
            title: "Cooperative Hunting",
            content:
              "All known chimp groups hunt large vertebrates, though their strategies may differ considerably. Some merely collect passing prey, others hunt fast-moving prey in coordinated fashion. Some hunting roles require elaborate coordination with other hunters and precise anticipation of the prey's movements. Chimps that perform such roles get the lion's share of the kill. Young chimps may learn to hunt from the age of 10 but need another 20 years or so of practice to do so reliably.",
          },
        ]),
        iucnStatus: "Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Deforestation",
            description:
              "Many rainforest animals are threatened by deforestation, habitat degradation, and the illegal wildlife trade.",
          },
        ]),
      },
      {
        name: "Cotton-top Tamarin",
        locationId: 5,
        lifespan: "Around 18 years.",
        diet: "Fruits, flowers, nectar, plant gums, saps, latex.",
        habitat: "Humid to dry deciduous forests at altitudes of 400m.",
        range: "Colombia.",
        description: JSON.stringify([
          {
            title: "All in the Family",
            content:
              "Tamarins usually have twins or triplets. Dad piggybacks the babies most of the time, passing them back to mum only when the babies need to nurse. Tamarins practise cooperative rearing, so older siblings also help carry the babies.",
          },
          {
            title: "Starting a Free-Ranging Exhibit",
            content:
              "The tamarins' strong family bonds are why they're chosen as one of our free-ranging species. To start a free-ranging exhibit, the keepers select a lushly-planted location and build a small 'hut' in its middle. Branches for climbing and other 'furniture' are added to the 'hut'. A family group of tamarins is then housed in the 'hut', where they will remain for the first few days. During this time, they get used to the human traffic and noises in their new environment.",
          },
          {
            title: "Getting Used to their New Home",
            content:
              "Next, keepers coax the female out of the hut to explore and scent mark her new surroundings. A few days later, the male is released while the female is confined. Guided by her scent marks, the male familiarises himself with the area. When he's observed to be behaving calmly and staying close by, the keepers release the whole family. This is a make-or-break moment as the animals may get spooked and run off. Kudos to our keepers who've always managed this step smoothly.",
          },
          {
            title: "At the 'Hut' of the Family",
            content:
              "After the release, especially for the first week, keepers continue to monitor the family closely to ensure they're settled in. The 'hut' remains at the heart of their lives. It is a safe haven for them, a place where they can take refuge if something frightens them. It is also where they spend the night, a warm hearth to retire to. For their safety, the tamarins must return to their 'hut' by the end of day. Keepers condition them to do so by placing food there at 5pm.",
          },
        ]),
        iucnStatus: "Critically Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Exotic Pets",
            description:
              "Each year, hundreds of illegal pets come to us in such a manner, or as confiscations. Given our limited space and resources, it is a challenge for us to take in all of them. It's illegal to keep exotic animals like cotton-top tamarins as pets. \n Thousands of wild animals are removed from the wild to meet the demand for illegal pets and most die while being smuggled across borders. Do not buy exotic pets.",
          },
        ]),
      },
      {
        name: "Eastern Black-and-White Colobus",
        locationId: 5,
        lifespan: "29 years or more under human care.",
        diet: "Mainly leaves, also seeds and unripe fruits.",
        habitat: "Rainforests and open woodlands.",
        range: "Central and East Africa",
        description: JSON.stringify([
          {
            title: "Up in the Trees",
            content:
              "Colobus monkeys are some of the most arboreal primates, capable of leaping up to 15 metres and rarely descending to the ground.",
          },
          {
            title: "Special Stomachs",
            content:
              "They possess a four-chambered stomach that aids in digesting the tough fibres in their main diet of leaves.",
          },
          {
            title: "Piebald Colours",
            content:
              "The adults' black-and-white fur allows the colobus monkey to camouflage amidst contrasting patches of light and shadow in the forest canopies.",
          },
          {
            title: "Effective Communication",
            content:
              "They can roar, just like howler monkeys. Roars are usually reserved for long-distance communication among neighbouring troops and can be heard from nearly two kilometres away.",
          },
          {
            title: "Snow-White Babies",
            content:
              "Infant colobus monkeys are born with pure white fur. This striking colouration may help the elders of the troop keep an eye out for them.",
          },
          {
            title: "Standing Guard",
            content:
              "At night, one troop member always remains on guard to watch out for nocturnal predators like leopards.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Coordinated Conservation",
            description:
              "Wild colobus monkeys are vulnerable to habitat loss, as well as hunting for bush meat and their pelts. \n Our colobus monkeys are managed under the EAZA Ex-situ Programme (EEP), which involves coordinated breeding efforts by participating zoos. \n Transfer of individuals between these zoos is based on genetic compatibility. We have successfully bred our colobus monkeys and are contributing to the continued survival of the species.",
          },
          {
            title: "World-Class Care",
            description:
              "We provide the highest standards of care for our colobus monkeys through a balanced and varied nutrition and an enriched enviornment that allows them to exhibit their natural climbing abilities and behaviours.",
          },
        ]),
      },
      {
        name: "Electric Blue Gecko",
        locationId: 7,
        lifespan: "Not well-studied. Estimated 5 years or more.",
        diet: "A variety of small insects.",
        habitat: "Tropical rainforests. Arboreal, lives in trees.",
        range: "Tanzania in Africa.",
        description: JSON.stringify([
          {
            title: "Same species, different shades",
            content:
              "Males have a bright turquoise-blue body with a striking orange belly. Females and subordinate males tend to be greenish-bronze with bluish overtones and a cream or pale orange underside. From the time they're hatched till they reach sexual maturity, both male and female young look like adult females, just tinier. Females retain the same colour throughout their life but males develop in one of two ways. Males kept solo and males that have dominant personalities will develop the famed electric blue colour. Non-dominant males look just like females and can only be differentiated by their femoral pores.",
          },
          {
            title: "Of Courtship and Eggs",
            content:
              "To court a female, the male flattens his body, puffs out his black throat patch and bobs his head. After courtship, females usually lay one or two eggs, every four weeks during the breeding season. An egg-gluer, she sticks her eggs onto the surface of any suitable substrate she can find, taking pains to ensure they're hidden from sight. The white, hard-shelled eggs may take anywhere from 50 days to three months to hatch.",
          },
          {
            title: "Poached from homes of pandan",
            content:
              "This diurnal gecko is found only in Tanzania's Kimboza and Ruvu Forest Reserves, where it dwells exclusively on pandan plants, which are associated with swamps or limestone within the forest. Each plant usually has a male, one or more females and several juveniles living among its thick stalks and above-ground roots. Because of this, the geckos were easily targeted by poachers. In 2005, when the first electric blue geckos appeared on the market, reptile enthusiasts worldwide fell in love with their electric blue colour. An alarming 15% of the wild population was illegally removed and exported for the pet trade between 2005 and 2009.",
          },
        ]),
        iucnStatus: "Critically Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Lighting Up The Electric Blue's Future",
            description:
              "Ongoing deforestation in the form of activities like illegal timber logging and clearing for agriculture, combined with the increasing fire outbreaks, are resulting in the loss and fragmentation of these geckos' habitat. The very limestone formations where the pandanus (their host plants) grow are being mined. \n They're also heavily collected for the pet trade. The hope is for hobbyists to become aware of these geckos' fragile position in the wild and support a halt to illegal trade. \n Our hatchlings add to the 250-strong population in zoos worldwide. The species will soon be managed internationally under a European Studbook Programme.",
          },
        ]),
      },
      {
        name: "Estuarine Crocodile",
        locationId: 7,
        lifespan: "70 years.",
        diet: "From insects and water birds to buffalo, even sharks.",
        habitat: "Freshwater, coastal brackish waters, even out at sea.",
        range: "India, Southeast Asia, Australia, New Guinea, the Pacific.",
        description: JSON.stringify([
          {
            title: "Hunting Habits",
            content:
              "With only the nostrils, eyes and part of the back exposed, it's hard to spot these crocs when they're on the hunt. Once in range of their prey, they lunge out of the water and slam their jaws shut on it. The force of this alone usually kills its prey instantaneously - these crocs have the strongest bite force of all animals. If the prey is too big, the crocs grips it with their jaws and tear chunks off by spinning and twisting - a behaviour also known as the 'death roll'.",
          },
          {
            title: "Guts of Steel",
            content:
              "These crocs don't have big stomachs and after having had their fill, they may stow any leftovers in mangroves or underwater for another day. Large amounts of stomach acid help them break down their meals - even bones can be dissolved! To aid their digestion, they also swallow and store stones in their guts that help grind up their food. \n If all this mealtime talk is making you 'hungry' for action, come catch our croc token feeding session, happening every Sunday at 4.45pm.",
          },
          {
            title: "Motherly Care",
            content:
              "Despite their fearsome reputation, the mummies of this species have a tender side to them. A mummy croc specially constructs a nest by making a clearing and then scraping vegetation and earth together to form an elliptical mound. 50 to 80 eggs are laid. While they incubate, she guards them from an adjacent 'wallow'. In the first few weeks after hatching, hatchlings live exist in nest-specific crèches and may be joined by hatchlings from nearby crèches. Groups of hatchlings may even undertake activities like crossing rivers together.",
          },
          {
            title: "Boy or Girl?",
            content:
              "As with other crocodiles, the temperature of the nest determines the sex of the hatchlings. Males are produced between 31 to 33ºC while more females are hatched when the nest temperatures are above or below this temperature range.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Cherish Our Local Crocs",
            description:
              "These awe-inspiring reptiles are often seen at Sungei Buloh Wetland Reserve and have been recorded in estuaries and reservoirs including the Singapore River, Kallang River, Sungei Seletar and Kranji Reservoir, and even Pulau Tekong. They are usually found in the water or at the mudflats. NParks posts warning signs at their usual haunts. If you come across one in the wild, admire it from a respectful distance. Stay on the designated path and do not get into the water. If it is on the path, stay calm and back away slowly. Do not approach, disturb or feed it. Like other wild animals, crocodiles will not harm humans unprovoked.",
          },
        ]),
      },
      {
        name: "Fossa",
        locationId: 33,
        lifespan: "Up to 23 years under human care.",
        diet: "Lemurs, rodents, reptiles. Also amphibians and arthropods.",
        habitat: "Forests.",
        range: "Madagascar",
        description: JSON.stringify([
          {
            title: "Talking Scents",
            content:
              "The fossa's scientific name means 'ferocious animal with a hidden anus'. Its anus is concealed by a pouch that contains scent-marking glands. Using secretions from these, and glands located on its chest, it marks rocks, trees, and the ground in its territory. Both males and females use scents to 'talk' to one another. The fossa also emits a strong stink through its scent glands when it is annoyed or scared.",
          },
          {
            title: "Private Matters",
            content:
              "Interestingly, adolescent females sport an enlarged and spiky-looking clitoris, which gradually disappears as they come of age. The fossa is the only known mammal to display this temporary masculinisation, which is thought to protect the adolescent females from sexual harassment from males, as well as territorial aggression of mature females. During breeding season, females consort with multiple males. Copulation can last six hours or more at one go, accompanied by a blood-curdling mating call.",
          },
          {
            title: "Built to Hunt",
            content:
              "Interestingly, adolescent females sport an enlarged and spiky-looking clitoris, which gradually disappears as they come of age. The fossa is the only known mammal to display this temporary masculinisation, which is thought to protect the adolescent females from sexual harassment from males, as well as territorial aggression of mature females. During breeding season, females consort with multiple males. Copulation can last six hours or more at one go, accompanied by a blood-curdling mating call.",
          },
          {
            title: "Tales of the Fossa",
            content:
              "The fossa is featured as a sly and dangerous creature in Malagasy folklore. It can turn invisible by contracting the pupils of its eyes. Just with a fart, the fossa can kill a coop of chickens. The fossa is believed to steal babies from their cribs and snatch children wandering alone in the forest. It licks a person into a deep sleep before cutting him open. These myths once protected the fossa. It was feared in most parts of Madagascar. But now, more fossas are being hunted by humans.",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Saving Fossas",
            description:
              "Wild fossas are losing their forest homes. Lemurs, their main prey, are disappearing due to deforestation. Fossas are killed as pests for preying on domestic chickens.\n Our fossas are managed under the European Endangered Species Programme (EEP), which involves coordinated breeding efforts by participating zoos. Transfer of individuals between these zoos is based on genetic compatibility. We hope to eventually breed our fossas and contribute to the continued survival of the species.",
          },
        ]),
      },
      {
        name: "Gaboon Viper",
        locationId: 7,
        lifespan: "18 to 20 years under human care.",
        diet: "Small mammals, birds, frogs and toads.",
        habitat: "Rainforests, savannas, other moist, tropical habitats.",
        range: "Sub-Saharan Africa, in parts of Central, East and West Africa.",
        description: JSON.stringify([
          {
            title: "Lethal Predators",
            content:
              "Like other vipers, the Gaboon viper has a thick body, keeled scales and triangular head. With hinged fangs at length of up to 5cm at the front of the mouth, these vipers have the longest fangs of any venomous snake. Weighing more than 20 kg and growing to lengths of more than 1.8 m, Gaboon vipers are also the largest vipers in Africa. The biggest individuals have heads that measure nearly 15 cm across at their widest point. Their symmetrical and striking pattern helps them blend seamlessly into the leaf litter on the forest floor. Its broad, whitish-cream head imitates a fallen leaf perfectly, right down to the dark central vein.",
          },
          {
            title: "Passive and Placid",
            content:
              "Passive hunters, these snakes lie in wait for whatever small creatures that come within striking range. Most snakes strike and release, but this viper holds on till its prey breathes its last. That said, this species is known for its placid nature. If it senses a threat, it will raise the upper part of its body and hiss — it usually hesitates to bite. Only in rare cases where the snake was stepped on before it could get out of the way, or when movements had been mistaken as those of prey, have humans been bitten. Whether a strike results in mere pain or rapid death depends on whether the snake injects venom into its bite, and how much.",
          },
          {
            title: "Fight for Love",
            content:
              "Males of this species engage in combat during the breeding season. The first male 'picks' a fight by rubbing his chin along the back of another. In response, the second male rears its head up high. The first male follows suit and their necks intertwine. Levelling their heads, they face off and push, bodies locking together as they switch positions. Oblivious to everything but their rivalry, they remain locked in combat even after falling off a surface or into water. When they tire, they may take a consensual break before resuming. The victor that succeeds in pushing the other's head to the ground gains mating rights to the female.",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Bushmeat and Traditional Medicine",
            description:
              "This species is considered to be Vulnerable due to population declines provisionally estimated to be as much as to 30% globally over the past 15-18 years (three generations) (particularly in Nigeria and the Democratic Republic of the Congo), based on inference both from reported rates of direct decline and from levels of exploitation for bushmeat and traditional medicine, and because the known causes of decline have not ceased.",
          },
        ]),
      },
      {
        name: "Giraffe",
        locationId: 11,
        lifespan:
          "10 to 15 years in the wild. 20 to 25 years under human care.",
        diet: "Leaves, flowers, seed pods and fruits.",
        habitat: "Savannas, grasslands or open woodland.",
        range: "Across African continent.",
        description: JSON.stringify([
          {
            title: "Giraffes Sail in from India",
            content:
              "Two young Rothschild's giraffes Adhil and Balaji arrived at Singapore Zoo in May 2021. Hailing from India's Mysuru Zoo, they are now part of a globally managed breeding programme under the EAZA Ex-situ Programme.",
          },
          {
            title: "Feeding our Giraffes",
            content:
              "Our giraffes are fed Australian hay and leaves from local starfruit, jackfruit and acacia trees. Bunches of leaves are hoisted high up in the trees to encourage the giraffes to display their natural behaviour of feeding off the highest leaves. They also take vegetables like carrots. Salt lick blocks supplement their diet with necessary minerals - in the wild, giraffes would eat soil rich in salt and other minerals. Water troughs are placed at comfortable heights.",
          },
          {
            title: "A Tongue for Thorns",
            content:
              "The tough leathery tongue of the giraffe may reach a length of 53cm and works like a hand to grasp leaves from branches. The lack of incisors and canines on its upper jaw allows the tongue to move unhindered during feeding. The giraffe may draw whole branches into its mouth and outward-facing canines on its lower jaw helps to 'release' leaves when it's done feeding. It coats leaves (especially thorny acacia) in its thick, sticky saliva for efficient swallowing.",
          },
          {
            title: "A Drinking Problem",
            content:
              "In the wild, giraffes need to get down to a very awkward position to drink water. In this position, they are vulnerable to attacks by lions. Males grow to almost 6m, females up to 5m. When they lower their head from such heights to the ground, the elastic walls in their carotid artery (carrying blood from heart to brain) swell to contain the extra blood and prevent it from rushing to the head. When they get back up after they've drunk their fill, special valves in their veins slow down the flow of blood away from the brain.",
          },
          {
            title: "G-Suits",
            content:
              "The tight skin on the giraffe's lower legs maintain pressure and ensure blood does not pool in their legs, despite the force of gravity on the huge amount of blood in their body. Scientists have studied the giraffe extensively to design g-suits for fighter pilots. That's g for gravity, not giraffe. During high g-force maneouvres, these tight-fitting trousers exert pressure on the pilots' abdomen and legs to prevent blood-pooling and consequent loss of consciousness.",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Towering Threats To The Giraffe",
            description:
              "Besides habitat loss and change due to expanding agricultural and mining activities, giraffes in the wild are threatened by increased human-wildlife conflict, illegal hunting, and civil unrest. \n A dramatic 40% decline has been recorded over 20 years, hence its up-listing from Least Concern to Vulnerable.",
          },
        ]),
      },
      {
        name: "Golden Poison Frog",
        locationId: 7,
        lifespan: "5 to 10 years.",
        diet: "Ants, termites, beetles.",
        habitat: "Lowland rainforests in the Amazon.",
        range: "Endemic to Colombia.",
        description: JSON.stringify([
          {
            title: "Potent Poison",
            content:
              "Known for their extreme toxicity, these frogs produce toxins twenty times more potent than that of any other poison dart frog. A single golden poison frog contains enough toxins to kill ten grown men: it's thought to be one of the most toxic animals on Earth. The toxins can cause lasting damage to nerve and muscle cells, and ultimately lead to a heart attack. Once in contact with a person's face, they create a searing sensation over a few hours. \n The frogs come in shades of yellow, orange, or pale green, varying with their place of origin. This vibrant colouration is the primary way in which these amphibians warn off their enemies.",
          },
          {
            title: "To Kill and To Heal",
            content:
              "This species has a sole predator - a tiny snake immune to their toxins and that feeds only on young frogs due to its small size. \n For centuries, the indigenous people of Colombia have upped their hunting game by tipping their blowgun darts into the frog's venom. It is thought that plant poisons, carried in the bodies of the frog's invertebrate prey, are the source of the frog's toxicity. If raised under human care and fed prey items that don't originate from their natural habitat, the frogs never develop venom. \n Medical researchers have developed a painkiller by recreating one of the compounds in the frog's toxins synthetically.",
          },
        ]),
        iucnStatus: "Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Keeping A Species Away From Harm",
            description:
              "Found only in a small plot of rainforest on the Pacific coast of Colombia, this species is facing habitat loss due to the use of land for illegal crop planting, logging, and mining activities. \n Though the population in its tiny range remains relatively abundant, it is at risk due to the widespread destruction of the forest. Pollution resulting from pesticide spraying of illegal crops renders them particularly vulnerable. \n We have successfully bred the golden poison frog at the Singapore Zoo, a first-time feat for us. We maintain a pool of genetically-diverse animals in our collection, that may become part of future conservation efforts.",
          },
        ]),
      },
      {
        name: "Mousedeer",
        locationId: 3,
        lifespan: "8 to 12 years.",
        diet: "Leaves, shoots, buds, shrubs, also fallen fruit and fungi.",
        habitat: "Tropical rainforests. Arboreal, lives in trees.",
        range: "Southeast Asia",
        description: JSON.stringify([
          {
            title: "Neither Mouse Nor Deer",
            content:
              "With a rodent-like face and a rabbit's body perched precariously atop the pencil-thin feet of a piglet, the mousedeer looks like an odd mix of different animals. Delicate of build and shy by nature, this unique group of tiny hoofed mammals may lack the horns or antlers of other hoofed animals but they do sport fangs. Long and tusk-like, these enlarged upper canines are especially prominent in males, and used in slashing competititions to warn off rivals.",
          },
          {
            title: "Sang Kanchil The Cunning",
            content:
              "In Southeast Asia, a quick-witted mousedeer character called Sang Kanchil, is the star of many trickster stories. These stories have been told and passed down for generations as part of Malaysian and Indonesian folklore. In these tales, the tiger and crocodile are two of the big and powerful creatures in the forest often outwitted by the wily mousedeer. Singapore as a country has often been likened to Sang Kancil - making up for her small size with the nimbleness and cunning to overcome seemingly insurmountable challenges.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Remain Widespread",
            description:
              "The Greater Oriental Chevrotain is listed as Least Concern because chevrotains remain widespread and at least locally common in the Sundaic region and, at least on Borneo, it appears that this species is resilient to hunting although probably not to habitat degradation. Better data would allow a more confident assessment. Its wide altitudinal tolerance (presumed to be up to 1,000 m asl) means that it has large populations outside the altitude of very rapid forest loss so cannot be listing on population decline rate inferred through Sundaic forest trends.",
          },
        ]),
      },
      {
        name: "Green Basilisk",
        locationId: 7,
        lifespan: "10 to 13 years under human care.",
        diet: "Insects, spiders, crawfish, also small vertebrates.",
        habitat: "Tropical rainforests, near water bodies.",
        range: "Central America. Eastern Honduras to Panama.",
        description: JSON.stringify([
          {
            title: "Showy 'plumes'",
            content:
              "The green basilisk lizard is also known as the plumed or double-crested basilisk. Males can be distinguished by the showy crests on their heads and backs, which are used to impress females. \n Adult males have four crests: a tiny one just behind the eyes, a larger one at the back of the head, a dorsal crest and a crest running the length of its tail. Females and juveniles have reduced crests, only at the head and tail. Part of the iguana family, green basilisks grow to be anywhere from 60-90cm, their long, whip-like tail inclusive. This lizard's hind limbs, which are much longer than its front ones, are built for sprinting.",
          },
          {
            title: "'Walking' on water",
            content:
              "If frightened while on land, these lizards dash away on their hind legs at speeds of over 11 km/hr. That speed, along with their specialised feet structure, allows them to run across a fair distance of water without breaking the surface tension. \n The long, flat toes on their rear feet have fringes of scaly skin on the bottom, which unfurl when the lizards splay their toes in the water,increasing surface area. As they continue to slap their feet hard against the water, a tiny pocket of air is created. This keeps them from sinking, provided their speed is maintained. They can move along the water surface in this way for 4.5m or more.",
          },
          {
            title: "Swimming Lizards",
            content:
              "When the lizards tire, their pace slackens and gravity subsequently takes over. Dropping on all fours, the lizards become partially submerged and swim in continuation of their flight. They have strong swimming skills and can remain underwater for 10-30 minutes. \n If threatened while they're up in a tree overhanging water, they can drop right into the water and sprint, upright, at more than a metre per second across the surface.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Large Overall Population",
            description:
              "Listed as Least Concern in view of its wide range, large overall population, and because it is not declining fast enough to qualify for a threatened category.",
          },
        ]),
      },
      {
        name: "Grey Kangaroo",
        locationId: 1,
        lifespan: "8 to 10 years in the wild.",
        diet: "Grasses.",
        habitat: "Forests and open grasslands.",
        range: "Australia",
        description: JSON.stringify([
          {
            title: "Turning The Tables",
            content:
              "One of the largest kangaroo species, the eastern grey kangaroo swims well and evades predators, like dingoes, by diving. When cornered, it may turn the tables to hold the predators underwater and drown them.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Large Population",
            description:
              "Listed as Least Concern in view of its wide distribution, large population, occurrence in a number of protected areas, lack of major threats, and because it is not in decline.",
          },
        ]),
      },
      {
        name: "Hamadryas Baboon",
        locationId: 4,
        lifespan: "Up to 37 years under human care.",
        diet: "Grass seeds, roots, berries. Also insects and small vertebrates.",
        habitat: "Arid sub-desert steppe, hillsides, escarpments, mountains.",
        range: "Principally in Ethiopia. Also in Somalia, Saudi Arabia, Yemen.",
        description: JSON.stringify([
          {
            title: "Sexually dimorphic",
            content:
              "Hardy monkeys with a strong build and a dog-like snout, both males and females of this baboon species sport greyish-brown fur. The males develop a long, silvery mantle-like mane when they reach puberty. They are twice as big as the females. Males and females look so dissimilar that they have been thought to be of different species. \n Pay these intelligent primates a visit at the Great Rift Valley exhibit. You can also take part in the daily 2.30pm and 5.00pm feedings.",
          },
          {
            title: "No buffoons",
            content:
              "The steep escarpments at the exhibit are home to the baboons. For a closer view, head to the rock 'cave' with glass viewing panels. Every now and then, these curious creatures troop right up to the glass to fix a human-like gaze on guests! \n Indeed, these baboons are no buffoons. Though they've gone extinct in Egypt, they were once revered by the ancient Egyptians as representatives of Thoth, the god of science and the art of writing and are known as 'sacred baboons'.",
          },
          {
            title: "One male to many females",
            content:
              'The baboons form clans, or "One Male Unit" (OMU) social and breeding groups. Each is comprised of a dominant male and his harem. In general, males "respect" the social bond between other males and their female affiliates. Still, each male jealously herds his females, keeping them from socialising with other males. He chases after females that stray too far for his liking and inflicts a painful bite on their necks as a reminder for them to stay close to him.',
          },
          {
            title: "The importance of grooming",
            content:
              "Grooming keeps the OMU cohesive. The leader male is groomed by his females, who focus on his mane, face, and buttocks - the male's mane is thought of as a strong mate attractant. \n Subadult males yet to establish an OMU may resort to abducting juvenile females. The abductor grooms his 'adopted' female and piggybacks her, providing what appears to be parental care. Once she reaches maturity, he mates with her. Nabbing this first female is crucial to expanding his harem.",
          },
          {
            title: "Follower males",
            content:
              "A more risky strategy adopted by subadult males is to attach themselves to an already established OMU as followers. Followers aim to either steal females from the OMU leader, or to overthrow him and take over his harem. Most females only mate with their leader male. Some females risk his wrath by 'sneaking' secret trysts with follower males. It's possible that in the event of an OMU takeover, the females' 'infidelity' protects their offspring by confusing their paternity.",
          },
          {
            title: "Lies for lives",
            content:
              "Interestingly, females go into 'deceptive' sexual cycles upon a takeover. Even females still nursing their young develop genital swellings and present themselves to the new male. Perhaps females that mate with him are more favoured. Or it could be the females' way of protecting their young from being killed - new males often undertake mass infanticide. Either way, it's all a show and the females do not become pregnant any sooner than if the leader had remained unchanged.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Widespread and abundant.",
            description:
              "Listed as Least Concern as this species is widespread and abundant, and there are no major range-wide threats believed to be causing a significant decline. The decline of a major predator of the Hamadryas baboon, the leopard Panthera pardus, has certainly resulted in increased densities locally. Following recent urban development in the mountains of south-western Saudi Arabia, local populations of Papio hamadryas have increased in numbers around cities (Biquand et al. 1994).",
          },
        ]),
      },
      {
        name: "Indian Gharial",
        locationId: 7,
        lifespan: "Up to 100 years.",
        diet: "Fish.",
        habitat: "Freshwater.",
        range:
          "India, Nepal, Bangladesh. Regionally extinct in Myanmar and Pakistan.",
        description: JSON.stringify([
          {
            title: "Endangered crocodilian",
            content:
              "The Indian gharial is related to crocodiles and alligators. A critically endangered species, it used to occur in the rivers of Pakistan and Myanmar. Today, it is estimated that fewer than 200 Indian gharials are left in the wild, mostly in India, and a small number in Nepal and Bangladesh.",
          },
          {
            title: "The gharial's Ghara",
            content:
              "The gharial gets its name from its 'ghara', which means `pot' in Hindi. This is a bulbous growth on the tip of the male's snout with a cartilaginous lid on the nostrils that flaps during exhalation. The ghara amplifies the male's hissing calls to attract females, making them audible from almost a kilometre away. Unfortunately, few mature males are now observed in the wild. Though gharials nest annually, some females in India were found to be nesting much less frequently.",
          },
          {
            title: "Gharial guardians",
            content:
              "Females lay their eggs in nests dug into sandy riverbanks. Though they remain in the water in the day, they visit and guard the eggs at night, throughout the incubation period of 60-80 days. They get very territorial near the nest, but will tolerate other females nesting nearby. The mother, sometimes the father as well, may help uncover the nest during hatching. Due to their unique snout and teeth, they may not be able to help their babies hatch or pick them up.",
          },
          {
            title: "Care of the young",
            content:
              "Mothers will protect hatchlings for several weeks or months. During this time, the hatchlings hang around in groups near their mother. The presence of the father may be tolerated, but he will not actively protect hatchlings. The young may sometimes rest on his back. Often, the rising waters of the monsoon prompt the separation of mother and young. The juveniles are washed downriver, away from their mother's protection. Sadly, many young gharials do not survive this.",
          },
          {
            title: "Banking on the sand",
            content:
              "Large-scale sand mining for construction degrade the sand banks on which the gharials nest. Dams and irrigation diversions have resulted in perennial rivers drying up. Unlike other crocodilians, the gharial can't walk overland to find other water sources. During the dry months, when gharials breed, riparian people, among the poorest in India, plant crops and herd livestock along the river, competing with the gharials for precious riverine real estate.",
          },
        ]),
        iucnStatus: "Critically Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Dramatic Decline",
            description:
              "In the span of 60 years, their population has plummeted 98%. Since the 1970s, much money and effort have been spent on the reintroduction of gharials, with scant success. Besides the gharial, other freshwater species like the Ganges river dolphin, mugger crocodile, and mahseer are also on the decline.",
          },
        ]),
      },
      {
        name: "Komodo Dragon",
        locationId: 7,
        lifespan: "50 to 60 years in males, half that in females.",
        diet: "Carrion, deer, pigs, smaller dragons, even water buffalo and humans.",
        habitat: "Tropical savanna forests.",
        range: "Indonesian islands of Komodo, Rinca, Flores and Padar.",
        description: JSON.stringify([
          {
            title: "Indonesia's national treasure",
            content:
              "Seen as one of Indonesia's national treasures, Komodo dragons are so highly regarded that they can only be given away by the President. Locally known as ora or buaja daret, meaning 'land crocodile', Komodo dragons can weigh more than 100kg, grow longer than 3m and take down prey larger than themselves.",
          },
          {
            title: "Forked Tongues For Smelling",
            content:
              "As Komodos walk, they swing their heads from side-to-side. Constantly, their long, forked tongue flicks out to sample the air, much as snakes do. The tongue then touches the roof of the mouth, where the Jacobson's organ helps analyse and identify airborne molecules. If molecules from a prey animal are more concentrated on the left tongue tip than on the right, the Komodo knows to head left. When the wind is right, they can 'smell' carrion from as far away as 4km!",
          },
          {
            title: "Scaly Armour",
            content:
              "Rough stone-coloured scales cover their robust bodies, from which strong limbs and a muscular tail extend. Though males tend to be bigger, it's hard to tell the sexes apart.",
          },
          {
            title: "A Deadly Bite",
            content:
              "Komodo saliva teems with some 60 strains of bacteria, of which 7 or more are highly septic. Once bitten, an animal usually dies within the day or in less than a week. \n Interestingly, one Komodo's bite will not kill another Komodo. Scientists are searching for antibodies in their blood that may protect them from the otherwise deadly venom and bacteria.",
          },
          {
            title: "Studying Venom Production",
            content:
              "In addition, Komodos have a gland in their lower jaw containing venom that decreases the blood pressure of their prey and prevents the blood from clotting. Singapore Zoo contributed to research work on venom production in Komodo dragons by providing tissue samples to researchers from the University of Melbourne.",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Hard To Breed",
            description:
              "As with many reptiles, one of the challenges in breeding Komodo dragons is the difficulty of telling males from females without DNA tests or ultrasound scans. After 34 years of caring for Komodo dragons, we celebrated our first-ever hatching in 2009. and we've been successfully breeding them since. \n Wild Komodos are on the decline due to a dearth of egg-laying females, poaching and human encroachment. We hope to help ensure their future survival through our breeding efforts.",
          },
        ]),
      },
      {
        name: "L'Hoest's Monkey",
        locationId: 5,
        lifespan: "15 to 25 years.",
        diet: "Fruits, leaves and insects.",
        habitat: "Tropical forest.",
        range: "Central Africa.",
        description: JSON.stringify([
          {
            title: "Sleep",
            content:
              "L'Hoest's monkeys are diurnal and most active in the early morning and the late afternoon. Mostly terrestrial, they are typically found on the ground, traveling and foraging for food. As mentioned, they forage at different levels throughout the forest. However, their sleeping habits are somewhat unique. They sleep sitting upright in trees, holding onto each other or onto branches. Each member picks out a preferred sleeping spot that becomes one they return to each night.",
          },
          {
            title: "Simian Immunodeficiency Virus",
            content:
              "Perhaps not a “fun” fact, but an interesting one: L'Hoest's monkeys can become infected with Simian Immunodeficiency Virus, or SIV, which becomes HIV when transmitted to humans.",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Conflict Region",
            description:
              "Allochrocebus lhoesti has undergone a significant population decrease in the past and continues to decline. Most of this species' range is in a region of intense conflict, which has exacerbated the known threats, which are mainly bushmeat hunting and habitat loss due, in large part, to artisanal mining. It is suspected that these declines will continue in the face of ongoing political turmoil, and will result in an overall population reduction of more than 30% over a 30-year time frame from 1995 to 2025 (given a 10-year generation period), qualifying the taxon as Vulnerable A4cd",
          },
        ]),
      },
      {
        name: "Leopard",
        locationId: 11,
        lifespan:
          "10 to 12 years in the wild. 21 to 23 years under human care.",
        diet: "Mid-sized ungulates, primates, birds, fish and carrion.",
        habitat: "Mountains to grasslands, rainforests to farmlands.",
        range: "Africa to Middle East, India, China and Southeast Asia.",
        description: JSON.stringify([
          {
            title: "Vulnerable survivors",
            content:
              "In the face of changing land-use, decreasing prey and human persecution, the leopard has persisted where other large predators have not. Found wherever there is food and cover, it quenches its thirst with moisture from ingested prey. Not a fussy eater, it tolerates human presence well. Keen of sight and hearing, the leopard is comfortable both in water and on trees. Yet, it is not invulnerable. In parts of its range, populations have plummeted by 80% or more.",
          },
          {
            title: "Stocking up",
            content:
              "The leopard has the practice of heaving its kill up into the limbs of a tree for undisturbed feeding. Assisted by powerful limb, neck and jaw muscles, it can easily drag a carcass that weighs more than itself! Leopards are known to cache food in trees or under thick vegetation and will not stop hunting despite having multiple carcasses stowed away. This is especially so where competitors like hyenas or lions are present and more commonly seen in males than females.",
          },
          {
            title: "Blending in",
            content:
              "Their coat colour ranges from tawny in warm, dry habitats to reddish-orange, even black in dense forests. Leopards with a black coat are commonly referred to as `black panthers'. Like other leopards, they have a spotted coat although their distinctive black rosette markings are much less visible on a black coat. Leopards in East Africa sport circular rosettes while those in South Africa have squarish ones. Cubs are ash-grey with indistinct rosettes. Solid black spots cover a leopard's chest, feet, and face. Each leopard has a unique coat pattern.",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Human-leopard conflict",
            description:
              "In many sub-Saharan countries, farmers are allowed to kill predators threatening life and property. Livestock is easy pickings for leopards and injured leopards may even prey on humans. Conflict with humans often ends in retaliatory killings and this may be the greatest cause of leopard decline.",
          },
        ]),
      },
      {
        name: "Malayan Tiger",
        locationId: 24,
        lifespan: "8 to 10 years in the wild; Up to 18 to 20 years in zoos.",
        diet: "Mainly hoofed animals, like deer",
        habitat: "Forests, swamps, scrubland.",
        range: "Peninsular Malaysia.",
        description: JSON.stringify([
          {
            title: "When Hunters Become The Hunted",
            content:
              "Tigers are at the apex of the food chain. These solitary hunters can handle animal prey up to a ton in weight. A healthy adult has the strength of 30 men! Sadly, man has turned the tables on them. Mercilessly poached to satisfy the insatiable demand for tiger parts, wild tigers are being hunted to extinction. In 2012 alone, tiger parts from at least 22 tigers were seized in Kedah. NGOs continue to report snares and illegal camp sites, even in protected areas.",
          },
          {
            title: "Tigers In Singapore",
            content:
              "The Malayan tiger used to roam the forests of Singapore in bygone era. When their habitats were converted to plantations around 1825, human-tiger encounters escalated. In 1850, tigers were reported to be claiming human lives daily - improbable given the low tiger numbers to start with. Seen as vermin, tigers were shot on sight. Shooters were rewarded with money. By the 1870s, tigers were all but gone. The last tiger in Singapore was shot in 1930 in Choa Chu Kang.",
          },
        ]),
        iucnStatus: "Critically Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "MYCAT",
            description:
              "Fewer than 300 Malayan tigers are left in the wild. Besides illegal poaching, habitat loss and human-tiger conflicts compound the problem. To involve and educate members of the public, the Malaysian Conservation Alliance for Tigers (MYCAT) launched the Citizen Action for Tigers (CAT) Walk.",
          },
          {
            title: "CAT Walk-ing",
            description:
              "CAT Walk-ers assist forest rangers in regular anti-poaching patrols of the Sungai Yu River Wildlife Corridor. Sungai Yu connects Taman Negara National Park and the Titiwangsa Mountains, two of the largest tiger habitats in Malaysia.",
          },
          {
            title: "Deterring Poachers",
            description:
              "Besides removing snares and baits, CAT Walk-ers report encroachment by trespassers and poaching. The CAT Walks have dramatically decreased the number of snares found, indicating the success of the initiative. More than 2,000 members of the public from 38 countries have walked over 5,270 km of the forest, disarming around 180 snares. A quarter of these volunteers are from Singapore.",
          },
          {
            title: "My Cat to Protect",
            description:
              "Five of our keepers have also participated in the 'Realm of the Tiger' programme, MYCAT's expanded programme for the zoo community. Inspired by their trip, they have been sharing their experience with guests to raise awareness of the tigers' plight. You, too, can help support tiger conservation",
          },
        ]),
      },
      {
        name: "Malayan Flying Fox",
        locationId: 3,
        lifespan: "15 years in the wild. Up to 30 years under human care",
        diet: "Pollen, nectar, flowers and fruit",
        habitat: "Tropical primary and secondary forests and swamps.",
        range: "Across much of Continental and Southeast Asia.",
        description: JSON.stringify([
          {
            title: "Big But Harmless",
            content:
              "With a wingspan of 1.5-1.7m, these are some of the largest bats in the world. At the Fragile Forest biodome, feel the breeze as they flap past you, sometimes missing you by inches. There's no cause for alarm - these frugivorous bats mean no harm. They're just probably in a hurry to get to the feeding platform. Landing on the tips of the branches decked out with juicy fruit by the keepers, they quickly fall into an upside-down position to feed, hanging on by the claws on their toes.",
          },
          {
            title: "Toeing The Line",
            content:
              "Their toe claws provide such a powerful grip they can hang on with one foot while feeding with the other! Slicing the rind with their teeth, they extract the fruit with their long tongue, which is also used to lap up nectar. The thumb claw is used as a hook to help them move along branches. Males also use it to settle turf wars. Highly territorial by nature, they communicate ownership by spreading their wings, growling, or making hostile noises.",
          },
          {
            title: "All in a (hot) day's work",
            content:
              "The flying foxes have huge eyes with keen eyesight to locate fruits and flowers at night. They can eat up to half of their body weight in fruit on a daily basis. When sated, they right themselves and do a “free-fall” take off to look for a roosting spot. They also turn the right side up in order to defecate. They rest head down, wings wrapped around their bodies. They do not have sweat glands. On hot days, they cool down by fanning their wings. When that doesn't work, they seek shade and then lick themselves all over - the evaporation of their saliva helps cool their bodies.",
          },
        ]),
        iucnStatus: "Near Threatened",
        iucnDescription: JSON.stringify([
          {
            title: "For The Love Of Durian",
            description:
              "Flying foxes are threatened by over-hunting and deforestation. They are hunted as exotic meat and also consumed as a traditional cure for asthma. Previously, it was thought that flying foxes eat up the flowers of the durian tree and many orchard owners set up nets to trap them. \n Studies using camera traps have confirmed that these bats are probably the most effective pollinators for durian trees. \n Pollen sticks to their fur as they feed on the nectar, and is transferred when they move off to feed on the flowers of another tree. If flying foxes were to go extinct one day, so might durians. That alone is reason enough to conserve them.",
          },
        ]),
      },
      {
        name: "Naked Mole Rat",
        locationId: 29,
        lifespan: "10 to 30 years, longer than any other rodent.",
        diet: "Underground parts of plants, especially succulent tubers.",
        habitat: "Burrows and tunnels in grassy semi-arid regions.",
        range: "East Africa, specifically Somalia, Ethiopia and Kenya.",
        description: JSON.stringify([
          {
            title: "Staying Cancer-Free",
            content:
              "While your average mouse lives for around four years, naked mole rats may survive till past their thirties. Scientists suspect such longevity, rarely seen in rodents, is linked to the naked moles' resistance to cancer. There have been no instances of cancer occurring naturally in the species. Their secret to staying cancer-free is a super sugar called high-molecular-mass Hyaluronan (HMM-HA). When secreted, HMM-HA prevents cells from overcrowding and forming tumours.",
          },
          {
            title: "A happy coincidence",
            content:
              "HMM-HA may have first evolved as an adaptation for animals that have to squeeze through tight, rocky tunnels underground. It helps make their skin stretchy - grab hold of one and you'll feel like their skin is slipping from your grasp. It may have been a happy coincidence that the HMM-HA also signals cells to stop them from becoming cancerous. Clinical use of the naked moles' HMM-HA will open up new possibilities for cancer prevention and life extension in humans.",
          },
          {
            title: "Fructose Instead Of Glucose",
            content:
              "The air the naked moles breathe is so thin it would kill humans in a heartbeat. By switching to fructose for fuel, naked moles can hold out for as long as 18 minutes in zero-oxygen conditions. Fructose, unlike glucose, does not need oxygen to create energy. The cells in the naked moles' vital organs contain proteins that transport fructose and required enzymes. This finding may translate into a way to aid humans suffering from an oxygen-depriving heart attack or stroke.",
          },
          {
            title: "Queen of the colony",
            content:
              "Naked mole rats are one of the only two mammalian species to live in structured social colonies. Each colony comprises 70 to 300 naked mole rats, led by the queen. She is larger than the others and the only one to breed. The queen often inspects the tunnels and chambers that make up her 'kingdom', biting and pushing her 'subjects' to remind them who's boss. For the queen is not born into her position: she earned it by fighting off the other females when the queen before her died. A queen's position is never secure and she must defend her title if she wants to stay in charge.",
          },
          {
            title: "Communal Living",
            content:
              "Naked mole rats live in complex underground burrow systems, with food storage, nest chambers, and toilets! Some run just under the surface of the ground, while others can go 2m deep. A colony's total tunnel length can add up to 4km, covering an area of up to six football fields! \n The naked moles are also the only cold-blooded mammals - they huddle together for warmth, or regulate their body temperature by moving between warmer and colder chambers in their underground home.",
          },
          {
            title: "Master Diggers",
            content:
              "Naked moles seem to do the majority of a year's digging just after the rainy season, when the normally hard ground is softened. Those at the 'frontline' break through the dirt with their incisors. They shut their nostrils and their lips close behind their front teeth, so they can dig without choking on the dirt. Workers behind them use their strong hind limbs to sweep the soil to a surface opening, where the dirt is kicked up onto the ground, forming a mole hill.",
          },
          {
            title: "One For All And All For One",
            content:
              "A colony cooperates for the common good of the group and that includes the sharing of food. If a food scout finds a tasty tuber, he or she carves a piece off with those powerful, ever-growing incisors and hurries back to the group, chirping and waving the morsel overhead. The other workers follow the scout's scent (they all roll in their own faeces so they share the same smell) to the tuber, which is then brought back, piece by piece, to the food chamber.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Wide Distribution",
            description:
              "The Naked mole Rat is listed as Least Concern in view of its wide distribution, it is relatively common, with no immediate major threats. However, continued population monitoring of this eusocial species is a necessary conservation measure.",
          },
        ]),
      },
      {
        name: "Panther Chameleon",
        locationId: 7,
        lifespan: "5 to 7 years.",
        diet: "Worms, also insects like crickets.",
        habitat: "Lowland scrub and forest.",
        range: "Endemic to Madagascar.",
        description: JSON.stringify([
          {
            title: "Those Eyes",
            content:
              "Panther chameleons are considered opportunistic hunters because they wait for prey to pass within range of their long tongues. Chameleons do not have ears but to make up for this, they have eyes that can rotate and focus separately to observe two different objects at the same time. This gives them a full 360-degree field of vision while staying completely still and camouflaged. In this way, chameleons can look out for predators as well as prey simultaneously. When prey comes within sight, they will train both eyes in the same direction - this gives them sharp stereoscopic vision and depth of perception, in preparation for the final strike.",
          },
          {
            title: "Within Firing Range",
            content:
              "Active during the day, it moves slowly through the branches to hunt its insect food by stealth. When it spots its next meal, the chameleon focuses on its victim with both eyes, then shoots out its long tongue to grasp the insect and pull it back into its large mouth. The tongue is very long and is fired from the mouth at great speed. This means that the chameleon can seize unsuspecting prey from some distance away. The muscular tongue and its mucus envelop the prey, pulling it to the mouth.",
          },
          {
            title: "Splayed Feet",
            content:
              "This arboreal species has feet that are so well adapted for grasping branches that it is difficult for it to walk across a flat surface. Its toes are clawed and arranged into groups of two and three on opposite sides of the foot. It rarely, if ever, needs to come to the ground and when it does, it walks with feet splayed. Life up in the trees is also made easier by the animal's prehensile tail, which acts as a fifth limb, wrapping around branches to help with climbing.",
          },
          {
            title: "Colours Switched By Crystals",
            content:
              "When a chameleon comes face-to-face with a rival, it rapidly inflates its body and changes colour in a show of dominance that is usually enough to decide a dispute. The colourful display may also be a way to impress potential mates. Just below a chameleon's skin is a layer of yellow pigments and very tiny crystals (nanocrystals). Chameleons are able to expand or contract the crystals, which interact with the yellow pigments to produce striking changes in skin colours.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Wide Distribution",
            description:
              "Listed as Least Concern as the species is widespread in northeastern Madagascar, and common in disturbed and degraded habitats.",
          },
        ]),
      },
      {
        name: "Proboscis Monkey",
        locationId: 30,
        lifespan: "13 years under human care.",
        diet: "Mainly leaves. Also non-sweet fruit and seeds.",
        habitat:
          "Mangrove forest along rivers and estuaries, swamps and lowland rainforest.",
        range: "Borneo",
        description: JSON.stringify([
          {
            title: "Big Noses, Big Tummies",
            content:
              "Their pendulous noses and pot-bellied stomachs may seem outlandish but are useful adaptations to their swamp surroundings. Their 'paunches' contain an array of bacteria, which help break down plant cellulose and deactivate the toxins in some of the leaves. The protruding nose of the males helps resonate their calls through the forest. The bigger the nose, the more attractive he is to females! It grows so big he has to push it aside while feeding.",
          },
          {
            title: "Good Swimmers",
            content:
              "Primarily arboreal, they are never more than 600 m from a river. They move through the trees using all four limbs and will leap out of the trees into the water. They are capable of swimming 20 m underwater. They may cross rivers by swimming if alone or they may cross by jumping from a tree on one bank to one on the other side at narrow points of the river if in a group. Webbing between their digits aids them in swimming.",
          },
          {
            title: "Picky Eaters",
            content:
              "Very few zoos have proboscis monkeys because of their special dietary needs. The monkeys are picky eaters - they eat leaves from certain plants only, and only shoots and young leaves. Our keepers provide the proboscis monkeys with 80kg of fresh leaves daily to pick and choose. The leaves are collected from three to four different plant species around the Zoo. For a balanced diet, 'toppings' such as primate pellets, corn, fruits and vegetables are added to the 'salad'.",
          },
        ]),
        iucnStatus: "Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Poster Boy",
            description:
              "Cyrano, our big-nosed dominant male, recently became the 6,000th species to be photographed under an effort by the National Geographic. The project was started to raise awareness of conservation issues by creating portraits of every animal under human care. It aims to complete 12,000 portraits.",
          },
        ]),
      },
      {
        name: "Pygmy Hippo",
        locationId: 31,
        lifespan: "Up to 43 years under human care.",
        diet: "Grasses, herbs, leaves, roots, ferns and fallen fruit.",
        habitat: "Near rivers and streams in lowland forests.",
        range: "Endemic to the Upper Guinea Forest of West Africa.",
        description: JSON.stringify([
          {
            title: "Feeding Quirks",
            content:
              "To strip a tree of its young shoots, wild pygmy hippos would start at a twig's base and pull it through the mouth like a leafy kebab, shaking the head throughout. They'd also stand on their hind legs to feed on ferns growing within palms. In Liberia, they are known to be partial to a small, vine-like herb known as 'Deewinkon'. Sweet potato leaves, okra, cassava and rice seedlings from farms at the forest edge are eaten. In Sierra Leone, they also take fish from traps.",
          },
          {
            title: "The Dung Trail",
            content:
              "As an adaptation to their highly-fibrous diet, pygmy hippos have a four-chambered stomach with the first three responsible for microbial breakdown of plant matter. Both males and females use their dung to mark out their territory. Their droppings are scattered through vigorous wagging of their tail during defecation or heaped alongside forest trails. They follow these well-defined trails or tunnel-like paths through the forest and swamp vegetation.",
          },
          {
            title: "Pink Sunscreen",
            content:
              "Pygmy hippos have greyish-black skin, which is smooth and thin to help them stay cool in the humid rainforest. But this also means they dehydrate quickly in the sun. On hot days, they survive the heat by staying in the water. They have no sweat glands but their skin secretes a pink fluid that looks like beads of sweat. This mucous fluid is sometimes called “blood sweat” because of its colour. It works like built-in sunscreen to protect their sensitive skin, giving them a shiny, wet, appearance.",
          },
        ]),
        iucnStatus: "Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Healthy Hippos",
            description:
              "To maintain a healthy population of pygmy hippos under human care, there is a need to enhance and diversify their gene pool, so as to ensure healthy and viable offspring are produced. To date, we have sent more than 24 pygmy hippos to zoos around the world to participate in global breeding programmes.",
          },
        ]),
      },
      {
        name: "Rabbits",
        locationId: 6,
        lifespan: "Up to 12 years.",
        diet: "Grass and leaves. Vegetables and fruit.",
        habitat: "From forest to tundra. Meadows to swamps.",
        range:
          "Wild origins in Europe and Africa. Pet rabbits found worldwide.",
        description: JSON.stringify([
          {
            title: "Popular And Social Pets",
            content:
              "To maintain a healthy population of pygmy hippos under human care, there is a need to enhance and diversify their gene pool, so as to ensure healthy and viable offspring are produced. To date, we have sent more than 24 pygmy hippos to zoos around the world to participate in global breeding programmes.",
          },
          {
            title: "Lagomorphs, Not Rodents",
            content:
              "Though often thought to be related to mice, hamsters and other rodents, rabbits belong to a separate group of animals known as lagomorphs. Their apparent likeness to rodents arises from adaptation to a common lifestyle and diet. Like rodents, rabbits are gnawing animals. Similarly, their teeth continue to grow throughout life and are worn down by chewing. But while rodents have only two incisors, rabbits have double that number. Besides these four sharp incisors (two upper and two lower), rabbits also have an extra set of 'peg teeth', which are tiny incisors located immediately behind the main incisors.",
          },
          {
            title: "Droppings For Dinner",
            content:
              "Designed to thrive on grass and leaves in the wild, which are relatively slow to break down, rabbits rely on a double digestion process to get the most nutrients out of their 'poor quality' diet. Caecal pellets - a special type of soft droppings - are produced in the caecum of the rabbits' digestive tractand usually re-ingested even as they are excreted. Resembling tightly-bunched grapes, these pungent, mucus-coated pellets contain beneficial caecal bacteria. The second time round, pea-sized faecal pellets of undigested fibre are passed out. Rabbits use these dry, easily-crumbled droppings to scent-mark their territory.",
          },
          {
            title: "Pet Bunnies Are For Life",
            content:
              "Rabbits make wonderful pets. They can be trained to respond to commands and to use a litter box. However, being prey animals, they are easily startled and should be handled gently. Rabbits are known for their ability to breed. A female can have around six litters every year, averaging five to six young per litter. Rabbits should never be obtained on impulse nor should they be given as gifts. Adopting a rabbit is always a wiser and kinder choice over buying or breeding. But, think hard before you take that cute bunny home. Rabbits can live up to 12 years and having one as a pet means having to care for it over that length of time.",
          },
          {
            title: "Groom For Health",
            content:
              "Rabbits can clean themselves and do not need baths. You need to brush your rabbit twice a week and trim its nails when they grow too long. Rabbits may swallow hair when they groom themselves, especially during the moulting stage. The swallowed hair forms hair balls, blocking the digestive system as rabbits are unable to cough them out. Regular brushing is important to prevent the problem. Longhaired breeds need to be groomed daily and shorthaired breeds, once every few days.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Abundant",
            description: "Widespread and abundant across its geographic range.",
          },
        ]),
      },
      {
        name: "Red-Ruffed Lemur",
        locationId: 32,
        lifespan: "15 to 20 years in the wild. Up to 36 years in human care.",
        diet: "Mainly fruits, also leaves, seeds and nectar.",
        habitat: "Deciduous tropical forests.",
        range: "Northeastern Madagascar. Masoala Peninsula.",
        description: JSON.stringify([
          {
            title: "Flaming Red",
            content:
              "With rich rust-red fur offsetting a jet-black face, these are easily among the most beautiful of primates. Under the sun, its brilliant coat looks like it is on fire. A small patch of white fur on its neck contrasts with the rest of its flame-red coat.",
          },
        ]),
        iucnStatus: "Critically Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Threatened By Human Activities",
            description:
              "The only place to see this endangered primate in the wild is on Madagascar's Masoala Peninsula. Political upheaval in 2009 led to a rapid upsurge of illegal logging, which had a serious impact on Masoala Nature Reserve, the only protected area in the lemurs' limited range. Red-ruffed lemurs are also trapped and eaten as food. Efforts are now underway to reestablish a protected area for these critically endangered lemurs.",
          },
        ]),
      },
      {
        name: "Douc Langur",
        locationId: 5,
        lifespan: "Up to 30 years under human care.",
        diet: "Mainly leaves, also unripe fruits, seeds and flowers.",
        habitat: "Tropical rainforest and monsoon forest.",
        range: "East- Central Laos, North-Central Vietnam, Northern Cambodia.",
        description: JSON.stringify([
          {
            title: "Costumed Apes",
            content:
              "Douc (pronounced “dook”), is a Vietnamese word of ancient origin, thought to mean 'monkey'. Though a bit of a misnomer as they are monkeys, not apes, douc langurs are popularly known as 'costumed apes' because of their extravagantly-coloured coats, bearing red, black, white, grey and gold highlights. Juveniles have a lighter body colouration than adults and a darker-coloured face. Their coat colour darkens as they grow older, as their face colour lightens.",
          },
          {
            title: "Play Face And Other Signals",
            content:
              "Douc langurs are playful animals, juveniles more so than adults. You'd see jumping, running, climbing, hanging and swinging, while pulling, wrestling, mouthing, touching and chasing a partner: all in a day's play. Like many other primates, doucs have a specific “play face\\\" - mouth open and teeth partially showing. This may be used to initiate grooming or play. A stare with raised eyebrows is a threat and the other party often backs down with a submissive grimace.",
          },
          {
            title: "Closely Inspected",
            content:
              "Douc langurs are closely related to the proboscis monkeys and snub-nosed monkeys. Similarly, doucs have a leaf-rich diet as well as a multi-chambered stomach that helps them to break down leaf cellulose. They also eat flowers, unripe fruits and their seeds. Doucs are very particular when foraging for food - nothing is ingested without scrutiny. Ripe fruit is discarded, as are old leaves. Each morning, the keepers make their rounds to gather a variety of fresh leaves to ensure that our douc langurs get their best greens. Doucs don't drink water - they can derive the water they need from their food.",
          },
        ]),
        iucnStatus: "Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Languishing In The Wild",
            description:
              "The douc langurs' habitat suffered intense disruption during the Vietnam war, in areas where defoliants were used. Their current decline is due to deforestation, hunting for food and use in traditional medicines. They have also been captured for use in medical research and are sold as exotic pets.",
          },
        ]),
      },
      {
        name: "Regal Horned Lizard",
        locationId: 7,
        lifespan: "5 to 8 years.",
        diet: "Ants, also spiders, sowbugs.",
        habitat: "Deserts, hot, dry environments.",
        range:
          "Northwestern Mexico. Extending into Southwestern United States.",
        description: JSON.stringify([
          {
            title: "Crown Of Thorns",
            content:
              "This lizard wears a 'crown' of thorny horns made up of four large horns at the back of its head and six smaller ones on the temples. Another distinguishing characteristic is the row of keeled scales on its abdomen. When threatened, the lizard may try to divert its enemy's attention with head-bobbing, push-ups, and nodding. If these fail, it rolls over, displaying its pale belly and splaying its short, white legs out stiffly. Some believe it's only playing dead. Others think this action focuses a predator's attention on the lizard's spiky fringes - which look rather like sharp, serrated teeth - and advertises its unappetising spininess.",
          },
          {
            title: "Eye-Popping Surprise",
            content:
              "As a last resort, these reptiles will squirt a surprise spray of blood from their eyes. These lizards have evolved the ability to restrict blood flow from the head. The resultant pressure ruptures small blood vessels near their eyeballs and the ocular sinus, a pouch below the eye, swells as it fills with blood. A sudden surge of pressure then releases a spurt of blood that may leap 1-2 metres. This bloodbath works best when delivered directly into the mouth, rather than the eyes or nose. That's why the lizards aim for their enemy's mouth, or wait till the last second, when their predator has its jaws around them, before squirting!",
          },
          {
            title: "Getting Antsy",
            content:
              "The lizards probably get the foul-tasting chemical in their blood from their diet of ants, especially venomous harvester ants. Snapping their sticky tongue out like a rubber band, they lap the insects up and catapult them to the back of their throat. There, the ants are coated in thick mucus, before they're swallowed whole. Thus, the lizards are protected from the ants' stings, allowing them to exploit an oft-avoided food source. They need a big stomach to hold lots of ants, which leads to their stocky build and lack of speed. Their diet could have been the driving force behind the evolution of their many bizarre defence mechanisms.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Wide Distribution",
            description:
              "Listed as Least Concern in view of its wide distribution, presumed large population, and because it is unlikely to be declining fast enough to qualify for listing in a more threatened category.",
          },
        ]),
      },
      {
        name: "Ring-Tailed Lemur",
        locationId: 5,
        lifespan:
          "16 to 18 years old in the wild, up to 33 years under human care.",
        diet: "Fruit and other plant parts, insects and other small animals.",
        habitat: "Continuous canopy forest, brush and scrub forests.",
        range: "Southern, southwestern and south-central Madagascar.",
        description: JSON.stringify([
          {
            title: "Social Life",
            content:
              "In the wild, ring-tails live in matriarchal social groups of up to 30 individuals. Females stay with their troop their whole lives. Hierarchy is typically established in their youth through play-fighting. Males are completely dominated by the females - even the lowliest female is superior to the highest-ranked male.",
          },
          {
            title: "Stink Wars And Stink Flirts",
            content:
              "During mating season, the males contest for female attention through 'stink fights'. Coating their entire tail with smelly secretions from their scent glands, they wave it high in the air, each trying to outstink rival males. Males, especially dominant ones also waft their 'scented' tail at females to attract them. \n Males move between troops every 2-5 years. Many leave their parents' troops as subadults to join other groups but reality bites. They must fight their way to become one of the top males - lowly-ranked males get smacked around a lot by the females.",
          },
          {
            title: "Gift Of The Gab",
            content:
              "Low-ranking males often end up hanging around the periphery of their troops to avoid being picked on by the others. But these outliers risk getting picked off by predators easily. \n Studies show that these males use their gift of the gab to keep within the good graces of their group. They rely on two sounds: a moan to stay in touch with the group in general and a “hmm” sound to signal friendliness towards and maintain ties with more tolerant individuals in the troop.",
          },
          {
            title: "Language Of Lemurs",
            content:
              "Though all the males studied made the two calls, low-ranking ones were more likely to go “hmm”. By targeting preferred individuals in the group, these misfits tread the tightrope between getting pushed around by the troop and being pounced on by predators. \n The results highlight how meaningful and nuanced the ring-tails' social behaviour is. Studying the language of lemurs may give us clues as to how humans' distant relatives may have interacted to keep their groups together.",
          },
        ]),
        iucnStatus: "Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Deforestation",
            description:
              "Many rainforest animals are threatened by deforestation, habitat degradation, and the illegal wildlife trade.",
          },
        ]),
      },
      {
        name: "Roti Snake-Necked Turtle",
        locationId: 7,
        lifespan: "Unknown for this species.",
        diet: "Amphibians, fish, carrion. Insects, molluscs, worms.",
        habitat: "Shallow freshwater lakes. Also wetlands and rice fields.",
        range: "Roti Island, Indonesia.",
        description: JSON.stringify([
          {
            title: "Use Of A Snake-Like Neck",
            content:
              "The snake-necked turtles are an ancient group of turtles found in Australia, New Guinea, East Timor and Roti Island in Indonesia. More than 70 million years ago, these turtles diverged from all other living things in their evolutionary path. This took place even before the dinosaurs went extinct! \n Snake-necked turtles are named for their strikingly long neck, which cannot be withdrawn into their shell. Instead, these turtles tuck their head and neck in sideways towards their body when threatened. \n The Roti Island snake-neck also emits a foul smell to deter would-be predators. This species uses its long neck to ambush unsuspecting prey.",
          },
          {
            title: "Downfall Of The Unique",
            content:
              "Recently described as a unique species, the Roti Island snake-neck occurs in three separate populations solely on the tiny island of Roti. In the five years following its description, excessive harvesting almost completely depleted wild numbers within all 70 km <sup>2</sup> of its available habitat. A distinct endemic species with a restricted range, it commands sky-high prices in the pet trade. Unfortunately, due to unsustainable exploitation, it is now considered commercially extinct by Indonesian traders. Despite strict trade sanctions - it is listed in CITES Appendix I, with zero export quota - the species remains at high risk of extinction.",
          },
        ]),
        iucnStatus: "Critically Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Conserving the Roti Island snake-necks",
            description:
              "We house an assurance colony at Singapore Zoo to safeguard the Roti snake-necked turtle, the only one for the species in Asia. The turtles under our care were sent to us from breeding programmes in the United States and Austria in 2015. \n After years of planning, 13 of these turtles finally made it back to their native country of Indonesia in September 2021, in a joint effort led by The Ministry of Environment and Forestry Republic of Indonesia (MOEF) and Balai Besar KSDA Nusa Tenggara Timur (Bbksda Ntt) Province with the support of Mandai Nature, Singapore Zoo, and Wildlife Conservation Society - Indonesia Program (WCS-IP) WCS Indonesia. \n It is the first repatriation of its kind for the species and marks a significant milestone in the ongoing conservation efforts for turtles.",
          },
        ]),
      },
      {
        name: "Sun Bear",
        locationId: 25,
        lifespan: "Up to 36 years under human care.",
        diet: "Termites, ants, insects and their larvae, honey.",
        habitat: "Dense lowland, tropical forests.",
        range: "Southern China to Eastern India and as far south as Indonesia.",
        description: JSON.stringify([
          {
            title: "An insectivorous diet",
            content:
              "Our sun bears are fed ant eggs, silkworm larvae, meat and plants. This diet closely replicates the kind of food they'd find in the wild. \n Wild sun bears climb high up in the treetops to search of insects or sap. Their strong jaw muscles, large canines and sickle-like claws help them to crush the bark of hardwood trees to get at burrowing insects or stingless bees nesting within. Using their long tongue, they can extract insects and honey from even the tiniest crevices.",
          },
          {
            title: "Receiving The Best Of Care",
            content:
              "To stimulate the bears mentally and physically, keepers come up with food enrichment ideas, like hiding sunflower seeds under logs and rocks to encourage foraging behaviour. The bears' favourite is the honey-drizzled coconut stuffed with sugarcane - they make short work of it with their powerful bite. \n In case their sweet tooth causes any decay, our bears are conditioned for voluntary oral inspection. This allows our vets to give dental care with minimal stress all round.",
          },
          {
            title: "Small But Feisty",
            content:
              "Though it's the smallest bear, the sun bear is one of the fiercest animals found in the Southeast Asian forest. It is known to attack unprovoked and to battle even tigers and large pythons when threatened. Its short, dark-brown coat is unusually dense for a bear living in the tropics. If a predator latches on during a struggle, the sun bear can turn in its loose skin and return the bite. This bear is also nimble on its feet and can move very quickly when it wants to.",
          },
        ]),
        iucnStatus: "Vulnerable",
        iucnDescription: JSON.stringify([
          {
            title: "Free The Bears",
            description:
              "Cute and cuddly, sun bear cubs are often captured for the illegal pet trade. Many a mother sun bear has been killed trying to protect her cubs from poachers. Trade on social media further compounds the issue.",
          },
        ]),
      },
      {
        name: "Tree Kangaroo",
        locationId: 1,
        lifespan: "23 years under human care.",
        diet: "Silkwood leaves, fruits, cereals, flowers and grass.",
        habitat: "Dense tropical rainforests.",
        range: "Papua New Guinea.",
        description: JSON.stringify([
          {
            title: "Back Up The Trees",
            content:
              'A long time ago, kangaroos evolved from tree-dwelling marsupials, developing adaptations for living on the ground. Tree kangaroos broke off from their land cousins by going back to arboreal life. Their forelimbs grew muscular, their feet broadened and their claws curved to help them climb. They usually take little hopping steps and are unable to move more than two \\"kangaroo hops\\" at a go. However, they can leap up to 15m from tree to ground and can even walk backwards!',
          },
          {
            title: "Pouch Protection",
            content:
              "Females have a forward-opening pouch with four teats. After a pregnancy of 21-38 days, a mother prepares for the arrival of her baby roo by giving her pouch a thorough lick. Her newborn - the size of a jellybean - climbs into the safety of her pouch all by itself and clamps onto one of the teats. That's where it stays and grows for the next 10-12 months. A joey that's left the pouch will still return frequently for months to nurse, but only from its 'own' teat.",
          },
          {
            title: "The Kangaroo That Lives On Trees",
            content:
              "Meet Makaia, the miracle kangaroo. Makaia means “magic” in Tok Pisin, a Papua New Guinean language. When he was but 47 days old, Makaia was orphaned. To save his life, his keepers at Adelaide Zoo placed him in the pouch of a yellow-footed rock wallaby. The cross-fostering was a world first and made news globally. When Makaia outgrew his foster mum's pouch at three-and-a-half months, he was hand-raised by his keeper. He's the only tree kangaroo to have had three mummies!",
          },
          {
            title: "Gentle Mummy's Boy",
            content:
              "Makaia arrived with a teddy bear in tow - a gift from his keepers in Australia for company on the long trip. Rather timid at first, he'd climb up high to survey his surroundings from vantage points. He's since settled in well. \n Unlike most animals that feed with their mouth when handfed, Makaia receives food with his forepaw before popping it in his mouth - quite the gentleman! \n As for the teddy, Makaia's said bye to it. Even thunder and lightning faze him no longer!",
          },
          {
            title: "Match-Made",
            content:
              "Our 'mummy's boy' is a big boy now and has now become a father himself. The World Association of Zoos and Aquarium's (WAZA) Global Species Management Plan (GSMP) has “match-made” Makaia with Nupela, who hailed from Taronga Zoo.The first Goodfellow's tree kangaroo to be born there in over 20 years, Nupela also enjoyed 'celebrity' status back in Sydney. Like Makaia, she arrived here in 2016. It seems she's something of a foodie too - a perfect fit for Singapore!",
          },
        ]),
        iucnStatus: "Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Halved In Half A Century",
            description:
              "In the last 50 years, their wild population has gone down 50% due to hunting for food by locals and habitat loss to logging. There are only 50 individuals under human care globally. In 2012, a GSMP was set up by WAZA to ensure the survival of this species.",
          },
          {
            title: "Managed breeding",
            description:
              "Such programmes enable zoos from across countries and continents to coordinate the breeding of threatened species in a scientific manner. Demographic and genetic sustainability of the population is the goal. Various zoos in Australia, Europe, North America, Japan and Singapore are party to this GSMP.",
          },
          {
            title: "Matchmade for conservation",
            description:
              "The pairing of Makaia and Nupela is part of global efforts to save the species. We have seen success in our breeding efforts, and we have contributed to the GSMP by sending the offspring to zoos in Japan and France. By matchmaking suitable individuals from participating zoos, inbreeding is minimised and the global genetic pool under human care is enhanced.",
          },
          {
            title: "Assurance Populations",
            description:
              "The population in zoos also acts as an assurance colony in the case of a catastrophic decline in the wild. Once the threats in the wild are mitigated, reintroduction of suitable individuals from the assurance colony will be explored. Together with conservation efforts in the animals' natural habitats, these breeding programmes help to ensure their continued survival in the face of threats like hunting and habitat destruction.",
          },
        ]),
      },
      {
        name: "Linnaeus's Two-Toed Sloth",
        locationId: 3,
        lifespan: "Average of 28 years under human care.",
        diet: "Leaves, small twigs & fruits.",
        habitat: "Canopy layer of tropical rainforests.",
        range: "Northern part of South America.",
        description: JSON.stringify([
          {
            title: "Topsy-Turvy Lifestyle",
            content:
              "Whether they are sleeping, eating, mating, or giving birth, sloths carry out most of their activities hanging upside-down from tree branches. To accommodate their topsy-turvy lifestyle, the internal placement of organs like the heart, liver, and spleen is different from what is usually seen in mammals. Even their hair grows in the opposite direction, curving from stomach to back, probably so that rainwater can flow away from their bodies. Each strand of hair has a groove where algae collects. This gives the sloths an overall greenish hue that camouflages them from predators.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Protecting Their Homes",
            description:
              "The Amazon rainforest is the only place in the world where the two-toed sloths are found in the wild. Its destruction means the sloths and other animals of the forest will be impacted. Several organisations are currently working to keep tracts of rainforest safe from logging and other human activities. Fortunately, two-toed sloths live in a number of these protected areas. You, too, can do your part to protect animals like the sloth by making a conscious choice as a consumer to only buy forest-friendly products.",
          },
        ]),
      },
      {
        name: "White Rhino",
        locationId: 11,
        lifespan:
          "15 to 20 years in the wild. 40 to 50 years under human care.",
        diet: "Grass.",
        habitat: "Savannah grassland.",
        range: "Africa, central and southern regions.",
        description: JSON.stringify([
          {
            title: "Grass-Grazing Giants",
            content:
              "A huge animal that feeds exclusively on grass, the white rhino has a wide mouth shaped for 'mowing' short grass. Its square lips set it apart from the hook-lipped black rhino. \n Like horses and tapirs, rhinos have a simple stomach. Bacteria in their digestive tract help them digest the 60-80kg of vegetation they eat a day. \n Our rhinos are fed pellets and leaves on top of grass. Keepers scatter these on the ground to suit their grazing habits. Fruits are given as treats.",
          },
          {
            title: "Mud Spas",
            content:
              "Rhinos wallow in mud to cool off, so keepers make sure the big mud pool in the exhibit is always filled. Dried mud also acts as sunscreen for the rhinos. \n In the wild, tickbirds pick out ticks and other parasites hiding among the creases in the rhino's skin. Local birds, however, go as far as to peck on our rhinos' flesh - a problem also faced by other zoos. Our keepers check their charges daily for any open wounds, applying medicine and rubbing mud over for added protection.",
          },
          {
            title: "Horny business",
            content:
              "White rhinos mark their territory using communal dung piles (middens). Males step on and kick their faeces around to warn off other males. Males can also tell if females are ready to mate with a whiff of the midden. \n Courtship disputes are settled with a clash of horns. Sadly, these horns are no defence against poachers' guns. Alike to a mass of compacted hair, rhino horns are strangely prized for medicinal and ornamental uses and worth more than gold on the black market.",
          },
        ]),
        iucnStatus: "Near Threatened",
        iucnDescription: JSON.stringify([
          {
            title: "Inter-Zoo Breeding Efforts",
            description:
              "Uhura, our first rhino baby, went to Australia's Monarto Zoo in Dec 2000. Her younger siblings have gone to zoos in Asia and USA. Inter-zoo breeding programmes diversify the gene pool and increase rhino numbers. Uhura is now a proud mother herself!",
          },
          {
            title: "Pushed To The Brink",
            description:
              "There are two subspecies of the white rhino - the northern and the southern. The population of the northern was stable up to the late 1990s. In less than a decade, they have been wiped out by rampant poaching. The last few in a Czech zoo were sent to Kenya. They are the northern's last hope.",
          },
          {
            title: "The 'Hornest' Truth",
            description:
              "The southern was also once on the brink of extinction. By the end of the 19th century, there were just 20-50 left. Conservation efforts grew numbers in the wild to 20,000 by 2010. But illegal poaching, too, is on the rise. By 2017, these numbers have declined to 18,000. The 'hornest' truth is: you buy, they die. Let's stamp out the rhino horn trade together.",
          },
        ]),
      },
      {
        name: "White Tiger",
        locationId: 24,
        lifespan: "8 to 10 years in the wild; Up to 18 to 20 years in zoos.",
        diet: "Mainly hoofed animals, like deer",
        habitat: "Dense jungles and mangrove swamps.",
        range: "India, Bangladesh and Nepal.",
        description: JSON.stringify([
          {
            title: "Descendants Of Mohan",
            content:
              "The first white tiger cub was caught in Rewa, India and brought back to the Maharajah's palace. He was named Mohan. He later produced a litter of ten cubs with an orange-coloured tigress. All of them were orange. When Mohan went on to mate with a female from this litter, they produced four white cubs. This started the breeding of white tigers under human care. All white tigers in human care today are descended from Mohan. Our sibling duo, Pasha and Keysa, came from Indonesia's Maharani Zoo.",
          },
          {
            title: "Not Easy Being White",
            content:
              "White tigers are not albinos or a different sub-species of tigers. Their white coat, brown stripes and blue eyes are the result of a mutated gene. Both white and orange-coloured tiger cubs can be found in the same litter. \n Tigers kill by stealth, creeping up on their prey before pouncing on them. Their colour makes white tigers less efficient as predators. They have not been sighted in the wild for a long time now.",
          },
          {
            title: "Tigers In Training",
            content:
              "Our vets conduct routine medical checks on all animals. In the past, our tigers have had to be sedated before the vets could do their job. These days, our keepers and our vets work to condition our tigers for health checks. This reduces stress for both our tigers and staff. Targets are introduced along with food to focus the tigers' attention while the necessary checks are done. The tigers are fed tasty morsels of meat by a keeper while a vet takes blood from its tail.",
          },
        ]),
        iucnStatus: "Critically Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "MYCAT",
            description:
              "Fewer than 300 Malayan tigers are left in the wild. Besides illegal poaching, habitat loss and human-tiger conflicts compound the problem. To involve and educate members of the public, the Malaysian Conservation Alliance for Tigers (MYCAT) launched the Citizen Action for Tigers (CAT) Walk.",
          },
          {
            title: "CAT Walk-ing",
            description:
              "CAT Walk-ers assist forest rangers in regular anti-poaching patrols of the Sungai Yu River Wildlife Corridor. Sungai Yu connects Taman Negara National Park and the Titiwangsa Mountains, two of the largest tiger habitats in Malaysia.",
          },
          {
            title: "Deterring Poachers",
            description:
              "Besides removing snares and baits, CAT Walk-ers report encroachment by trespassers and poaching. The CAT Walks have dramatically decreased the number of snares found, indicating the success of the initiative. More than 2,000 members of the public from 38 countries have walked over 5,270 km of the forest, disarming around 180 snares. A quarter of these volunteers are from Singapore.",
          },
          {
            title: "My Cat to Protect",
            description:
              "Five of our keepers have also participated in the 'Realm of the Tiger' programme, MYCAT's expanded programme for the zoo community. Inspired by their trip, they have been sharing their experience with guests to raise awareness of the tigers' plight. You, too, can help support tiger conservation",
          },
        ]),
      },
      {
        name: "White-Faced Saki Monkey",
        locationId: 3,
        lifespan: "15 years on average in the wild.",
        diet: "Leaves, seeds, grains, nuts, as well as fruit, flowers and insects.",
        habitat: "Upland and lowland rainforests.",
        range:
          "Brazil, as well as French Guiana, Guyana, Suriname and Venezuela.",
        description: JSON.stringify([
          {
            title: "Flying Monkeys",
            content:
              "Sakis move through the forest on all fours and by leaping. Their long bushy tail, which is about the length of their body, is not prehensile but helps them keep their balance. When escaping from danger, they can make downward leaps covering close to 10m, a feat which has earned them the nickname “flying monkeys”. Wholly arboreal, the sakis seldom, if ever, come down to the ground, though they may descend to the lower limbs of trees or even to bushes in search of food.",
          },
          {
            title: "Sexually dimorphic",
            content:
              "Male sakis are black except for the white 'face mask' that surrounds their face and the species is named for their striking appearance. Females are mostly brownish-grey, with two vertical stripes from their eyes to the corners of their mouth. When they're young, males and females look similar. Males start to gradually don the 'white mask' at 3 to 4 years of age.",
          },
          {
            title: "Creatures of habit",
            content:
              "Sakis are partial towards seeds, spending 95-99% of total consumption time on breaking them open and eating them. To drink water, sakis soak their hands in water and lick them. Equally peculiar is their bedding down posture - they curl up on branches like a cat! They typically spend the night in larger trees in the canopy that provide good cover.",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Presence in a number of protected areas",
            description:
              "Listed as Least Concern as throughout the large range, the habitat remains largely intact and there is little human pressure outside of city centres.",
          },
        ]),
      },
      {
        name: "Grevy's Zebra",
        locationId: 11,
        lifespan: "12 to 13 years in the wild. Double this under human care.",
        diet: "Mainly grass. Also herbs, leaves and twigs.",
        habitat: "Grasslands, shrublands, open savannahs.",
        range: "Northern Kenya and parts of southern Ethiopia.",
        description: JSON.stringify([
          {
            title: "The 'king' of zebras",
            content:
              "The largest of all zebras, the Grevy's zebra is named after former President of France, Jules Grévy, who received a zebra as a gift from the King of Abyssinia (present-day Ethiopia) in 1882. A French zoologist discovered it was distinct species in itself and named it after President Grevy. \n Stallions of this species mark and maintain territories using middens (dung piles). The Grevy's zebra is distinguished from other zebras by its round ears, white underbelly and the bullseye stripe pattern on its rump.",
          },
          {
            title: "The purpose of stripes",
            content:
              "Though none have been proven conclusively, several theories attempt to explain the zebra's stripes. The first states that stripes have an anti-predatory function by creating an “optical illusion”. The second points to a social role — each zebra is identifiable by its stripes and zebras with broader stripes receive more grooming. The third suggests the stripes help in thermoregulation and work as natural sunscreen. The last says they may protect against tsetse flies.",
          },
          {
            title: "Black on white, or white on black?",
            content:
              "Zebras are thought to have white coats and black stripes, drawn from observations that the underside of their belly and the inside of their legs are white. However, some zebras with genetic variations have a black coat with white stripes. Beneath their striped coat, zebras have black skin.",
          },
          {
            title: "Role in the ecosystem",
            content:
              "Zebras are the first to move in during grass succession. By clipping away old growth and stems, they encourage the growth of young shoots. This opens up grazing opportunities for other animals like the wildebeests and gazelles, which are more picky about their food. Zebra herds leave the grazing area during the dry season. Their trampling of the land stimulates grass growth and increases the quantity and quality of vegetation for animal herds coming after them.",
          },
        ]),
        iucnStatus: "Endangered",
        iucnDescription: JSON.stringify([
          {
            title: "Saving Grevy's Zebras",
            description:
              "Threatened by hunting and habitat destruction, there are only around 3,000 Grevy's zebras left in the wild. Our zebras are managed under the EAZA* Endangered Species Programme (EEP), which involves coordinated breeding efforts by participating zoos. Transfer of individuals between these zoos is based on genetic compatibility. We hope to eventually breed our zebras and contribute to the continued survival of the species.",
          },
        ]),
      },
      {
        name: "Cassowary",
        locationId: 1,
        lifespan:
          "About 50 to 60 years in expert care. \n Unknown in the wilderness.",
        diet: "Fruits of several hundred rainforest plants",
        habitat: "Tropical forests and wetlands.",
        range: "Across Northern Australia, New Guinea, and surrounding islands",
        description: JSON.stringify([
          {
            title: "Leave me alone.",
            content:
              "Cassowaries are solitary most of the year, living in loosely defined home ranges. If two males meet accidentally, they stretch, fluff up their feathers, and rumble at each other until one decides to leave. But if a male meets a female, she can usually make him run merely by stretching a little and staring quietly!",
          },
          {
            title: "Daddy day care.",
            content:
              "A male sits on his nest to incubate the eggs for up to 60 days. Once the brown-and-tan striped chicks hatch, he leads them to his regular feeding grounds, protecting them and teaching them the ways of the world. Youngsters stay with their father for up to 16 months, but usually 9 to 10 months, when he chases them off to live on their own so he can get ready to breed again. By this time, they are almost adult size and can certainly take care of themselves!",
          },
        ]),
        iucnStatus: "Least Concern",
        iucnDescription: JSON.stringify([
          {
            title: "Habitat largely protected by World Heritage listing",
            description:
              "Population size estimates suggest that the population size is actually larger than previously estimated, and threats are not having the impact on global populations as previously feared. This, combined with a large range means that the species is no longer considered to approach the threshold for Vulnerable under any criterion, and hence is now listed as Least Concern.",
          },
        ]),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("animals", null, {});
  },
};
