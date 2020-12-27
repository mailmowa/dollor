const express = require('express');
const router = express.Router();

const Admin = require('../../modals/Admin');
const AdInfo = require('../../modals/AdInfo');
const Withdraw = require('../../modals/WithdrawStatement');
const Users = require('../../modals/Users');
const Tickets = require('../../modals/CreateTickets');
const FundsharingStatement = require('../../modals/ShareFundStatement');
const Autopool = require('../../modals/Autopool');
const Autopool2 = require('../../modals/AutopoolTwo');
const Autopool3 = require('../../modals/AutopoolThree');
const Autopool4 = require('../../modals/AutopoolFour');
const PoolStatement  =  require('../../modals/poolStatement');
const short = require('short-uuid');
const DailyReport = require('../../modals/dailyReport');
const dailyReport = require('../../modals/dailyReport');
const DepositSatements = require('../../modals/DepositStatement');
//shareAutopoolLevelMoney();
//@rout get api/users/admin
// Add Admin
// @acess public
router.post('/jh', (req,res) => {

    const admin = new Admin({

        Pass: "@MakeiT@"

    })
    admin.save()
    .then(user => console.log(user))
    .catch(err => console.log(err));

});


//@rout get api/Admin/getTickets/UpdateMessage
// Add Ticket
// @acess public
router.get('/GetTickets', (req,res) => {


    Tickets.find()
    .sort({RequestedDate: 1})
    .then(Tickets => {
        console.log(Tickets);
        if(Tickets){
            res.json({status: 1, Tickets})
        }else{ res.json({status: 0})}
    }).catch(err => {
         console.log(err);
         res.json({status: 0})
    })

})

//@rout get api/Admin/UpdateMessage
// Add Ticket
// @acess public
router.post('/UpdateMessage', (req,res) => {

    console.log(req.body);

    Tickets.findOneAndUpdate({
        _id: req.body._id
    },{
        $push: { message : req.body.message }
    },{new: true})
    .sort({RequestedDate: 1})
    .then(Tickets => {
        console.log(Tickets);
        if(Tickets){
            res.json({status: 1, Tickets})
        }else{ res.json({status: 0})}
    })
    .catch(err => {
        console.log(err);
        res.json({status: 0})
    })

})

//@rout get api/Admin/getNews
// Add Admin
// @acess public
router.get('/getNews', (req,res) => {

    AdInfo.find()
    .select('news QRimage ')
    .then(news => {
        console.log(news);
        if(news){
            res.json({status: 1, news})
        }else{ res.json({status: 0})}
    })
    .catch(err => {
        console.log(err);
        res.json({status: 0})
    })
    
});

//@rout get api/Admin/UpdateNews
// Add Admin
// @acess public
router.post('/UpdateNews', (req,res) => {

    console.log(req.body.news);

    AdInfo.findOneAndUpdate({_id : '5fcf5a0bd487791f842d1199' },{
        news: req.body.news
    },{new: true})
    .select('news')
    .then(news => {
        console.log(news);
        if(news){
            res.json({status: 1, news})
        }else{ res.json({status: 0})}
    }).catch(err => {
        console.log(err);
        res.json({status: 0})
    })

});

//@rout get api/Admin/ImageUpload
// Add Admin
// @acess public
router.post('/ImageUpload', (req,res) => {

    console.log(req.body);

    const obj = {
        img : req.body.imagefile,
        btcAddress : req.body.text
    }

            AdInfo.findOneAndUpdate({_id : '5fcf5a0bd487791f842d1199' },{
                QRimage: obj
            },{new: true})
            .select('QRimage')
            .then(Img => {
                console.log(Img);
                if(Img){
                    res.json({status: 1, Img})
                }
                else
                { res.json({status: 0})}
            });

    });


//@rout get api/users/adinfo
// create info
// @acess public
router.post('/Adinfo', (req,res) => {

    console.log(req.body);

    const adinfo = new AdInfo({

        withdrawRequests:[],
        news:[],
        dashboardTable:[]

    })
    adinfo.save()
    .then(user => console.log(user))
    .catch(err => console.log(err));

});

//@rout get api/Admin/adinfo/withdraw
// get info withdraw
// @acess public
router.get('/Adinfo/withdraw', (req,res) => {

    console.log(req.body);
try{
                AdInfo.findOne({_id: '5fcf5a0bd487791f842d1199'})
                .select('withdrawRequests')
                .sort({date : 1})
                .then(request => {
                        if(request){
                            res.json({status: 1, request})
                        }else{
                            res.json({status: 0})
                        }
                })
                .catch(err =>
                {
                    console.log(err.message);
                    res.json({status: 0})
                })
    }
    catch(err)
    {
        console.log(err.message);
        res.json({status: 0})
    }
});

//@rout get api/Admin/DepositSatements
// get info withdraw
// @acess public
router.get('/DepositSatements', (req,res) => {

    console.log(req.body);

   DepositSatements.find()
   .sort({date : 1})
   .then(statements => {
        if(statements){
            res.json({status: 1, statements})
        }else{
            res.json({status: 0})
        }
   })

});

