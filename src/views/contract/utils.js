/**
 * @description 数字转中文数码
 *
 * @param {Number|String}   num     数字[正整数]
 * @param {String}          type    文本类型，lower|upper，默认upper
 *
 * @example number2text(100000000) => "壹亿元整"
 */
export const number2text = (number, type = "upper") => {
    // 配置
    const confs = {
        lower: {
            num: ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
            unit: ["", "十", "百", "千", "万"],
            level: ["", "万", "亿"]
        },
        upper: {
            num: ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"],
            unit: ["", "拾", "佰", "仟"],
            level: ["", "万", "亿"]
        },
        decimal: {
            unit: ["分", "角"]
        },
        maxNumber: 999999999999.99
    };

    // 过滤不合法参数
    if (Number(number) > confs.maxNumber) {
        console.error(
            `The maxNumber is ${confs.maxNumber}. ${number} is bigger than it!`
        );
        return false;
    }

    const conf = confs[type];
    const numbers = String(Number(number).toFixed(2)).split(".");
    const integer = numbers[0].split("");
    const decimal = Number(numbers[1]) === 0 ? [] : numbers[1].split("");

    // 四位分级
    const levels = integer.reverse().reduce((pre, item, idx) => {
        let level = pre[0] && pre[0].length < 4 ? pre[0] : [];
        let value =
            item === "0" ? conf.num[item] : conf.num[item] + conf.unit[idx % 4];
        level.unshift(value);

        if (level.length === 1) {
            pre.unshift(level);
        } else {
            pre[0] = level;
        }

        return pre;
    }, []);

    // 整数部分
    const _integer = levels.reduce((pre, item, idx) => {
        let _level = conf.level[levels.length - idx - 1];
        let _item = item.join("").replace(/(零)\1+/g, "$1"); // 连续多个零字的部分设置为单个零字

        // 如果这一级只有一个零字，则去掉这级
        if (_item === "零") {
            _item = "";
            _level = "";

            // 否则如果末尾为零字，则去掉这个零字
        } else if (_item[_item.length - 1] === "零") {
            _item = _item.slice(0, _item.length - 1);
        }

        return pre + _item + _level;
    }, "");

    // 小数部分
    let _decimal = decimal
        .map((item, idx) => {
            const unit = confs.decimal.unit;
            const _unit = item !== "0" ? unit[unit.length - idx - 1] : "";

            return `${conf.num[item]}${_unit}`;
        })
        .join("");

    // 如果是整数，则补个整字
    return `${_integer}元` + (_decimal || "整");
};

/**
 * @description 序列化时间  台账用 其他勿用
 * @param {*} timesamp 时间戳
 * @param {*} type day 精确到天
 * @returns 
 */
export const formatTime = (timesamp, type = 'day') => {
    type = type || 'day'
    try {
        const date = new Date(timesamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minnutes = date.getMinutes();
        const seconds = date.getSeconds();

        if (type === 'day') {
            return `${toString10(year)}-${toString10(month)}-${toString10(day)} 00:00:00`
        } else {
            return `${toString10(year)}-${toString10(month)}-${toString10(day)} ${toString10(hours)}:${toString10(minnutes)}:${toString10(seconds)}`
        }
    } catch (error) {

    }
}
function toString10(num) {
    return num < 10 ? `0${num}` : num
}
export const isBlank = (str) => {
    return str === null || str === undefined || str === '';
  };
  export const blankText = (str) => {
    return isBlank(str) ? '-' : str;
  };
  export const findLabel = (arr, value, valueKey='value', labelKey='label') => {
    let _valueKey = valueKey ?? 'value';
    let _labelKey = labelKey ?? 'label';
    if (!Array.isArray(arr)) return null;
    let target = arr.find((i) => i?.[_valueKey] === value);
    return target?.[_labelKey];
  };