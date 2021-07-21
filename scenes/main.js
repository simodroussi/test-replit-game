const player = add([
  sprite('player'),
  scale(0.5),
  pos(20,20),
  body()
  ])

const MOVE_SPEED = 150

keyDown('right', ()=> {
  player.move(MOVE_SPEED, 0)
})

keyDown('left', ()=> {
  player.move(-MOVE_SPEED, 0)
})

  addLevel([
    '     ',
    '  @  ',
    '     ',
    '     ',
    'xxxxx'
  ],{
    width: 40,
    height: 40,
    'x': [sprite('ground'), solid()],
    '@': [sprite('enemy'), scale(0.5), body(), 'dangerous']

  })

  player.collides('dangerous', () => {
    destroy(player)
  })