//@rout get api/Admin/getUserForPin
// get info withdraw
// @acess public
router.get('/getUserForPin/:id', (req,res) => {

    console.log(req.params.id);

    Users.findOne({ userId: req.params.id})
     .select('-password')
     .then(user => {
         if(user){
             res.json({status: 1, user})
         }else{
             res.json({status:0})
         }
     })



});


//@rout get api/Admin/sendPinToUser
// get info withdraw
// @acess public
router.post('/sendPinToUser', (req,res) => {
    console.log(req.body);

    try{
                        const pin = req.body.pin
                console.log("pin",pin);
                Users.findByIdAndUpdate({_id: req.body._id},{
                    $push: {
                        availablePins: pin
                    }
                    },{new:true}).then(user => {
                    console.log(user);
                    if(user){
                        res.json({status: 1, user})
                    }else{
                        res.json({status: 0})
                    }
                }).catch(err => {
                    console.log(err.message);
                    res.json({status: 0})
                })
    }
    catch(err)
    {
        console.log(err.message)
        res.json({status: 0})
    }

});

//@rout get api/Admin/getAllUserDatails
// get info withdraw
// @acess public
router.get('/getAllUserDetails',(req,res) => {

    Users.find().then(users => {
        if(users){
            res.json({status: 1,users});
        }else{
            res.json({status: 0});
        }
    })

})

//@rout get api/Admin/getTodayUserDetails/SendFundToUser/getDailyReportDetails
// get info daily
// @acess public
router.post('/getTodayUserDetails',(req,res) => {

    console.log(req.body);
    let current_datetime = new Date()
    let end_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + (current_datetime.getDate()+1)

try{

    const date = new Date()
    console.log(date.toLocaleString());
    Users.find(
        {
          $or:
         [
           {
            joiningDate:
            { $gte: req.body.startDate, $lte: req.body.endDate },
            Active: "true"
           },
           {
            joiningDate:
            { $gte: req.body.startDate, $lte: end_date },
            Active: "true"
           },
         ],
        },
      )
      .then(users => {
          console.log(users);
        if(users){
            res.json({status: 1,users});
        }else{
            res.json({status: 0});
        }
    }).catch(err => {
         console.log(err.message);
         res.json({status: 0});
    })
}
catch(err)
{
    console.log(err.message);
    res.json({status: 0});
}

})

//@rout get api/AdmingetDailyReportDetails
// get info daily
// @acess public
router.post('/getDailyReportDetails',(req,res) => {


  let current_datetime = new Date(req.body.startDate)
  let end_date_1 = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + (current_datetime.getDate() + 1)


    console.log(req.body);
    // DailyReport.find(
    //     {
    //       $or:
    //      [
    //        {
    //         dateId:
    //         { $gte: new Date(req.body.startDate), $lte: new Date(req.body.endDate) },
    //        },
    //        {
    //         dateId:
    //         { $gte: new Date(req.body.startDate), $lte: new Date(req.body.endDate).setDate(new Date(req.body.endDate).getDate() + 1) },
    //        },
    //      ],
    //     },
    //   )
    //   .then(users => {
    //       console.log(users);
    //     if(users){
    //         res.json({status: 1,users});
    //     }else{
    //         res.json({status: 0});
    //     }
    // })

    DailyReport.find(
        {
         
            dateId:
            { $gte: req.body.startDate, $lte: req.body.endDate },
        }
      )
      .then(users => {
          console.log(users);
        if(users){
            res.json({status: 1,users});
        }else{
            res.json({status: 0});
        }
    })

})

//@rout get api/Admin/SendFundToUser
// get info daily
// @acess public
router.post('/SendFundToUser',(req,res) => {

    console.log(req.body);
    let current_datetime = new Date()
  let end_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()

try{
            Users.findOneAndUpdate({
                userId: req.body.userid
            },{
                $inc: { fundSharingIncome : parseFloat(req.body.fundamount) }
            },{new: true})
            .then(users => {
                if(users){

                        const ShareFundStmnt = new FundsharingStatement({

                            userId: req.body.userid,
                            mailId:users.mailId,
                            Date: end_date,
                            message: 'Hurray ! You have been Rewarded.',
                            Amount: req.body.fundamount,

                        })

                        ShareFundStmnt.save().catch(err => {console.log(err.message);  res.json({status: 0});})

                        const date = new Date();
                        const today = date.toLocaleDateString();
                        console.log(today);
                        DailyReport.findOneAndUpdate({dateId : today},{

                            $inc: { FundSharing : parseFloat(req.body.fundamount) }

                        })
                        .then(document => {
                            if(!document){
                                    const report =  new DailyReport({

                                    dateId: today,
                                    LevelPinsIncome:  0,
                                    PoolOnePinsIncome:  0,
                                    PoolTwoPinsIncome: 0,
                                    PoolThreePinsIncome: 0,
                                    PoolFourPinsIncome:  0,
                                    PoolFivePinsIncome:  0,
                                    PoolSixPinsIncome:  0,
                                    PoolSevenPinsIncome: 0,
                                    PoolEightPinsIncome:  0,
                                    PoolNinePinsIncome:  0,
                                    PoolTenPinsIncome:  0,
                                    withdrawpercentage:0,
                                    funtToPinPercent : 0,
                                    //Spend
                                    LevelOutSpend: 0,
                                    FundSharing:  parseFloat(req.body.fundamount),
                                    PoolOutgo: 0,
                                    withdraw: 0,
                                    //Others
                                    Balance : 0,
                                    BalanceReport: [],
                                    Nothing: 0,

                                    })

                                    report.save()
                                    .then(re => {
                                        console.log(re);
                                        res.json({status: 1,users});
                                    }).catch(err => {
                                        console.log(err);
                                        res.json({status: 0});
                                    })
                            }else{
                                res.json({status: 1,users});
                            }
                        })
                        .catch(err => {
                            res.json({status: 0});
                        })



                }else{
                    res.json({status: 0});
                }
            })
            .catch(err => {
                    console.log(err.message);
                    res.json({status: 0});
            })

}
catch(err)
{
     console.log(err.message);
     res.json({status: 0});
}



})

