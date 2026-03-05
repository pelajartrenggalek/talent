import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const timeline = {
    pendaftaran: {
        title: "Pendaftaran",
        dateString: "5 – 12 Maret",
        date: dayjs("2026-03-12 23:59:59").tz("Asia/Jakarta").toDate(),
        link: "https://docs.google.com/forms/d/e/1FAIpQLScXxXg9jE8p9RRlYOu2fPM2QCnDCPDDyOS5WrjjtSuZeejk5Q/viewform?usp=publish-editor"
    },
    penilaian: {
        title: "Penilaian Karya",
        dateString: "13 Maret",
        date: dayjs("2026-03-13 23:59:59").tz("Asia/Jakarta").toDate(),
        link: "#"
    },
    pengumumanJuara: {
        title: "Pengumuman Juara",
        dateString: "14 Maret",
        date: dayjs("2026-03-14 23:59:59").tz("Asia/Jakarta").toDate(),
        link: "#"
    }
}