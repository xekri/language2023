import { cs } from "./phoneme"

export const letters = {
  a: { name: 'rá', hang: 'ㅏ' },
  b: { name: 'ba', hang: 'ㅃ' },
  c: { name: 'ca', hang: 'ㄲ' },
  d: { name: 'da', hang: 'ㄸ' },
  e: { name: 're', hang: 'ㅓ' },
  f: { name: 'fa', hang: 'ㅸ' },
  g: { name: 'ga', hang: 'ㅇ' },
  h: { name: 'ha', hang: 'ㅎ' },
  i: { name: 'ri', hang: 'ㅣ' },
  k: { name: 'ka', hang: 'ㅈ' },
  m: { name: 'ma', hang: 'ㅁ' },
  n: { name: 'na', hang: 'ㄴ' },
  o: { name: 'ro', hang: 'ㅗ' },
  ø: { name: 'rø', hang: 'ㅛ' },
  p: { name: 'pa', hang: 'ㅂ' },
  r: { name: 'ra', hang: 'ㄹ' },
  s: { name: 'sa', hang: '\u113C' },
  š: { name: 'ša', hang: '\u113C' },
  t: { name: 'ta', hang: 'ㄷ' },
  u: { name: 'ru', hang: 'ㅜ' },
  v: { name: 'va', hang: 'ㅹ' },
  w: { name: 'rw', hang: 'ㅡ' },
  x: { name: 'xa', hang: 'ㅅ' },
  y: { name: 'ry', hang: 'ㅠ' },
  z: { name: 'za', hang: '\u113D' },
  ž: { name: 'ža', hang: 'ㅆ' },
}

const alphabets = {
  cyrl: 'абгдєфңхiжчлмнопкюстувъшѵз',
  deva: 'अबगदएफङहइझचलमनओपकऔथतउभईषऊध',
}

