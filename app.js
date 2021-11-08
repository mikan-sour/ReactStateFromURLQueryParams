
const myPost = {
    dateFrom:'2021-09-01',
    dateTo:'2021-10-01',
    countries:['Brasil','Paraguay','Jamaica','Antarctica'],
    areas:['001','002','003','005'],
    isLimted:false,
    categories:['core','fleece','sweats']
}

const paramsEncoded = encodeURIComponent(JSON.stringify(myPost))

console.log(paramsEncoded);

console.log('#########')
console.log('#########')
console.log('#########')
console.log('#########')
console.log('#########')

const paramsDecoded = decodeURIComponent(paramsEncoded);
console.log(JSON.parse(paramsDecoded)['countries']);