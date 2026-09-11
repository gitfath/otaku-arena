/* ============================================================
   BANQUE DE QUESTIONS OTAKU ARENA
   ------------------------------------------------------------
   AJOUTER UNE QUESTION : copie une ligne, modifie-la.
   FORMAT :
   {anime:"...",cat:"...",diff:"...",q:"...",
    a:["A","B","C","D"],ok:0,h:"...",emoji:"..."}
   - cat  : PERSONNAGE / COMBAT / TECHNIQUE / LORE / OPENING / MANGA / FILM / STUDIO
   - diff : GENIN / CHŪNIN / JŌNIN / KAGE / LÉGENDE
   - ok   : index (0-3) de la bonne réponse AVANT mélange
   ============================================================ */

const QUESTIONS = [

/* ================= NARUTO (1-25) ================= */
{anime:"Naruto",cat:"PERSONNAGE",diff:"GENIN",q:"Quel personnage possède le Sharingan et devient le rival principal de Naruto ?",a:["Sasuke Uchiha","Shikamaru Nara","Neji Hyuga","Kiba Inuzuka"],ok:0,h:"Dernier grand survivant du clan Uchiha dans l'équipe 7.",emoji:"👁️"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"GENIN",q:"Quel est le rêve de Naruto Uzumaki ?",a:["Devenir Hokage","Devenir Kazekage","Devenir Sannin","Devenir Anbu"],ok:0,h:"Il veut être reconnu par tout le village.",emoji:"🍥"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"GENIN",q:"Quel démon est scellé en Naruto ?",a:["Kyuubi","Shukaku","Matatabi","Isobu"],ok:0,h:"Le démon à neuf queues.",emoji:"🦊"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"GENIN",q:"Quel est le nom du meilleur ami de Naruto au sein de l'équipe 7 ?",a:["Sasuke Uchiha","Kiba Inuzuka","Shino Aburame","Choji Akimichi"],ok:0,h:"Il est le rival direct de Naruto.",emoji:"⚡"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"GENIN",q:"Quel est le nom de la fille de l'équipe 7 ?",a:["Sakura Haruno","Ino Yamanaka","Hinata Hyuga","Tenten"],ok:0,h:"Elle est amoureuse de Sasuke.",emoji:"🌸"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"GENIN",q:"Quel est le nom du père de Naruto ?",a:["Minato Namikaze","Hiruzen Sarutobi","Jiraiya","Tobirama Senju"],ok:0,h:"Le Quatrième Hokage, surnommé l'Éclair Jaune.",emoji:"⚡"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"GENIN",q:"Quel est le nom de la mère de Naruto ?",a:["Kushina Uzumaki","Tsunade","Mito Uzumaki","Yoshino Nara"],ok:0,h:"Elle vient du clan Uzumaki de Uzushio.",emoji:"🌺"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du frère d'Itachi Uchiha ?",a:["Sasuke","Shisui","Obito","Madara"],ok:0,h:"Il veut venger son clan.",emoji:"⚡"},
{anime:"Naruto",cat:"TECHNIQUE",diff:"CHŪNIN",q:"Quelle technique signature utilise Kakashi Hatake ?",a:["Chidori","Rasengan","Amaterasu","Susanoo"],ok:0,h:"Une technique de foudre qui traverse l'ennemi.",emoji:"⚡"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Qui est le mentor de l'équipe 7 ?",a:["Kakashi Hatake","Jiraiya","Asuma Sarutobi","Gai Maito"],ok:0,h:"Il est surnommé le ninja copieur.",emoji:"📖"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du Sannin qui entraîne Naruto ?",a:["Jiraiya","Orochimaru","Tsunade","Kakashi"],ok:0,h:"Il est le parrain de Naruto.",emoji:"🐸"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la Sannin médecin ?",a:["Tsunade","Sakura","Shizune","Kushina"],ok:0,h:"Elle devient la Cinquième Hokage.",emoji:"🐌"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du Sannin serpent ?",a:["Orochimaru","Jiraiya","Tsunade","Kabuto"],ok:0,h:"Il veut le Sharingan de Sasuke.",emoji:"🐍"},
{anime:"Naruto",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom du village caché de Konoha ?",a:["Konohagakure","Sunagakure","Kirigakure","Iwagakure"],ok:0,h:"Le village caché des feuilles.",emoji:"🍃"},
{anime:"Naruto",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom du village caché du sable ?",a:["Sunagakure","Konohagakure","Kirigakure","Kumogakure"],ok:0,h:"Le village de Gaara.",emoji:"🏜️"},
{anime:"Naruto",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom du village caché de la brume ?",a:["Kirigakure","Sunagakure","Konohagakure","Iwagakure"],ok:0,h:"Le village de Zabuza et Kisame.",emoji:"🌫️"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du Kazekage de Suna ?",a:["Gaara","Rasa","Kankuro","Temari"],ok:0,h:"Il devient Kazekage après la mort de son père.",emoji:"🏜️"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du frère de Gaara ?",a:["Kankuro","Shikamaru","Neji","Rock Lee"],ok:0,h:"Il utilise des marionnettes.",emoji:"🎭"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la sœur de Gaara ?",a:["Temari","Hinata","Ino","Tenten"],ok:0,h:"Elle utilise un éventail géant.",emoji:"🌪️"},
{anime:"Naruto",cat:"TECHNIQUE",diff:"KAGE",q:"Quelle technique utilise Itachi pour piéger l'esprit de ses adversaires ?",a:["Tsukuyomi","Amaterasu","Susanoo","Kamui"],ok:0,h:"Un genjutsu qui contrôle le temps dans l'illusion.",emoji:"🌙"},
{anime:"Naruto",cat:"TECHNIQUE",diff:"KAGE",q:"Quelle technique est associée aux flammes noires d'Itachi ?",a:["Amaterasu","Tsukuyomi","Susanoo","Chidori"],ok:0,h:"Des flammes qui ne s'éteignent jamais.",emoji:"🔥"},
{anime:"Naruto",cat:"TECHNIQUE",diff:"KAGE",q:"Quel est le nom du Mangekyou de Kakashi ?",a:["Kamui","Tsukuyomi","Amaterasu","Susanoo"],ok:0,h:"Il peut téléporter des objets dans une autre dimension.",emoji:"🌀"},
{anime:"Naruto",cat:"LORE",diff:"KAGE",q:"Qui a fondé l'Akatsuki avec Madara ?",a:["Obito","Pain","Konan","Zetsu"],ok:0,h:"Il se fait passer pour Madara.",emoji:"🌀"},
{anime:"Naruto",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du chef officiel de l'Akatsuki ?",a:["Pain","Itachi","Kisame","Tobi"],ok:0,h:"Il possède le Rinnegan.",emoji:"🌀"},
{anime:"Naruto",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du démon renard à neuf queues ?",a:["Kurama","Shukaku","Matatabi","Gyuki"],ok:0,h:"Il est scellé en Naruto.",emoji:"🦊"},

/* ================= ONE PIECE (26-50) ================= */
{anime:"One Piece",cat:"PERSONNAGE",diff:"GENIN",q:"Quel est le rêve de Monkey D. Luffy ?",a:["Devenir Roi des Pirates","Devenir Hokage","Devenir le meilleur épéiste","Trouver les Dragon Balls"],ok:0,h:"Il veut atteindre le sommet de la piraterie.",emoji:"🏴‍☠️"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"GENIN",q:"Quel fruit du démon a mangé Luffy ?",a:["Gomu Gomu no Mi","Mera Mera no Mi","Hito Hito no Mi","Gura Gura no Mi"],ok:0,h:"Un fruit qui rend le corps élastique.",emoji:"🍈"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"GENIN",q:"Quel est le rêve de Roronoa Zoro ?",a:["Devenir le meilleur épéiste du monde","Devenir Roi des Pirates","Trouver le One Piece","Devenir amiral"],ok:0,h:"Il veut battre Mihawk.",emoji:"⚔️"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"GENIN",q:"Quel est le rêve de Nami ?",a:["Dessiner une carte du monde entier","Trouver le One Piece","Devenir reine","Devenir pirate"],ok:0,h:"Elle est navigatrice.",emoji:"🗺️"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"GENIN",q:"Quel est le rêve de Sanji ?",a:["Trouver All Blue","Devenir Roi des Pirates","Devenir épéiste","Trouver le One Piece"],ok:0,h:"Une mer légendaire où tous les poissons se rassemblent.",emoji:"🍳"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du cuisinier de l'équipage ?",a:["Sanji","Usopp","Chopper","Franky"],ok:0,h:"Il rêve de trouver All Blue.",emoji:"🍳"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du médecin de l'équipage ?",a:["Tony Tony Chopper","Nami","Robin","Brook"],ok:0,h:"Un renne qui a mangé le Hito Hito no Mi.",emoji:"🦌"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du charpentier de l'équipage ?",a:["Franky","Usopp","Brook","Jinbe"],ok:0,h:"Un cyborg qui construit des navires.",emoji:"🔧"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du musicien squelette de l'équipage ?",a:["Brook","Franky","Chopper","Jinbe"],ok:0,h:"Il utilise une épée-canne.",emoji:"🎻"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du sniper de l'équipage ?",a:["Usopp","Sanji","Chopper","Franky"],ok:0,h:"Il est un menteur légendaire.",emoji:"🎯"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de l'archéologue de l'équipage ?",a:["Nico Robin","Nami","Vivi","Hancock"],ok:0,h:"Elle peut lire les Poneglyphes.",emoji:"📖"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de l'homme-poisson qui rejoint l'équipage ?",a:["Jinbe","Arlong","Hody","Fisher Tiger"],ok:0,h:"Ancien capitaine des Pirates du Soleil.",emoji:"🐋"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"JŌNIN",q:"Qui est le frère de sang de Luffy ?",a:["Portgas D. Ace","Sabo","Law","Kid"],ok:0,h:"Le commandant de la 2e flotte de Barbe Blanche.",emoji:"🔥"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du frère adoptif blond de Luffy ?",a:["Sabo","Ace","Law","Kid"],ok:0,h:"Il devient chef d'état-major de l'Armée Révolutionnaire.",emoji:"🎩"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le surnom de Mihawk ?",a:["Œil de Faucon","Dracule","Le Roi","Le Sabreur Fou"],ok:0,h:"Le plus grand épéiste du monde.",emoji:"🦅"},
{anime:"One Piece",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom du siècle oublié dans One Piece ?",a:["Le Siècle Perdu","Le Vide","L'Ère Ancienne","Le Grand Âge"],ok:0,h:"Une période dont l'histoire a été effacée.",emoji:"📜"},
{anime:"One Piece",cat:"COMBAT",diff:"JŌNIN",q:"Quel est le pouvoir du Gura Gura no Mi ?",a:["Créer des tremblements","Contrôler le feu","Devenir invisible","Créer de la glace"],ok:0,h:"Le fruit de Barbe Blanche.",emoji:"🌊"},
{anime:"One Piece",cat:"COMBAT",diff:"JŌNIN",q:"Quel est le pouvoir du Mera Mera no Mi ?",a:["Contrôler le feu","Créer des tremblements","Devenir invisible","Contrôler la glace"],ok:0,h:"Le fruit d'Ace puis de Sabo.",emoji:"🔥"},
{anime:"One Piece",cat:"COMBAT",diff:"JŌNIN",q:"Quel est le pouvoir du Hie Hie no Mi ?",a:["Contrôler la glace","Contrôler le feu","Créer des tremblements","Devenir invisible"],ok:0,h:"Le fruit d'Aokiji.",emoji:"❄️"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le surnom de Barbe Blanche ?",a:["L'Homme le Plus Proche du One Piece","Le Roi des Pirates","Le Plus Fort","L'Empereur Blanc"],ok:0,h:"Il était l'un des Quatre Empereurs.",emoji:"🌊"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du roi des pirates précédent ?",a:["Gol D. Roger","Barbe Blanche","Shanks","Rayleigh"],ok:0,h:"Celui qui a lancé la grande ère de la piraterie.",emoji:"👑"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du bras droit de Gol D. Roger ?",a:["Silvers Rayleigh","Shanks","Buggy","Crocus"],ok:0,h:"Le Seigneur des Ténèbres.",emoji:"🌑"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du père de Luffy ?",a:["Monkey D. Dragon","Gol D. Roger","Garp","Shanks"],ok:0,h:"Le chef de l'Armée Révolutionnaire.",emoji:"🐉"},
{anime:"One Piece",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du grand-père de Luffy ?",a:["Monkey D. Garp","Gol D. Roger","Rayleigh","Sengoku"],ok:0,h:"Un vice-amiral légendaire.",emoji:"👊"},
{anime:"One Piece",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du trésor ultime de One Piece ?",a:["Le One Piece","Le Rio Poneglyphe","Le Trésor de Roger","L'All Blue"],ok:0,h:"Le trésor laissé par Gol D. Roger.",emoji:"💎"},

/* ================= BLEACH (51-72) ================= */
{anime:"Bleach",cat:"COMBAT",diff:"CHŪNIN",q:"Quel est le nom du Zanpakutō d'Ichigo Kurosaki ?",a:["Zangetsu","Senbonzakura","Ryujin Jakka","Hyorinmaru"],ok:0,h:"Son nom est associé à un grand sabre.",emoji:"⚔️"},
{anime:"Bleach",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du capitaine de la 6e division ?",a:["Byakuya Kuchiki","Kenpachi Zaraki","Toshiro Hitsugaya","Sosuke Aizen"],ok:0,h:"Le noble du clan Kuchiki.",emoji:"🌸"},
{anime:"Bleach",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du shinigami qui donne ses pouvoirs à Ichigo ?",a:["Rukia Kuchiki","Orihime Inoue","Yoruichi","Soi Fon"],ok:0,h:"Elle est la sœur adoptive de Byakuya.",emoji:"🌙"},
{anime:"Bleach",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel capitaine est connu comme le plus jeune de l'histoire du Gotei 13 ?",a:["Toshiro Hitsugaya","Byakuya","Gin","Aizen"],ok:0,h:"Il maîtrise la glace.",emoji:"❄️"},
{anime:"Bleach",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du capitaine de la 11e division ?",a:["Kenpachi Zaraki","Byakuya","Toshiro","Komamura"],ok:0,h:"Il aime se battre plus que tout.",emoji:"⚔️"},
{anime:"Bleach",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du lieutenant de la 6e division ?",a:["Renji Abarai","Shuhei Hisagi","Izuru Kira","Momo Hinamori"],ok:0,h:"Il est amoureux de Rukia.",emoji:"🐍"},
{anime:"Bleach",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom du monde des âmes dans Bleach ?",a:["Soul Society","Hueco Mundo","Karakura","Las Noches"],ok:0,h:"Le monde des shinigamis.",emoji:"🏯"},
{anime:"Bleach",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom du monde des Hollows ?",a:["Hueco Mundo","Soul Society","Karakura","Las Noches"],ok:0,h:"Un désert blanc infini.",emoji:"🌵"},
{anime:"Bleach",cat:"COMBAT",diff:"KAGE",q:"Quelle est la forme finale du Zanpakutō d'Ichigo ?",a:["Bankai Tensa Zangetsu","Bankai Senbonzakura","Bankai Ryujin Jakka","Bankai Hyorinmaru"],ok:0,h:"Une épée noire plus fine et rapide.",emoji:"🖤"},
{anime:"Bleach",cat:"PERSONNAGE",diff:"KAGE",q:"Qui est le principal antagoniste de l'arc Soul Society ?",a:["Sosuke Aizen","Yhwach","Ulquiorra","Grimmjow"],ok:0,h:"Il trahit la Soul Society.",emoji:"🎭"},
{anime:"Bleach",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du capitaine de la 3e division avant Aizen ?",a:["Gin Ichimaru","Kaname Tosen","Shuhei Hisagi","Izuru Kira"],ok:0,h:"Il a les yeux plissés et un sourire ambigu.",emoji:"🐍"},
{anime:"Bleach",cat:"LORE",diff:"KAGE",q:"Quel est le nom des Hollows évolués ?",a:["Arrancars","Vasto Lorde","Menos","Adjuchas"],ok:0,h:"Des Hollows qui ont brisé leur masque.",emoji:"💀"},
{anime:"Bleach",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le numéro d'Ulquiorra parmi les Espada ?",a:["Quatre","Un","Deux","Trois"],ok:0,h:"Il est le Quatrième Espada.",emoji:"🦇"},
{anime:"Bleach",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du pouvoir final d'Ichigo ?",a:["Mugetsu","Tensa Zangetsu","Getsuga Tensho","Bankai Final"],ok:0,h:"Une technique qui sacrifie ses pouvoirs de shinigami.",emoji:"🌑"},
{anime:"Bleach",cat:"LORE",diff:"LÉGENDE",q:"Qui est Yhwach ?",a:["Le roi Quincy","Le roi des Hollows","Le capitaine-commandant","Le père d'Ichigo"],ok:0,h:"L'antagoniste final de Bleach.",emoji:"👑"},

/* ================= JUJUTSU KAISEN (73-90) ================= */
{anime:"Jujutsu Kaisen",cat:"TECHNIQUE",diff:"CHŪNIN",q:"Quelle technique appartient à Satoru Gojo ?",a:["Limitless","Bankai","Respiration de l'Eau","Nen"],ok:0,h:"Liée à sa maîtrise de l'infini.",emoji:"🔵"},
{anime:"Jujutsu Kaisen",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel fléau est scellé en Yuji Itadori ?",a:["Ryomen Sukuna","Mahito","Jogo","Hanami"],ok:0,h:"Le roi des fléaux à deux visages.",emoji:"👹"},
{anime:"Jujutsu Kaisen",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du meilleur ami de Yuji au lycée de jujutsu ?",a:["Megumi Fushiguro","Nobara Kugisaki","Maki Zenin","Panda"],ok:0,h:"Il manipule les shikigami.",emoji:"🐺"},
{anime:"Jujutsu Kaisen",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la fille du trio principal ?",a:["Nobara Kugisaki","Maki Zenin","Mai Zenin","Miwa"],ok:0,h:"Elle utilise un marteau et des clous.",emoji:"🔨"},
{anime:"Jujutsu Kaisen",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du principal du lycée de jujutsu ?",a:["Masamichi Yaga","Satoru Gojo","Suguru Geto","Nanami"],ok:0,h:"Il crée des poupées maudites.",emoji:"🧸"},
{anime:"Jujutsu Kaisen",cat:"TECHNIQUE",diff:"JŌNIN",q:"Quel est le nom de la technique de domaine de Gojo ?",a:["Domaine Infini","Domaine du Vide","Sanctuaire Maléfique","Jardin de Fleurs"],ok:0,h:"Un espace infini où l'adversaire ne peut jamais atteindre Gojo.",emoji:"🌌"},
{anime:"Jujutsu Kaisen",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom de l'école de jujutsu de Tokyo ?",a:["Tokyo Jujutsu High","Kyoto Jujutsu High","Jujutsu Academy","École de Sorcellerie"],ok:0,h:"L'école où étudie Yuji.",emoji:"🏫"},
{anime:"Jujutsu Kaisen",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du meilleur ami de Gojo au lycée ?",a:["Suguru Geto","Nanami","Yaga","Ijichi"],ok:0,h:"Il devient un antagoniste majeur.",emoji:"🐍"},
{anime:"Jujutsu Kaisen",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du frère de Maki Zenin ?",a:["Mai Zenin","Toge","Panda","Inumaki"],ok:0,h:"Elle utilise la construction.",emoji:"🌸"},
{anime:"Jujutsu Kaisen",cat:"PERSONNAGE",diff:"KAGE",q:"Qui est le principal antagoniste de la saison 1 ?",a:["Mahito","Sukuna","Kenjaku","Toji"],ok:0,h:"Un fléau qui manipule les âmes.",emoji:"🧵"},
{anime:"Jujutsu Kaisen",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du fléau des flammes dans JJK ?",a:["Jogo","Hanami","Mahito","Dagon"],ok:0,h:"Un volcan avec un caractère bouillant.",emoji:"🔥"},
{anime:"Jujutsu Kaisen",cat:"COMBAT",diff:"LÉGENDE",q:"Quel est le nom de la technique de Sukuna ?",a:["Sanctuaire Maléfique","Domaine Infini","Coupe et Découpe","Flamme Noire"],ok:0,h:"Son domaine apparaît comme un sanctuaire de crânes.",emoji:"⛩️"},
{anime:"Jujutsu Kaisen",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du cerveau qui manipule Geto ?",a:["Kenjaku","Sukuna","Mahito","Toji"],ok:0,h:"Un sorcier millénaire.",emoji:"🧠"},

/* ================= DEMON SLAYER (91-110) ================= */
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel souffle Tanjiro apprend-il en premier ?",a:["Souffle de l'Eau","Souffle de la Brume","Souffle de la Foudre","Souffle de la Pierre"],ok:0,h:"Son premier maître est Sakonji Urokodaki.",emoji:"🌊"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la sœur de Tanjiro ?",a:["Nezuko","Aoi","Kanao","Shinobu"],ok:0,h:"Elle est transformée en démon mais garde son humanité.",emoji:"🎀"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du frère de Tanjiro ?",a:["Takeo","Shigeru","Rokuta","Hanako"],ok:0,h:"Il est tué par Muzan.",emoji:"👦"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du compagnon au masque de sanglier ?",a:["Inosuke Hashibira","Zenitsu Agatsuma","Genya","Murata"],ok:0,h:"Il a été élevé par des sangliers.",emoji:"🐗"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du compagnon peureux mais puissant ?",a:["Zenitsu Agatsuma","Inosuke","Genya","Murata"],ok:0,h:"Il maîtrise le Souffle de la Foudre en dormant.",emoji:"⚡"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du Pilier de l'Eau ?",a:["Giyu Tomioka","Kyojuro Rengoku","Sanemi Shinazugawa","Obanai Iguro"],ok:0,h:"Le premier pourfendeur que Tanjiro rencontre.",emoji:"💧"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du Pilier de la Flamme ?",a:["Kyojuro Rengoku","Giyu Tomioka","Tengen Uzui","Muichiro Tokito"],ok:0,h:"Il meurt dans le film du train infini.",emoji:"🔥"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du Pilier du Son ?",a:["Tengen Uzui","Gyomei Himejima","Sanemi","Obanai"],ok:0,h:"Il est un ancien shinobi.",emoji:"💎"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du Pilier de la Brume ?",a:["Muichiro Tokito","Genya","Sanemi","Giyu"],ok:0,h:"Un jeune prodige distrait.",emoji:"🌫️"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du Pilier de la Roche ?",a:["Gyomei Himejima","Sanemi","Obanai","Tengen"],ok:0,h:"Le plus puissant des Piliers.",emoji:"🪨"},
{anime:"Demon Slayer",cat:"LORE",diff:"KAGE",q:"Quel est le nom du roi des démons ?",a:["Muzan Kibutsuji","Akaza","Doma","Kokushibo"],ok:0,h:"Le créateur de tous les démons.",emoji:"🩸"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom de la lune supérieure numéro 3 ?",a:["Akaza","Doma","Kokushibo","Gyokko"],ok:0,h:"Un démon obsédé par la force.",emoji:"👊"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom de la lune supérieure numéro 2 ?",a:["Doma","Akaza","Kokushibo","Gyutaro"],ok:0,h:"Un démon qui se prétend religieux.",emoji:"❄️"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom de la lune supérieure numéro 1 ?",a:["Kokushibo","Akaza","Doma","Gyutaro"],ok:0,h:"Un ancien Pourfendeur devenu démon.",emoji:"🌙"},
{anime:"Demon Slayer",cat:"COMBAT",diff:"KAGE",q:"Quel est le nom de la 12e forme du Souffle de l'Eau ?",a:["Calme Absolu","Dragon de l'Eau","Vague Furieuse","Cascade"],ok:0,h:"La technique ultime de Giyu.",emoji:"🐉"},
{anime:"Demon Slayer",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom de la danse héritée de la famille Kamado ?",a:["Hinokami Kagura","Danse du Feu","Rituel du Soleil","Kagura Sacré"],ok:0,h:"Une danse transmise de génération en génération.",emoji:"☀️"},
{anime:"Demon Slayer",cat:"LORE",diff:"LÉGENDE",q:"Quel est le souffle originel de tous les autres ?",a:["Souffle du Soleil","Souffle de l'Eau","Souffle de la Lune","Souffle du Feu"],ok:0,h:"Le souffle utilisé par Yoriichi.",emoji:"🌞"},
{anime:"Demon Slayer",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Quel est le nom du premier utilisateur du Souffle du Soleil ?",a:["Yoriichi Tsugikuni","Tanjiro","Kokushibo","Muzan"],ok:0,h:"Le frère jumeau de Kokushibo.",emoji:"🌞"},

/* ================= DRAGON BALL (111-130) ================= */
{anime:"Dragon Ball",cat:"COMBAT",diff:"JŌNIN",q:"Quel personnage est le rival de longue date de Son Goku ?",a:["Vegeta","Krillin","Gohan","Piccolo"],ok:0,h:"Prince Saiyan et guerrier fier.",emoji:"🔥"},
{anime:"Dragon Ball",cat:"PERSONNAGE",diff:"GENIN",q:"Quel est le nom du fils aîné de Goku ?",a:["Gohan","Goten","Trunks","Pan"],ok:0,h:"Il a un potentiel énorme mais préfère étudier.",emoji:"📚"},
{anime:"Dragon Ball",cat:"PERSONNAGE",diff:"GENIN",q:"Quel est le nom du deuxième fils de Goku ?",a:["Goten","Gohan","Trunks","Pan"],ok:0,h:"Il ressemble beaucoup à son père enfant.",emoji:"👦"},
{anime:"Dragon Ball",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du dieu de la destruction de l'univers 7 ?",a:["Beerus","Champa","Whis","Zeno"],ok:0,h:"Un dieu-chat qui adore la nourriture.",emoji:"🐱"},
{anime:"Dragon Ball",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de l'ange assistant de Beerus ?",a:["Whis","Vados","Zeno","Grand Prêtre"],ok:0,h:"Il est plus fort que Beerus.",emoji:"👼"},
{anime:"Dragon Ball",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du fils de Vegeta ?",a:["Trunks","Goten","Gohan","Pan"],ok:0,h:"Il vient du futur dans une saga.",emoji:"⚔️"},
{anime:"Dragon Ball",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la femme de Vegeta ?",a:["Bulma","Chichi","Videl","18"],ok:0,h:"La fille du docteur Brief.",emoji:"🔧"},
{anime:"Dragon Ball",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la femme de Goku ?",a:["Chichi","Bulma","Videl","18"],ok:0,h:"La fille du roi Ox-Satan.",emoji:"👩‍🌾"},
{anime:"Dragon Ball",cat:"TECHNIQUE",diff:"CHŪNIN",q:"Quelle est la technique signature de Goku ?",a:["Kamehameha","Final Flash","Special Beam Cannon","Destructo Disk"],ok:0,h:"Une vague d'énergie formée entre les mains.",emoji:"💙"},
{anime:"Dragon Ball",cat:"TECHNIQUE",diff:"CHŪNIN",q:"Quelle est la technique signature de Vegeta ?",a:["Final Flash","Kamehameha","Special Beam Cannon","Destructo Disk"],ok:0,h:"Une attaque jaune dévastatrice.",emoji:"⚡"},
{anime:"Dragon Ball",cat:"LORE",diff:"JŌNIN",q:"Combien de boules de cristal existe-t-il sur Terre ?",a:["7","5","9","3"],ok:0,h:"Un chiffre porte-bonheur.",emoji:"🔮"},
{anime:"Dragon Ball",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom de la planète d'origine de Piccolo ?",a:["Namek","Vegeta","Freezer","Sadala"],ok:0,h:"La planète des Nameks.",emoji:"🪐"},
{anime:"Dragon Ball",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom du tyran qui détruit la planète Vegeta ?",a:["Freezer","Cell","Buu","Broly"],ok:0,h:"L'empereur de l'univers.",emoji:"🧊"},
{anime:"Dragon Ball",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du bio-androïde parfait ?",a:["Cell","Freezer","Buu","Broly"],ok:0,h:"Il absorbe les androïdes 17 et 18.",emoji:"🟢"},
{anime:"Dragon Ball",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du majin rose ?",a:["Buu","Cell","Freezer","Broly"],ok:0,h:"Une créature magique et imprévisible.",emoji:"🍬"},
{anime:"Dragon Ball",cat:"LORE",diff:"KAGE",q:"Quel est le nom de la planète d'origine des Saiyans ?",a:["Vegeta","Namek","Freezer","Sadala"],ok:0,h:"Elle porte le nom du prince.",emoji:"🪐"},
{anime:"Dragon Ball",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Qui est le premier Super Saiyan légendaire ?",a:["Yamoshi","Broly","Goku","Vegeta"],ok:0,h:"Un Saiyan ancien mentionné dans le lore.",emoji:"⭐"},
{anime:"Dragon Ball",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du dieu des dieux dans Dragon Ball Super ?",a:["Zeno","Beerus","Whis","Grand Prêtre"],ok:0,h:"Le roi de tout.",emoji:"👑"},

/* ================= ATTACK ON TITAN (131-148) ================= */
{anime:"Attack on Titan",cat:"LORE",diff:"JŌNIN",q:"Comment s'appelle la ville fortifiée où Eren vit au début ?",a:["Shiganshina","Yorknew","Marineford","Karakura"],ok:0,h:"Le district est au sud du Mur Maria.",emoji:"🧱"},
{anime:"Attack on Titan",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du meilleur ami d'Eren ?",a:["Armin Arlert","Jean Kirstein","Connie Springer","Sasha Blouse"],ok:0,h:"Un stratège brillant mais peu sûr de lui.",emoji:"📖"},
{anime:"Attack on Titan",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la fille adoptive des Ackerman ?",a:["Mikasa Ackerman","Annie Leonhart","Historia Reiss","Sasha Blouse"],ok:0,h:"Elle protège Eren depuis l'enfance.",emoji:"🧣"},
{anime:"Attack on Titan",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du commandant du Bataillon d'Exploration ?",a:["Erwin Smith","Levi","Hange","Pixis"],ok:0,h:"Il sacrifie son bras pour l'humanité.",emoji:"👨‍✈️"},
{anime:"Attack on Titan",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du soldat le plus fort de l'humanité ?",a:["Levi Ackerman","Erwin Smith","Mikasa","Eren"],ok:0,h:"Surnommé le Nettoyeur.",emoji:"🗡️"},
{anime:"Attack on Titan",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la scientifique du Bataillon ?",a:["Hange Zoë","Sasha","Annie","Historia"],ok:0,h:"Elle est fascinée par les Titans.",emoji:"🔬"},
{anime:"Attack on Titan",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom du bataillon d'exploration ?",a:["Survey Corps","Military Police","Garrison","Trainee Corps"],ok:0,h:"Ceux qui explorent au-delà des murs.",emoji:"🪽"},
{anime:"Attack on Titan",cat:"LORE",diff:"JŌNIN",q:"Combien de murs protègent l'humanité ?",a:["3","2","4","1"],ok:0,h:"Maria, Rose et Sina.",emoji:"🧱"},
{anime:"Attack on Titan",cat:"PERSONNAGE",diff:"KAGE",q:"Qui est le Titan Colossal ?",a:["Bertholdt Hoover","Reiner Braun","Eren Yeager","Annie Leonhart"],ok:0,h:"Un titan gigantesque qui apparaît à Shiganshina.",emoji:"🔥"},
{anime:"Attack on Titan",cat:"PERSONNAGE",diff:"KAGE",q:"Qui est le Titan Cuirassé ?",a:["Reiner Braun","Bertholdt","Eren","Annie"],ok:0,h:"Un titan blindé.",emoji:"🛡️"},
{anime:"Attack on Titan",cat:"PERSONNAGE",diff:"KAGE",q:"Qui est le Titan Féminin ?",a:["Annie Leonhart","Mikasa","Historia","Sasha"],ok:0,h:"Elle a un cri qui attire les titans.",emoji:"♀️"},
{anime:"Attack on Titan",cat:"LORE",diff:"KAGE",q:"Quel est le nom du peuple d'Eren ?",a:["Eldiens","Mahr","Ackerman","Titans"],ok:0,h:"Un peuple opprimé depuis des siècles.",emoji:"⚔️"},
{anime:"Attack on Titan",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du pouvoir des Titans fondateurs ?",a:["Le Cri","Le Rugissement","La Fondation","L'Appel"],ok:0,h:"Un pouvoir qui contrôle tous les Titans.",emoji:"👑"},
{anime:"Attack on Titan",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Quel est le nom du fondateur des Titans ?",a:["Ymir Fritz","Eren Yeager","Grisha","Karl Fritz"],ok:0,h:"La première à avoir le pouvoir des Titans.",emoji:"👑"},
{anime:"Attack on Titan",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du pays ennemi d'Eldia ?",a:["Mahr","Paradis","Sina","Rose"],ok:0,h:"Une nation militarisée.",emoji:"🏭"},

/* ================= HUNTER X HUNTER (149-165) ================= */
{anime:"Hunter x Hunter",cat:"LORE",diff:"KAGE",q:"Quel est le nom du système de pouvoir central de Hunter x Hunter ?",a:["Nen","Ki","Chakra","Reiatsu"],ok:0,h:"Il permet de manipuler l'aura.",emoji:"✨"},
{anime:"Hunter x Hunter",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le rêve de Gon Freecss ?",a:["Trouver son père","Devenir Hunter","Devenir Hokage","Trouver le One Piece"],ok:0,h:"Son père est un Hunter légendaire.",emoji:"🎣"},
{anime:"Hunter x Hunter",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du meilleur ami de Gon ?",a:["Killua Zoldyck","Kurapika","Leorio","Hisoka"],ok:0,h:"Un assassin en fuite.",emoji:"⚡"},
{anime:"Hunter x Hunter",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le rêve de Leorio ?",a:["Devenir médecin","Devenir Hunter","Venger son clan","Trouver son père"],ok:0,h:"Il veut soigner les pauvres gratuitement.",emoji:"🩺"},
{anime:"Hunter x Hunter",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le rêve de Kurapika ?",a:["Venger son clan","Devenir Hunter","Trouver son père","Devenir médecin"],ok:0,h:"Son clan a été massacré pour ses yeux écarlates.",emoji:"👁️"},
{anime:"Hunter x Hunter",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le type de Nen de Killua ?",a:["Transformation","Émission","Matérialisation","Spécialisation"],ok:0,h:"Il transforme son aura en électricité.",emoji:"⚡"},
{anime:"Hunter x Hunter",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le type de Nen de Gon ?",a:["Renforcement","Émission","Transformation","Manipulation"],ok:0,h:"Il augmente la puissance de son corps.",emoji:"💪"},
{anime:"Hunter x Hunter",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le type de Nen de Kurapika ?",a:["Matérialisation","Renforcement","Émission","Transformation"],ok:0,h:"Il matérialise des chaînes.",emoji:"⛓️"},
{anime:"Hunter x Hunter",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du clown obsédé par Gon ?",a:["Hisoka","Illumi","Chrollo","Feitan"],ok:0,h:"Un magicien qui aime les combats.",emoji:"🃏"},
{anime:"Hunter x Hunter",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du frère aîné de Killua ?",a:["Illumi","Milluki","Kalluto","Silva"],ok:0,h:"Il est un assassin redoutable.",emoji:"🪡"},
{anime:"Hunter x Hunter",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du père de Killua ?",a:["Silva Zoldyck","Zeno","Illumi","Kikyo"],ok:0,h:"Le chef de la famille Zoldyck.",emoji:"⚡"},
{anime:"Hunter x Hunter",cat:"LORE",diff:"KAGE",q:"Quel est le nom de la brigade de voleurs la plus dangereuse ?",a:["La Brigade Fantôme","L'Araignée","Le Cirque","Les Zoldyck"],ok:0,h:"Aussi appelée Genei Ryodan.",emoji:"🕷️"},
{anime:"Hunter x Hunter",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du chef de la Brigade Fantôme ?",a:["Chrollo Lucilfer","Hisoka","Feitan","Nobunaga"],ok:0,h:"Il vole les pouvoirs des autres.",emoji:"📖"},
{anime:"Hunter x Hunter",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom de l'arc où Gon affronte Neferpitou ?",a:["Arc Chimera Ant","Arc Hunter Exam","Arc Yorknew","Arc Greed Island"],ok:0,h:"Le plus long arc de la série.",emoji:"🐜"},
{anime:"Hunter x Hunter",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Quel est le nom du roi des Chimera Ants ?",a:["Meruem","Neferpitou","Shaiapouf","Menthuthuyoupi"],ok:0,h:"Il devient humain à la fin de sa vie.",emoji:"👑"},

/* ================= DEATH NOTE (166-180) ================= */
{anime:"Death Note",cat:"LORE",diff:"KAGE",q:"Quel shinigami est associé au Death Note de Light ?",a:["Ryuk","Rem","Sidoh","Jealous"],ok:0,h:"Il adore les pommes.",emoji:"🍎"},
{anime:"Death Note",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le pseudonyme de L ?",a:["L Lawliet","Near","Mello","Kira"],ok:0,h:"Un détective excentrique.",emoji:"🍰"},
{anime:"Death Note",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de l'alter ego de Light ?",a:["Kira","L","Near","Mello"],ok:0,h:"Le nom que lui donne le public.",emoji:"⚖️"},
{anime:"Death Note",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du père de Light ?",a:["Soichiro Yagami","L","Near","Matsuda"],ok:0,h:"Le chef de la police.",emoji:"👮"},
{anime:"Death Note",cat:"LORE",diff:"JŌNIN",q:"Quelle règle empêche Light de tuer L au début ?",a:["Il faut connaître le vrai nom","Il faut voir le visage","Il faut toucher la personne","Il faut un sacrifice"],ok:0,h:"Le Death Note exige le vrai nom.",emoji:"📓"},
{anime:"Death Note",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du second Kira ?",a:["Misa Amane","Near","Mello","Takada"],ok:0,h:"Elle est amoureuse de Light.",emoji:"💖"},
{anime:"Death Note",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du shinigami qui accompagne Misa ?",a:["Rem","Ryuk","Sidoh","Jealous"],ok:0,h:"Il est prêt à mourir pour Misa.",emoji:"💀"},
{anime:"Death Note",cat:"LORE",diff:"JŌNIN",q:"Que se passe-t-il si un shinigami sauve une vie humaine ?",a:["Il meurt","Il perd ses pouvoirs","Il devient humain","Il perd son Death Note"],ok:0,h:"Une règle tragique du Death Note.",emoji:"💀"},
{anime:"Death Note",cat:"PERSONNAGE",diff:"KAGE",q:"Qui succède à L après sa mort ?",a:["Near","Mello","Matt","Aizawa"],ok:0,h:"Un enfant détective qui travaille avec la SPK.",emoji:"🎭"},
{anime:"Death Note",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du second successeur de L ?",a:["Mello","Near","Matt","Aizawa"],ok:0,h:"Il travaille avec la mafia.",emoji:"🍫"},
{anime:"Death Note",cat:"LORE",diff:"LÉGENDE",q:"Que se passe-t-il si on utilise le Death Note sans connaître le visage ?",a:["Ça ne fonctionne pas","Ça tue quand même","Ça tue l'utilisateur","Ça tue le shinigami"],ok:0,h:"Le visage ET le nom sont nécessaires.",emoji:"❓"},
{anime:"Death Note",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du monde des shinigamis ?",a:["Le Monde des Shinigamis","Soul Society","Hueco Mundo","L'Enfer"],ok:0,h:"Un monde désolé et vide.",emoji:"💀"},

/* ================= MY HERO ACADEMIA (181-195) ================= */
{anime:"My Hero Academia",cat:"PERSONNAGE",diff:"JŌNIN",q:"Qui transmet One For All à Izuku ?",a:["All Might","Endeavor","Hawks","Aizawa"],ok:0,h:"Symbole de la paix.",emoji:"💥"},
{anime:"My Hero Academia",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du rival principal d'Izuku ?",a:["Katsuki Bakugo","Shoto Todoroki","Tenya Iida","Ochaco Uraraka"],ok:0,h:"Un garçon explosif au caractère difficile.",emoji:"💣"},
{anime:"My Hero Academia",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la fille qui contrôle la gravité ?",a:["Ochaco Uraraka","Momo Yaoyorozu","Tsuyu Asui","Mina Ashido"],ok:0,h:"Elle veut devenir héro pour aider ses parents.",emoji:"🌸"},
{anime:"My Hero Academia",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du garçon qui contrôle la glace et le feu ?",a:["Shoto Todoroki","Bakugo","Iida","Kirishima"],ok:0,h:"Il est le fils d'Endeavor.",emoji:"❄️"},
{anime:"My Hero Academia",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du garçon qui peut créer des objets ?",a:["Momo Yaoyorozu","Uraraka","Tsuyu","Mina"],ok:0,h:"Elle a besoin de connaître la composition.",emoji:"🔧"},
{anime:"My Hero Academia",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du professeur principal de la classe 1-A ?",a:["Shota Aizawa","All Might","Present Mic","Midnight"],ok:0,h:"Il peut annuler les alters.",emoji:"😴"},
{anime:"My Hero Academia",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom de l'académie de héros du manga ?",a:["U.A. High","Shiketsu","Ketsubutsu","Seiai"],ok:0,h:"L'école la plus prestigieuse du Japon.",emoji:"🏫"},
{anime:"My Hero Academia",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le vrai nom d'All Might ?",a:["Toshinori Yagi","Enji Todoroki","Shota Aizawa","Hizashi Yamada"],ok:0,h:"Son nom civil.",emoji:"💪"},
{anime:"My Hero Academia",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le vrai nom d'Endeavor ?",a:["Enji Todoroki","Shoto","Toshinori","Dabi"],ok:0,h:"Le père de Shoto.",emoji:"🔥"},
{anime:"My Hero Academia",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du principal antagoniste ?",a:["All For One","Tomura Shigaraki","Dabi","Stain"],ok:0,h:"Il peut voler les alters.",emoji:"🎭"},
{anime:"My Hero Academia",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le vrai nom de Tomura Shigaraki ?",a:["Tenko Shimura","Toya Todoroki","Kai Chisaki","Jin Bubaigawara"],ok:0,h:"Le petit-fils de Nana Shimura.",emoji:"✋"},
{anime:"My Hero Academia",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le vrai nom de Dabi ?",a:["Toya Todoroki","Tenko Shimura","Kai Chisaki","Jin"],ok:0,h:"Le fils aîné d'Endeavor.",emoji:"🔥"},
{anime:"My Hero Academia",cat:"LORE",diff:"LÉGENDE",q:"Combien de porteurs ont précédé Izuku pour One For All ?",a:["8","5","10","3"],ok:0,h:"Izuku est le 9e porteur.",emoji:"🌟"},
{anime:"My Hero Academia",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du frère d'All For One ?",a:["Yoichi Shigaraki","Tenko","Nana","Toshinori"],ok:0,h:"Le premier porteur de One For All.",emoji:"👤"},

/* ================= ONE PUNCH MAN (196-210) ================= */
{anime:"One Punch Man",cat:"PERSONNAGE",diff:"KAGE",q:"Quel héros gagne en un seul coup ?",a:["Saitama","Genos","Garou","King"],ok:0,h:"Sa routine d'entraînement est légendaire.",emoji:"👊"},
{anime:"One Punch Man",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du disciple cyborg de Saitama ?",a:["Genos","Speed-o'-Sound Sonic","Mumen Rider","King"],ok:0,h:"Un cyborg qui veut devenir plus fort.",emoji:"🤖"},
{anime:"One Punch Man",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du héros classé S qui a peur de tout ?",a:["King","Zombieman","Flashy Flash","Atomic Samurai"],ok:0,h:"Il est célèbre malgré lui.",emoji:"👑"},
{anime:"One Punch Man",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du héros en armure de gorille ?",a:["Metal Knight","Drive Knight","Bofoi","Child Emperor"],ok:0,h:"Il construit des robots.",emoji:"🤖"},
{anime:"One Punch Man",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom de l'association des héros ?",a:["Hero Association","Hero Agency","Hero Guild","Justice League"],ok:0,h:"Elle classe les héros de C à S.",emoji:"🏢"},
{anime:"One Punch Man",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du principal antagoniste de la saison 2 ?",a:["Garou","Boros","Deep Sea King","Mosquito Girl"],ok:0,h:"Un ancien disciple de Bang qui veut devenir un monstre.",emoji:"🐺"},
{anime:"One Punch Man",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom de l'antagoniste alien de la saison 1 ?",a:["Boros","Garou","Deep Sea King","Carnage Kabuto"],ok:0,h:"Le chef des Pirates de l'Espace.",emoji:"👽"},
{anime:"One Punch Man",cat:"LORE",diff:"LÉGENDE",q:"Quel est le secret de la puissance de Saitama ?",a:["100 pompes, 100 abdos, 100 squats, 10 km de course","Un sérum secret","Un pouvoir divin","Un entraînement secret de Bang"],ok:0,h:"Une routine quotidienne simple mais extrême.",emoji:"💪"},

/* ================= FULLMETAL ALCHEMIST (211-225) ================= */
{anime:"Fullmetal Alchemist",cat:"LORE",diff:"KAGE",q:"Quel principe régit l'alchimie dans FMA ?",a:["Échange équivalent","Loi du chakra","Nen absolu","Règle des Titans"],ok:0,h:"Rien ne se crée sans contrepartie.",emoji:"⚗️"},
{anime:"Fullmetal Alchemist",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du frère d'Edward Elric ?",a:["Alphonse Elric","Winry Rockbell","Roy Mustang","Maes Hughes"],ok:0,h:"Son âme est scellée dans une armure.",emoji:"🛡️"},
{anime:"Fullmetal Alchemist",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Qu'est-ce qu'Edward a perdu en tentant de ressusciter sa mère ?",a:["Une jambe et un bras","Ses deux jambes","Ses deux bras","Un œil"],ok:0,h:"Il a payé un lourd tribut.",emoji:"🦾"},
{anime:"Fullmetal Alchemist",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de l'amie d'enfance d'Edward ?",a:["Winry Rockbell","Riza Hawkeye","Olivier Mira","Lan Fan"],ok:0,h:"Elle répare les automails.",emoji:"🔧"},
{anime:"Fullmetal Alchemist",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le surnom d'Edward Elric ?",a:["Fullmetal","Steel","Iron","Titan"],ok:0,h:"Le titre de son grade d'alchimiste d'État.",emoji:"⚙️"},
{anime:"Fullmetal Alchemist",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la Flamme de l'alchimie ?",a:["Roy Mustang","Maes Hughes","Alex Armstrong","Kimblee"],ok:0,h:"Il peut déclencher des explosions.",emoji:"🔥"},
{anime:"Fullmetal Alchemist",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du meilleur ami de Roy Mustang ?",a:["Maes Hughes","Alex Armstrong","Kimblee","Havoc"],ok:0,h:"Il adore parler de sa fille.",emoji:"📸"},
{anime:"Fullmetal Alchemist",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la femme d'armes de Roy Mustang ?",a:["Riza Hawkeye","Winry","Olivier","Lan Fan"],ok:0,h:"Elle a un tatouage dans le dos.",emoji:"🔫"},
{anime:"Fullmetal Alchemist",cat:"LORE",diff:"KAGE",q:"Quel est le nom de la pierre qui permet d'ignorer l'échange équivalent ?",a:["Pierre philosophale","Pierre d'âme","Pierre rouge","Pierre d'éther"],ok:0,h:"Elle est créée avec des vies humaines.",emoji:"💎"},
{anime:"Fullmetal Alchemist",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Qui est le principal antagoniste de FMA Brotherhood ?",a:["Père","Homunculus","Envy","Sloth"],ok:0,h:"Il a créé les sept péchés capitaux.",emoji:"👁️"},
{anime:"Fullmetal Alchemist",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Quel est le nom du homoncule de l'envie ?",a:["Envy","Greed","Wrath","Lust"],ok:0,h:"Il peut prendre n'importe quelle apparence.",emoji:"🐍"},
{anime:"Fullmetal Alchemist",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Quel est le nom du homoncule de l'orgueil ?",a:["Pride","Wrath","Envy","Sloth"],ok:0,h:"Il prend la forme d'un enfant.",emoji:"🌑"},

/* ================= TOKYO GHOUL (226-235) ================= */
{anime:"Tokyo Ghoul",cat:"LORE",diff:"KAGE",q:"Quel événement transforme Kaneki en hybride ?",a:["La transplantation d'organes de Rize","Une morsure de titan","Un pacte démoniaque","Un Bankai"],ok:0,h:"Une opération lui transmet des organes de goule.",emoji:"🩸"},
{anime:"Tokyo Ghoul",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la goule qui devient amie avec Kaneki ?",a:["Touka Kirishima","Rize Kamishiro","Hinami Fueguchi","Eto Yoshimura"],ok:0,h:"Elle travaille à Anteiku.",emoji:"🐰"},
{anime:"Tokyo Ghoul",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la goule qui donne ses organes à Kaneki ?",a:["Rize Kamishiro","Touka","Hinami","Eto"],ok:0,h:"Elle meurt écrasée par des poutres.",emoji:"💀"},
{anime:"Tokyo Ghoul",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom du café où travaille Kaneki ?",a:["Anteiku","Café Ren","Ghoul Café","Helter Skelter"],ok:0,h:"Un refuge pour les goules pacifiques.",emoji:"☕"},
{anime:"Tokyo Ghoul",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du principal antagoniste de Tokyo Ghoul ?",a:["Eto Yoshimura","Jason","Yamori","Arima"],ok:0,h:"Le chef des goules de l'Aogiri.",emoji:"🦉"},
{anime:"Tokyo Ghoul",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du masque de Kaneki ?",a:["Le masque de cuir","Le masque de lapin","Le masque de bouc","Le masque de squelette"],ok:0,h:"Un masque noir avec une fermeture éclair.",emoji:"🎭"},

/* ================= SWORD ART ONLINE (236-245) ================= */
{anime:"Sword Art Online",cat:"LORE",diff:"CHŪNIN",q:"Quel est le pseudonyme de Kirigaya Kazuto ?",a:["Kirito","Klein","Heathcliff","Sinon"],ok:0,h:"Son nom de joueur le plus connu.",emoji:"🎮"},
{anime:"Sword Art Online",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du premier jeu où les joueurs sont piégés ?",a:["Sword Art Online","Alfheim Online","Gun Gale Online","Underworld"],ok:0,h:"Le jeu qui a donné son titre à la série.",emoji:"⚔️"},
{anime:"Sword Art Online",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du créateur de SAO ?",a:["Akihiko Kayaba","Sugou Nobuyuki","Kikuoka Seijirou","Asuna"],ok:0,h:"Il se cache sous l'identité de Heathcliff.",emoji:"🎭"},
{anime:"Sword Art Online",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du personnage principal féminin ?",a:["Asuna Yuuki","Sinon","Leafa","Lisbeth"],ok:0,h:"Surnommée l'Éclair.",emoji:"⚡"},
{anime:"Sword Art Online",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom de la sœur de Kazuto ?",a:["Suguha","Asuna","Sinon","Lisbeth"],ok:0,h:"Elle joue à ALO sous le nom de Leafa.",emoji:"🧚"},
{anime:"Sword Art Online",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom de la snipeuse de GGO ?",a:["Sinon","Asuna","Leafa","Lisbeth"],ok:0,h:"Elle a peur des armes dans la vie réelle.",emoji:"🎯"},

/* ================= RE:ZERO (246-255) ================= */
{anime:"Re:Zero",cat:"TECHNIQUE",diff:"KAGE",q:"Quel est le pouvoir de Subaru Natsuki ?",a:["Retour par la mort","Contrôle du temps","Invocation d'esprits","Télépathie"],ok:0,h:"Chaque mort le ramène à un point de sauvegarde.",emoji:"⏰"},
{anime:"Re:Zero",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de l'héroïne principale de Re:Zero ?",a:["Emilia","Rem","Ram","Beatrice"],ok:0,h:"Une demi-elfe candidate au trône.",emoji:"🌸"},
{anime:"Re:Zero",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quelle servante a une sœur jumelle ?",a:["Rem","Ram","Beatrice","Frederica"],ok:0,h:"Elle est amoureuse de Subaru.",emoji:"💙"},
{anime:"Re:Zero",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du bibliothécaire de la bibliothèque interdite ?",a:["Beatrice","Puck","Roswaal","Echidna"],ok:0,h:"Un esprit qui attend « cette personne ».",emoji:"📚"},
{anime:"Re:Zero",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du démon qui possède Subaru dans l'arc 4 ?",a:["Satella","Echidna","Puck","Roswaal"],ok:0,h:"La sorcière de l'envie.",emoji:"🖤"},
{anime:"Re:Zero",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom de la sorcière de l'avidité ?",a:["Echidna","Satella","Minerva","Typhon"],ok:0,h:"Elle propose des contrats à Subaru.",emoji:"☕"},

/* ================= EVANGELION (256-265) ================= */
{anime:"Evangelion",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du protagoniste d'Evangelion ?",a:["Shinji Ikari","Asuka Langley","Rei Ayanami","Kaworu Nagisa"],ok:0,h:"Il pilote l'EVA-01.",emoji:"🤖"},
{anime:"Evangelion",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du père de Shinji ?",a:["Gendo Ikari","Kozo Fuyutsuki","Kaji","Toji"],ok:0,h:"Le commandant de la NERV.",emoji:"🕶️"},
{anime:"Evangelion",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la pilote allemande ?",a:["Asuka Langley","Rei Ayanami","Misato","Ritsuko"],ok:0,h:"Elle pilote l'EVA-02.",emoji:"🇩🇪"},
{anime:"Evangelion",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la pilote clone ?",a:["Rei Ayanami","Asuka","Misato","Ritsuko"],ok:0,h:"Elle est créée à partir de Yui Ikari.",emoji:"👤"},
{anime:"Evangelion",cat:"LORE",diff:"KAGE",q:"Que sont les Anges dans Evangelion ?",a:["Des créatures mystérieuses qui attaquent Tokyo-3","Des robots","Des extraterrestres amicaux","Des humains modifiés"],ok:0,h:"Ils apparaissent un par un.",emoji:"👼"},
{anime:"Evangelion",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du projet de complémentarité humaine ?",a:["Projet de Complémentarité Humaine","Projet EVA","Projet Seele","Projet Adam"],ok:0,h:"Le plan final de Seele.",emoji:"🌌"},
{anime:"Evangelion",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Quel est le nom du dernier ange ?",a:["Kaworu Nagisa","Sachiel","Ramiel","Zeruel"],ok:0,h:"Il se lie d'amitié avec Shinji.",emoji:"✨"},

/* ================= CODE GEASS (266-275) ================= */
{anime:"Code Geass",cat:"TECHNIQUE",diff:"JŌNIN",q:"Quel pouvoir Lelouch obtient-il ?",a:["Le Geass","Le Sharingan","Le Nen","L'Alchimie"],ok:0,h:"Un ordre absolu.",emoji:"👑"},
{anime:"Code Geass",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la sœur de Lelouch ?",a:["Nunnally","Euphemia","Kallen","C.C."],ok:0,h:"Elle est aveugle et paralysée.",emoji:"👧"},
{anime:"Code Geass",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de l'alter ego de Lelouch ?",a:["Zero","Kira","L","V"],ok:0,h:"Il porte un masque et une cape noire.",emoji:"🎭"},
{anime:"Code Geass",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la pilote du Guren ?",a:["Kallen Stadtfeld","C.C.","Euphemia","Nunnally"],ok:0,h:"Elle est mi-japonaise mi-britannienne.",emoji:"🔥"},
{anime:"Code Geass",cat:"LORE",diff:"KAGE",q:"Quel est le nom de l'empire auquel Lelouch s'oppose ?",a:["Britannia","Japan","Area 11","Knightmare"],ok:0,h:"Un empire qui a envahi le Japon.",emoji:"👑"},
{anime:"Code Geass",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du plan final de Lelouch ?",a:["Zero Requiem","Ragnarok","Geass Absolu","Projet V.V."],ok:0,h:"Un plan pour unir le monde contre lui.",emoji:"💀"},

/* ================= HAIKYUU (276-283) ================= */
{anime:"Haikyuu!!",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le poste de Shōyō Hinata ?",a:["Attaquant central","Passeur","Libéro","Pointu"],ok:0,h:"Petit mais il saute haut.",emoji:"🏐"},
{anime:"Haikyuu!!",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le poste de Tobio Kageyama ?",a:["Passeur","Attaquant","Libéro","Central"],ok:0,h:"Surnommé le Roi du terrain.",emoji:"👑"},
{anime:"Haikyuu!!",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom du lycée de Hinata et Kageyama ?",a:["Karasuno","Nekoma","Aoba Johsai","Shiratorizawa"],ok:0,h:"L'école des Corbeaux.",emoji:"🐦‍⬛"},
{anime:"Haikyuu!!",cat:"LORE",diff:"KAGE",q:"Quel est le nom du lycée rival principal de Karasuno ?",a:["Nekoma","Aoba Johsai","Shiratorizawa","Dateko"],ok:0,h:"Les Chats de Tokyo.",emoji:"🐱"},

/* ================= MOB PSYCHO (284-290) ================= */
{anime:"Mob Psycho 100",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le vrai nom de Mob ?",a:["Shigeo Kageyama","Reigen Arataka","Teruki Hanazawa","Dimple"],ok:0,h:"Un collégien surpuissant et effacé.",emoji:"💯"},
{anime:"Mob Psycho 100",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du mentor de Mob ?",a:["Reigen Arataka","Dimple","Teruki","Ritsu"],ok:0,h:"Un escroc charismatique mais bienveillant.",emoji:"🕴️"},
{anime:"Mob Psycho 100",cat:"LORE",diff:"JŌNIN",q:"Que se passe-t-il quand Mob atteint 100% ?",a:["Il explose de pouvoir","Il s'évanouit","Il meurt","Il devient gentil"],ok:0,h:"Une explosion émotionnelle.",emoji:"💥"},
{anime:"Mob Psycho 100",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du frère de Mob ?",a:["Ritsu Kageyama","Teruki Hanazawa","Dimple","Sho"],ok:0,h:"Il est jaloux du pouvoir de son frère.",emoji:"👦"},

/* ================= GINTAMA (291-297) ================= */
{anime:"Gintama",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du héros de Gintama ?",a:["Gintoki Sakata","Shinpachi Shimura","Kagura","Katsura Kotarō"],ok:0,h:"Samurai paresseux accro aux sucreries.",emoji:"🍡"},
{anime:"Gintama",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du jeune apprenti de Gintoki ?",a:["Shinpachi Shimura","Kagura","Katsura","Hijikata"],ok:0,h:"Il porte des lunettes.",emoji:"👓"},
{anime:"Gintama",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de l'extraterrestre de l'équipe ?",a:["Kagura","Shinpachi","Sadaharu","Elizabeth"],ok:0,h:"Une Yato au caractère explosif.",emoji:"🌂"},
{anime:"Gintama",cat:"LORE",diff:"KAGE",q:"Quel est le nom de l'ère où se déroule Gintama ?",a:["Edo","Meiji","Showa","Heisei"],ok:0,h:"Une ère alternative envahie par les Amanto.",emoji:"🏯"},

/* ================= VINLAND SAGA (298-304) ================= */
{anime:"Vinland Saga",cat:"LORE",diff:"KAGE",q:"Quel est le nom du père de Thorfinn ?",a:["Thors","Askeladd","Canute","Floki"],ok:0,h:"Ancien guerrier redoutable.",emoji:"🛡️"},
{anime:"Vinland Saga",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le rêve de Thorfinn adulte ?",a:["Créer un pays sans guerre","Devenir roi","Venger son père","Devenir marchand"],ok:0,h:"Un pays de paix, le Vinland.",emoji:"🌾"},
{anime:"Vinland Saga",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du chef mercenaire qui recueille Thorfinn ?",a:["Askeladd","Canute","Thors","Floki"],ok:0,h:"Un homme complexe et stratège.",emoji:"⚔️"},
{anime:"Vinland Saga",cat:"LORE",diff:"LÉGENDE",q:"Quel roi Thorfinn finit-il par servir ?",a:["Canute","Sweyn","Harald","Ethelred"],ok:0,h:"Un roi du Danemark et d'Angleterre.",emoji:"👑"},

/* ================= BERSERK (305-311) ================= */
{anime:"Berserk",cat:"COMBAT",diff:"LÉGENDE",q:"Quel est le nom de l'épée démesurée de Guts ?",a:["Le Dragonslayer","Zangetsu","Excalibur","Le Buster Sword"],ok:0,h:"Une lame qui écrase plus qu'elle ne tranche.",emoji:"🗡️"},
{anime:"Berserk",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la femme que Guts aime ?",a:["Casca","Farnese","Schierke","Slan"],ok:0,h:"Elle perd la raison après l'Éclipse.",emoji:"🌸"},
{anime:"Berserk",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du leader de la Troupe du Faucon ?",a:["Griffith","Guts","Casca","Judeau"],ok:0,h:"Il devient Femto après l'Éclipse.",emoji:"🦅"},
{anime:"Berserk",cat:"LORE",diff:"KAGE",q:"Quel événement transforme Griffith en démon ?",a:["L'Éclipse","La Bataille de Doldrey","Le Sacre","La Marque"],ok:0,h:"Un sacrifice rituel de ses compagnons.",emoji:"🌑"},

/* ================= CHAINSAW MAN (312-318) ================= */
{anime:"Chainsaw Man",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel démon est le compagnon de Denji ?",a:["Pochita","Kon","Kurama","Puck"],ok:0,h:"Un petit démon-tronçonneuse.",emoji:"🪚"},
{anime:"Chainsaw Man",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le rêve initial de Denji ?",a:["Manger du pain grillé et toucher des seins","Devenir Hokage","Trouver le One Piece","Devenir héros"],ok:0,h:"Un rêve trivial mais honnête.",emoji:"🍞"},
{anime:"Chainsaw Man",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du supérieur de Denji à la Sécurité Publique ?",a:["Makima","Himeno","Aki","Kobeni"],ok:0,h:"Une femme mystérieuse et manipulatrice.",emoji:"🔗"},
{anime:"Chainsaw Man",cat:"LORE",diff:"KAGE",q:"Quel démon est le plus craint de tous ?",a:["Le démon Tronçonneuse","Le démon de la Peur","Le démon des Ténèbres","Le démon de la Mort"],ok:0,h:"Denji fusionne avec lui.",emoji:"⚙️"},

/* ================= SPY X FAMILY (319-325) ================= */
{anime:"Spy x Family",cat:"PERSONNAGE",diff:"GENIN",q:"Sous quelle identité Twilight se cache-t-il ?",a:["Loid Forger","Yuri Briar","Franky Franklin","Damian Desmond"],ok:0,h:"Il forme une fausse famille.",emoji:"🕵️"},
{anime:"Spy x Family",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la fille adoptive de Loid ?",a:["Anya","Yor","Becky","Karen"],ok:0,h:"Elle peut lire dans les pensées.",emoji:"🧠"},
{anime:"Spy x Family",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le métier secret de Yor ?",a:["Tueuse à gages","Espionne","Assassin politique","Voleuse"],ok:0,h:"Surnommée la Princesse des Ronces.",emoji:"🌹"},
{anime:"Spy x Family",cat:"LORE",diff:"JŌNIN",q:"Quel est l'objectif principal de l'opération Strix ?",a:["Approcher Donovan Desmond","Tuer un ennemi","Voler des documents","Sauver un agent"],ok:0,h:"Passer par l'école Eden.",emoji:"🎯"},

/* ================= STEINS;GATE (326-332) ================= */
{anime:"Steins;Gate",cat:"LORE",diff:"KAGE",q:"Quel objet du labo envoie des messages vers le passé ?",a:["Le Phone Microwave","Le badge du labo","La radio temporelle","Le lecteur de cartes"],ok:0,h:"Okabe l'appelle le micro-ondes téléphone.",emoji:"⏳"},
{anime:"Steins;Gate",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le pseudonyme d'Okabe Rintaro ?",a:["Hououin Kyouma","Kurisu","Daru","Suzuha"],ok:0,h:"Un nom de savant fou inventé.",emoji:"🧪"},
{anime:"Steins;Gate",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la scientifique qui aide Okabe ?",a:["Kurisu Makise","Mayuri Shiina","Suzuha Amane"," Moeka Kiryu"],ok:0,h:"Elle est spécialiste en physique quantique.",emoji:"🔬"},
{anime:"Steins;Gate",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom de l'organisation ennemie dans Steins;Gate ?",a:["SERN","CERN","NASA","DARPA"],ok:0,h:"Une organisation qui contrôle les voyages temporels.",emoji:"🏢"},

/* ================= POKEMON (333-340) ================= */
{anime:"Pokémon",cat:"PERSONNAGE",diff:"GENIN",q:"Quel Pokémon accompagne le plus souvent Sacha ?",a:["Pikachu","Évoli","Dracaufeu","Lucario"],ok:0,h:"Un Pokémon électrique.",emoji:"⚡"},
{anime:"Pokémon",cat:"PERSONNAGE",diff:"GENIN",q:"Quel est le nom du rival de Sacha à Kanto ?",a:["Régis","Pierre","Ondine","Jacky"],ok:0,h:"Un garçon hautain qui deviendra professeur.",emoji:"🧢"},
{anime:"Pokémon",cat:"LORE",diff:"CHŪNIN",q:"Quel est le nom de l'organisation criminelle de Kanto ?",a:["Team Rocket","Team Magma","Team Aqua","Team Galaxie"],ok:0,h:"Ils veulent voler les Pokémon rares.",emoji:"🚀"},
{anime:"Pokémon",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la championne de type Électrik à Kalos ?",a:["Lem","Watson","Volt","Clem"],ok:0,h:"Elle voyage avec Sacha à Kalos.",emoji:"🔌"},

/* ================= BLACK CLOVER (341-348) ================= */
{anime:"Black Clover",cat:"COMBAT",diff:"JŌNIN",q:"Quel est le pouvoir particulier d'Asta ?",a:["Anti-magie","Feu noir","Contrôle du temps","Téléportation"],ok:0,h:"Son grimoire annule la magie.",emoji:"🗡️"},
{anime:"Black Clover",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le rêve d'Asta ?",a:["Devenir l'Empereur-Mage","Devenir roi","Devenir chevalier","Trouver un trésor"],ok:0,h:"Le plus haut rang de magicien du royaume.",emoji:"👑"},
{anime:"Black Clover",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du rival d'Asta ?",a:["Yuno","Nozel","Fuegoleon","Mereoleona"],ok:0,h:"Un génie du vent.",emoji:"🌪️"},

/* ================= FAIRY TAIL (349-356) ================= */
{anime:"Fairy Tail",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel dragon a élevé Natsu ?",a:["Igneel","AcnoLogia","Metalicana","Grandeeney"],ok:0,h:"Dragon de feu lié à Natsu.",emoji:"🐉"},
{anime:"Fairy Tail",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la guilde principale de Fairy Tail ?",a:["Fairy Tail","Saber Tooth","Blue Pegasus","Lamia Scale"],ok:0,h:"La guilde du titre de la série.",emoji:"🧚"},
{anime:"Fairy Tail",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la mage céleste de l'équipe ?",a:["Lucy Heartfilia","Erza Scarlet","Wendy Marvell","Juvia"],ok:0,h:"Elle utilise des clés magiques.",emoji:"🔑"},
{anime:"Fairy Tail",cat:"LORE",diff:"KAGE",q:"Quel est le nom du dragon noir destructeur ?",a:["Acnologia","Igneel","Zeref","Mavis"],ok:0,h:"Il a détruit des générations de dragons.",emoji:"🐲"},

/* ================= JOJO (357-364) ================= */
{anime:"JoJo's Bizarre Adventure",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le Stand de Jotaro Kujo ?",a:["Star Platinum","The World","Crazy Diamond","Gold Experience"],ok:0,h:"Référence à un corps céleste.",emoji:"⭐"},
{anime:"JoJo's Bizarre Adventure",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le Stand de Dio Brando ?",a:["The World","Star Platinum","Killer Queen","King Crimson"],ok:0,h:"Il arrête le temps.",emoji:"⏱️"},
{anime:"JoJo's Bizarre Adventure",cat:"LORE",diff:"KAGE",q:"Quel est le nom de la famille maudite par le masque de pierre ?",a:["Joestar","Brando","Zeppeli","Higashikata"],ok:0,h:"Une étoile marque leurs épaules.",emoji:"🌟"},
{anime:"JoJo's Bizarre Adventure",cat:"TECHNIQUE",diff:"LÉGENDE",q:"Quelle est la technique signature de Joseph Joestar ?",a:["L'Onde","Le Spin","Le Stand","Le Hamon doré"],ok:0,h:"Une technique de respiration.",emoji:"🌊"},
{anime:"JoJo's Bizarre Adventure",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Quel est le Stand de Giorno Giovanna ?",a:["Gold Experience","Star Platinum","Crazy Diamond","King Crimson"],ok:0,h:"Il peut donner la vie.",emoji:"🌻"},

/* ================= SOLO LEVELING (365-370) ================= */
{anime:"Solo Leveling",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom du protagoniste de Solo Leveling ?",a:["Sung Jinwoo","Yuji Itadori","Denji","Bell Cranel"],ok:0,h:"Il commence chasseur de rang faible.",emoji:"🌑"},
{anime:"Solo Leveling",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom du système qui aide Jinwoo ?",a:["Le Système","Le Grimoire","L'Arsenal","Le Lien"],ok:0,h:"Une interface de jeu vidéo.",emoji:"💻"},
{anime:"Solo Leveling",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le rang final de Jinwoo ?",a:["Rang S","Rang A","Rang National","Monarque des Ombres"],ok:0,h:"Il dépasse les rangs humains.",emoji:"👑"},

/* ================= OVERLORD (371-376) ================= */
{anime:"Overlord",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du protagoniste d'Overlord ?",a:["Ainz Ooal Gown","Momonga","Touch Me","Demiurge"],ok:0,h:"Un squelette devenu roi.",emoji:"💀"},
{anime:"Overlord",cat:"LORE",diff:"KAGE",q:"Dans quel jeu Ainz était-il bloqué au début ?",a:["Yggdrasil","Elder Tale","SAO","Alfheim"],ok:0,h:"Un MMO qui ferme ses serveurs.",emoji:"🌳"},
{anime:"Overlord",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom de la guilde d'Ainz ?",a:["Ainz Ooal Gown","Nazarick","Yggdrasil","Les 41"],ok:0,h:"Un tombeau souterrain.",emoji:"💀"},

/* ================= KONOSUBA (377-382) ================= */
{anime:"Konosuba",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du protagoniste de Konosuba ?",a:["Kazuma Satou","Aqua","Megumin","Darkness"],ok:0,h:"Un NEET qui meurt bêtement.",emoji:"🎮"},
{anime:"Konosuba",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quelle déesse accompagne Kazuma ?",a:["Aqua","Eris","Megumin","Wiz"],ok:0,h:"Inutile mais attachante.",emoji:"💧"},
{anime:"Konosuba",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quelle mage utilise l'explosion ?",a:["Megumin","Yunyun","Wiz","Aqua"],ok:0,h:"Elle ne connaît qu'un seul sort mais il est puissant.",emoji:"💥"},
{anime:"Konosuba",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Quel est le nom de la noble masochiste de Konosuba ?",a:["Darkness","Aqua","Megumin","Wiz"],ok:0,h:"Elle aime souffrir.",emoji:"🛡️"},

/* ================= PROMISED NEVERLAND (383-387) ================= */
{anime:"The Promised Neverland",cat:"LORE",diff:"JŌNIN",q:"Quel est le secret de l'orphelinat Grace Field ?",a:["Les enfants sont élevés pour être mangés","C'est une école d'espions","C'est un laboratoire","C'est un royaume magique"],ok:0,h:"Un sombre secret révélé au premier épisode.",emoji:"🏚️"},
{anime:"The Promised Neverland",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Qui est le cerveau du trio principal ?",a:["Norman","Emma","Ray","Don"],ok:0,h:"Un garçon brillant et stratège.",emoji:"🧠"},

/* ================= DR STONE (388-392) ================= */
{anime:"Dr. Stone",cat:"LORE",diff:"CHŪNIN",q:"Quel événement pétrifie toute l'humanité ?",a:["Un flash vert","Une guerre nucléaire","Un virus","Une éruption solaire"],ok:0,h:"Un mystérieux phénomène mondial.",emoji:"🗿"},
{anime:"Dr. Stone",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du scientifique principal ?",a:["Senku Ishigami","Chrome","Kohaku","Tsukasa"],ok:0,h:"Un génie qui veut reconstruire la civilisation.",emoji:"🔬"},

/* ================= FIRE FORCE (393-396) ================= */
{anime:"Fire Force",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du protagoniste de Fire Force ?",a:["Shinra Kusakabe","Arthur Boyle","Tamaki Kotatsu","Obi"],ok:0,h:"Il a les pieds enflammés.",emoji:"🔥"},
{anime:"Fire Force",cat:"LORE",diff:"KAGE",q:"Quel est le nom des créatures enflammées ?",a:["Torches Humaines","Démons de feu","Esprits ardents","Pyrovores"],ok:0,h:"Des humains transformés en flammes.",emoji:"🔥"},

/* ================= AKAME GA KILL (397-400) ================= */
{anime:"Akame ga Kill",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de l'assassin à l'épée maudite ?",a:["Akame","Tatsumi","Leone","Mine"],ok:0,h:"Son épée tue au moindre contact.",emoji:"🗡️"},
{anime:"Akame ga Kill",cat:"LORE",diff:"KAGE",q:"Quel est le nom du groupe d'assassins ?",a:["Night Raid","Night Hawks","Night Blade","Shadow Blade"],ok:0,h:"Ils luttent contre l'empire corrompu.",emoji:"🌙"},

/* ================= NORAGAMI (401-404) ================= */
{anime:"Noragami",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du dieu principal de Noragami ?",a:["Yato","Yukine","Hiyori","Bishamon"],ok:0,h:"Un dieu sans temple.",emoji:"⚔️"},
{anime:"Noragami",cat:"LORE",diff:"KAGE",q:"Quel est le nom du registre des dieux ?",a:["Le Registre des Dieux","Le Livre Céleste","Le Grimoire Divin","Le Parchemin Sacré"],ok:0,h:"Il liste tous les dieux du Japon.",emoji:"📜"},

/* ================= ASSASSINATION CLASSROOM (405-408) ================= */
{anime:"Assassination Classroom",cat:"PERSONNAGE",diff:"CHŪNIN",q:"Quel est le nom de la créature qui menace la Terre ?",a:["Koro-sensei","Karma","Nagisa","Karasuma"],ok:0,h:"Un professeur jaune et tentaculaire.",emoji:"🐙"},
{anime:"Assassination Classroom",cat:"LORE",diff:"JŌNIN",q:"Quelle est la classe qui doit tuer Koro-sensei ?",a:["Classe 3-E","Classe 1-A","Classe 2-B","Classe 3-A"],ok:0,h:"La classe des cancres du lycée Kunugigaoka.",emoji:"🎓"},

/* ================= DEVILMAN CRYBABY (409-412) ================= */
{anime:"Devilman Crybaby",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du protagoniste de Devilman Crybaby ?",a:["Akira Fudo","Ryo Asuka","Miki","Silene"],ok:0,h:"Il fusionne avec un démon.",emoji:"😈"},
{anime:"Devilman Crybaby",cat:"LORE",diff:"LÉGENDE",q:"Qui est le véritable antagoniste de Devilman Crybaby ?",a:["Ryo Asuka / Satan","Silene","Zennon","Psycho Jenny"],ok:0,h:"L'ami d'enfance d'Akira.",emoji:"😇"},

/* ================= KAGUYA-SAMA (413-416) ================= */
{anime:"Kaguya-sama",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du président du conseil étudiant ?",a:["Miyuki Shirogane","Kaguya Shinomiya","Chika Fujiwara","Yu Ishigami"],ok:0,h:"Un génie issu d'un milieu modeste.",emoji:"🎓"},
{anime:"Kaguya-sama",cat:"LORE",diff:"KAGE",q:"Quel est le principe du « mind game » entre les deux protagonistes ?",a:["Faire avouer l'autre en premier","Se battre en duel","S'ignorer","Tricher aux examens"],ok:0,h:"Un jeu mental pour ne pas perdre la face.",emoji:"♟️"},

/* ================= DOROHEDORO (417-420) ================= */
{anime:"Dorohedoro",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Quel est le nom du protagoniste de Dorohedoro ?",a:["Caiman","Nikaido","En","Shin"],ok:0,h:"Un homme à tête de lézard sans souvenirs.",emoji:"🦎"},
{anime:"Dorohedoro",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du monde des sorciers ?",a:["Le Monde des Sorciers","Le Trou","Le Royaume Magique","L'Autre Côté"],ok:0,h:"Un monde parallèle au monde des humains.",emoji:"🌀"},

/* ================= MADE IN ABYSS (421-424) ================= */
{anime:"Made in Abyss",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la protagoniste de Made in Abyss ?",a:["Riko","Reg","Nanachi","Mitty"],ok:0,h:"Une fille qui veut retrouver sa mère.",emoji:"🕳️"},
{anime:"Made in Abyss",cat:"LORE",diff:"KAGE",q:"Quel est le nom du gouffre principal ?",a:["L'Abysse","Le Puits","Le Grand Trou","La Faille"],ok:0,h:"Un gouffre gigantesque et dangereux.",emoji:"🌌"},

/* ================= PSYCHO-PASS (425-428) ================= */
{anime:"Psycho-Pass",cat:"LORE",diff:"JŌNIN",q:"Quel est le nom du système qui juge les criminels ?",a:["Sibyl","Minority","Judge","Oracle"],ok:0,h:"Un système qui scanne les esprits.",emoji:"🧠"},
{anime:"Psycho-Pass",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du protagoniste principal ?",a:["Shinya Kogami","Akane Tsunemori","Shogo Makishima","Nobuchika Ginoza"],ok:0,h:"Un inspecteur devenu criminel.",emoji:"🔫"},

/* ================= PARASYTE (429-432) ================= */
{anime:"Parasyte",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du parasite qui vit dans la main de Shinichi ?",a:["Migi","Rei","Goto","Uragami"],ok:0,h:"Il est logique et froid.",emoji:"🖐️"},
{anime:"Parasyte",cat:"LORE",diff:"KAGE",q:"D'où viennent les parasites dans Parasyte ?",a:["De l'espace","Des profondeurs marines","D'un laboratoire","D'une malédiction"],ok:0,h:"Ils arrivent sous forme de spores.",emoji:"🌌"},

/* ================= ELFEN LIED (433-436) ================= */
{anime:"Elfen Lied",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Quel est le nom de la principale Diclonius ?",a:["Lucy","Nana","Mariko","Yuka"],ok:0,h:"Elle possède des vecteurs invisibles.",emoji:"🎵"},
{anime:"Elfen Lied",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom des bras invisibles des Diclonius ?",a:["Vecteurs","Bras spectraux","Tentacules","Lames"],ok:0,h:"Ils peuvent trancher à distance.",emoji:"✂️"},

/* ================= CLAYMORE (437-440) ================= */
{anime:"Claymore",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Quel est le nom de la protagoniste de Claymore ?",a:["Claire","Teresa","Helen","Deneve"],ok:0,h:"Une guerrière mi-humaine mi-démon.",emoji:"⚔️"},
{anime:"Claymore",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom de l'organisation qui crée les Claymores ?",a:["L'Organisation","Les Chasseurs","Le Conseil","Les Anciens"],ok:0,h:"Une organisation mystérieuse et cruelle.",emoji:"🏰"},

/* ================= BLUE EXORCIST (441-444) ================= */
{anime:"Blue Exorcist",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du fils de Satan dans Blue Exorcist ?",a:["Rin Okumura","Yukio Okumura","Shura","Mephisto"],ok:0,h:"Il veut devenir exorciste malgré ses origines.",emoji:"🔥"},
{anime:"Blue Exorcist",cat:"LORE",diff:"KAGE",q:"Quel est le nom de l'académie d'exorcisme ?",a:["True Cross Academy","Vatican Academy","Holy Cross","Exorcist School"],ok:0,h:"Une école déguisée en établissement normal.",emoji:"✝️"},

/* ================= SERAPH OF THE END (445-448) ================= */
{anime:"Seraph of the End",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du protagoniste de Seraph of the End ?",a:["Yuichiro Hyakuya","Mikaela","Guren","Shinoa"],ok:0,h:"Il veut se venger des vampires.",emoji:"🗡️"},
{anime:"Seraph of the End",cat:"LORE",diff:"KAGE",q:"Quel cataclysme a ravagé le monde dans Seraph of the End ?",a:["Un virus","Une guerre nucléaire","Une invasion extraterrestre","Une malédiction"],ok:0,h:"Un virus qui a tué tous les adultes.",emoji:"🦠"},

/* ================= DARLING IN THE FRANXX (449-452) ================= */
{anime:"Darling in the Franxx",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom du protagoniste de Darling in the Franxx ?",a:["Hiro","Zero Two","Ichigo","Goro"],ok:0,h:"Il pilote un Franxx avec Zero Two.",emoji:"🤖"},
{anime:"Darling in the Franxx",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le surnom de Zero Two ?",a:["Le Partenaire Tueur","La Reine","L'Ange","La Démone"],ok:0,h:"Elle a un caractère sauvage.",emoji:"🌸"},

/* ================= KILL LA KILL (453-456) ================= */
{anime:"Kill la Kill",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom de la protagoniste de Kill la Kill ?",a:["Ryuko Matoi","Satsuki Kiryuin","Mako Mankanshoku","Ragyo"],ok:0,h:"Elle cherche l'assassin de son père.",emoji:"✂️"},
{anime:"Kill la Kill",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom de l'uniforme vivant de Ryuko ?",a:["Senketsu","Kamui","Junketsu","Goku"],ok:0,h:"Un uniforme qui parle.",emoji:"👗"},

/* ================= GURREN LAGANN (457-460) ================= */
{anime:"Gurren Lagann",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du protagoniste de Gurren Lagann ?",a:["Simon","Kamina","Yoko","Nia"],ok:0,h:"Un foreur timide devenu héros.",emoji:"🌀"},
{anime:"Gurren Lagann",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du robot principal de Gurren Lagann ?",a:["Gurren Lagann","Lagann","Gurren","Arc-Gurren"],ok:0,h:"La fusion de deux robots.",emoji:"🤖"},

/* ================= K-ON (461-464) ================= */
{anime:"K-on!",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la guitariste de K-on! ?",a:["Yui Hirasawa","Mio Akiyama","Ritsu Tainaka","Azusa Nakano"],ok:0,h:"Elle est tête en l'air et adore les gâteaux.",emoji:"🎸"},
{anime:"K-on!",cat:"LORE",diff:"KAGE",q:"Quel est le nom du club des filles de K-on! ?",a:["Club de musique légère","Club de rock","Club de pop","Club de jazz"],ok:0,h:"Un club de musique après les cours.",emoji:"🎶"},

/* ================= TORADORA (465-468) ================= */
{anime:"Toradora!",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le surnom de Taiga Aisaka ?",a:["Le Tigre de poche","La Rose","La Reine","La Tempête"],ok:0,h:"Petite mais redoutable.",emoji:"🐯"},
{anime:"Toradora!",cat:"LORE",diff:"KAGE",q:"Quel est le principe du pacte entre Ryuuji et Taiga ?",a:["S'aider à se rapprocher de leurs crushs","Se battre ensemble","Faire semblant de sortir ensemble","Vivre ensemble"],ok:0,h:"Un pacte d'amitié amoureuse.",emoji:"💕"},

/* ================= YOUR LIE IN APRIL (469-472) ================= */
{anime:"Your Lie in April",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du pianiste principal ?",a:["Kousei Arima","Kaori Miyazono","Tsubaki","Watari"],ok:0,h:"Il n'entend plus le son de son piano.",emoji:"🎹"},
{anime:"Your Lie in April",cat:"PERSONNAGE",diff:"LÉGENDE",q:"Quel instrument joue Kaori ?",a:["Le violon","Le piano","L'alto","Le violoncelle"],ok:0,h:"Elle est libre et passionnée.",emoji:"🎻"},

/* ================= ANOHANA (473-476) ================= */
{anime:"Anohana",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du fantôme qui revient dans Anohana ?",a:["Menma","Jintan","Anaru","Yukiatsu"],ok:0,h:"Elle veut que son vœu soit exaucé.",emoji:"🌸"},
{anime:"Anohana",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du groupe d'amis d'enfance dans Anohana ?",a:["Super Peace Busters","Les Six","Le Club","Les Amis"],ok:0,h:"Ils se réunissent après des années.",emoji:"👥"},

/* ================= CLANNAD (477-480) ================= */
{anime:"Clannad",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du protagoniste de Clannad ?",a:["Tomoya Okazaki","Nagisa Furukawa","Kyou","Ushio"],ok:0,h:"Un lycéen désabusé.",emoji:"🌸"},
{anime:"Clannad",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom du monde parallèle dans Clannad ?",a:["Le Monde Illusionnaire","Le Royaume des Filles","Le Jardin","La Cité Céleste"],ok:0,h:"Un monde où vit une fille solitaire.",emoji:"🌌"},

/* ================= ANGEL BEATS (481-484) ================= */
{anime:"Angel Beats",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom du protagoniste d'Angel Beats ?",a:["Otonashi","Yuri","Kanade","Hinata"],ok:0,h:"Il perd ses souvenirs en arrivant.",emoji:"🎸"},
{anime:"Angel Beats",cat:"LORE",diff:"LÉGENDE",q:"Quel est le nom de l'au-delà dans Angel Beats ?",a:["Le Monde de l'Entre-deux","Le Paradis","Le Purgatoire","L'École Céleste"],ok:0,h:"Un lycée pour les âmes perdues.",emoji:"🕊️"},

/* ================= VIOLET EVERGARDEN (485-488) ================= */
{anime:"Violet Evergarden",cat:"PERSONNAGE",diff:"KAGE",q:"Quel est le nom de la protagoniste de Violet Evergarden ?",a:["Violet Evergarden","Gilbert Bougainvillea","Hodgins","Cattleya"],ok:0,h:"Une ancienne soldate devenue poupée de mémoire.",emoji:"💌"},
{anime:"Violet Evergarden",cat:"LORE",diff:"LÉGENDE",q:"Quel est le métier de Violet dans la série ?",a:["Poupée de mémoire automatique","Facteur","Traductrice","Écrivain"],ok:0,h:"Elle écrit des lettres pour les autres.",emoji:"✉️"},

/* ================= FRUITS BASKET (489-492) ================= */
{anime:"Fruits Basket",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la protagoniste de Fruits Basket ?",a:["Tohru Honda","Kyo Sohma","Yuki Sohma","Shigure"],ok:0,h:"Elle vit dans une tente au début.",emoji:"🍙"},
{anime:"Fruits Basket",cat:"LORE",diff:"KAGE",q:"Quelle est la malédiction de la famille Sohma ?",a:["Se transformer en animal du zodiaque","Devenir invisible","Mourir jeune","Perdre la mémoire"],ok:0,h:"Ils se transforment au contact du sexe opposé.",emoji:"🐭"},

/* ================= SAILOR MOON (493-496) ================= */
{anime:"Sailor Moon",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le nom de la protagoniste de Sailor Moon ?",a:["Usagi Tsukino","Ami Mizuno","Rei Hino","Makoto Kino"],ok:0,h:"Une collégienne maladroite.",emoji:"🌙"},
{anime:"Sailor Moon",cat:"LORE",diff:"KAGE",q:"Quel est le nom du royaume d'origine des Sailor ?",a:["Le Millénaire d'Argent","La Lune","Le Crystal Tokyo","Le Royaume Lunaire"],ok:0,h:"Un royaume lunaire.",emoji:"🌕"},

/* ================= DIGIMON (497-500) ================= */
{anime:"Digimon",cat:"PERSONNAGE",diff:"JŌNIN",q:"Quel est le Digimon partenaire de Tai ?",a:["Agumon","Gabumon","Patamon","Gomamon"],ok:0,h:"Un dinosaure orange.",emoji:"🦖"},
{anime:"Digimon",cat:"LORE",diff:"KAGE",q:"Comment les enfants arrivent-ils dans le DigiMonde ?",a:["Aspirés par un portail","Par un rêve","Par un jeu vidéo","Par un portail magique"],ok:0,h:"Ils sont transportés dans un autre monde.",emoji:"🌐"},

/* =========================================================
   AJOUTE TES PROPRES QUESTIONS ICI
   Copie une ligne, modifie-la. Aucune limite de nombre.
   ========================================================= */

];