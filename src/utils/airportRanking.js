var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { airports } from '../data/airports';
function splitmix32(a) {
    return function () {
        a |= 0;
        a = a + 0x9e3779b9 | 0;
        var t = a ^ a >>> 16;
        t = Math.imul(t, 0x21f0aaad);
        t = t ^ t >>> 15;
        t = Math.imul(t, 0x735a2d97);
        return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
    };
}
function seededShuffle(array, randomFunc) {
    var _a;
    var result = __spreadArray([], array, true);
    var currentIndex = result.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(randomFunc() * currentIndex);
        currentIndex--;
        _a = [result[randomIndex], result[currentIndex]], result[currentIndex] = _a[0], result[randomIndex] = _a[1];
    }
    return result;
}
function getSeed() {
    var envSeed = process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA || process.env.COMMIT_REF || process.env.VERCEL_GIT_COMMIT_SHA;
    if (envSeed) {
        var hash = 0;
        for (var i = 0; i < envSeed.length; i++) {
            var char = envSeed.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash;
    }
    return 2026; // Default build-time fallback seed
}
export function getRankedAirports() {
    var rng = splitmix32(getSeed());
    var fixedTopSlugs = ["weifeng", "feimaoyun"];
    var priorityPoolSlugs = ["firefly", "wuyou", "lingmao", "kuajieyun", "shanyue"];
    var weifeng = airports.find(function (a) { return a.slug === 'weifeng'; });
    var feimaoyun = airports.find(function (a) { return a.slug === 'feimaoyun'; });
    var priorityAirports = airports.filter(function (a) { return priorityPoolSlugs.includes(a.slug); });
    var remainingAirports = airports.filter(function (a) { return !fixedTopSlugs.includes(a.slug) && !priorityPoolSlugs.includes(a.slug); });
    var shuffledPriority = seededShuffle(priorityAirports, rng);
    var shuffledRemaining = seededShuffle(remainingAirports, rng);
    var ranked = [];
    if (weifeng)
        ranked.push(weifeng);
    if (feimaoyun)
        ranked.push(feimaoyun);
    return ranked.concat(shuffledPriority, shuffledRemaining);
}
