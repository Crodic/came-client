
export const formatCurrency = (value) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    return formatter.format(value);
}

export const firstLetterUppercase = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}