export const MAKE_MOVE = 'MAKE_MOVE'

export function makeMove(direction) {
    return {
        type: MAKE_MOVE,
        direction
    }
}