//@rout get api/Admin/SendDepositAmountToUser
// get info daily
// @acess public
router.post('/SendDepositAmountToUser',(req,res) => {

    console.log(req.body);

    Users.findOneAndUpdate({
        userId: req.body.userid
    },{
        $inc: { fundSharingIncome : parseFloat(req.body.amount) }
    },{new: true})
      .then(users => {
        if(users){

            DepositSatements.findOneAndUpdate({ _id : req.body._id },{
                status: true ,
                success : "Done"
            },{new : true})
            .then(user => {
                if(user){
                    console.log("user:",user);
                    res.json({status: 1,msg: "successful"})
                }else
                {
                    console.log("else:", );
                    res.json({status: 0,msg: "not done"})
                }
            })


        }else{
            res.json({status: 0 ,msg: "no User Found"});
        }
    })





})

//@rout get api/Admin/AddBalance
// get info daily
// @acess public
router.post('/AddBalance',(req,res) => {

    console.log(req.body);

    const date = new Date();
    const today = date.toLocaleDateString();
    const obj = {
        Admin : req.body.admin,
        Amount : req.body.addamount
    }

            AdInfo.findByIdAndUpdate(
                {
                    _id : "5fcf5a0bd487791f842d1199"
                } ,
                {
                   $inc : { Balance : parseFloat(req.body.addamount) },
                },
                {
                    new: true
                }
                )
                .then(users => {

                    if(users){


                        DailyReport.findOneAndUpdate(
                            {
                                dateId : today
                            },
                            {
                                $push :
                                {
                                    BalanceReport  : obj
                                }
                            },
                            {
                                new : true
                            }
                        ).then(users => {

                            if(users)
                            {
                                res.json({status: 1,users , msg: "SucessFull"});
                            }
                            else{

                                const report =  new DailyReport({

                                    dateId: today,
                                    LevelPinsIncome:  0,
                                    PoolOnePinsIncome:  0,
                                    PoolTwoPinsIncome: 0,
                                    PoolThreePinsIncome: 0,
                                    PoolFourPinsIncome:  0,
                                    PoolFivePinsIncome:  0,
                                    PoolSixPinsIncome:  0,
                                    PoolSevenPinsIncome: 0,
                                    PoolEightPinsIncome:  0,
                                    PoolNinePinsIncome:  0,
                                    PoolTenPinsIncome:  0,
                                    withdrawpercentage: 0,
                                    funtToPinPercent : 0,
                                    //Spend
                                    LevelOutSpend: 0,
                                    FundSharing:  0,
                                    PoolOutgo: 0,
                                    withdraw: 0,
                                    //Others
                                    Balance : 0,
                                    BalanceReport: [obj],
                                    Nothing: 0,

                                   })

                                 report.save()
                                 .then(users => {
                                    res.json({status: 1, users ,msg: "SucessFull"});
                                 }).catch(err => {
                                    res.json({status: 0, users ,msg: "Daily report not updated"});
                                })
                            }


                        })
                    }
                    else{
                        res.json({status: 0,users , msg: "Update not done"});
                    }


                }).catch(err => {
                    console.log(err);
                    res.json({status: 0,users , msg: "Update not done"});
                })

})


//@rout get api/Admin/AddBalance
// get info daily
// @acess public
router.get('/Balance',(req,res) => {

    console.log(req.body);

   AdInfo.find()
   .select('Balance')
   .then(Balance => {
       if(Balance){
           res.json({status : 1 , Balance} )
       }
       else{
           res.json({status: 0})
       }
   }).catch(err => {
       console.log(err);
       res.json({status: 0})
   })


})


