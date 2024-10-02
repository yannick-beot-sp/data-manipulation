const express = require('express')
const router = express.Router({ mergeParams: true })
const tidyjs = require('@tidyjs/tidy')
const { tidy, filter, when, map, distinct, arrange, asc, desc, fixedOrder, sort, summarize, summarizeAll, summarizeAt, summarizeIf, total, totalAll, totalAt, totalIf, count, tally, groupBy, rename, slice, sliceHead, sliceMax, sliceMin, sliceSample, sliceTail, innerJoin, leftJoin, fullJoin, mutateWithSummary, mutate, transmute, pick, select, addItems, addRows, pivotWider, pivotLonger, expand, fullSeq, fullSeqDate, fullSeqDateISOString, vectorSeq, vectorSeqDate, replaceNully, complete, fill, debug, rate, cumsum, roll, lag, lead, rowNumber, sum, min, max, mean, meanRate, median, deviation, variance, n, nDistinct, first, last, everything, startsWith, endsWith, contains, matches, numRange, negate, TMath } = tidyjs
const { getBodyArrayOrDefault, validateArray, validateQuery } = require('./utils')

const parseParam = (param) => {
    let result

    try {
        result = eval(param)
    } catch (error) {
        try {
            result = JSON.parse(param)
        } catch (error) {

        }
    }

    return result
}

router.post('/addItems', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "itemsToAdd", next)) {
        return
    }

    const itemsToAdd = parseParam(req.query.itemsToAdd)

    const result = tidy(body, addItems(itemsToAdd))

    res.send(result)
})

router.post('/sort', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "comparators", next)) {
        return
    }

    const comparators = parseParam(req.query.comparators)

    const result = tidy(body, sort(comparators))

    res.send(result)
})

router.post('/complete', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "expandKeys", next)) {
        return
    }
    if (!validateQuery(req.query, "replaceNullySpec", next)) {
        return
    }

    const expandKeys = parseParam(req.query.expandKeys)
    const replaceNullySpec = parseParam(req.query.replaceNullySpec)

    const result = tidy(body, complete(expandKeys, replaceNullySpec))

    res.send(result)
})

router.post('/count', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "groupKeys", next)) {
        return
    }
    if (!validateQuery(req.query, "options", next)) {
        return
    }

    const groupKeys = parseParam(req.query.groupKeys)
    const options = parseParam(req.query.options)

    const result = tidy(body, count(groupKeys, options))

    res.send(result)
})

router.post('/debug', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }

    const label = parseParam(req.query.groupKeys)
    const options = parseParam(req.query.options)

    const result = tidy(body, debug(label, options))

    res.send(result)
})

router.post('/distinct', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "keys", next)) {
        return
    }

    const keys = parseParam(req.query.keys)

    const result = tidy(body, distinct(keys))

    res.send(result)
})

router.post('/expand', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "expandKeys", next)) {
        return
    }

    const expandKeys = parseParam(req.query.expandKeys)

    const result = tidy(body, expand(expandKeys))

    res.send(result)
})

router.post('/fill', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "keys", next)) {
        return
    }

    const keys = parseParam(req.query.keys)

    const result = tidy(body, fill(keys))

    res.send(result)
})

router.post('/filter', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "filterFn", next)) {
        return
    }

    const filterFn = parseParam(req.query.filterFn)

    const result = tidy(body, filter(filterFn))

    res.send(result)
})

router.post('/fullJoin', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "itemsToJoin", next)) {
        return
    }
    if (!validateQuery(req.query, "options", next)) {
        return
    }

    const itemsToJoin = parseParam(req.query.itemsToJoin)
    const options = parseParam(req.query.options)

    const result = tidy(body, fullJoin(itemsToJoin, options))

    res.send(result)
})

