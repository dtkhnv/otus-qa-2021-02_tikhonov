/**
 * kolobok
 * @param {string} name
 * @returns {string}
 */

export const kolobok = (name) => {
        switch (name) {
            case 'Дедушка':
                return 'Я от дедушки ушел';
                break;
            case 'Бабушка':
                return 'Я от бабушки ушел';
                break;
            case 'Заяц':
                return 'Я от зайца ушел';
                break;
            case 'Волк':
                return 'Я от волка ушел';
                break;
            default:
                throw new Error(`Персонаж - ${name} не существует!`);
        }
};

/**
 * newYear
 * @param {string} nameCharacter
 * @returns {string}
 */

export const newYear = (nameCharacter) => {
    switch (nameCharacter) {
        case 'Снегурочка':
        case 'Дед мороз':
            return `${nameCharacter}! ${nameCharacter}! ${nameCharacter}!`;
            break;
        default:
            throw new Error(`Персонаж - ${nameCharacter} не существует!`);
    }
};
