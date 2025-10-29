document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const elements = {
        pageLangSelect: document.getElementById('page-lang-select'),
        empNameInput: document.getElementById('employee-name'),
        bmsIdInput: document.getElementById('bms-id'),
        nameInput: document.getElementById('referral-name'),
        emailInput: document.getElementById('referral-email'),
        phoneInput: document.getElementById('referral-phone'),
        languageSelect: document.getElementById('referral-language'),
        jobSelect: document.getElementById('referral-job'),
        locationSelect: document.getElementById('referral-location'),
        submitBtn: document.getElementById('submit-btn'),
        form: document.getElementById('referral-form'),
        status: document.getElementById('status')
    };

    // ✅ Simplified translations
    const translations = {
        english: {
            langSelect: "Please select your preferred language",
            empnameLabel: "Employee Name",
            bmsLabel: "BMS Employee ID",
            nameLabel: "Referral's Name",
            emailLabel: "Referral's Email",
            phoneLabel: "Referral's Phone Number",
            languageLabel: "Preferred Language",
            jobLabel: "Preferred Job Role",
            locationLabel: "Preferred Location",
            submit: "Submit Referral",
            success: "✅ Thank you! Your referral has been submitted successfully.",
            error: "⚠️ Please fill out all fields before submitting.",
            sending: "⏳ Submitting your referral...",
            empTitle: "Employee Information",
            refTitle: "Referral Information"
        },
        malay: {
            langSelect: "Sila pilih bahasa pilihan anda",
            bmsLabel: "ID Pekerja BMS",
            nameLabel: "Nama Rakan yang Dirujuk",
            emailLabel: "Emel Rakan yang Dirujuk",
            phoneLabel: "Nombor Telefon Rakan yang Dirujuk",
            languageLabel: "Bahasa Pilihan",
            locationLabel: "Lokasi Pilihan",
            submit: "Hantar Rujukan",
            success: "✅ Terima kasih! Rujukan anda telah dihantar.",
            error: "⚠️ Sila isi semua maklumat sebelum menghantar.",
            sending: "⏳ Menghantar rujukan anda...",
            empnameLabel: "Nama Pekerja", 
            jobLabel: "Jawatan Pilihan",
            empTitle: "Maklumat Pekerja",
            refTitle: "Maklumat Rujukan"
        },
        thai: {
            langSelect: "กรุณาเลือกภาษาที่คุณต้องการ",
            bmsLabel: "รหัสพนักงาน BMS",
            nameLabel: "ชื่อเพื่อนที่แนะนำ",
            emailLabel: "อีเมลของเพื่อนที่แนะนำ",
            phoneLabel: "เบอร์โทรของเพื่อนที่แนะนำ",
            languageLabel: "ภาษาที่ต้องการ",
            locationLabel: "สถานที่ที่ต้องการทำงาน",
            submit: "ส่งแบบฟอร์มแนะนำเพื่อน",
            success: "✅ ขอบคุณ! การแนะนำของคุณถูกส่งเรียบร้อยแล้ว",
            error: "⚠️ กรุณากรอกข้อมูลให้ครบทุกช่องก่อนส่ง",
            sending: "⏳ กำลังส่งข้อมูล...",
            empnameLabel: "ชื่อพนักงาน", 
            jobLabel: "ตำแหน่งงานที่ต้องการ",
            empTitle: "ข้อมูลพนักงาน",
            refTitle: "ข้อมูลผู้แนะนำ"
        },
        mandarin: {
            langSelect: "请选择您的首选语言",
            bmsLabel: "BMS 员工编号",
            nameLabel: "被推荐人姓名",
            emailLabel: "被推荐人邮箱",
            phoneLabel: "被推荐人电话号码",
            languageLabel: "首选语言",
            locationLabel: "首选地点",
            submit: "提交推荐",
            success: "✅ 感谢您的推荐！您的提交已成功。",
            error: "⚠️ 请填写所有字段后再提交。",
            sending: "⏳ 正在提交推荐...",
            empnameLabel: "员工姓名", 
            jobLabel: "首选职位",
            empTitle: "员工信息",
            refTitle: "推荐人信息"
        },
        japanese: {
            langSelect: "希望の言語を選択してください",
            bmsLabel: "BMS社員ID",
            nameLabel: "紹介する友人の名前",
            emailLabel: "紹介する友人のメール",
            phoneLabel: "紹介する友人の電話番号",
            languageLabel: "希望の言語",
            locationLabel: "希望の勤務地",
            submit: "紹介を送信する",
            success: "✅ ご紹介ありがとうございます！送信が完了しました。",
            error: "⚠️ 全ての項目を入力してください。",
            sending: "⏳ 送信中...",
            empnameLabel: "従業員名", 
            jobLabel: "希望する職種",
            empTitle: "従業員情報",
            refTitle: "紹介者情報"
        },
        korean: {
            langSelect: "선호하는 언어를 선택하세요",
            bmsLabel: "BMS 직원 ID",
            nameLabel: "추천 친구 이름",
            emailLabel: "추천 친구 이메일",
            phoneLabel: "추천 친구 전화번호",
            languageLabel: "선호 언어",
            locationLabel: "선호 근무지",
            submit: "추천 제출",
            success: "✅ 감사합니다! 추천이 성공적으로 제출되었습니다.",
            error: "⚠️ 모든 항목을 입력해 주세요.",
            sending: "⏳ 제출 중...",
            empnameLabel: "직원 이름", 
            jobLabel: "선호 직무",
            empTitle: "직원 정보",
            refTitle: "추천인 정보"
        }
    };

    // ✅ Update UI text when language changes
    function updateLanguage(lang) {
        const t = translations[lang];
        document.getElementById('page-lang-label').textContent = t.langSelect;
        document.getElementById('employee-name-label').textContent = t.empnameLabel;
        document.getElementById('bms-label').textContent = t.bmsLabel;
        document.getElementById('name-label').textContent = t.nameLabel;
        document.getElementById('email-label').textContent = t.emailLabel;
        document.getElementById('phone-label').textContent = t.phoneLabel;
        document.getElementById('language-label').textContent = t.languageLabel;
        document.getElementById('job-label').textContent = t.jobLabel;
        document.getElementById('location-label').textContent = t.locationLabel;
        document.getElementById('referrer-title').textContent = t.empTitle;
        document.getElementById('referral-title').textContent = t.refTitle;
        elements.submitBtn.textContent = t.submit;
        elements.status.textContent = "";
    }

    // Default language
    updateLanguage('english');

    // Change text when user selects a new language
    elements.pageLangSelect.addEventListener('change', function () {
        const selectedLang = this.value;
        updateLanguage(selectedLang);
    });

    // ✅ Handle form submission
    elements.form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const lang = elements.pageLangSelect.value;
        const t = translations[lang];
        const flowUrl = "https://d8855a0b6453e4089c94add3719cb2.9c.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/0501d9a5bd06492389b3f34ac9975e9a/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=W2U3vlvLjFQzxxIKiVfXjQ5aEvEAnLOYVfujwkM_QvU";

        const payload = {
            empName: elements.empNameInput.value.trim(),
            bmsId: elements.bmsIdInput.value.trim(),
            name: elements.nameInput.value.trim(),
            email: elements.emailInput.value.trim(),
            phone: elements.phoneInput.value.trim(),
            jobLanguage: elements.languageSelect.value,
            jobRole: elements.jobSelect.value,
            location: elements.locationSelect.value
        };

        // Validation
        if (Object.values(payload).some(v => !v)) {
            elements.status.textContent = t.error;
            elements.status.style.color = "red";
            return;
        }

        // Sending message
        elements.status.textContent = t.sending;
        elements.status.style.color = "orange";

        try {
            const response = await fetch(flowUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error("Network response was not ok");
            elements.status.textContent = t.success;
            elements.status.style.color = "green";
            elements.form.reset();
        } catch (err) {
            console.error(err);
            elements.status.textContent = "❌ Submission failed. Please try again.";
            elements.status.style.color = "red";
        }
    });
});