router.post('/groupBy', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "groupKeys", next)) {
        return
    }
    if (!validateQuery(req.query, "fns", next)) {
        return
    }

    const groupKeys = parseParam(req.query.groupKeys)
    const fns = parseParam(req.query.fns)
    const options = parseParam(req.query.options)

    const result = tidy(body, groupBy(groupKeys, fns, options))

    res.send(result)
})

router.post('/innerJoin', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "itemsToJoin", next)) {
        return
    }
    if (!validateQuery(req.query, "options", next)) {
        return
    }

    const itemsToJoin = parseParam(req.query.itemsToJoin)
    const options = parseParam(req.query.options)

    const result = tidy(body, innerJoin(itemsToJoin, options))

    res.send(result)
})

router.post('/leftJoin', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "itemsToJoin", next)) {
        return
    }
    if (!validateQuery(req.query, "options", next)) {
        return
    }

    const itemsToJoin = parseParam(req.query.itemsToJoin)
    const options = parseParam(req.query.options)

    const result = tidy(body, leftJoin(itemsToJoin, options))

    res.send(result)
})

router.post('/map', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "mapFn", next)) {
        return
    }

    const mapFn = parseParam(req.query.mapFn)

    const result = tidy(body, map(mapFn))

    res.send(result)
})

router.post('/mutate', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "mutateSpec", next)) {
        return
    }

    const mutateSpec = parseParam(req.query.mutateSpec)

    const result = tidy(body, mutate(mutateSpec))

    res.send(result)
})

router.post('/mutateWithSummary', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "mutateSummarySpec", next)) {
        return
    }

    const mutateSummarySpec = parseParam(req.query.mutateSummarySpec)

    const result = tidy(body, mutateWithSummary(mutateSummarySpec))

    res.send(result)
})

router.post('/rename', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "renameSpec", next)) {
        return
    }

    const renameSpec = parseParam(req.query.renameSpec)

    const result = tidy(body, rename(renameSpec))

    res.send(result)
})

router.post('/replaceNully', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "replaceNullySpec", next)) {
        return
    }

    const replaceNullySpec = parseParam(req.query.replaceNullySpec)

    const result = tidy(body, replaceNully(replaceNullySpec))

    res.send(result)
})

router.post('/select', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "selectKeys", next)) {
        return
    }

    const selectKeys = parseParam(req.query.selectKeys)

    const result = tidy(body, select(selectKeys))

    res.send(result)
})

router.post('/slice', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "start", next)) {
        return
    }
    if (!validateQuery(req.query, "end", next)) {
        return
    }

    const start = parseParam(req.query.start)
    const end = parseParam(req.query.end)

    const result = tidy(body, slice(start, end))

    res.send(result)
})

router.post('/sliceHead', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "n", next)) {
        return
    }

    const n = parseParam(req.query.n)

    const result = tidy(body, sliceHead(n))

    res.send(result)
})

router.post('/sliceTail', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "n", next)) {
        return
    }

    const n = parseParam(req.query.n)

    const result = tidy(body, sliceTail(n))

    res.send(result)
})

router.post('/sliceMin', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "n", next)) {
        return
    }
    if (!validateQuery(req.query, "orderBy", next)) {
        return
    }

    const n = parseParam(req.query.n)
    const orderBy = parseParam(req.query.orderBy)

    const result = tidy(body, sliceMin(n, orderBy))

    res.send(result)
})

router.post('/sliceMax', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "n", next)) {
        return
    }
    if (!validateQuery(req.query, "orderBy", next)) {
        return
    }

    const n = parseParam(req.query.n)
    const orderBy = parseParam(req.query.orderBy)

    const result = tidy(body, sliceMax(n, orderBy))

    res.send(result)
})

router.post('/sliceSample', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "n", next)) {
        return
    }

    const n = parseParam(req.query.n)
    const options = parseParam(req.query.options)

    const result = tidy(body, sliceSample(n, options))

    res.send(result)
})

