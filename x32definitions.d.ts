declare const x32Enums: {
    inBlocks: string[];
    auxInBlocks: string[];
    extOutBlocks: string[];
    outBlocks1: string[];
    outBlocks2: string[];
    color: string[];
    inputSource: string[];
    fx14Type: string[];
    fx58Type: string[];
    fxSource: string[];
    outputSource: string[];
    delayFactor: string[];
    dlyPattern: string[];
    pq5MidFreq: string[];
    cmbRatio: string[];
};
declare const x32NodeStructure: {
    config: {
        chlink: x32DefinitionNode;
        auxlink: x32DefinitionNode;
        fxlink: x32DefinitionNode;
        buslink: x32DefinitionNode;
        mtxlink: x32DefinitionNode;
        mute: x32DefinitionNode;
        linkcfg: {
            hadly: {
                _type: string;
                _enum: string[];
            };
            eq: {
                _type: string;
                _enum: string[];
            };
            dyn: {
                _type: string;
                _enum: string[];
            };
            fdrmute: {
                _type: string;
                _enum: string[];
            };
        };
        mono: {
            mode: {
                _type: string;
                _enum: string[];
            };
            link: {
                _type: string;
                _enum: string[];
            };
        };
        solo: {
            level: {
                _type: string;
            };
            source: {
                _type: string;
                _enum: string[];
            };
            sourcetrim: {
                _type: string;
                _min: number;
                _max: number;
                _step: number;
                _decimals: number;
            };
            chmode: {
                _type: string;
                _enum: string[];
            };
            busmode: {
                _type: string;
                _enum: string[];
            };
            dcamode: {
                _type: string;
                _enum: string[];
            };
            exclusive: {
                _type: string;
                _enum: string[];
            };
            followsel: {
                _type: string;
                _enum: string[];
            };
            followsolo: {
                _type: string;
                _enum: string[];
            };
            dimatt: {
                _type: string;
                _min: number;
                _max: number;
                _step: number;
            };
            dim: {
                _type: string;
                _enum: string[];
            };
            mono: {
                _type: string;
                _enum: string[];
            };
            delay: {
                _type: string;
                _enum: string[];
            };
            delaytime: {
                _type: string;
                _min: number;
                _max: number;
                _step: number;
                _decimals: number;
            };
            masterctrl: {
                _type: string;
                _enum: string[];
            };
            mute: {
                _type: string;
                _enum: string[];
            };
            dimpfl: {
                _type: string;
                _enum: string[];
            };
        };
        talk: {
            enable: {
                _type: string;
                _enum: string[];
            };
            source: {
                _type: string;
                _enum: string[];
            };
            A: x32DefinitionNode;
            B: x32DefinitionNode;
        };
        osc: {
            level: {
                _type: string;
            };
            f1: {
                _type: string;
                _min: number;
                _max: number;
                _steps: number;
                _decimals: number;
                _freq: boolean;
            };
            f2: {
                _type: string;
                _min: number;
                _max: number;
                _steps: number;
                _decimals: number;
                _freq: boolean;
            };
            fsel: {
                _type: string;
                _enum: string[];
            };
            type: {
                _type: string;
                _enum: string[];
            };
            dest: {
                _type: string;
                _enum: string[];
            };
        };
        userrout: {
            out: x32DefinitionNode;
            in: x32DefinitionNode;
        };
        routing: {
            routswitch: {
                _type: string;
                _enum: string[];
            };
            IN: {
                '1-8': {
                    _type: string;
                    _enum: string[];
                };
                '9-16': {
                    _type: string;
                    _enum: string[];
                };
                '17-24': {
                    _type: string;
                    _enum: string[];
                };
                '25-32': {
                    _type: string;
                    _enum: string[];
                };
                AUX: {
                    _type: string;
                    _enum: string[];
                };
            };
            AES50A: {
                '1-8': {
                    _type: string;
                    _enum: string[];
                };
                '9-16': {
                    _type: string;
                    _enum: string[];
                };
                '17-24': {
                    _type: string;
                    _enum: string[];
                };
                '25-32': {
                    _type: string;
                    _enum: string[];
                };
                '33-40': {
                    _type: string;
                    _enum: string[];
                };
                '41-48': {
                    _type: string;
                    _enum: string[];
                };
            };
            AES50B: {
                '1-8': {
                    _type: string;
                    _enum: string[];
                };
                '9-16': {
                    _type: string;
                    _enum: string[];
                };
                '17-24': {
                    _type: string;
                    _enum: string[];
                };
                '25-32': {
                    _type: string;
                    _enum: string[];
                };
                '33-40': {
                    _type: string;
                    _enum: string[];
                };
                '41-48': {
                    _type: string;
                    _enum: string[];
                };
            };
            CARD: {
                '1-8': {
                    _type: string;
                    _enum: string[];
                };
                '9-16': {
                    _type: string;
                    _enum: string[];
                };
                '17-24': {
                    _type: string;
                    _enum: string[];
                };
                '25-32': {
                    _type: string;
                    _enum: string[];
                };
            };
            OUT: {
                '1-4': {
                    _type: string;
                    _enum: string[];
                };
                '5-8': {
                    _type: string;
                    _enum: string[];
                };
                '9-12': {
                    _type: string;
                    _enum: string[];
                };
                '13-16': {
                    _type: string;
                    _enum: string[];
                };
            };
            PLAY: {
                '1-8': {
                    _type: string;
                    _enum: string[];
                };
                '9-16': {
                    _type: string;
                    _enum: string[];
                };
                '17-24': {
                    _type: string;
                    _enum: string[];
                };
                '25-32': {
                    _type: string;
                    _enum: string[];
                };
                AUX: {
                    _type: string;
                    _enum: string[];
                };
            };
        };
        userctrl: {
            A: x32DefinitionNode;
            B: x32DefinitionNode;
            C: x32DefinitionNode;
        };
        tape: {
            gainL: {
                _type: string;
                _min: number;
                _max: number;
                _step: number;
                _decimals: number;
            };
            gainR: {
                _type: string;
                _min: number;
                _max: number;
                _step: number;
                _decimals: number;
            };
            autoplay: {
                _type: string;
                _enum: string[];
            };
        };
        amixenable: {
            X: {
                _type: string;
                _enum: string[];
            };
            Y: {
                _type: string;
                _enum: string[];
            };
        };
        dp48: {
            scope: {
                _type: string;
                _size: number;
            };
            broadcast: {
                _type: string;
                _max: number;
            };
            aesAB: {
                _type: string;
                _enum: string[];
            };
            assign: x32DefinitionNode;
            link: x32DefinitionNode;
            grpname: x32DefinitionNode;
        };
    };
    ch: x32DefinitionNode;
    auxin: x32DefinitionNode;
    fxrtn: x32DefinitionNode;
    bus: x32DefinitionNode;
    mtx: x32DefinitionNode;
    main: {
        st: {
            config: {
                name: {
                    _type: string;
                };
                icon: {
                    _type: string;
                };
                color: {
                    _type: string;
                    _enum: string[];
                };
            };
            dyn: x32DefinitionNode;
            insert: x32DefinitionNode;
            eq: x32DefinitionNode;
            mix: x32DefinitionNode;
            grp: {
                dca: {
                    _type: string;
                    _size: number;
                };
                mute: {
                    _type: string;
                    _size: number;
                };
            };
        };
        m: {
            config: {
                name: {
                    _type: string;
                };
                icon: {
                    _type: string;
                };
                color: {
                    _type: string;
                    _enum: string[];
                };
            };
            dyn: x32DefinitionNode;
            insert: x32DefinitionNode;
            eq: x32DefinitionNode;
            mix: x32DefinitionNode;
            grp: {
                dca: {
                    _type: string;
                    _size: number;
                };
                mute: {
                    _type: string;
                    _size: number;
                };
            };
        };
    };
    dca: x32DefinitionNode;
    fx: x32DefinitionNode;
    outputs: {
        main: x32DefinitionNode;
        aux: x32DefinitionNode;
        p16: x32DefinitionNode;
        aes: x32DefinitionNode;
        rec: x32DefinitionNode;
    };
    headamp: x32DefinitionNode;
};
export { x32NodeStructure, x32Enums };
