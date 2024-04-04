const inputData = [
    {
        'id': 'month',
        'pattern': /^[0-9]{2}$/,
        'errorMessage': 'month entry! Example: 01,02...12',
        'value': '',
        'max_value': 12,
    },
    {
        'id': 'day',
        'pattern': /^[0-9]{2}$/,
        'errorMessage': 'day entry! Example: 01,02,... Please check max amount of days in month you used!',
        'value': '',
        'max_value': '',
    },
    {
        'id': 'year',
        'pattern': /^[0-9]{4}$/,
        'errorMessage': 'year entry! Example: 2024',
        'value': '',
        'max_value': new Date().getFullYear(),
    },
]