//@rout get api/statement/withdrawDone
// Update withdrawDone statement
// @acess public
router.post('/Adinfo/withdrawDone', (req,res) => {

    console.log(req.body);

    try{
                    let current_datetime = new Date()
                    let today = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()

                const totalPer =  parseFloat(parseFloat(req.body.Amount)-parseFloat(req.body.Total))

                Withdraw.findByIdAndUpdate({_id: req.body.statement_id},{
                    Status: "Done",
                })
                .then(() => {

                    AdInfo.findOneAndUpdate(
                        {_id: '5fcf5a0bd487791f842d1199' },
                        { $pull: { withdrawRequests: { Statement_ID: req.body.statement_id } } },
                        {new: true}
                        ).then((staetment) => {
                        console.log(staetment);

                        if(staetment){

                            console.log("inside");

                                    DailyReport.findOneAndUpdate({ dateId : today},{
 
                                        $inc : {
                                            withdrawpercentage : parseFloat(totalPer),
                                            withdraw : parseFloat(req.body.Total)
                                        }

                                    },{new : true})
                                    .then(document => {
                                        if(!document){
                                            const report =  new DailyReport({

                                            dateId: today,
                                            LevelPinsIncome:  0,
                                            PoolOnePinsIncome:  0,
                                            PoolTwoPinsIncome: 0,
                                            PoolThreePinsIncome: 0,
                                            PoolFourPinsIncome:  0,
                                            PoolFivePinsIncome:  0,
                                            PoolSixPinsIncome:  0,
                                            PoolSevenPinsIncome: 0,
                                            PoolEightPinsIncome:  0,
                                            PoolNinePinsIncome:  0,
                                            PoolTenPinsIncome:  0,
                                            withdrawpercentage: parseFloat(totalPer),
                                            funtToPinPercent : 0,
                                            //Spend
                                            LevelOutSpend: 0,
                                            FundSharing:  0,
                                            PoolOutgo: 0,
                                            withdraw: parseFloat(req.body.Total),
                                            //Others
                                            Balance : 0,
                                            BalanceReport: [],
                                            Nothing: 0,

                                            })

                                                report.save()
                                                .then(res => {
                                                    console.log(res);
                                                    res.json({status:1,staetment})
                                                }).catch(err => {
                                                    console.log(err.message);
                                                    res.json({status:0,staetment})
                                                })
                                        }
                                        else{
                                            res.json({status:1,staetment})

                                        }
                                    })
                                    .catch(err => {
                                        console.log(err.message);
                                        res.json({status:0,staetment})
                                    })
                        }
                        else
                        {
                                     res.json({status:0,staetment})
                        }


                    }).catch(err => {
                        console.log(err.message);
                        res.json({status:0,staetment})

                    })

                })
                .catch(err =>
                {
                        console.log(err.message);
                        res.json({status:0,staetment})
                })

    }
    catch(err)
    {
           console.log(err.message);
           res.json({status:0,staetment})
    }

});

//@rout get api/Admin/DepositDone
// Admin auth
// @acess public
router.post('/DepositDone', (req,res) => {

    console.log(req.body);

    DepositSatements.findOneAndUpdate({ _id : req.body.userId },{
        status: true ,
        success : "Done"
    },{new : true})
    .then(user => {
        if(user){
            console.log("user:",user);
            res.json({status: 1})
        }else
        {
            console.log("else:",user);
            res.json({status: 0})
        }
    }).catch(err => {
        console.log(err);
        res.json({status: 0})
    })

});

//@rout get api/users
// Admin auth
// @acess public
router.post('/Auth', (req,res) => {

    console.log(req.body);

    Admin.findOne({_id: req.body._id,Pass:req.body.Pass})
    .then(user => {
        if(user){
            console.log("user:",user);
            res.json({status: 1})
        }else
        {
            console.log("else:",user);
            res.json({status: 0})
        }
    }).catch(err => {
        console.log(err);
        res.json({status: 0})
    })

});


//===========================================================================================
//                                 AUTO-POOL
//=============================================================================================

//@rout get api/admin/getPool-1-details
// pool one details
// @acess public
router.get('/getPoolOneDetails', (req,res) => {

    console.log(req.body);
    Autopool.find({
        poolOneCompleted: false,
        levelOne: 0
    })
    .sort({date: 1})
    .select('userId date levelOne members')
    .then(users1 => {
        if(users1){
            res.json({status: 1, users1})
        }else{
            res.json({status: 0})
        }
    })

});

//@rout get api/admin/getpool - One - Available - details
// Admin auth
// @acess public
router.get('/getPoolOneAvailableDetails', (req,res) => {

    console.log(req.body);
    Autopool.find({
        poolOneCompleted: false,
        available: true
    })
    .sort({date: 1})
    .select('userId date available levelOne')
    .then(users2 => {
        if(users2){
            res.json({status: 1, users2})
        }else{
            res.json({status: 0})
        }
    })

});

//@rout get api/admin/getpool - One - deleteuser - details
// Admin auth
// @acess public
router.get('/getPoolOneCompletedDetails', (req,res) => {

    console.log(req.body);
    Autopool.find({
        poolOneCompleted: false,
        levelOne: 4
    })
    .then(users => {
        if(users){
            res.json({status: 1, users})
        }else{
            res.json({status: 0})
        }
    })

});

//===================================================================================================
//=======================================****** Autopool 2 ******====================================