router.post('/summarize', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "summarizeSpec", next)) {
        return
    }
    if (!validateQuery(req.query, "options", next)) {
        return
    }

    const summarizeSpec = parseParam(req.query.summarizeSpec)
    const options = parseParam(req.query.options)

    const result = tidy(body, summarize(summarizeSpec, options))

    res.send(result)
})

router.post('/summarizeAll', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "summaryFn", next)) {
        return
    }

    const summaryFn = parseParam(req.query.summaryFn)

    const result = tidy(body, summarizeAll(summaryFn))

    res.send(result)
})

router.post('/summarizeAt', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "keys", next)) {
        return
    }
    if (!validateQuery(req.query, "summaryFn", next)) {
        return
    }

    const keys = parseParam(req.query.keys)
    const summaryFn = parseParam(req.query.summaryFn)

    const result = tidy(body, summarizeAt(keys, summaryFn))

    res.send(result)
})

router.post('/summarizeIf', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "predicateFn", next)) {
        return
    }
    if (!validateQuery(req.query, "summaryFn", next)) {
        return
    }

    const predicateFn = parseParam(req.query.predicateFn)
    const summaryFn = parseParam(req.query.summaryFn)

    const result = tidy(body, summarizeIf(predicateFn, summaryFn))

    res.send(result)
})

router.post('/tally', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "options", next)) {
        return
    }

    const options = parseParam(req.query.options)

    const result = tidy(body, tally(options))

    res.send(result)
})

router.post('/total', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "summarizeSpec", next)) {
        return
    }
    if (!validateQuery(req.query, "mutateSpec", next)) {
        return
    }

    const summarizeSpec = parseParam(req.query.summarizeSpec)
    const mutateSpec = parseParam(req.query.mutateSpec)

    const result = tidy(body, total(summarizeSpec, mutateSpec))

    res.send(result)
})

router.post('/totalAll', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "summaryFn", next)) {
        return
    }
    if (!validateQuery(req.query, "mutateSpec", next)) {
        return
    }

    const summaryFn = parseParam(req.query.summaryFn)
    const mutateSpec = parseParam(req.query.mutateSpec)

    const result = tidy(body, totalAll(summaryFn, mutateSpec))

    res.send(result)
})

router.post('/totalAt', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "keys", next)) {
        return
    }
    if (!validateQuery(req.query, "summaryFn", next)) {
        return
    }
    if (!validateQuery(req.query, "mutateSpec", next)) {
        return
    }

    const keys = parseParam(req.query.keys)
    const summaryFn = parseParam(req.query.summaryFn)
    const mutateSpec = parseParam(req.query.mutateSpec)

    const result = tidy(body, totalAt(keys, summaryFn, mutateSpec))

    res.send(result)
})

router.post('/totalIf', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "predicateFn", next)) {
        return
    }
    if (!validateQuery(req.query, "summaryFn", next)) {
        return
    }
    if (!validateQuery(req.query, "mutateSpec", next)) {
        return
    }

    const predicateFn = parseParam(req.query.predicateFn)
    const summaryFn = parseParam(req.query.summaryFn)
    const mutateSpec = parseParam(req.query.mutateSpec)

    const result = tidy(body, totalIf(predicateFn, summaryFn, mutateSpec))

    res.send(result)
})

router.post('/transmute', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "mutateSpec", next)) {
        return
    }

    const mutateSpec = parseParam(req.query.mutateSpec)

    const result = tidy(body, transmute(mutateSpec))

    res.send(result)
})

router.post('/when', (req, res, next) => {
    const body = getBodyArrayOrDefault(req.body)
    if (!validateArray(body)) {
        return
    }
    if (!validateQuery(req.query, "predicate", next)) {
        return
    }
    if (!validateQuery(req.query, "fns", next)) {
        return
    }

    const predicate = parseParam(req.query.predicate)
    const fns = parseParam(req.query.fns)

    const result = tidy(body, when(predicate, fns))

    res.send(result)
})

module.exports = router