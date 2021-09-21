//: {[K: string]: string[]}
const x32Enums = {
  inBlocks: [
    'AN1-8',
    'AN9-16',
    'AN17-24',
    'AN25-32',
    'A1-8',
    'A9-16',
    'A17-24',
    'A25-32',
    'A33-40',
    'A41-48',
    'B1-8',
    'B9-16',
    'B17-24',
    'B25-32',
    'B33-40',
    'B41-48',
    'CARD1-8',
    'CARD9-16',
    'CARD17-24',
    'CARD25-32',
    'UIN1-8',
    'UIN9-16',
    'UIN17-24',
    'UIN25-32',
  ],
  auxInBlocks: [
    'AUX1-4',
    'AN1-2',
    'AN1-4',
    'AN1-6',
    'A1-2',
    'A1-4',
    'A1-6',
    'B1-2',
    'B1-4',
    'B1-6',
    'CARD1-2',
    'CARD1-4',
    'CARD1-6',
    'UIN1-2',
    'UIN1-4',
    'UIN1-6',
  ],
  extOutBlocks: [
    'AN1-8',
    'AN9-16',
    'AN17-24',
    'AN25-32',
    'A1-8',
    'A9-16',
    'A17-24',
    'A25-32',
    'A33-40',
    'A41-48',
    'B1-8',
    'B9-16',
    'B17-24',
    'B25-32',
    'B33-40',
    'B41-48',
    'CARD1-8',
    'CARD9-16',
    'CARD17-24',
    'CARD25-32',
    'OUT1-8',
    'OUT9-16',
    'P161-8',
    'P169-16',
    'AUX/CR',
    'AUX/TB',
    'UOUT1-8',
    'UOUT9-16',
    'UOUT17-24',
    'UOUT25-32',
    'UOUT33-40',
    'UOUT41-48',
    'UIN1-8',
    'UIN9-16',
    'UIN17-24',
    'UIN25-32',
  ],
  outBlocks1: [
    'AN1-4',
    'AN9-12',
    'AN17-20',
    'AN25-28',
    'A1-4',
    'A9-12',
    'A17-20',
    'A25-28',
    'A33-36',
    'A41-44',
    'B1-4',
    'B9-12',
    'B17-20',
    'B25-28',
    'B33-36',
    'B41-44',
    'CARD1-4',
    'CARD9-12',
    'CARD17-20',
    'CARD25-28',
    'OUT1-4',
    'OUT9-12',
    'P161-4',
    'P169-12',
    'AUX/CR',
    'AUX/TB',
    'UOUT1-4',
    'UOUT9-12',
    'UOUT17-20',
    'UOUT25-28',
    'UOUT33-36',
    'UOUT41-44',
    'UIN1-4',
    'UIN9-12',
    'UIN17-20',
    'UIN25-28',
  ],
  outBlocks2: [
    'AN5-8',
    'AN13-16',
    'AN21-24',
    'AN29-32',
    'A5-8',
    'A13-16',
    'A21-24',
    'A29-32',
    'A37-40',
    'A45-48',
    'B5-8',
    'B13-16',
    'B21-24',
    'B29-32',
    'B37-40',
    'B45-48',
    'CARD5-8',
    'CARD13-16',
    'CARD21-24',
    'CARD29-32',
    'OUT5-8',
    'OUT13-16',
    'P165-8',
    'P1613-16',
    'AUX/CR',
    'AUX/TB',
    'UOUT5-8',
    'UOUT13-16',
    'UOUT21-24',
    'UOUT29-32',
    'UOUT37-40',
    'UOUT45-48',
    'UIN5-8',
    'UIN13-16',
    'UIN21-24',
    'UIN29-32',
  ],
  color: ['OFF', 'RD', 'GN', 'YE', 'BL', 'MG', 'CY', 'WH', 'OFFi', 'RDi', 'GNi', 'YEi', 'BLi', 'MGi', 'CYi', 'WHi'],
  inputSource: (() => {
    let inputSource: string[] = ['OFF'];
    for (let i = 1; i <= 32; i++) inputSource.push('In' + i.toString().padStart(2, '0'));
    for (let i = 1; i <= 6; i++) inputSource.push('Aux ' + i);
    inputSource.push('USB L');
    inputSource.push('USB R');
    for (let i = 1; i <= 4; i++) {
      inputSource.push('Fx ' + i + 'L');
      inputSource.push('Fx ' + i + 'R');
    }
    for (let i = 1; i <= 16; i++) inputSource.push('Bus ' + i.toString().padStart(2, '0'));
    return inputSource;
  })(),
  fx14Type: [
    'HALL',
    'AMBI',
    'RPLT',
    'ROOM',
    'CHAM',
    'PLAT',
    'VREV',
    'VRM',
    'GATE',
    'RVRS',
    'DLY',
    '3TAP',
    '4TAP',
    'CRS',
    'FLNG',
    'PHAS',
    'DIMC',
    'FILT',
    'ROTA',
    'PAN',
    'SUB',
    'D/RV',
    'CR/R',
    'FL/R',
    'D/CR',
    'D/FL',
    'MODD',
    'GEQ2',
    'GEQ',
    'TEQ2',
    'TEQ',
    'DES2',
    'DES',
    'P1A',
    'P1A2',
    'PQ5',
    'PQ5S',
    'WAVD',
    'LIM',
    'CMB',
    'CMB2',
    'FAC',
    'FAC1M',
    'FAC2',
    'LEC',
    'LEC2',
    'ULC',
    'ULC2',
    'ENH2',
    'ENH',
    'EXC2',
    'EXC',
    'IMG',
    'EDI',
    'SON',
    'AMP2',
    'AMP',
    'DRV2',
    'DRV',
    'PIT2',
    'PIT',
  ],
  fx58Type: [
    'GEQ2',
    'GEQ',
    'TEQ2',
    'TEQ',
    'DES2',
    'DES',
    'P1A',
    'P1A2',
    'PQ5',
    'PQ5S',
    'WAVD',
    'LIM',
    'FAC',
    'FAC1M',
    'FAC2',
    'LEC',
    'LEC2',
    'ULC',
    'ULC2',
    'ENH2',
    'ENH',
    'EXC2',
    'EXC',
    'IMG',
    'EDI',
    'SON',
    'AMP2',
    'AMP',
    'DRV2',
    'DRV',
    'PHAS',
    'FILT',
    'PAN',
    'SUB',
  ],
  fxSource: [
    'INS',
    'MIX1',
    'MIX2',
    'MIX3',
    'MIX4',
    'MIX5',
    'MIX6',
    'MIX7',
    'MIX8',
    'MIX9',
    'MIX10',
    'MIX11',
    'MIX12',
    'MIX13',
    'MIX14',
    'MIX15',
    'MIX16',
    'M/C',
  ],
  outputSource: (() => {
    let outputSource: string[] = ['OFF', 'Main L', 'Main R', 'M/C'];
    for (let i = 1; i <= 16; i++) outputSource.push('MixBus ' + i.toString().padStart(2, '0'));
    for (let i = 1; i <= 6; i++) outputSource.push('Matrix ' + i.toString());
    for (let i = 1; i <= 32; i++) outputSource.push('DirectOut Ch ' + i.toString().padStart(2, '0'));
    for (let i = 1; i <= 8; i++) outputSource.push('DirectOut Aux ' + i.toString());
    for (let i = 1; i <= 4; i++) {
      outputSource.push('DirectOut FX ' + i + 'L');
      outputSource.push('DirectOut FX ' + i + 'R');
    }
    outputSource.push('Monitor L', 'Monitor R', 'Talkback');
    return outputSource;
  })(),
  delayFactor: ['1/4', '3/8', '1/2', '2/3', '1', '4/3', '3/2', '2', '3'],
  dlyPattern: ['1/4', '1/3', '3/8', '1/2', '2/3', '3/4', '1', '1/4X', '1/3X', '3/8X', '1/2X', '2/3X', '3/4X', '1X'],
  pq5MidFreq: ['200', '300', '500', '700', '1k', '1k5', '2k', '3k', '4k', '5k', '7k'],
  cmbRatio: ['1.1', '1.2', '1.3', '1.5', '1.7', '2', '2.5', '3', '3.5', '4', '5', '7', '10', 'LIM'],
};

const x32TalkbackDefinition: x32DefinitionNode = {
  level: { _type: 'level161' },
  dim: { _type: 'enum', _enum: ['OFF', 'ON'] },
  latch: { _type: 'enum', _enum: ['OFF', 'ON'] },
  destmap: { _type: 'bitmap', _size: 18 },
};

const x32UserctrlDefinition: x32DefinitionNode = {
  color: { _type: 'enum', _enum: x32Enums.color },
  enc: (() => {
    let enc: x32DefinitionNode = {};
    for (let i = 1; i <= 4; i++) enc["'" + i.toString()] = { _type: 'encString' };
    return enc;
  })(),
  btn: (() => {
    let btn: x32DefinitionNode = {};
    for (let i = 5; i <= 12; i++) btn["'" + i.toString()] = { _type: 'btnString' };
    return btn;
  })(),
};

const x32FilterDefinition: x32DefinitionNode = {
  on: { _type: 'enum', _enum: ['OFF', 'ON'] },
  type: { _type: 'enum', _enum: ['LC6', 'LC12', 'HC6', 'HC12', '1.0', '2.0', '3.0', '5.0', '10.0'] },
  f: { _type: 'exponential', _min: 20, _max: 20000, _steps: 200, _decimals: 1, _freq: true },
};

const x32MtxDynDefinition: x32DefinitionNode = {
  on: { _type: 'enum', _enum: ['OFF', 'ON'] },
  mode: { _type: 'enum', _enum: ['COMP', 'EXP'] },
  det: { _type: 'enum', _enum: ['PEAK', 'RMS'] },
  env: { _type: 'enum', _enum: ['LIN', 'LOG'] },
  thr: { _type: 'linear', _min: -60.0, _max: 0.0, _step: 0.5, _decimals: 1 },
  ratio: { _type: 'enum', _enum: ['1.1', '1.3', '1.5', '2.0', '2.5', '3.0', '4.0', '5.0', '7.0', '10', '20', '100'] },
  knee: { _type: 'linear', _min: 0.0, _max: 5.0, _step: 1.0 },
  mgain: { _type: 'linear', _min: 0.0, _max: 24.0, _step: 0.5, _decimals: 2, _maxDigits: 3 },
  attack: { _type: 'linear', _min: 0.0, _max: 120.0, _step: 1.0 },
  hold: { _type: 'exponential', _min: 0.02, _max: 2000, _steps: 100, _decimals: 2, _maxDigits: 3 },
  release: { _type: 'exponential', _min: 5, _max: 4000, _steps: 100, _decimals: 0 },
  pos: { _type: 'enum', _enum: ['PRE', 'POST'] },
  mix: { _type: 'linear', _min: 0, _max: 100, _step: 5 },
  auto: { _type: 'enum', _enum: ['OFF', 'ON'] },
  filter: x32FilterDefinition,
};

