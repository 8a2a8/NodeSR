const express = require('express');
const router = express.Router();

router.post('/account/risky/api/check', (req, res) => {
    console.log('onRiskyApiCheck');
    
    res.json({
        retcode: 0,
        message: "OK",
        data: { id: "" }
    });
});

router.post('/:product_name/mdk/shield/api/login', (req, res) => {
    console.log('onShieldLogin');
    
    res.json({
        retcode: 0,
        message: "OK",
        data: {
            account: {
                area_code: "**",
                email: "reinfrcd@reinfrcd.rein",
                country: "ID",
                is_email_verify: "1",
                token: "node",
                uid: "1"
            }
        }
    });
});

router.post('/:product_name/combo/granter/login/v2/login', (req, res) => {
    console.log('onComboTokenReq');
    
    res.json({
        retcode: 0,
        message: "OK",
        data: {
            account_type: 1,
            open_id: "1",
            combo_id: "1",
            combo_token: "node",
            heartbeat: false,
            data: "{\"guest\": false}"
        }
    });
});

module.exports = router;
