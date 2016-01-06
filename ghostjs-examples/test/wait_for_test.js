import ghost from 'ghostjs'
import assert from 'assert'

describe('waitFor', () => {
  it('we can wait', async () => {
    var curr = 0
    var value = await ghost.waitFor(() => {
      curr++
      return curr === 10
    }, 10)
    assert.equal(curr, 10)
  })
})