# رفع الموقع إلى GitHub

هذه الحزمة مهيأة للرفع من نسخة محلية. لا تستخدم زر **Upload files** في موقع GitHub، لأن ملف الفيديو `assets/saudi-statistics-forum-2025.mp4` يتجاوز حد الرفع من المتصفح، لكنه أقل من حد Git العادي.

## الطريقة الموصى بها: GitHub Desktop

1. افتح GitHub Desktop.
2. اختر **File → Add local repository** وحدد مجلد `github-package`.
3. إذا ظهر أن المجلد ليس مستودعًا، اختر **Create a repository here**.
4. اكتب وصفًا مثل `Initial event website prototype` ثم نفّذ **Commit to main**.
5. اختر **Publish repository** أو اربطه بالمستودع المطلوب ثم **Push origin**.

لا تحذف ملفات الفيديو المستخدمة من مجلد `assets`، وإلا ستتوقف خلفية البانر المتحركة.
