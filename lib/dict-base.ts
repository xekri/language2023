export const letters = {
  a: { name: 'hela', cyrl: 'а' },
  b: { name: 'ba', cyrl: 'б' },
  c: { name: 'ca', cyrl: 'г' },
  d: { name: 'da', cyrl: 'д' },
  e: { name: 'le', cyrl: 'є' },
  f: { name: 'fa', cyrl: 'ф' },
  g: { name: 'ga', cyrl: 'ң' },
  h: { name: 'ha', cyrl: 'х' },
  i: { name: 'li', cyrl: 'i' },
  j: { name: 'ja', cyrl: 'ж' },
  k: { name: 'ka', cyrl: 'к' },
  l: { name: 'la', cyrl: 'л' },
  m: { name: 'ma', cyrl: 'м' },
  n: { name: 'na', cyrl: 'н' },
  o: { name: 'lo', cyrl: 'о' },
  p: { name: 'pa', cyrl: 'п' },
  q: { name: 'qa', cyrl: 'ҁ' },
  ø: { name: 'rø', cyrl: 'ю' },
  s: { name: 'sa', cyrl: 'с' },
  t: { name: 'ta', cyrl: 'т' },
  u: { name: 'lu', cyrl: 'у' },
  v: { name: 'va', cyrl: 'в' },
  w: { name: 'lw', cyrl: 'ъ' },
  x: { name: 'xa', cyrl: 'ш' },
  y: { name: 'ly', cyrl: 'ѵ' },
  z: { name: 'za', cyrl: 'з' },
}

