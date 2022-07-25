import * as img1 from '../assets/images/card-2-clubs.png';
import * as img2 from '../assets/images/card-3-clubs.png';
import * as img3 from '../assets/images/card-4-clubs.png';
import * as img4 from '../assets/images/card-5-clubs.png';
import * as img5 from '../assets/images/card-6-clubs.png';
import * as img6 from '../assets/images/card-7-clubs.png';
import * as img7 from '../assets/images/card-8-clubs.png';
import * as img8 from '../assets/images/card-9-diamonds.png';

export interface Images {
    img: string,
    matched: boolean
}

const A: string = img1.default;
const B: string = img2.default;
const C: string = img3.default;
const D: string = img4.default;
const E: string = img5.default;
const F: string = img6.default;
const G: string = img7.default;
const H: string = img8.default;

    export const imagesGame: Array<Images> = [
    { img: A, matched: false}, 
    { img: B, matched: false},
    { img: C, matched: false},
    { img: D, matched: false},
    { img: E, matched: false},
    { img: F, matched: false},
    { img: G, matched: false},
    { img: H, matched: false},
]