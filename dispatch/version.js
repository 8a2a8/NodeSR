const express = require('express');
const { Base64 } = require('js-base64');
const loadProtos = require('../protocol/');

const router = express.Router();

const encodeResponse = (proto, data) => {
    const errMsg = proto.verify(data);
    if (errMsg) throw Error(errMsg);
    
    const message = proto.create(data);
    const buffer = proto.encode(message).finish();
    return Base64.encode(buffer);
};

loadProtos().then(({ GlobalDispatchData }) => {
    router.get('/query_dispatch', (req, res) => {
        console.log('onQueryDispatch');
        
        const proto = {
            retcode: 0,
            server_list: [{
                name: "NodeSR",
                display_name: "NodeSR",
                env_type: "2",
                title: "NodeSR",
                dispatch_url: "http://127.0.0.1:21000/query_gateway"
            }]
        };
        
        const encodedData = encodeResponse(GlobalDispatchData, proto);
        res.send(encodedData);
    });
    
    router.get('/query_gateway', (req, res) => {
        console.log('onQueryGateway');
        
        const proto = {
            retcode: 0,
            use_tcp: true,
            port: 23301,
            ip: "127.0.0.1",
            lua_version: "7327274",
            ifix_version: "0",
            lua_url: "https://autopatchos.starrails.com/lua/BetaLive/output_7327274_d12d75929650",
            asset_bundle_url: "https://autopatchos.starrails.com/asb/BetaLive/output_7327119_c52eec0f6a92",
            ex_resource_url: "https://autopatchos.starrails.com/design_data/BetaLive/output_7349339_419592cb2562",
            MCANJEHAEKO: true,
            PGMFEHFKLBG: true,
            NNPPEAAIHAK: true,
            LGPAAPCPBMD: true,
            GNFPFKJHIDJ: true,
            FKFKCDJNHFL: true,
            AOEKIKFKMGA: true
        };
        
        const encodedData = encodeResponse(GlobalDispatchData, proto);
        res.send(encodedData);
    });
}).catch(error => {
    console.error('Failed to load protobufs:', error);
});

module.exports = router;