export const dictBase = {
  _language: { name: 'CVCVCV', category: '', type: 'noun', named: 'S is this language', version: 0, etymology: '' },

  comma: { name: 'CV', category: '', type: '', named: '', version: 0, etymology: '' },
  period: { name: 'CV', category: '', type: '', named: '', version: 0, etymology: '' },

  about: { name: 'fa', category: '', type: 'mark', named: '', version: 0, etymology: 'Jpn は' },
  der: { name: 'de', category: '', type: 'mark', named: '', version: 0, etymology: 'Deu der' },
  den: { name: 'la', category: '', type: 'mark', named: '', version: 0, etymology: 'Fas را' },
  _swap: { name: 'ta', category: '', type: '* noun: noun', named: '', version: 0, etymology: 'Fin -taan' },
  of: { name: 'no', category: '', type: '', named: '', version: 0, etymology: 'Jpn の' },

  _tense: { name: 'CV', category: '', type: '', named: '-:past, 0:present, +:future', version: 0, etymology: '' },
  _aspect: { name: 'CV', category: '', type: '', named: 'min:beign, max:end', version: 0, etymology: '' },

  do: { name: 'xa', category: '', type: '* noun: verb', named: '', version: 0, etymology: 'Ltc 者' },
  as: { name: 'CV', category: '', type: '* noun: mark', named: '', version: 0, etymology: '' },

  i: { name: 'va', category: 'pronoun', type: 'noun', named: 'i', version: 0, etymology: 'Jpn わ' },
  thou: { name: 'ty', category: 'pronoun', type: 'noun', named: 'thou', version: 0, etymology: 'french tu' },
  he: { name: 'si', category: 'pronoun', type: 'noun', named: 'this', version: 0, etymology: '' },
  he1: { name: 'se', category: 'pronoun', type: 'noun', named: 'that', version: 0, etymology: '' },
  he2: { name: 'sa', category: 'pronoun', type: 'noun', named: 'yon', version: 0, etymology: '' },
  now: { name: 'CV', category: 'pronoun', type: 'noun', named: 'now', version: 0, etymology: '' },
  here: { name: 'CV', category: 'pronoun', type: 'noun', named: 'here', version: 0, etymology: '' },
  something: { name: 'CV', category: 'pronoun', type: 'noun', named: '', version: 0, etymology: '' },

  what: { name: 'xu', category: '', type: '', named: '', version: 0, etymology: 'Ltc 誰' },
  that: { name: 'CV', category: '', type: '', named: '', version: 0, etymology: '' },
  whether: { name: 'CV', category: '', type: '', named: '', version: 0, etymology: '' },

  so_much: { name: 'CV', category: '', type: '(* numeral verb): verb', named: '', version: 0, etymology: '' },
  how_much: { name: 'CV', category: '', type: 'numeral?', named: '', version: 0, etymology: '' },

  _quote: { name: 'bi', category: 'structure', type: '* loan *: noun', named: '', version: 0, etymology: '' },
  _insert: { name: 'xi', category: 'structure', type: '', named: '', version: 0, etymology: '' },
  _insert_end: { name: 'xy', category: 'structure', type: '', named: '', version: 0, etymology: '' },

  unrestrictive: { name: 'CV', category: '', type: '* verb: verb', named: '', version: 0, etymology: '' },
  typical: { name: 'CV', category: '', type: '* verb: verb', named: '', version: 0, etymology: '' },
  figurative: { name: 'CV', category: '', type: '* verb: verb', named: '', version: 0, etymology: '' },

  zero: { name: 'li', category: 'digit', type: 'numeral', named: '0', version: 0, etymology: 'Cmn 零' },
  one: { name: 've', category: 'digit', type: 'numeral', named: '1', version: 0, etymology: 'PIE' },
  two: { name: 'da', category: 'digit', type: 'numeral', named: '2', version: 0, etymology: 'PIE' },
  three: { name: 'to', category: 'digit', type: 'numeral', named: '3', version: 0, etymology: 'PIE' },
  four: { name: 'qu', category: 'digit', type: 'numeral', named: '4', version: 0, etymology: 'PIE' },
  five: { name: 'pw', category: 'digit', type: 'numeral', named: '5', version: 0, etymology: 'PIE' },
  six: { name: 'sø', category: 'digit', type: 'numeral', named: '6', version: 0, etymology: 'PIE' },
  seven: { name: 'zy', category: 'digit', type: 'numeral', named: '7', version: 0, etymology: 'PIE' },
  eight: { name: 'ki', category: 'digit', type: 'numeral', named: '8', version: 0, etymology: 'PIE' },
  nine: { name: 'ne', category: 'digit', type: 'numeral', named: '9', version: 0, etymology: 'PIE' },
  ten: { name: 'ga', category: 'digit', type: 'numeral', named: '10', version: 0, etymology: '' },
  eleven: { name: 'Co', category: 'digit', type: 'numeral', named: '11', version: 0, etymology: '' },
  twelve: { name: 'Cu', category: 'digit', type: 'numeral', named: '12', version: 0, etymology: '' },
  thirteen: { name: 'Cw', category: 'digit', type: 'numeral', named: '13', version: 0, etymology: '' },
  fourteen: { name: 'Cø', category: 'digit', type: 'numeral', named: '14', version: 0, etymology: '' },
  fifteen: { name: 'Cy', category: 'digit', type: 'numeral', named: '15', version: 0, etymology: '' },

  exp: { name: 'CV', category: '數字/記號', type: 'numeral', named: 'E', version: 0, etymology: '' },

  null: { name: 'CV', category: 'number/special', type: 'numeral', named: 'null', version: 0, etymology: '' },
  min: { name: 'CV', category: 'number/special', type: 'numeral', named: 'minimum', version: 0, etymology: '' },
  max: { name: 'CV', category: 'number/special', type: 'numeral', named: 'maximum, every', version: 0, etymology: '' },

  at_most: { name: 'CV', category: 'number/relation', type: 'numeral', named: '≤', version: 0, etymology: '' },
  less_than: { name: 'CV', category: 'number/relation', type: 'numeral', named: '<', version: 0, etymology: '' },

  negative: { name: 'CV', category: 'number/special', type: 'numeral', named: '=LESS_THAN ZERO', version: 0, etymology: '' },
  positive: { name: 'CV', category: 'number/special', type: 'numeral', named: '=ZERO LESS_THAN', version: 0, etymology: '' },

  aleph0: { name: 'CV', category: 'number/special', type: 'numeral', named: 'countably infinite', version: 0, etymology: '' },
  aleph1: { name: 'CV', category: 'number/special', type: 'numeral', named: 'uncountably infinite', version: 0, etymology: '' },

  tau: { name: 'CV', category: 'number/consonant', type: 'numeral', named: 'τ=6.283+ε', version: 0, etymology: '' },
  napier: { name: 'CV', category: 'number/consonant', type: 'numeral', named: 'e=2.718+ε', version: 0, etymology: '' },

  normal: { name: 'CV', category: 'number/special', type: 'numeral', named: 'normal', version: 0, etymology: '' },
  high: { name: 'CV', category: 'number/special', type: 'numeral', named: '=MORE NORMAL', version: 0, etymology: '' },
  low: { name: 'CV', category: 'number/special', type: 'numeral', named: '=PASSIVE MORE NORMAL', version: 0, etymology: '' },

  plus: { name: 'CV', category: 'number/operation', type: 'numeral', named: '+', version: 0, etymology: '' },
  minus: { name: 'CV', category: 'number/operation', type: 'numeral', named: '-', version: 0, etymology: '' },
  multiply: { name: 'CV', category: 'number/operation', type: 'numeral', named: '*', version: 0, etymology: '' },
  divide: { name: 'CV', category: 'number/operation', type: 'numeral', named: '/', version: 0, etymology: '' },
  modulo: { name: 'CV', category: 'number/operation', type: 'numeral', named: '%', version: 0, etymology: '' },
  power: { name: 'CV', category: 'number/operation', type: 'numeral', named: '^', version: 0, etymology: '' },
  logarithm: { name: 'CV', category: 'number/operation', type: 'numeral', named: 'log', version: 0, etymology: '' },

  ordinal: { name: 'CV', category: '', type: '* number: noun', named: '', version: 0, etymology: '' },

  not: { name: 'zi', category: '', type: '', named: '', version: 0, etymology: '' },
  and: { name: 'CV', category: '', type: '', named: '', version: 0, etymology: '' },
  or: { name: 'CV', category: '', type: '', named: '', version: 0, etymology: '' },
  imply: { name: 'CV', category: '', type: '', named: '', version: 0, etymology: '' },

  back: { name: 'CV', category: '', type: 'noun', named: 'S is converse phenomenon of O', version: 0, etymology: '' },

  have: { name: 'ha', category: '', type: 'noun', named: 'S have O', version: 0, etymology: 'Lat habere' },
  give: { name: 'ce', category: '', type: 'noun', named: 'S give O', version: 0, etymology: 'DGem gebaną' },
  take: { name: { alias: 'GIVE-BACK' }, category: '', type: 'noun', named: 'S take O', version: 0, etymology: '' },

  below: { name: 'CVCV', category: 'position', type: 'noun', named: 'S is under O', version: 0, etymology: '' },
  behind: { name: 'CVCV', category: 'position', type: 'noun', named: 'S is behind O', version: 0, etymology: '' },
  left: { name: 'CVCV', category: 'position', type: 'noun', named: 'S is in left of O', version: 0, etymology: '' },
  before: { name: 'CVCV', category: 'position', type: 'noun', named: 'S is before O', version: 0, etymology: '' },
  in: { name: 'CVCV', category: 'position', type: 'noun', named: 'S is in O', version: 0, etymology: '' },

  far: { name: 'CVCV', category: 'position/advanced', type: 'noun', named: 'S is far from O', version: 0, etymology: '' },
  cross: { name: 'CVCV', category: 'position/advanced', type: 'noun', named: 'S cross O', version: 0, etymology: '' },
  orthogonal: { name: 'CVCV', category: 'position/advanced', type: 'noun', named: 'S is orthogonal to O', version: 0, etymology: '' },
  parallel: { name: 'CVCV', category: 'position/advanced', type: 'noun', named: 'S is parallel to O', version: 0, etymology: '' },

  big: { name: 'CVCV', category: 'volume', type: 'noun', named: 'S is big', version: 0, etymology: '' },
  long: { name: 'CVCV', category: 'volume', type: 'noun', named: 'S is long', version: 0, etymology: '' },
  thick: { name: 'CVCV', category: 'volume', type: 'noun', named: 'S is thick', version: 0, etymology: '' },
  wide: { name: 'CVCV', category: 'volume', type: 'noun', named: 'S is wide', version: 0, etymology: '' },

  point: { name: 'CVCV', category: 'mathematics', type: 'noun', named: 'S is point', version: 0, etymology: '' },
  line: { name: 'CVCV', category: 'mathematics', type: 'noun', named: 'S is line', version: 0, etymology: '' },
  plane: { name: 'CVCV', category: 'mathematics', type: 'noun', named: 'S is plane', version: 0, etymology: '' },
  polygon: { name: 'CVCV', category: 'mathematics', type: 'noun', named: 'S is polygon', version: 0, etymology: '' },
  sharp: { name: 'CVCV', category: 'mathematics', type: 'noun', named: 'S is angle', version: 0, etymology: '' },
  centre: { name: 'CVCV', category: 'mathematics', type: 'noun', named: 'S is centrer of B', version: 0, etymology: '' },
  interval: { name: 'CVCV', category: 'mathematics', type: 'noun', named: 'S is range', version: 0, etymology: '' },
  function: { name: 'CVCV', category: 'mathematics', type: 'noun', named: 'S is function', version: 0, etymology: '' },

  space: { name: 'CVCV', category: 'physics', type: 'noun', named: 'S is space', version: 0, etymology: '' },
  time: { name: 'CVCV', category: 'physics', type: 'noun', named: 'S is time', version: 0, etymology: '' },
  wave: { name: 'CVCV', category: 'physics', type: 'noun', named: 'S is wave', version: 0, etymology: '' },
  particle: { name: 'CVCV', category: 'physics', type: 'noun', named: 'S is particle', version: 0, etymology: '' },
  light: { name: 'CVCV', category: 'physics', type: 'noun', named: 'S is light', version: 0, etymology: '' },
  sound: { name: 'CVCV', category: 'physics', type: 'noun', named: 'S is sound', version: 0, etymology: '' },
  reflect: { name: 'CVCV', category: 'physics', type: 'noun', named: 'S reflect B', version: 0, etymology: '' },

  electron: { name: 'CVCV', category: 'physics/particle', type: 'noun', named: 'S is electron', version: 0, etymology: '' },
  atom: { name: 'CVCV', category: 'physics/particle', type: 'noun', named: 'S is atom', version: 0, etymology: '' },
  molecule: { name: 'CVCV', category: 'physics/particle', type: 'noun', named: 'S is molecule', version: 0, etymology: '' },

  solid: { name: 'CVCV', category: 'physics/state', type: 'noun', named: 'S is solid', version: 0, etymology: '' },
  liquid: { name: 'CVCV', category: 'physics/state', type: 'noun', named: 'S is liquid', version: 0, etymology: '' },
  gas: { name: 'CVCV', category: 'physics/state', type: 'noun', named: 'S is gas', version: 0, etymology: '' },
  plasma: { name: 'CVCV', category: 'physics/state', type: 'noun', named: 'S is plasma', version: 0, etymology: '' },

  water: { name: 'CVCV', category: 'chemistry', type: 'noun', named: 'S is water', version: 0, etymology: '' },
  salt: { name: 'CVCV', category: 'chemistry', type: 'noun', named: 'Aはsalt', version: 0, etymology: '' },
  oil: { name: 'CVCV', category: 'chemistry', type: 'noun', named: 'S is oil (fat)', version: 0, etymology: '' },
  metal: { name: 'CVCV', category: 'chemistry', type: 'noun', named: 'S is metal', version: 0, etymology: '' },

  colour: { name: 'CVCV', category: 'colour', type: 'noun', named: 'S show color O', version: 0, etymology: '' },
  bright: { name: 'CVCV', category: 'colour', type: 'noun', named: 'S is bright', version: 0, etymology: '' },
  colourful: { name: 'CVCV', category: 'colour', type: 'noun', named: 'S has saturation', version: 0, etymology: '' },
  red: { name: 'CVCV', category: 'colour', type: 'noun', named: 'S is red', version: 0, etymology: '' },
  orange: { name: 'CVCV', category: 'colour', type: 'noun', named: 'S is orange', version: 0, etymology: '' },
  yellow: { name: 'CVCV', category: 'colour', type: 'noun', named: 'S is yellow', version: 0, etymology: '' },
  green: { name: 'CVCV', category: 'colour', type: 'noun', named: 'S is green', version: 0, etymology: '' },
  blue: { name: 'CVCV', category: 'colour', type: 'noun', named: 'S is blue', version: 0, etymology: '' },
  purple: { name: 'CVCV', category: 'colour', type: 'noun', named: 'S is purple', version: 0, etymology: '' },

  astral: { name: 'nacV', category: 'space', type: 'noun', named: 'S is astral body', version: 0, etymology: 'Ara نجمة' },
  star: { name: 'CVCV', category: 'space', type: 'noun', named: 'S is star', version: 0, etymology: '' },
  planet: { name: 'CVCV', category: 'space', type: 'noun', named: 'S is planet', version: 0, etymology: '' },
  sattelite: { name: 'CVCV', category: 'space', type: 'noun', named: 'S is satellite', version: 0, etymology: '' },

  land: { name: 'hajV', category: 'geography', type: 'noun', named: 'S is land', version: 0, etymology: 'Xgn xajar' },
  sky: { name: 'CVCV', category: 'geography', type: 'noun', named: 'S is sky', version: 0, etymology: '' },
  mountain: { name: 'libV', category: 'geography', type: 'noun', named: 'S is mountain', version: 0, etymology: 'tibetan རི་བོ' },
  sea: { name: 'CVCV', category: 'geography', type: 'noun', named: 'S is sea', version: 0, etymology: '' },
  lake: { name: 'CVCV', category: 'geography', type: 'noun', named: 'S is lake', version: 0, etymology: '' },
  river: { name: 'najV', category: 'geography', type: 'noun', named: 'S is river', version: 0, etymology: 'Ain nay' },

  male: { name: 'namV', category: 'sex', type: 'noun', named: 'S is male', version: 0, etymology: 'Ltc 男' },
  female: { name: 'vomV', category: 'sex', type: 'noun', named: 'S is female', version: 0, etymology: 'Ja をみな' },
  copulate: { name: 'kopV', category: 'sex', type: 'noun', named: 'S copulate O', version: 0, etymology: 'Lat copulare' },

  human: { name: 'CVCV', category: 'creature', type: 'noun', named: 'S is human', version: 0, etymology: '' },
  animal: { name: 'CVCV', category: 'creature', type: 'noun', named: 'S is animal', version: 0, etymology: '' },
  plant: { name: 'CVCV', category: 'creature', type: 'noun', named: 'S is plant', version: 0, etymology: '' },

  hair: { name: 'CVCV', category: 'body/head', type: 'noun', named: 'S have hair O', version: 0, etymology: '' },
  brain: { name: 'CVCV', category: 'body/head', type: 'noun', named: 'S have brain O', version: 0, etymology: '' },
  eye: { name: 'CVCV', category: 'body/head', type: 'noun', named: 'S have eye O', version: 0, etymology: '' },
  ear: { name: 'CVCV', category: 'body/head', type: 'noun', named: 'S have ear O', version: 0, etymology: '' },
  nose: { name: 'CVCV', category: 'body/head', type: 'noun', named: 'S have nose O', version: 0, etymology: '' },
  mouth: { name: 'CVCV', category: 'body/head', type: 'noun', named: 'S have mouth O', version: 0, etymology: '' },
  tooth: { name: 'CVCV', category: 'body/head', type: 'noun', named: 'S have tooth O', version: 0, etymology: '' },
  tongue: { name: 'CVCV', category: 'body/head', type: 'noun', named: 'S have tongue O', version: 0, etymology: '' },
  throat: { name: 'CVCV', category: 'body/head', type: 'noun', named: 'S have throat O', version: 0, etymology: '' },
  horn: { name: 'CVCV', category: 'body/head', type: 'noun', named: 'S have horn O', version: 0, etymology: '' },

  heart: { name: 'CVCV', category: 'body/organ', type: 'noun', named: 'S have heart O', version: 0, etymology: '' },
  lung: { name: 'CVCV', category: 'body/organ', type: 'noun', named: 'S have lung O', version: 0, etymology: '' },
  gut: { name: 'CVCV', category: 'body/organ', type: 'noun', named: 'S have gut O', version: 0, etymology: '' },

  trunk: { name: 'CVCV', category: 'body/trunk', type: 'noun', named: 'S have trunk O', version: 0, etymology: '' },
  tail: { name: 'CVCV', category: 'body/trunk', type: 'noun', named: 'S have tail O', version: 0, etymology: '' },
  ass: { name: 'CVCV', category: 'body/trunk', type: 'noun', named: 'S have hip O', version: 0, etymology: '' },
  penis: { name: 'CVCV', category: 'body/trunk', type: 'noun', named: 'S have penis or clitoris O', version: 0, etymology: '' },
  womb: { name: 'CVCV', category: 'body/trunk', type: 'noun', named: 'S have womb O', version: 0, etymology: '' },
  nipple: { name: 'CVCV', category: 'body/trunk', type: 'noun', named: 'S have nipple O', version: 0, etymology: '' },

  limb: { name: 'CVCV', category: 'body/limb', type: 'noun', named: 'S have limb or branch or wing O', version: 0, etymology: '' },
  hand: { name: 'CVCV', category: 'body/limb', type: 'noun', named: 'S have hand or foot O', version: 0, etymology: '' },
  finger: { name: 'CVCV', category: 'body/limb', type: 'noun', named: 'S have finger O', version: 0, etymology: '' },
  nail: { name: 'CVCV', category: 'body/limb', type: 'noun', named: 'S have nail O', version: 0, etymology: '' },

  nerve: { name: 'CVCV', category: 'body/whole', type: 'noun', named: 'S have nerve O', version: 0, etymology: '' },
  muscle: { name: 'CVCV', category: 'body/whole', type: 'noun', named: 'S have flesh O', version: 0, etymology: '' },
  bone: { name: 'CVCV', category: 'body/whole', type: 'noun', named: 'S have bone O', version: 0, etymology: '' },
  skin: { name: 'CVCV', category: 'body/whole', type: 'noun', named: 'S have skin O', version: 0, etymology: '' },

  fruit: { name: 'CVCV', category: 'body/plant', type: 'noun', named: 'S have fruit O', version: 0, etymology: '' },
  root: { name: 'CVCV', category: 'body/plant', type: 'noun', named: 'S have root O', version: 0, etymology: '' },

  eat: { name: 'kVnV', category: 'physiology', type: 'noun', named: 'S eat O', version: 0, etymology: 'Proto-Tai kɯɲ' },
  digest: { name: 'CVCV', category: 'physiology', type: 'noun', named: 'S digest O', version: 0, etymology: '' },
  excrete: { name: 'CVCV', category: 'physiology', type: 'noun', named: 'S excrete O', version: 0, etymology: '' },

  sense: { name: 'CVCV', category: 'sansation', type: 'noun', named: 'S feel O', version: 0, etymology: '' },
  hear: { name: 'CVCV', category: 'sansation', type: 'noun', named: 'S hear O', version: 0, etymology: '' },
  see: { name: 'CVCV', category: 'sansation', type: 'noun', named: 'S see O', version: 0, etymology: '' },
  taste: { name: 'CVCV', category: 'sansation', type: 'noun', named: 'S taste O', version: 0, etymology: '' },
  smell: { name: 'CVCV', category: 'sansation', type: 'noun', named: 'S smell O', version: 0, etymology: '' },
  touch: { name: 'CVCV', category: 'sansation', type: 'noun', named: 'S feel touch of O', version: 0, etymology: '' },
  hurt: { name: 'CVCV', category: 'sansation', type: 'noun', named: 'S is hurt by O', version: 0, etymology: '' },

  smile: { name: 'CVCV', category: 'facial', type: 'noun', named: 'S smile', version: 0, etymology: '' },
  laugh: { name: 'CVCV', category: 'facial', type: 'noun', named: 'S laugh', version: 0, etymology: '' },
  frown: { name: 'CVCV', category: 'facial', type: 'noun', named: 'S frown', version: 0, etymology: '' },
  cry: { name: 'CVCV', category: 'facial', type: 'noun', named: 'S cry', version: 0, etymology: '' },

  want: { name: 'lVsV', category: 'emotion', type: 'noun', named: 'S want O', version: 0, etymology: 'He רצה' },
  glad: { name: 'CVCV', category: 'emotion', type: 'noun', named: 'S is happy with O', version: 0, etymology: '' },
  amuse: { name: 'CVCV', category: 'emotion', type: 'noun', named: 'S enjoy O', version: 0, etymology: '' },
  respect: { name: 'CVCV', category: 'emotion', type: 'noun', named: 'S respect O', version: 0, etymology: '' },
  pride: { name: 'CVCV', category: 'emotion', type: 'noun', named: 'S is proud of O', version: 0, etymology: '' },
  amaze: { name: 'CVCV', category: 'emotion', type: 'noun', named: 'S is surprised at O', version: 0, etymology: '' },
  anger: { name: 'CVCV', category: 'emotion', type: 'noun', named: 'S is angry for O', version: 0, etymology: '' },
  threat: { name: 'CVCV', category: 'emotion', type: 'noun', named: 'S fear O', version: 0, etymology: '' },

  think: { name: 'kVcV', category: 'intellectual', type: 'noun', named: 'S think O', version: 0, etymology: 'Lat cōgitāre' },
  know: { name: 'dVnV', category: 'intellectual', type: 'noun', named: 'S know O', version: 0, etymology: 'Fas دانستن' },
  understand: { name: 'CVCV', category: 'intellectual', type: 'noun', named: 'S understand O', version: 0, etymology: '' },
  assume: { name: 'CVCV', category: 'intellectual', type: 'noun', named: 'S assume O', version: 0, etymology: '' },
  plan: { name: 'CVCV', category: 'intellectual', type: 'noun', named: 'S plan O', version: 0, etymology: '' },
  expect: { name: 'CVCV', category: 'intellectual', type: 'noun', named: 'S expect O', version: 0, etymology: '' },
  hope: { name: 'CVCV', category: 'intellectual', type: 'noun', named: 'S hope O', version: 0, etymology: '' },
  agree: { name: 'CVCV', category: 'intellectual', type: 'noun', named: 'S agree with O', version: 0, etymology: '' },
  deduce: { name: 'CVCV', category: 'intellectual', type: 'noun', named: 'S deduce O', version: 0, etymology: '' },
  aim: { name: 'CVCV', category: 'intellectual', type: 'noun', named: 'S aim O', version: 0, etymology: 'Tam நோக்கம்' },

  true: { name: 'velV', category: 'language', type: 'noun', named: 'S is true', version: 0, etymology: 'Lat vērus' },
  speak: { name: 'CVCV', category: 'language', type: 'noun', named: 'S say O', version: 0, etymology: '' },
  write: { name: 'CVCV', category: 'language', type: 'noun', named: 'S write O', version: 0, etymology: '' },
  read: { name: { alias: 'WRITE-BACK' }, category: 'language', type: 'noun', named: 'S read O', version: 0, etymology: '' },

  declare: { name: 'CVCV', category: 'activity', type: 'noun', named: 'S declare O', version: 0, etymology: '' },
  ask: { name: 'CVCV', category: 'activity', type: 'noun', named: 'S ask O', version: 0, etymology: '' },
  apologise: { name: 'CVCV', category: 'activity', type: 'noun', named: 'S apologise for O', version: 0, etymology: '' },
  appreciate: { name: 'CVCV', category: 'activity', type: 'noun', named: 'S appreciate O', version: 0, etymology: '' },
  forgive: { name: 'CVCV', category: 'activity', type: 'noun', named: 'S forgive O', version: 0, etymology: '' },
  deceive: { name: 'CVCV', category: 'activity', type: 'noun', named: 'S deceive O', version: 0, etymology: '' },

  greet: { name: 'CVCV', category: 'activity', type: 'noun', named: 'S greet to O', version: 0, etymology: '' },
  fight: { name: 'fehV', category: 'activity', type: 'noun', named: 'S fight against O', version: 0, etymology: 'Gem fehtaną' },

  play: { name: 'ludV', category: 'culture', type: 'noun', named: 'S play O', version: 0, etymology: 'Lat lūdere' },
  dance: { name: 'palV', category: 'culture', type: 'noun', named: 'S dance O', version: 0, etymology: 'Xcl պար' },
  music: { name: 'musV', category: 'culture', type: 'noun', named: 'S musically play O', version: 0, etymology: 'Grc μοῦσα' },
  intercourse: { name: 'mazV', category: 'culture', type: 'noun', named: 'S have intercourse with O', version: 0, etymology: 'Jpn まじはる' },

  building: { name: 'CVCV', category: 'civilisation', type: 'noun', named: 'S is building', version: 0, etymology: '' },
  town: { name: 'CVCV', category: 'civilisation', type: 'noun', named: 'S is town or city', version: 0, etymology: '' },
  nation: { name: 'CVCV', category: 'civilisation', type: 'noun', named: 'S is nation', version: 0, etymology: '' },
  group: { name: 'CVCV', category: 'civilisation', type: 'noun', named: 'S is group or organisation', version: 0, etymology: '' },

  world: { name: 'vixV', category: '', type: 'noun', named: 'S is world', version: 0, etymology: 'sanskrit विश्व' },
  begin: { name: 'CVCV', category: '', type: 'noun', named: 'S begin', version: 0, etymology: '' },
  end: { name: { alias: 'BEGIN-BACK' }, category: '', type: 'noun', named: 'S end', version: 0, etymology: '' },
  person: { name: 'pitV', category: '', type: 'noun', named: 'S is person', version: 0, etymology: 'Jpn ひと' },
  live: { name: 'CVCV', category: '', type: 'noun', named: 'S is alive', version: 0, etymology: '' },
  wake: { name: 'budV', category: '', type: 'noun', named: 'S is awake', version: 0, etymology: 'sanskrit बुध्' },
  old: { name: 'CVCV', category: '', type: 'noun', named: 'S is old', version: 0, etymology: '' },
  rot: { name: 'CVCV', category: '', type: 'noun', named: 'S is rotten', version: 0, etymology: '' },
  temporary: { name: 'CVCV', category: '', type: 'noun', named: 'S is temporal', version: 0, etymology: '' },
  unit: { name: 'CVCV', category: '', type: 'noun', named: 'S is unit of O', version: 0, etymology: '' },

  cause: { name: 'qalV', category: '', type: 'noun', named: 'S cause O', version: 0, etymology: 'San कारण' },
  influence: { name: 'CVCV', category: '', type: 'noun', named: 'S influence O', version: 0, etymology: '' },
  home: { name: 'CVCV', category: '', type: 'noun', named: 'S have base O', version: 0, etymology: '' },
  consume: { name: 'CVCV', category: '', type: 'noun', named: 'S consume O', version: 0, etymology: '' },
  differ: { name: 'CVCV', category: '', type: 'noun', named: 'S differ from O', version: 0, etymology: '' },
  value: { name: 'CVCV', category: '', type: 'noun', named: 'S is worth O', version: 0, etymology: '' },
  make: { name: 'fakV', category: '', type: 'noun', named: 'S make O', version: 0, etymology: 'Lat facere' },
  leave: { name: 'CVCV', category: '', type: 'noun', named: 'S leave O', version: 0, etymology: '' },
  rotate: { name: 'CVCV', category: '', type: 'noun', named: 'S rotate around O', version: 0, etymology: '' },
  use: { name: 'CVCV', category: '', type: 'noun', named: 'S is for purpose O', version: 0, etymology: '' },
  model: { name: 'CVCV', category: '', type: 'noun', named: 'S simulate O', version: 0, etymology: '' },
  imitate: { name: 'CVCV', category: '', type: 'noun', named: 'S imitate O', version: 0, etymology: '' },
  status: { name: 'CVCV', category: '', type: 'noun', named: 'S is state of O', version: 0, etymology: '' },
  manner: { name: 'CVCV', category: '', type: 'noun', named: 'S is manner of O', version: 0, etymology: '' },
  system: { name: 'CVCV', category: '', type: 'noun', named: 'S is system', version: 0, etymology: '' },

  meter: { name: 'metwlo', category: 'SI unit', type: 'noun', named: 'S is 1m', version: 0, etymology: 'Eng' },
  second: { name: 'sekudo', category: 'SI unit', type: 'noun', named: 'S is 1s', version: 0, etymology: 'Eng' },
  kilogram: { name: 'qilocw', category: 'SI unit', type: 'noun', named: 'S is 1kg', version: 0, etymology: 'Eng' },
  ampere: { name: 'mapele', category: 'SI unit', type: 'noun', named: 'S is 1A', version: 0, etymology: 'Eng' },
  kelvin: { name: 'kelwvi', category: 'SI unit', type: 'noun', named: 'S is 1K', version: 0, etymology: 'Eng' },
  candela: { name: 'kadela', category: 'SI unit', type: 'noun', named: 's is 1cd', version: 0, etymology: 'Eng' },
}