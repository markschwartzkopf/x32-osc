//Internal types:

type x32Conditional = {
    [K: string]: ({ _name: string } & x32DefinitionLeaf)[];
  };
  
  type x32DefinitionLeaf =
    | { _type: 'level161' | 'icon' | 'level' | 'string' | 'encString' | 'btnString' | 'unused'}
    | {
        _type: 'linear';
        _min: number;
        _max: number;
        _step: number;
        _decimals?: number;
        _maxDigits?: number;
        _plusSign?: true;
      }
    | {
        _type: 'exponential';
        _min: number;
        _max: number;
        _steps: number;
        _decimals?: number;
        _maxDigits?: number;
        _freq?: true;
      }
    | { _type: 'bitmap'; _size: number }
    | { _type: 'int'; _max: number }
    | { _type: 'enum'; _enum: string[], _isKey?: true }
    | { _type: 'virtualEnum'; _enum: string[] }
    | { _type: 'conditional'; _keyAddress: string[]; _index: number; _conditional: x32Conditional };
  
  type x32DefinitionNode = {
    [K: string]: x32DefinitionNode | x32DefinitionLeaf;
  } & { _type?: never };
  
  type x32MetaNode = {
    [K: string]: x32MetaNode | x32MetaLeaf | string[];
  } & {
    _type?: never;
    _address: string[];
  };
  type x32MetaLeaf = x32DefinitionLeaf & { _address: string[]; _value: string; _redundant?: true };
  
  //External types
  type x32Node = { [K: string]: x32Node | string } & { _type?: never };
  type x32Diff = { [K: string]: x32Diff | { reference: string; current: string } };
  type meterDescriptions = (number | [5, number, number] | [6, number])[];

  type osc = typeof import('./x32-osc-obj.json');