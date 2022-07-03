/**
 * 
 * @namespace {Hogwarts}
 * 
 */

/**
 * @abstract
 * @class
 * 
 */
class HogwartsHouseFactory {

    /**
     * @type {array}
     * @private
     */
    #rewards = null;

    constructor(){

    }

    /**
     * 
     * @returns {Witcher}
     */
    getBestWizard(){
        return;
    }

    /**
     * 
     * @returns {Witcher}
     */
    getBestStudent(){
        return;
    }

    getRewards(){
        return this.#rewards;
    }

    addRewards(...rewards){

        if(rewards){

            this.rewards.push(rewards);
        }
    }
}

/**
 * @abstract
 * @class
 */
class Witcher {

    #qualities = null;
    #powers = null;
    #spells = null;

    constructor(){

    }

    castSpell(spell){
        return;
    }
    
    usePower(power){
        return;
    }

    getQualities(){
        return this.#qualities;
    }

    getPowers(){
        return this.#powers;
    }

    getSpells(){
        return this.#spells;
    }
}

/**
 * @class
 * @implements {Witcher}
 */
 class HarryPotter extends Witcher {

    constructor(){
        super();
    }

    castSpell(spell){
        return;
    }

    usePower(power){
        return;
    }
}

/**
 * @class
 * @implements {Witcher}
 */
class RonWeasley extends Witcher {

    constructor(){
        super();
    }

    castSpell(spell){
        return;
    }

    usePower(power){
        return;
    }
}

/**
 * @class
 * @implements {Witcher}
 */
class HermoineGranger extends Witcher {

    constructor(){
        super();
    }

    castSpell(spell){
        return;
    }

    usePower(power){
        return;
    }
}

/**
 * @class
 * @implements {Witcher}
 */
class DracoMalfoy extends Witcher {

    constructor(){
        super();
    }

    castSpell(spell){
        return;
    }

    usePower(power){
        return;
    }
}

/**
 * @class
 * @implements {HogwartsHouseFactory}
 */
class GryffindorFactory extends HogwartsHouseFactory {

    constructor(){
        super();
    }

    getBestWizard(){
        return new HarryPotter();
    }

    getBestStudent(){
        return new HermoineGranger();
    }
}

/**
 * @class
 * @implements {HogwartsHouseFactory}
 */
class SlytherinFactory extends HogwartsHouseFactory {

    constructor(){
        super();
    }
    
    getBestWizard(){
        return new DracoMalfoy();
    }
}

/**
 * @class
 * @implements {HogwartsHouseFactory}
 */
class RavenclawFactory extends HogwartsHouseFactory {

    constructor(){
        super();
    }
}

/**
 * @class
 * @implements {HogwartsHouseFactory}
 */
class HufflepuffFactory extends HogwartsHouseFactory {
    
    constructor(){
        super();
    }
}

/**
 * @class
 */
class HogwartsClient {

    /**
     * @type {HogwartsHouseFactory}
     */
    #factory = null;

    /**
     * 
     * @param {HogwartsHouseFactory} hogwartsHouse 
     */
    constructor(hogwartsHouse){

        this.#factory = hogwartsHouse;
    }

    /**
     * @type {Witcher}
     */
    getBestWizard(){

        return factory.getBestWizard();
    }
}