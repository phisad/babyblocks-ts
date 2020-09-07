class SampleState {
    private _states = [
        [
            0.595808,
            0.1,
            -0.727508
        ],
        [
            -0.876783,
            0.1,
            0.915448
        ],
        [
            0.905291,
            0.1,
            -0.940973
        ],
        [
            -0.861536,
            0.1,
            0.242345
        ],
        [
            -0.79869,
            0.1,
            -0.889141
        ],
        [
            0.899853,
            0.1,
            0.858539
        ],
        [
            -0.61712,
            0.1,
            0.895679
        ],
        [
            -0.288423,
            0.1,
            -0.354022
        ],
        [
            -0.565733,
            0.1,
            -0.083259
        ],
        [
            0.891467,
            0.1,
            -0.096576
        ],
        [
            -0.316957,
            0.1,
            0.677047
        ],
        [
            -0.881561,
            0.1,
            -0.610627
        ],
        [
            -0.042802,
            0.1,
            -0.726727
        ],
        [
            0.832044,
            0.1,
            0.409979
        ],
        [
            0.514154,
            0.1,
            0.037097
        ],
        [
            -0.690019,
            0.1,
            0.509998
        ],
        [
            0.99517,
            0.1,
            -0.658664
        ],
        [
            0.54642,
            0.1,
            0.268098
        ]
    ];

    constructor() {
    }

    7

    get_state(): number[][] {
        return this._states;
    }

    to_blocks(): iBlockMetaEle[] {
        let blocks = new Array()

        function _add_block(_state, _idx) {
            blocks.push({
                name: _idx + 1,
                id: _idx + 1,
                shape: {
                    type: "block",
                    size: null,
                    shape_params: {
                        face_1: {color: "green"},
                        face_2: {color: "green"},
                        face_3: {color: "green"},
                        face_4: {color: "purple"},
                        face_5: {color: "yellow"},
                        face_6: {color: "green"},
                        side_length: 0.1524
                    }
                }
            })
        }

        this._states.forEach(_add_block)
        return blocks;
    }

    to_states(): iBlockStates {
        let i_states = new Array()

        function _add_block(_state, _idx) {
            i_states.push({
                id: _idx + 1,
                position: {
                    // Notice: The ground is at the "z" axis, so here the y-value
                    // is the same to make all boxes to appear in the same lane
                    "x": _state[0],
                    "y": _state[1],
                    "z": _state[2]
                }
            })
        }

        this._states.forEach(_add_block)
        return {block_state: i_states};
    }
}