//@rout get api/admin/getPool-2-details
// pool one details
// @acess public
router.get('/getPoolTwoDetails', (req,res) => {

    console.log(req.body);
    Autopool2.find({
        poolTwoCompleted: false,
        levelOne: 0
    })
    .sort({date: 1})
    .select('userId date levelOne members')
    .then(users1 => {
        if(users1){
            res.json({status: 1, users1})
        }else{
            res.json({status: 0})
        }
    })

});

//@rout get api/admin/getpool - two - Available - details
// Admin auth
// @acess public
router.get('/getPoolTwoAvailableDetails', (req,res) => {

    console.log(req.body);
    Autopool2.find({
        poolTwoCompleted: false,
        available: true
    })
    .sort({date: 1})
    .select('userId date available levelOne')
    .then(users2 => {
        if(users2){
            res.json({status: 1, users2})
        }else{
            res.json({status: 0})
        }
    })

});

//@rout get api/admin/getpool - Two - deleteuser - details
// Admin auth
// @acess public
router.get('/getPoolTwoCompletedDetails', (req,res) => {

    console.log(req.body);
    Autopool2.find({
        poolTwoCompleted: false,
        levelOne: 16
    })
    .then(users => {
        if(users){
            res.json({status: 1, users})
        }else{
            res.json({status: 0})
        }
    })

});


//test router to create daily report

//  router.post('/CreateDailyRepot',(req,res) => {

//     const date = new Date();
//     const today= date.toLocaleDateString();

//      const report =  new DailyReport({

//         dateId: today,
//         LevelPinsIncome:  0,
//         PoolOnePinsIncome:  0,
//         PoolTwoPinsIncome: 0,
//         PoolThreePinsIncome: 0,
//         PoolFourPinsIncome:  0,
//         PoolFivePinsIncome:  0,
//         PoolSixPinsIncome:  0,
//         PoolSevenPinsIncome: 0,
//         PoolEightPinsIncome:  0,
//         PoolNinePinsIncome:  0,
//         PoolTenPinsIncome:  0,
//         withdrawpercentage: 0,
//         funtToPinPercent : 0,
//         //Spend
//         LevelOutSpend: 0,
//         FundSharing:  0,
//         PoolOutgo: 0,
//         withdraw: 0,
//         //Others
//         Balance : 0,
//         BalanceReport: [],
//         Nothing: 0,

//     })

//      report.save()
//      .then(res => {
//          console.log(res);
//      }).catch(err => {
//         console.log(err);
//     })

//  })


//===================================================================================================
//=======================================****** Autopool 3 ******====================================

//@rout get api/admin/getPool-3-details
// pool one details
// @acess public
router.get('/getPoolThreeDetails', (req,res) => {

    console.log(req.body);
    Autopool3.find({
        poolThreeCompleted: false,
        levelOne: 0
    })
    .sort({date: 1})
    .select('userId date levelOne members')
    .then(users1 => {
        if(users1){
            res.json({status: 1, users1})
        }else{
            res.json({status: 0})
        }
    })

});

//@rout get api/admin/getpool - three - Available - details
// Admin auth
// @acess public
router.get('/getPoolThreeAvailableDetails', (req,res) => {

    console.log(req.body);
    Autopool3.find({
        poolThreeCompleted: false,
        available: true
    })
    .sort({date: 1})
    .select('userId date available levelOne')
    .then(users2 => {
        if(users2){
            res.json({status: 1, users2})
        }else{
            res.json({status: 0})
        }
    })

});

//@rout get api/admin/getpool - Three - deleteuser - details
// Admin auth
// @acess public
router.get('/getPoolThreeCompletedDetails', (req,res) => {

    console.log(req.body);
    Autopool3.find({
        poolThreeCompleted: false,
        levelOne: 64
    })
    .then(users => {
        if(users){
            res.json({status: 1, users})
        }else{
            res.json({status: 0})
        }
    })

});



//===================================================================================================
//=======================================****** Autopool 4 ******====================================

//@rout get api/admin/getPool-4-details
// pool one details
// @acess public
router.get('/getPoolFourDetails', (req,res) => {

    console.log(req.body);
    Autopool4.find({
        poolFourCompleted: false,
        levelOne: 0
    })
    .sort({date: 1})
    .select('userId date levelOne members')
    .then(users1 => {
        if(users1){
            res.json({status: 1, users1})
        }else{
            res.json({status: 0})
        }
    })

});

//@rout get api/admin/getpool - Four - Available - details
// Admin auth
// @acess public
router.get('/getPoolFourAvailableDetails', (req,res) => {

    console.log(req.body);
    Autopool4.find({
        poolFourCompleted: false,
        available: true
    })
    .sort({date: 1})
    .select('userId date available levelOne')
    .then(users2 => {
        if(users2){
            res.json({status: 1, users2})
        }else{
            res.json({status: 0})
        }
    })

});

//@rout get api/admin/getpool - Four - deleteuser - details
// Admin auth
// @acess public
router.get('/getPoolFourCompletedDetails', (req,res) => {

    console.log(req.body);
    Autopool4.find({
        poolFourCompleted: false,
        levelOne: 4
    })
    .then(users => {
        if(users){
            res.json({status: 1, users})
        }else{
            res.json({status: 0})
        }
    })

});






