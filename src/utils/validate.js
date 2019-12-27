//主要用作表单校验
/**
 * 真实姓名
 */
export function isName (rule, value, callback) {
    if(!/^[\u4e00-\u9fa5]{2,4}$/.test(value)) {
        return callback('请输入2-4位的汉字')
    }
    callback()
}

/**
 * 手机号码
 */
export function isMobile (rule, value, callback) {
    if(!/^1[0-9]{10}$/.test(value)) {
        return callback('请输入正确格式的手机号码')
    }
    callback()
}

//验证手机号或者用户名合法
export function isNamePhone (rule, value, callback) {
    if(!/^1[0-9]{10}$/.test(value) && !/^[\u4e00-\u9fa5]{2,4}$/.test(value)) {
        return callback('请输入正确的手机号或用户名')
    }
    callback()
}
/**
 * 只能输入数字、字母、下划线字符A-Z, a-z, 0-9)") 6-10位密码
 */
export function isPassword (rule, value, callback) {
    if(!/^[0-9a-zA-Z_]{6,10}$/.test(value)) {
       return callback('请输入6-10位的数字或字母或下划线的密码')
    }
    callback()
}

// 年龄1-120
export function isAge (rule, value, callback) {
    if(!/^(?:[1-9][0-9]?|1[01][0-9]|120)$/.test(value)) {
       return callback('请输入1-120之前的年龄')
    }
    callback()
}






