const { getAvatarSlotTypeEnums } = require('./protocol/index');

async function main() {
    try {
        const enums = await getAvatarSlotTypeEnums();
        console.log(enums);
    } catch (err) {
        console.error('Error fetching enums:', err);
    }
}

main();