const x32DynDefinition: x32DefinitionNode = {
  on: { _type: 'enum', _enum: ['OFF', 'ON'] },
  mode: { _type: 'enum', _enum: ['COMP', 'EXP'] },
  det: { _type: 'enum', _enum: ['PEAK', 'RMS'] },
  env: { _type: 'enum', _enum: ['LIN', 'LOG'] },
  thr: { _type: 'linear', _min: -60.0, _max: 0.0, _step: 0.5, _decimals: 1 },
  ratio: { _type: 'enum', _enum: ['1.1', '1.3', '1.5', '2.0', '2.5', '3.0', '4.0', '5.0', '7.0', '10', '20', '100'] },
  knee: { _type: 'linear', _min: 0.0, _max: 5.0, _step: 1.0 },
  mgain: { _type: 'linear', _min: 0.0, _max: 24.0, _step: 0.5, _decimals: 2, _maxDigits: 3 },
  attack: { _type: 'linear', _min: 0.0, _max: 120.0, _step: 1.0 },
  hold: { _type: 'exponential', _min: 0.02, _max: 2000, _steps: 100, _decimals: 2, _maxDigits: 3 },
  release: { _type: 'exponential', _min: 5, _max: 4000, _steps: 100, _decimals: 0 },
  pos: { _type: 'enum', _enum: ['PRE', 'POST'] },
  keysrc: { _type: 'virtualEnum', _enum: x32Enums.inputSource },
  mix: { _type: 'linear', _min: 0, _max: 100, _step: 5 },
  auto: { _type: 'enum', _enum: ['OFF', 'ON'] },
  filter: x32FilterDefinition,
};

const x32InsertDefinition: x32DefinitionNode = {
  on: { _type: 'enum', _enum: ['OFF', 'ON'] },
  pos: { _type: 'enum', _enum: ['PRE', 'POST'] },
  sel: {
    _type: 'enum',
    _enum: [
      'OFF',
      'FX1L',
      'FX1R',
      'FX2L',
      'FX2R',
      'FX3L',
      'FX3R',
      'FX4L',
      'FX4R',
      'FX5L',
      'FX5R',
      'FX6L',
      'FX6R',
      'FX7L',
      'FX7R',
      'FX8L',
      'FX8R',
      'AUX1',
      'AUX2',
      'AUX3',
      'AUX4',
      'AUX5',
      'AUX6',
    ],
  },
};

function x32EqDefinition(bands: number, main?: true): x32DefinitionNode {
  let eq: x32DefinitionNode = { on: { _type: 'enum', _enum: ['OFF', 'ON'] } };
  let type: x32DefinitionLeaf = { _type: 'enum', _enum: ['LCut', 'LShv', 'PEQ', 'VEQ', 'HShv', 'HCut'] };
  if (main)
    type = {
      _type: 'enum',
      _enum: [
        'LCut',
        'LShv',
        'PEQ',
        'VEQ',
        'HShv',
        'HCut',
        'BU6',
        'BU12',
        'BS12',
        'LR12',
        'BU18',
        'BU24',
        'BS24',
        'LR24',
      ],
    };
  let band: x32DefinitionNode = {
    type: type,
    f: { _type: 'exponential', _min: 20, _max: 20000, _steps: 200, _decimals: 1, _freq: true },
    g: { _type: 'linear', _min: -15.0, _max: 15, _step: 0.25, _decimals: 2, _maxDigits: 3, _plusSign: true },
    q: { _type: 'exponential', _min: 10, _max: 0.3, _steps: 71, _decimals: 1, _maxDigits: 2 },
  };
  for (let i = 1; i <= bands; i++) {
    eq["'" + i.toString()] = band;
  }
  return eq;
}

function x32MixDefinition(sendsCount: number, main?: boolean, mono?: boolean, bus?: boolean): x32DefinitionNode {
  let mixDefinition: x32DefinitionNode = {
    on: { _type: 'enum', _enum: ['OFF', 'ON'] },
    fader: { _type: 'level' },
  };
  if (!main) mixDefinition.st = { _type: 'enum', _enum: ['OFF', 'ON'] };
  if (!mono)
    mixDefinition.pan = {
      _type: 'linear',
      _min: -100.0,
      _max: 100.0,
      _step: 2.0,
      _plusSign: true,
    };
  if (!main) {
    mixDefinition.mono = { _type: 'enum', _enum: ['OFF', 'ON'] };
    mixDefinition.mlevel = { _type: 'level161' };
  }
  for (let i = 1; i < sendsCount; i += 2)
    //mixDefinition['\'' + i.toString().padStart(2, '0')] = x32MixSendNode(i);
    mixDefinition = { ...mixDefinition, ...x32MixSendNode(i, main || bus) };
  return mixDefinition;
}

function x32MixSendNode(oddNumber: number, main?: boolean) {
  let typeEnum = ['IN/LC', '<-EQ', 'EQ->', 'PRE', 'POST']
  if (!main) typeEnum.push('GRP')
  let commonLeaves: x32DefinitionNode = {
    on: { _type: 'enum', _enum: ['OFF', 'ON'] },
    level: { _type: 'level161' },
  };
  let mixSendOdd: x32DefinitionNode = {
    pan: { _type: 'linear', _min: -100.0, _max: 100.0, _step: 2.0, _plusSign: true },
    type: { _type: 'enum', _enum: typeEnum },
    panFollow: { _type: 'virtualEnum', _enum: ['OFF', 'ON'] },
  };
  return {
    ["'" + oddNumber.toString().padStart(2, '0')]: {
      ...commonLeaves,
      ...mixSendOdd,
    },
    ["'" + (oddNumber + 1).toString().padStart(2, '0')]: commonLeaves,
  };
}

const x32ChannelDefinition: x32DefinitionNode = {
  config: {
    name: { _type: 'string' },
    icon: { _type: 'icon' },
    color: { _type: 'enum', _enum: x32Enums.color },
    source: { _type: 'virtualEnum', _enum: x32Enums.inputSource },
  },
  delay: {
    on: { _type: 'enum', _enum: ['OFF', 'ON'] },
    time: { _type: 'linear', _min: 0.3, _max: 500.0, _step: 0.1, _decimals: 1 },
  },
  preamp: {
    trim: { _type: 'linear', _min: -18, _max: 18, _step: 0.25, _decimals: 1, _plusSign: true },
    invert: { _type: 'enum', _enum: ['OFF', 'ON'] },
    hpon: { _type: 'enum', _enum: ['OFF', 'ON'] },
    hpslope: { _type: 'enum', _enum: ['12', '18', '24'] },
    hpf: { _type: 'exponential', _min: 20, _max: 400, _steps: 100, _decimals: 0 },
  },
  gate: {
    on: { _type: 'enum', _enum: ['OFF', 'ON'] },
    mode: { _type: 'enum', _enum: ['EXP2', 'EXP3', 'EXP4', 'GATE', 'DUCK'] },
    thr: { _type: 'linear', _min: -80.0, _max: 0.0, _step: 0.5, _decimals: 1 },
    range: { _type: 'linear', _min: 3.0, _max: 60.0, _step: 1.0, _decimals: 1 }, //Behringer is dumb. Decimals on an always integer number
    attack: { _type: 'linear', _min: 0.0, _max: 120.0, _step: 1.0 },
    hold: { _type: 'exponential', _min: 0.02, _max: 2000, _steps: 100, _decimals: 2, _maxDigits: 3 },
    release: { _type: 'exponential', _min: 5, _max: 4000, _steps: 100, _decimals: 0 },
    keysrc: { _type: 'virtualEnum', _enum: x32Enums.inputSource },
    filter: x32FilterDefinition,
  },
  dyn: x32DynDefinition,
  insert: x32InsertDefinition,
  eq: x32EqDefinition(4),
  mix: x32MixDefinition(16),
  grp: {
    dca: { _type: 'bitmap', _size: 8 },
    mute: { _type: 'bitmap', _size: 6 },
  },
  automix: {
    group: { _type: 'enum', _enum: ['OFF', 'X', 'Y'] },
    weight: { _type: 'linear', _min: -12.0, _max: 12.0, _step: 0.5, _decimals: 1, _plusSign: true },
  },
};
const x32AuxDefinition: x32DefinitionNode = {
  config: {
    name: { _type: 'string' },
    icon: { _type: 'icon' },
    color: { _type: 'enum', _enum: x32Enums.color },
    source: { _type: 'virtualEnum', _enum: x32Enums.inputSource },
  },
  preamp: {
    trim: { _type: 'linear', _min: -18, _max: 18, _step: 0.25, _decimals: 1, _plusSign: true },
    invert: { _type: 'enum', _enum: ['OFF', 'ON'] },
  },
  eq: x32EqDefinition(4),
  mix: x32MixDefinition(16),
  grp: {
    dca: { _type: 'bitmap', _size: 8 },
    mute: { _type: 'bitmap', _size: 6 },
  },
};

const x32FxrtnDefinition: x32DefinitionNode = {
  config: {
    name: { _type: 'string' },
    icon: { _type: 'icon' },
    color: { _type: 'enum', _enum: x32Enums.color },
  },
  eq: x32EqDefinition(4),
  mix: x32MixDefinition(16),
  grp: {
    dca: { _type: 'bitmap', _size: 8 },
    mute: { _type: 'bitmap', _size: 6 },
  },
};

const x32BusDefinition: x32DefinitionNode = {
  config: {
    name: { _type: 'string' },
    icon: { _type: 'icon' },
    color: { _type: 'enum', _enum: x32Enums.color },
  },
  dyn: x32DynDefinition,
  insert: x32InsertDefinition,
  eq: x32EqDefinition(6),
  mix: x32MixDefinition(6, false, false, true),
  grp: {
    dca: { _type: 'bitmap', _size: 8 },
    mute: { _type: 'bitmap', _size: 6 },
  },
};

const x32MtxDefinition: x32DefinitionNode = {
  config: {
    name: { _type: 'string' },
    icon: { _type: 'icon' },
    color: { _type: 'enum', _enum: x32Enums.color },
  },
  preamp: {
    invert: { _type: 'enum', _enum: ['OFF', 'ON'] },
  },
  dyn: x32MtxDynDefinition,
  insert: x32InsertDefinition,
  eq: x32EqDefinition(6, true),
  mix: {
    on: { _type: 'enum', _enum: ['OFF', 'ON'] },
    fader: { _type: 'level' },
  },
  grp: {
    dca: { _type: 'bitmap', _size: 8 },
    mute: { _type: 'bitmap', _size: 6 },
  },
};

