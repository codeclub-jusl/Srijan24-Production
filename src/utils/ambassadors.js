const ambassadors = {
    // "halderarindam10000@gmail.com": "aBcDe",
    "ankanbera36@gmail.com": "iwRwp",
    "mbera21062005@gmail.com": "IfN9G",
    "mg8552638@gmail.com": "cVO8X",
    "saagarpriyadarshi2300@gmail.com": "pPMJN",
    "srijansasmal88@gmail.com": "kBSWh",
    "pratham008saha@gmail.com": "nX2f8",
    "tamorijha24@gmail.com": "ZwnVC",
    "spamtithi@gmail.com": "iRP9U",
    "abhishekvishwakarmakv01@gmail.com": "pvFx7",
    "bidwattar@gmail.com": "x9oED",
    "suhrid.beharipaul.it26@heritageit.edu.in": "psyRt",
    "avikbhanja3@gmail.com": "DRlBR",
    "omupsc76@gmail.com": "FFnKx",
    "swashata2003@gmail.com": "rNSYk",
    "kritikas0203@gmail.com": "MPz82",
    "anushkalaheri@gmail.com": "WbV9w",
    "ananya722140@gmail.com": "q1aPm",
    "anurande514@gmail.com": "mKH0g",
    "asmitadan18@gmail.com": "5BVYg",
    "bhattacharyadebayudh13@gmail.com": "5WwT6",
    "gsrijan82@gmail.com": "VUGHd",
    "arponkumarchowdhury34@gmail.com": "pqNU8",
    "tiyasapaul420@gmail.com": "DO7Xk",
    "ayushjaiswal8901@gmail.com": "HVZr5",
    "maitras600@gmail.com": "CLUCV",
    "anuska2004jana@gmail.com": "nmQwv",
    "d3basmi1a@gmail.com": "6QwWn",
    "oindrilanandy64@gmail.com": "aejTt",
    "saptarshi2027paul@gmail.com": "UX04g",
    "mitrasrinjinee12@gmail.com": "KYmQg",
    "meenanishant9@gmail.com": "34wgW",
    "aritraganguly2019@gmail.com": "wfW0b",
    "rahul.prasad1706@gmail.com": "OVFXz",
    "sreenjoysaha2711@outlook.com": "TGo3d",
}

export function findReferralCode(email) {
    if (email in ambassadors) {
        return ambassadors[email];
    } else {
        return undefined;
    }
}
export function getAmbassadorByCode(code) {
    for (const [key, val] of Object.entries(ambassadors)) {
        if (val === code) {
            return key;
        }
    }
    return undefined;
}