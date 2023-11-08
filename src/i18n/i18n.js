import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
export const locales = {
    en: 'English',
    vi: 'Tiếng Việt'
}
const resources = {
    en: {
        // Gọi là namespace
        translation: {
            "Dashboard": "Dashboard",
            'Inventory': 'Inventory',
            'Customer_one': 'Customer',
            "Customer_other": "Customers",
            'Revenue': 'Revenue',
            'Orders': 'Orders',
            'Language': 'Language',
            'Settings': 'Settings',
            'Post clerk': 'Post clerk',
        }
    },
    vi: {
        // Gọi là namespace
        translation: {
            "Dashboard": "Bảng bộ",
            'Inventory': 'Kho',
            'Customer': 'Khách hàng',
            "Customer_other": "Nhiều khách hàng",
            'Revenue': 'Doanh thu',
            'Orders': 'Đơn hàng',
            'Language': 'Ngôn ngữ',
            'Settings': 'Cài đặt',
            'Post clerk': 'Giao dịch viên',
        }
    }
}
i18next.use(initReactI18next).init({
    resources,
    lg: 'vi',
    fallbackLng: 'vi',
    interpolation: {
        escapeValue: false
    }
})