//=======================================================================================
//=========================   **** Autopool POSt *** ====================================
//(((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))))))


//@rout get api/admin/Initialize - Autopool - One
// Admin auth
// @acess public
router.post('/InitialisedAutopoolOne', (req,res) => {

   console.log("379 ::::::::::::::", req.body);


Autopool.findByIdAndUpdate({_id : req.body._id},{

       $inc: {levelOne : 4,levelOneIncome: 20},
       members: req.body.useridsArray

   },{new: true})
   .then(userone => {
             console.log(userone);
            //update members refered ids
        if(userone){

            Autopool.updateMany(
                {
                   userId:
                        {
                            $in: req.body.useridsArray
                        }
                },
                {
                   referedBy: userone.userId,
                   available: false
                },{new: true})
                 .then( (threeuser) =>
                     {
    
                            if(threeuser)
                            {
                                //shareAutopoolLevelMoney();
                                res.json({ status : 1 ,msg : `${req.body.userid} : Successful`})
                                
                            }
                            else
                            {
                                console.log("level three");
                                res.json({ status : 0 ,msg : `${req.body.userid} : Level three referal Id Not Found` })
                            }

                     })

         }
         else{
             console.log("No referal Id Found");
            res.json({ status: 0 , msg :  `${req.body.userid} : No referal Id Found ! Something went wrong`})
         }



    })

});

//@rout get api/admin/delete - Autopool - One
// Admin auth
// @acess public
router.post('/performDeleteOne', (req,res) => {

console.log("qwwe",req.body);
    const poolstatement = new PoolStatement({

        userId: req.body.userid,
        poolName: "Autopool 1",
        Amountadded: 10,
        deducted: 10,
        total: 20

    })



    poolstatement.save()
    .then(() => {

        Users.findOneAndUpdate({userId: req.body.userid},{

            poolOne: false,
            poolTwo: true,
            $inc : {
                autoPoolIncome: 10,
                Totalearnings: 10
            }

        },{
            new: true
        })
        .then(user => {
            if(user){

                Autopool.deleteOne({
                    userId: user.userId
                })
                .then(resp => {

                    const autopool = new Autopool2({

                        userId: req.body.userid,
                        poolTwoCompleted: false,
                        members: [],
                        referedBy: " ",
                        levelOne: 0,
                        levelOneIncome: 0,
                        available: true
                    })
        

                    autopool.save().catch(er =>{
                    console.log(er);
                    })

                    let current_datetime = new Date()
                    let today = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()


                    DailyReport.findOneAndUpdate({ dateId : today},{
                        $inc : {
                            PoolOutgo : parseFloat(10),
                            PoolOnePinsIncome: parseFloat(10)
                        }
                    }).then(document => {
                        if(!document)
                        {
                            const report =  new DailyReport({

                                dateId: today,
                                LevelPinsIncome:  0,
                                PoolOnePinsIncome:  parseFloat(10),
                                PoolTwoPinsIncome: 0,
                                PoolThreePinsIncome: 0,
                                PoolFourPinsIncome:  0,
                                PoolFivePinsIncome:  0,
                                PoolSixPinsIncome:  0,
                                PoolSevenPinsIncome: 0,
                                PoolEightPinsIncome:  0,
                                PoolNinePinsIncome:  0,
                                PoolTenPinsIncome:  0,
                                withdrawpercentage: 0,
                                funtToPinPercent : 0,
                                //Spend
                                LevelOutSpend: 0,
                                FundSharing:  0,
                                PoolOutgo: parseFloat(10),
                                withdraw: 0,
                                //Others
                                Balance : 0,
                                BalanceReport: [],
                                Nothing: 0,

                               })

                             report.save()
                             .then(res => {
                                 console.log(res);
                             }).catch(err => {
                                console.log(err);
                            })
                        }
                    }).catch(er => {
                        console.log(er);
                    })

                   

                    res.json({status:1})

                }).catch(er =>{
                    console.log(er);
                })

            }else{
                res.json({status:0})
            }
        })
        .catch(er => {
            console.log(er);
        })

    })
    .catch(er => {
        console.log(er);
    })



})

//===================================================================================================
//=======================================****** Autopool 2 ******====================================


