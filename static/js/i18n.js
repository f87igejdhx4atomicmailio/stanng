/* ===========================================================
   StanNG — bilingual dictionary (fa / en) v1.5.2
   Removed: Clean IP, Non‑TLS
   Added: Info Configs descriptions, JSON subscription link
   =========================================================== */
window.I18N = {
  // ---- brand / generic ----
  brand_name: { fa: 'StanNG', en: 'StanNG' },
  brand_tagline: { fa: 'دروازه‌ی نامرئی به دنیای شبکه', en: 'The invisible gateway to the wizarding net' },
  loading: { fa: 'در حال بارگذاری...', en: 'Loading...' },
  save: { fa: 'ذخیره', en: 'Save' },
  cancel: { fa: 'انصراف', en: 'Cancel' },
  close: { fa: 'بستن', en: 'Close' },
  delete: { fa: 'حذف', en: 'Delete' },
  edit: { fa: 'ویرایش', en: 'Edit' },
  create: { fa: 'ایجاد', en: 'Create' },
  confirm: { fa: 'تأیید', en: 'Confirm' },
  copy: { fa: 'کپی', en: 'Copy' },
  copied: { fa: 'کپی شد!', en: 'Copied!' },
  yes: { fa: 'بله', en: 'Yes' },
  no: { fa: 'خیر', en: 'No' },
  optional: { fa: 'اختیاری', en: 'Optional' },
  unlimited: { fa: 'نامحدود', en: 'Unlimited' },
  active: { fa: 'فعال', en: 'Active' },
  inactive: { fa: 'غیرفعال', en: 'Inactive' },
  expired: { fa: 'منقضی شده', en: 'Expired' },
  never: { fa: 'هرگز', en: 'Never' },

  // ---- setup ----
  setup_title: { fa: 'برپایی اولیه پنل', en: 'Initial Panel Setup' },
  setup_sub: { fa: 'یک نام کاربری و رمز عبور برای دسترسی به پنل خود بسازید', en: 'Create a username & password to access your panel' },
  setup_username_label: { fa: 'نام کاربری', en: 'Username' },
  setup_password_label: { fa: 'رمز عبور', en: 'Password' },
  setup_password_confirm_label: { fa: 'تکرار رمز عبور', en: 'Confirm Password' },
  setup_submit: { fa: 'ساخت حساب و ورود', en: 'Create Account & Enter' },
  setup_username_hint: { fa: 'فقط حروف انگلیسی، عدد و زیرخط (۳ تا ۳۲ کاراکتر)', en: 'Letters, numbers, underscore only (3-32 chars)' },
  setup_password_hint: { fa: 'حداقل ۶ کاراکتر', en: 'At least 6 characters' },
  setup_mismatch: { fa: 'رمزهای عبور یکسان نیستند', en: 'Passwords do not match' },
  setup_done: { fa: 'حساب شما ساخته شد! خوش آمدید 🪄', en: 'Account created! Welcome 🪄' },

  // ---- login ----
  login_title: { fa: 'ورود به پنل', en: 'Panel Login' },
  login_sub: { fa: 'با نام کاربری و رمز عبور خود وارد شوید', en: 'Sign in with your username and password' },
  login_submit: { fa: 'ورود', en: 'Sign In' },
  login_success: { fa: 'خوش آمدید!', en: 'Welcome back!' },
  login_failed: { fa: 'نام کاربری یا رمز عبور اشتباه است', en: 'Invalid username or password' },
  login_locked: { fa: 'تلاش بیش از حد؛ کمی صبر کنید', en: 'Too many attempts; please wait' },

  // ---- sidebar nav ----
  nav_dashboard: { fa: 'داشبورد', en: 'Dashboard' },
  nav_inbounds: { fa: 'کاربران / اینباندها', en: 'Inbounds' },
  nav_traffic: { fa: 'ترافیک', en: 'Traffic' },
  // حذف nav_cleanip
  nav_security: { fa: 'امنیت', en: 'Security' },
  nav_settings: { fa: 'تنظیمات', en: 'Settings' },
  nav_logout: { fa: 'خروج', en: 'Logout' },
  nav_support: { fa: 'پشتیبانی تلگرام', en: 'Telegram Support' },

  // ---- dashboard ----
  dash_welcome: { fa: 'به قلمرو StanNG خوش آمدید', en: 'Welcome to the StanNG realm' },
  dash_cpu: { fa: 'پردازنده', en: 'CPU' },
  dash_ram: { fa: 'حافظه', en: 'Memory' },
  dash_uptime: { fa: 'زمان فعالیت', en: 'Uptime' },
  dash_location: { fa: 'موقعیت سرور', en: 'Server Location' },
  dash_total_traffic: { fa: 'کل ترافیک', en: 'Total Traffic' },
  dash_active_conn: { fa: 'اتصالات فعال', en: 'Active Connections' },
  dash_total_inbounds: { fa: 'تعداد کاربران', en: 'Total Users' },
  dash_upload: { fa: 'آپلود', en: 'Upload' },
  dash_download: { fa: 'دانلود', en: 'Download' },
  dash_hourly_chart: { fa: 'نمودار ترافیک ساعتی', en: 'Hourly Traffic Chart' },
  dash_quick_add: { fa: 'افزودن کاربر جدید', en: 'Add New User' },
  dash_ota_title: { fa: 'به‌روزرسانی پنل', en: 'Panel Update' },
  dash_ota_check: { fa: 'بررسی نسخه جدید', en: 'Check for updates' },
  dash_ota_uptodate: { fa: 'شما از آخرین نسخه استفاده می‌کنید ✔', en: 'You are on the latest version ✔' },
  dash_ota_available: { fa: 'نسخه جدید موجود است:', en: 'New version available:' },
  dash_ota_update_btn: { fa: 'به‌روزرسانی همین الان', en: 'Update Now' },
  dash_ota_update_hint: { fa: 'داده‌ی کاربران (data/db.json) هرگز در این فرآیند دست‌نخورده باقی می‌ماند.', en: 'User data (data/db.json) is never touched during this process.' },
  dash_ota_update_confirm: { fa: 'پنل به نسخه {version} به‌روزرسانی و سرویس چند ثانیه ری‌استارت می‌شود. کاربران و تنظیمات شما حفظ می‌شوند. ادامه می‌دهید؟', en: 'The panel will update to version {version} and restart for a few seconds. Your users and settings are preserved. Continue?' },
  dash_ota_updating: { fa: 'در حال دانلود و اعمال به‌روزرسانی... سرویس به‌زودی ری‌استارت می‌شود', en: 'Downloading and applying the update... the service will restart shortly' },
  dash_ota_done: { fa: 'به‌روزرسانی با موفقیت انجام شد! در حال بارگذاری مجدد...', en: 'Update completed successfully! Reloading...' },
  dash_ota_timeout: { fa: 'سرویس دیر بازگشت؛ لطفاً دستی صفحه را رفرش کنید', en: 'The service took too long to come back; please refresh manually' },

  // ---- inbounds ----
  inb_title: { fa: 'مدیریت کاربران', en: 'User Management' },
  inb_add: { fa: 'کاربر جدید', en: 'New User' },
  inb_name: { fa: 'نام', en: 'Name' },
  inb_quota: { fa: 'حجم مجاز (GB)', en: 'Quota (GB)' },
  inb_expire: { fa: 'اعتبار (روز)', en: 'Expiry (days)' },
  inb_max_conn: { fa: 'حداکثر اتصال همزمان', en: 'Max Connections' },
  inb_max_req: { fa: 'سقف درخواست', en: 'Max Requests' },
  inb_fingerprint: { fa: 'اثر انگشت (Fingerprint)', en: 'Fingerprint' },
  inb_strict_ip: { fa: 'قفل روی اولین IP', en: 'Lock to first IP' },
  inb_note: { fa: 'یادداشت', en: 'Note' },
  inb_status: { fa: 'وضعیت', en: 'Status' },
  inb_usage: { fa: 'مصرف', en: 'Usage' },
  inb_actions: { fa: 'عملیات', en: 'Actions' },
  inb_created: { fa: 'کاربر ساخته شد', en: 'User created' },
  inb_updated: { fa: 'تغییرات ذخیره شد', en: 'Changes saved' },
  inb_deleted: { fa: 'کاربر حذف شد', en: 'User deleted' },
  inb_delete_confirm: { fa: 'آیا از حذف این کاربر مطمئن هستید؟', en: 'Are you sure you want to delete this user?' },
  inb_reset_usage: { fa: 'ریست مصرف', en: 'Reset usage' },
  inb_reset_done: { fa: 'مصرف کاربر ریست شد', en: 'Usage reset done' },
  inb_regenerate: { fa: 'صدور لینک جدید (ابطال قبلی)', en: 'Regenerate link (revoke old)' },
  inb_regenerate_confirm: { fa: 'لینک‌های قبلی این کاربر غیرفعال می‌شوند. ادامه می‌دهید؟', en: 'Previous links for this user will be revoked. Continue?' },
  inb_regenerated: { fa: 'لینک جدید صادر شد', en: 'New link issued' },
  inb_links: { fa: 'لینک‌ها', en: 'Links' },
  inb_qr: { fa: 'کد QR', en: 'QR Code' },
  inb_sub_link: { fa: 'لینک اشتراک (سازگار با v2rayNG)', en: 'Subscription Link (v2rayNG compatible)' },
  inb_sub_link_json: { fa: 'لینک اشتراک JSON', en: 'JSON Subscription Link' },
  inb_status_link: { fa: 'لینک وضعیت (برای کاربر)', en: 'Status Link (for user)' },
  inb_link_tls: { fa: 'کانفیگ TLS (پورت ۴۴۳)', en: 'TLS Config (port 443)' },
  inb_doh_link: { fa: 'آدرس سرور DoH (DNS-over-HTTPS)', en: 'DoH Server URL (DNS-over-HTTPS)' },
  inb_doh_note: {
    fa: 'قابل استفاده در کلاینت‌های v2rayNG / Sing-box و تنظیمات DNS امن مرورگرها',
    en: 'Usable in v2rayNG / Sing-box clients and browser Secure DNS settings'
  },
  // حذف inb_link_nontls, inb_link_addresses
  inb_sub_note: {
    fa: 'لینک اشتراک شامل دو کانفیگ نمایشی (وضعیت مصرف و پیام رایگان) به‌همراه کانفیگ TLS است.',
    en: 'The subscription link includes two display-only configs (usage status and free message) plus the TLS config.'
  },
  inb_info_configs_note: {
    fa: 'لینک اشتراک به‌صورت متن ساده (Plain Text) ارائه می‌شود و شامل موارد زیر است:\n📊 یک کانفیگ نمایشی برای نمایش وضعیت مصرف و اعتبار\n❤️ یک کانفیگ نمایشی با پیام «StanNG is Free ❤️»\n🔗 یک کانفیگ TLS واقعی برای اتصال',
    en: 'The subscription link is provided as plain text and includes:\n📊 A display-only config showing usage and expiry status\n❤️ A display-only config with "StanNG is Free ❤️" message\n🔗 A real TLS config for connection'
  },
  inb_empty: { fa: 'هنوز کاربری اضافه نشده است', en: 'No users added yet' },
  inb_active_devices: { fa: 'دستگاه فعال', en: 'active devices' },
  inb_used_of: { fa: 'از', en: 'of' },
  inb_days_left: { fa: 'روز باقی‌مانده', en: 'days left' },
  inb_no_expire: { fa: 'بدون انقضا', en: 'no expiry' },
  fp_chrome: { fa: 'کروم', en: 'Chrome' },
  fp_ios: { fa: 'آی‌اواس (سافاری)', en: 'iOS (Safari)' },
  fp_firefox: { fa: 'فایرفاکس', en: 'Firefox' },
  fp_random: { fa: 'تصادفی', en: 'Randomized' },
  fp_edge: { fa: 'اج', en: 'Edge' },

  // ---- traffic ----
  traffic_title: { fa: 'گزارش ترافیک', en: 'Traffic Report' },
  traffic_total: { fa: 'مجموع کل', en: 'Grand Total' },
  traffic_per_user: { fa: 'ترافیک به تفکیک کاربر', en: 'Traffic per user' },

  // ---- حذف کامل بخش Clean IP ----
  // کلیدهای cleanip_* حذف شدند

  // ---- security ----
  sec_title: { fa: 'امنیت حساب', en: 'Account Security' },
  sec_change_pass: { fa: 'تغییر نام کاربری / رمز عبور', en: 'Change Username / Password' },
  sec_old_pass: { fa: 'رمز عبور فعلی', en: 'Current Password' },
  sec_new_user: { fa: 'نام کاربری جدید', en: 'New Username' },
  sec_new_pass: { fa: 'رمز عبور جدید', en: 'New Password' },
  sec_new_pass_confirm: { fa: 'تکرار رمز عبور جدید', en: 'Confirm New Password' },
  sec_leave_blank: { fa: 'اگر نمی‌خواهید تغییر کند خالی بگذارید', en: 'Leave blank to keep unchanged' },
  sec_updated: { fa: 'اطلاعات امنیتی به‌روز شد', en: 'Security info updated' },
  sec_wrong_old: { fa: 'رمز عبور فعلی اشتباه است', en: 'Current password is incorrect' },

  // ---- settings ----
  settings_title: { fa: 'تنظیمات عمومی', en: 'General Settings' },
  settings_public_domain: { fa: 'دامنه عمومی (اختیاری، خالی = تشخیص خودکار)', en: 'Public Domain (optional, blank = auto-detect)' },
  settings_keepalive: { fa: 'سیستم بیدارباش (Keep-Alive)', en: 'Keep-Alive System' },
  settings_keepalive_hint: { fa: 'هر ۱۰ دقیقه یک بار پینگ داخلی برای جلوگیری از خواب رفتن سرویس', en: 'Pings itself every 10 minutes to prevent free-tier sleep' },
  settings_ota_repo: { fa: 'مخزن گیت‌هاب برای آپدیت', en: 'GitHub Repo for Updates' },
  settings_sound: { fa: 'جلوه‌های صوتی', en: 'Sound Effects' },
  settings_theme: { fa: 'پوسته', en: 'Theme' },
  settings_theme_dark: { fa: 'تاریک', en: 'Dark' },
  settings_theme_light: { fa: 'روشن', en: 'Light' },
  settings_saved: { fa: 'تنظیمات ذخیره شد', en: 'Settings saved' },
  settings_advanced_title: { fa: 'تنظیمات پیشرفته کانفیگ', en: 'Advanced Config Settings' },
  settings_advanced_hint: { fa: 'این مقادیر پیش‌فرض هنگام ساخت کانفیگ‌های جدید برای همه کاربران اعمال می‌شوند.', en: 'These defaults apply to newly generated configs for all users.' },
  settings_alpn: { fa: 'ALPN پیش‌فرض', en: 'Default ALPN' },
  settings_sni_override: { fa: 'SNI اختصاصی (Domain Fronting)', en: 'Custom SNI (Domain Fronting)' },
  settings_sni_override_hint: { fa: 'اگر خالی باشد، دامنه اصلی به‌عنوان SNI استفاده می‌شود.', en: 'If left blank, the main domain is used as SNI.' },
  settings_fragment: { fa: 'حالت Fragment (بایپس DPI)', en: 'Fragment Mode (DPI Bypass)' },
  settings_fragment_packets: { fa: 'Packets', en: 'Packets' },
  settings_fragment_length: { fa: 'Length', en: 'Length' },
  settings_fragment_interval: { fa: 'Interval', en: 'Interval' },

  // ---- status page (public) ----
  status_page_title: { fa: 'وضعیت اشتراک', en: 'Subscription Status' },
  status_usage: { fa: 'میزان مصرف', en: 'Usage' },
  status_devices: { fa: 'دستگاه‌های متصل', en: 'Connected Devices' },
  status_expiry: { fa: 'تاریخ انقضا', en: 'Expiry' },
  status_not_found: { fa: 'اشتراکی با این شناسه یافت نشد', en: 'No subscription found with this ID' },
  status_disabled: { fa: 'این اشتراک غیرفعال یا منقضی شده است', en: 'This subscription is disabled or expired' },

  // ---- misc/tooltips ----
  tip_fragment: { fa: 'فرگمنت به دور زدن فیلترینگ DPI کمک می‌کند', en: 'Fragment helps bypass DPI-based filtering' },
  copy_link: { fa: 'کپی لینک', en: 'Copy link' },
  refresh: { fa: 'بروزرسانی', en: 'Refresh' },
  search_placeholder: { fa: 'جستجوی کاربر...', en: 'Search users...' },
};
