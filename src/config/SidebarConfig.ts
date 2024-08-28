import {
    faDoorClosed,
    faHome,
    faRightFromBracket,
    faRunning,
    faShirt,
} from "@fortawesome/free-solid-svg-icons";

export const sidebarConfig = {
    header: {
        logoSrc: "./dimigoin.svg",
        title: "디미고인",
    },
    profile: {
        role: "선생님",
        name: "심호성",
        logoutIcon: faRightFromBracket,
    },
    menus: [
        {
            label: "잔류 관리",
            icon: faRunning,
            active: true,
        },
        {
            label: "세탁 관리",
            icon: faShirt,
            active: false,
        },
        {
            label: "금요귀가 관리",
            icon: faHome,
            active: false,
        },
        {
            label: "잔류외출 관리",
            icon: faDoorClosed,
            active: false,
        },
    ],
    sectionTitle: "시스템 관리",
};
