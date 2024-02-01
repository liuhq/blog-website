const dateFormat = (date: Date, separator: string = '') => {
    if (separator) {
        return [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()].join(separator);
    } else {
        return Intl.DateTimeFormat('zh-CN', { dateStyle: 'medium', timeZone: 'Asia/Shanghai' }).format(date);
    }
};

export default dateFormat;
