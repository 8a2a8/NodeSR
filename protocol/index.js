const protobuf = require('protobufjs');
const path = require('path');

async function getAvatarSlotTypeEnums() {
    const root = await protobuf.load(path.join(__dirname, 'pb.proto'));
    const AvatarSlotType = root.lookupEnum('AvatarSlotType');
    return AvatarSlotType.values;
}

module.exports = { getAvatarSlotTypeEnums };
