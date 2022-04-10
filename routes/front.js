const {Router} = require("express")

const router = Router()

// LandingPage
router.get('/', (req,res)=>{
    res.render("Dashboard")
})

module.exports = router