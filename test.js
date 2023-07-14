const syllableMap = {
    aa: 'â',
    as: "á",
    af: "à",
    ar: "ả",
    ax: "ã",
    aj: "ạ",
    es: "é",
    ef: "è",
    er: "ẻ",
    ex: "ẽ",
    ej: "ẹ",
    ee: 'ê',
    oo: "ô",
    os: "ó",
    of: "ò",
    or: "ỏ",
    ow: "ơ",
    uw: "ư",
    us: "ú",
    uf: "ù",
    ur: "ủ",
    uj: "ụ",
    dd: "đ",
    w: 'ư',
    aw: 'ă'
};

let dem = 0

function replaceSyllables(input) {
    const regex = new RegExp(Object.keys(syllableMap).join("|"), "g");
    let result = input.match(regex)
    dem = result.length
    return result
}


const input = 'awaagwhawwhdaaaw';
console.log(replaceSyllables(input), dem);
