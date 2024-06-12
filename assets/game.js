
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

const basicCharacterEkspresion = {
    frames: {
        charIdle1: {
            frame: { x: 0, y: 0, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        talk1: {
            frame: { x: 0, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        talk2: {
            frame: { x: 32, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        shakeEar1: {
            frame: { x: 0, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        shakeEar2: {
            frame: { x: 32, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        shakeEar3: {
            frame: { x: 64, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        shakeEar4: {
            frame: { x: 96, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        shakeEar5: {
            frame: { x: 128, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        blink1: {
            frame: { x: 0, y: 96, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        blink2: {
            frame: { x: 32, y: 96, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        blink3: {
            frame: { x: 64, y: 96, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        blink4: {
            frame: { x: 96, y: 96, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        love1: {
            frame: { x: 0, y: 128, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        love2: {
            frame: { x: 32, y: 128, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        loveTalk1: {
            frame: { x: 0, y: 160, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        loveTalk2: {
            frame: { x: 32, y: 160, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        cheer1: {
            frame: { x: 0, y: 192, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        cheer2: {
            frame: { x: 32, y: 192, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        cheerSmile1: {
            frame: { x: 0, y: 224, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        cheerSmile2: {
            frame: { x: 32, y: 224, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        cool1: {
            frame: { x: 0, y: 256, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        cool2: {
            frame: { x: 32, y: 256, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        angry1: {
            frame: { x: 0, y: 288, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        angry2: {
            frame: { x: 32, y: 288, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        angryTalk1: {
            frame: { x: 0, y: 320, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        angryTalk2: {
            frame: { x: 32, y: 320, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        flatFaceTalk1: {
            frame: { x: 0, y: 352, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        flatFaceTalk2: {
            frame: { x: 32, y: 352, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        boredFace1: {
            frame: { x: 0, y: 384, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        boredAura1: {
            frame: { x: 0, y: 416, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
        boredAura2: {
            frame: { x: 32, y: 416, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0 },
        },
    },
    meta: {
        scale: '0.3',
    },
    animations: {
        idle: [
            "charIdle1",
        ],
        talk: [
            "talk1",
            "talk2",
        ],
        shakeEar: [
            "shakeEar1",
            "shakeEar2",
            "shakeEar3",
            "shakeEar4",
            "shakeEar5",
        ],
        blink: [
            "blink1",
            "blink2",
            "blink3",
            "blink4",
        ],
        love: [
            "love1",
            "love2",
        ],
        loveTalk: [
            "loveTalk1",
            "loveTalk2",
        ],
        cheer: [
            "cheer1",
            "cheer2",
        ],
        cheerSmile: [
            "cheerSmile1",
            "cheerSmile2",
        ],
        cool: [
            "cool1",
            "cool2",
        ],
        angry: [
            "angry1",
            "angry2",
        ],
        angryTalk: [
            "angryTalk1",
            "angryTalk2",
        ],
        flatFaceTalk: [
            "flatFaceTalk1",
            "flatFaceTalk2",
        ],
        boredFace: [
            "boredFace1",
        ],
        boredAura: [
            "boredAura1",
            "boredAura2",
        ]
    },
};

const spritesheetBasicEkspresionCharacter = new PIXI.Spritesheet(
    PIXI.BaseTexture.from("assets/img/teemo_basic_emot_animation.png"),
    basicCharacterEkspresion
);

let character = {
    animation: "",
    sprite: undefined,
}

let willRemove = 0
let clicked = 0
let idleCheck = null

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

        character.sprite.interactive = true
        character.sprite.addEventListener('tap', e => {
            maybeShouldGo()
        })

        character.sprite.addEventListener('click', e => {
            maybeShouldGo()
        })

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
    removeDialog()
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

async function renderDialog(xParam = 0, yParam = 0, expression = 'cheerSmile', dialogtext = 'play with me click anywhere'){
    removeDialog()
    let dialogPositionX = xParam + 120
    let dialogPositionY = yParam + 50
    // spritesheetBasicCharacter is ready to use!
    animationEkspression = new PIXI.AnimatedSprite(
        spritesheetBasicEkspresionCharacter.animations[expression]
    );

    animationEkspression.x = dialogPositionX;
    animationEkspression.y = dialogPositionY;
    
    animationEkspression.animationSpeed = 0.1;

    animationEkspression.play()
    
    // Create rectangle
    const x = dialogPositionX;
    const y = dialogPositionY - 5;
    const width = gameContainer.clientWidth < 800 ? 200 : 300;
    const height = 130;
    const cornerRadius = 20; 
    const borderWidth = 1
    const borderColor = 0x000000;
    
    const roundedRect = new PIXI.Graphics();
    roundedRect.lineStyle(borderWidth, borderColor);
    roundedRect.beginFill(0xffffff); // Set the fill color
    roundedRect.drawRoundedRect(x, y, width, height, cornerRadius);
    roundedRect.endFill();

    // Create text inside the rectangle
    const textStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: gameContainer.clientWidth < 800 ? 15 : 18,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: gameContainer.clientWidth < 800 ? 80 : 180
    });

    const text = new PIXI.Text(dialogtext, textStyle);
    text.x = dialogPositionX + 120;
    text.y = dialogPositionY + 20;
    roundedRect.addChild(text);
    roundedRect.addChild(animationEkspression);
    let roundedChildData = app.stage.addChild(roundedRect);
}

async function removeDialog(){
    if(app.stage.children.length > 1){
        app.stage.removeChildAt(1)
    }
}

function maybeShouldGo(){
    setTimeout(() => {
        if(willRemove === 0){
            renderDialog(character.sprite.x, character.sprite.y, 'blink', 'Maybe I should go...')
        }
        willRemove++
        console.log('willRemove', willRemove)
    }, 100)
}

function goodBye(){
    renderDialog(character.sprite.x, character.sprite.y, 'shakeEar', 'Ya good bye...')
    setTimeout(() => {
        gameContainer.className = "hidden"
        sessionStorage.setItem('HIDE_GAME', 'hide')
    }, 1500)
}

async function initGame(){
    await spritesheetBasicCharacter.parse();
    await spritesheetBasicEkspresionCharacter.parse()

    if(sessionStorage.getItem('HIDE_GAME')){
        gameContainer.className = "hidden"
    }

    gameContainer.appendChild(app.view);
    renderCharacter("walkDown");
    app.ticker.add(update);

    app.view.addEventListener('click', event => {
        clicked++
        removeDialog()
        if(willRemove === 1){
            goodBye()
        }
        // Get the mouse coordinates relative to the application view
        const mouseX = event.clientX - app.view.getBoundingClientRect().left;
        const mouseY = event.clientY - app.view.getBoundingClientRect().top;

        // Log the x and y coordinates
        targetCoordinate.x = roundToNearest6(mouseX - 100)
        targetCoordinate.y = roundToNearest6(mouseY - 100)
        if(idleCheck) clearInterval(idleCheck)
        idleCheck = setInterval(() => {
            if(clicked % 2 === 0 && willRemove === 0){
                renderDialog(character.sprite.x, character.sprite.y, 'talk', 'play with me or just click me then...')
            }else if (clicked >= 5){
                goodBye()
            }
        }, 2000)
    })

    renderDialog(character.sprite.x, character.sprite.y)
    idleCheck = setInterval(() => {
        if(clicked % 2 === 0 && willRemove === 0){
            renderDialog(character.sprite.x, character.sprite.y, 'talk', 'play with me or just click me then...')
        }else if (clicked >= 5){
            goodBye()
        }
    }, 2000)
}

initGame()
