import test from 'ava'
import assert from 'assert'
import safeEval from 'safe-eval'

import store from '../../../client/store/actions.js'

console.log(store)

test('assert true', t => {
    assert(true)
})

function evalMacro(t, input, expected) {
    t.is(eval(input), expected)
}

function safeEvalMacro(t, input, expected) {
    t.is(safeEval(input), expected)
}

test('eval test', [evalMacro, safeEvalMacro], '2 + 2', 4)

test('promise test', t => {
    t.plan(1)

    return Promise.resolve(3).then(n => {
        t.is(n, 3)
    })
})