//@rout get api/admin/Initialize - Autopool - Two
// Admin auth
// @acess public
router.post('/InitialisedAutopoolTwo', (req,res) => {

    console.log("379 ::::::::::::::", req.body);

 Autopool2.findByIdAndUpdate({_id : req.body._id},{

        $inc: {levelOne : 16,levelOneIncome: 160},
        members: req.body.useridsArray

    },{new: true})
    .then(userone => {
              console.log(userone);
             //update members refered ids
         if(userone){

             Autopool2.updateMany(
                 {
                    userId:
                         {
                             $in: req.body.useridsArray
                         }
                 },
                 {
                    referedBy: userone.userId,
                    available: false
                 },{new: true})
                  .then( (threeuser) =>
                      {
                                        
                                                      
                                if(threeuser)
                                {
                                 //   shareAutopoolTwoLevelMoney();
                                    res.json({ status : 1 ,msg : `${req.body.userid} : Successful`})
                                }
                                else
                                {
                                    console.log("level three");
                                    res.json({ status : 0 ,msg : `${req.body.userid} : Level three referal Id Not Found` })
                                }

                                       
                      })

          }
          else{
              console.log("No referal Id Found");
             res.json({ status: 0 , msg : `${req.body.userid} : No referal Id Found ! Something went wrong`})
          }

     })

 });

 //@rout get api/admin/delete - Autopool - Two
 // Admin auth
 // @acess public
 router.post('/performDeleteTwo', (req,res) => {

    console.log("qwwe",req.body);
    const poolstatement = new PoolStatement({

        userId: req.body.userid,
        poolName: "Autopool 2",
        Amountadded: 60,
        deducted: 100,
        total: 160

    })

    poolstatement.save()
    .then(() => {
            console.log("created successfully");
        Users.findOneAndUpdate({userId: req.body.userid},{

            poolTwo: false,
            poolThree:true,
            $inc : {
                autoPoolIncome: parseFloat(60),
                Totalearnings : parseFloat(60)
            }

        },{
            new: true
        })
        .then(user => {
            if(user){

                Autopool2.deleteOne({
                    userId: user.userId
                })
                .then(resp => {

                    let current_datetime = new Date()
                    let today = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()


                    DailyReport.findOneAndUpdate({ dateId : today},{
                        $inc : {
                            PoolOutgo : parseFloat(60),
                            PoolTwoPinsIncome: parseFloat(100)
                        }
                    }).then(document => {
                        if(!document)
                        {
                            const report =  new DailyReport({

                                dateId: today,
                                LevelPinsIncome:  0,
                                PoolOnePinsIncome:  0,
                                PoolTwoPinsIncome: parseFloat(100),
                                PoolThreePinsIncome: 0,
                                PoolFourPinsIncome:  0,
                                PoolFivePinsIncome:  0,
                                PoolSixPinsIncome:  0,
                                PoolSevenPinsIncome: 0,
                                PoolEightPinsIncome:  0,
                                PoolNinePinsIncome:  0,
                                PoolTenPinsIncome:  0,
                                withdrawpercentage: 0,
                                funtToPinPercent : 0,
                                //Spend
                                LevelOutSpend: 0,
                                FundSharing:  0,
                                PoolOutgo: parseFloat(60),
                                withdraw: 0,
                                //Others
                                Balance : 0,
                                BalanceReport: [],
                                Nothing: 0,

                               })

                             report.save()
                             .then(res => {
                                 console.log(res);
                             }).catch(err => {
                                console.log(err);
                            })
                        }
                    })

                    const autopool = new Autopool3({
                        userId: req.body.userid,
                        poolThreeCompleted: false,
                        members: [],
                        referedBy: " ",
                        levelOne: 0,
                        levelOneIncome: 0,
                        available: true
                    })

                    autopool.save().catch(err => {
                        console.log(err);
                    })

                })

            }
        })

    })


 })


//===================================================================================================
//=======================================****** Autopool 3 ******====================================


//@rout get api/admin/Initialize - Autopool - Three
// Admin auth
// @acess public
router.post('/InitialisedAutopoolThree', (req,res) => {

    console.log("379 ::::::::::::::", req.body);


 Autopool3.findByIdAndUpdate({_id : req.body._id},{

        $inc: {levelOne : 64,levelOneIncome: 6400},
        members: req.body.useridsArray

    },{new: true})
    .then(userone => {
              console.log(userone);
             //update members refered ids
         if(userone){

             Autopool3.updateMany(
                 {
                    userId:
                         {
                             $in: req.body.useridsArray
                         }
                 },
                 {
                    referedBy: userone.userId,
                    available: false
                 },{new: true})
                  .then( (threeuser) =>
                      {

                            if(threeuser)
                            {
                               // shareAutopoolThreeLevelMoney();
                                res.json({ status : 1 ,msg : `${req.body.userid} : Successful`})
                            }
                            else
                            {
                                console.log("level three");
                                res.json({ status : 0 ,msg : `${req.body.userid} : Level three referal Id Not Found` })
                            }
                

                                       
                      })

          }
          else{
              console.log("No referal Id Found");
             res.json({ status: 0 , msg : `${req.body.userid} : No referal Id Found ! Something went wrong `  })
          }

     })

 });

 //@rout get api/admin/delete - Autopool - Three
 // Admin auth
 // @acess public
 router.post('/performDeleteThree', (req,res) => {

    console.log("qwwe",req.body);
    const poolstatement = new PoolStatement({

        userId: req.body.userid,
        poolName: "Autopool 3",
        Amountadded: 6400,
        deducted: 0,
        total: 6400

    })

    poolstatement.save()
    .then(() => {

        Users.findOneAndUpdate({userId: req.body.userid},{

            poolThree: false,
            $inc : {
                autoPoolIncome: parseFloat(6400),
                Totalearnings: parseFloat(6400)
            }

        },{
            new: true
        })
        .then(user => {
            if(user){

                Autopool3.deleteOne({
                    userId: user.userId
                })
               .then(resp => {

                    let current_datetime = new Date()
                    let today = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()
 

                DailyReport.findOneAndUpdate({ dateId : today},{
                    $inc : {
                        PoolOutgo : parseFloat(6400),
                    }
                }).then(document => {
                    if(!document)
                    {
                        const report =  new DailyReport({

                            dateId: today,
                            LevelPinsIncome:  0,
                            PoolOnePinsIncome:  0,
                            PoolTwoPinsIncome: 0,
                            PoolThreePinsIncome: 0,
                            PoolFourPinsIncome:  0,
                            PoolFivePinsIncome:  0,
                            PoolSixPinsIncome:  0,
                            PoolSevenPinsIncome: 0,
                            PoolEightPinsIncome:  0,
                            PoolNinePinsIncome:  0,
                            PoolTenPinsIncome:  0,
                            withdrawpercentage: 0,
                            funtToPinPercent : 0,
                            //Spend
                            LevelOutSpend: 0,
                            FundSharing:  0,
                            PoolOutgo: parseFloat(6400),
                            withdraw: 0,
                            //Others
                            Balance : 0,
                            BalanceReport: [],
                            Nothing: 0,

                           })

                         report.save()
                         .then(res => {
                             console.log(res);
                         }).catch(err => {
                            console.log(err);
                        })
                    }
                })

                // const autopool = new Autopool4({

                //     userId: req.body.userid,
                //     poolFourCompleted: false,
                //     members: [],
                //     referedBy: " ",
                //     levelOne: 0,
                //     levelOneIncome: 0,
                //     available: true
                // })

                // autopool.save()

            })

            }
        })

    })


 })


