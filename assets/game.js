
// Get the game container div
const gameContainer = document.getElementById("game-container");

// Create PixiJS Application
const app = new PIXI.Application({
    width: gameContainer.clientWidth,
    height: gameContainer.clientHeight,
    backgroundAlpha: 0,
});


const basicCharacterSpriteData = {
    frames: {
        charWalkDown1: {
            frame: { x: 0, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkDown2: {
            frame: { x: 48, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkDown3: {
            frame: { x: 96, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkDown4: {
            frame: { x: 144, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkUp1: {
            frame: { x: 0, y: 48, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkUp2: {
            frame: { x: 48, y: 48, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkUp3: {
            frame: { x: 96, y: 48, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkUp4: {
            frame: { x: 144, y: 48, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkLeft1: {
            frame: { x: 0, y: 96, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkLeft2: {
            frame: { x: 48, y: 96, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkLeft3: {
            frame: { x: 96, y: 96, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkLeft4: {
            frame: { x: 144, y: 96, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkRight1: {
            frame: { x: 0, y: 144, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkRight2: {
            frame: { x: 48, y: 144, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkRight3: {
            frame: { x: 96, y: 144, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        charWalkRight4: {
            frame: { x: 144, y: 144, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0 },
        },
    },
    meta: {
        scale: '0.3',
    },
    animations: {
        walkDown: [
            "charWalkDown1",
            "charWalkDown2",
            "charWalkDown3",
            "charWalkDown4",
        ],
        walkUp: [
            "charWalkUp1",
            "charWalkUp2",
            "charWalkUp3",
            "charWalkUp4"
        ],
        walkLeft: [
            "charWalkLeft1",
            "charWalkLeft2",
            "charWalkLeft3",
            "charWalkLeft4",
        ],
        walkRight: [
            "charWalkRight1",
            "charWalkRight2",
            "charWalkRight3",
            "charWalkRight4",
        ],
    },
};

let character = {
    animation: "",
    sprite: undefined,
}

let targetCoordinate = {
    x: null,
    y: null
}

let keyboard = {}


const spritesheetBasicCharacter = new PIXI.Spritesheet(
    PIXI.BaseTexture.from("assets/img/basic_character_sprites.png"),
    basicCharacterSpriteData
);


async function renderCharacter(animation = "walkDown") {
    // Create the SpriteSheet from data and image
    if (character.sprite) character.sprite.play();
    
    if (character.animation !== animation) {

        let oldX = 0;
        let oldY = 0;

        if (character.sprite) {
            oldX = character.sprite.position.x;
            oldY = character.sprite.position.y;
        }

        // spritesheetBasicCharacter is ready to use!
        character.sprite = new PIXI.AnimatedSprite(
            spritesheetBasicCharacter.animations[animation]
        );

        character.sprite.x = oldX;
        character.sprite.y = oldY;
        
        character.sprite.animationSpeed = 0.1;
        
        if (app.stage.children.length) {
            app.stage.removeChildAt(0);
        }
        
        character.animation = animation;
        app.stage.addChildAt(character.sprite, 0);

    }
}

window.addEventListener("keydown", (e) => {
    targetCoordinate = {
        x: null,
        y: null
    }
    keyboard[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    keyboard[e.key] = false;

    if (character.sprite) character.sprite.stop();
});

window.addEventListener("resize", () => {
    app.renderer.resize(gameContainer.clientWidth, gameContainer.clientHeight);
});

function update() {
    // Move character based on keyboard input
    const speed = 3;
    if (character.sprite) {
        let maxHeightX = character.sprite.x < gameContainer.clientWidth - 100
        let minHeightX = character.sprite.x > -60
        let maxHeightY = character.sprite.y < gameContainer.clientHeight - 120
        let minHeightY = character.sprite.y > -50
        // move char by arrow button
        if (keyboard["ArrowLeft"]) {
            if(minHeightX) character.sprite.x -= speed;
            if(!keyboard["ArrowDown"] && !keyboard["ArrowUp"]) renderCharacter("walkLeft");
        }
        if (keyboard["ArrowRight"]) {
            if(maxHeightX) character.sprite.x += speed;
            if(!keyboard["ArrowDown"] && !keyboard["ArrowUp"]) renderCharacter("walkRight");
        }
        if (keyboard["ArrowUp"]) {
            if(minHeightY) character.sprite.y -= speed;
            renderCharacter("walkUp");
        }
        if (keyboard["ArrowDown"]) {
            if(maxHeightY) character.sprite.y += speed;
            renderCharacter("walkDown");
        }

        // move char by targetCoordinate
        let xLowerThanTarget = typeof targetCoordinate.x === 'number' && character.sprite.x < targetCoordinate.x
        let yLowerThanTarget = typeof targetCoordinate.y === 'number' && character.sprite.y < targetCoordinate.y
        let xHigerThanTarget = typeof targetCoordinate.x === 'number' && character.sprite.x > targetCoordinate.x
        let yHigherThanTarget = typeof targetCoordinate.y === 'number' && character.sprite.y > targetCoordinate.y
        if(xLowerThanTarget && yLowerThanTarget){
            renderCharacter("walkDown")
        }else if(xLowerThanTarget){
            renderCharacter("walkRight")
        }

        if(xHigerThanTarget && yHigherThanTarget){
            renderCharacter("walkUp")
        }else if(xHigerThanTarget){
            renderCharacter("walkLeft")
        }

        if(xLowerThanTarget && maxHeightX){
            character.sprite.x += speed
        }
        
        if(yLowerThanTarget && maxHeightY){
            character.sprite.y += speed
        }

        if(xHigerThanTarget && minHeightX){
            character.sprite.x -= speed
        }
        
        if(yHigherThanTarget && minHeightY){
            character.sprite.y -= speed
        }

        if(character.sprite.x === targetCoordinate.x && character.sprite.y === targetCoordinate.y){
            renderCharacter('walkDown')
            if (character.sprite) character.sprite.stop();
        }
    }
}

function roundToNearest6(number) {
    return Math.round(number / 6) * 6;
}

async function initGame(){
    await spritesheetBasicCharacter.parse();
    gameContainer.appendChild(app.view);
    renderCharacter("walkDown");
    app.ticker.add(update);

    app.view.addEventListener('click', event => {
        // Get the mouse coordinates relative to the application view
        const mouseX = event.clientX - app.view.getBoundingClientRect().left;
        const mouseY = event.clientY - app.view.getBoundingClientRect().top;

        // Log the x and y coordinates
        targetCoordinate.x = roundToNearest6(mouseX - 100)
        targetCoordinate.y = roundToNearest6(mouseY - 100)
    })
}

initGame()
