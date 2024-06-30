const protobuf = require('protobufjs');
const path = require('path');

const pbProtoPath = path.join(__dirname, 'pb.proto');
const cmdIdProtoPath = path.join(__dirname, 'cmd_id.proto');

const loadProtos = async () => {
    try {
        const root = new protobuf.Root();
        
        await root.load(pbProtoPath, { keepCase: true });
        await root.load(cmdIdProtoPath, { keepCase: true });
        
        const GlobalDispatchData = root.lookupType('GlobalDispatchData');
        
        return { GlobalDispatchData, CmdId };
    } 
    catch (error) {
        console.error('Error loading proto files:', error);
    }
};

module.exports = loadProtos;
