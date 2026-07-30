namespace SpriteKind {
    export const chest = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    sprites.destroy(mySprite2)
    info.startCountdown(160)
    tiles.setCurrentTilemap(tilemap`artfulvsbanana0`)
    pause(5000)
    mySprite3 = sprites.create(img`
        .......111111111.........
        ......11....11.11........
        ....11.22222222.11.......
        ...11.222222222f.1.......
        ...1.2ff222222ff21.......
        ..11222ff2222ff22111.....
        ..112222ff22ff222111.....
        ..11222222fff2222111.....
        ....22222ffff2222........
        ....2222f222ff222........
        ffff222ff2222ff22fff.....
        444f222f2222222ff44ff....
        ffff222222222222f444f....
        ..fffffffffffffffffff....
        ...ffffffffffffff........
        ffffffffffffffffffffffff.
        222222f22222222f2222222ff
        222222f22222222f22222222f
        222222f22222222f22222222f
        222222f22222222ffff22222f
        2222fff22222222f..fffffff
        fffff.f22222222f..f22222f
        2222f.ffffffffff..f22222f
        2222f.............fffffff
        fffff....................
        `, SpriteKind.Enemy)
    mySprite3.follow(mySprite, 90)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    sprites.destroy(pursuer, effects.spray, 500)
    tiles.setCurrentTilemap(tilemap`artfulvsbanana`)
    pause(5000)
    mySprite2 = sprites.create(img`
        ....fff111111.....
        ....fff11ff11.....
        ....fff11ff11.....
        ....111111111.....
        ffffffffffffffffff
        fffffff111ffff111f
        1111ffff1fffff111f
        1111ffffffffff111f
        1111ffffffffff111f
        1111ffffffffff111f
        ffffffffffffffffff
        ffffffffffffffffff
        .1f.ffffffffff....
        .f1.ffffffffff....
        .1f.ffffffffff....
        .f1.ffffffffff....
        ....f111ff111f....
        ....ffffffffff....
        `, SpriteKind.Enemy)
    mySprite2.follow(mySprite, 90)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let pursuer: Sprite = null
let mySprite: Sprite = null
info.setLife(1)
mySprite = sprites.create(img`
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 e 2 2 e e e e e 5 . . . 
    . . . 5 e e 2 2 e f e e 5 . . . 
    . . . 5 e e e 2 e e e e 5 . . . 
    f f f f f f f f f f f f f f f f 
    f f f f f 7 7 7 2 2 7 f f f f f 
    f 2 e f f 7 7 7 7 2 2 f f e e 2 
    f 2 e f f 7 2 2 2 7 7 f f e 2 2 
    f 2 2 f f 7 7 7 2 7 7 f f 2 2 2 
    f e 2 f f 2 2 7 2 2 7 f f 2 e f 
    f e e 2 f 7 2 2 7 7 7 f f 2 e f 
    f f f f f f f f f f f f f f f f 
    . . . . f f . . . . f . . . . . 
    . . f f f f . . . . f f f . . . 
    . f f f f f . . . . f f f f . . 
    f f f f f f . . . . f f f f f . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level6`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
pause(3000)
pursuer = sprites.create(img`
    . . . 1 1 7 1 1 7 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 7 7 7 7 7 7 1 1 1 . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . f f f f f f f f f f f f f . . 
    f f f . f f f f f f f . . f f . 
    f f f . f f f f f f f . . f f . 
    f f f . f f f f f f f . . f f . 
    . . . . f f f f f f f . . . . . 
    . . f f f f f . . f f f f . . . 
    . f f f f f f . . f f f f . . . 
    . f f f f f . . . f f f f . . . 
    . f f f f . . . . . f f f . . . 
    . f f f . . . . . . f f f . . . 
    `, SpriteKind.Enemy)
pursuer.follow(mySprite, 90)
