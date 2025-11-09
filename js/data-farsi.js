// Data.js - Sample Data for Persian E-commerce Store

const productsData = [
    {
        id: 1,
        name: "بشقاب سرامیکی اندلسی",
        description: "بشقاب تزیینی دستساز با طرح های سنتی اندلسی",
        category: "سرامیک",
        price: 35.00,
        stock: 15,
        imageUrl: "images/ceramic_plate.png",
        status: "فعال"
    },
    {
        id: 2,
        name: "مانتیلا درخشان",
        description: "مانتیلا ظریف با گلدوزی های سنتی شکوفه",
        category: "بافت",
        price: 120.00,
        stock: 8,
        imageUrl: "images/manton_madrid.png",
        status: "فعال"
    },
    {
        id: 3,
        name: "کاشی تزیینی",
        description: "کاشی دستنویس با طرح های هندسی",
        category: "تزیینی",
        price: 25.00,
        stock: 30,
        imageUrl: "images/azulejo_decorativo.png",
        status: "فعال"
    },
    {
        id: 4,
        name: "گردنبند تاریخی",
        description: "گردنبند طلایی با الهام از طرح های اسپانیایی",
        category: "جواهرات",
        price: 85.00,
        stock: 5,
        imageUrl: "images/products/necklace.jpg",
        status: "فعال"
    },
    {
        id: 5,
        name: "شمع معطر",
        description: "شمع معطر با بوی ترافل و توت",
        category: "دیگر",
        price: 18.00,
        stock: 50,
        imageUrl: "images/products/candle.jpg",
        status: "فعال"
    },
    {
        id: 6,
        name: "آینه تزیینی",
        description: "آینه با قاب چوبی و طرح های سنتی",
        category: "تزیینی",
        price: 45.00,
        stock: 12,
        imageUrl: "images/products/mirror.jpg",
        status: "فعال"
    }
];

const customersData = [
    {
        id: 1,
        name: "مریم گارسیا لوپز",
        email: "maryam.garcia@email.com",
        phone: "+98 912 345 6789",
        address: "خیابان کریم خان، تهران",
        registrationDate: "1403-08-10",
        totalOrders: 5,
        totalSpent: 450.00
    },
    {
        id: 2,
        name: "علی مارتینز رویز",
        email: "ali.martinez@email.com",
        phone: "+98 923 456 7890",
        address: "خیابان ولیعصر، تهران",
        registrationDate: "1403-07-25",
        totalOrders: 3,
        totalSpent: 320.00
    },
    {
        id: 3,
        name: "فاطمه حسینی",
        email: "fateme.hosseini@email.com",
        phone: "+98 934 567 8901",
        address: "پلاک کاشان، اصفهان",
        registrationDate: "1403-09-15",
        totalOrders: 7,
        totalSpent: 620.00
    }
];

const ordersData = [
    {
        id: 1,
        orderId: "ORD-1403-0001",
        customerId: 1,
        customerName: "مریم گارسیا لوپز",
        customerEmail: "maryam.garcia@email.com",
        customerPhone: "+98 912 345 6789",
        customerAddress: "خیابان کریم خان، تهران",
        items: [
            {
                productId: 1,
                productName: "بشقاب سرامیکی اندلسی",
                quantity: 2,
                price: 35.00
            }
        ],
        subtotal: 70.00,
        shipping: 5.00,
        tax: 7.00,
        total: 82.00,
        paymentStatus: "پرداخت شده",
        paymentMethod: "کارت اعتباری",
        orderStatus: "تحویل داده شده",
        orderDate: "1403-10-05",
        notes: ""
    },
    {
        id: 2,
        orderId: "ORD-1403-0002",
        customerId: 2,
        customerName: "علی مارتینز رویز",
        customerEmail: "ali.martinez@email.com",
        customerPhone: "+98 923 456 7890",
        customerAddress: "خیابان ولیعصر، تهران",
        items: [
            {
                productId: 2,
                productName: "مانتیلا درخشان",
                quantity: 1,
                price: 120.00
            }
        ],
        subtotal: 120.00,
        shipping: 5.00,
        tax: 12.00,
        total: 137.00,
        paymentStatus: "در انتظار",
        paymentMethod: "انتقال بانکی",
        orderStatus: "درحال بررسی",
        orderDate: "1403-10-08",
        notes: "تحویل فوری درخواست شده"
    },
    {
        id: 3,
        orderId: "ORD-1403-0003",
        customerId: 3,
        customerName: "فاطمه حسینی",
        customerEmail: "fateme.hosseini@email.com",
        customerPhone: "+98 934 567 8901",
        customerAddress: "پلاک کاشان، اصفهان",
        items: [
            {
                productId: 3,
                productName: "کاشی تزیینی",
                quantity: 3,
                price: 25.00
            },
            {
                productId: 1,
                productName: "بشقاب سرامیکی اندلسی",
                quantity: 1,
                price: 35.00
            }
        ],
        subtotal: 110.00,
        shipping: 5.00,
        tax: 11.00,
        total: 126.00,
        paymentStatus: "پرداخت شده",
        paymentMethod: "کارت اعتباری",
        orderStatus: "ارسال شده",
        orderDate: "1403-10-09",
        notes: ""
    }
];

const categories = [
    "همه",
    "سرامیک",
    "بافت",
    "تزیینی",
    "جواهرات",
    "دیگر"
];

const orderStatuses = [
    "در انتظار",
    "درحال بررسی",
    "ارسال شده",
    "تحویل داده شده",
    "لغو شده"
];

const paymentStatuses = [
    "در انتظار",
    "پرداخت شده",
    "بازپرداخت شده"
];
