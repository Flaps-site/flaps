'use strict';

Blockly.JavaScript['logic_interval'] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
        time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC),
        stat = Blockly.JavaScript.statementToCode(block, 'STAT');

    let code = '';

    if (name.length > 0) {
        code += 'if(typeof $timers !== "object") {$timers = {}}; $timers[' + name + '] = ';
    }

    code += 'setInterval(function() {' + stat + '}, ' + time + ');';

    return code;
}

Blockly.JavaScript['logic_interval_clear'] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);

    if (name === '') {
        return '';
    }

    const code = 'if(typeof $timers === "object") { clearInterval($timers[' + name + ']) }';

    return code;
}

Blockly.JavaScript['logic_timeout'] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
        time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC),
        stat = Blockly.JavaScript.statementToCode(block, 'STAT');

    let code = '';

    if (name.length > 0) {
        code += 'if(typeof $onceTimers !== "object") {$onceTimers = {}}; $onceTimers[' + name + '] = ';
    }

    code += 'setTimeout(function() {' + stat + '}, ' + time + ');';

    return code;
}

Blockly.JavaScript['logic_timeout_clear'] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);

    if (name === '') {
        return '';
    }

    const code = 'if(typeof $onceTimers === "object") { clearTimeout($onceTimers[' + name + ']) }';

    return code;
}
