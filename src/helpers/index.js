import dayjs from 'dayjs';

export function formatDate(date) {
    if (date) {
        return dayjs(date).format('DD.MM.YYYY');
    } else {
        return '';
    }
}