//Sidebar imports
import{
    UilEstate,
    UilClipboardAlt,
    UilXAdd,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal,
    // UilSignOutAlt,
} from "@iconscout/react-unicons";

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

//Sidebar Data

export const SidebarData =[
    {
        icon: UilEstate,
        heading: "Dashboard",
    },

    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },

    {
        icon: UilXAdd,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },

    {
        icon: UilChart,
        heading: "Analytics",
    },

    {
        icon: UilEstate,
        heading: "Dashboard",
    },
];

export const CardsData =[
    {
        title: "Sales",
        color:{
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31,40,50,20,109,100,80],
            },
        ],

    },

    {
        title: "Revenue",
        color:{
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [100,50,80,20,109,100,80],
            },
        ],

    },

    {
        title: "Expenses",
        color:{
            backGround: "linear-gradient(rgba(248,212,154)-146.42%,rgba(255,202,113)-46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D598",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [31,40,50,20,30,70,80],
            },
        ],

    },

    // {
    //     title: "Sales",
    //     color:{
    //         backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
    //         boxShadow: "0px 10px 20px 0px #e0c6f5",
    //     },
    //     barValue: 70,
    //     value: "25,970",
    //     png: UilUsdSquare,
    //     series: [
    //         {
    //             name: "Sales",
    //             data: [31,40,50,20,109,100,80],
    //         },
    //     ],

    // },
];


// exports.AnimateSharedLayout = ({ actions }) => {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /\.mjs$/,
//             include: /node_modules/,
//             type: 'javascript/auto',
//           },
//         ],
//       },
//     })
//   }



// Recent Update Card Data
export const UpdatesData = [
    {
        img: img1,
        name: "Prince",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "Pankaj",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: img3,
        name: "Prabhat",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
];