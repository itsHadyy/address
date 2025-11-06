import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "unitType": "Type of required unit",
      "villa": "Villa",
      "apartment": "Apartment",
      "paymentPlan": "Preferred monthly installment",
      "lessThan100": "Less than 100,000 EGP",
      "range100to200": "100,000 to 200,000 EGP",
      "range200to300": "200,000 to 300,000 EGP",
      "above300": "More than 300,000 EGP",
      "contactInfo": "Contact Information",
      "firstName": "First Name",
      "lastName": "Last Name",
      "phoneNumber": "Phone Number",
      "next": "Next",
      "back": "Back",
      "submit": "Submit",
      "step": "Step",
      "selectOption": "Please select an option",
      "fillAllFields": "Please fill in all required fields",
      "thankYou": "Thank You!",
      "successMessage": "Your information has been submitted successfully. We will contact you soon.",
      "error": "An error occurred. Please try again.",
      "submitAnother": "Submit Another"
    }
  },
  ar: {
    translation: {
      "unitType": "نوع الوحدة المطلوبة",
      "villa": "فيلا",
      "apartment": "شقة",
      "paymentPlan": "القسط الشهري المفضل",
      "lessThan100": "أقل من 100,000 جنيه",
      "range100to200": "من 100,000 إلى 200,000 جنيه",
      "range200to300": "من 200,000 إلى 300,000 جنيه",
      "above300": "أكثر من 300,000 جنيه",
      "contactInfo": "معلومات التواصل",
      "firstName": "الاسم الأول",
      "lastName": "الاسم الأخير",
      "phoneNumber": "رقم الهاتف",
      "next": "التالي",
      "back": "رجوع",
      "submit": "إرسال",
      "step": "خطوة",
      "selectOption": "يرجى تحديد خيار",
      "fillAllFields": "يرجى ملء جميع الحقول المطلوبة",
      "thankYou": "شكراً لك!",
      "successMessage": "تم إرسال معلوماتك بنجاح. سنتواصل معك قريباً.",
      "error": "حدث خطأ. يرجى المحاولة مرة أخرى.",
      "submitAnother": "إرسال نموذج آخر"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

