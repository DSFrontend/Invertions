/**
 * Merge two arrays and count the number of inversions.
 *
 * @param {Array} A - the first input array
 * @param {Array} B - the second input array
 * @return {Object} an object containing the merged array and the number of inversions
 */
const merge = (A, B) => {
    let inv = A.inv + B.inv

    let C = []
    let i = 0
    let j = 0
    while (i < A.arr.length && j < B.arr.length) {
        if (A.arr[i] < B.arr[j]) {
            C.push(A.arr[i])
            i++
        } else {
            C.push(B.arr[j])
            j++
            inv++
        }
    }
    if (i < A.arr.length) {
        C = C.concat(A.arr.slice(i))
    }
    if (j < B.arr.length) {
        C = C.concat(B.arr.slice(j))
    }
    return { arr: C, inv }
}
//[1, 3, 5], [2, 4, 6]
const invertions = (arr) => {
    let mid = arr.length / 2
    if (arr.length < 2) {
        return { arr, inv: 0 }
    }
    let { arr: arr1, inv: leftInv } = invertions(arr.slice(0, mid))
    let { arr: arr2, inv: rightInv } = invertions(arr.slice(mid))
    return merge({ arr: arr1, inv: leftInv }, { arr: arr2, inv: rightInv })
}
//[1,2,3]
//[2,3,1]
//[1]

const p = {
    niyaz: [
        {title: 'The Green Mile', rate: 3},
        {title: 'The Shawshank Redemption', rate: 1},
        {title: 'The Lord of the Rings', rate: 2},
        {title: 'Inception', rate: 4},
        {title: 'Shrek', rate: 5},
        {title: 'Gladiator', rate: 6},
    ],
    damir: [
        {title: 'The Green Mile', rate:2},
        {title: 'Gladiator', rate: 1},
        {title: 'Shrek', rate: 3},
        {title: 'Inception', rate: 4},
        {title: 'The Lord of the Rings', rate: 5},
        {title: 'The Shawshank Redemption', rate: 6},
    ],
    timur: [
        {title: 'The Green Mile', rate: 5},
        {title: 'The Shawshank Redemption', rate: 4},
        {title: 'The Lord of the Rings', rate: 6},
        {title: 'Inception', rate: 3},
        {title: 'Shrek', rate: 1},
        {title: 'Gladiator', rate: 2},
    ],
    alexey: [
        {title: 'The Green Mile', rate: 3},
        {title: 'The Shawshank Redemption', rate: 2},
        {title: 'The Lord of the Rings', rate: 4},
        {title: 'Inception', rate: 5},
        {title: 'Shrek', rate: 1},
        {title: 'Gladiator', rate: 6},
    ],
    uraD: [
        {title: 'The Green Mile', rate: 6},
        {title: 'The Shawshank Redemption', rate: 5},
        {title: 'Shrek', rate: 4},
        {title: 'Inception', rate: 3},
        {title: 'Gladiator', rate: 2},
        {title: 'The Lord of the Rings', rate: 1},
    ],
    fedor: [
        {title: 'The Green Mile', rate: 5},
        {title: 'The Shawshank Redemption', rate: 3},
        {title: 'The Lord of the Rings', rate: 2},
        {title: 'Inception', rate: 6},
        {title: 'Shrek', rate: 4},
        {title: 'Gladiator', rate: 1},
    ],
    pavel: [
        {title: 'The Green Mile', rate: 5},
        {title: 'The Shawshank Redemption', rate: 3},
        {title: 'The Lord of the Rings', rate: 2},
        {title: 'Inception', rate: 6},
        {title: 'Shrek', rate: 4},
        {title: 'Gladiator', rate: 1},
    ]


}

function init(targetP, comparedP) {
    const arr = [...targetP].sort((a, b) => a.rate - b.rate)

    const result = []
    for (let i = 0; i < arr.length; i++) {
        const title = arr[i].title
        const el = comparedP.find((el) => el.title === title)
        el ? result.push(el.rate) : null
    }
    console.log(result)
    const inv = invertions(result)
    return inv
}

const inv = init(p.pavel, p.uraD)
console.log(inv)
console.log((1 - inv.inv/p.alexey.length) * 100 )