const x32FxConditional: x32Conditional = {
  HALL: [
    { _name: 'Pre Delay', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Decay', _type: 'exponential', _min: 0.2, _max: 5, _steps: 50, _decimals: 2 },
    { _name: 'Size', _type: 'linear', _min: 2, _max: 100, _step: 2 },
    { _name: 'Damping', _type: 'exponential', _min: 1000, _max: 20000, _steps: 24, _decimals: 1, _freq: true },
    { _name: 'Diffuse', _type: 'linear', _min: 1, _max: 30, _step: 1 },
    { _name: 'Level', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Bass Multi', _type: 'exponential', _min: 0.5, _max: 2, _steps: 50, _decimals: 2 },
    { _name: 'Spread', _type: 'linear', _min: 0, _max: 50, _step: 1 },
    { _name: 'Shape', _type: 'linear', _min: 0, _max: 250, _step: 5 },
    { _name: 'Mod Speed', _type: 'linear', _min: 0, _max: 100, _step: 5 },
  ],
  AMBI: [
    { _name: 'Pre Delay', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Decay', _type: 'exponential', _min: 0.2, _max: 7.3, _steps: 50, _decimals: 2 },
    { _name: 'Size', _type: 'linear', _min: 2, _max: 100, _step: 2 },
    { _name: 'Damping', _type: 'exponential', _min: 1000, _max: 20000, _steps: 24, _decimals: 1, _freq: true },
    { _name: 'Diffuse', _type: 'linear', _min: 1, _max: 30, _step: 1 },
    { _name: 'Level', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Modulate', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Tail Gain', _type: 'linear', _min: 0, _max: 100, _step: 2 },
  ],
  RPLT: [
    { _name: 'Pre Delay', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Decay', _type: 'exponential', _min: 0.3, _max: 29, _steps: 50, _decimals: 2 },
    { _name: 'Size', _type: 'linear', _min: 4, _max: 39, _step: 1 },
    { _name: 'Damping', _type: 'exponential', _min: 1000, _max: 20000, _steps: 24, _decimals: 1, _freq: true },
    { _name: 'Diffuse', _type: 'linear', _min: 0, _max: 100, _step: 4 },
    { _name: 'Level', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Bass Multi', _type: 'exponential', _min: 0.25, _max: 4, _steps: 52, _decimals: 2 },
    { _name: 'Spread', _type: 'linear', _min: 0, _max: 50, _step: 1 },
    { _name: 'Attack', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Spin', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Echo L', _type: 'linear', _min: 0, _max: 1200, _step: 5 },
    { _name: 'Echo R', _type: 'linear', _min: 0, _max: 1200, _step: 5 },
    { _name: 'Echo Feed L', _type: 'linear', _min: -100, _max: 100, _step: 2 },
    { _name: 'Echo Feed R', _type: 'linear', _min: -100, _max: 100, _step: 2 },
  ],
  ROOM: [
    { _name: 'Pre Delay', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Decay', _type: 'exponential', _min: 0.3, _max: 29, _steps: 50, _decimals: 2 },
    { _name: 'Size', _type: 'linear', _min: 4, _max: 76, _step: 2 },
    { _name: 'Damping', _type: 'exponential', _min: 1000, _max: 20000, _steps: 24, _decimals: 1, _freq: true },
    { _name: 'Diffuse', _type: 'linear', _min: 0, _max: 100, _step: 4 },
    { _name: 'Level', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Bass Multi', _type: 'exponential', _min: 0.25, _max: 4, _steps: 52, _decimals: 2 },
    { _name: 'Spread', _type: 'linear', _min: 0, _max: 50, _step: 1 },
    { _name: 'Shape', _type: 'linear', _min: 0, _max: 250, _step: 5 },
    { _name: 'Spin', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Echo L', _type: 'linear', _min: 0, _max: 1200, _step: 5 },
    { _name: 'Echo R', _type: 'linear', _min: 0, _max: 1200, _step: 5 },
    { _name: 'Echo Feed L', _type: 'linear', _min: -100, _max: 100, _step: 2 },
    { _name: 'Echo Feed R', _type: 'linear', _min: -100, _max: 100, _step: 2 },
  ],
  CHAM: [
    { _name: 'Pre Delay', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Decay', _type: 'exponential', _min: 0.3, _max: 29, _steps: 50, _decimals: 2 },
    { _name: 'Size', _type: 'linear', _min: 4, _max: 76, _step: 2 },
    { _name: 'Damping', _type: 'exponential', _min: 1000, _max: 20000, _steps: 24, _decimals: 1, _freq: true },
    { _name: 'Diffuse', _type: 'linear', _min: 0, _max: 100, _step: 4 },
    { _name: 'Level', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Bass Multi', _type: 'exponential', _min: 0.25, _max: 4, _steps: 52, _decimals: 2 },
    { _name: 'Spread', _type: 'linear', _min: 0, _max: 50, _step: 1 },
    { _name: 'Shape', _type: 'linear', _min: 0, _max: 250, _step: 5 },
    { _name: 'Spin', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Reflection L', _type: 'linear', _min: 0, _max: 500, _step: 5 },
    { _name: 'Reflection L', _type: 'linear', _min: 0, _max: 500, _step: 5 },
    { _name: 'Reflection Gain L', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Reflection Gain R', _type: 'linear', _min: 0, _max: 100, _step: 2 },
  ],
  PLAT: [
    { _name: 'Pre Delay', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Decay', _type: 'exponential', _min: 0.5, _max: 10, _steps: 50, _decimals: 2 },
    { _name: 'Size', _type: 'linear', _min: 2, _max: 100, _step: 2 },
    { _name: 'Damping', _type: 'exponential', _min: 1000, _max: 20000, _steps: 24, _decimals: 1, _freq: true },
    { _name: 'Diffuse', _type: 'linear', _min: 1, _max: 30, _step: 1 },
    { _name: 'Level', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Bass Multi', _type: 'exponential', _min: 0.5, _max: 2, _steps: 50, _decimals: 2 },
    { _name: 'Xover', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 2 },
    { _name: 'Mod Depth', _type: 'linear', _min: 1, _max: 50, _step: 1 },
    { _name: 'Mod Speed', _type: 'linear', _min: 0, _max: 100, _step: 5 },
  ],
  VREV: [
    { _name: 'Pre Delay', _type: 'linear', _min: 0, _max: 120, _step: 2 },
    { _name: 'Decay', _type: 'linear', _min: 0.4, _max: 4.5, _step: 0.1, _decimals: 1 },
    { _name: 'Modulate', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Vintage', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Position', _type: 'enum', _enum: ['FRONT', 'REAR'] },
    { _name: 'Level', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 10000, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Lo Multiply', _type: 'exponential', _min: 0.5, _max: 2, _steps: 50, _decimals: 2 },
    { _name: 'Hi Multiply', _type: 'exponential', _min: 0.25, _max: 1, _steps: 50, _decimals: 2 },
  ],
  VRM: [
    { _name: 'Reverb Delay', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Decay', _type: 'exponential', _min: 0.1, _max: 20, _steps: 50, _decimals: 2 },
    { _name: 'Size', _type: 'linear', _min: 2, _max: 100, _step: 2 },
    { _name: 'Density', _type: 'linear', _min: 1, _max: 30, _step: 1 },
    { _name: 'ER Level', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Level', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Multiply', _type: 'exponential', _min: 0.1, _max: 10, _steps: 50, _decimals: 2 },
    { _name: 'Hi Multiply', _type: 'exponential', _min: 0.1, _max: 10, _steps: 50, _decimals: 2 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'ER Left', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'ER Right', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Freeze', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  GATE: [
    { _name: 'Pre Delay', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Decay', _type: 'linear', _min: 140, _max: 1000, _step: 17.2, _decimals: 0 },
    { _name: 'Attack', _type: 'linear', _min: 0, _max: 30, _step: 1 },
    { _name: 'Density', _type: 'linear', _min: 1, _max: 50, _step: 1 },
    { _name: 'Spread', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Level', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Shv Freq', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Hi Shv Gain', _type: 'linear', _min: -30, _max: 0, _step: 0.5, _decimals: 1 },
    { _name: 'Diffuse', _type: 'linear', _min: 1, _max: 30, _step: 1 },
  ],
  RVRS: [
    { _name: 'Pre Delay', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Decay', _type: 'exponential', _min: 140, _max: 1000, _steps: 50, _decimals: 0 },
    { _name: 'Rise', _type: 'linear', _min: 0, _max: 50, _step: 1 },
    { _name: 'Diffuse', _type: 'linear', _min: 1, _max: 30, _step: 1 },
    { _name: 'Spread', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Level', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Shv Freq', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Hi Shv Gain', _type: 'linear', _min: -30, _max: 0, _step: 0.5, _decimals: 1 },
  ],
  DLY: [
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Time', _type: 'linear', _min: 1, _max: 3000, _step: 1 },
    { _name: 'Mode', _type: 'enum', _enum: ['ST', 'X', 'M'] },
    { _name: 'Factor L', _type: 'enum', _enum: x32Enums.delayFactor },
    { _name: 'Factor R', _type: 'enum', _enum: x32Enums.delayFactor },
    { _name: 'Offset L/R', _type: 'linear', _min: -100, _max: 100, _step: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Feed Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Feed Left', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Feed Right', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Feed Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
  ],
  '3TAP': [
    { _name: 'Time', _type: 'linear', _min: 1, _max: 3000, _step: 1 },
    { _name: 'Gain Base', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Pan Base', _type: 'linear', _min: -100, _max: 100, _step: 5 },
    { _name: 'Feedback', _type: 'linear', _min: 0, _max: 100, _step: 2, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Factor A', _type: 'enum', _enum: x32Enums.delayFactor },
    { _name: 'Gain A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Pan A', _type: 'linear', _min: -100, _max: 100, _step: 5 },
    { _name: 'Factor B', _type: 'enum', _enum: x32Enums.delayFactor },
    { _name: 'Gain B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Pan B', _type: 'linear', _min: -100, _max: 100, _step: 5 },
    { _name: 'Cross Feed', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Mono', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Dry', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  '4TAP': [
    { _name: 'Time', _type: 'linear', _min: 1, _max: 3000, _step: 1 },
    { _name: 'Gain Base', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Feedback', _type: 'linear', _min: 0, _max: 100, _step: 2, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Spread', _type: 'linear', _min: 0, _max: 6, _step: 1 },
    { _name: 'Factor A', _type: 'enum', _enum: x32Enums.delayFactor },
    { _name: 'Gain A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Factor B', _type: 'enum', _enum: x32Enums.delayFactor },
    { _name: 'Gain B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Factor C', _type: 'enum', _enum: x32Enums.delayFactor },
    { _name: 'Gain c', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Cross Feed', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Mono', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Dry', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  CRS: [
    { _name: 'Speed', _type: 'exponential', _min: 0.05, _max: 5, _steps: 100, _decimals: 2 },
    { _name: 'Depth L', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Depth R', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Delay L', _type: 'exponential', _min: 0.5, _max: 50, _steps: 50, _decimals: 1 },
    { _name: 'Delay R', _type: 'exponential', _min: 0.5, _max: 50, _steps: 50, _decimals: 1 },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Phase', _type: 'linear', _min: 0, _max: 180, _step: 5 },
    { _name: 'Wave', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Spread', _type: 'linear', _min: 0, _max: 100, _step: 5 },
  ],
  FLNG: [
    { _name: 'Speed', _type: 'exponential', _min: 0.05, _max: 5, _steps: 100, _decimals: 2 },
    { _name: 'Depth L', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Depth R', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Delay L', _type: 'exponential', _min: 0.5, _max: 20, _steps: 50, _decimals: 1 },
    { _name: 'Delay R', _type: 'exponential', _min: 0.5, _max: 20, _steps: 50, _decimals: 1 },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Phase', _type: 'linear', _min: 0, _max: 180, _step: 5 },
    { _name: 'Feed Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Feed Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Feed', _type: 'linear', _min: -90, _max: 90, _step: 5 },
  ],
  PHAS: [
    { _name: 'Speed', _type: 'exponential', _min: 0.05, _max: 5, _steps: 100, _decimals: 2 },
    { _name: 'Depth', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Resonance', _type: 'linear', _min: 0, _max: 80, _step: 2 },
    { _name: 'Base', _type: 'linear', _min: 0, _max: 50, _step: 2 },
    { _name: 'Stages', _type: 'linear', _min: 2, _max: 12, _step: 1 },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Wave', _type: 'linear', _min: -50, _max: 50, _step: 5 },
    { _name: 'Phase', _type: 'linear', _min: 0, _max: 180, _step: 5 },
    { _name: 'Env. Modulation', _type: 'linear', _min: -100, _max: 100, _step: 5 },
    { _name: 'Attack', _type: 'exponential', _min: 10, _max: 1000, _steps: 50, _decimals: 0 },
    { _name: 'Hold', _type: 'exponential', _min: 1, _max: 2000, _steps: 50, _decimals: 0 },
    { _name: 'Release', _type: 'exponential', _min: 10, _max: 1000, _steps: 50, _decimals: 0 },
  ],
  DIMC: [
    { _name: 'Active', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Mode', _type: 'enum', _enum: ['M', 'ST'] },
    { _name: 'Dry', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Mode 1', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Mode 2', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Mode 3', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Mode 4', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  FILT: [
    { _name: 'Speed', _type: 'exponential', _min: 0.05, _max: 20, _steps: 150, _decimals: 2 },
    { _name: 'Depth', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Resonance', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Base', _type: 'exponential', _min: 20, _max: 15000, _steps: 100, _decimals: 1, _freq: true },
    { _name: 'Mode', _type: 'enum', _enum: ['LP', 'HP', 'BP', 'NO'] },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Wave', _type: 'enum', _enum: ['TRI', 'SIN', 'SAW', 'SAW-', 'RMP', 'SQU', 'RND'] },
    { _name: 'Phase', _type: 'linear', _min: 0, _max: 180, _step: 5 },
    { _name: 'Env. Modulation', _type: 'linear', _min: -100, _max: 100, _step: 2 },
    { _name: 'Attack', _type: 'exponential', _min: 10, _max: 250, _steps: 50, _decimals: 0 },
    { _name: 'Release', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Drive', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Pole', _type: 'enum', _enum: ['2POL', '4POL'] },
    { _name: 'Side Chain', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  ROTA: [
    { _name: 'Lo Speed', _type: 'exponential', _min: 0.1, _max: 4, _steps: 100, _decimals: 2 },
    { _name: 'Hi Speed', _type: 'exponential', _min: 2, _max: 10, _steps: 100, _decimals: 2 },
    { _name: 'Accelerate', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Distance', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Balance', _type: 'linear', _min: -100, _max: 100, _step: 5 },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Stop', _type: 'enum', _enum: ['RUN', 'STOP'] },
    { _name: 'Speed', _type: 'enum', _enum: ['SLOW', 'FAST'] },
  ],
  PAN: [
    { _name: 'Speed', _type: 'exponential', _min: 0.05, _max: 5, _steps: 100, _decimals: 2 },
    { _name: 'Phase', _type: 'linear', _min: 0, _max: 180, _step: 5 },
    { _name: 'Wave', _type: 'linear', _min: -50, _max: 50, _step: 5 },
    { _name: 'Depth', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Env. Speed', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Env. Depth', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Attack', _type: 'exponential', _min: 10, _max: 1000, _steps: 50, _decimals: 0 },
    { _name: 'Hold', _type: 'exponential', _min: 1, _max: 2000, _steps: 50, _decimals: 0 },
    { _name: 'Release', _type: 'exponential', _min: 10, _max: 1000, _steps: 50, _decimals: 0 },
  ],
  SUB: [
    { _name: 'Active A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Range A', _type: 'enum', _enum: ['LO', 'MID', 'HI'] },
    { _name: 'Dry A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Octave-1 A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Octave-2 A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Active B', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Range B', _type: 'enum', _enum: ['LO', 'MID', 'HI'] },
    { _name: 'Dry B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Octave-1 B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Octave-2 B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
  ],
  'D/RV': [
    { _name: 'Time', _type: 'linear', _min: 1, _max: 3000, _step: 1 },
    { _name: 'Pattern', _type: 'enum', _enum: x32Enums.dlyPattern },
    { _name: 'Feed Hi Cut', _type: 'exponential', _min: 1000, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Feedback', _type: 'linear', _min: 0, _max: 100, _step: 2, _decimals: 1 },
    { _name: 'Cross Feed', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Balance', _type: 'linear', _min: -100, _max: 100, _step: 5, _plusSign: true },
    { _name: 'Pre Delay', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Decay', _type: 'exponential', _min: 0.1, _max: 5, _steps: 50, _decimals: 2 },
    { _name: 'Size', _type: 'linear', _min: 2, _max: 100, _step: 2 },
    { _name: 'Damping', _type: 'exponential', _min: 1000, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
  ],
  'CR/R': [
    { _name: 'Speed', _type: 'exponential', _min: 0.05, _max: 4, _steps: 100, _decimals: 2 },
    { _name: 'Depth', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Delay', _type: 'exponential', _min: 0.5, _max: 50, _steps: 50, _decimals: 1 },
    { _name: 'Phase', _type: 'linear', _min: 0, _max: 180, _step: 5 },
    { _name: 'Wave', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Balance', _type: 'linear', _min: -100, _max: 100, _step: 5, _plusSign: true },
    { _name: 'Pre Delay', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Decay', _type: 'exponential', _min: 0.1, _max: 5, _steps: 50, _decimals: 2 },
    { _name: 'Size', _type: 'linear', _min: 2, _max: 100, _step: 2 },
    { _name: 'Damping', _type: 'exponential', _min: 1000, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
  ],
  'FL/R': [
    { _name: 'Speed', _type: 'exponential', _min: 0.05, _max: 4, _steps: 100, _decimals: 2 },
    { _name: 'Depth', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Delay', _type: 'exponential', _min: 0.5, _max: 20, _steps: 50, _decimals: 1 },
    { _name: 'Phase', _type: 'linear', _min: 0, _max: 180, _step: 5 },
    { _name: 'Feed', _type: 'linear', _min: -90, _max: 90, _step: 5 },
    { _name: 'Balance', _type: 'linear', _min: -100, _max: 100, _step: 5, _plusSign: true },
    { _name: 'Pre Delay', _type: 'linear', _min: 0, _max: 200, _step: 2 },
    { _name: 'Decay', _type: 'exponential', _min: 0.1, _max: 5, _steps: 50, _decimals: 2 },
    { _name: 'Size', _type: 'linear', _min: 2, _max: 100, _step: 2, _decimals: 1 },
    { _name: 'Damping', _type: 'exponential', _min: 1000, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
  ],
  'D/CR': [
    { _name: 'Time', _type: 'linear', _min: 1, _max: 3000, _step: 1 },
    { _name: 'Pattern', _type: 'enum', _enum: x32Enums.dlyPattern },
    { _name: 'Feed Hi Cut', _type: 'exponential', _min: 1000, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Feedback', _type: 'linear', _min: 0, _max: 100, _step: 2, _decimals: 1 },
    { _name: 'Cross Feed', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Balance', _type: 'linear', _min: -100, _max: 100, _step: 5, _plusSign: true },
    { _name: 'Speed', _type: 'exponential', _min: 0.05, _max: 4, _steps: 100, _decimals: 2 },
    { _name: 'Depth', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Delay', _type: 'exponential', _min: 0.5, _max: 50, _steps: 50, _decimals: 1 },
    { _name: 'Phase', _type: 'linear', _min: 0, _max: 180, _step: 5 },
    { _name: 'Wave', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
  ],
  'D/FL': [
    { _name: 'Time', _type: 'linear', _min: 1, _max: 3000, _step: 1 },
    { _name: 'Pattern', _type: 'enum', _enum: x32Enums.dlyPattern },
    { _name: 'Feed Hi Cut', _type: 'exponential', _min: 1000, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Feedback', _type: 'linear', _min: 0, _max: 100, _step: 2, _decimals: 1 },
    { _name: 'Cross Feed', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Balance', _type: 'linear', _min: -100, _max: 100, _step: 5, _plusSign: true },
    { _name: 'Speed', _type: 'exponential', _min: 0.05, _max: 4, _steps: 100, _decimals: 2 },
    { _name: 'Depth', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Delay', _type: 'exponential', _min: 0.5, _max: 20, _steps: 50, _decimals: 1 },
    { _name: 'Phase', _type: 'linear', _min: 0, _max: 180, _step: 5 },
    { _name: 'Feed', _type: 'linear', _min: -90, _max: 90, _step: 5 },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
  ],
  MODD: [
    { _name: 'Time', _type: 'linear', _min: 1, _max: 3000, _step: 1 },
    { _name: 'Delay Factor', _type: 'enum', _enum: ['1', '1/2', '2/3', '3/2'] },
    { _name: 'Feed', _type: 'linear', _min: 0, _max: 100, _step: 2, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 200, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Depth', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Rate', _type: 'exponential', _min: 0.05, _max: 10, _steps: 100, _decimals: 2 },
    { _name: 'Setup', _type: 'enum', _enum: ['PAR', 'SER'] },
    { _name: 'Type', _type: 'enum', _enum: ['AMB', 'CLUB', 'HALL'] },
    { _name: 'Decay', _type: 'linear', _min: 1, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Damping', _type: 'exponential', _min: 1000, _max: 20000, _steps: 50, _decimals: 0, _freq: true },
    { _name: 'Balance', _type: 'linear', _min: -100, _max: 100, _step: 5, _plusSign: true },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
  ],
  GEQ2: [
    { _name: '20.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '25.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '31.5 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '40.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '50.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '63.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '80.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '100.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '125.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '160.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '200.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '250.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '315.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '400.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '500.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '630.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '800.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.00 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.25 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.60 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '2.00 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '2.50 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '3.15 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '4.00 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '5.00 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '6.30 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '8.00 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '10.0 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '12.5 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '16.0 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '20.0 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: 'Level A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '20.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '25.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '31.5 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '40.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '50.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '63.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '80.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '100.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '125.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '160.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '200.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '250.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '315.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '400.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '500.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '630.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '800.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.00 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.25 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.60 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '2.00 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '2.50 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '3.15 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '4.00 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '5.00 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '6.30 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '8.00 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '10.0 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '12.5 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '16.0 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '20.0 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: 'Level B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
  ],
  GEQ: [
    { _name: '20.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '25.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '31.5 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '40.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '50.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '63.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '80.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '100.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '125.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '160.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '200.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '250.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '315.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '400.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '500.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '630.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '800.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.00 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.25 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.60 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '2.00 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '2.50 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '3.15 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '4.00 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '5.00 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '6.30 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '8.00 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '10.0 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '12.5 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '16.0 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '20.0 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: 'Level', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
  ],
  TEQ2: [
    { _name: '20.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '25.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '31.5 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '40.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '50.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '63.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '80.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '100.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '125.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '160.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '200.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '250.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '315.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '400.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '500.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '630.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '800.0 Hz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.00 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.25 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.60 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '2.00 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '2.50 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '3.15 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '4.00 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '5.00 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '6.30 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '8.00 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '10.0 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '12.5 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '16.0 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '20.0 kHz A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: 'Level A', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '20.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '25.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '31.5 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '40.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '50.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '63.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '80.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '100.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '125.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '160.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '200.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '250.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '315.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '400.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '500.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '630.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '800.0 Hz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.00 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.25 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.60 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '2.00 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '2.50 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '3.15 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '4.00 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '5.00 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '6.30 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '8.00 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '10.0 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '12.5 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '16.0 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '20.0 kHz B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: 'Level B', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
  ],
  TEQ: [
    { _name: '20.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '25.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '31.5 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '40.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '50.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '63.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '80.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '100.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '125.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '160.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '200.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '250.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '315.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '400.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '500.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '630.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '800.0 Hz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.00 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.25 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '1.60 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '2.00 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '2.50 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '3.15 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '4.00 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '5.00 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '6.30 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '8.00 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '10.0 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '12.5 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '16.0 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: '20.0 kHz', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
    { _name: 'Level', _type: 'linear', _min: -15, _max: 15, _step: 0.5, _decimals: 1 },
  ],
  DES2: [
    { _name: 'Lo Band A', _type: 'linear', _min: 0, _max: 50, _step: 1, _decimals: 1 },
    { _name: 'Hi Band A', _type: 'linear', _min: 0, _max: 50, _step: 1, _decimals: 1 },
    { _name: 'Lo Band B', _type: 'linear', _min: 0, _max: 50, _step: 1, _decimals: 1 },
    { _name: 'Hi Band B', _type: 'linear', _min: 0, _max: 50, _step: 1, _decimals: 1 },
    { _name: 'Voice A', _type: 'enum', _enum: ['FEM', 'MALE'] },
    { _name: 'Voice B', _type: 'enum', _enum: ['FEM', 'MALE'] },
  ],
  DES: [
    { _name: 'Lo Band', _type: 'linear', _min: 0, _max: 50, _step: 1, _decimals: 1 },
    { _name: 'Hi Band', _type: 'linear', _min: 0, _max: 50, _step: 1, _decimals: 1 },
    { _name: 'Lo Band S', _type: 'linear', _min: 0, _max: 50, _step: 1, _decimals: 1 },
    { _name: 'Hi Band S', _type: 'linear', _min: 0, _max: 50, _step: 1, _decimals: 1 },
    { _name: 'Voice', _type: 'enum', _enum: ['FEM', 'MALE'] },
    { _name: 'Mode', _type: 'enum', _enum: ['ST', 'MS'] },
  ],
  P1A: [
    { _name: 'Active', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Gain', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Boost', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Lo Freq', _type: 'enum', _enum: ['20', '30', '60', '100'] },
    { _name: 'Lo Attenuation', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Hi Width', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Hi Boost', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Hi Freq', _type: 'enum', _enum: ['3k', '4k', '5k', '8k', '10k', '12k', '16k'] },
    { _name: 'Hi Attenuation', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Att Select', _type: 'enum', _enum: ['5k', '10k', '20k'] },
    { _name: 'Transformer', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  P1A2: [
    { _name: 'Active A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Gain A', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Boost A', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Lo Freq A', _type: 'enum', _enum: ['20', '30', '60', '100'] },
    { _name: 'Lo Attenuation A', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Hi Width A', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Hi Boost A', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Hi Freq A', _type: 'enum', _enum: ['3k', '4k', '5k', '8k', '10k', '12k', '16k'] },
    { _name: 'Hi Attenuation A', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Att Select A', _type: 'enum', _enum: ['5k', '10k', '20k'] },
    { _name: 'Transformer A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Active B', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Gain B', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Boost B', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Lo Freq B', _type: 'enum', _enum: ['20', '30', '60', '100'] },
    { _name: 'Lo Attenuation B', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Hi Width B', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Hi Boost B', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Hi Freq B', _type: 'enum', _enum: ['3k', '4k', '5k', '8k', '10k', '12k', '16k'] },
    { _name: 'Hi Attenuation B', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Att Select B', _type: 'enum', _enum: ['5k', '10k', '20k'] },
    { _name: 'Transformer B', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  PQ5: [
    { _name: 'Active', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Gain', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Freq', _type: 'enum', _enum: ['200', '300', '500', '700', '1000'] },
    { _name: 'Lo Boost', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Mid Freq', _type: 'enum', _enum: x32Enums.pq5MidFreq },
    { _name: 'Mid Cut', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Hi Freq', _type: 'enum', _enum: ['1k5', '2k', '3k', '4k', '5k'] },
    { _name: 'Hi Boost', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Transformer', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  PQ5S: [
    { _name: 'Active A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Gain A', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Freq A', _type: 'enum', _enum: ['200', '300', '500', '700', '1000'] },
    { _name: 'Lo Boost A', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Mid Freq A', _type: 'enum', _enum: x32Enums.pq5MidFreq },
    { _name: 'Mid Cut A', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Hi Freq A', _type: 'enum', _enum: ['1k5', '2k', '3k', '4k', '5k'] },
    { _name: 'Hi Boost A', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Transformer A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Active B', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Gain B', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Freq B', _type: 'enum', _enum: ['200', '300', '500', '700', '1000'] },
    { _name: 'Lo Boost B', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Mid Freq B', _type: 'enum', _enum: x32Enums.pq5MidFreq },
    { _name: 'Mid Cut B', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Hi Freq B', _type: 'enum', _enum: ['1k5', '2k', '3k', '4k', '5k'] },
    { _name: 'Hi Boost B', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Transformer B', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  WAVD: [
    { _name: 'Attack A', _type: 'linear', _min: -100, _max: 100, _step: 2 },
    { _name: 'Sustain A', _type: 'linear', _min: -100, _max: 100, _step: 2 },
    { _name: 'Gain A', _type: 'linear', _min: -24, _max: 24, _step: 0.5, _decimals: 1 },
    { _name: 'Attack B', _type: 'linear', _min: -100, _max: 100, _step: 2 },
    { _name: 'Sustain B', _type: 'linear', _min: -100, _max: 100, _step: 2 },
    { _name: 'Gain B', _type: 'linear', _min: -24, _max: 24, _step: 0.5, _decimals: 1 },
  ],
  LIM: [
    { _name: 'Input Gain', _type: 'linear', _min: 0, _max: 18, _step: 0.5, _decimals: 1 },
    { _name: 'Output Gain', _type: 'linear', _min: -18, _max: 0, _step: 0.5, _decimals: 1 },
    { _name: 'Squeeze', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Knee', _type: 'linear', _min: 0, _max: 10, _step: 1 },
    { _name: 'Attack', _type: 'exponential', _min: 0.05, _max: 1, _steps: 50, _decimals: 2 },
    { _name: 'Release', _type: 'exponential', _min: 20, _max: 2000, _steps: 50, _decimals: 0 },
    { _name: 'Stereo Link', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Auto Gain', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  CMB: [
    { _name: 'Active', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Band Solo', _type: 'enum', _enum: ['OFF', 'Bd1', 'Bd2', 'Bd3', 'Bd4', 'Bd5'] },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Attack', _type: 'linear', _min: 0, _max: 19, _step: 1 },
    { _name: 'Release', _type: 'exponential', _min: 20, _max: 3000, _steps: 50, _decimals: 0 },
    { _name: 'Auto Release', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'SBC Speed', _type: 'linear', _min: 1, _max: 10, _step: 1 },
    { _name: 'SBC ON', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'X-Over', _type: 'linear', _min: -50, _max: 50, _step: 2 },
    { _name: 'X-Over Slope', _type: 'enum', _enum: ['12', '48'] },
    { _name: 'Ratio', _type: 'enum', _enum: x32Enums.cmbRatio },
    { _name: 'Threshold', _type: 'linear', _min: -40, _max: 0, _step: 0.5, _decimals: 1 },
    { _name: 'Gain', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 1 Threshold', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 1 Gain', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 1 Lock', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Band 2 Threshold', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 2 Gain', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 2 Lock', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Band 3 Threshold', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 3 Gain', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 3 Lock', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Band 4 Threshold', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 4 Gain', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 4 Lock', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Band 5 Threshold', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 5 Gain', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 5 Lock', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Meter Mode', _type: 'enum', _enum: ['GR', 'PEAK', 'SBC'] },
  ],
  CMB2: [
    { _name: 'Active A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Band Solo A', _type: 'enum', _enum: ['OFF', 'Bd1', 'Bd2', 'Bd3', 'Bd4', 'Bd5'] },
    { _name: 'Mix A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Attack A', _type: 'linear', _min: 0, _max: 19, _step: 1 },
    { _name: 'Release A', _type: 'exponential', _min: 20, _max: 3000, _steps: 50, _decimals: 0 },
    { _name: 'Auto Release A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'SBC Speed A', _type: 'linear', _min: 1, _max: 10, _step: 1 },
    { _name: 'SBC ON A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'X-Over A', _type: 'linear', _min: -50, _max: 50, _step: 2 },
    { _name: 'X-Over Slope A', _type: 'enum', _enum: ['12', '48'] },
    { _name: 'Ratio A', _type: 'enum', _enum: x32Enums.cmbRatio },
    { _name: 'Threshold A', _type: 'linear', _min: -40, _max: 0, _step: 0.5, _decimals: 1 },
    { _name: 'Gain A', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 1 Threshold A', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 1 Gain A', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 1 Lock A', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Band 2 Threshold A', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 2 Gain A', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 2 Lock A', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Band 3 Threshold A', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 3 Gain A', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 3 Lock A', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Band 4 Threshold A', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 4 Gain A', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 4 Lock A', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Band 5 Threshold A', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 5 Gain A', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 5 Lock A', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Meter Mode A', _type: 'enum', _enum: ['GR', 'PEAK', 'SBC'] },
    { _name: 'Active B', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Band Solo B', _type: 'enum', _enum: ['OFF', 'Bd1', 'Bd2', 'Bd3', 'Bd4', 'Bd5'] },
    { _name: 'Mix B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Attack B', _type: 'linear', _min: 0, _max: 19, _step: 1 },
    { _name: 'Release B', _type: 'exponential', _min: 20, _max: 3000, _steps: 50, _decimals: 0 },
    { _name: 'Auto Release B', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'SBC Speed B', _type: 'linear', _min: 1, _max: 10, _step: 1 },
    { _name: 'SBC ON B', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'X-Over B', _type: 'linear', _min: -50, _max: 50, _step: 2 },
    { _name: 'X-Over Slope B', _type: 'enum', _enum: ['12', '48'] },
    { _name: 'Ratio B', _type: 'enum', _enum: x32Enums.cmbRatio },
    { _name: 'Threshold B', _type: 'linear', _min: -40, _max: 0, _step: 0.5, _decimals: 1 },
    { _name: 'Gain B', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 1 Threshold B', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 1 Gain B', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 1 Lock B', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Band 2 Threshold B', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 2 Gain B', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 2 Lock B', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Band 3 Threshold B', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 3 Gain B', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 3 Lock B', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Band 4 Threshold B', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 4 Gain B', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 4 Lock B', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Band 5 Threshold B', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 5 Gain B', _type: 'linear', _min: -10, _max: 10, _step: 0.5, _decimals: 1 },
    { _name: 'Band 5 Lock B', _type: 'linear', _min: 0, _max: 1, _step: 1 },
    { _name: 'Meter Mode B', _type: 'enum', _enum: ['GR', 'PEAK', 'SBC'] },
  ],
  FAC: [
    { _name: 'Active', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Input Gain', _type: 'linear', _min: -20, _max: 0, _step: 0.5, _decimals: 1 },
    { _name: 'Threshold', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Time', _type: 'linear', _min: 1, _max: 6, _step: 1 },
    { _name: 'Bias', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Out Gain', _type: 'linear', _min: -18, _max: 6, _step: 0.5, _decimals: 1 },
    { _name: 'Balance', _type: 'linear', _min: -100, _max: 100, _step: 5 },
  ],
  FAC1M: [
    { _name: 'Active', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Input Gain M', _type: 'linear', _min: -20, _max: 0, _step: 0.5, _decimals: 1 },
    { _name: 'Threshold M', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Time M', _type: 'linear', _min: 1, _max: 6, _step: 1 },
    { _name: 'Bias M', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Out Gain M', _type: 'linear', _min: -18, _max: 6, _step: 0.5, _decimals: 1 },
    { _name: 'Balance M', _type: 'linear', _min: -100, _max: 100, _step: 5 },
    { _name: 'Input Gain S', _type: 'linear', _min: -20, _max: 0, _step: 0.5, _decimals: 1 },
    { _name: 'Threshold S', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Time S', _type: 'linear', _min: 1, _max: 6, _step: 1 },
    { _name: 'Bias S', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Out Gain S', _type: 'linear', _min: -18, _max: 6, _step: 0.5, _decimals: 1 },
    { _name: 'Balance S', _type: 'linear', _min: -100, _max: 100, _step: 5 },
  ],
  FAC2: [
    { _name: 'Active A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Input Gain A', _type: 'linear', _min: -20, _max: 0, _step: 0.5, _decimals: 1 },
    { _name: 'Threshold A', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Time A', _type: 'linear', _min: 1, _max: 6, _step: 1 },
    { _name: 'Bias A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Out Gain A', _type: 'linear', _min: -18, _max: 6, _step: 0.5, _decimals: 1 },
    { _name: 'Balance A', _type: 'linear', _min: -100, _max: 100, _step: 5 },
    { _name: 'Active B', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Input Gain B', _type: 'linear', _min: -20, _max: 0, _step: 0.5, _decimals: 1 },
    { _name: 'Threshold B', _type: 'linear', _min: 0, _max: 10, _step: 0.1, _decimals: 1 },
    { _name: 'Time B', _type: 'linear', _min: 1, _max: 6, _step: 1 },
    { _name: 'Bias B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Out Gain B', _type: 'linear', _min: -18, _max: 6, _step: 0.5, _decimals: 1 },
    { _name: 'Balance B', _type: 'linear', _min: -100, _max: 100, _step: 5 },
  ],
  LEC: [
    { _name: 'Active', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Gain', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Peak', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Mode', _type: 'enum', _enum: ['COMP', 'LIM'] },
    { _name: 'Output Gain', _type: 'linear', _min: -18, _max: 6, _step: 0.5, _decimals: 1 },
  ],
  LEC2: [
    { _name: 'Active A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Gain A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Peak A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Mode A', _type: 'enum', _enum: ['COMP', 'LIM'] },
    { _name: 'Output Gain A', _type: 'linear', _min: -18, _max: 6, _step: 0.5, _decimals: 1 },
    { _name: 'Active B', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Gain B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Peak B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Mode B', _type: 'enum', _enum: ['COMP', 'LIM'] },
    { _name: 'Output Gain B', _type: 'linear', _min: -18, _max: 6, _step: 0.5, _decimals: 1 },
  ],
  ULC: [
    { _name: 'Active', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Input Gain', _type: 'linear', _min: -48, _max: 0, _step: 1 },
    { _name: 'Out Gain', _type: 'linear', _min: -48, _max: 0, _step: 1 },
    { _name: 'Attack', _type: 'linear', _min: 1, _max: 7, _step: 0.1, _decimals: 1 },
    { _name: 'Release', _type: 'linear', _min: 1, _max: 7, _step: 0.1, _decimals: 1 },
    { _name: 'Ratio', _type: 'enum', _enum: ['4', '8', '12', '20', 'ALL'] },
  ],
  ULC2: [
    { _name: 'Active A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Input Gain A', _type: 'linear', _min: -48, _max: 0, _step: 1 },
    { _name: 'Out Gain A', _type: 'linear', _min: -48, _max: 0, _step: 1 },
    { _name: 'Attack A', _type: 'linear', _min: 1, _max: 7, _step: 0.1, _decimals: 1 },
    { _name: 'Release A', _type: 'linear', _min: 1, _max: 7, _step: 0.1, _decimals: 1 },
    { _name: 'Ratio A', _type: 'enum', _enum: ['4', '8', '12', '20', 'ALL'] },
    { _name: 'Active B', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Input Gain B', _type: 'linear', _min: -48, _max: 0, _step: 1 },
    { _name: 'Out Gain B', _type: 'linear', _min: -48, _max: 0, _step: 1 },
    { _name: 'Attack B', _type: 'linear', _min: 1, _max: 7, _step: 0.1, _decimals: 1 },
    { _name: 'Release B', _type: 'linear', _min: 1, _max: 7, _step: 0.1, _decimals: 1 },
    { _name: 'Ratio B', _type: 'enum', _enum: ['4', '8', '12', '20', 'ALL'] },
  ],
  ENH2: [
    { _name: 'Out Gain A', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Bass Gain A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Bass Freq A', _type: 'linear', _min: 1, _max: 50, _step: 1 },
    { _name: 'Mid Gain A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Mid Q A', _type: 'linear', _min: 1, _max: 50, _step: 1 },
    { _name: 'Hi Gain A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Hi Freq A', _type: 'linear', _min: 1, _max: 50, _step: 1 },
    { _name: 'Solo A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Out Gain B', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Bass Gain B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Bass Freq B', _type: 'linear', _min: 1, _max: 50, _step: 1 },
    { _name: 'Mid Gain B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Mid Q B', _type: 'linear', _min: 1, _max: 50, _step: 1 },
    { _name: 'Hi Gain B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Hi Freq B', _type: 'linear', _min: 1, _max: 50, _step: 1 },
    { _name: 'Solo B', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  ENH: [
    { _name: 'Out Gain', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Spread', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Bass Gain', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Bass Freq', _type: 'linear', _min: 1, _max: 50, _step: 1 },
    { _name: 'Mid Gain', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Mid Q', _type: 'linear', _min: 1, _max: 50, _step: 1 },
    { _name: 'Hi Gain', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Hi Freq', _type: 'linear', _min: 1, _max: 50, _step: 1 },
    { _name: 'Solo', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  EXC2: [
    { _name: 'Tune A', _type: 'exponential', _min: 1000, _max: 10000, _steps: 50, _freq: true, _decimals: 1 },
    { _name: 'Peak A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Zero Fill A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Timbre A', _type: 'linear', _min: -50, _max: 50, _step: 2 },
    { _name: 'Harmonics A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Mix A', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Solo A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Tune B', _type: 'exponential', _min: 1000, _max: 10000, _steps: 50, _freq: true, _decimals: 1 },
    { _name: 'Peak B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Zero Fill B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Timbre B', _type: 'linear', _min: -50, _max: 50, _step: 2 },
    { _name: 'Harmonics B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Mix B', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Solo B', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  EXC: [
    { _name: 'Tune', _type: 'exponential', _min: 1000, _max: 10000, _steps: 50, _freq: true, _decimals: 1 },
    { _name: 'Peak', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Zero Fill', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Timbre', _type: 'linear', _min: -50, _max: 50, _step: 2 },
    { _name: 'Harmonics', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Solo', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  IMG: [
    { _name: 'Balance', _type: 'linear', _min: -100, _max: 100, _step: 2 },
    { _name: 'Mono Pan', _type: 'linear', _min: -100, _max: 100, _step: 2 },
    { _name: 'Stereo Pan', _type: 'linear', _min: -100, _max: 100, _step: 2 },
    { _name: 'Shv Gain', _type: 'linear', _min: 0, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Shv Freq', _type: 'exponential', _min: 100, _max: 1000, _steps: 24, _decimals: 0 },
    { _name: 'Shv Q', _type: 'exponential', _min: 1, _max: 10, _steps: 24, _decimals: 2 },
    { _name: 'Out Gain', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
  ],
  EDI: [
    { _name: 'Active', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Input Mode', _type: 'enum', _enum: ['ST', 'M/S'] },
    { _name: 'Output Mode', _type: 'enum', _enum: ['ST', 'M/S'] },
    { _name: 'ST Spread', _type: 'linear', _min: -50, _max: 50, _step: 2, _decimals: 0 },
    { _name: 'LMF Spread', _type: 'linear', _min: -50, _max: 50, _step: 2, _decimals: 0 },
    { _name: 'Balance', _type: 'linear', _min: -50, _max: 50, _step: 2, _decimals: 0 },
    { _name: 'Center Distance', _type: 'linear', _min: -50, _max: 50, _step: 2, _decimals: 0 },
    { _name: 'Out Gain', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
  ],
  SON: [
    { _name: 'Active A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Lo Contour A', _type: 'linear', _min: 0, _max: 10, _step: 0.2, _decimals: 1 },
    { _name: 'Process A', _type: 'linear', _min: 0, _max: 10, _step: 0.2, _decimals: 1 },
    { _name: 'Gain A', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Active B', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Lo Contour B', _type: 'linear', _min: 0, _max: 10, _step: 0.2, _decimals: 1 },
    { _name: 'Process B', _type: 'linear', _min: 0, _max: 10, _step: 0.2, _decimals: 1 },
    { _name: 'Gain B', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
  ],
  AMP2: [
    { _name: 'Preamp A', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Buzz A', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Punch A', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Crunch A', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Drive A', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Level A', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Low A', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'High A', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Cabinet A', _type: 'enum', _enum: ['OFF', 'ON'] },
    { _name: 'Preamp B', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Buzz B', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Punch B', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Crunch B', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Drive B', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Level B', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Low B', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'High B', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Cabinet B', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  AMP: [
    { _name: 'Preamp', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Buzz', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Punch', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Crunch', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Drive', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Level', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Low', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'High', _type: 'linear', _min: 0, _max: 10, _step: 0.25, _decimals: 1 },
    { _name: 'Cabinet', _type: 'enum', _enum: ['OFF', 'ON'] },
  ],
  DRV2: [
    { _name: 'Drive A', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Even Har A', _type: 'linear', _min: 0, _max: 50, _step: 2 },
    { _name: 'Odd Har A', _type: 'linear', _min: 0, _max: 50, _step: 2 },
    { _name: 'Gain A', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Cut A', _type: 'exponential', _min: 20, _max: 200, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut A', _type: 'exponential', _min: 4000, _max: 20000, _steps: 50, _freq: true, _decimals: 0 },
    { _name: 'Lo Gain A', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Freq A', _type: 'exponential', _min: 50, _max: 400, _steps: 50, _decimals: 0 },
    { _name: 'Hi Gain A', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Hi Freq A', _type: 'exponential', _min: 1000, _max: 10000, _steps: 50, _freq: true, _decimals: 0 },
    { _name: 'Drive B', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Even Har B', _type: 'linear', _min: 0, _max: 50, _step: 2 },
    { _name: 'Odd Har B', _type: 'linear', _min: 0, _max: 50, _step: 2 },
    { _name: 'Gain B', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Cut B', _type: 'exponential', _min: 20, _max: 200, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut B', _type: 'exponential', _min: 4000, _max: 20000, _steps: 50, _freq: true, _decimals: 0 },
    { _name: 'Lo Gain B', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Freq B', _type: 'exponential', _min: 50, _max: 400, _steps: 50, _decimals: 0 },
    { _name: 'Hi Gain B', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Hi Freq B', _type: 'exponential', _min: 1000, _max: 10000, _steps: 50, _freq: true, _decimals: 0 },
  ],
  DRV: [
    { _name: 'Drive', _type: 'linear', _min: 0, _max: 100, _step: 5 },
    { _name: 'Even Har', _type: 'linear', _min: 0, _max: 50, _step: 2 },
    { _name: 'Odd Har', _type: 'linear', _min: 0, _max: 50, _step: 2 },
    { _name: 'Gain', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 20, _max: 200, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 4000, _max: 20000, _steps: 50, _freq: true, _decimals: 0 },
    { _name: 'Lo Gain', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Lo Freq', _type: 'exponential', _min: 50, _max: 400, _steps: 50, _decimals: 0 },
    { _name: 'Hi Gain', _type: 'linear', _min: -12, _max: 12, _step: 0.5, _decimals: 1 },
    { _name: 'Hi Freq', _type: 'exponential', _min: 1000, _max: 10000, _steps: 50, _freq: true, _decimals: 0 },
  ],
  PIT2: [
    { _name: 'SemiTone 1', _type: 'linear', _min: -12, _max: 12, _step: 1 },
    { _name: 'Cent 1', _type: 'linear', _min: -50, _max: 50, _step: 1 },
    { _name: 'Delay 1', _type: 'exponential', _min: 1, _max: 500, _steps: 100, _decimals: 1 },
    { _name: 'Gain 1', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Pan 1', _type: 'linear', _min: -100, _max: 100, _step: 5 },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'SemiTone 2', _type: 'linear', _min: -12, _max: 12, _step: 1 },
    { _name: 'Cent 2', _type: 'linear', _min: -50, _max: 50, _step: 1 },
    { _name: 'Delay 2', _type: 'exponential', _min: 1, _max: 500, _steps: 100, _decimals: 1 },
    { _name: 'Gain 2', _type: 'linear', _min: 0, _max: 100, _step: 2 },
    { _name: 'Pan 2', _type: 'linear', _min: -100, _max: 100, _step: 5 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 2000, _max: 20000, _steps: 50, _freq: true, _decimals: 0 },
  ],
  PIT: [
    { _name: 'SemiTone', _type: 'linear', _min: -12, _max: 12, _step: 1 },
    { _name: 'Cent', _type: 'linear', _min: -50, _max: 50, _step: 1 },
    { _name: 'Delay', _type: 'exponential', _min: 1, _max: 500, _steps: 100, _decimals: 1 },
    { _name: 'Lo Cut', _type: 'exponential', _min: 10, _max: 500, _steps: 50, _decimals: 0 },
    { _name: 'Hi Cut', _type: 'exponential', _min: 2000, _max: 20000, _steps: 50, _freq: true, _decimals: 0 },
    { _name: 'Mix', _type: 'linear', _min: 0, _max: 100, _step: 2 },
  ],
};

const x32OutputAuxDefinition: x32DefinitionNode = {
  src: { _type: 'virtualEnum', _enum: x32Enums.outputSource },
  pos: { _type: 'enum', _enum: ['IN/LC', 'IN/LC+M', '<-EQ', '<-EQ+M', 'EQ->', 'EQ->+M', 'PRE', 'PRE+M', 'POST'] },
  invert: { _type: 'enum', _enum: ['OFF', 'ON'] },
};

//: x32DefinitionNode
const x32NodeStructure = {
  config: {
    chlink: (() => {
      let chlink: x32DefinitionNode = {};
      for (let i = 1; i <= 31; i += 2) chlink[i + '-' + (i + 1)] = { _type: 'enum', _enum: ['OFF', 'ON'] };
      return chlink;
    })(),
    auxlink: (() => {
      let auxlink: x32DefinitionNode = {};
      for (let i = 1; i <= 7; i += 2) auxlink[i + '-' + (i + 1)] = { _type: 'enum', _enum: ['OFF', 'ON'] };
      return auxlink;
    })(),
    fxlink: (() => {
      let fxlink: x32DefinitionNode = {};
      for (let i = 1; i <= 7; i += 2) fxlink[i + '-' + (i + 1)] = { _type: 'enum', _enum: ['OFF', 'ON'] };
      return fxlink;
    })(),
    buslink: (() => {
      let buslink: x32DefinitionNode = {};
      for (let i = 1; i <= 15; i += 2) buslink[i + '-' + (i + 1)] = { _type: 'enum', _enum: ['OFF', 'ON'] };
      return buslink;
    })(),
    mtxlink: (() => {
      let mtxlink: x32DefinitionNode = {};
      for (let i = 1; i <= 5; i += 2) mtxlink[i + '-' + (i + 1)] = { _type: 'enum', _enum: ['OFF', 'ON'] };
      return mtxlink;
    })(),
    mute: (() => {
      let mute: x32DefinitionNode = {};
      for (let i = 1; i <= 6; i++) mute["'" + i.toString()] = { _type: 'enum', _enum: ['OFF', 'ON'] };
      return mute;
    })(),
    linkcfg: {
      hadly: { _type: 'enum', _enum: ['OFF', 'ON'] },
      eq: { _type: 'enum', _enum: ['OFF', 'ON'] },
      dyn: { _type: 'enum', _enum: ['OFF', 'ON'] },
      fdrmute: { _type: 'enum', _enum: ['OFF', 'ON'] },
    },
    mono: {
      mode: { _type: 'enum', _enum: ['LR+M', 'LCR'] },
      link: { _type: 'enum', _enum: ['OFF', 'ON'] },
    },
    solo: {
      level: { _type: 'level161' },
      source: { _type: 'enum', _enum: ['OFF', 'LR', 'LR+C', 'LRPFL', 'LRAFL', 'AUX56', 'AUX78'] },
      sourcetrim: { _type: 'linear', _min: -18, _max: 18, _step: 0.5, _decimals: 1 },
      chmode: { _type: 'enum', _enum: ['PFL', 'AFL'] },
      busmode: { _type: 'enum', _enum: ['PFL', 'AFL'] },
      dcamode: { _type: 'enum', _enum: ['PFL', 'AFL'] },
      exclusive: { _type: 'enum', _enum: ['OFF', 'ON'] },
      followsel: { _type: 'enum', _enum: ['OFF', 'ON'] },
      followsolo: { _type: 'enum', _enum: ['OFF', 'ON'] },
      dimatt: { _type: 'linear', _min: -40, _max: 0, _step: 1 },
      dim: { _type: 'enum', _enum: ['OFF', 'ON'] },
      mono: { _type: 'enum', _enum: ['OFF', 'ON'] },
      delay: { _type: 'enum', _enum: ['OFF', 'ON'] },
      delaytime: { _type: 'linear', _min: 0.3, _max: 500, _step: 0.1, _decimals: 1 },
      masterctrl: { _type: 'enum', _enum: ['OFF', 'ON'] },
      mute: { _type: 'enum', _enum: ['OFF', 'ON'] },
      dimpfl: { _type: 'enum', _enum: ['OFF', 'ON'] },
    },
    talk: {
      enable: { _type: 'enum', _enum: ['OFF', 'ON'] },
      source: { _type: 'enum', _enum: ['INT', 'EXT'] },
      A: x32TalkbackDefinition,
      B: x32TalkbackDefinition,
    },
    osc: {
      level: { _type: 'level161' },
      f1: { _type: 'exponential', _min:20, _max:20000, _steps: 120, _decimals: 1, _freq: true },
      f2: { _type: 'exponential', _min:20, _max:20000, _steps: 120, _decimals: 1, _freq: true },
      fsel: { _type: 'enum', _enum: ['F1', 'F2'] },
      type: { _type: 'enum', _enum: ['SINE', 'PINK', 'WHITE'] },
      dest: {
        _type: 'virtualEnum',
        _enum: (() => {
          let oscDest: string[] = [];
          for (let i = 1; i <= 16; i++) oscDest.push('MixBus' + i);
          oscDest.push('L');
          oscDest.push('R');
          oscDest.push('L+R');
          oscDest.push('M/C');
          for (let i = 1; i <= 6; i++) oscDest.push('Matrix' + i);
          return oscDest;
        })(),
      },
    },
    userrout: {
      out: (() => {
        let out: x32DefinitionNode = {};
        for (let i = 1; i <= 48; i++)
          out["'" + i.toString().padStart(2, '0')] = {
            _type: 'virtualEnum',
            _enum: (() => {
              let userOut = ['OFF'];
              for (let i = 1; i <= 32; i++) userOut.push('Local In ' + i);
              for (let i = 1; i <= 48; i++) userOut.push('AES50-A ' + i);
              for (let i = 1; i <= 48; i++) userOut.push('AES50-B ' + i);
              for (let i = 1; i <= 32; i++) userOut.push('Card In ' + i);
              for (let i = 1; i <= 6; i++) userOut.push('Aux In ' + i);
              userOut.push('TB Internal');
              userOut.push('TB External');
              for (let i = 1; i <= 16; i++) userOut.push('Outputs ' + i);
              for (let i = 1; i <= 16; i++) userOut.push('P16 ' + i);
              for (let i = 1; i <= 6; i++) userOut.push('AUX ' + i);
              userOut.push('Monitor L');
              userOut.push('Monitor R');
              return userOut;
            })(),
          };
        return out;
      })(),
      in: (() => {
        let _in: x32DefinitionNode = {};
        for (let i = 1; i <= 32; i++)
          _in["'" + i.toString().padStart(2, '0')] = {
            _type: 'virtualEnum',
            _enum: (() => {
              let userIn = ['OFF'];
              for (let i = 1; i <= 32; i++) userIn.push('Local In ' + i);
              for (let i = 1; i <= 48; i++) userIn.push('AES50-A ' + i);
              for (let i = 1; i <= 48; i++) userIn.push('AES50-B ' + i);
              for (let i = 1; i <= 32; i++) userIn.push('Card In ' + i);
              for (let i = 1; i <= 6; i++) userIn.push('Aux In ' + i);
              userIn.push('TB Internal');
              userIn.push('TB External');
              return userIn;
            })(),
          };
        return _in;
      })(),
    },
    routing: {
      routswitch: { _type: 'enum', _enum: ['REC', 'PLAY'] },
      IN: {
        '1-8': { _type: 'enum', _enum: x32Enums.inBlocks },
        '9-16': { _type: 'enum', _enum: x32Enums.inBlocks },
        '17-24': { _type: 'enum', _enum: x32Enums.inBlocks },
        '25-32': { _type: 'enum', _enum: x32Enums.inBlocks },
        AUX: { _type: 'enum', _enum: x32Enums.auxInBlocks },
      },
      AES50A: {
        '1-8': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '9-16': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '17-24': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '25-32': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '33-40': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '41-48': { _type: 'enum', _enum: x32Enums.extOutBlocks },
      },
      AES50B: {
        '1-8': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '9-16': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '17-24': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '25-32': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '33-40': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '41-48': { _type: 'enum', _enum: x32Enums.extOutBlocks },
      },
      CARD: {
        '1-8': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '9-16': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '17-24': { _type: 'enum', _enum: x32Enums.extOutBlocks },
        '25-32': { _type: 'enum', _enum: x32Enums.extOutBlocks },
      },
      OUT: {
        '1-4': { _type: 'enum', _enum: x32Enums.outBlocks1 },
        '5-8': { _type: 'enum', _enum: x32Enums.outBlocks2 },
        '9-12': { _type: 'enum', _enum: x32Enums.outBlocks1 },
        '13-16': { _type: 'enum', _enum: x32Enums.outBlocks2 },
      },
      PLAY: {
        '1-8': { _type: 'enum', _enum: x32Enums.inBlocks },
        '9-16': { _type: 'enum', _enum: x32Enums.inBlocks },
        '17-24': { _type: 'enum', _enum: x32Enums.inBlocks },
        '25-32': { _type: 'enum', _enum: x32Enums.inBlocks },
        AUX: { _type: 'enum', _enum: x32Enums.auxInBlocks },
      },
    },
    userctrl: {
      A: x32UserctrlDefinition,
      B: x32UserctrlDefinition,
      C: x32UserctrlDefinition,
    },
    tape: {
      gainL: { _type: 'linear', _min: -6.0, _max: 24.0, _step: 0.5, _decimals: 1 },
      gainR: { _type: 'linear', _min: -6.0, _max: 24.0, _step: 0.5, _decimals: 1 },
      autoplay: { _type: 'enum', _enum: ['OFF', 'ON'] },
    },
    amixenable: {
      X: { _type: 'enum', _enum: ['OFF', 'ON'] },
      Y: { _type: 'enum', _enum: ['OFF', 'ON'] },
    },
    dp48: {
      scope: { _type: 'bitmap', _size: 4 },
      broadcast: { _type: 'int', _max: 0 }, //console always says this value is 0. Setting it to 1 has some unknown effect
      aesAB: { _type: 'enum', _enum: ['AESA', 'AESB'] },
      assign: (() => {
        let assign: x32DefinitionNode = {};
        for (let i = 1; i <= 48; i++)
          assign["'" + i.toString().padStart(2, '0')] = {
            _type: 'int',
            _max: 12,
          };
        return assign;
      })(),
      link: (() => {
        let link: x32DefinitionNode = {};
        for (let i = 1; i <= 24; i++) link["'" + i.toString().padStart(2, '0')] = { _type: 'int', _max: 1 };
        return link;
      })(),
      grpname: (() => {
        let assign: x32DefinitionNode = {};
        for (let i = 1; i <= 12; i++)
          assign["'" + i.toString().padStart(2, '0')] = {
            _type: 'string',
          };
        return assign;
      })(),
    },
  },
  ch: (() => {
    let ch: x32DefinitionNode = {};
    for (let i = 1; i <= 32; i++) ch["'" + i.toString().padStart(2, '0')] = x32ChannelDefinition;
    return ch;
  })(),
  auxin: (() => {
    let aux: x32DefinitionNode = {};
    for (let i = 1; i <= 8; i++) aux["'" + i.toString().padStart(2, '0')] = x32AuxDefinition;
    return aux;
  })(),
  fxrtn: (() => {
    let fxrtn: x32DefinitionNode = {};
    for (let i = 1; i <= 8; i++) fxrtn["'" + i.toString().padStart(2, '0')] = x32FxrtnDefinition;
    return fxrtn;
  })(),
  bus: (() => {
    let bus: x32DefinitionNode = {};
    for (let i = 1; i <= 16; i++) bus["'" + i.toString().padStart(2, '0')] = x32BusDefinition;
    return bus;
  })(),
  mtx: (() => {
    let mtx: x32DefinitionNode = {};
    for (let i = 1; i <= 6; i++) mtx["'" + i.toString().padStart(2, '0')] = x32MtxDefinition;
    return mtx;
  })(),
  main: {
    st: {
      config: {
        name: { _type: 'string' },
        icon: { _type: 'icon' },
        color: { _type: 'enum', _enum: x32Enums.color },
      },
      dyn: x32MtxDynDefinition,
      insert: x32InsertDefinition,
      eq: x32EqDefinition(6, true),
      mix: x32MixDefinition(6, true),
      grp: {
        dca: { _type: 'bitmap', _size: 8 },
        mute: { _type: 'bitmap', _size: 6 },
      },
    },
    m: {
      config: {
        name: { _type: 'string' },
        icon: { _type: 'icon' },
        color: { _type: 'enum', _enum: x32Enums.color },
      },
      dyn: x32MtxDynDefinition,
      insert: x32InsertDefinition,
      eq: x32EqDefinition(6, true),
      mix: x32MixDefinition(6, true, true),
      grp: {
        dca: { _type: 'bitmap', _size: 8 },
        mute: { _type: 'bitmap', _size: 6 },
      },
    },
  },
  dca: (() => {
    let dca: x32DefinitionNode = {};
    for (let i = 1; i <= 8; i++)
      dca["'" + i.toString()] = {
        on: { _type: 'enum', _enum: ['OFF', 'ON'] },
        fader: { _type: 'level' },
        config: {
          name: { _type: 'string' },
          icon: { _type: 'icon' },
          color: { _type: 'enum', _enum: x32Enums.color },
        },
      };
    return dca;
  })(),
  fx: (() => {
    let fx: x32DefinitionNode = {};
    for (let i = 1; i <= 4; i++)
      fx["'" + i.toString()] = {
        type: { _type: 'enum', _enum: x32Enums.fx14Type, _isKey: true },
        source: {
          l: { _type: 'enum', _enum: x32Enums.fxSource },
          r: { _type: 'enum', _enum: x32Enums.fxSource },
        },
        par: (() => {
          let par: x32DefinitionNode = {};
          for (let j = 1; j <= 64; j++)
            par["'" + j.toString().padStart(2, '0')] = {
              _type: 'conditional',
              _keyAddress: ['fx', i.toString(), 'type'],
              _index: j - 1,
              _conditional: x32FxConditional,
            };
          return par;
        })(),
      };
    for (let i = 5; i <= 8; i++)
      fx["'" + i.toString()] = {
        type: { _type: 'enum', _enum: x32Enums.fx58Type, _isKey: true },
        par: (() => {
          let par: x32DefinitionNode = {};
          for (let j = 1; j <= 64; j++)
            par["'" + j.toString().padStart(2, '0')] = {
              _type: 'conditional',
              _keyAddress: ['fx', i.toString(), 'type'],
              _index: j - 1,
              _conditional: x32FxConditional,
            };
          return par;
        })(),
      };
    return fx;
  })(),
  outputs: {
    main: (() => {
      let main: x32DefinitionNode = {};
      for (let i = 1; i <= 16; i++)
        main["'" + i.toString().padStart(2, '0')] = {
          ...(x32OutputAuxDefinition as any), //typescript struggles with 'never'
          delay: {
            on: { _type: 'enum', _enum: ['OFF', 'ON'] },
            time: { _type: 'linear', _min: 0.3, _max: 500, _step: 0.1, _decimals: 1 },
          },
        };
      return main;
    })(),
    aux: (() => {
      let aux: x32DefinitionNode = {};
      for (let i = 1; i <= 6; i++) aux["'" + i.toString().padStart(2, '0')] = x32OutputAuxDefinition;
      return aux;
    })(),
    p16: (() => {
      let p16: x32DefinitionNode = {};
      for (let i = 1; i <= 16; i++)
        p16["'" + i.toString().padStart(2, '0')] = {
          ...(x32OutputAuxDefinition as any), //typescript struggles with 'never'
          iQ: {
            group: { _type: 'enum', _enum: ['OFF', 'A', 'B'] },
            speaker: { _type: 'enum', _enum: ['none', 'iQ8', 'iQ10', 'iQ12', 'iQ15', 'iQ15B', 'iQ18B'] },
            eq: { _type: 'enum', _enum: ['Linear', 'Live', 'Speech', 'Playback', 'User'] },
            model: { _type: 'int', _max: 7 },
          },
        };
      return p16;
    })(),
    aes: (() => {
      let aes: x32DefinitionNode = {};
      for (let i = 1; i <= 2; i++) aes["'" + i.toString().padStart(2, '0')] = x32OutputAuxDefinition;
      return aes;
    })(),
    rec: (() => {
      let rec: x32DefinitionNode = {};
      for (let i = 1; i <= 2; i++)
        rec["'" + i.toString().padStart(2, '0')] = {
          src: { _type: 'virtualEnum', _enum: x32Enums.outputSource },
          pos: {
            _type: 'enum',
            _enum: ['IN/LC', 'IN/LC+M', '<-EQ', '<-EQ+M', 'EQ->', 'EQ->+M', 'PRE', 'PRE+M', 'POST'],
          },
        };
      return rec;
    })(),
  },
  headamp: (() => {
    let headamp: x32DefinitionNode = {};
    for (let i = 0; i <= 127; i++)
      headamp["'" + i.toString().padStart(3, '0')] = {
        gain: { _type: 'linear', _min: -12.0, _max: 60.0, _step: 0.5, _decimals: 1, _plusSign: true },
        phantom: { _type: 'enum', _enum: ['OFF', 'ON'] },
      };
    return headamp;
  })(),
};

export { x32NodeStructure, x32Enums };