export const dictBase = {
  period: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },

  do: { signifier: 'CV', category: '', type: 'verb/noun', signifiee: '', version: 0, etymology: '' },
  as: { signifier: 'CV', category: '', type: 'postnoun/noun', signifiee: '', version: 0, etymology: '' },

  i: { signifier: 'CV', category: 'pronoun', type: 'noun', signifiee: 'i', version: 0, etymology: '' },
  thou: { signifier: 'CV', category: 'pronoun', type: 'noun', signifiee: 'thou', version: 0, etymology: '' },
  he: { signifier: 'CV', category: 'pronoun', type: 'noun/number', signifiee: 'he', version: 0, etymology: 'Ja そ' },
  now: { signifier: 'CV', category: 'pronoun', type: 'noun', signifiee: 'now', version: 0, etymology: '' },
  here: { signifier: 'CV', category: 'pronoun', type: 'noun', signifiee: 'here', version: 0, etymology: '' },
  something: { signifier: 'CV', category: 'pronoun', type: 'noun', signifiee: '', version: 0, etymology: '' },

  what: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },
  that: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },
  whether: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },

  _quote: { signifier: 'CV', category: 'structure', type: '', signifiee: '', version: 0, etymology: '' },

  der: { signifier: 'CV', category: '', type: 'postnoun', signifiee: '', version: 0, etymology: '' },
  den: { signifier: 'CV', category: '', type: 'postnoun', signifiee: '', version: 0, etymology: '' },
  from: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },
  to: { signifier: 'CV', category: '', type: 'postnoun', signifiee: '', version: 0, etymology: '' },
  about: { signifier: 'CV', category: '', type: 'postnoun', signifiee: '', version: 0, etymology: '' },

  _swap: { signifier: 'CV', category: 'voice', type: 'prenoun', signifiee: '', version: 0, etymology: '' },

  _tense: { signifier: 'CV', category: 'tense', type: 'prenoun', signifiee: '', version: 0, etymology: '' },
  _past: { signifier: 'CV', category: 'tense', type: 'prenoun', signifiee: '=_TENSE LESS ZERO', version: 0, etymology: '' },
  _present: { signifier: 'CV', category: 'tense', type: 'prenoun', signifiee: '=_TENSE ZERO', version: 0, etymology: '' },
  _future: { signifier: 'CV', category: 'tense', type: 'prenoun', signifiee: '=_TENSE ZERO LESS', version: 0, etymology: '' },

  _aspect: { signifier: 'CV', category: 'tense', type: 'prenoun', signifiee: '', version: 0, etymology: '' },
  begin: { signifier: 'CV', category: 'aspect', type: 'prenoun', signifiee: '', version: 0, etymology: '' },
  doing: { signifier: 'CV', category: 'aspect', type: 'prenoun', signifiee: '', version: 0, etymology: '' },
  end: { signifier: 'CV', category: 'aspect', type: 'prenoun', signifiee: '', version: 0, etymology: '' },

  _mood: { signifier: 'CV', category: 'mood', type: 'prenoun', signifiee: '', version: 0, etymology: '' },
  may: { signifier: 'CV', category: 'mood', type: 'prenoun', signifiee: '=_MOOD ZERO LESS', version: 0, etymology: '' },
  must: { signifier: 'CV', category: 'mood', type: 'prenoun', signifiee: '=_MOOD MAX', version: 0, etymology: '' },

  _degree: { signifier: 'CV', category: 'degree', type: '', signifiee: '', version: 0, etymology: '' },
  anti: { signifier: 'CV', category: 'degree', type: 'prenoun', signifiee: '=_DEGREE MINUS NORMAL', version: 0, etymology: '' },
  no: { signifier: 'CV', category: 'degree', type: 'prenoun', signifiee: '=_DEGREE ZERO', version: 0, etymology: '' },
  little: { signifier: 'CV', category: 'degree', type: 'prenoun', signifiee: '=_DEGREE LESS NORMAL', version: 0, etymology: '' },
  very: { signifier: 'CV', category: 'degree', type: 'prenoun', signifiee: '=_DEGREE NORMAL LESS', version: 0, etymology: '' },

  _frequency: { signifier: 'CV', category: '', type: 'prenoun/number', signifiee: '', version: 0, etymology: '' },

  _connect: { signifier: 'CV', category: 'sentence\\sentence/noun/sentence', type: '', signifiee: '', version: 0, etymology: '' },
  until: { signifier: 'CV', category: 'sentence\\sentence/sentence', type: '', signifiee: '', version: 0, etymology: '' },

  typical: { signifier: 'CV', category: '', type: 'prenoun', signifiee: '', version: 0, etymology: '' },
  figurative: { signifier: 'CV', category: '', type: 'prenoun', signifiee: '', version: 0, etymology: '' },

  how_much: { signifier: 'CV', category: '', type: 'numeral', signifiee: '', version: 0, etymology: '' },

  zero: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '0', version: 0, etymology: 'Cmn 零' },
  one: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '1', version: 0, etymology: 'proto-indo-european' },
  two: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '2', version: 0, etymology: 'proto-indo-european' },
  three: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '3', version: 0, etymology: 'proto-indo-european' },
  four: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '4', version: 0, etymology: 'proto-indo-european' },
  five: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '5', version: 0, etymology: 'proto-indo-european' },
  six: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '6', version: 0, etymology: 'proto-indo-european' },
  seven: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '7', version: 0, etymology: 'proto-indo-european' },
  eight: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '8', version: 0, etymology: 'proto-indo-european' },
  nine: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '9', version: 0, etymology: 'proto-indo-european' },
  ten: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '10', version: 0, etymology: '' },
  eleven: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '11', version: 0, etymology: '' },
  twelve: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '12', version: 0, etymology: '' },
  thirteen: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '13', version: 0, etymology: '' },
  fourteen: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '14', version: 0, etymology: '' },
  fifteen: { signifier: 'CV', category: 'digit', type: 'numeral', signifiee: '15', version: 0, etymology: '' },

  exp: { signifier: 'CV', category: 'number', type: 'numeral', signifiee: 'E', version: 0, etymology: '' },

  null: { signifier: 'CV', category: 'number/special', type: 'numeral', signifiee: 'null', version: 0, etymology: '' },
  min: { signifier: 'CV', category: 'number/special', type: 'numeral', signifiee: 'minimum', version: 0, etymology: '' },
  max: { signifier: 'CV', category: 'number/special', type: 'numeral', signifiee: 'maximum, every', version: 0, etymology: '' },

  at_most: { signifier: 'CV', category: 'number/relation', type: 'numeral', signifiee: '≤', version: 0, etymology: '' },
  less: { signifier: 'CV', category: 'number/relation', type: 'numeral', signifiee: '<', version: 0, etymology: '' },

  aleph0: { signifier: 'CV', category: 'number/infinity', type: 'numeral', signifiee: 'countably infinite', version: 0, etymology: '' },
  aleph1: { signifier: 'CV', category: 'number/infinity', type: 'numeral', signifiee: 'uncountably infinite', version: 0, etymology: '' },

  tau: { signifier: 'CV', category: 'number/constant', type: 'numeral', signifiee: 'τ=6.283+ε', version: 0, etymology: '' },
  napier: { signifier: 'CV', category: 'number/constant', type: 'numeral', signifiee: 'e=2.718+ε', version: 0, etymology: '' },

  low: { signifier: 'CV', category: 'number/subjective', type: 'numeral', signifiee: '=PASSIVE MORE NORMAL', version: 0, etymology: '' },
  normal: { signifier: 'CV', category: 'number/subjective', type: 'numeral', signifiee: 'normal', version: 0, etymology: '' },
  high: { signifier: 'CV', category: 'number/subjective', type: 'numeral', signifiee: '=MORE NORMAL', version: 0, etymology: '' },

  decrease: { signifier: 'CV', category: 'number/subjective', type: 'numeral', signifiee: '', version: 0, etymology: '' },
  increase: { signifier: 'CV', category: 'number/subjective', type: 'numeral', signifiee: '', version: 0, etymology: '' },

  plus: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: '+', version: 0, etymology: '' },
  minus: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: '-', version: 0, etymology: '' },
  multiply: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: '*', version: 0, etymology: '' },
  divide: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: '/', version: 0, etymology: '' },
  modulo: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: '%', version: 0, etymology: '' },
  power: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: '^', version: 0, etymology: '' },
  logarithm: { signifier: 'CV', category: 'number/operation', type: 'numeral', signifiee: 'log', version: 0, etymology: '' },

  ordinal: { signifier: 'CV', category: '', type: 'noun/number', signifiee: '', version: 0, etymology: '' },

  not: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },
  and: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },
  or: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },
  imply: { signifier: 'CV', category: '', type: '', signifiee: '', version: 0, etymology: '' },

  back: { signifier: 'CV', category: '', type: 'noun', signifiee: 'S is converse phenomenon of O', version: 0, etymology: '' },

  _language: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is this language', version: 0, etymology: '' },

  have: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S have O', version: 0, etymology: '' },
  take: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S take O', version: 0, etymology: '' },

  below: { signifier: 'CVCV', category: 'position', type: 'noun', signifiee: 'S is under O', version: 0, etymology: '' },
  behind: { signifier: 'CVCV', category: 'position', type: 'noun', signifiee: 'S is behind O', version: 0, etymology: '' },
  left: { signifier: 'CVCV', category: 'position', type: 'noun', signifiee: 'S is in left of O', version: 0, etymology: '' },
  before: { signifier: 'CVCV', category: 'position', type: 'noun', signifiee: 'S is before O', version: 0, etymology: '' },
  in: { signifier: 'CVCV', category: 'position', type: 'noun', signifiee: 'S is in O', version: 0, etymology: '' },

  far: { signifier: 'CVCV', category: 'position/advanced', type: 'noun', signifiee: 'S is far from O', version: 0, etymology: '' },
  cross: { signifier: 'CVCV', category: 'position/advanced', type: 'noun', signifiee: 'S cross O', version: 0, etymology: '' },
  orthogonal: { signifier: 'CVCV', category: 'position/advanced', type: 'noun', signifiee: 'S is orthogonal to O', version: 0, etymology: '' },
  parallel: { signifier: 'CVCV', category: 'position/advanced', type: 'noun', signifiee: 'S is parallel to O', version: 0, etymology: '' },

  big: { signifier: 'CVCV', category: 'volume', type: 'noun', signifiee: 'S is big', version: 0, etymology: '' },
  long: { signifier: 'CVCV', category: 'volume', type: 'noun', signifiee: 'S is long', version: 0, etymology: '' },
  thick: { signifier: 'CVCV', category: 'volume', type: 'noun', signifiee: 'S is thick', version: 0, etymology: '' },
  wide: { signifier: 'CVCV', category: 'volume', type: 'noun', signifiee: 'S is wide', version: 0, etymology: '' },

  point: { signifier: 'CVCV', category: 'mathematics', type: 'noun', signifiee: 'S is point', version: 0, etymology: '' },
  line: { signifier: 'CVCV', category: 'mathematics', type: 'noun', signifiee: 'S is line', version: 0, etymology: '' },
  plane: { signifier: 'CVCV', category: 'mathematics', type: 'noun', signifiee: 'S is plane', version: 0, etymology: '' },
  polygon: { signifier: 'CVCV', category: 'mathematics', type: 'noun', signifiee: 'S is polygon', version: 0, etymology: '' },
  sharp: { signifier: 'CVCV', category: 'mathematics', type: 'noun', signifiee: 'S is angle', version: 0, etymology: '' },
  centre: { signifier: 'CVCV', category: 'mathematics', type: 'noun', signifiee: 'S is centrer of B', version: 0, etymology: '' },
  interval: { signifier: 'CVCV', category: 'mathematics', type: 'noun', signifiee: 'S is range', version: 0, etymology: '' },
  function: { signifier: 'CVCV', category: 'mathematics', type: 'noun', signifiee: 'S is function', version: 0, etymology: '' },

  space: { signifier: 'CVCV', category: 'physics', type: 'noun', signifiee: 'S is space', version: 0, etymology: '' },
  time: { signifier: 'CVCV', category: 'physics', type: 'noun', signifiee: 'S is time', version: 0, etymology: '' },
  wave: { signifier: 'CVCV', category: 'physics', type: 'noun', signifiee: 'S is wave', version: 0, etymology: '' },
  particle: { signifier: 'CVCV', category: 'physics', type: 'noun', signifiee: 'S is particle', version: 0, etymology: '' },
  light: { signifier: 'CVCV', category: 'physics', type: 'noun', signifiee: 'S is light', version: 0, etymology: '' },
  sound: { signifier: 'CVCV', category: 'physics', type: 'noun', signifiee: 'S is sound', version: 0, etymology: '' },
  reflect: { signifier: 'CVCV', category: 'physics', type: 'noun', signifiee: 'S reflect B', version: 0, etymology: '' },

  electron: { signifier: 'CVCV', category: 'physics/particle', type: 'noun', signifiee: 'S is electron', version: 0, etymology: '' },
  atom: { signifier: 'CVCV', category: 'physics/particle', type: 'noun', signifiee: 'S is atom', version: 0, etymology: '' },
  molecule: { signifier: 'CVCV', category: 'physics/particle', type: 'noun', signifiee: 'S is molecule', version: 0, etymology: '' },

  solid: { signifier: 'CVCV', category: 'physics/state', type: 'noun', signifiee: 'S is solid', version: 0, etymology: '' },
  liquid: { signifier: 'CVCV', category: 'physics/state', type: 'noun', signifiee: 'S is liquid', version: 0, etymology: '' },
  gas: { signifier: 'CVCV', category: 'physics/state', type: 'noun', signifiee: 'S is gas', version: 0, etymology: '' },
  plasma: { signifier: 'CVCV', category: 'physics/state', type: 'noun', signifiee: 'S is plasma', version: 0, etymology: '' },

  water: { signifier: 'CVCV', category: 'chemistry', type: 'noun', signifiee: 'S is water', version: 0, etymology: '' },
  salt: { signifier: 'CVCV', category: 'chemistry', type: 'noun', signifiee: 'Aはsalt', version: 0, etymology: '' },
  oil: { signifier: 'CVCV', category: 'chemistry', type: 'noun', signifiee: 'S is oil (fat)', version: 0, etymology: '' },
  metal: { signifier: 'CVCV', category: 'chemistry', type: 'noun', signifiee: 'S is metal', version: 0, etymology: '' },

  colour: { signifier: 'CVCV', category: 'colour', type: 'noun', signifiee: 'S show color O', version: 0, etymology: '' },
  bright: { signifier: 'CVCV', category: 'colour', type: 'noun', signifiee: 'S is bright', version: 0, etymology: '' },
  colourful: { signifier: 'CVCV', category: 'colour', type: 'noun', signifiee: 'S has saturation', version: 0, etymology: '' },
  hue: { signifier: 'CVCV', category: 'colour', type: 'noun', signifiee: 'S has hue O', version: 0, etymology: '' },
  red: { signifier: 'CVCV', category: 'colour', type: 'noun', signifiee: 'S is red', version: 0, etymology: '' },
  orange: { signifier: 'CVCV', category: 'colour', type: 'noun', signifiee: 'S is orange', version: 0, etymology: '' },
  yellow: { signifier: 'CVCV', category: 'colour', type: 'noun', signifiee: 'S is yellow', version: 0, etymology: '' },
  green: { signifier: 'CVCV', category: 'colour', type: 'noun', signifiee: 'S is green', version: 0, etymology: '' },
  blue: { signifier: 'CVCV', category: 'colour', type: 'noun', signifiee: 'S is blue', version: 0, etymology: '' },
  purple: { signifier: 'CVCV', category: 'colour', type: 'noun', signifiee: 'S is purple', version: 0, etymology: '' },

  astral: { signifier: 'CVCV', category: 'space', type: 'noun', signifiee: 'S is astral body', version: 0, etymology: '' },
  star: { signifier: 'CVCV', category: 'space', type: 'noun', signifiee: 'S is star', version: 0, etymology: '' },
  planet: { signifier: 'CVCV', category: 'space', type: 'noun', signifiee: 'S is planet', version: 0, etymology: '' },
  satellite: { signifier: 'CVCV', category: 'space', type: 'noun', signifiee: 'S is satellite', version: 0, etymology: '' },

  land: { signifier: 'CVCV', category: 'geography', type: 'noun', signifiee: 'S is land', version: 0, etymology: '' },
  sky: { signifier: 'CVCV', category: 'geography', type: 'noun', signifiee: 'S is sky', version: 0, etymology: '' },
  mountain: { signifier: 'CVCV', category: 'geography', type: 'noun', signifiee: 'S is mountain', version: 0, etymology: '' },
  sea: { signifier: 'CVCV', category: 'geography', type: 'noun', signifiee: 'S is sea', version: 0, etymology: '' },
  lake: { signifier: 'CVCV', category: 'geography', type: 'noun', signifiee: 'S is lake', version: 0, etymology: '' },
  river: { signifier: 'CVCV', category: 'geography', type: 'noun', signifiee: 'S is river', version: 0, etymology: '' },

  male: { signifier: 'CVCV', category: 'sex', type: 'noun', signifiee: 'S is male', version: 0, etymology: '' },
  female: { signifier: 'CVCV', category: 'sex', type: 'noun', signifiee: 'S is female', version: 0, etymology: '' },
  copulate: { signifier: 'CVCV', category: 'sex', type: 'noun', signifiee: 'S copulate O', version: 0, etymology: '' },

  human: { signifier: 'CVCV', category: 'creature', type: 'noun', signifiee: 'S is human', version: 0, etymology: '' },
  animal: { signifier: 'CVCV', category: 'creature', type: 'noun', signifiee: 'S is animal', version: 0, etymology: '' },
  plant: { signifier: 'CVCV', category: 'creature', type: 'noun', signifiee: 'S is plant', version: 0, etymology: '' },

  part: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is part of O', version: 0, etymology: '' },

  hair: { signifier: 'CVCV', category: 'body/head', type: 'noun', signifiee: 'DER is hair of FROM', version: 0, etymology: '' },
  brain: { signifier: 'CVCV', category: 'body/head', type: 'noun', signifiee: 'DER is brain of FROM', version: 0, etymology: '' },
  eye: { signifier: 'CVCV', category: 'body/head', type: 'noun', signifiee: 'DER is eye of FROM', version: 0, etymology: '' },
  ear: { signifier: 'CVCV', category: 'body/head', type: 'noun', signifiee: 'DER is ear of FROM', version: 0, etymology: '' },
  nose: { signifier: 'CVCV', category: 'body/head', type: 'noun', signifiee: 'DER is nose of FROM', version: 0, etymology: '' },
  mouth: { signifier: 'CVCV', category: 'body/head', type: 'noun', signifiee: 'DER is mouth of FROM', version: 0, etymology: '' },
  tooth: { signifier: 'CVCV', category: 'body/head', type: 'noun', signifiee: 'DER is tooth of FROM', version: 0, etymology: '' },
  tongue: { signifier: 'CVCV', category: 'body/head', type: 'noun', signifiee: 'DER is tongue of FROM', version: 0, etymology: '' },
  throat: { signifier: 'CVCV', category: 'body/head', type: 'noun', signifiee: 'DER is throat of FROM', version: 0, etymology: '' },

  horn: { signifier: 'CVCV', category: 'body/head', type: 'noun', signifiee: 'DER is horn of FROM', version: 0, etymology: '' },

  heart: { signifier: 'CVCV', category: 'body/organ', type: 'noun', signifiee: 'DER is heart of FROM', version: 0, etymology: '' },
  lung: { signifier: 'CVCV', category: 'body/organ', type: 'noun', signifiee: 'DER is lung of FROM', version: 0, etymology: '' },
  gut: { signifier: 'CVCV', category: 'body/organ', type: 'noun', signifiee: 'DER is gut of FROM', version: 0, etymology: '' },

  trunk: { signifier: 'CVCV', category: 'body/trunk', type: 'noun', signifiee: 'DER is trunk of FROM', version: 0, etymology: '' },
  tail: { signifier: 'CVCV', category: 'body/trunk', type: 'noun', signifiee: 'DER is tail of FROM', version: 0, etymology: '' },
  ass: { signifier: 'CVCV', category: 'body/trunk', type: 'noun', signifiee: 'DER is hip of FROM', version: 0, etymology: '' },
  penis: { signifier: 'CVCV', category: 'body/trunk', type: 'noun', signifiee: 'S have penis or clitoris O', version: 0, etymology: '' },
  womb: { signifier: 'CVCV', category: 'body/trunk', type: 'noun', signifiee: 'DER is womb of FROM', version: 0, etymology: '' },
  nipple: { signifier: 'CVCV', category: 'body/trunk', type: 'noun', signifiee: 'DER is nipple of FROM', version: 0, etymology: '' },

  limb: { signifier: 'CVCV', category: 'body/limb', type: 'noun', signifiee: 'DER is limb or branch or wing of FROM', version: 0, etymology: '' },
  hand: { signifier: 'CVCV', category: 'body/limb', type: 'noun', signifiee: 'DER is hand or foot of FROM', version: 0, etymology: '' },
  finger: { signifier: 'CVCV', category: 'body/limb', type: 'noun', signifiee: 'DER is finger of FROM', version: 0, etymology: '' },
  nail: { signifier: 'CVCV', category: 'body/limb', type: 'noun', signifiee: 'DER is nail of FROM', version: 0, etymology: '' },

  nerve: { signifier: 'CVCV', category: 'body/whole', type: 'noun', signifiee: 'DER is nerve of FROM', version: 0, etymology: '' },
  muscle: { signifier: 'CVCV', category: 'body/whole', type: 'noun', signifiee: 'DER is flesh of FROM', version: 0, etymology: '' },
  bone: { signifier: 'CVCV', category: 'body/whole', type: 'noun', signifiee: 'DER is bone of FROM', version: 0, etymology: '' },
  skin: { signifier: 'CVCV', category: 'body/whole', type: 'noun', signifiee: 'DER is skin of FROM', version: 0, etymology: '' },

  fruit: { signifier: 'CVCV', category: 'body/plant', type: 'noun', signifiee: 'DER is fruit of FROM', version: 0, etymology: '' },
  root: { signifier: 'CVCV', category: 'body/plant', type: 'noun', signifiee: 'DER is root of FROM', version: 0, etymology: '' },

  eat: { signifier: 'CVCV', category: 'physiology', type: 'noun', signifiee: 'S eat O', version: 0, etymology: '' },
  digest: { signifier: 'CVCV', category: 'physiology', type: 'noun', signifiee: 'S digest O', version: 0, etymology: '' },
  excrete: { signifier: 'CVCV', category: 'physiology', type: 'noun', signifiee: 'S excrete O', version: 0, etymology: '' },

  sense: { signifier: 'CVCV', category: 'sansation', type: 'noun', signifiee: 'DER feel DEN', version: 0, etymology: '' },
  hear: { signifier: 'CVCV', category: 'sansation', type: 'noun', signifiee: 'DER hear DEN', version: 0, etymology: '' },
  see: { signifier: 'CVCV', category: 'sansation', type: 'noun', signifiee: 'DER see DEN', version: 0, etymology: '' },
  taste: { signifier: 'CVCV', category: 'sansation', type: 'noun', signifiee: 'DER taste DEN', version: 0, etymology: '' },
  smell: { signifier: 'CVCV', category: 'sansation', type: 'noun', signifiee: 'DER smell DEN', version: 0, etymology: '' },
  touch: { signifier: 'CVCV', category: 'sansation', type: 'noun', signifiee: 'DER feel touch of DEN', version: 0, etymology: '' },
  hurt: { signifier: 'CVCV', category: 'sansation', type: 'noun', signifiee: 'DER is hurt by DEN', version: 0, etymology: '' },

  smile: { signifier: 'CVCV', category: 'facial', type: 'noun', signifiee: 'S smile', version: 0, etymology: '' },
  laugh: { signifier: 'CVCV', category: 'facial', type: 'noun', signifiee: 'S laugh', version: 0, etymology: '' },
  frown: { signifier: 'CVCV', category: 'facial', type: 'noun', signifiee: 'S frown', version: 0, etymology: '' },
  cry: { signifier: 'CVCV', category: 'facial', type: 'noun', signifiee: 'S cry', version: 0, etymology: '' },

  happy: { signifier: 'CVCV', category: 'emotion', type: 'noun', signifiee: 'S is happy with O.', version: 0, etymology: '' },
  want: { signifier: 'CVCV', category: 'emotion', type: 'noun', signifiee: 'S want O', version: 0, etymology: '' },
  amaze: { signifier: 'CVCV', category: 'emotion', type: 'noun', signifiee: 'S is surprised at O. low:bore.', version: 0, etymology: '' },
  fear: { signifier: 'CVCV', category: 'emotion', type: 'noun', signifiee: 'S fear O', version: 0, etymology: '' },
  anger: { signifier: 'CVCV', category: 'emotion', type: 'noun', signifiee: 'S is angry for O', version: 0, etymology: '' },
  enjoy: { signifier: 'CVCV', category: 'emotion', type: 'noun', signifiee: 'S enjoy O. negative:suffer.', version: 0, etymology: '' },
  respect: { signifier: 'CVCV', category: 'emotion', type: 'noun', signifiee: 'S respect O. low:despise.', version: 0, etymology: '' },
  pride: { signifier: 'CVCV', category: 'emotion', type: 'noun', signifiee: 'S is proud of O. low:ashamed.', version: 0, etymology: '' },

  think: { signifier: 'CVCV', category: 'intellectual', type: 'noun', signifiee: 'S think O', version: 0, etymology: '' },
  know: { signifier: 'CVCV', category: 'intellectual', type: 'noun', signifiee: 'S know O', version: 0, etymology: '' },
  understand: { signifier: 'CVCV', category: 'intellectual', type: 'noun', signifiee: 'S understand O', version: 0, etymology: '' },
  assume: { signifier: 'CVCV', category: 'intellectual', type: 'noun', signifiee: 'S assume O', version: 0, etymology: '' },
  plan: { signifier: 'CVCV', category: 'intellectual', type: 'noun', signifiee: 'S plan O', version: 0, etymology: '' },
  expect: { signifier: 'CVCV', category: 'intellectual', type: 'noun', signifiee: 'S expect O', version: 0, etymology: '' },
  hope: { signifier: 'CVCV', category: 'intellectual', type: 'noun', signifiee: 'S hope O', version: 0, etymology: '' },
  agree: { signifier: 'CVCV', category: 'intellectual', type: 'noun', signifiee: 'S agree with O', version: 0, etymology: '' },
  deduce: { signifier: 'CVCV', category: 'intellectual', type: 'noun', signifiee: 'S deduce O', version: 0, etymology: '' },
  aim: { signifier: 'CVCV', category: 'intellectual', type: 'noun', signifiee: 'S aim O', version: 0, etymology: '' },

  true: { signifier: 'CVCV', category: 'language', type: 'noun', signifiee: 'S is true', version: 0, etymology: '' },
  speak: { signifier: 'CVCV', category: 'language', type: 'noun', signifiee: 'S say O', version: 0, etymology: '' },
  write: { signifier: 'CVCV', category: 'language', type: 'noun', signifiee: 'S write O', version: 0, etymology: '' },
  read: { signifier: { alias: 'WRITE-BACK' }, category: 'language', type: 'noun', signifiee: 'S read O', version: 0, etymology: '' },

  declare: { signifier: 'CVCV', category: 'activity', type: 'noun', signifiee: 'S declare O', version: 0, etymology: '' },
  ask: { signifier: 'CVCV', category: 'activity', type: 'noun', signifiee: 'S ask O', version: 0, etymology: '' },
  apologise: { signifier: 'CVCV', category: 'activity', type: 'noun', signifiee: 'S apologise for O', version: 0, etymology: '' },
  appreciate: { signifier: 'CVCV', category: 'activity', type: 'noun', signifiee: 'S appreciate O', version: 0, etymology: '' },
  forgive: { signifier: 'CVCV', category: 'activity', type: 'noun', signifiee: 'S forgive O', version: 0, etymology: '' },
  deceive: { signifier: 'CVCV', category: 'activity', type: 'noun', signifiee: 'S deceive O', version: 0, etymology: '' },

  greet: { signifier: 'CVCV', category: 'activity', type: 'noun', signifiee: 'S greet to O', version: 0, etymology: '' },
  fight: { signifier: 'CVCV', category: 'activity', type: 'noun', signifiee: 'S fight against O', version: 0, etymology: '' },

  play: { signifier: 'CVCV', category: 'culture', type: 'noun', signifiee: 'S play O', version: 0, etymology: '' },
  dance: { signifier: 'CVCV', category: 'culture', type: 'noun', signifiee: 'S dance O', version: 0, etymology: '' },
  music: { signifier: 'CVCV', category: 'culture', type: 'noun', signifiee: 'S musically play O', version: 0, etymology: '' },
  intercourse: { signifier: 'CVCV', category: 'culture', type: 'noun', signifiee: 'S have intercourse with O', version: 0, etymology: '' },

  building: { signifier: 'CVCV', category: 'civilisation', type: 'noun', signifiee: 'S is building', version: 0, etymology: '' },
  town: { signifier: 'CVCV', category: 'civilisation', type: 'noun', signifiee: 'S is town or city', version: 0, etymology: '' },
  nation: { signifier: 'CVCV', category: 'civilisation', type: 'noun', signifiee: 'S is nation', version: 0, etymology: '' },
  group: { signifier: 'CVCV', category: 'civilisation', type: 'noun', signifiee: 'S is group or organisation', version: 0, etymology: '' },

  world: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is world', version: 0, etymology: '' },
  person: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is person', version: 0, etymology: '' },
  live: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is alive', version: 0, etymology: '' },
  wake: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is awake', version: 0, etymology: '' },
  old: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is old', version: 0, etymology: '' },
  rot: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is rotten', version: 0, etymology: '' },
  health: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is healthy', version: 0, etymology: '' },
  temporary: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is temporal', version: 0, etymology: '' },
  unit: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is unit', version: 0, etymology: '' },

  cause: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S cause O', version: 0, etymology: '' },
  influence: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S influence O', version: 0, etymology: '' },
  home: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is based on O', version: 0, etymology: '' },
  consume: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S consume O', version: 0, etymology: '' },
  differ: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S differ from O', version: 0, etymology: '' },
  value: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is worth O', version: 0, etymology: '' },
  make: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S make O', version: 0, etymology: '' },
  leave: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S leave O', version: 0, etymology: '' },
  rotate: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S rotate around O', version: 0, etymology: '' },
  use: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is for purpose O', version: 0, etymology: '' },
  model: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S simulate O', version: 0, etymology: '' },
  imitate: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S imitate O', version: 0, etymology: '' },
  status: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is state of O', version: 0, etymology: '' },
  manner: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is manner of O', version: 0, etymology: '' },
  system: { signifier: 'CVCV', category: '', type: 'noun', signifiee: 'S is system', version: 0, etymology: '' },

  meter: { signifier: { alias: `UNIT-${letters.m.name}` }, category: 'SI unit', type: 'noun', signifiee: 'S is 1m', version: 0, etymology: '' },
  second: { signifier: { alias: `UNIT-${letters.s.name}` }, category: 'SI unit', type: 'noun', signifiee: 'S is 1s', version: 0, etymology: '' },
  kilogram: { signifier: { alias: `UNIT-${letters.k.name}${letters.g.name}` }, category: 'SI unit', type: 'noun', signifiee: 'S is 1kg', version: 0, etymology: '' },
  ampere: { signifier: { alias: `UNIT-${letters.k.name}${letters.a.name}` }, category: 'SI unit', type: 'noun', signifiee: 'S is 1A', version: 0, etymology: '' },
  kelvin: { signifier: { alias: `UNIT-${letters.k.name}` }, category: 'SI unit', type: 'noun', signifiee: 'S is 1K', version: 0, etymology: '' },
  candela: { signifier: { alias: `UNIT-${letters.c.name}${letters.d.name}` }, category: 'SI unit', type: 'noun', signifiee: 's is 1cd', version: 0, etymology: '' },
}