let mySprite = sprites.create(assets.image`cyan`, SpriteKind.Player)
mySprite.setScale(3, ScaleAnchor.Middle)
animation.runImageAnimation(
mySprite,
assets.animation`pink`,
100,
true
)