//===================================================================================================
//=======================================****** Autopool 4 ******====================================


//@rout get api/admin/Initialize - Autopool - Four
// Admin auth
// @acess public
router.post('/InitialisedAutopoolFour', (req,res) => {

    console.log("379 ::::::::::::::", req.body);


 Autopool4.findByIdAndUpdate({_id : req.body._id},{

        $inc: {levelOne : 4,levelOneIncome: 76800},
        members: req.body.useridsArray

    },{new: true})
    .then(userone => {
              console.log(userone);
             //update members refered ids
         if(userone){

             Autopool4.updateMany(
                 {
                    userId:
                         {
                             $in: req.body.useridsArray
                         }
                 },
                 {
                    referedBy: userone.userId,
                    available: false
                 },{new: true})
                  .then( () =>
                      {
                            if(threeuser)
                            {
                               // shareAutopoolFourLevelMoney();
                                res.json({ status : 1 ,msg : `${req.body.userid} : Successful`})
                            }
                            else
                            {
                                console.log("level three");
                                res.json({ status : 0 ,msg : `${req.body.userid} : Level three referal Id Not Found` })
                            }
                      })

          }
          else{
              console.log("No referal Id Found");
             res.json({ status: 0 , msg : `${req.body.userid} : No referal Id Found ! Something went wrong`})
          }

     })

 });

 //@rout get api/admin/delete - Autopool - Four
 // Admin auth
 // @acess public
 router.post('/performDeleteFour', (req,res) => {

    console.log("qwwe",req.body);
    const poolstatement = new PoolStatement({

        userId: req.body.userid,
        poolName: "Autopool 4",
        Amountadded: 76800,
        pinsadded: 0,
        total: 76800

    })

    poolstatement.save()
    .then(() => {

        Users.findOneAndUpdate({userId: req.body.userid},{

            poolFour: true,
            $inc : {
                autoPoolIncome: parseFloat(76800)
            }

        },{
            new: true
        })
        .then(user => {
            if(user){

                Autopool4.deleteOne({
                    userId: user.userId
                })
                .then(resp => {

                    const date = new Date();
                    const today = date.toLocaleDateString();

                    DailyReport.findOneAndUpdate({ dateId : today},{
                        $inc : {
                            PoolOutgo : parseFloat(76800)
                        }
                    }).then(document => {
                        if(!document)
                        {
                            const report =  new DailyReport({

                                dateId: today,
                                LevelPinsIncome:  0,
                                PoolOnePinsIncome:  0,
                                PoolTwoPinsIncome: 0,
                                PoolThreePinsIncome: 0,
                                PoolFourPinsIncome:  0,
                                PoolFivePinsIncome:  0,
                                PoolSixPinsIncome:  0,
                                PoolSevenPinsIncome: 0,
                                PoolEightPinsIncome:  0,
                                PoolNinePinsIncome:  0,
                                PoolTenPinsIncome:  0,
                                withdrawpercentage: 0,
                                funtToPinPercent : 0,
                                //Spend
                                LevelOutSpend: 0,
                                FundSharing:  0,
                                PoolOutgo: parseFloat(76800),
                                withdraw: 0,
                                //Others
                                Balance : 0,
                                BalanceReport: [],
                                Nothing: 0,

                               })

                             report.save()
                             .then(res => {
                                 console.log(res);
                             }).catch(err => {
                                console.log(err);
                            })
                        }
                    })

                })

            }
        })

    })


 })






module.exports = router;