iFileName = "Large Chained Greataxe.js";
RequiredSheetVersion("13.0.6");
MagicItemsList["large chained greataxe"] = {
    name: "Large Chained Greataxe",
    source : ["HB", 1],
    type : "weapon (greataxe)",
    rarity : "rare",
    attunement : true,
    description : "+1 magic weapon.Can be used as a ranged weapon. On Huge or smaller creatures, a failed contested strength check means they are pulled to the space in front of me. On success or against a Gargantuan creature, I am instead pulled in front of it.",
    descriptionLong : "This is a +1 magic weapon."+
    "I can make a ranged attack with this greataxe. On hit, the creature (Huge or smaller) must succeed on a contested strength check or be pulled until it is within 5 feet. A Huge creature has advantage on this check. On failure or Gargantuan target, I am instead pulled towards it.",
    descriptionFull : "Chained Greataxe\n"+
    "\n"+
    "Weapon (Greataxe), rare (requires attunement)\n" +
    "\n"+
    "This gruesome looking greataxe has a set of intricate spikes and hooks between the blades on its head and is connected by a metal chain to a pair of bracers in which the other end of the chain vanishes.\n" +
    "\n" +
    "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n" +
    "\n" +
    "Additionally you can use an action to make a ranged weapon attack (30/60) with this greataxe. On a hit on a large or smaller creature, the creature must succeed on a strength check contested by your strength check or be pulled towards you until it is within 5 feet of you. A large creature has advantage on this check.\n" +
    "\n" +
    "If the creature succeeds on the check or is huge or larger, you are instead pulled towards it until you are within 5 feet of it. In either case the weapon releases itself from the target afterwards and is pulled back into your hands.\n" +
    "\n" +
    "This property has two uses and regains all of its uses when you finish a long rest.",
    weight : 12,
    extraLimitedFeatures : [{
        name: "Large Chained Greataxe Throw",
        usages : 2,
        recovery: "long rest",
        action : [["action"," Throw"]],
    }],
    WeaponsAdd : ["Large Chained Greataxe"], 
    WeaponOptions : {
        name: "Large Chained Greataxe",
        source : ["HB:C", 1],
        baseWeapon : "greataxe",
        damage : [2, 12, "slashing"],
        range : "Melee, 25/50 ft",
        discription : "Heavy, Two-handed, Throw 30/60 feet, Contested STR check to see who moves",
    }
};